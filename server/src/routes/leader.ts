import { Router } from "express";
import type { DatabasePool } from "../database/pool.js";
import { requireUser } from "../auth/middleware.js";

export function createLeaderRouter(pool: DatabasePool) {
  const router = Router();
  router.use(requireUser(pool));

  router.get("/organizations", async (request, response, next) => {
    try {
      const result = await pool.query(
        `SELECT o.id, o.name, o.parent_id AS "parentId", ol.include_descendants AS "includeDescendants"
         FROM organization_leaders ol
         JOIN organizations o ON o.id = ol.organization_id
         WHERE ol.user_id = $1 AND o.status = 'ACTIVE'
         ORDER BY o.path`,
        [request.currentUser!.id],
      );
      if (!result.rowCount) return response.status(403).json({ data: null, error: { code: "FORBIDDEN_ORGANIZATION_SCOPE" } });
      response.json({ data: result.rows, error: null });
    } catch (error) {
      next(error);
    }
  });

  router.get("/learning-status", async (request, response, next) => {
    try {
      const scope = await pool.query(`SELECT o.path FROM organization_leaders ol JOIN organizations o ON o.id=ol.organization_id WHERE ol.user_id=$1`, [request.currentUser!.id]);
      if (!scope.rowCount) return response.status(403).json({ data: null, error: { code: "FORBIDDEN_ORGANIZATION_SCOPE" } });
      const paths = scope.rows.map((row) => row.path);
      const result = await pool.query(`SELECT u.id,u.employee_number AS "employeeNumber",u.name,u.email,o.name AS organization,u.position,
        COUNT(e.id)::int AS "courseCount",COUNT(e.id) FILTER(WHERE e.status='COMPLETED')::int AS completed,
        COALESCE(ROUND(AVG(e.progress)),0)::int AS progress
        FROM users u JOIN organizations o ON o.id=u.organization_id LEFT JOIN enrollments e ON e.user_id=u.id
        WHERE u.status='ACTIVE' AND o.path LIKE ANY($1::text[]) GROUP BY u.id,o.name ORDER BY o.name,u.name`, [paths.map((path) => `${path}%`)]);
      response.json({ data: result.rows, error: null });
    } catch (error) { next(error); }
  });

  return router;
}
