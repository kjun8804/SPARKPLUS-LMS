CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS schema_migrations (
  name text PRIMARY KEY,
  applied_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(120) NOT NULL,
  parent_id uuid REFERENCES organizations(id) ON DELETE RESTRICT,
  depth integer NOT NULL DEFAULT 1 CHECK (depth >= 1),
  path text NOT NULL,
  status varchar(20) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'INACTIVE')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (parent_id, name)
);

CREATE INDEX organizations_parent_status_idx ON organizations(parent_id, status);
CREATE INDEX organizations_path_idx ON organizations(path text_pattern_ops);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  google_subject varchar(255) UNIQUE,
  employee_number varchar(50) NOT NULL UNIQUE,
  name varchar(100) NOT NULL,
  email varchar(255) NOT NULL,
  organization_id uuid REFERENCES organizations(id) ON DELETE RESTRICT,
  position varchar(100),
  role varchar(20) NOT NULL DEFAULT 'LEARNER' CHECK (role IN ('ADMIN', 'LEARNER')),
  status varchar(20) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'INACTIVE', 'DELETED')),
  last_login_at timestamptz,
  deleted_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX users_email_unique_idx ON users(lower(email));
CREATE INDEX users_organization_status_idx ON users(organization_id, status);

CREATE TABLE organization_leaders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  include_descendants boolean NOT NULL DEFAULT true,
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, organization_id)
);

CREATE INDEX organization_leaders_user_idx ON organization_leaders(user_id);

CREATE TABLE audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  action varchar(100) NOT NULL,
  target_type varchar(80) NOT NULL,
  target_id uuid,
  before_data jsonb,
  after_data jsonb,
  ip_address inet,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX audit_logs_target_idx ON audit_logs(target_type, target_id, created_at DESC);
