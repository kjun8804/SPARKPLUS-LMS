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
CREATE INDEX IF NOT EXISTS user_badges_user_idx ON user_badges(user_id,awarded_at DESC);
