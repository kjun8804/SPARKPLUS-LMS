# SPARKPLUS LMS Server

TypeScript, Express, PostgreSQL 기반의 SPARKPLUS LMS 백엔드다.

## 로컬 실행

1. `.env.example`을 `.env`로 복사하고 로컬 값으로 수정한다.
2. PostgreSQL에서 `sparkplus_lms` 데이터베이스를 만든다.
3. `pnpm install --ignore-workspace`를 실행한다.
4. `pnpm db:migrate`와 `pnpm db:seed`를 실행한다.
5. `pnpm dev`로 API 서버를 시작한다.

Google OAuth 비밀값과 세션 비밀값은 Git에 커밋하지 않는다. 최초 관리자 기본 이메일은 `jun.kang@sparkplus.co`이며 환경변수로 변경할 수 있다.

## 초기 API

- `GET /health`
- `GET /api/v1/auth/google`
- `GET /api/v1/auth/google/callback`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/me`
- `GET /api/v1/admin/users`
- `GET /api/v1/admin/organizations/tree`
- `GET /api/v1/leader/organizations`
