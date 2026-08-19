# 데이터베이스 설계

## 1. 기본 원칙

- PostgreSQL을 운영 데이터의 단일 원본으로 사용한다.
- 기본 키는 UUID를 권장한다.
- 모든 주요 테이블에 `created_at`, `updated_at`을 둔다.
- 업무 날짜는 `timestamptz`로 UTC 저장한다.
- 상태 값은 애플리케이션 열거형과 DB 제약조건으로 관리한다.
- 사용자 삭제, 배정 취소, 수료 변경처럼 이력 보존이 필요한 작업은 상태 변경으로 처리한다.

## 2. 테이블

### organizations

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 조직 ID |
| name | varchar(120) | 조직명 |
| parent_id | uuid FK nullable | 상위 조직 |
| depth | integer | 표시 및 검증용 깊이 |
| path | text | 하위 조직 조회용 경로 |
| status | varchar(20) | ACTIVE, INACTIVE |
| created_at | timestamptz | 생성 시각 |
| updated_at | timestamptz | 수정 시각 |

같은 상위 조직 아래에서 조직명은 중복되지 않게 한다. 순환 참조를 금지한다.

### users

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 내부 사용자 ID |
| google_subject | varchar(255) unique nullable | Google 계정 불변 식별자 |
| employee_number | varchar(50) unique | 사번 |
| name | varchar(100) | 이름 |
| email | varchar(255) unique | 회사 이메일 |
| organization_id | uuid FK nullable | 주 소속 조직. 초기 관리자 등록 시에는 비어 있을 수 있음 |
| position | varchar(100) nullable | 자유 입력 직책 |
| role | varchar(20) | ADMIN, LEARNER |
| status | varchar(20) | ACTIVE, INACTIVE, DELETED |
| last_login_at | timestamptz nullable | 마지막 로그인 |
| deleted_at | timestamptz nullable | 삭제 처리 시각 |
| created_at | timestamptz | 생성 시각 |
| updated_at | timestamptz | 수정 시각 |

이메일은 소문자로 정규화하며 `@sparkplus.co` 도메인을 서비스 계층에서 검증한다.

### organization_leaders

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 관계 ID |
| user_id | uuid FK | 리더 사용자 |
| organization_id | uuid FK | 담당 조직 |
| include_descendants | boolean | 하위 조직 포함 여부, 기본 true |
| created_by | uuid FK | 지정 관리자 |
| created_at | timestamptz | 지정 시각 |

`user_id + organization_id`를 유일하게 한다.

### courses

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 과정 ID |
| title | varchar(200) | 과정명 |
| description | text | 소개 |
| category | varchar(100) nullable | 분류 |
| visibility | varchar(30) | PUBLIC, ASSIGNED_ONLY |
| status | varchar(30) | DRAFT, SCHEDULED, OPEN, CLOSED, ARCHIVED |
| start_at | timestamptz nullable | 운영 시작 |
| end_at | timestamptz nullable | 운영 종료 |
| survey_required | boolean | 설문 필수 여부 |
| survey_url | text nullable | 설문 주소 |
| thumbnail_drive_file_id | varchar(255) nullable | 썸네일 Drive ID |
| created_by | uuid FK | 생성 관리자 |
| created_at | timestamptz | 생성 시각 |
| updated_at | timestamptz | 수정 시각 |

### lessons

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 차시 ID |
| course_id | uuid FK | 과정 |
| title | varchar(200) | 차시명 |
| order_no | integer | 과정 내 순서 |
| content_type | varchar(30) | YOUTUBE, DOCUMENT, LINK |
| youtube_video_id | varchar(30) nullable | YouTube 영상 ID |
| source_drive_file_id | varchar(255) nullable | 원본 Drive 파일 ID |
| duration_seconds | integer nullable | 영상 길이 |
| required | boolean | 필수 차시 여부 |
| completion_threshold | numeric(5,2) | 기본 60.00 |
| created_at | timestamptz | 생성 시각 |
| updated_at | timestamptz | 수정 시각 |

`course_id + order_no`를 유일하게 한다.

### course_assignment_rules

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 규칙 ID |
| course_id | uuid FK | 과정 |
| target_type | varchar(30) | ALL, ORGANIZATION, POSITION, USER |
| organization_id | uuid FK nullable | 대상 조직 |
| include_descendants | boolean nullable | 하위 조직 포함 |
| position | varchar(100) nullable | 대상 직책 |
| target_user_id | uuid FK nullable | 대상 개인 |
| required | boolean | 필수과정 여부 |
| deadline_at | timestamptz nullable | 마감일 |
| dynamic_assignment | boolean | 신규·변경 사용자 자동 반영 |
| active | boolean | 규칙 활성 여부 |
| created_by | uuid FK | 생성 관리자 |
| created_at | timestamptz | 생성 시각 |

대상 유형에 맞지 않는 대상 필드는 null이어야 한다.

### enrollments

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 수강 ID |
| user_id | uuid FK | 학습자 |
| course_id | uuid FK | 과정 |
| source | varchar(30) | SELF, ASSIGNMENT |
| required | boolean | 필수 여부 |
| deadline_at | timestamptz nullable | 개인별 마감일 |
| status | varchar(30) | ENROLLED, IN_PROGRESS, CANCELED, COMPLETED |
| progress_percent | numeric(5,2) | 계산된 과정 진도 |
| started_at | timestamptz nullable | 학습 시작 |
| canceled_at | timestamptz nullable | 취소 시각 |
| completed_at | timestamptz nullable | 수료 시각 |
| created_at | timestamptz | 생성 시각 |
| updated_at | timestamptz | 수정 시각 |

`user_id + course_id`를 유일하게 하고 취소 후 재신청 시 같은 행을 재활성화한다.

### lesson_progress

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 진도 ID |
| enrollment_id | uuid FK | 수강 정보 |
| lesson_id | uuid FK | 차시 |
| last_position_seconds | numeric(10,2) | 마지막 재생 위치 |
| watched_seconds | numeric(10,2) | 중복 제거한 인정 시청시간 |
| progress_percent | numeric(5,2) | 차시 진도율 |
| status | varchar(20) | NOT_STARTED, IN_PROGRESS, READY, COMPLETED |
| completed_at | timestamptz nullable | 완료 버튼 처리 시각 |
| updated_at | timestamptz | 마지막 저장 |

`enrollment_id + lesson_id`를 유일하게 한다.

### lesson_watch_segments

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 구간 ID |
| lesson_progress_id | uuid FK | 진도 |
| start_second | numeric(10,2) | 인정 구간 시작 |
| end_second | numeric(10,2) | 인정 구간 종료 |
| created_at | timestamptz | 수집 시각 |

서버는 겹치는 구간을 병합해 `watched_seconds`와 진도율을 계산한다. 비정상적으로 큰 점프 또는 heartbeat 간격을 벗어난 구간은 인정하지 않는다.

### quizzes / quiz_questions / quiz_options

- `quizzes`: 과정 또는 차시 연결, 제목, 설명
- `quiz_questions`: 문제, 해설, 유형, 순서, 배점
- `quiz_options`: 선택지, 정답 여부, 순서
- 1차 버전은 객관식 단일·복수 선택을 우선 지원한다.

### quiz_attempts / quiz_answers

- `quiz_attempts`: 사용자, 퀴즈, 점수, 총 문항 수, 제출 시각
- `quiz_answers`: 응시, 문항, 제출 답안, 정답 여부
- 정답 여부는 서버가 계산하며 제출 후에만 학습자에게 반환한다.

### survey_completions

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 완료 ID |
| enrollment_id | uuid FK unique | 수강 정보 |
| completed_by | uuid FK | 완료 사용자 또는 관리자 |
| completed_at | timestamptz | 완료 시각 |
| evidence | jsonb nullable | 외부 설문 식별정보 |

### drive_files

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 내부 파일 ID |
| drive_file_id | varchar(255) unique | Google Drive ID |
| folder_id | varchar(255) nullable | Drive 폴더 ID |
| file_name | varchar(255) | 파일명 |
| mime_type | varchar(150) | MIME 타입 |
| file_size | bigint nullable | 바이트 크기 |
| uploaded_by | uuid FK | 업로더 |
| created_at | timestamptz | 등록 시각 |

과정·차시·공지와 파일의 연결은 `attachments(owner_type, owner_id, drive_file_id)`로 관리한다.

### certificates

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 수료증 ID |
| enrollment_id | uuid FK | 수료 정보 |
| certificate_number | varchar(80) unique | 발급번호 |
| drive_file_id | uuid FK | PDF |
| issued_at | timestamptz | 발급 시각 |
| revoked_at | timestamptz nullable | 취소 시각 |
| reissue_count | integer | 재발급 횟수 |

### notices / notice_targets

- `notices`: 제목, 본문, 상태, 게시 시작·종료, 중요 여부, 작성자
- `notice_targets`: 전체, 조직, 과정 대상
- 첨부파일은 `attachments`로 연결한다.

### audit_logs

| 필드 | 형식 | 설명 |
|---|---|---|
| id | uuid PK | 로그 ID |
| actor_user_id | uuid FK nullable | 실행 사용자 |
| action | varchar(100) | 작업 코드 |
| target_type | varchar(80) | 대상 종류 |
| target_id | uuid nullable | 대상 ID |
| before_data | jsonb nullable | 변경 전 주요 값 |
| after_data | jsonb nullable | 변경 후 주요 값 |
| ip_address | inet nullable | 요청 IP |
| created_at | timestamptz | 실행 시각 |

## 3. 주요 관계

```text
organizations 1 ── N users
organizations 1 ── N organizations(parent)
users N ── N organizations (organization_leaders)
courses 1 ── N lessons
courses 1 ── N course_assignment_rules
users N ── N courses (enrollments)
enrollments 1 ── N lesson_progress
lesson_progress 1 ── N lesson_watch_segments
courses/lessons 1 ── N quizzes
quizzes 1 ── N quiz_attempts
enrollments 1 ── 0..1 survey_completions
enrollments 1 ── 0..1 active certificate
```

## 4. 필수 인덱스

- `users(lower(email))`, `users(employee_number)`, `users(organization_id, status)`
- `organizations(parent_id, status)`, 조직 경로 검색 인덱스
- `courses(status, visibility, start_at, end_at)`
- `enrollments(user_id, status)`, `enrollments(course_id, status)`
- `lesson_progress(enrollment_id, lesson_id)`
- `course_assignment_rules(course_id, active, target_type)`
- `quiz_attempts(user_id, quiz_id, submitted_at desc)`
- `audit_logs(target_type, target_id, created_at desc)`
