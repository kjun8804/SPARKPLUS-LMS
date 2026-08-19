import { fileURLToPath } from "node:url";
import { loadConfig } from "../config.js";
import { createPool } from "./pool.js";

function nameFromEmail(email: string) {
  return email
    .split("@")[0]
    ?.split(/[._-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ") || "Initial Admin";
}

export async function seedInitialAdmin() {
  const config = loadConfig();
  const pool = createPool(config.DATABASE_URL);
  const email = config.INITIAL_ADMIN_EMAIL.trim().toLowerCase();

  try {
    await pool.query(
      `INSERT INTO users(employee_number, name, email, role, status)
       VALUES ($1, $2, $3, 'ADMIN', 'ACTIVE')
       ON CONFLICT (lower(email)) DO UPDATE
       SET role = 'ADMIN', status = 'ACTIVE', updated_at = now()`,
      ["INITIAL-ADMIN", nameFromEmail(email), email],
    );
    console.info(`Initial admin is ready: ${email}`);
  } finally {
    await pool.end();
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedInitialAdmin().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
