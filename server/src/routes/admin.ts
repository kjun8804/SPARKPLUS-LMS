import { Router } from "express";
import type { DatabasePool } from "../database/pool.js";
import { requireRole, requireUser } from "../auth/middleware.js";
import { buildOrganizationTree } from "../auth/policy.js";
import type { OrganizationRecord } from "../types.js";

export function createAdminRouter(pool: DatabasePool) {
  const router = Router();
  router.use(requireUser(pool), requireRole("ADMIN"));

  router.get("/users", async (_request, response, next) => {
    try {
      const result = await pool.query(
        `SELECT u.id, u.employee_number AS "employeeNumber", u.name, u.email,
                u.organization_id AS "organizationId", o.name AS "organizationName",
                u.position, u.role, u.status, u.last_login_at AS "lastLoginAt"
         FROM users u LEFT JOIN organizations o ON o.id = u.organization_id
         WHERE u.status <> 'DELETED'
         ORDER BY u.name ASC`,
      );
      response.json({ data: result.rows, error: null });
    } catch (error) {
      next(error);
    }
  });

  router.get("/organizations/tree", async (_request, response, next) => {
    try {
      const result = await pool.query<{
        id: string; name: string; parentId: string | null; depth: number; status: OrganizationRecord["status"];
      }>(`SELECT id, name, parent_id AS "parentId", depth, status FROM organizations ORDER BY path`);
      response.json({ data: buildOrganizationTree(result.rows), error: null });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
