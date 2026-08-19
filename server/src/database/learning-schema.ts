import type { DatabasePool } from "./pool.js";

const learningSchema = `
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), title varchar(240) NOT NULL, category varchar(80) NOT NULL,
  level varchar(40) NOT NULL DEFAULT '레벨 1', status varchar(20) NOT NULL DEFAULT 'DRAFT', description text NOT NULL DEFAULT '',
  curriculum_summary text NOT NULL DEFAULT '', thumbnail text, start_date date, end_date date,
  survey_enabled boolean NOT NULL DEFAULT false, google_form_url text, completion_threshold integer NOT NULL DEFAULT 60,
  created_by uuid REFERENCES users(id) ON DELETE SET NULL, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now(), deleted_at timestamptz
);
CREATE INDEX IF NOT EXISTS courses_status_dates_idx ON courses(status,start_date,end_date) WHERE deleted_at IS NULL;
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  sequence integer NOT NULL, title varchar(240) NOT NULL, description text NOT NULL DEFAULT '', duration_minutes integer NOT NULL DEFAULT 0,
  video_type varchar(20) NOT NULL DEFAULT 'YOUTUBE', video_url text, drive_file_id text, attachment_name text, attachment_drive_file_id text,
  goals text NOT NULL DEFAULT '', contents text NOT NULL DEFAULT '', completion_threshold integer NOT NULL DEFAULT 60,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now(), UNIQUE(course_id,sequence)
);
CREATE TABLE IF NOT EXISTS quiz_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), lesson_id uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  sequence integer NOT NULL, question text NOT NULL, options jsonb NOT NULL DEFAULT '[]', correct_option integer NOT NULL DEFAULT 0,
  explanation text NOT NULL DEFAULT '', created_at timestamptz NOT NULL DEFAULT now(), UNIQUE(lesson_id,sequence)
);
CREATE TABLE IF NOT EXISTS course_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  assignment_type varchar(20) NOT NULL, target_id text, required boolean NOT NULL DEFAULT false, due_date date,
  created_by uuid REFERENCES users(id) ON DELETE SET NULL, created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS course_assignments_course_idx ON course_assignments(course_id);
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, assignment_id uuid REFERENCES course_assignments(id) ON DELETE SET NULL,
  required boolean NOT NULL DEFAULT false, due_date date, status varchar(20) NOT NULL DEFAULT 'ENROLLED', progress integer NOT NULL DEFAULT 0,
  enrolled_at timestamptz NOT NULL DEFAULT now(), completed_at timestamptz, cancelled_at timestamptz, UNIQUE(course_id,user_id)
);
CREATE INDEX IF NOT EXISTS enrollments_user_status_idx ON enrollments(user_id,status);
CREATE TABLE IF NOT EXISTS lesson_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), enrollment_id uuid NOT NULL REFERENCES enrollments(id) ON DELETE CASCADE,
  lesson_id uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE, watched_percent integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false, completed_at timestamptz, updated_at timestamptz NOT NULL DEFAULT now(), UNIQUE(enrollment_id,lesson_id)
);
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), enrollment_id uuid NOT NULL REFERENCES enrollments(id) ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES quiz_questions(id) ON DELETE CASCADE, selected_option integer NOT NULL,
  correct boolean NOT NULL, attempted_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), enrollment_id uuid NOT NULL UNIQUE REFERENCES enrollments(id) ON DELETE CASCADE,
  certificate_number varchar(80) NOT NULL UNIQUE, drive_file_id text, issued_at timestamptz NOT NULL DEFAULT now()
);`;

let ready: Promise<void> | null = null;
export function ensureLearningSchema(pool: DatabasePool) {
  if (!ready) ready = pool.query(learningSchema).then(() => undefined).catch((error) => { ready = null; throw error; });
  return ready;
}
