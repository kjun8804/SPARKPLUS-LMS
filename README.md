# SPARKPLUS LMS

SPARKPLUS 임직원 교육을 위한 LMS입니다. React/Vite 프론트엔드와 Express API, PostgreSQL 데이터베이스로 구성되며 Vercel에 배포됩니다.

## 주요 기능

- `@sparkplus.co` Google 계정 로그인
- 관리자·학습자 권한과 조직 리더 범위
- 3단계 조직 및 사용자 등록, Excel/CSV 일괄 등록
- 교육과정·차시·대상 배정과 필수 과정 관리
- YouTube/Google Drive 학습 콘텐츠와 AI 퀴즈 자동 생성
- 진도·퀴즈·설문·수료·리워드·뱃지·수료증 처리
- Google Sheets 운영대장 및 Google Drive 아카이브 동기화
- 공지사항 등록·게시·삭제 및 대상별 노출

PostgreSQL이 운영 데이터의 원본이며, Google Sheets와 Drive는 조회·보관을 위한 아카이브입니다.

## 로컬 실행

Node.js 20 이상이 필요합니다.

```bash
npm install
npm run dev
```

터미널에 표시되는 로컬 주소를 브라우저에서 열면 됩니다.

API를 별도로 실행하려면 다음 명령을 사용합니다.

```bash
npm --workspace server run dev
```

## 검사

```bash
npm run build
npm --workspace server run build
npm --workspace server test
```

## 데이터베이스

마이그레이션 파일은 `server/src/database/migrations`에 있습니다. 새 환경에서는 다음 명령으로 적용합니다.

```bash
npm --workspace server run db:migrate
```

## 주요 환경변수

- `DATABASE_URL`
- `SESSION_SECRET`
- `APP_ORIGIN`
- `INITIAL_ADMIN_EMAIL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REDIRECT_URI`
- `GOOGLE_SERVICE_ACCOUNT_JSON`
- `GOOGLE_SHEET_ID`
- `GOOGLE_DRIVE_ROOT_FOLDER_ID`
- `GEMINI_API_KEY`

비밀값은 Git에 저장하지 않고 Vercel Environment Variables에서 관리합니다.

## 주요 경로

- `src/App.jsx`: React 화면 및 사용자 상호작용
- `src/styles.css`: 공통 화면 스타일
- `server/src/app.ts`: API 애플리케이션 구성
- `server/src/routes`: 인증·관리·과정·학습·리워드·공지 API
- `server/src/database/migrations`: PostgreSQL 스키마 변경 이력
