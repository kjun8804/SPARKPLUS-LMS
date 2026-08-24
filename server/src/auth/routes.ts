import { randomBytes } from "node:crypto";
import { Router } from "express";
import { OAuth2Client } from "google-auth-library";
import type { AppConfig } from "../config.js";
import type { DatabasePool } from "../database/pool.js";
import { isAllowedGoogleAccount } from "./policy.js";
import { connectGoogleUser } from "./repository.js";
import { requireUser } from "./middleware.js";

export function createAuthRouter(config: AppConfig, pool: DatabasePool) {
  const router = Router();
  const oauth = new OAuth2Client(config.GOOGLE_CLIENT_ID, config.GOOGLE_CLIENT_SECRET, config.GOOGLE_REDIRECT_URI);

  router.get("/google", async (request, response, next) => {
    if (!config.GOOGLE_CLIENT_ID || !config.GOOGLE_CLIENT_SECRET) {
      return response.status(503).json({ data: null, error: { code: "GOOGLE_OAUTH_NOT_CONFIGURED" } });
    }
    try {
      const state = randomBytes(24).toString("hex");
      request.session.oauthState = state;
      // Vercel may finish the serverless invocation immediately after redirecting.
      // Persist the OAuth state before leaving for Google so the callback can
      // reliably validate it even when it is handled by another instance.
      await new Promise<void>((resolve, reject) => request.session.save((error) => error ? reject(error) : resolve()));
      console.info(JSON.stringify({ level: "info", message: "oauth_state_saved", sessionId: request.sessionID.slice(0, 8) }));
      response.redirect(oauth.generateAuthUrl({
        access_type: "online",
        scope: ["openid", "email", "profile"],
        hd: config.GOOGLE_ALLOWED_DOMAIN,
        state,
        prompt: "select_account",
      }));
    } catch (error) {
      next(error);
    }
  });

  router.get("/google/callback", async (request, response, next) => {
    try {
      const code = typeof request.query.code === "string" ? request.query.code : "";
      const state = typeof request.query.state === "string" ? request.query.state : "";
      if (!code || !state || state !== request.session.oauthState) {
        console.warn(JSON.stringify({
          level: "warn",
          message: "oauth_state_invalid",
          sessionId: request.sessionID.slice(0, 8),
          hasCode: Boolean(code),
          hasReturnedState: Boolean(state),
          hasStoredState: Boolean(request.session.oauthState),
        }));
        return response.status(400).json({ data: null, error: { code: "OAUTH_STATE_INVALID" } });
      }
      delete request.session.oauthState;

      const { tokens } = await oauth.getToken(code);
      if (!tokens.id_token) return response.status(401).json({ data: null, error: { code: "OAUTH_ID_TOKEN_MISSING" } });
      const ticket = await oauth.verifyIdToken({ idToken: tokens.id_token, audience: config.GOOGLE_CLIENT_ID });
      const payload = ticket.getPayload();
      if (!payload?.email || !payload.sub || !isAllowedGoogleAccount(payload.email, payload.hd, config.GOOGLE_ALLOWED_DOMAIN)) {
        return response.status(403).json({ data: null, error: { code: "AUTH_DOMAIN_NOT_ALLOWED" } });
      }

      const user = await connectGoogleUser(pool, payload.email, payload.sub, config.INITIAL_ADMIN_EMAIL);
      if (!user) return response.status(403).json({ data: null, error: { code: "AUTH_USER_NOT_REGISTERED" } });
      request.session.userId = user.id;
      await new Promise<void>((resolve, reject) => request.session.save((error) => error ? reject(error) : resolve()));
      response.redirect(config.APP_ORIGIN);
    } catch (error) {
      next(error);
    }
  });

  router.post("/logout", (request, response, next) => {
    request.session.destroy((error) => {
      if (error) return next(error);
      response.clearCookie("sparkplus.sid");
      response.status(204).end();
    });
  });

  router.get("/me", requireUser(pool), async (request, response, next) => {
    try {
      const leaders = await pool.query(
        `SELECT organization_id AS "organizationId", include_descendants AS "includeDescendants"
         FROM organization_leaders WHERE user_id = $1`,
        [request.currentUser!.id],
      );
      response.json({ data: { user: request.currentUser, leaderScopes: leaders.rows }, error: null });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
