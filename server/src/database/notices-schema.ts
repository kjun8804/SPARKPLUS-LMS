import type { DatabasePool } from "./pool.js";

const noticesSchema = `
CREATE TABLE IF NOT EXISTS notices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category varchar(80) NOT NULL DEFAULT '일반 공지',
  title varchar(240) NOT NULL,
  target_type varchar(40) NOT NULL DEFAULT '전체 임직원',
  target_details jsonb NOT NULL DEFAULT '[]',
  start_date date NOT NULL DEFAULT CURRENT_DATE,
  end_date date,
  status varchar(20) NOT NULL DEFAULT 'DRAFT',
  important boolean NOT NULL DEFAULT false,
  content text NOT NULL DEFAULT '',
  attachment_name text,
  views integer NOT NULL DEFAULT 0 CHECK (views >= 0),
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);
CREATE INDEX IF NOT EXISTS notices_publication_idx
  ON notices(status, start_date, end_date) WHERE deleted_at IS NULL;
`;

let ready: Promise<void> | null = null;
export function ensureNoticesSchema(pool: DatabasePool) {
  if (!ready) ready = pool.query(noticesSchema).then(() => undefined).catch((error) => {
    ready = null;
    throw error;
  });
  return ready;
}
