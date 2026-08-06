# SPARKPLUS LMS Prototype

현재 공개된 SPARKPLUS 사용자용 LMS 프로토타입을 다른 PC에서도 실행하고 수정할 수 있도록 정리한 React 프로젝트입니다.

## 다른 PC에서 실행하기

1. Node.js 20 이상을 설치합니다.
2. 이 프로젝트 폴더에서 터미널을 엽니다.
3. 아래 명령어를 순서대로 실행합니다.

```bash
npm install
npm run dev
```

터미널에 표시되는 로컬 주소를 브라우저에서 열면 됩니다.

## 배포용 파일 만들기

```bash
npm run build
```

빌드 결과는 `dist` 폴더에 생성됩니다. GitHub와 연결한 뒤 Vercel, Cloudflare Pages, Netlify 등에서 배포할 수 있습니다.

## GitHub에 올리기

GitHub Desktop을 이용하는 방법이 가장 간단합니다.

1. GitHub Desktop을 설치하고 로그인합니다.
2. `File > Add local repository`에서 이 폴더를 선택합니다.
3. 저장소가 아니라고 나오면 `create a repository`를 선택합니다.
4. 저장소 이름을 `sparkplus-lms-prototype`으로 지정합니다.
5. `Publish repository`를 누릅니다.
6. 회사 자료라면 `Keep this code private`를 체크해 비공개 저장소로 올립니다.

## 주요 파일

- `src/App.jsx`: 화면 데이터, 페이지 구성, 버튼 동작
- `src/styles.css`: 색상, 크기, 간격 등 전체 디자인
- `src/main.jsx`: React 앱 시작 파일

## 현재 구현 범위

이 프로젝트는 프론트엔드 프로토타입이며 로그인, 교육과정, 진도율 등은 샘플 데이터로 동작합니다. 실제 임직원 계정과 학습 데이터를 연동하려면 추후 백엔드와 데이터베이스 작업이 필요합니다.
