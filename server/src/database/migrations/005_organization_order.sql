ALTER TABLE organizations ADD COLUMN IF NOT EXISTS sort_order integer NOT NULL DEFAULT 0;

WITH ranked AS (
  SELECT id,
    row_number() OVER (
      PARTITION BY parent_id
      ORDER BY CASE WHEN name='스파크플러스' THEN 0 ELSE 1 END, name, id
    )::integer AS position
  FROM organizations
)
UPDATE organizations AS organization
SET sort_order=ranked.position
FROM ranked
WHERE organization.id=ranked.id;

CREATE INDEX IF NOT EXISTS organizations_parent_sort_idx ON organizations(parent_id,sort_order);
