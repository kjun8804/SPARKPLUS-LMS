import type { NextFunction, Request, Response } from "express";
import type { DatabasePool } from "../database/pool.js";
import type { AuthenticatedUser, UserRole } from "../types.js";
import { findUserById } from "./repository.js";
import { hasRole } from "./policy.js";

declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthenticatedUser;
    }
  }
}

export function requireUser(pool: DatabasePool) {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const userId = request.session.userId;
      if (!userId) return response.status(401).json({ data: null, error: { code: "UNAUTHENTICATED" } });
      const user = await findUserById(pool, userId);
      if (!user || user.status !== "ACTIVE") {
        request.session.destroy(() => undefined);
        return response.status(401).json({ data: null, error: { code: "AUTH_USER_INACTIVE" } });
      }
      request.currentUser = user;
      next();
    } catch (error) {
      next(error);
    }
  };
}

export function requireRole(...roles: UserRole[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.currentUser || !hasRole(request.currentUser, roles)) {
      return response.status(403).json({ data: null, error: { code: "FORBIDDEN_ROLE" } });
    }
    next();
  };
}
