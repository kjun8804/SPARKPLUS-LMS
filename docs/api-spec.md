# 백엔드 API 명세 v1

## 1. 공통 규칙

- 기본 경로는 `/api/v1`이다.
- 인증은 Google OAuth 완료 후 서버 세션 또는 보안 쿠키를 사용한다.
- JSON 응답은 `{ data, error, meta }` 구조를 사용한다.
- 목록 API는 `page`, `pageSize`, `sort`, 검색·상태 필터를 지원한다.
- 생성·수정·삭제 API는 권한과 입력값을 서버에서 다시 검증한다.
- 시간은 ISO 8601 UTC로 교환한다.

## 2. 인증

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/auth/google` | Google 로그인 시작 |
| GET | `/auth/google/callback` | OAuth 콜백 |
| POST | `/auth/logout` | 로그아웃 |
| GET | `/auth/me` | 현재 사용자, 역할, 조직 리더 범위 |

콜백에서 도메인, 등록 여부, 사용자 상태를 모두 확인한다.

## 3. 조직

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/organizations/tree` | 로그인 | 조직 트리 조회 |
| POST | `/admin/organizations` | ADMIN | 조직 생성 |
| PATCH | `/admin/organizations/:id` | ADMIN | 조직명·상태·상위 조직 변경 |
| DELETE | `/admin/organizations/:id` | ADMIN | 미사용 조직 영구 삭제 또는 비활성화 |
| GET | `/admin/organizations/:id/leaders` | ADMIN | 조직 리더 조회 |
| POST | `/admin/organizations/:id/leaders` | ADMIN | 리더 지정 |
| DELETE | `/admin/organizations/:id/leaders/:userId` | ADMIN | 리더 해제 |

## 4. 사용자

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/admin/users` | ADMIN | 사용자 검색·필터·목록 |
| POST | `/admin/users` | ADMIN | 사용자 등록 |
| GET | `/admin/users/:id` | ADMIN | 사용자와 학습 요약 |
| PATCH | `/admin/users/:id` | ADMIN | 사용자 정보 수정 |
| POST | `/admin/users/:id/deactivate` | ADMIN | 비활성화 |
| POST | `/admin/users/:id/activate` | ADMIN | 재활성화 |
| DELETE | `/admin/users/:id` | ADMIN | 삭제 처리 또는 조건부 영구 삭제 |
| POST | `/admin/users/import/preview` | ADMIN | 엑셀 검증 및 미리보기 |
| POST | `/admin/users/import/commit` | ADMIN | 검증된 엑셀 반영 |
| GET | `/admin/users/import/:jobId` | ADMIN | 가져오기 결과 조회 |
| GET | `/me/profile` | 로그인 | 본인 프로필 |

엑셀 반영은 파일 업로드 직후 저장하지 않고 `preview → commit` 두 단계로 수행한다.

## 5. 과정과 차시

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/courses` | 로그인 | 볼 수 있는 과정 목록 |
| GET | `/courses/:id` | 로그인 | 과정 상세 및 본인 수강 상태 |
| POST | `/admin/courses` | ADMIN | 과정 생성 |
| PATCH | `/admin/courses/:id` | ADMIN | 과정 수정 |
| DELETE | `/admin/courses/:id` | ADMIN | 미사용 과정 삭제 또는 보관 |
| POST | `/admin/courses/:id/publish` | ADMIN | 과정 공개 |
| POST | `/admin/courses/:id/archive` | ADMIN | 과정 보관 |
| GET | `/courses/:courseId/lessons` | 수강권한 | 차시 목록 |
| POST | `/admin/courses/:courseId/lessons` | ADMIN | 차시 생성 |
| PATCH | `/admin/lessons/:id` | ADMIN | 차시 수정 |
| DELETE | `/admin/lessons/:id` | ADMIN | 차시 삭제 |
| PUT | `/admin/courses/:courseId/lessons/order` | ADMIN | 차시 순서 변경 |

## 6. 배정과 수강

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/admin/courses/:id/assignment-rules` | ADMIN | 배정 규칙 조회 |
| POST | `/admin/courses/:id/assignment-rules` | ADMIN | 배정 규칙 생성 및 대상 계산 |
| PATCH | `/admin/assignment-rules/:id` | ADMIN | 규칙 수정 및 대상 재계산 |
| DELETE | `/admin/assignment-rules/:id` | ADMIN | 규칙 비활성화 |
| GET | `/admin/courses/:id/assignees/preview` | ADMIN | 예상 배정 대상 미리보기 |
| POST | `/courses/:id/enroll` | LEARNER | 공개과정 직접 신청 |
| POST | `/enrollments/:id/cancel` | LEARNER | 선택과정 수강 취소 |
| POST | `/admin/enrollments/:id/withdraw` | ADMIN | 관리자 배정 회수 |
| POST | `/admin/enrollments/:id/reset-progress` | ADMIN | 진도 초기화 |
| GET | `/me/enrollments` | LEARNER | 내 학습 목록 |

수강 취소 API는 `required=false`, `status!=COMPLETED`인 경우에만 허용한다.

## 7. 영상 진도

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/enrollments/:enrollmentId/lessons/:lessonId/progress` | 본인 | 저장 진도 조회 |
| POST | `/enrollments/:enrollmentId/lessons/:lessonId/heartbeat` | 본인 | 재생 위치와 짧은 시청 구간 저장 |
| POST | `/enrollments/:enrollmentId/lessons/:lessonId/complete` | 본인 | 60% 확인 후 차시 완료 |

heartbeat 요청 예시:

```json
{
  "positionSeconds": 182.4,
  "segmentStart": 177.2,
  "segmentEnd": 182.4,
  "durationSeconds": 600,
  "playbackRate": 1.5,
  "playerState": "PLAYING"
}
```

서버는 요청 간격, 구간 크기, 총 길이 변조 여부를 검증하고 겹치는 구간을 병합한다. 완료 API는 서버에서 계산한 진도가 60% 이상일 때만 성공한다.

## 8. 퀴즈와 설문

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/lessons/:id/quiz` | 수강권한 | 정답을 제외한 퀴즈 조회 |
| GET | `/courses/:id/quiz` | 수강권한 | 과정 퀴즈 조회 |
| POST | `/quizzes/:id/attempts` | 수강권한 | 답안 제출·채점·정답과 해설 반환 |
| GET | `/me/quizzes/:id/attempts` | 본인 | 내 응시 이력 |
| POST | `/enrollments/:id/survey-completion` | 본인/ADMIN | 설문 완료 기록 |
| DELETE | `/admin/enrollments/:id/survey-completion` | ADMIN | 설문 완료 취소 |

정답 필드는 제출 전 학습자 응답에 포함하지 않는다.

## 9. 수료와 수료증

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/enrollments/:id/completion-status` | 본인/ADMIN | 수료 조건별 상태 |
| POST | `/admin/enrollments/:id/recalculate` | ADMIN | 수료 조건 재계산 |
| GET | `/me/certificates` | 본인 | 내 수료증 목록 |
| GET | `/certificates/:id/download` | 본인/ADMIN | 권한 확인 후 PDF 제공 |
| POST | `/admin/certificates/:id/reissue` | ADMIN | 수료증 재발급 |
| POST | `/admin/certificates/:id/revoke` | ADMIN | 수료증 취소 |

각 차시 완료, 퀴즈 제출, 설문 완료 이벤트 후 서버가 수료 조건을 재계산한다.

## 10. 조직 리더 대시보드

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| GET | `/leader/organizations` | 조직 리더 | 담당 조직 목록 |
| GET | `/leader/organizations/:id/summary` | 담당 범위 | 조직 학습 요약 |
| GET | `/leader/organizations/:id/learners` | 담당 범위 | 구성원별 현황 |
| GET | `/leader/organizations/:id/courses` | 담당 범위 | 과정별 현황 |

서버는 요청한 조직이 현재 리더의 담당 조직 또는 하위 조직인지 확인한다.

## 11. Drive, Sheets, 파일

| 메서드 | 경로 | 권한 | 설명 |
|---|---|---|---|
| POST | `/admin/files` | ADMIN | Drive 파일 업로드·등록 |
| GET | `/files/:id/download` | 접근권한 | 권한 확인 후 파일 제공 |
| DELETE | `/admin/files/:id` | ADMIN | 연결 확인 후 삭제 또는 보관 |
| POST | `/admin/reports/progress/export` | ADMIN | 수강 현황 Sheets 내보내기 |
| POST | `/admin/reports/incomplete/export` | ADMIN | 미수료자 내보내기 |
| POST | `/admin/reports/completions/export` | ADMIN | 수료 내역 내보내기 |
| GET | `/admin/report-exports/:id` | ADMIN | 내보내기 상태와 Sheets 주소 |

## 12. 주요 오류 코드

- `AUTH_DOMAIN_NOT_ALLOWED`
- `AUTH_USER_NOT_REGISTERED`
- `AUTH_USER_INACTIVE`
- `FORBIDDEN_ROLE`
- `FORBIDDEN_ORGANIZATION_SCOPE`
- `ENROLLMENT_REQUIRED_CANNOT_CANCEL`
- `ENROLLMENT_COMPLETED_CANNOT_CANCEL`
- `LESSON_PROGRESS_BELOW_THRESHOLD`
- `COURSE_COMPLETION_REQUIREMENTS_NOT_MET`
- `USER_HAS_LEARNING_HISTORY`
- `LAST_ADMIN_PROTECTED`
- `GOOGLE_DRIVE_OPERATION_FAILED`
- `SHEETS_EXPORT_FAILED`

