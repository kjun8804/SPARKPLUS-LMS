import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import type { AppConfig } from "./config.js";
import type { DatabasePool } from "./database/pool.js";
import { createAuthRouter } from "./auth/routes.js";
import { createAdminRouter } from "./routes/admin.js";
import { createLeaderRouter } from "./routes/leader.js";
import { createCoursesRouter } from "./routes/courses.js";
import { createLearningRouter } from "./routes/learning.js";
import { createAdminRewardsRouter, createRewardsRouter } from "./routes/rewards.js";

interface AppOptions {
  sessionStore?: session.Store;
}

export function createApp(config: AppConfig, pool: DatabasePool, options: AppOptions = {}) {
  const app = express();
  const PgStore = connectPgSimple(session);
  const store = options.sessionStore ?? new PgStore({ pool, tableName: "user_sessions", createTableIfMissing: true });

  app.set("trust proxy", config.NODE_ENV === "production" ? 1 : 0);
  app.use(cors({ origin: config.APP_ORIGIN, credentials: true }));
  app.use(express.json({ limit: "1mb" }));
  app.use(session({
    name: "sparkplus.sid",
    store,
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: config.NODE_ENV === "production",
      maxAge: 8 * 60 * 60 * 1000,
    },
  }));

  app.get(["/health", "/api/health"], async (_request, response, next) => {
    try {
      await pool.query("SELECT 1");
      response.json({ data: { status: "ok" }, error: null });
    } catch (error) {
      next(error);
    }
  });

  app.use("/api/v1/auth", createAuthRouter(config, pool));
  app.use("/api/v1/admin", createAdminRouter(pool, config));
  app.use("/api/v1/leader", createLeaderRouter(pool));
  app.use("/api/v1/courses", createCoursesRouter(pool));
  app.use("/api/v1/learning", createLearningRouter(pool, config));
  app.use("/api/v1/rewards", createRewardsRouter(pool));
  app.use("/api/v1/admin/rewards", createAdminRewardsRouter(pool));

  app.use((_request, response) => response.status(404).json({ data: null, error: { code: "NOT_FOUND" } }));

  const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
    console.error(error);
    response.status(500).json({ data: null, error: { code: "INTERNAL_SERVER_ERROR" } });
  };
  app.use(errorHandler);

  return app;
}
