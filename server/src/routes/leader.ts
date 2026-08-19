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

  return router;
}
