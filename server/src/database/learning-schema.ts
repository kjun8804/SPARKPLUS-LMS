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
);
CREATE TABLE IF NOT EXISTS reward_rules (
  activity_type varchar(40) PRIMARY KEY, label varchar(80) NOT NULL, points integer NOT NULL CHECK(points>=0),
  enabled boolean NOT NULL DEFAULT true, updated_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO reward_rules(activity_type,label,points) VALUES
  ('LESSON_COMPLETE','차시 완료',20),('COURSE_COMPLETE','과정 수료',100),
  ('QUIZ_COMPLETE','퀴즈 완료',50),('SURVEY_SUBMIT','설문 제출',10)
ON CONFLICT(activity_type) DO NOTHING;
CREATE TABLE IF NOT EXISTS reward_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  enrollment_id uuid REFERENCES enrollments(id) ON DELETE SET NULL, activity_type varchar(40) NOT NULL REFERENCES reward_rules(activity_type),
  source_key varchar(240) NOT NULL UNIQUE, points integer NOT NULL CHECK(points>=0), description text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS reward_transactions_user_created_idx ON reward_transactions(user_id,created_at DESC);
CREATE TABLE IF NOT EXISTS badge_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), code varchar(60) NOT NULL UNIQUE, name varchar(100) NOT NULL,
  description text NOT NULL DEFAULT '', metric varchar(40) NOT NULL, threshold integer NOT NULL CHECK(threshold>0),
  badge_type varchar(20) NOT NULL DEFAULT '성취형', tone varchar(20) NOT NULL DEFAULT 'blue', enabled boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO badge_rules(code,name,description,metric,threshold,badge_type,tone) VALUES
  ('FIRST_COMPLETION','첫 수료','첫 번째 교육과정 수료','COURSE_COMPLETE',1,'성취형','blue'),
  ('POINT_COLLECTOR','포인트 컬렉터','누적 학습 포인트 500P 달성','POINTS_TOTAL',500,'성취형','gold'),
  ('QUIZ_STARTER','퀴즈 스타','퀴즈 5회 완료','QUIZ_COMPLETE',5,'성취형','violet')
ON CONFLICT(code) DO NOTHING;
CREATE TABLE IF NOT EXISTS user_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  badge_rule_id uuid NOT NULL REFERENCES badge_rules(id) ON DELETE CASCADE, awarded_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id,badge_rule_id)
);
CREATE INDEX IF NOT EXISTS user_badges_user_idx ON user_badges(user_id,awarded_at DESC);`;

let ready: Promise<void> | null = null;
export function ensureLearningSchema(pool: DatabasePool) {
  if (!ready) ready = pool.query(learningSchema).then(() => undefined).catch((error) => { ready = null; throw error; });
  return ready;
}
