import "dotenv/config";
import { z } from "zod";

const environmentSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
  APP_ORIGIN: z.url().default("http://localhost:5173"),
  DATABASE_URL: z.string().min(1),
  SESSION_SECRET: z.string().min(32),
  GOOGLE_CLIENT_ID: z.string().optional().default(""),
  GOOGLE_CLIENT_SECRET: z.string().optional().default(""),
  GOOGLE_REDIRECT_URI: z.url().default("http://localhost:4000/api/v1/auth/google/callback"),
  GOOGLE_ALLOWED_DOMAIN: z.string().min(1).default("sparkplus.co"),
  INITIAL_ADMIN_EMAIL: z.email().default("jun.kang@sparkplus.co"),
});

export type AppConfig = z.infer<typeof environmentSchema>;

export function loadConfig(environment: NodeJS.ProcessEnv = process.env): AppConfig {
  return environmentSchema.parse(environment);
}
