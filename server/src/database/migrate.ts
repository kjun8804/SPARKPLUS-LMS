import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { loadConfig } from "../config.js";
import { createPool } from "./pool.js";

export async function migrate() {
  const config = loadConfig();
  const pool = createPool(config.DATABASE_URL);
  const directory = path.join(path.dirname(fileURLToPath(import.meta.url)), "migrations");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name text PRIMARY KEY,
      applied_at timestamptz NOT NULL DEFAULT now()
    )
  `);

  const files = (await readdir(directory)).filter((file) => file.endsWith(".sql")).sort();

  try {
    for (const file of files) {
      const applied = await pool.query("SELECT 1 FROM schema_migrations WHERE name = $1", [file]);
      if (applied.rowCount) continue;

      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        await client.query(await readFile(path.join(directory, file), "utf8"));
        await client.query("INSERT INTO schema_migrations(name) VALUES ($1)", [file]);
        await client.query("COMMIT");
        console.info(`Applied migration: ${file}`);
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      } finally {
        client.release();
      }
    }
  } finally {
    await pool.end();
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  migrate().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
