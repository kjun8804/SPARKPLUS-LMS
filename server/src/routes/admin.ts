import { Router } from "express";
import { z } from "zod";
import type { DatabasePool } from "../database/pool.js";
import { requireRole, requireUser } from "../auth/middleware.js";
import { buildOrganizationTree } from "../auth/policy.js";
import type { OrganizationRecord } from "../types.js";
import type { AppConfig } from "../config.js";
import { syncGoogleArchive } from "../google/archive.js";

const companyEmail = z.string().trim().toLowerCase().email().refine((value) => value.endsWith("@sparkplus.co"));
const userInput = z.object({
  employeeNumber: z.string().trim().min(1).max(50), name: z.string().trim().min(1).max(100), email: companyEmail,
  organizationId: z.string().uuid().nullable().optional(), position: z.string().trim().max(100).nullable().optional(),
  role: z.enum(["ADMIN", "LEARNER"]).default("LEARNER"), status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});
const userPatch = userInput.partial().refine((value) => Object.keys(value).length > 0);
const organizationInput = z.object({
  name: z.string().trim().min(1).max(120), parentId: z.string().uuid().nullable().optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});
const organizationPatch = organizationInput.partial().refine((value) => Object.keys(value).length > 0);
const importInput = z.object({ rows: z.array(z.object({
  employeeNumber: z.string().trim().min(1).max(50), name: z.string().trim().min(1).max(100), email: companyEmail,
  organizationPath: z.string().trim().min(1), position: z.string().trim().max(100).optional().default(""),
  role: z.enum(["ADMIN", "LEARNER"]).optional().default("LEARNER"), status: z.enum(["ACTIVE", "INACTIVE"]).optional().default("ACTIVE"),
})).min(1).max(500) });

const invalid = (response: any, error: z.ZodError) => response.status(400).json({ data: null, error: { code: "VALIDATION_ERROR", details: error.issues } });
async function audit(pool: DatabasePool, actor: string, action: string, type: string, id: string | null, before: unknown, after: unknown, ip?: string) {
  await pool.query(`INSERT INTO audit_logs (actor_user_id, action, target_type, target_id, before_data, after_data, ip_address)
    VALUES ($1,$2,$3,$4,$5,$6,$7)`, [actor, action, type, id, before ? JSON.stringify(before) : null, after ? JSON.stringify(after) : null, ip || null]);
}

export function createAdminRouter(pool: DatabasePool, config?: AppConfig) {
  const router = Router();
  router.use(requireUser(pool), requireRole("ADMIN"));

  router.get("/dashboard", async (_request, response, next) => { try { const result=await pool.query(`SELECT (SELECT COUNT(*) FROM courses WHERE deleted_at IS NULL AND status='OPEN')::int courses,(SELECT COUNT(*) FROM enrollments WHERE status<>'CANCELLED')::int learners,(SELECT COUNT(*) FROM enrollments WHERE status='COMPLETED')::int completed,COALESCE((SELECT ROUND(AVG(progress)) FROM enrollments WHERE status<>'CANCELLED'),0)::int progress,COALESCE((SELECT ROUND(100.0*COUNT(*) FILTER(WHERE status='COMPLETED')/NULLIF(COUNT(*),0)) FROM enrollments WHERE status<>'CANCELLED'),0)::int AS "completionRate",(SELECT COUNT(*) FROM enrollments WHERE required AND status<>'COMPLETED' AND status<>'CANCELLED')::int AS "requiredIncomplete"`); response.json({data:result.rows[0],error:null}); } catch(error){next(error);} });

  router.get("/users", async (_request, response, next) => {
    try {
      const result = await pool.query(`SELECT u.id, u.employee_number AS "employeeNumber", u.name, u.email,
        u.organization_id AS "organizationId", o.name AS "organizationName", u.position, u.role, u.status,
        u.last_login_at AS "lastLoginAt" FROM users u LEFT JOIN organizations o ON o.id=u.organization_id
        WHERE u.status<>'DELETED' ORDER BY u.name`);
      response.json({ data: result.rows, error: null });
    } catch (error) { next(error); }
  });

  router.post("/users", async (request, response, next) => {
    const parsed = userInput.safeParse(request.body); if (!parsed.success) return invalid(response, parsed.error);
    try {
      const value = parsed.data;
      const result = await pool.query(`INSERT INTO users (employee_number,name,email,organization_id,position,role,status)
        VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, employee_number AS "employeeNumber", name, email,
        organization_id AS "organizationId", position, role, status`,
        [value.employeeNumber.toUpperCase(), value.name, value.email, value.organizationId || null, value.position || null, value.role, value.status]);
      await audit(pool, request.currentUser!.id, "USER_CREATED", "USER", result.rows[0].id, null, result.rows[0], request.ip);
      response.status(201).json({ data: result.rows[0], error: null });
    } catch (error: any) {
      if (error?.code === "23505") return response.status(409).json({ data: null, error: { code: "USER_ALREADY_EXISTS" } });
      if (error?.code === "23503") return response.status(400).json({ data: null, error: { code: "ORGANIZATION_NOT_FOUND" } });
      next(error);
    }
  });

  router.patch("/users/:id", async (request, response, next) => {
    const parsed = userPatch.safeParse(request.body); if (!parsed.success) return invalid(response, parsed.error);
    try {
      const before = await pool.query(`SELECT * FROM users WHERE id=$1 AND status<>'DELETED'`, [request.params.id]);
      if (!before.rowCount) return response.status(404).json({ data: null, error: { code: "USER_NOT_FOUND" } });
      const value = parsed.data;
      const result = await pool.query(`UPDATE users SET employee_number=COALESCE($2,employee_number), name=COALESCE($3,name),
        email=COALESCE($4,email), organization_id=CASE WHEN $5::boolean THEN $6::uuid ELSE organization_id END,
        position=CASE WHEN $7::boolean THEN $8 ELSE position END, role=COALESCE($9,role), status=COALESCE($10,status),
        updated_at=now() WHERE id=$1 AND status<>'DELETED' RETURNING id, employee_number AS "employeeNumber", name,
        email, organization_id AS "organizationId", position, role, status`,
        [request.params.id, value.employeeNumber?.toUpperCase() || null, value.name || null, value.email || null,
          "organizationId" in value, value.organizationId || null, "position" in value, value.position || null, value.role || null, value.status || null]);
      await audit(pool, request.currentUser!.id, "USER_UPDATED", "USER", request.params.id, before.rows[0], result.rows[0], request.ip);
      response.json({ data: result.rows[0], error: null });
    } catch (error: any) {
      if (error?.code === "23505") return response.status(409).json({ data: null, error: { code: "USER_ALREADY_EXISTS" } });
      if (error?.code === "23503") return response.status(400).json({ data: null, error: { code: "ORGANIZATION_NOT_FOUND" } });
      next(error);
    }
  });

  router.delete("/users/:id", async (request, response, next) => {
    try {
      if (request.params.id === request.currentUser!.id) return response.status(400).json({ data: null, error: { code: "CANNOT_DELETE_SELF" } });
      const result = await pool.query(`UPDATE users SET status='DELETED', deleted_at=now(), google_subject=NULL, updated_at=now()
        WHERE id=$1 AND status<>'DELETED' RETURNING id, employee_number AS "employeeNumber", name, email`, [request.params.id]);
      if (!result.rowCount) return response.status(404).json({ data: null, error: { code: "USER_NOT_FOUND" } });
      await audit(pool, request.currentUser!.id, "USER_DELETED", "USER", request.params.id, result.rows[0], null, request.ip);
      response.status(204).end();
    } catch (error) { next(error); }
  });

  router.post("/users/import", async (request, response, next) => {
    const parsed = importInput.safeParse(request.body); if (!parsed.success) return invalid(response, parsed.error);
    const client = await pool.connect();
    try {
      const organizations = await client.query(`SELECT id,name,parent_id AS "parentId" FROM organizations WHERE status='ACTIVE'`);
      const byId = new Map(organizations.rows.map((item) => [item.id, item]));
      const pathFor = (item: any): string => item.parentId ? `${pathFor(byId.get(item.parentId))} > ${item.name}` : item.name;
      const byPath = new Map(organizations.rows.map((item) => [pathFor(item), item.id]));
      const numbers = new Set<string>(), emails = new Set<string>();
      const errors: Array<{ row: number; code: string }> = [];
      parsed.data.rows.forEach((row, index) => {
        const number = row.employeeNumber.toUpperCase();
        if (numbers.has(number)) errors.push({ row: index + 2, code: "DUPLICATE_EMPLOYEE_NUMBER_IN_FILE" });
        if (emails.has(row.email)) errors.push({ row: index + 2, code: "DUPLICATE_EMAIL_IN_FILE" });
        if (!byPath.has(row.organizationPath)) errors.push({ row: index + 2, code: "ORGANIZATION_PATH_NOT_FOUND" });
        numbers.add(number); emails.add(row.email);
      });
      if (errors.length) return response.status(400).json({ data: null, error: { code: "IMPORT_VALIDATION_FAILED", details: errors } });
      await client.query("BEGIN");
      for (const row of parsed.data.rows) await client.query(`INSERT INTO users
        (employee_number,name,email,organization_id,position,role,status) VALUES ($1,$2,$3,$4,$5,$6,$7)
        ON CONFLICT (employee_number) DO UPDATE SET name=EXCLUDED.name,email=EXCLUDED.email,organization_id=EXCLUDED.organization_id,
        position=EXCLUDED.position,role=EXCLUDED.role,status=EXCLUDED.status,updated_at=now()`,
        [row.employeeNumber.toUpperCase(), row.name, row.email, byPath.get(row.organizationPath), row.position || null, row.role, row.status]);
      await client.query("COMMIT");
      await audit(pool, request.currentUser!.id, "USERS_IMPORTED", "USER_IMPORT", null, null, { count: parsed.data.rows.length }, request.ip);
      response.json({ data: { imported: parsed.data.rows.length }, error: null });
    } catch (error: any) {
      await client.query("ROLLBACK").catch(() => undefined);
      if (error?.code === "23505") return response.status(409).json({ data: null, error: { code: "IMPORT_CONFLICT" } });
      next(error);
    } finally { client.release(); }
  });

  router.get("/organizations/tree", async (_request, response, next) => {
    try {
      const result = await pool.query<{ id: string; name: string; parentId: string | null; depth: number; status: OrganizationRecord["status"] }>(
        `SELECT id,name,parent_id AS "parentId",depth,status FROM organizations ORDER BY path`);
      response.json({ data: buildOrganizationTree(result.rows), error: null });
    } catch (error) { next(error); }
  });

  router.post("/organizations", async (request, response, next) => {
    const parsed = organizationInput.safeParse(request.body); if (!parsed.success) return invalid(response, parsed.error);
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const parent = parsed.data.parentId ? await client.query(`SELECT id,depth,path FROM organizations WHERE id=$1 AND status='ACTIVE' FOR UPDATE`, [parsed.data.parentId]) : null;
      if (parsed.data.parentId && !parent?.rowCount) { await client.query("ROLLBACK"); return response.status(400).json({ data: null, error: { code: "PARENT_ORGANIZATION_NOT_FOUND" } }); }
      const depth = parent?.rows[0].depth ? parent.rows[0].depth + 1 : 1;
      if (depth > 3) { await client.query("ROLLBACK"); return response.status(400).json({ data: null, error: { code: "ORGANIZATION_DEPTH_EXCEEDED" } }); }
      const id = (await client.query(`SELECT gen_random_uuid() AS id`)).rows[0].id;
      const path = parent?.rows[0].path ? `${parent.rows[0].path}${id}/` : `/${id}/`;
      const result = await client.query(`INSERT INTO organizations (id,name,parent_id,depth,path,status) VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING id,name,parent_id AS "parentId",depth,status`, [id, parsed.data.name, parsed.data.parentId || null, depth, path, parsed.data.status]);
      await client.query("COMMIT");
      await audit(pool, request.currentUser!.id, "ORGANIZATION_CREATED", "ORGANIZATION", id, null, result.rows[0], request.ip);
      response.status(201).json({ data: result.rows[0], error: null });
    } catch (error: any) {
      await client.query("ROLLBACK").catch(() => undefined);
      if (error?.code === "23505") return response.status(409).json({ data: null, error: { code: "ORGANIZATION_ALREADY_EXISTS" } });
      next(error);
    } finally { client.release(); }
  });

  router.patch("/organizations/:id", async (request, response, next) => {
    const parsed = organizationPatch.safeParse(request.body); if (!parsed.success) return invalid(response, parsed.error);
    try {
      const result = await pool.query(`UPDATE organizations SET name=COALESCE($2,name),status=COALESCE($3,status),updated_at=now()
        WHERE id=$1 RETURNING id,name,parent_id AS "parentId",depth,status`, [request.params.id, parsed.data.name || null, parsed.data.status || null]);
      if (!result.rowCount) return response.status(404).json({ data: null, error: { code: "ORGANIZATION_NOT_FOUND" } });
      await audit(pool, request.currentUser!.id, "ORGANIZATION_UPDATED", "ORGANIZATION", request.params.id, null, result.rows[0], request.ip);
      response.json({ data: result.rows[0], error: null });
    } catch (error: any) {
      if (error?.code === "23505") return response.status(409).json({ data: null, error: { code: "ORGANIZATION_ALREADY_EXISTS" } });
      next(error);
    }
  });

  router.get("/users/:id/leader-scopes", async (request, response, next) => {
    try { const result=await pool.query(`SELECT organization_id AS "organizationId",include_descendants AS "includeDescendants" FROM organization_leaders WHERE user_id=$1`,[request.params.id]); response.json({data:result.rows,error:null}); }
    catch(error){next(error);}
  });
  router.put("/users/:id/leader-scopes", async (request, response, next) => {
    const parsed=z.object({organizationIds:z.array(z.string().uuid()).max(50)}).safeParse(request.body);
    if(!parsed.success)return invalid(response,parsed.error);
    const client=await pool.connect();try{await client.query("BEGIN");await client.query(`DELETE FROM organization_leaders WHERE user_id=$1`,[request.params.id]);for(const organizationId of parsed.data.organizationIds)await client.query(`INSERT INTO organization_leaders(user_id,organization_id,created_by) VALUES($1,$2,$3)`,[request.params.id,organizationId,request.currentUser!.id]);await client.query("COMMIT");response.json({data:{organizationIds:parsed.data.organizationIds},error:null});}catch(error){await client.query("ROLLBACK");next(error);}finally{client.release();}
  });

  router.get("/archive/status", async (_request, response, next) => {
    try {
      const latest = await pool.query(`SELECT action,after_data AS "afterData",created_at AS "createdAt" FROM audit_logs
        WHERE action IN ('GOOGLE_ARCHIVE_SYNCED','GOOGLE_ARCHIVE_FAILED') ORDER BY created_at DESC LIMIT 1`);
      response.json({ data: { configured: Boolean(config?.GOOGLE_SERVICE_ACCOUNT_JSON && config.GOOGLE_SHEET_ID && config.GOOGLE_DRIVE_ROOT_FOLDER_ID), latest: latest.rows[0] || null }, error: null });
    } catch (error) { next(error); }
  });

  router.post("/archive/sync", async (request, response, next) => {
    if (!config) return response.status(503).json({ data: null, error: { code: "GOOGLE_ARCHIVE_NOT_CONFIGURED" } });
    try {
      const result = await syncGoogleArchive(config, pool);
      await audit(pool, request.currentUser!.id, "GOOGLE_ARCHIVE_SYNCED", "GOOGLE_ARCHIVE", null, null, result, request.ip);
      response.json({ data: result, error: null });
    } catch (error: any) {
      await audit(pool, request.currentUser!.id, "GOOGLE_ARCHIVE_FAILED", "GOOGLE_ARCHIVE", null, null, { message: error?.message || "UNKNOWN" }, request.ip).catch(() => undefined);
      if (error?.message === "GOOGLE_ARCHIVE_NOT_CONFIGURED") return response.status(503).json({ data: null, error: { code: error.message } });
      next(error);
    }
  });
  return router;
}
