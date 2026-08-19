import { loadConfig } from "./config.js";
import { createPool } from "./database/pool.js";
import { createApp } from "./app.js";

const config = loadConfig();
const pool = createPool(config.DATABASE_URL);
const app = createApp(config, pool);

const server = app.listen(config.PORT, () => {
  console.info(`SPARKPLUS LMS API listening on http://localhost:${config.PORT}`);
});

async function shutdown(signal: string) {
  console.info(`${signal} received, shutting down`);
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
}

process.on("SIGINT", () => void shutdown("SIGINT"));
process.on("SIGTERM", () => void shutdown("SIGTERM"));
