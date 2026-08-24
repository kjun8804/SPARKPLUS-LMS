ALTER TABLE badge_rules
  ADD COLUMN IF NOT EXISTS icon varchar(30) NOT NULL DEFAULT 'medal';

UPDATE badge_rules SET icon = CASE
  WHEN metric = 'QUIZ_COMPLETE' THEN 'quiz'
  WHEN metric = 'COURSE_COMPLETE' THEN 'trophy'
  WHEN metric = 'POINTS_TOTAL' OR badge_type = '랭킹형' THEN 'ranking'
  ELSE 'medal'
END
WHERE icon = 'medal';
