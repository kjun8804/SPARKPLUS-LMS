ALTER TABLE enrollments
  ADD COLUMN IF NOT EXISTS survey_submitted_at timestamptz;
