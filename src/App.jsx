import * as r from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
var i = { jsx, jsxs, Fragment },
  a = [
    {
      id: 1,
      category: `직무역량`,
      title: `데이터 분석 기초 입문: 실무에 바로 쓰는 핵심 전략`,
      description: `데이터를 읽고 업무 의사결정에 활용하는 가장 실용적인 입문 과정입니다.`,
      period: `2026.08.01 ~ 2026.09.30`,
      duration: `2시간 30분`,
      level: `레벨 1`,
      format: `온라인`,
      status: `모집 중`,
      accent: `blue`,
      instructor: `김현우 강사`,
      progress: 65,
      enrolled: !0,
    },
    {
      id: 2,
      category: `리더십`,
      title: `처음 맡는 팀장을 위한 리더십 기본`,
      description: `목표 설정부터 피드백까지, 신임 리더에게 필요한 핵심 역량을 익힙니다.`,
      period: `2026.08.18 ~ 2026.10.10`,
      duration: `4시간`,
      level: `레벨 2`,
      format: `혼합`,
      status: `모집 중`,
      accent: `green`,
      instructor: `박서연 강사`,
    },
    {
      id: 3,
      category: `개발`,
      title: `React와 TypeScript로 시작하는 실전 프론트엔드 개발`,
      description: `최신 웹 개발 트렌드를 반영해 기초부터 작은 프로젝트까지 완성합니다.`,
      period: `2026.08.10 ~ 2026.10.31`,
      duration: `8시간`,
      level: `레벨 2`,
      format: `온라인`,
      status: `모집 중`,
      accent: `purple`,
      instructor: `이도윤 강사`,
    },
    {
      id: 4,
      category: `커뮤니케이션`,
      title: `협업을 바꾸는 비즈니스 커뮤니케이션`,
      description: `보고, 회의, 피드백 상황에서 명확하게 소통하는 방법을 학습합니다.`,
      period: `2026.09.01 ~ 2026.09.25`,
      duration: `3시간`,
      level: `레벨 1`,
      format: `오프라인`,
      status: `모집 예정`,
      accent: `orange`,
      instructor: `최지민 강사`,
    },
    {
      id: 5,
      category: `법정의무`,
      title: `2026 개인정보보호 필수 교육`,
      description: `업무 중 반드시 알아야 할 개인정보 보호 원칙과 사고 대응 절차를 안내합니다.`,
      period: `2026.07.01 ~ 2026.08.22`,
      duration: `1시간`,
      level: `레벨 1`,
      format: `온라인`,
      status: `마감 임박`,
      accent: `red`,
      instructor: `준법지원팀`,
      progress: 30,
      enrolled: !0,
    },
    {
      id: 6,
      category: `AI·DX`,
      title: `업무 생산성을 높이는 생성형 AI 활용법`,
      description: `반복 업무를 줄이고 결과물의 품질을 높이는 프롬프트 작성법을 실습합니다.`,
      period: `2026.08.25 ~ 2026.10.15`,
      duration: `5시간`,
      level: `레벨 3`,
      format: `온라인`,
      status: `모집 중`,
      accent: `cyan`,
      instructor: `정유나 강사`,
    },
  ],
  o = {
    1: [
      { title: `데이터 기반 업무의 이해`, duration: `18분` },
      { title: `업무 문제를 데이터 질문으로 바꾸기`, duration: `24분` },
      { title: `실무 데이터 수집과 정리`, duration: `32분` },
      { title: `핵심 지표를 선정하고 해석하기`, duration: `28분` },
      { title: `데이터로 설득력 있게 보고하기`, duration: `35분` },
    ],
    2: [
      { title: `팀장이 된다는 것`, duration: `35분` },
      { title: `팀 목표와 역할 명확히 하기`, duration: `45분` },
      { title: `구성원의 강점을 살리는 업무 위임`, duration: `50분` },
      { title: `성과를 만드는 피드백 대화`, duration: `55분` },
      { title: `갈등 상황을 조율하는 리더의 원칙`, duration: `35분` },
    ],
    3: [
      { title: `React와 TypeScript 개발 환경 구성`, duration: `55분` },
      { title: `컴포넌트와 Props 설계`, duration: `70분` },
      { title: `상태 관리와 사용자 이벤트`, duration: `75분` },
      { title: `API 데이터 연동과 오류 처리`, duration: `80분` },
      { title: `실전 미니 프로젝트 완성`, duration: `120분` },
    ],
    4: [
      { title: `명확한 비즈니스 소통의 기본`, duration: `30분` },
      { title: `핵심이 보이는 보고와 문서 작성`, duration: `40분` },
      { title: `효율적인 회의 진행과 참여`, duration: `35분` },
      { title: `상대방을 움직이는 피드백`, duration: `45분` },
      { title: `협업 갈등을 해결하는 대화법`, duration: `30분` },
    ],
    5: [
      { title: `개인정보의 이해와 주요 원칙`, duration: `12분` },
      { title: `업무 단계별 개인정보 처리 기준`, duration: `15분` },
      { title: `개인정보 유출 사례와 예방`, duration: `13분` },
      { title: `사고 발생 시 대응 절차`, duration: `12분` },
      { title: `필수 확인 문제`, duration: `8분` },
    ],
    6: [
      { title: `생성형 AI와 업무 혁신`, duration: `40분` },
      { title: `좋은 결과를 만드는 프롬프트 구조`, duration: `55분` },
      { title: `문서 작성과 요약 업무 자동화`, duration: `60분` },
      { title: `데이터 분석 및 아이디어 도출 실습`, duration: `65분` },
      { title: `안전하고 책임감 있는 AI 활용`, duration: `40분` },
    ],
  },
  s = {
    user: [
      [`userDashboard`, `홈`],
      [`catalog`, `교육과정 조회`],
      [`learning`, `나의 학습`],
      [`noticeList`, `공지사항`],
    ],
    admin: [
      [`adminDashboard`, `관리자 대시보드`],
      [`placeholder`, `교육과정 관리`],
      [`placeholder`, `학습자 관리`],
      [`placeholder`, `공지사항 관리`],
      [`placeholder`, `통계 및 리포트`],
    ],
  },
  c = [
    {
      id: 1,
      category: `교육 안내`,
      title: `2026년 하반기 법정의무교육 수강 안내`,
      writer: `인재개발팀`,
      date: `2026.08.04`,
      views: 248,
      important: !0,
      content: `2026년 하반기 법정의무교육 수강 일정을 안내드립니다. 전 임직원은 교육 기간 내 개인정보보호, 직장 내 괴롭힘 예방, 성희롱 예방 과정을 모두 수료해 주세요.`,
      file: `2026_하반기_법정의무교육_안내.pdf`,
    },
    {
      id: 2,
      category: `시스템`,
      title: `LMS 시스템 정기 점검 안내 (8/25)`,
      writer: `LMS 관리자`,
      date: `2026.08.01`,
      views: 132,
      important: !0,
      content: `안정적인 서비스 제공을 위해 8월 25일 오전 2시부터 4시까지 정기 점검이 진행됩니다. 점검 시간에는 학습 진도 저장이 제한될 수 있습니다.`,
      file: ``,
    },
    {
      id: 3,
      category: `과정 안내`,
      title: `8월 신규 교육과정 오픈 안내`,
      writer: `인재개발팀`,
      date: `2026.07.29`,
      views: 197,
      important: !1,
      content: `생성형 AI 활용법, 신임 리더 온보딩 등 8월 신규 교육과정이 오픈되었습니다. 교육과정 조회 메뉴에서 상세 내용을 확인해 주세요.`,
      file: `8월_신규과정_목록.pdf`,
    },
    {
      id: 4,
      category: `이벤트`,
      title: `상반기 학습 우수자 시상 및 경품 안내`,
      writer: `People팀`,
      date: `2026.07.24`,
      views: 315,
      important: !1,
      content: `상반기 동안 꾸준히 학습한 구성원을 대상으로 학습 우수자 시상을 진행합니다. 선정 결과와 경품 지급 일정은 첨부 안내를 확인해 주세요.`,
      file: `학습우수자_선정결과.pdf`,
    },
    {
      id: 5,
      category: `교육 안내`,
      title: `데이터 분석 실무 과정 교재 업데이트`,
      writer: `인재개발팀`,
      date: `2026.07.18`,
      views: 86,
      important: !1,
      content: `데이터 분석 실무 과정의 3차시 실습 교재가 업데이트되었습니다. 강의실의 첨부 자료에서 최신 파일을 내려받아 주세요.`,
      file: ``,
    },
  ];
function l() {
  let [e, t] = (0, r.useState)(`login`),
    [n, o] = (0, r.useState)(`user`),
    [s, l] = (0, r.useState)(!1),
    [d, p] = (0, r.useState)(`user@company.com`),
    [h, g] = (0, r.useState)(`1234`),
    [_, v] = (0, r.useState)(``),
    [y, b] = (0, r.useState)(a),
    [x, C] = (0, r.useState)(1),
    [w, T] = (0, r.useState)(``),
    [E, P] = (0, r.useState)(`전체 분야`),
    [F, I] = (0, r.useState)(`전체 레벨`),
    [L, R] = (0, r.useState)(`모집 상태`),
    [z, B] = (0, r.useState)({
      search: ``,
      category: `전체 분야`,
      level: `전체 레벨`,
      recruit: `모집 상태`,
    }),
    [V, H] = (0, r.useState)(null),
    [U, W] = (0, r.useState)(``),
    [G, K] = (0, r.useState)(!1),
    [q, J] = (0, r.useState)(!0),
    [Y, ie] = (0, r.useState)(!1),
    [ae, oe] = (0, r.useState)(38),
    [se, ce] = (0, r.useState)(1);
  ((0, r.useEffect)(() => {
    let e = localStorage.getItem(`sparkplus-lms-courses`);
    if (e) {
      let t = JSON.parse(e);
      b(
        a.map((e) => {
          let n = t.find((t) => t.id === e.id);
          return n ? { ...e, enrolled: n.enrolled, progress: n.progress } : e;
        }),
      );
    }
  }, []),
    (0, r.useEffect)(() => {
      e !== `login` &&
        localStorage.setItem(`sparkplus-lms-courses`, JSON.stringify(y));
    }, [y, e]));
  let X = y.find((e) => e.id === x) ?? y[0],
    Z = y.filter((e) => e.enrolled),
    le = (0, r.useMemo)(
      () =>
        y.filter((e) => {
          let t = z.search.toLowerCase();
          return (
            (!t || `${e.title} ${e.description}`.toLowerCase().includes(t)) &&
            (z.category === `전체 분야` || e.category === z.category) &&
            (z.level === `전체 레벨` || e.level === z.level) &&
            (z.recruit === `모집 상태` || e.status === z.recruit)
          );
        }),
      [y, z],
    );
  function Q(e, n) {
    (n && e === `noticeDetail` ? ce(n) : n && C(n),
      t(e),
      K(!1),
      window.scrollTo({ top: 0, behavior: `smooth` }));
  }
  function $(e) {
    if (
      (e.preventDefault(),
      (!s && d === `user@company.com` && h === `1234`) ||
        (s && d === `admin@company.com` && h === `1234`))
    ) {
      let e = s ? `admin` : `user`;
      (o(e), t(e === `user` ? `userDashboard` : `adminDashboard`), v(``));
    } else v(`${s ? `관리자` : `사용자`} 데모 계정 정보를 확인해 주세요.`);
  }
  function ue() {
    (b((e) =>
      e.map((e) => (e.id === X.id ? { ...e, enrolled: !0, progress: 0 } : e)),
    ),
      H(`done`));
  }
  function de() {
    let e = Math.min(100, Math.max(X.progress ?? 0, 72));
    (b((t) => t.map((t) => (t.id === X.id ? { ...t, progress: e } : t))),
      oe(72),
      W(`학습 진도가 저장되었습니다.`),
      setTimeout(() => W(``), 2600));
  }
  return e === `login`
    ? (0, i.jsx)(u, {
        adminMode: s,
        setAdminMode: l,
        email: d,
        setEmail: p,
        password: h,
        setPassword: g,
        error: _,
        onSubmit: $,
      })
    : (0, i.jsxs)(`div`, {
        className: `app-shell`,
        children: [
          (0, i.jsx)(f, {
            role: n,
            page: e,
            go: Q,
            profileOpen: G,
            setProfileOpen: K,
            logout: () => {
              (t(`login`), K(!1));
            },
          }),
          e === `userDashboard` && (0, i.jsx)(m, { courses: Z, go: Q }),
          e === `adminDashboard` && (0, i.jsx)(ee, { go: Q }),
          e === `catalog` &&
            (0, i.jsx)(S, {
              courses: le,
              search: w,
              setSearch: T,
              category: E,
              setCategory: P,
              levelFilter: F,
              setLevelFilter: I,
              recruit: L,
              setRecruit: R,
              applyFilters: () =>
                B({ search: w, category: E, level: F, recruit: L }),
              reset: () => {
                (T(``),
                  P(`전체 분야`),
                  I(`전체 레벨`),
                  R(`모집 상태`),
                  B({
                    search: ``,
                    category: `전체 분야`,
                    level: `전체 레벨`,
                    recruit: `모집 상태`,
                  }));
              },
              go: Q,
            }),
          e === `courseDetail` &&
            (0, i.jsx)(te, {
              course: X,
              go: Q,
              apply: () => (X.enrolled ? Q(`learning`) : H(`apply`)),
            }),
          e === `learning` &&
            (0, i.jsx)(re, {
              courses: Z,
              go: Q,
              notify: (e) => {
                (W(e), setTimeout(() => W(``), 2600));
              },
            }),
          e === `lectureDetail` && (0, i.jsx)(D, { course: X, go: Q }),
          e === `player` &&
            (0, i.jsx)(O, {
              course: X,
              go: Q,
              lessonOpen: q,
              setLessonOpen: J,
              playing: Y,
              setPlaying: ie,
              videoProgress: ae,
              saveProgress: de,
            }),
          e === `noticeList` && (0, i.jsx)(k, { go: Q }),
          e === `noticeDetail` &&
            (0, i.jsx)(A, {
              notice: c.find((e) => e.id === se) ?? c[0],
              go: Q,
            }),
          (e === `profile` || e === `password`) &&
            (0, i.jsx)(j, {
              initialTab: e === `profile` ? `info` : `password`,
              notify: (e) => {
                (W(e), setTimeout(() => W(``), 2600));
              },
            }),
          e === `placeholder` && (0, i.jsx)(M, { role: n, go: Q }),
          V &&
            (0, i.jsx)(ne, {
              kind: V,
              course: X,
              close: () => H(null),
              enroll: ue,
              goLearning: () => {
                (H(null), Q(`learning`));
              },
            }),
          U &&
            (0, i.jsxs)(`div`, {
              className: `toast`,
              children: [(0, i.jsx)(`span`, { children: `✓` }), U],
            }),
          (0, i.jsx)(N, {}),
        ],
      });
}
function u({
  adminMode: e,
  setAdminMode: t,
  email: n,
  setEmail: r,
  password: a,
  setPassword: o,
  error: s,
  onSubmit: c,
}) {
  return (0, i.jsxs)(`main`, {
    className: `login-page`,
    children: [
      (0, i.jsxs)(`section`, {
        className: `login-intro`,
        children: [
          (0, i.jsx)(`div`, {
            className: `login-brand`,
            children: (0, i.jsx)(d, { light: !0 }),
          }),
          (0, i.jsx)(`div`, {
            className: `intro-copy`,
            children: (0, i.jsxs)(`h1`, {
              children: [
                `SPARKPLUS`,
                (0, i.jsx)(`br`, {}),
                (0, i.jsx)(`span`, { children: `LMS` }),
              ],
            }),
          }),
          (0, i.jsxs)(`div`, {
            className: `intro-art`,
            children: [
              (0, i.jsx)(`span`, {}),
              (0, i.jsx)(`span`, {}),
              (0, i.jsx)(`span`, {}),
            ],
          }),
        ],
      }),
      (0, i.jsx)(`section`, {
        className: `login-panel`,
        children: (0, i.jsxs)(`form`, {
          className: `login-card`,
          onSubmit: c,
          children: [
            (0, i.jsx)(`div`, {
              className: `mobile-logo`,
              children: (0, i.jsx)(d, {}),
            }),
            (0, i.jsxs)(`div`, {
              className: `login-title`,
              children: [
                (0, i.jsx)(`strong`, { children: `SPARKPLUS` }),
                (0, i.jsx)(`span`, { children: `LMS` }),
                e && (0, i.jsx)(`em`, { children: `관리자` }),
              ],
            }),
            (0, i.jsxs)(`label`, {
              children: [
                `아이디 또는 이메일`,
                (0, i.jsx)(`input`, {
                  value: n,
                  onChange: (e) => r(e.target.value),
                  placeholder: `이메일을 입력해 주세요`,
                }),
              ],
            }),
            (0, i.jsxs)(`label`, {
              children: [
                `비밀번호`,
                (0, i.jsx)(`input`, {
                  value: a,
                  type: `password`,
                  onChange: (e) => o(e.target.value),
                  placeholder: `비밀번호를 입력해 주세요`,
                }),
              ],
            }),
            s && (0, i.jsx)(`div`, { className: `form-error`, children: s }),
            (0, i.jsxs)(`div`, {
              className: `login-options`,
              children: [
                (0, i.jsxs)(`label`, {
                  className: `check`,
                  children: [
                    (0, i.jsx)(`input`, { type: `checkbox` }),
                    ` 아이디 저장`,
                  ],
                }),
                (0, i.jsx)(`button`, {
                  type: `button`,
                  className: `text-button`,
                  children: `비밀번호 찾기`,
                }),
              ],
            }),
            (0, i.jsx)(`button`, {
              className: `primary large`,
              type: `submit`,
              children: `로그인`,
            }),
            (0, i.jsxs)(`div`, {
              className: `demo-box`,
              children: [
                (0, i.jsx)(`b`, { children: `데모 계정` }),
                (0, i.jsx)(`span`, {
                  children: e ? `admin@company.com` : `user@company.com`,
                }),
                (0, i.jsx)(`span`, { children: `비밀번호 1234` }),
              ],
            }),
            (0, i.jsxs)(`button`, {
              type: `button`,
              className: `switch-login`,
              onClick: () => {
                let n = !e;
                (t(n), r(n ? `admin@company.com` : `user@company.com`));
              },
              children: [
                e ? `일반 사용자 로그인으로 전환` : `관리자 로그인으로 전환`,
                ` `,
                (0, i.jsx)(`b`, { children: `→` }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function d({ light: e = !1 }) {
  return (0, i.jsxs)(`div`, {
    className: `logo ${e ? `logo-light` : ``}`,
    children: [
      (0, i.jsxs)(`span`, {
        className: `logo-mark`,
        children: [
          (0, i.jsx)(`i`, {}),
          (0, i.jsx)(`i`, {}),
          (0, i.jsx)(`i`, {}),
        ],
      }),
      (0, i.jsx)(`strong`, { children: `SPARKPLUS` }),
      (0, i.jsx)(`em`, { children: `LMS` }),
    ],
  });
}
function f({
  role: e,
  page: t,
  go: n,
  profileOpen: r,
  setProfileOpen: a,
  logout: o,
}) {
  return (0, i.jsx)(`header`, {
    className: `topbar`,
    children: (0, i.jsxs)(`div`, {
      className: `topbar-inner`,
      children: [
        (0, i.jsx)(`button`, {
          className: `brand-button`,
          onClick: () => n(e === `user` ? `userDashboard` : `adminDashboard`),
          children: (0, i.jsx)(d, {}),
        }),
        (0, i.jsx)(`nav`, {
          children: s[e].map(([e, r]) =>
            (0, i.jsx)(
              `button`,
              {
                className:
                  t === e ||
                  (e === `learning` &&
                    [`lectureDetail`, `player`].includes(t)) ||
                  (e === `noticeList` && t === `noticeDetail`)
                    ? `active`
                    : ``,
                onClick: () => n(e),
                children: r,
              },
              r,
            ),
          ),
        }),
        (0, i.jsxs)(`div`, {
          className: `header-tools`,
          children: [
            (0, i.jsxs)(`button`, {
              className: `profile`,
              onClick: () => a(!r),
              children: [
                (0, i.jsx)(`span`, {
                  className: `avatar`,
                  children: e === `user` ? `김` : `관`,
                }),
                (0, i.jsxs)(`span`, {
                  className: `profile-copy`,
                  children: [
                    (0, i.jsx)(`b`, {
                      children: e === `user` ? `김지수` : `관리자`,
                    }),
                    (0, i.jsx)(`small`, {
                      children: e === `user` ? `People팀` : `인재개발팀`,
                    }),
                  ],
                }),
                (0, i.jsx)(`span`, { children: `⌄` }),
              ],
            }),
            r &&
              (0, i.jsxs)(`div`, {
                className: `profile-menu`,
                children: [
                  (0, i.jsxs)(`div`, {
                    className: `profile-menu-head`,
                    children: [
                      (0, i.jsx)(`b`, {
                        children: e === `user` ? `김지수` : `LMS 관리자`,
                      }),
                      (0, i.jsx)(`small`, {
                        children:
                          e === `user`
                            ? `user@company.com`
                            : `admin@company.com`,
                      }),
                    ],
                  }),
                  e === `user` &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsxs)(`button`, {
                          onClick: () => n(`profile`),
                          children: [
                            (0, i.jsx)(`span`, { children: `회원정보 수정` }),
                            (0, i.jsx)(`em`, { children: `›` }),
                          ],
                        }),
                        (0, i.jsxs)(`button`, {
                          onClick: () => n(`password`),
                          children: [
                            (0, i.jsx)(`span`, { children: `비밀번호 변경` }),
                            (0, i.jsx)(`em`, { children: `›` }),
                          ],
                        }),
                        (0, i.jsxs)(`button`, {
                          onClick: () => n(`learning`),
                          children: [
                            (0, i.jsx)(`span`, { children: `수강 이력` }),
                            (0, i.jsx)(`em`, { children: `›` }),
                          ],
                        }),
                      ],
                    }),
                  (0, i.jsx)(`button`, {
                    className: `logout-button`,
                    onClick: o,
                    children: (0, i.jsx)(`span`, { children: `로그아웃` }),
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function p({ kicker: e, title: t, description: n, action: r }) {
  return (0, i.jsxs)(`div`, {
    className: `page-head`,
    children: [
      (0, i.jsxs)(`div`, {
        children: [
          e &&
            (0, i.jsxs)(`div`, {
              className: `breadcrumb`,
              children: [`홈 `, (0, i.jsx)(`span`, { children: `›` }), ` `, e],
            }),
          (0, i.jsx)(`h1`, { children: t }),
          n && (0, i.jsx)(`p`, { children: n }),
        ],
      }),
      r,
    ],
  });
}
function m({ courses: e, go: t }) {
  let n = e[0] ?? a[0];
  return (0, i.jsxs)(`main`, {
    className: `page dashboard-page`,
    children: [
      (0, i.jsx)(p, {
        title: `환영합니다, 김지수님 👋`,
        description: `오늘도 성장을 위한 새로운 여정을 시작해 보세요.`,
      }),
      (0, i.jsxs)(`section`, {
        className: `user-status-panel`,
        "aria-label": `학습 현황`,
        children: [
          (0, i.jsx)(`h2`, { children: `학습 현황` }),
          (0, i.jsxs)(`div`, {
            className: `user-status-list`,
            children: [
              (0, i.jsx)(h, {
                label: `수강 중인 과정`,
                value: `3`,
                tone: `blue`,
              }),
              (0, i.jsx)(h, {
                label: `수강 예정 과정`,
                value: `1`,
                tone: `violet`,
              }),
              (0, i.jsx)(h, {
                label: `수료한 과정`,
                value: `12`,
                tone: `green`,
              }),
              (0, i.jsx)(h, {
                label: `마감 임박 과정`,
                value: `1`,
                tone: `red`,
              }),
            ],
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `dashboard-grid`,
        children: [
          (0, i.jsxs)(`section`, {
            className: `card span-2 continue-card`,
            children: [
              (0, i.jsx)(_, {
                title: `이어서 학습하기`,
                action: (0, i.jsx)(`button`, {
                  onClick: () => t(`learning`),
                  children: `전체 강의 보기`,
                }),
              }),
              (0, i.jsxs)(`div`, {
                className: `continue-body`,
                children: [
                  (0, i.jsx)(w, { accent: n.accent, label: n.category }),
                  (0, i.jsxs)(`div`, {
                    className: `continue-copy`,
                    children: [
                      (0, i.jsx)(`span`, {
                        className: `badge blue-badge`,
                        children: n.category,
                      }),
                      (0, i.jsx)(`h3`, { children: n.title }),
                      (0, i.jsxs)(`div`, {
                        className: `course-meta`,
                        children: [
                          (0, i.jsx)(`span`, { children: `◷ 남은 시간: 52분` }),
                          (0, i.jsx)(`span`, { children: `12/18 완료` }),
                        ],
                      }),
                      (0, i.jsx)(E, { value: n.progress ?? 65 }),
                      (0, i.jsx)(`button`, {
                        className: `primary`,
                        onClick: () => t(`player`, n.id),
                        children: `학습 이어가기`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `card deadlines`,
            children: [
              (0, i.jsx)(_, { title: `다가오는 학습 마감` }),
              (0, i.jsx)(v, {
                d: `D-2`,
                title: `개인정보보호 교육 2026`,
                date: `2026.08.22 마감`,
                urgent: !0,
              }),
              (0, i.jsx)(v, {
                d: `D-7`,
                title: `직장 내 괴롭힘 방지 교육`,
                date: `2026.08.27 마감`,
              }),
              (0, i.jsx)(v, {
                d: `D-14`,
                title: `성희롱 예방 교육`,
                date: `2026.09.03 마감`,
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `card span-2`,
            children: [
              (0, i.jsx)(_, {
                title: `추천 교육과정`,
                action: (0, i.jsx)(`button`, {
                  onClick: () => t(`catalog`),
                  children: `더보기`,
                }),
              }),
              (0, i.jsx)(`div`, {
                className: `mini-courses`,
                children: a
                  .slice(1, 4)
                  .map((e) =>
                    (0, i.jsxs)(
                      `button`,
                      {
                        className: `mini-course`,
                        onClick: () => t(`courseDetail`, e.id),
                        children: [
                          (0, i.jsx)(w, { accent: e.accent, compact: !0 }),
                          (0, i.jsxs)(`div`, {
                            children: [
                              (0, i.jsx)(`span`, { children: e.category }),
                              (0, i.jsx)(`b`, { children: e.title }),
                              (0, i.jsxs)(`small`, {
                                children: [e.duration, ` · `, e.level],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `card notices`,
            children: [
              (0, i.jsx)(_, {
                title: `최근 공지사항`,
                action: (0, i.jsx)(`button`, {
                  onClick: () => t(`noticeList`),
                  children: `더보기`,
                }),
              }),
              c
                .slice(0, 3)
                .map((e) =>
                  (0, i.jsx)(
                    y,
                    {
                      title: e.title,
                      date: e.date.slice(5),
                      important: e.important,
                      onClick: () => t(`noticeDetail`, e.id),
                    },
                    e.id,
                  ),
                ),
            ],
          }),
        ],
      }),
    ],
  });
}
function h({ label: e, value: t, tone: n }) {
  return (0, i.jsxs)(`div`, {
    className: `user-status ${n}`,
    children: [
      (0, i.jsx)(`span`, { children: e }),
      (0, i.jsxs)(`p`, {
        children: [
          (0, i.jsx)(`strong`, { children: t }),
          (0, i.jsx)(`em`, { children: `개 과정` }),
        ],
      }),
    ],
  });
}
function g({ label: e, value: t, tone: n, note: r }) {
  return (0, i.jsxs)(`article`, {
    className: `summary ${n}`,
    children: [
      (0, i.jsxs)(`div`, {
        children: [
          (0, i.jsx)(`span`, { children: e }),
          (0, i.jsxs)(`strong`, {
            children: [t, (0, i.jsx)(`em`, { children: `개` })],
          }),
        ],
      }),
      (0, i.jsx)(`span`, {
        className: `summary-icon`,
        children:
          n === `blue` ? `▶` : n === `green` ? `✓` : n === `red` ? `!` : `◷`,
      }),
      (0, i.jsx)(`small`, { children: r }),
    ],
  });
}
function _({ title: e, action: t }) {
  return (0, i.jsxs)(`div`, {
    className: `section-title`,
    children: [(0, i.jsx)(`h2`, { children: e }), t],
  });
}
function v({ d: e, title: t, date: n, urgent: r = !1 }) {
  return (0, i.jsxs)(`div`, {
    className: `deadline ${r ? `urgent` : ``}`,
    children: [
      (0, i.jsx)(`span`, { children: e }),
      (0, i.jsxs)(`div`, {
        children: [
          (0, i.jsx)(`b`, { children: t }),
          (0, i.jsx)(`small`, { children: n }),
        ],
      }),
    ],
  });
}
function y({ title: e, date: t, important: n = !1, onClick: r }) {
  return (0, i.jsxs)(`button`, {
    className: `notice-row`,
    onClick: r,
    children: [
      (0, i.jsxs)(`span`, {
        children: [n && (0, i.jsx)(`i`, { children: `중요` }), e],
      }),
      (0, i.jsx)(`small`, { children: t }),
    ],
  });
}
function ee({ go: e }) {
  return (0, i.jsxs)(`main`, {
    className: `page dashboard-page`,
    children: [
      (0, i.jsx)(p, {
        title: `관리자 대시보드`,
        description: `교육 운영 현황을 한눈에 확인하고 빠르게 관리하세요.`,
        action: (0, i.jsx)(`span`, {
          className: `last-login`,
          children: `2026년 8월 5일 수요일`,
        }),
      }),
      (0, i.jsxs)(`div`, {
        className: `summary-grid`,
        children: [
          (0, i.jsx)(g, {
            label: `운영 중인 과정`,
            value: `18`,
            tone: `blue`,
            note: `전월 대비 +2`,
          }),
          (0, i.jsx)(g, {
            label: `전체 학습자`,
            value: `248`,
            tone: `violet`,
            note: `활성 계정`,
          }),
          (0, i.jsx)(g, {
            label: `이번 달 수료 인원`,
            value: `64`,
            tone: `green`,
            note: `전월 대비 +12`,
          }),
          (0, i.jsx)(g, {
            label: `평균 수료율`,
            value: `84`,
            tone: `red`,
            note: `목표 80% 이상`,
          }),
        ],
      }),
      (0, i.jsxs)(`section`, {
        className: `quick-actions`,
        children: [
          (0, i.jsx)(`span`, { children: `빠른 실행` }),
          (0, i.jsx)(`button`, {
            className: `primary`,
            onClick: () => e(`placeholder`),
            children: `＋ 새 과정 등록`,
          }),
          (0, i.jsx)(`button`, {
            onClick: () => e(`placeholder`),
            children: `⌕ 학습자 조회`,
          }),
          (0, i.jsx)(`button`, {
            onClick: () => e(`placeholder`),
            children: `✎ 새 공지 작성`,
          }),
          (0, i.jsx)(`button`, {
            onClick: () => e(`placeholder`),
            children: `▥ 통계 조회`,
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `admin-grid`,
        children: [
          (0, i.jsxs)(`section`, {
            className: `card span-2`,
            children: [
              (0, i.jsx)(_, {
                title: `최근 등록된 과정`,
                action: (0, i.jsx)(`button`, {
                  onClick: () => e(`placeholder`),
                  children: `전체 보기`,
                }),
              }),
              (0, i.jsxs)(`table`, {
                children: [
                  (0, i.jsx)(`thead`, {
                    children: (0, i.jsxs)(`tr`, {
                      children: [
                        (0, i.jsx)(`th`, { children: `과정명` }),
                        (0, i.jsx)(`th`, { children: `교육 분야` }),
                        (0, i.jsx)(`th`, { children: `수강 인원` }),
                        (0, i.jsx)(`th`, { children: `상태` }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)(`tbody`, {
                    children: [
                      (0, i.jsxs)(`tr`, {
                        children: [
                          (0, i.jsx)(`td`, {
                            children: (0, i.jsx)(`b`, {
                              children: `생성형 AI 실무 활용법`,
                            }),
                          }),
                          (0, i.jsx)(`td`, { children: `AI·DX` }),
                          (0, i.jsx)(`td`, { children: `42명` }),
                          (0, i.jsx)(`td`, {
                            children: (0, i.jsx)(`span`, {
                              className: `badge blue-badge`,
                              children: `모집 중`,
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(`tr`, {
                        children: [
                          (0, i.jsx)(`td`, {
                            children: (0, i.jsx)(`b`, {
                              children: `신임 리더 온보딩`,
                            }),
                          }),
                          (0, i.jsx)(`td`, { children: `리더십` }),
                          (0, i.jsx)(`td`, { children: `24명` }),
                          (0, i.jsx)(`td`, {
                            children: (0, i.jsx)(`span`, {
                              className: `badge green-badge`,
                              children: `운영 중`,
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(`tr`, {
                        children: [
                          (0, i.jsx)(`td`, {
                            children: (0, i.jsx)(`b`, {
                              children: `개인정보보호 필수 교육`,
                            }),
                          }),
                          (0, i.jsx)(`td`, { children: `법정의무` }),
                          (0, i.jsx)(`td`, { children: `210명` }),
                          (0, i.jsx)(`td`, {
                            children: (0, i.jsx)(`span`, {
                              className: `badge gray-badge`,
                              children: `운영 중`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `card chart-card`,
            children: [
              (0, i.jsx)(_, { title: `과정별 평균 진도율` }),
              (0, i.jsxs)(`div`, {
                className: `bar-chart`,
                children: [
                  (0, i.jsx)(b, { label: `AI 실무`, value: 78 }),
                  (0, i.jsx)(b, { label: `리더십`, value: 64 }),
                  (0, i.jsx)(b, { label: `개인정보`, value: 91 }),
                  (0, i.jsx)(b, { label: `커뮤니케이션`, value: 56 }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `card span-2`,
            children: [
              (0, i.jsx)(_, { title: `최근 학습 현황` }),
              (0, i.jsxs)(`div`, {
                className: `activity-list`,
                children: [
                  (0, i.jsx)(x, {
                    name: `김지수`,
                    text: `데이터 분석 기초 3차시를 완료했습니다.`,
                    time: `10분 전`,
                  }),
                  (0, i.jsx)(x, {
                    name: `이민호`,
                    text: `개인정보보호 필수 교육을 수료했습니다.`,
                    time: `32분 전`,
                  }),
                  (0, i.jsx)(x, {
                    name: `박서연`,
                    text: `신임 리더 온보딩에 수강 신청했습니다.`,
                    time: `1시간 전`,
                  }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `card notices`,
            children: [
              (0, i.jsx)(_, {
                title: `최근 공지사항`,
                action: (0, i.jsx)(`button`, {
                  onClick: () => e(`placeholder`),
                  children: `관리`,
                }),
              }),
              (0, i.jsx)(y, {
                title: `하반기 법정의무교육 안내`,
                date: `08.04`,
                important: !0,
              }),
              (0, i.jsx)(y, { title: `시스템 정기 점검 안내`, date: `08.01` }),
              (0, i.jsx)(y, { title: `8월 신규 과정 오픈`, date: `07.29` }),
            ],
          }),
        ],
      }),
    ],
  });
}
function b({ label: e, value: t }) {
  return (0, i.jsxs)(`div`, {
    className: `bar-row`,
    children: [
      (0, i.jsx)(`span`, { children: e }),
      (0, i.jsx)(`div`, {
        children: (0, i.jsx)(`i`, { style: { width: `${t}%` } }),
      }),
      (0, i.jsxs)(`b`, { children: [t, `%`] }),
    ],
  });
}
function x({ name: e, text: t, time: n }) {
  return (0, i.jsxs)(`div`, {
    className: `activity`,
    children: [
      (0, i.jsx)(`span`, { className: `avatar small`, children: e[0] }),
      (0, i.jsxs)(`div`, {
        children: [
          (0, i.jsx)(`b`, { children: e }),
          (0, i.jsx)(`p`, { children: t }),
        ],
      }),
      (0, i.jsx)(`small`, { children: n }),
    ],
  });
}
function S({
  courses: e,
  search: t,
  setSearch: n,
  category: r,
  setCategory: a,
  levelFilter: o,
  setLevelFilter: s,
  recruit: c,
  setRecruit: l,
  applyFilters: u,
  reset: d,
  go: f,
}) {
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsx)(p, {
        kicker: `교육과정 조회`,
        title: `교육과정 조회`,
        description: `성장을 위한 다양한 교육과정을 찾아보세요.`,
      }),
      (0, i.jsxs)(`section`, {
        className: `filter-card`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `search-wrap`,
            children: [
              (0, i.jsx)(`span`, { children: `⌕` }),
              (0, i.jsx)(`input`, {
                value: t,
                onChange: (e) => n(e.target.value),
                onKeyDown: (e) => {
                  e.key === `Enter` && u();
                },
                placeholder: `과정명, 키워드 검색`,
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `filters`,
            children: [
              (0, i.jsx)(C, {
                value: r,
                set: a,
                options: [
                  `전체 분야`,
                  `직무역량`,
                  `리더십`,
                  `개발`,
                  `커뮤니케이션`,
                  `법정의무`,
                  `AI·DX`,
                ],
              }),
              (0, i.jsx)(C, {
                value: o,
                set: s,
                options: [`전체 레벨`, `레벨 1`, `레벨 2`, `레벨 3`],
              }),
              (0, i.jsx)(C, {
                value: c,
                set: l,
                options: [`모집 상태`, `모집 중`, `모집 예정`, `마감 임박`],
              }),
              (0, i.jsxs)(`div`, {
                className: `filter-actions`,
                children: [
                  (0, i.jsx)(`button`, {
                    className: `secondary reset`,
                    onClick: d,
                    children: `↻ 초기화`,
                  }),
                  (0, i.jsx)(`button`, {
                    className: `primary search-button`,
                    onClick: u,
                    children: `검색`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `result-head`,
        children: [
          (0, i.jsxs)(`p`, {
            children: [
              `총 `,
              (0, i.jsx)(`b`, { children: e.length }),
              `개 과정`,
            ],
          }),
          (0, i.jsxs)(`select`, {
            "aria-label": `정렬`,
            children: [
              (0, i.jsx)(`option`, { children: `추천순` }),
              (0, i.jsx)(`option`, { children: `최신순` }),
              (0, i.jsx)(`option`, { children: `마감 임박순` }),
            ],
          }),
        ],
      }),
      e.length
        ? (0, i.jsx)(`div`, {
            className: `course-grid`,
            children: e.map((e) => (0, i.jsx)(T, { course: e, go: f }, e.id)),
          })
        : (0, i.jsx)(`div`, {
            className: `empty`,
            children: (0, i.jsx)(`h3`, {
              children: `조건에 맞는 과정이 없습니다`,
            }),
          }),
      (0, i.jsxs)(`div`, {
        className: `pagination`,
        children: [
          (0, i.jsx)(`button`, { disabled: !0, children: `‹` }),
          (0, i.jsx)(`button`, { className: `selected`, children: `1` }),
          (0, i.jsx)(`button`, { children: `2` }),
          (0, i.jsx)(`button`, { children: `›` }),
        ],
      }),
    ],
  });
}
function C({ value: e, set: t, options: n }) {
  return (0, i.jsx)(`select`, {
    value: e,
    onChange: (e) => t(e.target.value),
    children: n.map((e) => (0, i.jsx)(`option`, { children: e }, e)),
  });
}
function w({ accent: e, label: t, compact: n = !1 }) {
  return (0, i.jsxs)(`div`, {
    className: `course-visual ${e} ${n ? `compact` : ``}`,
    children: [
      (0, i.jsx)(`div`, { className: `visual-grid` }),
      (0, i.jsx)(`span`, { className: `visual-orb` }),
      t && (0, i.jsx)(`b`, { children: t }),
      (0, i.jsx)(`i`, {}),
      (0, i.jsx)(`i`, {}),
      (0, i.jsx)(`i`, {}),
    ],
  });
}
function T({ course: e, go: t }) {
  return (0, i.jsxs)(`article`, {
    className: `course-card`,
    children: [
      (0, i.jsxs)(`div`, {
        className: `visual-wrap`,
        children: [
          (0, i.jsx)(w, { accent: e.accent, label: e.category }),
          (0, i.jsx)(`span`, {
            className: `status-ribbon ${e.status === `마감 임박` ? `danger` : e.status === `모집 예정` ? `muted` : ``}`,
            children: e.status,
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `course-card-body`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `course-labels`,
            children: [
              (0, i.jsx)(`span`, {
                className: `category-text`,
                children: e.category,
              }),
              (0, i.jsx)(`span`, {
                className: `level-badge`,
                children: e.level,
              }),
            ],
          }),
          (0, i.jsx)(`h2`, { children: e.title }),
          (0, i.jsx)(`div`, {
            className: `card-meta`,
            children: (0, i.jsxs)(`span`, { children: [`▣ `, e.duration] }),
          }),
          e.enrolled && (0, i.jsx)(E, { value: e.progress ?? 0, small: !0 }),
          (0, i.jsxs)(`div`, {
            className: `card-actions`,
            children: [
              (0, i.jsx)(`button`, {
                className: `secondary`,
                onClick: () => t(`courseDetail`, e.id),
                children: `상세 보기`,
              }),
              (0, i.jsx)(`button`, {
                className: `primary`,
                onClick: () =>
                  t(e.enrolled ? `lectureDetail` : `courseDetail`, e.id),
                children: e.enrolled ? `강의실 입장` : `수강 신청`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function te({ course: e, go: t, apply: n }) {
  let a = o[e.id] ?? [],
    [s, c] = (0, r.useState)(`intro`);
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsxs)(`div`, {
        className: `breadcrumb`,
        children: [
          (0, i.jsx)(`button`, {
            onClick: () => t(`catalog`),
            children: `교육과정`,
          }),
          (0, i.jsx)(`span`, { children: `›` }),
          e.category,
          (0, i.jsx)(`span`, { children: `›` }),
          `과정 상세`,
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `detail-hero`,
        children: [
          (0, i.jsx)(w, { accent: e.accent, label: e.category }),
          (0, i.jsxs)(`div`, {
            className: `detail-intro`,
            children: [
              (0, i.jsxs)(`div`, {
                children: [
                  (0, i.jsx)(`span`, {
                    className: `badge blue-badge`,
                    children: e.category,
                  }),
                  (0, i.jsx)(`span`, {
                    className: `badge green-badge`,
                    children: e.status,
                  }),
                ],
              }),
              (0, i.jsx)(`h1`, { children: e.title }),
              (0, i.jsx)(`p`, { children: e.description }),
              (0, i.jsxs)(`div`, {
                className: `detail-meta`,
                children: [
                  (0, i.jsxs)(`span`, {
                    children: [
                      (0, i.jsx)(`small`, { children: `레벨` }),
                      (0, i.jsx)(`b`, { children: e.level }),
                    ],
                  }),
                  (0, i.jsxs)(`span`, {
                    children: [
                      (0, i.jsx)(`small`, { children: `학습 시간` }),
                      (0, i.jsx)(`b`, { children: e.duration }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `detail-layout`,
        children: [
          (0, i.jsxs)(`article`, {
            className: `detail-content`,
            children: [
              (0, i.jsxs)(`div`, {
                className: `tabs`,
                role: `tablist`,
                children: [
                  (0, i.jsx)(`button`, {
                    role: `tab`,
                    "aria-selected": s === `intro`,
                    className: s === `intro` ? `active` : ``,
                    onClick: () => c(`intro`),
                    children: `과정 소개`,
                  }),
                  (0, i.jsx)(`button`, {
                    role: `tab`,
                    "aria-selected": s === `curriculum`,
                    className: s === `curriculum` ? `active` : ``,
                    onClick: () => c(`curriculum`),
                    children: `커리큘럼`,
                  }),
                ],
              }),
              s === `intro`
                ? (0, i.jsxs)(`div`, {
                    className: `tab-panel`,
                    role: `tabpanel`,
                    children: [
                      (0, i.jsxs)(`section`, {
                        children: [
                          (0, i.jsx)(`h2`, { children: `과정 소개` }),
                          (0, i.jsxs)(`p`, {
                            children: [
                              e.description,
                              ` 실무에서 바로 활용할 수 있도록 핵심 개념과 사례를 중심으로 구성했습니다.`,
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(`section`, {
                        children: [
                          (0, i.jsx)(`h2`, { children: `학습 목표` }),
                          (0, i.jsxs)(`ul`, {
                            className: `check-list`,
                            children: [
                              (0, i.jsx)(`li`, {
                                children: `과정의 핵심 개념과 업무 적용 방법을 이해할 수 있습니다.`,
                              }),
                              (0, i.jsx)(`li`, {
                                children: `주요 사례를 통해 실제 상황에 필요한 판단 기준을 익힐 수 있습니다.`,
                              }),
                              (0, i.jsx)(`li`, {
                                children: `학습한 내용을 자신의 업무에 적용할 수 있습니다.`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(`section`, {
                        children: [
                          (0, i.jsx)(`h2`, { children: `추천 대상` }),
                          (0, i.jsxs)(`div`, {
                            className: `target-tags`,
                            children: [
                              (0, i.jsxs)(`span`, {
                                children: [
                                  e.category,
                                  ` 역량을 키우고 싶은 구성원`,
                                ],
                              }),
                              (0, i.jsx)(`span`, {
                                children: `실무 적용 방법을 배우고 싶은 분`,
                              }),
                              (0, i.jsx)(`span`, {
                                children: `체계적으로 기초를 다지고 싶은 분`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, i.jsx)(`div`, {
                    className: `tab-panel curriculum-panel`,
                    role: `tabpanel`,
                    children: (0, i.jsxs)(`section`, {
                      children: [
                        (0, i.jsx)(`h2`, { children: `전체 커리큘럼` }),
                        (0, i.jsxs)(`p`, {
                          className: `curriculum-guide`,
                          children: [
                            `총 `,
                            a.length,
                            `개 차시로 구성되어 있습니다.`,
                          ],
                        }),
                        (0, i.jsx)(`div`, {
                          className: `curriculum`,
                          children: a.map((e, t) =>
                            (0, i.jsxs)(
                              `div`,
                              {
                                children: [
                                  (0, i.jsx)(`span`, {
                                    children: String(t + 1).padStart(2, `0`),
                                  }),
                                  (0, i.jsxs)(`div`, {
                                    children: [
                                      (0, i.jsx)(`b`, { children: e.title }),
                                      (0, i.jsxs)(`small`, {
                                        children: [`영상 · `, e.duration],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(`em`, {
                                    children:
                                      t < 2 ? `미리보기` : `수강 신청 후 공개`,
                                  }),
                                ],
                              },
                              e.title,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
            ],
          }),
          (0, i.jsxs)(`aside`, {
            className: `apply-card`,
            children: [
              (0, i.jsx)(`h2`, { children: `수강 정보` }),
              (0, i.jsxs)(`dl`, {
                children: [
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`dt`, { children: `신청 기간` }),
                      (0, i.jsx)(`dd`, { children: `2026.08.01 ~ 08.31` }),
                    ],
                  }),
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`dt`, { children: `교육 기간` }),
                      (0, i.jsx)(`dd`, { children: e.period }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(`button`, {
                className: `primary large`,
                onClick: n,
                children: e.enrolled ? `나의 학습으로 이동` : `수강 신청`,
              }),
              (0, i.jsx)(`small`, {
                children: `누구나 자유롭게 신청하고 바로 학습할 수 있습니다.`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ne({ kind: e, course: t, close: n, enroll: r, goLearning: a }) {
  return (0, i.jsx)(`div`, {
    className: `modal-backdrop`,
    onMouseDown: (e) => {
      e.currentTarget === e.target && n();
    },
    children: (0, i.jsxs)(`div`, {
      className: `modal`,
      children: [
        (0, i.jsx)(`button`, {
          className: `modal-close`,
          onClick: n,
          children: `×`,
        }),
        e === `apply`
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(`span`, { className: `modal-icon`, children: `?` }),
                (0, i.jsx)(`h2`, { children: `수강 신청하시겠습니까?` }),
                (0, i.jsxs)(`p`, {
                  children: [
                    (0, i.jsx)(`b`, { children: t.title }),
                    (0, i.jsx)(`br`, {}),
                    `신청 후 나의 학습에서 바로 시작할 수 있습니다.`,
                  ],
                }),
                (0, i.jsxs)(`div`, {
                  className: `modal-actions`,
                  children: [
                    (0, i.jsx)(`button`, {
                      className: `secondary`,
                      onClick: n,
                      children: `취소`,
                    }),
                    (0, i.jsx)(`button`, {
                      className: `primary`,
                      onClick: r,
                      children: `신청하기`,
                    }),
                  ],
                }),
              ],
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(`span`, {
                  className: `modal-icon success`,
                  children: `✓`,
                }),
                (0, i.jsx)(`h2`, { children: `수강 신청이 완료되었습니다` }),
                (0, i.jsx)(`p`, {
                  children: `나의 학습에서 과정과 학습 일정을 확인해 주세요.`,
                }),
                (0, i.jsx)(`div`, {
                  className: `modal-actions one`,
                  children: (0, i.jsx)(`button`, {
                    className: `primary`,
                    onClick: a,
                    children: `나의 학습으로 이동`,
                  }),
                }),
              ],
            }),
      ],
    }),
  });
}
function re({ courses: e, go: t, notify: n }) {
  let [o, s] = (0, r.useState)(`active`),
    [c, l] = (0, r.useState)(null),
    u = [
      {
        ...a[1],
        period: `2026.04.01 ~ 2026.04.30`,
        duration: `4시간`,
        progress: 100,
      },
      {
        ...a[3],
        period: `2026.03.10 ~ 2026.03.31`,
        duration: `3시간`,
        progress: 100,
      },
      {
        ...a[5],
        period: `2026.01.15 ~ 2026.02.15`,
        duration: `5시간`,
        progress: 100,
      },
    ],
    f = [`2026.04.30`, `2026.03.31`, `2026.02.15`],
    m = Math.round(
      e.reduce((e, t) => e + (t.progress ?? 0), 0) / Math.max(e.length, 1),
    );
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsx)(p, {
        kicker: `나의 학습`,
        title: `나의 학습`,
        description: `수강 중인 과정과 완료한 학습 내역을 확인하세요.`,
      }),
      (0, i.jsxs)(`div`, {
        className: `tabs standalone`,
        role: `tablist`,
        children: [
          (0, i.jsxs)(`button`, {
            className: o === `active` ? `active` : ``,
            onClick: () => s(`active`),
            children: [
              `수강 중인 과정 `,
              (0, i.jsx)(`span`, { children: e.length }),
            ],
          }),
          (0, i.jsxs)(`button`, {
            className: o === `completed` ? `active` : ``,
            onClick: () => s(`completed`),
            children: [
              `수강 완료 과정 `,
              (0, i.jsx)(`span`, { children: u.length }),
            ],
          }),
        ],
      }),
      o === `active`
        ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(`div`, {
                className: `learning-summary`,
                children: [
                  (0, i.jsx)(`span`, { children: `전체 학습 현황` }),
                  (0, i.jsxs)(`b`, { children: [`평균 진도율 `, m, `%`] }),
                  (0, i.jsx)(E, { value: m }),
                ],
              }),
              (0, i.jsx)(`div`, {
                className: `learning-list`,
                children: e.map((e) =>
                  (0, i.jsxs)(
                    `article`,
                    {
                      className: `learning-card`,
                      children: [
                        (0, i.jsx)(w, { accent: e.accent, label: e.category }),
                        (0, i.jsxs)(`div`, {
                          className: `learning-info`,
                          children: [
                            (0, i.jsxs)(`div`, {
                              className: `learning-title`,
                              children: [
                                (0, i.jsx)(`span`, {
                                  className: `badge blue-badge`,
                                  children: e.category,
                                }),
                                (0, i.jsxs)(`span`, {
                                  className: `days`,
                                  children: [`D-`, e.id === 5 ? 17 : 56],
                                }),
                              ],
                            }),
                            (0, i.jsx)(`h2`, { children: e.title }),
                            (0, i.jsxs)(`p`, {
                              children: [
                                `교육 기간 `,
                                e.period,
                                ` · 최근 학습일 2026.08.05`,
                              ],
                            }),
                            (0, i.jsx)(E, { value: e.progress ?? 0 }),
                            (0, i.jsxs)(`div`, {
                              className: `learning-actions`,
                              children: [
                                (0, i.jsxs)(`span`, {
                                  children: [
                                    Math.min(
                                      5,
                                      Math.floor((e.progress ?? 0) / 20),
                                    ),
                                    `/5 차시 완료`,
                                  ],
                                }),
                                (0, i.jsx)(`button`, {
                                  className: `secondary`,
                                  onClick: () => t(`courseDetail`, e.id),
                                  children: `과정 정보`,
                                }),
                                (0, i.jsx)(`button`, {
                                  className: `primary`,
                                  onClick: () => t(`lectureDetail`, e.id),
                                  children: `강의실 입장`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          })
        : (0, i.jsx)(`div`, {
            className: `completed-list`,
            children: u.map((e, t) =>
              (0, i.jsxs)(
                `article`,
                {
                  className: `completed-card`,
                  children: [
                    (0, i.jsx)(w, { accent: e.accent, label: e.category }),
                    (0, i.jsxs)(`div`, {
                      className: `completed-info`,
                      children: [
                        (0, i.jsxs)(`div`, {
                          children: [
                            (0, i.jsx)(`span`, {
                              className: `badge completed-badge`,
                              children: `수강 완료`,
                            }),
                            (0, i.jsx)(`span`, {
                              className: `category-text`,
                              children: e.category,
                            }),
                          ],
                        }),
                        (0, i.jsx)(`h2`, { children: e.title }),
                        (0, i.jsxs)(`dl`, {
                          children: [
                            (0, i.jsxs)(`div`, {
                              children: [
                                (0, i.jsx)(`dt`, { children: `교육 기간` }),
                                (0, i.jsx)(`dd`, { children: e.period }),
                              ],
                            }),
                            (0, i.jsxs)(`div`, {
                              children: [
                                (0, i.jsx)(`dt`, { children: `수료일` }),
                                (0, i.jsx)(`dd`, { children: f[t] }),
                              ],
                            }),
                            (0, i.jsxs)(`div`, {
                              children: [
                                (0, i.jsx)(`dt`, { children: `총 학습 시간` }),
                                (0, i.jsx)(`dd`, { children: e.duration }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)(`button`, {
                          className: `secondary certificate-button`,
                          onClick: () => l(e),
                          children: `수료증 발급`,
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
      c &&
        (0, i.jsx)(`div`, {
          className: `modal-backdrop`,
          children: (0, i.jsxs)(`div`, {
            className: `modal certificate-modal`,
            children: [
              (0, i.jsx)(`button`, {
                className: `modal-close`,
                onClick: () => l(null),
                children: `×`,
              }),
              (0, i.jsx)(d, {}),
              (0, i.jsx)(`p`, {
                className: `certificate-kicker`,
                children: `CERTIFICATE OF COMPLETION`,
              }),
              (0, i.jsx)(`h2`, { children: `수료증` }),
              (0, i.jsxs)(`p`, {
                className: `certificate-number`,
                children: [`제 2026-`, String(c.id).padStart(4, `0`), `호`],
              }),
              (0, i.jsx)(`strong`, { children: `김지수` }),
              (0, i.jsxs)(`p`, {
                children: [
                  `위 사람은 아래 교육과정을 성실히 이수하였으므로`,
                  (0, i.jsx)(`br`, {}),
                  `이 수료증을 수여합니다.`,
                ],
              }),
              (0, i.jsx)(`h3`, { children: c.title }),
              (0, i.jsxs)(`dl`, {
                children: [
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`dt`, { children: `교육 기간` }),
                      (0, i.jsx)(`dd`, { children: c.period }),
                    ],
                  }),
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`dt`, { children: `총 학습 시간` }),
                      (0, i.jsx)(`dd`, { children: c.duration }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(`p`, {
                className: `certificate-date`,
                children: [
                  `2026년 8월 5일`,
                  (0, i.jsx)(`br`, {}),
                  (0, i.jsx)(`b`, { children: `SPARKPLUS 대표이사` }),
                ],
              }),
              (0, i.jsx)(`div`, { className: `stamp`, children: `직인` }),
              (0, i.jsxs)(`div`, {
                className: `modal-actions`,
                children: [
                  (0, i.jsx)(`button`, {
                    className: `secondary`,
                    onClick: () => n(`수료증 인쇄 화면을 준비했습니다.`),
                    children: `인쇄`,
                  }),
                  (0, i.jsx)(`button`, {
                    className: `primary`,
                    onClick: () => n(`수료증 PDF 다운로드가 완료되었습니다.`),
                    children: `PDF 다운로드`,
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function E({ value: e, small: t = !1 }) {
  return (0, i.jsxs)(`div`, {
    className: `progress-block ${t ? `small` : ``} ${e >= 80 ? `high` : e >= 40 ? `middle` : `low`}`,
    children: [
      (0, i.jsxs)(`div`, {
        children: [
          (0, i.jsx)(`span`, { children: `진도율` }),
          (0, i.jsxs)(`b`, { children: [e, `%`] }),
        ],
      }),
      (0, i.jsx)(`div`, {
        className: `progress-track`,
        children: (0, i.jsx)(`i`, { style: { width: `${e}%` } }),
      }),
    ],
  });
}
function D({ course: e, go: t }) {
  let n = o[e.id] ?? [],
    r = e.progress ?? 0,
    a = Math.min(n.length, Math.floor(r / 20)),
    s = n.map((e, t) => ({
      ...e,
      status: t < a ? `수강 완료` : t === a ? `수강 중` : `미수강`,
    }));
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsxs)(`div`, {
        className: `breadcrumb`,
        children: [
          (0, i.jsx)(`button`, {
            onClick: () => t(`learning`),
            children: `나의 학습`,
          }),
          (0, i.jsx)(`span`, { children: `›` }),
          `강의 상세`,
        ],
      }),
      (0, i.jsxs)(`section`, {
        className: `lecture-hero`,
        children: [
          (0, i.jsx)(w, { accent: e.accent, label: e.category }),
          (0, i.jsxs)(`div`, {
            className: `lecture-hero-copy`,
            children: [
              (0, i.jsxs)(`div`, {
                children: [
                  (0, i.jsx)(`span`, {
                    className: `badge blue-badge`,
                    children: e.category,
                  }),
                  (0, i.jsx)(`span`, {
                    className: `level-badge`,
                    children: e.level,
                  }),
                ],
              }),
              (0, i.jsx)(`h1`, { children: e.title }),
              (0, i.jsx)(`p`, { children: e.description }),
              (0, i.jsxs)(`div`, {
                className: `lecture-meta`,
                children: [
                  (0, i.jsxs)(`span`, {
                    children: [
                      (0, i.jsx)(`small`, { children: `교육 기간` }),
                      (0, i.jsx)(`b`, { children: e.period }),
                    ],
                  }),
                  (0, i.jsxs)(`span`, {
                    children: [
                      (0, i.jsx)(`small`, { children: `전체 학습 시간` }),
                      (0, i.jsx)(`b`, { children: e.duration }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(`div`, {
                className: `lecture-progress`,
                children: [
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`span`, { children: `전체 진도율` }),
                      (0, i.jsxs)(`b`, { children: [r, `%`] }),
                    ],
                  }),
                  (0, i.jsx)(E, { value: r }),
                ],
              }),
              (0, i.jsx)(`button`, {
                className: `primary`,
                onClick: () => t(`player`, e.id),
                children: `학습 이어가기`,
              }),
            ],
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `lesson-status-guide`,
        children: [
          (0, i.jsxs)(`span`, {
            children: [
              (0, i.jsx)(`i`, { className: `complete`, children: `✓` }),
              ` 수강 완료 `,
              (0, i.jsx)(`b`, { children: a }),
            ],
          }),
          (0, i.jsxs)(`span`, {
            children: [
              (0, i.jsx)(`i`, { className: `current`, children: `▶` }),
              ` 수강 중 `,
              (0, i.jsx)(`b`, { children: +(a < n.length) }),
            ],
          }),
          (0, i.jsxs)(`span`, {
            children: [
              (0, i.jsx)(`i`, { className: `not-started`, children: `–` }),
              ` 미수강 `,
              (0, i.jsx)(`b`, { children: Math.max(0, n.length - a - 1) }),
            ],
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `lecture-grid`,
        children: [
          (0, i.jsxs)(`section`, {
            className: `card span-2`,
            children: [
              (0, i.jsx)(_, {
                title: `전체 커리큘럼`,
                action: (0, i.jsxs)(`span`, {
                  className: `course-count`,
                  children: [a, `/`, n.length, ` 차시 완료`],
                }),
              }),
              (0, i.jsx)(`div`, {
                className: `lesson-list`,
                children: s.map((n, r) =>
                  (0, i.jsxs)(
                    `button`,
                    {
                      className: `lesson-${n.status === `수강 완료` ? `complete` : n.status === `수강 중` ? `current` : `not-started`}`,
                      onClick: () => t(`player`, e.id),
                      children: [
                        (0, i.jsx)(`span`, {
                          className: `lesson-state ${n.status === `수강 완료` ? `complete` : n.status === `수강 중` ? `current` : `not-started`}`,
                          children:
                            n.status === `수강 완료`
                              ? `✓`
                              : n.status === `수강 중`
                                ? `▶`
                                : r + 1,
                        }),
                        (0, i.jsxs)(`div`, {
                          children: [
                            (0, i.jsxs)(`small`, { children: [r + 1, `차시`] }),
                            (0, i.jsx)(`b`, { children: n.title }),
                            (0, i.jsxs)(`span`, {
                              children: [`영상 · `, n.duration],
                            }),
                          ],
                        }),
                        (0, i.jsx)(`em`, {
                          className: `state-label ${n.status === `수강 완료` ? `complete` : n.status === `수강 중` ? `current` : `not-started`}`,
                          children: n.status,
                        }),
                        (0, i.jsx)(`i`, { children: `›` }),
                      ],
                    },
                    n.title,
                  ),
                ),
              }),
            ],
          }),
          (0, i.jsxs)(`aside`, {
            children: [
              (0, i.jsxs)(`section`, {
                className: `card`,
                children: [
                  (0, i.jsx)(_, { title: `과정 공지` }),
                  (0, i.jsx)(y, {
                    title: `3차시 실습 자료가 업데이트되었습니다.`,
                    date: `08.04`,
                  }),
                  (0, i.jsx)(y, {
                    title: `학습 마감일을 확인해 주세요.`,
                    date: `07.30`,
                  }),
                ],
              }),
              (0, i.jsxs)(`section`, {
                className: `card file-card`,
                children: [
                  (0, i.jsx)(_, { title: `첨부 자료` }),
                  (0, i.jsxs)(`button`, {
                    children: [
                      (0, i.jsx)(`span`, { children: `PDF` }),
                      (0, i.jsxs)(`div`, {
                        children: [
                          (0, i.jsxs)(`b`, {
                            children: [e.category, ` 학습 자료.pdf`],
                          }),
                          (0, i.jsx)(`small`, { children: `2.4MB` }),
                        ],
                      }),
                      (0, i.jsx)(`em`, { children: `↓` }),
                    ],
                  }),
                  (0, i.jsxs)(`button`, {
                    children: [
                      (0, i.jsx)(`span`, { children: `XLS` }),
                      (0, i.jsxs)(`div`, {
                        children: [
                          (0, i.jsx)(`b`, { children: `실습 자료.xlsx` }),
                          (0, i.jsx)(`small`, { children: `820KB` }),
                        ],
                      }),
                      (0, i.jsx)(`em`, { children: `↓` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function O({
  course: e,
  go: t,
  lessonOpen: n,
  setLessonOpen: a,
  playing: s,
  setPlaying: c,
  videoProgress: l,
  saveProgress: u,
}) {
  let [d, f] = (0, r.useState)(`goals`),
    p = (o[e.id] ?? []).map((e, t) => ({
      ...e,
      status: t < 2 ? `수강 완료` : t === 2 ? `수강 중` : `미수강`,
    })),
    m = p[2] ?? { title: `현재 차시`, duration: `32분`, status: `수강 중` };
  return (0, i.jsxs)(`main`, {
    className: `player-page ${n ? `sidebar-open` : ``}`,
    children: [
      (0, i.jsxs)(`aside`, {
        className: `lesson-sidebar`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `sidebar-head`,
            children: [
              (0, i.jsxs)(`div`, {
                children: [
                  (0, i.jsx)(`small`, { children: e.category }),
                  (0, i.jsx)(`b`, { children: e.title }),
                ],
              }),
              (0, i.jsx)(`button`, { onClick: () => a(!1), children: `×` }),
            ],
          }),
          (0, i.jsx)(`div`, {
            className: `side-progress`,
            children: (0, i.jsx)(E, { value: e.progress ?? 0 }),
          }),
          (0, i.jsx)(`div`, {
            className: `sidebar-lessons`,
            children: p.map((e, t) =>
              (0, i.jsxs)(
                `button`,
                {
                  className: t === 2 ? `current` : ``,
                  children: [
                    (0, i.jsx)(`span`, {
                      className: e.status === `수강 완료` ? `completed` : ``,
                      children: e.status === `수강 완료` ? `✓` : t + 1,
                    }),
                    (0, i.jsxs)(`div`, {
                      children: [
                        (0, i.jsxs)(`small`, {
                          children: [t + 1, `차시 · `, e.status],
                        }),
                        (0, i.jsx)(`b`, { children: e.title }),
                        (0, i.jsx)(`em`, { children: e.duration }),
                      ],
                    }),
                  ],
                },
                e.title,
              ),
            ),
          }),
        ],
      }),
      (0, i.jsxs)(`section`, {
        className: `player-main`,
        children: [
          !n &&
            (0, i.jsx)(`button`, {
              className: `open-sidebar`,
              onClick: () => a(!0),
              children: `☰ 차시 목록`,
            }),
          (0, i.jsxs)(`div`, {
            className: `player-head`,
            children: [
              (0, i.jsxs)(`div`, {
                children: [
                  (0, i.jsx)(`span`, { children: `3차시` }),
                  (0, i.jsx)(`h1`, { children: m.title }),
                ],
              }),
              (0, i.jsx)(`button`, {
                className: `secondary exit-classroom`,
                onClick: () => t(`lectureDetail`, e.id),
                children: `← 강의실 나가기`,
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `video`,
            children: [
              (0, i.jsxs)(`div`, {
                className: `video-art`,
                children: [
                  (0, i.jsxs)(`div`, {
                    className: `data-card`,
                    children: [
                      (0, i.jsx)(`span`, { children: `03` }),
                      (0, i.jsx)(`h2`, { children: m.title }),
                      (0, i.jsxs)(`p`, {
                        children: [
                          e.category,
                          ` 업무에 바로 적용할 수 있는 핵심 내용을 학습합니다.`,
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(`button`, {
                    className: `play`,
                    onClick: () => c(!s),
                    children: s ? `Ⅱ` : `▶`,
                  }),
                ],
              }),
              (0, i.jsxs)(`div`, {
                className: `video-controls`,
                children: [
                  (0, i.jsx)(`button`, {
                    onClick: () => c(!s),
                    children: s ? `Ⅱ` : `▶`,
                  }),
                  (0, i.jsxs)(`span`, { children: [`08:42 / `, m.duration] }),
                  (0, i.jsx)(`div`, {
                    className: `video-track`,
                    children: (0, i.jsx)(`i`, { style: { width: `${l}%` } }),
                  }),
                  (0, i.jsx)(`button`, { children: `1.0x` }),
                  (0, i.jsx)(`button`, { children: `♩` }),
                  (0, i.jsx)(`button`, { children: `⛶` }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `auto-save`,
            children: [
              (0, i.jsx)(`span`, { children: `✓` }),
              (0, i.jsxs)(`p`, {
                children: [
                  (0, i.jsx)(`b`, {
                    children: `학습 진도는 자동으로 저장됩니다.`,
                  }),
                  (0, i.jsx)(`small`, {
                    children: `창을 닫기 전 수동으로 저장할 수도 있습니다.`,
                  }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `player-tabs`,
            role: `tablist`,
            children: [
              (0, i.jsx)(`button`, {
                className: d === `goals` ? `active` : ``,
                onClick: () => f(`goals`),
                children: `학습 목표`,
              }),
              (0, i.jsx)(`button`, {
                className: d === `contents` ? `active` : ``,
                onClick: () => f(`contents`),
                children: `주요 내용`,
              }),
              (0, i.jsxs)(`button`, {
                className: d === `files` ? `active` : ``,
                onClick: () => f(`files`),
                children: [`첨부 자료 `, (0, i.jsx)(`span`, { children: `2` })],
              }),
              (0, i.jsx)(`button`, {
                className: d === `memo` ? `active` : ``,
                onClick: () => f(`memo`),
                children: `학습 메모`,
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `player-tab-content`,
            children: [
              d === `goals` &&
                (0, i.jsxs)(`div`, {
                  className: `lesson-info`,
                  children: [
                    (0, i.jsx)(`h3`, { children: `이번 차시 학습 목표` }),
                    (0, i.jsxs)(`ul`, {
                      children: [
                        (0, i.jsxs)(`li`, {
                          children: [
                            m.title,
                            `의 핵심 개념을 이해할 수 있습니다.`,
                          ],
                        }),
                        (0, i.jsx)(`li`, {
                          children: `주요 원칙과 판단 기준을 실제 업무 상황에 적용할 수 있습니다.`,
                        }),
                        (0, i.jsx)(`li`, {
                          children: `학습 내용을 바탕으로 스스로 업무 개선 방법을 찾을 수 있습니다.`,
                        }),
                      ],
                    }),
                  ],
                }),
              d === `contents` &&
                (0, i.jsxs)(`div`, {
                  className: `lesson-info`,
                  children: [
                    (0, i.jsx)(`h3`, { children: `주요 내용` }),
                    (0, i.jsxs)(`ol`, {
                      children: [
                        (0, i.jsx)(`li`, {
                          children: `핵심 개념과 실무에서 자주 마주치는 상황`,
                        }),
                        (0, i.jsx)(`li`, {
                          children: `단계별 적용 방법과 확인해야 할 기준`,
                        }),
                        (0, i.jsx)(`li`, {
                          children: `사례를 통한 실전 적용과 주의사항`,
                        }),
                      ],
                    }),
                  ],
                }),
              d === `files` &&
                (0, i.jsxs)(`div`, {
                  className: `player-files`,
                  children: [
                    (0, i.jsxs)(`button`, {
                      children: [
                        (0, i.jsx)(`span`, { children: `PDF` }),
                        (0, i.jsxs)(`div`, {
                          children: [
                            (0, i.jsxs)(`b`, {
                              children: [e.category, ` 학습 자료.pdf`],
                            }),
                            (0, i.jsx)(`small`, { children: `2.4MB` }),
                          ],
                        }),
                        (0, i.jsx)(`em`, { children: `↓ 다운로드` }),
                      ],
                    }),
                    (0, i.jsxs)(`button`, {
                      children: [
                        (0, i.jsx)(`span`, { children: `XLS` }),
                        (0, i.jsxs)(`div`, {
                          children: [
                            (0, i.jsx)(`b`, {
                              children: `차시 실습 자료.xlsx`,
                            }),
                            (0, i.jsx)(`small`, { children: `820KB` }),
                          ],
                        }),
                        (0, i.jsx)(`em`, { children: `↓ 다운로드` }),
                      ],
                    }),
                  ],
                }),
              d === `memo` &&
                (0, i.jsx)(`textarea`, {
                  placeholder: `학습하면서 기억하고 싶은 내용을 자유롭게 메모해 보세요.`,
                }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `player-actions`,
            children: [
              (0, i.jsx)(`button`, {
                className: `secondary`,
                children: `← 이전 차시`,
              }),
              (0, i.jsx)(`button`, {
                className: `secondary save`,
                onClick: u,
                children: `진도 저장`,
              }),
              (0, i.jsx)(`button`, {
                className: `primary`,
                onClick: u,
                children: `다음 차시 →`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function k({ go: e }) {
  let [t, n] = (0, r.useState)(``),
    [a, o] = (0, r.useState)(`전체`),
    s = c.filter(
      (e) => (a === `전체` || e.category === a) && (!t || e.title.includes(t)),
    );
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsx)(p, {
        kicker: `공지사항`,
        title: `공지사항`,
        description: `교육 운영과 시스템 이용에 필요한 소식을 확인하세요.`,
      }),
      (0, i.jsxs)(`section`, {
        className: `notice-search`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `search-wrap`,
            children: [
              (0, i.jsx)(`span`, { children: `⌕` }),
              (0, i.jsx)(`input`, {
                value: t,
                onChange: (e) => n(e.target.value),
                placeholder: `공지사항 제목을 검색해 주세요`,
              }),
            ],
          }),
          (0, i.jsxs)(`select`, {
            value: a,
            onChange: (e) => o(e.target.value),
            children: [
              (0, i.jsx)(`option`, { children: `전체` }),
              (0, i.jsx)(`option`, { children: `교육 안내` }),
              (0, i.jsx)(`option`, { children: `시스템` }),
              (0, i.jsx)(`option`, { children: `과정 안내` }),
              (0, i.jsx)(`option`, { children: `이벤트` }),
            ],
          }),
          (0, i.jsx)(`button`, { className: `primary`, children: `검색` }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `notice-result`,
        children: [
          `총 `,
          (0, i.jsx)(`b`, { children: s.length }),
          `개의 공지사항`,
        ],
      }),
      (0, i.jsxs)(`section`, {
        className: `notice-table`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `notice-table-head`,
            children: [
              (0, i.jsx)(`span`, { children: `분류` }),
              (0, i.jsx)(`span`, { children: `제목` }),
              (0, i.jsx)(`span`, { children: `작성자` }),
              (0, i.jsx)(`span`, { children: `등록일` }),
              (0, i.jsx)(`span`, { children: `조회수` }),
            ],
          }),
          s.map((t) =>
            (0, i.jsxs)(
              `button`,
              {
                onClick: () => e(`noticeDetail`, t.id),
                children: [
                  (0, i.jsx)(`span`, {
                    children: (0, i.jsx)(`em`, {
                      className: t.important ? `important-category` : ``,
                      children: t.category,
                    }),
                  }),
                  (0, i.jsxs)(`span`, {
                    className: `notice-title-cell`,
                    children: [
                      t.important && (0, i.jsx)(`b`, { children: `중요` }),
                      t.title,
                    ],
                  }),
                  (0, i.jsx)(`span`, { children: t.writer }),
                  (0, i.jsx)(`span`, { children: t.date }),
                  (0, i.jsx)(`span`, { children: t.views }),
                ],
              },
              t.id,
            ),
          ),
          s.length === 0 &&
            (0, i.jsx)(`div`, {
              className: `notice-empty`,
              children: `검색 결과가 없습니다.`,
            }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `pagination`,
        children: [
          (0, i.jsx)(`button`, { children: `‹` }),
          (0, i.jsx)(`button`, { className: `selected`, children: `1` }),
          (0, i.jsx)(`button`, { children: `2` }),
          (0, i.jsx)(`button`, { children: `›` }),
        ],
      }),
    ],
  });
}
function A({ notice: e, go: t }) {
  let n = c.findIndex((t) => t.id === e.id),
    r = c[n - 1],
    a = c[n + 1];
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsxs)(`div`, {
        className: `breadcrumb`,
        children: [
          (0, i.jsx)(`button`, {
            onClick: () => t(`noticeList`),
            children: `공지사항`,
          }),
          (0, i.jsx)(`span`, { children: `›` }),
          `공지 상세`,
        ],
      }),
      (0, i.jsxs)(`article`, {
        className: `notice-detail`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `notice-detail-head`,
            children: [
              (0, i.jsxs)(`div`, {
                children: [
                  (0, i.jsx)(`span`, {
                    className: `badge blue-badge`,
                    children: e.category,
                  }),
                  e.important &&
                    (0, i.jsx)(`span`, {
                      className: `badge important-badge`,
                      children: `중요 공지`,
                    }),
                ],
              }),
              (0, i.jsx)(`h1`, { children: e.title }),
              (0, i.jsxs)(`p`, {
                children: [
                  (0, i.jsxs)(`span`, { children: [`작성자 `, e.writer] }),
                  (0, i.jsxs)(`span`, { children: [`등록일 `, e.date] }),
                  (0, i.jsxs)(`span`, { children: [`조회수 `, e.views] }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `notice-detail-body`,
            children: [
              (0, i.jsx)(`p`, { children: e.content }),
              (0, i.jsx)(`p`, {
                children: `교육 일정과 학습 진행에 착오가 없도록 내용을 확인해 주시기 바랍니다. 문의 사항은 인재개발팀으로 전달해 주세요.`,
              }),
            ],
          }),
          e.file &&
            (0, i.jsxs)(`div`, {
              className: `notice-attachment`,
              children: [
                (0, i.jsx)(`b`, { children: `첨부파일` }),
                (0, i.jsxs)(`button`, {
                  children: [
                    (0, i.jsx)(`span`, { children: `PDF` }),
                    (0, i.jsxs)(`div`, {
                      children: [
                        (0, i.jsx)(`strong`, { children: e.file }),
                        (0, i.jsx)(`small`, { children: `1.8MB` }),
                      ],
                    }),
                    (0, i.jsx)(`em`, { children: `↓ 다운로드` }),
                  ],
                }),
              ],
            }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `notice-navigation`,
        children: [
          (0, i.jsxs)(`button`, {
            disabled: !r,
            onClick: () => r && t(`noticeDetail`, r.id),
            children: [
              (0, i.jsx)(`small`, { children: `이전 글` }),
              (0, i.jsx)(`span`, {
                children: r?.title ?? `이전 글이 없습니다.`,
              }),
            ],
          }),
          (0, i.jsxs)(`button`, {
            disabled: !a,
            onClick: () => a && t(`noticeDetail`, a.id),
            children: [
              (0, i.jsx)(`small`, { children: `다음 글` }),
              (0, i.jsx)(`span`, {
                children: a?.title ?? `다음 글이 없습니다.`,
              }),
            ],
          }),
        ],
      }),
      (0, i.jsx)(`div`, {
        className: `notice-detail-actions`,
        children: (0, i.jsx)(`button`, {
          className: `secondary`,
          onClick: () => t(`noticeList`),
          children: `목록으로`,
        }),
      }),
    ],
  });
}
function j({ initialTab: e, notify: t }) {
  let [n, a] = (0, r.useState)(e);
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsx)(p, {
        kicker: `프로필`,
        title: `프로필 설정`,
        description: `회원정보와 계정 보안 설정을 관리하세요.`,
      }),
      (0, i.jsxs)(`div`, {
        className: `profile-layout`,
        children: [
          (0, i.jsxs)(`aside`, {
            className: `profile-side`,
            children: [
              (0, i.jsx)(`div`, {
                className: `profile-avatar-large`,
                children: `김`,
              }),
              (0, i.jsx)(`h2`, { children: `김지수` }),
              (0, i.jsx)(`p`, { children: `People팀 · 매니저` }),
              (0, i.jsx)(`button`, {
                className: n === `info` ? `active` : ``,
                onClick: () => a(`info`),
                children: `회원정보 수정`,
              }),
              (0, i.jsx)(`button`, {
                className: n === `password` ? `active` : ``,
                onClick: () => a(`password`),
                children: `비밀번호 변경`,
              }),
            ],
          }),
          (0, i.jsx)(`section`, {
            className: `profile-content`,
            children:
              n === `info`
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(`div`, {
                        className: `profile-section-head`,
                        children: [
                          (0, i.jsx)(`h2`, { children: `회원정보 수정` }),
                          (0, i.jsx)(`p`, {
                            children: `회사에서 사용하는 기본 정보를 확인하고 연락처를 수정할 수 있습니다.`,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(`div`, {
                        className: `profile-form`,
                        children: [
                          (0, i.jsxs)(`label`, {
                            children: [
                              `이름`,
                              (0, i.jsx)(`input`, {
                                value: `김지수`,
                                disabled: !0,
                              }),
                            ],
                          }),
                          (0, i.jsxs)(`label`, {
                            children: [
                              `사번`,
                              (0, i.jsx)(`input`, {
                                value: `SP2024017`,
                                disabled: !0,
                              }),
                            ],
                          }),
                          (0, i.jsxs)(`label`, {
                            children: [
                              `부서`,
                              (0, i.jsx)(`input`, {
                                value: `People팀`,
                                disabled: !0,
                              }),
                            ],
                          }),
                          (0, i.jsxs)(`label`, {
                            children: [
                              `직급`,
                              (0, i.jsx)(`input`, {
                                value: `매니저`,
                                disabled: !0,
                              }),
                            ],
                          }),
                          (0, i.jsxs)(`label`, {
                            className: `full`,
                            children: [
                              `이메일`,
                              (0, i.jsx)(`input`, {
                                defaultValue: `user@company.com`,
                              }),
                            ],
                          }),
                          (0, i.jsxs)(`label`, {
                            className: `full`,
                            children: [
                              `전화번호`,
                              (0, i.jsx)(`input`, {
                                defaultValue: `010-1234-5678`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)(`div`, {
                        className: `profile-actions`,
                        children: (0, i.jsx)(`button`, {
                          className: `primary`,
                          onClick: () => t(`회원정보가 저장되었습니다.`),
                          children: `변경사항 저장`,
                        }),
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(`div`, {
                        className: `profile-section-head`,
                        children: [
                          (0, i.jsx)(`h2`, { children: `비밀번호 변경` }),
                          (0, i.jsx)(`p`, {
                            children: `안전한 계정 사용을 위해 주기적으로 비밀번호를 변경해 주세요.`,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(`div`, {
                        className: `password-form`,
                        children: [
                          (0, i.jsxs)(`label`, {
                            children: [
                              `현재 비밀번호`,
                              (0, i.jsx)(`input`, {
                                type: `password`,
                                placeholder: `현재 비밀번호를 입력해 주세요`,
                              }),
                            ],
                          }),
                          (0, i.jsxs)(`label`, {
                            children: [
                              `새 비밀번호`,
                              (0, i.jsx)(`input`, {
                                type: `password`,
                                placeholder: `영문, 숫자 포함 8자 이상`,
                              }),
                            ],
                          }),
                          (0, i.jsxs)(`label`, {
                            children: [
                              `새 비밀번호 확인`,
                              (0, i.jsx)(`input`, {
                                type: `password`,
                                placeholder: `새 비밀번호를 다시 입력해 주세요`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(`div`, {
                        className: `password-guide`,
                        children: [
                          (0, i.jsx)(`b`, { children: `비밀번호 설정 안내` }),
                          (0, i.jsx)(`span`, {
                            children: `영문과 숫자를 조합하여 8자 이상 입력해 주세요.`,
                          }),
                          (0, i.jsx)(`span`, {
                            children: `이전에 사용한 비밀번호와 다른 비밀번호를 권장합니다.`,
                          }),
                        ],
                      }),
                      (0, i.jsx)(`div`, {
                        className: `profile-actions`,
                        children: (0, i.jsx)(`button`, {
                          className: `primary`,
                          onClick: () => t(`비밀번호가 변경되었습니다.`),
                          children: `비밀번호 변경`,
                        }),
                      }),
                    ],
                  }),
          }),
        ],
      }),
    ],
  });
}
function M({ role: e, go: t }) {
  return (0, i.jsxs)(`main`, {
    className: `page placeholder`,
    children: [
      (0, i.jsx)(`span`, { children: `◫` }),
      (0, i.jsx)(`h1`, { children: `다음 단계에서 이어서 구현됩니다` }),
      (0, i.jsxs)(`p`, {
        children: [
          `현재 미리보기는 요청하신 1·2단계 핵심 흐름에 집중했습니다.`,
          (0, i.jsx)(`br`, {}),
          `공통 디자인과 내비게이션은 이후 화면에도 동일하게 적용됩니다.`,
        ],
      }),
      (0, i.jsx)(`button`, {
        className: `primary`,
        onClick: () => t(e === `user` ? `userDashboard` : `adminDashboard`),
        children: `대시보드로 돌아가기`,
      }),
    ],
  });
}
function N() {
  return (0, i.jsxs)(`footer`, {
    children: [
      (0, i.jsx)(d, {}),
      (0, i.jsx)(`span`, {
        children: `고객센터 · 이용약관 · 개인정보처리방침`,
      }),
      (0, i.jsx)(`small`, {
        children: `© 2026 SPARKPLUS. All rights reserved.`,
      }),
    ],
  });
}
export { l as default };
