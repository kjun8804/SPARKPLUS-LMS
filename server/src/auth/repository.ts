import type { DatabasePool } from "../database/pool.js";
import type { AuthenticatedUser } from "../types.js";

interface UserRow {
  id: string;
  employee_number: string;
  name: string;
  email: string;
  organization_id: string | null;
  position: string | null;
  role: AuthenticatedUser["role"];
  status: AuthenticatedUser["status"];
}

function mapUser(row: UserRow): AuthenticatedUser {
  return {
    id: row.id,
    employeeNumber: row.employee_number,
    name: row.name,
    email: row.email,
    organizationId: row.organization_id,
    position: row.position,
    role: row.role,
    status: row.status,
  };
}

export async function findUserById(pool: DatabasePool, id: string) {
  const result = await pool.query<UserRow>(
    `SELECT id, employee_number, name, email, organization_id, position, role, status
     FROM users WHERE id = $1`,
    [id],
  );
  return result.rows[0] ? mapUser(result.rows[0]) : null;
}

export async function connectGoogleUser(pool: DatabasePool, email: string, googleSubject: string, initialAdminEmail?: string) {
  const result = await pool.query<UserRow>(
    `UPDATE users
     SET google_subject = COALESCE(google_subject, $2),
         role = CASE WHEN lower(email) = lower($3) THEN 'ADMIN' ELSE role END,
         status = CASE WHEN lower(email) = lower($3) THEN 'ACTIVE' ELSE status END,
         last_login_at = now(), updated_at = now()
     WHERE lower(email) = lower($1)
       AND status = 'ACTIVE'
       AND (google_subject IS NULL OR google_subject = $2)
     RETURNING id, employee_number, name, email, organization_id, position, role, status`,
    [email, googleSubject, initialAdminEmail || ""],
  );
  return result.rows[0] ? mapUser(result.rows[0]) : null;
}
