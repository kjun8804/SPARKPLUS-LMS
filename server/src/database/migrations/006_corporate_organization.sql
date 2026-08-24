ALTER TABLE organizations DROP CONSTRAINT IF EXISTS organizations_depth_check;
ALTER TABLE organizations ADD CONSTRAINT organizations_depth_check CHECK (depth >= 0 AND depth <= 3);
