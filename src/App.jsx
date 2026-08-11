Warning: truncated output (original token count: 81140)
Total output lines: 9572

import * as r from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  FilterIcon,
  Cancel01Icon,
  Edit02Icon,
  Delete02Icon,
  Add01Icon,
  Moon02Icon,
  Sun03Icon,
  ThumbsUpIcon,
  Award01Icon,
  Quiz01Icon,
  Home01Icon,
  BookOpen01Icon,
  UserGroupIcon,
  ChartHistogramIcon,
  Notification01Icon,
  UserCircleIcon,
  Logout01Icon,
  Download01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  PlayIcon,
  Menu01Icon,
  RefreshIcon,
  CheckmarkCircle02Icon,
  Medal01Icon,
  RankingIcon,
  SparklesIcon,
  Settings02Icon,
  ViewIcon,
  File01Icon,
  LockPasswordIcon,
  ArrowDown01Icon,
  Analytics01Icon,
} from "@hugeicons/core-free-icons";

const i = { jsx, jsxs, Fragment };
function Icon({ icon, size = 18, className = ``, strokeWidth = 1.7 }) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      color="currentColor"
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}
function menuIcon(label) {
  if (label.includes(`홈`) || label.includes(`대시보드`)) return Home01Icon;
  if (label.includes(`교육과정`) || label.includes(`학습`))
    return BookOpen01Icon;
  if (label.includes(`학습자`) || label.includes(`회원`)) return UserGroupIcon;
  if (label.includes(`공지`)) return Notification01Icon;
  if (label.includes(`통계`) || label.includes(`성과`))
    return ChartHistogramIcon;
  if (label.includes(`랭킹`)) return RankingIcon;
  if (label.includes(`퀴즈`)) return Quiz01Icon;
  if (label.includes(`반응`)) return ThumbsUpIcon;
  return Settings02Icon;
}
var a = [
    {
      id: 1,
      title: `데이터 분석 기초 입문`,
      category: `직무역량`,
      period: `2026.08.01 ~ 09.30`,
      lessons: 5,
      learners: 84,
      status: `운영 중`,
      rate: 68,
    },
    {
      id: 2,
      title: `처음 맡는 팀장을 위한 리더십`,
      category: `리더십`,
      period: `2026.08.18 ~ 10.10`,
      lessons: 6,
      learners: 32,
      status: `오픈 전`,
      rate: 0,
    },
    {
      id: 3,
      title: `생성형 AI 업무 활용`,
      category: `AX`,
      period: `2026.09.01 ~ 11.30`,
      lessons: 8,
      learners: 126,
      status: `오픈 전`,
      rate: 0,
    },
    {
      id: 4,
      title: `개인정보보호 필수교육`,
      category: `법정필수`,
      period: `2026.03.01 ~ 06.30`,
      lessons: 4,
      learners: 214,
      status: `종료`,
      rate: 82,
    },
  ],
  o = [
    {
      id: `SP1024`,
      name: `김수민`,
      dept: `People팀`,
      position: `인턴`,
      courses: 4,
      progress: 72,
      completed: 2,
      status: `재직`,
    },
    {
      id: `SP0988`,
      name: `이지은`,
      dept: `마케팅팀`,
      position: `매니저`,
      courses: 5,
      progress: 88,
      completed: 4,
      status: `재직`,
    },
    {
      id: `SP0761`,
      name: `박서준`,
      dept: `개발팀`,
      position: `팀장`,
      courses: 3,
      progress: 46,
      completed: 1,
      status: `재직`,
    },
    {
      id: `SP1142`,
      name: `최하늘`,
      dept: `세일즈팀`,
      position: `매니저`,
      courses: 6,
      progress: 61,
      completed: 3,
      status: `재직`,
    },
    {
      id: `SP1057`,
      name: `정유진`,
      dept: `운영팀`,
      position: `파트장`,
      courses: 4,
      progress: 95,
      completed: 4,
      status: `재직`,
    },
  ],
  s = [
    {
      id: 1,
      title: `2026년 하반기 법정필수교육 수강 안내`,
      category: `필수`,
      date: `2026.08.05`,
      views: 186,
    },
    {
      id: 2,
      title: `LMS 서비스 점검 안내`,
      category: `시스템`,
      date: `2026.08.02`,
      views: 94,
    },
    {
      id: 3,
      title: `신규 리더십 과정 오픈 안내`,
      category: `과정`,
      date: `2026.07.29`,
      views: 121,
    },
  ],
  c = [
    { label: `홈`, page: `home` },
    { label: `교육과정 관리`, page: `courses` },
    { label: `학습자 관리`, page: `learners` },
    {
      label: `교육 성과 관리`,
      page: `completionAdmin`,
      items: [
        { label: `수료 관리`, page: `completionAdmin` },
        { label: `설문·평가`, page: `assessmentAdmin` },
        { label: `통계·리포트`, page: `performance` },
        { label: `학습 리워드`, page: `rewards` },
      ],
    },
    { label: `공지사항 관리`, page: `notices` },
  ],
  l = {
    home: [`관리자 홈`, `사내 교육 운영 현황을 한눈에 확인하세요.`],
    courses: [
      `교육과정 목록`,
      `등록된 교육과정을 조회하고 등록·수정·삭제할 수 있습니다.`,
    ],
    content: [
      `교육과정 관리`,
      `과정 정보와 콘텐츠, 차시 및 수료 기준을 한곳에서 관리합니다.`,
    ],
    learners: [
      `전체 학습자 관리`,
      `부서별 학습 현황과 소속 임직원의 학습 정보를 확인합니다.`,
    ],
    learnerDetail: [
      `학습자 상세`,
      `개인별 수강 과정과 학습 진행 정보를 확인합니다.`,
    ],
    completionAdmin: [
      `수료 관리`,
      `교육과정별 학습자의 수료 현황을 확인하고 수료 처리 상태를 관리합니다.`,
    ],
    assessmentAdmin: [
      `설문·평가`,
      `교육과정별 설문 응답과 평가 결과를 확인합니다.`,
    ],
    performance: [
      `통계·리포트`,
      `전체 교육 운영 결과를 통계적으로 확인하고 성과를 비교합니다.`,
    ],
    rewards: [`학습 리워드`, `학습 랭킹과 뱃지 지급 현황을 관리합니다.`],
    assignments: [
      `교육 배정 관리`,
      `개인·부서·직급별 교육과정을 배정하고 필수 여부를 설정합니다.`,
    ],
    completion: [`수료 현황`, `수료자와 미수료자를 구분하여 관리합니다.`],
    surveys: [`설문 관리`, `과정별 만족도 설문과 응답 현황을 관리합니다.`],
    statistics: [`교육 통계`, `교육 참여와 수료 성과를 지표로 확인합니다.`],
    rankings: [`학습 랭킹`, `월간·연간 학습 순위와 리워드 대상을 확인합니다.`],
    engagement: [
      `강의 반응`,
      `좋아요와 수강 데이터를 바탕으로 인기 강의를 확인합니다.`,
    ],
    quizAdmin: [`퀴즈 관리`, `강의별 AI 퀴즈와 학습자 결과를 관리합니다.`],
    notices: [
      `공지사항 관리`,
      `임직원에게 노출되는 공지사항을 등록하고 관리합니다.`,
    ],
    profile: [`관리자 프로필`, `관리자 정보와 비밀번호를 안전하게 관리합니다.`],
  };
function u({ children: e, tone: t = `mint` }) {
  return (0, i.jsx)(`span`, { className: `badge ${t}`, children: e });
}
function d({ value: e }) {
  return (0, i.jsx)(`div`, {
    className: `progress ${e >= 80 ? `high` : e >= 50 ? `middle` : `low`}`,
    children: (0, i.jsx)(`span`, { style: { width: `${e}%` } }),
  });
}
function f({ logout: e }) {
  let [theme, setTheme] = (0, r.useState)(
    () => localStorage.getItem(`sparkplus-theme`) || `light`,
  );
  (0, r.useEffect)(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(`sparkplus-theme`, theme);
  }, [theme]);
  let [t, n] = (0, r.useState)(`home`),
    [s, u] = (0, r.useState)(null),
    [d, f] = (0, r.useState)(``),
    [m, h] = (0, r.useState)(`전체 소속`),
    [g, O] = (0, r.useState)(`전체 직급`),
    [k, A] = (0, r.useState)(null),
    [j, M] = (0, r.useState)(null),
    [N, P] = (0, r.useState)(`전체`),
    [F, I] = (0, r.useState)(!1),
    [L, R] = (0, r.useState)(a[0]),
    z = (0, r.useMemo)(
      () =>
        o.filter(
          (e) =>
            (e.name.includes(d) ||
              e.id.toLowerCase().includes(d.toLowerCase()) ||
              e.dept.toLowerCase().includes(d.toLowerCase())) &&
            (m === `전체 소속` || e.dept === m) &&
            (g === `전체 직급` || e.position === g),
        ),
      [d, m, g],
    ),
    B = (e) => {
      (n(e), u(null), I(!1), A(null));
    };
  return (0, i.jsxs)(`div`, {
    className: `admin-portal app-shell`,
    children: [
      (0, i.jsxs)(`header`, {
        className: `topbar`,
        children: [
          (0, i.jsxs)(`button`, {
            className: `brand`,
            onClick: () => B(`home`),
            children: [
              (0, i.jsx)(`img`, {
                className: `brand-logo`,
                src: `https://sparkplus-lms-prototype.min20993.chatgpt.site/sparkplus-logo-black.png`,
                alt: `SPARKPLUS`,
              }),
              (0, i.jsx)(`span`, { className: `brand-lms`, children: `LMS` }),
              (0, i.jsx)(`em`, { children: `ADMIN` }),
            ],
          }),
          (0, i.jsx)(`nav`, {
            className: `main-nav`,
            "aria-label": `관리자 메뉴`,
            children: c.map((e) =>
              (0, i.jsxs)(
                `div`,
                {
                  className: `nav-wrap`,
                  onMouseEnter: () => e.items && u(e.label),
                  onMouseLeave: () => e.items && u(null),
                  children: [
                    (0, i.jsx)(`button`, {
                      className: `nav-button ${e.page === t || (e.page === `courses` && t === `content`) || (e.page === `learners` && t === `learnerDetail`) || e.items?.some((e) => e.page === t) ? `active` : ``}`,
                      onClick: () =>
                        e.page ? B(e.page) : u(s === e.label ? null : e.label),
                      children: [
                        (0, i.jsx)(Icon, { icon: menuIcon(e.label) }),
                        (0, i.jsx)(`span`, { children: e.label }),
                      ],
                    }),
                    e.items &&
                      s === e.label &&
                      (0, i.jsx)(`div`, {
                        className: `dropdown`,
                        children: e.items.map((e) =>
                          (0, i.jsx)(
                            `button`,
                            {
                              onClick: () => B(e.page),
                              className: t === e.page ? `selected` : ``,
                              children: e.label,
                            },
                            e.page,
                          ),
                        ),
                      }),
                  ],
                },
                e.label,
              ),
            ),
          }),
          (0, i.jsx)(`button`, {
            className: `theme-toggle`,
            onClick: () => setTheme(theme === `light` ? `dark` : `light`),
            title: `라이트·다크 모드 전환`,
            children: (0, i.jsx)(Icon, {
              icon: theme === `light` ? Moon02Icon : Sun03Icon,
              size: 20,
            }),
          }),
          (0, i.jsxs)(`div`, {
            className: `profile-wrap`,
            onMouseEnter: () => I(!0),
            onMouseLeave: () => I(!1),
            children: [
              (0, i.jsxs)(`button`, {
                className: `profile-button`,
                onClick: () => I(!F),
                children: [
                  (0, i.jsx)(`span`, { className: `avatar`, children: `관` }),
                  (0, i.jsxs)(`span`, {
                    children: [
                      (0, i.jsx)(`b`, { children: `관리자` }),
                      (0, i.jsx)(`small`, { children: `People팀` }),
                    ],
                  }),
                ],
              }),
              F &&
                (0, i.jsxs)(`div`, {
                  className: `profile-menu`,
                  children: [
                    (0, i.jsx)(`button`, {
                      onClick: () => B(`profile`),
                      children: `프로필 수정`,
                    }),
                    (0, i.jsx)(`button`, {
                      onClick: () => B(`profile`),
                      children: `비밀번호 변경`,
                    }),
                    (0, i.jsx)(`hr`, {}),
                    (0, i.jsx)(`button`, { onClick: e, children: `로그아웃` }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, i.jsxs)(`main`, {
        className: `main ${t === `home` ? `admin-home-main` : t === `courses` ? `admin-courses-main` : t === `learners` ? `admin-learners-main` : [`completionAdmin`, `assessmentAdmin`, `performance`, `rewards`].includes(t) ? `admin-results-main` : ``}`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `page-heading ${t === `home` ? `admin-home-heading home-welcome` : t === `courses` ? `admin-course-heading home-welcome` : t === `learners` ? `admin-learner-heading home-welcome` : [`completionAdmin`, `assessmentAdmin`, `performance`, `rewards`].includes(t) ? `admin-results-heading home-welcome` : ``}`,
            children: [
              (0, i.jsxs)(`div`, {
                children: [
                  t !== `home` &&
                    t !== `courses` &&
                    t !== `learners` &&
                    ![
                      `completionAdmin`,
                      `assessmentAdmin`,
                      `performance`,
                      `rewards`,
                    ].includes(t) &&
                    (0, i.jsx)(`p`, { children: `SPARKPLUS LMS ADMIN` }),
                  (0, i.jsx)(`h1`, { children: l[t][0] }),
                  (0, i.jsx)(`span`, { children: l[t][1] }),
                ],
              }),
              t === `courses` &&
                (0, i.jsx)(`button`, {
                  className: `primary`,
                  onClick: () => M(`새 교육과정 등록`),
                  children: [
                    (0, i.jsx)(Icon, { icon: Add01Icon }),
                    `새 교육과정 등록`,
                  ],
                }),
              t === `notices` &&
                (0, i.jsx)(`button`, {
                  className: `primary`,
                  onClick: () => M(`공지사항 등록`),
                  children: [
                    (0, i.jsx)(Icon, { icon: Add01Icon }),
                    `공지사항 등록`,
                  ],
                }),
            ],
          }),
          t === `home` && (0, i.jsx)(p, { onGo: B }),
          t === `courses` &&
            (0, i.jsx)(CourseAdminGrid, {
              onEdit: (e) => {
                (R(e), B(`content`));
              },
            }),
          t === `content` &&
            (0, i.jsx)(CourseEditorV2, {
              selected: L,
              onBack: () => B(`courses`),
            }),
          t === `learners` &&
            (0, i.jsx)(LearnerDepartmentHub, {
              onSelect: (learner) => {
                B(`learnerDetail`);
                A(learner);
              },
            }),
          t === `learnerDetail` &&
            k &&
            (0, i.jsx)(LearnerProfilePage, {
              learner: k,
              onBack: () => B(`learners`),
            }),
          t === `assignments` &&
            (0, i.jsx)(x, { onCreate: () => M(`교육과정 배정`) }),
          t === `completionAdmin` && (0, i.jsx)(CompletionManagementPage, {}),
          t === `assessmentAdmin` && (0, i.jsx)(SurveyAssessmentPage, {}),
          t === `performance` && (0, i.jsx)(StatisticsReportPage, {}),
          t === `rewards` && (0, i.jsx)(LearningRewardsPage, {}),
          t === `completion` && (0, i.jsx)(S, { tab: N, setTab: P }),
          t === `surveys` && (0, i.jsx)(C, {}),
          t === `statistics` && (0, i.jsx)(w, {}),
          t === `rankings` && (0, i.jsx)(Qe, { type: `ranking` }),
          t === `engagement` && (0, i.jsx)(Qe, { type: `engagement` }),
          t === `quizAdmin` && (0, i.jsx)(Qe, { type: `quiz` }),
          t === `notices` && (0, i.jsx)(T, { onEdit: (e) => M(`${e} 수정`) }),
          t === `profile` && (0, i.jsx)(E, {}),
        ],
      }),
      j && (0, i.jsx)(D, { title: j, onClose: () => M(null) }),
    ],
  });
}
function p({ onGo: e }) {
  const data = [
    { month: `3월`, progress: 61, completion: 58 },
    { month: `4월`, progress: 66, completion: 62 },
    { month: `5월`, progress: 69, completion: 65 },
    { month: `6월`, progress: 72, completion: 69 },
    { month: `7월`, progress: 75, completion: 73 },
    { month: `8월`, progress: 79, completion: 78 },
  ];
  const [hovered, setHovered] = (0, r.useState)(null);
  const x = (index) => 54 + index * 96;
  const y = (value) => 214 - value * 1.82;
  const progressLine = data
    .map((item, index) => `${x(index)},${y(item.progress)}`)
    .join(` `);
  const completionLine = data
    .map((item, index) => `${x(index)},${y(item.completion)}`)
    .join(` `);

  const tasks = [
    {
      title: `학습 지연자`,
      count: 14,
      detail: `진도율이 낮거나 최근 학습 기록이 없는 학습자`,
      tone: `delay`,
      page: `learners`,
    },
    {
      title: `수료 처리 대기`,
      count: 7,
      detail: `수료 기준 충족 후 최종 처리를 기다리는 학습자`,
      tone: `waiting`,
      page: `completionAdmin`,
    },
    {
      title: `설문 마감 예정`,
      count: 3,
      detail: `7일 이내 응답이 마감되는 설문`,
      tone: `survey`,
      page: `assessmentAdmin`,
    },
  ];

  return (
    <>
      <section
        className="admin-summary admin-home-kpis"
        aria-label="교육 운영 요약"
      >
        {[
          [`운영 중인 과정`, `12`, `지난달 대비 +2개`],
          [`전체 학습자`, `248명`, `지난달 대비 +8명`],
          [`평균 진도율`, `79%`, `지난달 대비 +4.0%p`],
          [`평균 수료율`, `78%`, `지난달 대비 +4.2%p`],
        ].map(([label, value, note]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{note}</small>
          </div>
        ))}
      </section>

      <section className="admin-insight-grid admin-home-insights">
        <article className="panel trend-panel admin-home-trend">
          <div className="panel-head admin-chart-head">
            <div>
              <h2>학습 진행 및 수료 추이</h2>
              <p>최근 6개월의 평균 진도율과 수료율 변화를 확인하세요.</p>
            </div>
          </div>

          <div className="admin-chart-legend" aria-label="그래프 범례">
            <span className="progress-legend">평균 진도율</span>
            <span className="completion-legend">수료율</span>
          </div>

          <div
            className="admin-progress-chart"
            role="img"
            aria-label="최근 6개월 평균 진도율과 수료율 라인 그래프"
          >
            <div className="admin-chart-y-axis">
              {[100, 75, 50, 25, 0].map((value) => (
                <span key={value}>{value}%</span>
              ))}
            </div>
            <div className="admin-chart-canvas">
              <svg
                viewBox="0 0 588 230"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {[32, 77.5, 123, 168.5, 214].map((lineY) => (
                  <line
                    key={lineY}
                    x1="54"
                    x2="534"
                    y1={lineY}
                    y2={lineY}
                    className="grid-line"
                  />
                ))}
                <polyline
                  points={progressLine}
                  className="admin-chart-line progress-line"
                />
                <polyline
                  points={completionLine}
                  className="admin-chart-line completion-line"
                />
                {data.map((item, index) => (
                  <g key={item.month}>
                    <circle
                      cx={x(index)}
                      cy={y(item.progress)}
                      r="5"
                      className="admin-chart-dot progress-dot"
                    />
                    <circle
                      cx={x(index)}
                      cy={y(item.completion)}
                      r="5"
                      className="admin-chart-dot completion-dot"
                    />
                  </g>
                ))}
              </svg>
              <div className="admin-chart-hover-zones">
                {data.map((item, index) => (
                  <button
                    key={item.month}
                    type="button"
                    aria-label={`${item.month} 평균 진도율 ${item.progress}%, 수료율 ${item.completion}%`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(index)}
                    onBlur={() => setHovered(null)}
                  >
                    {hovered === index && (
                      <span className="admin-chart-tooltip">
                        <b>{item.month}</b>
                        <em>
                          <i className="progress-color" />
                          평균 진도율 <strong>{item.progress}%</strong>
                        </em>
                        <em>
                          <i className="completion-color" />
                          수료율 <strong>{item.completion}%</strong>
                        </em>
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <div className="admin-chart-months">
                {data.map((item) => (
                  <span key={item.month}>{item.month}</span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="panel attention-panel admin-home-attention">
          <div className="panel-head">
            <div>
              <h2>관리 필요 항목</h2>
              <p>확인이 필요한 관리 항목을 확인하세요.</p>
            </div>
          </div>
          <div className="admin-attention-list">
            {tasks.map((task) => (
              <button
                key={task.title}
                className={`task ${task.tone}`}
                onClick={() => e(task.page)}
              >
                <span>
                  <b>{task.title}</b>
                  <small>{task.detail}</small>
                </span>
                <strong>{task.count}명</strong>
                <em aria-hidden="true">→</em>
              </button>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
function m({ learner: e = !1 }) {
  return (0, i.jsxs)(`div`, {
    className: `filters`,
    children: [
      (0, i.jsxs)(`div`, {
        className: `search`,
        children: [
          (0, i.jsx)(Icon, { icon: Search01Icon }),
          (0, i.jsx)(`input`, {
            placeholder: e ? `이름 또는 사번 검색` : `과정명 검색`,
          }),
        ],
      }),
      (0, i.jsx)(`select`, {
        children: (0, i.jsx)(`option`, {
          children: e ? `전체 소속` : `전체 분야`,
        }),
      }),
      (0, i.jsx)(`select`, {
        children: (0, i.jsx)(`option`, {
          children: e ? `전체 직급` : `전체 상태`,
        }),
      }),
      (0, i.jsx)(`button`, { className: `secondary`, children: `검색` }),
      (0, i.jsx)(`button`, { className: `ghost`, children: `초기화` }),
    ],
  });
}
function h({ status: e }) {
  return (0, i.jsx)(u, {
    tone: e === `운영 중` ? `green` : e === `오픈 전` ? `blue` : `gray`,
    children: e,
  });
}
function g() {
  return (0, i.jsxs)(`div`, {
    className: `course-filters`,
    children: [
      (0, i.jsxs)(`div`, {
        className: `filter-title`,
        children: [
          (0, i.jsx)(`b`, { children: `교육과정 검색` }),
          (0, i.jsx)(`span`, {
            children: `원하는 조건을 선택한 후 검색해 주세요.`,
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `course-filter-fields`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `search course-search`,
            children: [
              (0, i.jsx)(Icon, { icon: Search01Icon }),
              (0, i.jsx)(`input`, { placeholder: `과정명을 입력해 주세요` }),
            ],
          }),
          (0, i.jsxs)(`select`, {
            "aria-label": `분야`,
            children: [
              (0, i.jsx)(`option`, { children: `전체 분야` }),
              (0, i.jsx)(`option`, { children: `직무역량` }),
              (0, i.jsx)(`option`, { children: `리더십` }),
              (0, i.jsx)(`option`, { children: `AX` }),
              (0, i.jsx)(`option`, { children: `법정필수` }),
            ],
          }),
          (0, i.jsxs)(`select`, {
            "aria-label": `상태`,
            children: [
              (0, i.jsx)(`option`, { children: `전체 상태` }),
              (0, i.jsx)(`option`, { children: `오픈 전` }),
              (0, i.jsx)(`option`, { children: `운영 중` }),
              (0, i.jsx)(`option`, { children: `종료` }),
            ],
          }),
          (0, i.jsxs)(`select`, {
            "aria-label": `대상 부서`,
            children: [
              (0, i.jsx)(`option`, { children: `전체 부서` }),
              (0, i.jsx)(`option`, { children: `People팀` }),
              (0, i.jsx)(`option`, { children: `개발팀` }),
              (0, i.jsx)(`option`, { children: `마케팅팀` }),
              (0, i.jsx)(`option`, { children: `세일즈팀` }),
            ],
          }),
          (0, i.jsxs)(`select`, {
            "aria-label": `대상 직급`,
            children: [
              (0, i.jsx)(`option`, { children: `전체 직급` }),
              (0, i.jsx)(`option`, { children: `인턴` }),
              (0, i.jsx)(`option`, { children: `매니저` }),
              (0, i.jsx)(`option`, { children: `파트장` }),
              (0, i.jsx)(`option`, { children: `팀장` }),
            ],
          }),
          (0, i.jsxs)(`button`, {
            className: `course-search-button`,
            children: [
              (0, i.jsx)(Icon, { icon: Search01Icon }),
              (0, i.jsx)(`span`, { children: `검색` }),
            ],
          }),
          (0, i.jsx)(`button`, {
            className: `filter-reset`,
            children: `초기화`,
          }),
        ],
      }),
    ],
  });
}
function CourseAdminGrid({ onEdit }) {
  const [query, setQuery] = r.useState(``);
  const [category, setCategory] = r.useState(`전체 분야`);
  const [status, setStatus] = r.useState(`전체 상태`);
  const [sort, setSort] = r.useState(`최신 등록순`);
  const [courses, setCourses] = r.useState(() => [...a]);
  const [openMenu, setOpenMenu] = r.useState(null);
  const filtered = courses
    .filter(
      (course) =>
        (!query || course.title.includes(query)) &&
        (category === `전체 분야` || course.category === category) &&
        (status === `전체 상태` || course.status === status),
    )
    .sort((first, second) =>
      sort === `최신 등록순` ? second.id - first.id : first.id - second.id,
    );
  const deleteCourse = (course) => {
    if (confirm(`'${course.title}' 교육과정을 삭제하시겠습니까?`)) {
      setCourses((current) => current.filter((item) => item.id !== course.id));
      setOpenMenu(null);
    }
  };
  return (
    <section className="course-admin-grid-page">
      <div className="course-card-filter">
        <div className="search">
          <Icon icon={Search01Icon} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="교육과정명을 검색해 주세요"
          />
        </div>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {[`전체 분야`, `직무역량`, `리더십`, `AX`, `법정필수`].map(
            (value) => (
              <option key={value}>{value}</option>
            ),
          )}
        </select>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          {[`전체 상태`, `오픈 전`, `운영 중`, `종료`].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <button
          className="filter-reset"
          onClick={() => {
            setQuery(``);
            setCategory(`전체 분야`);
            setStatus(`전체 상태`);
          }}
        >
          <Icon icon={RefreshIcon} />
          초기화
        </button>
      </div>
      <div className="course-admin-result">
        <div>
          <span>전체 교육과정</span>
          <b>{filtered.length}개</b>
        </div>
        <select
          className="course-sort-select"
          aria-label="교육과정 정렬"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option>최신 등록순</option>
          <option>오래된 등록순</option>
        </select>
      </div>
      <div className="admin-course-card-grid">
        {filtered.map((course, index) => (
          <article
            className="course-card toss-card admin-course-management-card"
            key={course.id}
            role="button"
            tabIndex={0}
            onClick={() => onEdit(course)}
            onKeyDown={(event) => {
              if (event.key === `Enter` || event.key === ` `) onEdit(course);
            }}
          >
            <div className="visual-wrap admin-course-visual">
              <J
                accent={[`blue`, `green`, `purple`, `red`][index % 4]}
                label={course.category}
              />
              <span
                className={`admin-course-status ${course.status === `운영 중` ? `running` : course.status === `오픈 전` ? `ready` : `closed`}`}
              >
                {course.status}
              </span>
              <div className="admin-course-menu-wrap">
                <button
                  type="button"
                  className="admin-course-more"
                  aria-label={`${course.title} 관리 메뉴`}
                  aria-expanded={openMenu === course.id}
                  onClick={(event) => {
                    event.stopPropagation();
                    setOpenMenu(openMenu === course.id ? null : course.id);
                  }}
                >
                  ⋯
                </button>
                {openMenu === course.id && (
                  <div className="admin-course-menu">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setOpenMenu(null);
                        onEdit(course);
                      }}
                    >
                      <Icon icon={Edit02Icon} size={15} /> 수정
                    </button>
                    <button
                      type="button"
                      className="delete"
                      onClick={(event) => {
                        event.stopPropagation();
                        deleteCourse(course);
                      }}
                    >
                      <Icon icon={Delete02Icon} size={15} /> 삭제
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="course-card-body">
              <div className="course-labels">
                <span className="category-text">{course.category}</span>
              </div>
              <h2>{course.title}</h2>
              <div className="admin-course-period">{course.period}</div>
              <div className="admin-course-metrics">
                <span>수강 {course.learners}명</span>
                <i aria-hidden="true" />
                <span>수료율 {course.rate}%</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="admin-course-empty">
          조건에 맞는 교육과정이 없습니다.
        </div>
      )}
    </section>
  );
}

function youtubeEmbedUrl(url) {
  if (!url) return ``;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/,
  );
  return match
    ? `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0`
    : ``;
}

function CourseEditorV2({ selected, onBack }) {
  const defaultDates = {
    1: [`2026-08-01`, `2026-09-30`],
    2: [`2026-08-18`, `2026-10-10`],
    3: [`2026-09-01`, `2026-11-30`],
    4: [`2026-03-01`, `2026-06-30`],
  };
  const baseLessons = [
    {
      title: `교육 소개 및 학습 안내`,
      description: `과정의 목표와 전체 학습 흐름을 확인합니다.`,
      duration: `18분`,
      videoUrl:
        selected.id === 3
          ? `https://youtu.be/P8pEFQBXbKI?si=QXqrVhzXOuFvw1_s`
          : ``,
      goals: `과정의 핵심 목표와 학습 순서를 이해할 수 있습니다.`,
      contents: `과정 소개\n학습 방법과 수료 흐름\n업무 적용 포인트`,
      attachments: `오리엔테이션 자료.pdf`,
      quizEnabled: true,
      quiz: [
        {
          question: `이번 차시의 핵심 학습 목표는 무엇인가요?`,
          type: `객관식`,
          answer: `목표와 학습 흐름 이해`,
        },
      ],
    },
    {
      title: `핵심 개념 이해`,
      description: `업무에 필요한 핵심 개념과 기본 원리를 학습합니다.`,
      duration: `24분`,
      videoUrl: ``,
      goals: `핵심 개념을 설명하고 업무 사례에 연결할 수 있습니다.`,
      contents: `핵심 용어\n기본 원칙\n실무 판단 기준`,
      attachments: `핵심 개념 요약.pdf`,
      quizEnabled: true,
      quiz: [
        {
          question: `핵심 원칙으로 올바른 것은 무엇인가요?`,
          type: `객관식`,
          answer: `상황과 목표를 먼저 확인한다`,
        },
      ],
    },
    {
      title: `실무 사례 분석`,
      description: `실제 업무 사례를 통해 적용 방법을 살펴봅니다.`,
      duration: `22분`,
      videoUrl: ``,
      goals: `사례의 문제를 분석하고 적절한 해결 방법을 선택할 수 있습니다.`,
      contents: `업무 사례\n문제 분석\n해결안 비교`,
      attachments: `사례 실습지.xlsx`,
      quizEnabled: false,
      quiz: [],
    },
    {
      title: `업무 적용 실습`,
      description: `학습 내용을 자신의 업무 상황에 직접 적용합니다.`,
      duration: `20분`,
      videoUrl: ``,
      goals: `학습 내용을 자신의 업무에 적용할 수 있습니다.`,
      contents: `적용 단계\n실습\n자가 점검`,
      attachments: `업무 적용 템플릿.docx`,
      quizEnabled: false,
      quiz: [],
    },
    {
      title: `최종 점검`,
      description: `핵심 내용을 복습하고 학습을 마무리합니다.`,
      duration: `15분`,
      videoUrl: ``,
      goals: `과정 전체의 핵심 내용을 정리할 수 있습니다.`,
      contents: `핵심 요약\n최종 점검\n다음 학습 안내`,
      attachments: `최종 요약.pdf`,
      quizEnabled: true,
      quiz: [
        {
          question: `과정에서 가장 중요하게 다룬 내용은 무엇인가요?`,
          type: `주관식`,
          answer: `핵심 개념의 실무 적용`,
        },
      ],
    },
  ].slice(0, selected.lessons || 5);
  const [form, setForm] = r.useState({
    title: selected.title,
    category: selected.category,
    status: selected.status,
    level: `레벨 2`,
    department: `전체 부서`,
    position: `전체 직급`,
    startDate: defaultDates[selected.id]?.[0] || `2026-08-01`,
    endDate: defaultDates[selected.id]?.[1] || `2026-09-30`,
    thumbnail: selected.thumbnail || ``,
    introduction: `${selected.title} 과정의 핵심 개념을 이해하고 실제 업무에 활용할 수 있도록 구성된 교육과정입니다.`,
    curriculumSummary: `기초 개념부터 실무 적용까지 단계적으로 학습합니다.`,
    lessons: selected.curriculum || baseLessons,
    surveyEnabled: true,
    surveyTitle: `과정 만족도 설문`,
  });
  const [editingIndex, setEditingIndex] = r.useState(null);
  const update = (key, value) =>
    setForm((current) => ({ ...current, [key]: value }));
  const updateLesson = (key, value) =>
    setForm((current) => ({
      ...current,
      lessons: current.lessons.map((lesson, index) =>
        index === editingIndex ? { ...lesson, [key]: value } : lesson,
      ),
    }));
  const lesson = editingIndex === null ? null : form.lessons[editingIndex];
  const addLesson = () => {
    setForm((current) => ({
      ...current,
      lessons: [
        ...current.lessons,
        {
          title: `새 차시`,
          description: `차시 소개를 입력해 주세요.`,
          duration: `20분`,
          videoUrl: ``,
          goals: `학습 목표를 입력해 주세요.`,
          contents: `주요 내용을 입력해 주세요.`,
          attachments: ``,
          quizEnabled: false,
          quiz: [],
        },
      ],
    }));
    setEditingIndex(form.lessons.length);
  };
  const addQuiz = () =>
    updateLesson(`quiz`, [
      ...(lesson.quiz || []),
      { question: `새 퀴즈 문항`, type: `객관식`, answer: `` },
    ]);
  const updateQuiz = (index, key, value) =>
    updateLesson(
      `quiz`,
      lesson.quiz.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      ),
    );
  const save = () => {
    if (confirm(`변경한 교육과정 정보를 저장하시겠습니까?`)) {
      Object.assign(selected, {
        ...form,
        period: `${form.startDate.replaceAll(`-`, `.`)} ~ ${form.endDate.replaceAll(`-`, `.`)}`,
        lessons: form.lessons.length,
        curriculum: form.lessons,
      });
      alert(`교육과정이 저장되었습니다.`);
    }
  };
  const remove = () => {
    if (
      confirm(
        `이 교육과정을 삭제하시겠습니까? 삭제한 과정은 복구할 수 없습니다.`,
      )
    ) {
      alert(`교육과정이 삭제되었습니다.`);
      onBack();
    }
  };
  return (
    <div className="course-editor-v2">
      <button className="department-back" onClick={onBack}>
        <Icon icon={ArrowLeft01Icon} />
        교육과정 목록으로
      </button>
      <section className="course-editor-v2-hero">
        <div className="course-editor-v2-thumb">
          {form.thumbnail ? (
            <img src={form.thumbnail} alt="강의 썸네일" />
          ) : (
            <>
              <Icon icon={BookOpen01Icon} size={34} />
              <span>강의 썸네일</span>
            </>
          )}
          <label>
            이미지 변경
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => update(`thumbnail`, reader.result);
                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>
        </div>
        <div>
          <span>교육과정 상세 수정</span>
          <h2>{form.title}</h2>
          <p>과정 정보와 차시별 영상·자료·퀴즈를 한 화면에서 관리합니다.</p>
        </div>
      </section>
      <section className="panel editor-section">
        <div className="editor-section-head">
          <div>
            <span>01</span>
            <h3>과정 기본 정보</h3>
          </div>
          <p>사용자 과정 상세 화면에 표시되는 정보입니다.</p>
        </div>
        <div className="course-edit-grid">
          <label className="wide">
            강의 제목
            <input
              value={form.title}
              onChange={(event) => update(`title`, event.target.value)}
            />
          </label>
          <label>
            분야
            <select
              value={form.category}
              onChange={(event) => update(`category`, event.target.value)}
            >
              {[`직무역량`, `리더십`, `AX`, `법정필수`].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            레벨
            <select
              value={form.level}
              onChange={(event) => update(`level`, event.target.value)}
            >
              {[`레벨 1`, `레벨 2`, `레벨 3`].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            상태
            <select
              value={form.status}
              onChange={(event) => update(`status`, event.target.value)}
            >
              {[`오픈 전`, `운영 중`, `종료`].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            대상 부서
            <select
              value={form.department}
              onChange={(event) => update(`department`, event.target.value)}
            >
              {[
                `전체 부서`,
                `People팀`,
                `개발팀`,
                `마케팅팀`,
                `세일즈팀`,
                `운영팀`,
              ].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            대상 직급
            <select
              value={form.position}
              onChange={(event) => update(`position`, event.target.value)}
            >
              {[`전체 직급`, `인턴`, `매니저`, `파트장`, `팀장`].map(
                (value) => (
                  <option key={value}>{value}</option>
                ),
              )}
            </select>
          </label>
          <div className="course-date-range wide">
            <label>
              교육 시작일
              <input
                type="date"
                value={form.startDate}
                onChange={(event) => update(`startDate`, event.target.value)}
              />
            </label>
            <span>–</span>
            <label>
              교육 종료일
              <input
                type="date"
                value={form.endDate}
                min={form.startDate}
                onChange={(event) => update(`endDate`, event.target.value)}
              />
            </label>
          </div>
          <label className="wide">
            강의 소개
            <textarea
              rows="5"
              value={form.introduction}
              onChange={(event) => update(`introduction`, event.target.value)}
            />
          </label>
        </div>
      </section>
      <section className="panel editor-section">
        <div className="editor-section-head">
          <div>
            <span>02</span>
            <h3>커리큘럼 및 차시</h3>
          </div>
          <p>차시 수정에서 영상·자료·학습 내용·퀴즈를 설정합니다.</p>
        </div>
        <label className="curriculum-summary">
          커리큘럼 소개
          <textarea
            rows="3"
            value={form.curriculumSummary}
            onChange={(event) =>
              update(`curriculumSummary`, event.target.value)
            }
          />
        </label>
        <div className="lesson-manage-list">
          {form.lessons.map((item, index) => (
            <article key={index}>
              <span>{String(index + 1).padStart(2, `0`)}</span>
              <div>
                <small>
                  {index + 1}차시 · {item.duration}
                </small>
                <b>{item.title}</b>
                <p>{item.description}</p>
              </div>
              <div className="lesson-setting-tags">
                <span className={item.videoUrl ? `done` : ``}>
                  <Icon icon={PlayIcon} size={13} />
                  {item.videoUrl ? `영상 등록` : `영상 미등록`}
                </span>
                <span className={item.quizEnabled ? `done` : ``}>
                  <Icon icon={Quiz01Icon} size={13} />
                  {item.quizEnabled
                    ? `퀴즈 ${item.quiz.length}문항`
                    : `퀴즈 없음`}
                </span>
              </div>
              <button
                className="secondary"
                onClick={() => setEditingIndex(index)}
              >
                <Icon icon={Edit02Icon} />
                차시 수정
              </button>
            </article>
          ))}
        </div>
        <button className="add-question" onClick={addLesson}>
          <Icon icon={Add01Icon} />
          차시 추가
        </button>
      </section>
      <section className="panel editor-section course-survey-compact">
        <div className="editor-section-head">
          <div>
            <span>03</span>
            <h3>과정 설문</h3>
          </div>
          <label className="setting-switch-label">
            <span>수강 완료 후 설문 노출</span>
            <button
              className={form.surveyEnabled ? `rule-switch on` : `rule-switch`}
              onClick={() => update(`surveyEnabled`, !form.surveyEnabled)}
            >
              <i />
            </button>
          </label>
        </div>
        <label>
          설문 제목
          <input
            value={form.surveyTitle}
            onChange={(event) => update(`surveyTitle`, event.target.value)}
          />
        </label>
      </section>
      <div className="course-editor-final-actions">
        <button className="danger-outline" onClick={remove}>
          <Icon icon={Delete02Icon} />
          과정 삭제
        </button>
        <button className="primary" onClick={save}>
          변경사항 저장
        </button>
      </div>
      {lesson && (
        <div
          className="overlay"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setEditingIndex(null)
          }
        >
          <aside className="drawer lesson-studio-drawer">
            <div className="drawer-head">
              <div>
                <span>{editingIndex + 1}차시 편집</span>
                <h2>{lesson.title}</h2>
              </div>
              <button onClick={() => setEditingIndex(null)}>
                <Icon icon={Cancel01Icon} />
              </button>
            </div>
            <div className="lesson-video-preview">
              {youtubeEmbedUrl(lesson.videoUrl) ? (
                <iframe
                  src={youtubeEmbedUrl(lesson.videoUrl)}
                  title="강의 영상 미리보기"
                  allowFullScreen
                />
              ) : (
                <div>
                  <Icon icon={PlayIcon} size={28} />
                  <b>영상 미리보기</b>
                  <span>YouTube 링크를 입력하면 영상이 표시됩니다.</span>
                </div>
              )}
            </div>
            <div className="lesson-studio-form">
              <label>
                차시명
                <input
                  value={lesson.title}
                  onChange={(event) =>
                    updateLesson(`title`, event.target.value)
                  }
                />
              </label>
              <label>
                차시 소개
                <textarea
                  rows="3"
                  value={lesson.description}
                  onChange={(event) =>
                    updateLesson(`description`, event.target.value)
                  }
                />
              </label>
              <div className="lesson-inline-fields">
                <label>
                  학습 시간
                  <input
                    value={lesson.duration}
                    onChange={(event) =>
                      updateLesson(`duration`, event.target.value)
                    }
                    placeholder="예: 24분"
                  />
                </label>
                <label>
                  YouTube 영상 링크
                  <input
                    value={lesson.videoUrl}
                    onChange={(event) =>
                      updateLesson(`videoUrl`, event.target.value)
                    }
                    placeholder="https://youtu.be/..."
                  />
                </label>
              </div>
              <label>
                학습 목표
                <textarea
                  rows="3"
                  value={lesson.goals}
                  onChange={(event) =>
                    updateLesson(`goals`, event.target.value)
                  }
                  placeholder="목표를 줄바꿈으로 구분해 주세요"
                />
              </label>
              <label>
                주요 내용
                <textarea
                  rows="4"
                  value={lesson.contents}
                  onChange={(event) =>
                    updateLesson(`contents`, event.target.value)
                  }
                  placeholder="주요 내용을 줄바꿈으로 구분해 주세요"
                />
              </label>
              <label>
                첨부자료
                <input
                  value={lesson.attachments}
                  onChange={(event) =>
                    updateLesson(`attachments`, event.target.value)
                  }
                  placeholder="파일명 또는 자료 링크"
                />
              </label>
              <div className="lesson-quiz-setting">
                <div>
                  <div>
                    <b>차시 퀴즈</b>
                    <span>현재 차시 영상과 자료를 기준으로 설정합니다.</span>
                  </div>
                  <button
                    className={
                      lesson.quizEnabled ? `rule-switch on` : `rule-switch`
                    }
                    onClick={() =>
                      updateLesson(`quizEnabled`, !lesson.quizEnabled)
                    }
                  >
                    <i />
                  </button>
                </div>
                {lesson.quizEnabled && (
                  <>
                    <div className="lesson-quiz-list">
                      {(lesson.quiz || []).map((question, index) => (
                        <article key={index}>
                          <span>Q{index + 1}</span>
                          <input
                            value={question.question}
                            onChange={(event) =>
                              updateQuiz(index, `question`, event.target.value)
                            }
                          />
                          <select
                            value={question.type}
                            onChange={(event) =>
                              updateQuiz(index, `type`, event.target.value)
                            }
                          >
                            <option>객관식</option>
                            <option>복수 선택</option>
                            <option>주관식</option>
                          </select>
                          <input
                            value={question.answer}
                            onChange={(event) =>
                              updateQuiz(index, `answer`, event.target.value)
                            }
                            placeholder="정답 또는 예시 답안"
                          />
                          <button
                            onClick={() =>
                              updateLesson(
                                `quiz`,
                                lesson.quiz.filter(
                                  (_, itemIndex) => itemIndex !== index,
                                ),
                              )
                            }
                          >
                            <Icon icon={Delete02Icon} />
                          </button>
                        </article>
                      ))}
                    </div>
                    <button className="add-question" onClick={addQuiz}>
                      <Icon icon={Add01Icon} />
                      퀴즈 문항 추가
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="lesson-studio-actions">
              <button className="primary" onClick={() => setEditingIndex(null)}>
                차시 적용
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function _({ onEdit: e }) {
  return (0, i.jsxs)(`section`, {
    className: `course-list-page`,
    children: [
      (0, i.jsx)(g, {}),
      (0, i.jsxs)(`div`, {
        className: `course-list-head`,
        children: [
          (0, i.jsx)(`span`, { children: `전체 교육과정` }),
          (0, i.jsxs)(`b`, { children: [a.length, `개`] }),
        ],
      }),
      (0, i.jsx)(`div`, {
        className: `table-wrap course-table`,
        children: (0, i.jsxs)(`table`, {
          children: [
            (0, i.jsx)(`thead`, {
              children: (0, i.jsxs)(`tr`, {
                children: [
                  (0, i.jsx)(`th`, { children: `교육과정` }),
                  (0, i.jsx)(`th`, { children: `교육 기간` }),
                  (0, i.jsx)(`th`, { children: `학습자` }),
                  (0, i.jsx)(`th`, { children: `평균 진도율` }),
                  (0, i.jsx)(`th`, { children: `상태` }),
                  (0, i.jsx)(`th`, { children: `관리` }),
                ],
              }),
            }),
            (0, i.jsx)(`tbody`, {
              children: a.map((t) =>
                (0, i.jsxs)(
                  `tr`,
                  {
                    children: [
                      (0, i.jsxs)(`td`, {
                        children: [
                          (0, i.jsx)(`b`, { children: t.title }),
                          (0, i.jsx)(`small`, { children: t.category }),
                        ],
                      }),
                      (0, i.jsx)(`td`, { children: t.period }),
                      (0, i.jsxs)(`td`, { children: [t.learners, `명`] }),
                      (0, i.jsx)(`td`, {
                        children:
                          t.status === `오픈 전`
                            ? (0, i.jsx)(`span`, {
                                className: `not-started`,
                                children: `—`,
                              })
                            : (0, i.jsxs)(`div`, {
                                className: `table-progress`,
                                children: [
                                  (0, i.jsx)(d, { value: t.rate }),
                                  (0, i.jsxs)(`span`, {
                                    children: [t.rate, `%`],
                                  }),
                                ],
                              }),
                      }),
                      (0, i.jsx)(`td`, {
                        children: (0, i.jsx)(h, { status: t.status }),
                      }),
                      (0, i.jsx)(`td`, {
                        children: (0, i.jsx)(`div`, {
                          className: `actions`,
                          children: (0, i.jsx)(`button`, {
                            className: `edit-course`,
                            onClick: () => e(t),
                            title: `과정 관리`,
                            children: (0, i.jsx)(Icon, { icon: Edit02Icon }),
                          }),
                        }),
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function v({ selected: e, onBack: t }) {
  const initialLessons =
    e.curriculum ||
    [
      {
        title: `교육 소개 및 학습 안내`,
        description: `과정의 목표와 전체 학습 흐름을 확인합니다.`,
        content: `강의 영상 · 18분`,
        quiz: `AI 자동 생성 · 3문항`,
      },
      {
        title: `핵심 개념 이해`,
        description: `업무에 필요한 핵심 개념과 기본 원리를 학습합니다.`,
        content: `강의 영상 · 24분`,
        quiz: `AI 자동 생성 · 3문항`,
      },
      {
        title: `실무 사례 분석`,
        description: `실제 업무 사례를 통해 적용 방법을 살펴봅니다.`,
        content: `강의 영상 · 22분`,
        quiz: `직접 등록 · 5문항`,
      },
      {
        title: `업무 적용 실습`,
        description: `학습 내용을 자신의 업무 상황에 직접 적용합니다.`,
        content: `강의 영상 · 20분`,
        quiz: `사용 안 함`,
      },
      {
        title: `최종 점검 및 설문`,
        description: `핵심 내용을 복습하고 학습을 마무리합니다.`,
        content: `강의 영상 · 15분`,
        quiz: `AI 자동 생성 · 5문항`,
      },
    ].slice(0, e.lessons || 5);
  const [form, setForm] = (0, r.useState)({
    title: e.title || ``,
    category: e.category || `직무역량`,
    status: e.status || `오픈 전`,
    department: e.department || `전체 부서`,
    position: e.position || `전체 직급`,
    period: e.period || ``,
    introduction:
      e.introduction ||
      `${e.title} 과정의 핵심 개념을 이해하고 실제 업무에 활용할 수 있도록 구성된 교육과정입니다.`,
    curriculumSummary:
      e.curriculumSummary ||
      `기초 개념부터 실무 적용까지 단계적으로 학습합니다.`,
    thumbnail: e.thumbnail || ``,
    curriculum: initialLessons,
    quizQuestions: e.quizQuestions || [
      {
        question: `강의의 핵심 내용을 가장 잘 설명한 것은 무엇인가요?`,
        type: `객관식`,
        score: 20,
      },
      {
        question: `실무 적용 시 가장 먼저 확인해야 할 사항을 작성해 주세요.`,
        type: `주관식`,
        score: 20,
      },
    ],
    surveyQuestions: e.surveyQuestions || [
      { question: `교육 내용에 전반적으로 만족하셨나요?`, type: `5점 척도` },
      {
        question: `업무에 도움이 된 내용을 자유롭게 작성해 주세요.`,
        type: `서술형`,
      },
    ],
  });
  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const updateLesson = (index, key, value) =>
    setForm((prev) => ({
      ...prev,
      curriculum: prev.curriculum.map((lesson, i) =>
        i === index ? { ...lesson, [key]: value } : lesson,
      ),
    }));
  const addLesson = () =>
    setForm((prev) => ({
      ...prev,
      curriculum: [
        ...prev.curriculum,
        {
          title: `새 차시`,
          description: `차시별 강의 소개를 입력해 주세요.`,
          content: `강의 영상`,
          quiz: `사용 안 함`,
        },
      ],
    }));
  const removeLesson = (index) =>
    setForm((prev) => ({
      ...prev,
      curriculum: prev.curriculum.filter((_, i) => i !== index),
    }));
  const updateQuestion = (group, index, key, value) =>
    setForm((prev) => ({
      ...prev,
      [group]: prev[group].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      ),
    }));
  const addQuestion = (group) =>
    setForm((prev) => ({
      ...prev,
      [group]: [
        ...prev[group],
        group === `quizQuestions`
          ? { question: `새 퀴즈 문항`, type: `객관식`, score: 20 }
          : { question: `새 설문 문항`, type: `5점 척도` },
      ],
    }));
  const removeQuestion = (group, index) =>
    setForm((prev) => ({
      ...prev,
      [group]: prev[group].filter((_, itemIndex) => itemIndex !== index),
    }));
  const uploadThumbnail = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update(`thumbnail`, reader.result);
    reader.readAsDataURL(file);
  };
  const save = () => {
    Object.assign(e, { ...form, lessons: form.curriculum.length });
    alert(`교육과정 정보가 저장되었습니다.`);
  };
  return (
    <div className="course-manage-page course-editor-page">
      <button className="back-to-list" onClick={t}>
        <Icon icon={ArrowLeft01Icon} />
        교육과정 목록으로
      </button>

      <section className="course-editor-hero">
        <div className="course-thumbnail-editor">
          <div className="course-thumbnail-preview">
            {form.thumbnail ? (
              <img src={form.thumbnail} alt="강의 썸네일 미리보기" />
            ) : (
              <div>
                <b>강의 썸네일</b>
                <span>권장 비율 16:9</span>
              </div>
            )}
          </div>
          <label className="secondary thumbnail-upload">
            이미지 변경
            <input type="file" accept="image/*" onChange={uploadThumbnail} />
          </label>
          <input
            value={form.thumbnail}
            onChange={(event) => update(`thumbnail`, event.target.value)}
            placeholder="또는 이미지 URL을 입력해 주세요"
          />
        </div>
        <div className="course-editor-heading">
          <span>교육과정 상세 수정</span>
          <h2>{form.title || `과정명을 입력해 주세요`}</h2>
          <p>
            과정의 기본 정보부터 커리큘럼과 차시별 콘텐츠까지 한 화면에서 수정할
            수 있습니다.
          </p>
          <div className="content-actions">
            <button
              className="danger-outline"
              onClick={() => confirm(`이 교육과정을 삭제하시겠습니까?`)}
            >
              과정 삭제
            </button>
            <button className="primary" onClick={save}>
              변경사항 저장
            </button>
          </div>
        </div>
      </section>

      <section className="panel editor-section">
        <div className="editor-section-head">
          <div>
            <span>01</span>
            <h3>강의 기본 정보</h3>
          </div>
          <p>사용자 화면에 표시되는 과정 정보를 입력해 주세요.</p>
        </div>
        <div className="course-edit-grid">
          <label className="wide">
            강의 제목
            <input
              value={form.title}
              onChange={(event) => update(`title`, event.target.value)}
            />
          </label>
          <label>
            분야
            <select
              value={form.category}
              onChange={(event) => update(`category`, event.target.value)}
            >
              {[`직무역량`, `리더십`, `AX`, `법정필수`].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            상태
            <select
              value={form.status}
              onChange={(event) => update(`status`, event.target.value)}
            >
              {[`오픈 전`, `운영 중`, `종료`].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            대상 부서
            <select
              value={form.department}
              onChange={(event) => update(`department`, event.target.value)}
            >
              {[
                `전체 부서`,
                `People팀`,
                `개발팀`,
                `마케팅팀`,
                `세일즈팀`,
                `운영팀`,
              ].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            대상 직급
            <select
              value={form.position}
              onChange={(event) => update(`position`, event.target.value)}
            >
              {[`전체 직급`, `인턴`, `매니저`, `파트장`, `팀장`].map(
                (value) => (
                  <option key={value}>{value}</option>
                ),
              )}
            </select>
          </label>
          <label className="wide">
            교육 기간
            <input
              value={form.period}
              onChange={(event) => update(`period`, event.target.value)}
              placeholder="예: 2026.08.01 ~ 2026.09.30"
            />
          </label>
          <label className="wide">
            강의 소개
            <textarea
              rows="5"
              value={form.introduction}
              onChange={(event) => update(`introduction`, event.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="panel editor-section">
        <div className="editor-section-head">
          <div>
            <span>02</span>
            <h3>커리큘럼</h3>
          </div>
          <p>과정 전체의 학습 흐름과 차시별 강의 내용을 구성해 주세요.</p>
        </div>
        <label className="curriculum-summary">
          커리큘럼 소개
          <textarea
            rows="3"
            value={form.curriculumSummary}
            onChange={(event) =>
              update(`curriculumSummary`, event.target.value)
            }
          />
        </label>
        <div className="lesson-editor-list">
          {form.curriculum.map((lesson, index) => (
            <article className="lesson-editor-card" key={index}>
              <div className="lesson-editor-no">
                <span>{String(index + 1).padStart(2, `0`)}</span>
                <b>{index + 1}차시</b>
              </div>
              <div className="lesson-editor-fields">
                <label>
                  차시명
                  <input
                    value={lesson.title}
                    onChange={(event) =>
                      updateLesson(index, `title`, event.target.value)
                    }
                  />
                </label>
                <label>
                  차시별 강의 소개
                  <textarea
                    rows="3"
                    value={lesson.description}
                    onChange={(event) =>
                      updateLesson(index, `description`, event.target.value)
                    }
                  />
                </label>
                <label>
                  강의 영상·자료 정보
                  <input
                    value={lesson.content}
                    onChange={(event) =>
                      updateLesson(index, `content`, event.target.value)
                    }
                    placeholder="예: 강의 영상 · 18분 / PDF 자료 1개"
                  />
                </label>
                <label>
                  퀴즈 설정
                  <select
                    value={lesson.quiz || `사용 안 함`}
                    onChange={(event) =>
                      updateLesson(index, `quiz`, event.target.value)
                    }
                  >
                    <option>사용 안 함</option>
                    <option>AI 자동 생성 · 3문항</option>
                    <option>AI 자동 생성 · 5문항</option>
                    <option>직접 등록 · 5문항</option>
                  </select>
                </label>
              </div>
              <button
                className="remove-lesson"
                onClick={() => removeLesson(index)}
                title="차시 삭제"
              >
                <Icon icon={Delete02Icon} />
              </button>
            </article>
          ))}
        </div>
        <button className="add-lesson" onClick={addLesson}>
          <Icon icon={Add01Icon} />
          차시 추가
        </button>
      </section>

      <section className="panel editor-section assessment-editor-section">
        <div className="editor-section-head">
          <div>
            <span>03</span>
            <h3>퀴즈 설정</h3>
          </div>
          <p>이 과정에서 사용할 평가 문항을 작성하고 수정합니다.</p>
        </div>
        <div className="question-editor-list">
          {form.quizQuestions.map((item, index) => (
            <article className="question-editor-row" key={`quiz-${index}`}>
              <b>Q{index + 1}</b>
              <input
                value={item.question}
                onChange={(event) =>
                  updateQuestion(
                    `quizQuestions`,
                    index,
                    `question`,
                    event.target.value,
                  )
                }
              />
              <select
                value={item.type}
                onChange={(event) =>
                  updateQuestion(
                    `quizQuestions`,
                    index,
                    `type`,
                    event.target.value,
                  )
                }
              >
                <option>객관식</option>
                <option>복수 선택</option>
                <option>주관식</option>
              </select>
              <label>
                <input
                  type="number"
                  value={item.score}
                  onChange={(event) =>
                    updateQuestion(
                      `quizQuestions`,
                      index,
                      `score`,
                      event.target.value,
                    )
                  }
                />
                점
              </label>
              <button
                onClick={() => removeQuestion(`quizQuestions`, index)}
                title="문항 삭제"
              >
                <Icon icon={Delete02Icon} />
              </button>
            </article>
          ))}
        </div>
        <button
          className="add-question"
          onClick={() => addQuestion(`quizQuestions`)}
        >
          <Icon icon={Add01Icon} />
          퀴즈 문항 추가
        </button>
      </section>

      <section className="panel editor-section assessment-editor-section">
        <div className="editor-section-head">
          <div>
            <span>04</span>
            <h3>설문 설정</h3>
          </div>
          <p>수강 완료 후 노출할 만족도 설문을 구성합니다.</p>
        </div>
        <div className="question-editor-list">
          {form.surveyQuestions.map((item, index) => (
            <article
              className="question-editor-row survey-question-row"
              key={`survey-${index}`}
            >
              <b>{index + 1}</b>
              <input
                value={item.question}
                onChange={(event) =>
                  updateQuestion(
                    `surveyQuestions`,
                    index,
                    `question`,
                    event.target.value,
                  )
                }
              />
              <select
                value={item.type}
                onChange={(event) =>
                  updateQuestion(
                    `surveyQuestions`,
                    index,
                    `type`,
                    event.target.value,
                  )
                }
              >
                <option>5점 척도</option>
                <option>단일 선택</option>
                <option>서술형</option>
              </select>
              <button
                onClick={() => removeQuestion(`surveyQuestions`, index)}
                title="문항 삭제"
              >
                <Icon icon={Delete02Icon} />
              </button>
            </article>
          ))}
        </div>
        <button
          className="add-question"
          onClick={() => addQuestion(`surveyQuestions`)}
        >
          <Icon icon={Add01Icon} />
          설문 문항 추가
        </button>
      </section>

      <div className="course-editor-footer">
        <button className="secondary" onClick={t}>
          취소
        </button>
        <button className="primary" onClick={save}>
          변경사항 저장
        </button>
      </div>
    </div>
  );
}
function LegacyLearnerDepartmentHub({ onSelect }) {
  const [selectedDept, setSelectedDept] = r.useState(null);
  const [query, setQuery] = r.useState(``);
  const [position, setPosition] = r.useState(`전체 직급`);
  const departmentMeta = [
    {
      name: `People팀`,
      icon: UserGroupIcon,
      tone: `blue`,
      members: 24,
      progress: 84,
      completion: 78,
      required: 3,
    },
    {
      name: `개발팀`,
      icon: Analytics01Icon,
      tone: `violet`,
      members: 54,
      progress: 76,
      completion: 69,
      required: 8,
    },
    {
      name: `마케팅팀`,
      icon: ChartHistogramIcon,
      tone: `coral`,
      members: 38,
      progress: 88,
      completion: 83,
      required: 4,
    },
    {
      name: `세일즈팀`,
      icon: RankingIcon,
      tone: `green`,
      members: 46,
      progress: 71,
      completion: 65,
      required: 11,
    },
    {
      name: `운영팀`,
      icon: Settings02Icon,
      tone: `amber`,
      members: 57,
      progress: 81,
      completion: 75,
      required: 7,
    },
    {
      name: `공간디자인팀`,
      icon: File01Icon,
      tone: `sky`,
      members: 29,
      progress: 79,
      completion: 72,
      required: 5,
    },
  ];
  const names = [
    `김수민`,
    `이지은`,
    `박서준`,
    `최하늘`,
    `정유진`,
    `김도윤`,
    `윤서아`,
    `오지훈`,
    `한가람`,
    `서민재`,
    `조하은`,
    `송현우`,
    `강지수`,
    `백승민`,
    `임채원`,
    `문태영`,
    `장예린`,
    `고은호`,
    `유다인`,
    `신재욱`,
    `배서윤`,
    `노준호`,
    `홍예진`,
    `안도현`,
  ];
  const positions = [`인턴`, `매니저`, `팀장`, `파트장`];
  const employees = names.map((name, index) => {
    const dept = departmentMeta[index % departmentMeta.length].name;
    const progress = 48 + ((index * 13) % 51);
    const courses = 3 + (index % 5);
    return {
      id: `SP${String(1024 + index).padStart(4, `0`)}`,
      name,
      dept,
      position: positions[index % positions.length],
      courses,
      progress,
      completed: Math.min(courses, Math.floor(progress / 20)),
      status: `재직`,
    };
  });
  if (!selectedDept)
    return (
      <section className="department-hub">
        <div className="department-hub-intro">
          <div>
            <h2>부서를 선택해 주세요</h2>
            <p>
              부서별 학습 현황을 먼저 확인한 뒤 소속 학습자를 조회할 수
              있습니다.
            </p>
          </div>
          <span>
            전체 학습자 <b>248명</b>
          </span>
        </div>
        <div className="department-card-grid">
          {departmentMeta.map((dept) => (
            <button
              className="department-card"
              key={dept.name}
              onClick={() => {
                setSelectedDept(dept);
                setQuery(``);
                setPosition(`전체 직급`);
              }}
            >
              <div className={`department-icon ${dept.tone}`}>
                <Icon icon={dept.icon} size={22} />
              </div>
              <div className="department-card-title">
                <h3>{dept.name}</h3>
                <span>{dept.members}명</span>
              </div>
              <div className="department-card-metrics">
                <div>
                  <small>평균 진도율</small>
                  <b>{dept.progress}%</b>
                </div>
                <div>
                  <small>수료율</small>
                  <b>{dept.completion}%</b>
                </div>
              </div>
              <div className="department-progress">
                <i style={{ width: `${dept.progress}%` }} />
              </div>
              <span className={dept.required > 7 ? `department-attention` : ``}>
                {dept.required > 7 ? `관리 필요 ` : ``}
                {dept.required}명
              </span>
              <Icon icon={ArrowRight01Icon} className="department-arrow" />
            </button>
          ))}
        </div>
      </section>
    );
  const deptEmployees = employees.filter(
    (employee) =>
      employee.dept === selectedDept.name &&
      (!query ||
        employee.name.includes(query) ||
        employee.id.toLowerCase().includes(query.toLowerCase())) &&
      (position === `전체 직급` || employee.position === position),
  );
  return (
    <section className="department-detail-page">
      <button className="department-back" onClick={() => setSelectedDept(null)}>
        <Icon icon={ArrowLeft01Icon} />
        `전체 부서`
      </button>
      <div className="department-detail-hero">
        <div className={`department-icon large ${selectedDept.tone}`}>
          <Icon icon={selectedDept.icon} size={27} />
        </div>
        <div>
          <span>부서 학습 현황</span>
          <h2>{selectedDept.name}</h2>
          <p>
            소속 학습자의 최근 6개월 교육 참여 데이터를 기준으로 집계했습니다.
          </p>
        </div>
        <strong>
          {selectedDept.members}
          <small>명</small>
        </strong>
      </div>
      <div className="department-summary-strip">
        <div>
          <span>평균 진도율</span>
          <b>{selectedDept.progress}%</b>
          <small>전월 대비 +3.2%p</small>
        </div>
        <div>
          <span>수료율</span>
          <b>{selectedDept.completion}%</b>
          <small>전체 평균 대비 +1.8%p</small>
        </div>
        <div>
          <span>수강 중인 과정</span>
          <b>12개</b>
          <small>필수교육 3개 포함</small>
        </div>
        <div>
          <span>관리 필요 학습자</span>
          <b className="attention-number">{selectedDept.required}명</b>
          <small>진도율 50% 미만</small>
        </div>
      </div>
      <div className="department-analysis-grid">
        <article className="panel department-trend">
          <div className="panel-head">
            <div>
              <h2>월별 평균 진도율</h2>
              <p>3월부터 8월까지의 변화입니다.</p>
            </div>
          </div>
          <div className="department-bars">
            {[
              selectedDept.progress - 18,
              selectedDept.progress - 13,
              selectedDept.progress - 11,
              selectedDept.progress - 7,
              selectedDept.progress - 4,
              selectedDept.progress,
            ].map((value, index) => (
              <div key={index}>
                <span style={{ height: `${value}%` }} />
                <b>{value}%</b>
                <small>{index + 3}월</small>
              </div>
            ))}
          </div>
        </article>
        <article className="panel department-status">
          <div className="panel-head">
            <div>
              <h2>학습 상태</h2>
              <p>현재 배정된 교육 기준입니다.</p>
            </div>
          </div>
          {[
            [`수료`, selectedDept.completion, `green`],
            [`수강 중`, Math.max(8, 92 - selectedDept.completion), `blue`],
            [
              `미수강`,
              Math.max(
                3,
                100 -
                  Math.max(8, 92 - selectedDept.completion) -
                  selectedDept.completion,
              ),
              `coral`,
            ],
          ].map(([label, value, tone]) => (
            <div className="department-status-row" key={label}>
              <span>
                <i className={tone} />
                {label}
              </span>
              <b>{value}%</b>
              <div>
                <i className={tone} style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </article>
      </div>
      <div className="department-learners-head">
        <div>
          <h2>소속 학습자</h2>
          <span>{deptEmployees.length}명</span>
        </div>
      </div>
      <div className="learner-filter-panel compact-department-filter">
        <div className="learner-filter-fields">
          <div className="search">
            <Icon icon={Search01Icon} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="이름 또는 사번 검색"
            />
          </div>
          <select
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          >
            {[`전체 직급`, `인턴`, `매니저`, `파트장`, `팀장`].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <button
            className="filter-reset"
            onClick={() => {
              setQuery(``);
              setPosition(`전체 직급`);
            }}
          >
            초기화
          </button>
        </div>
      </div>
      <div className="table-wrap learner-table department-learner-table">
        <table>
          <thead>
            <tr>
              <th>임직원</th>
              <th>직급</th>
              <th>수강 과정</th>
              <th>평균 진도율</th>
              <th>수료</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {deptEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div className="person">
                    <span>{employee.name[0]}</span>
                    <div>
                      <b>{employee.name}</b>
                      <small>{employee.id}</small>
                    </div>
                  </div>
                </td>
                <td>{employee.position}</td>
                <td>{employee.courses}개</td>
                <td>
                  <div className="table-progress">
                    {d({ value: employee.progress })}
                    <span>{employee.progress}%</span>
                  </div>
                </td>
                <td>
                  <b className="completed-count">{employee.completed}개</b>
                </td>
                <td>
                  <button className="detail" onClick={() => onSelect(employee)}>
                    자세히 보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LearnerDepartmentHub({ onSelect }) {
  const departmentMeta = [
    {
      name: `People팀`,
      icon: UserGroupIcon,
      tone: `blue`,
      members: 24,
      progress: 84,
      completion: 78,
      required: 3,
    },
    {
      name: `개발팀`,
      icon: Analytics01Icon,
      tone: `violet`,
      members: 54,
      progress: 76,
      completion: 69,
      required: 8,
    },
    {
      name: `마케팅팀`,
      icon: ChartHistogramIcon,
      tone: `coral`,
      members: 38,
      progress: 88,
      completion: 83,
      required: 4,
    },
    {
      name: `세일즈팀`,
      icon: RankingIcon,
      tone: `green`,
      members: 46,
      progress: 71,
      completion: 65,
      required: 11,
    },
    {
      name: `운영팀`,
      icon: Settings02Icon,
      tone: `amber`,
      members: 57,
      progress: 81,
      completion: 75,
      required: 7,
    },
    {
      name: `공간디자인팀`,
      icon: File01Icon,
      tone: `sky`,
      members: 29,
      progress: 79,
      completion: 72,
      required: 5,
    },
  ];
  const names = [
    `김수민`,
    `이지은`,
    `박서준`,
    `최하늘`,
    `정유진`,
    `김도윤`,
    `윤서아`,
    `오지훈`,
    `한가람`,
    `서민재`,
    `조하은`,
    `송현우`,
    `강지수`,
    `백승민`,
    `임채원`,
    `문태영`,
    `장예린`,
    `고은호`,
    `유다인`,
    `신재욱`,
    `배서윤`,
    `노준호`,
    `홍예진`,
    `안도현`,
  ];
  const positions = [`인턴`, `매니저`, `팀장`, `파트장`];
  const employees = names.map((name, index) => {
    const dept = departmentMeta[index % departmentMeta.length].name;
    const progress = 48 + ((index * 13) % 51);
    const courses = 3 + (index % 5);
    return {
      id: `SP${String(1024 + index).padStart(4, `0`)}`,
      name,
      dept,
      position: positions[index % positions.length],
      courses,
      progress,
      completed: Math.min(courses, Math.floor(progress / 20)),
      status: `재직`,
      learningStatus:
        progress >= 85 ? `수료` : progress < 60 ? `관리 필요` : `수강 중`,
    };
  });
  const [selectedDept, setSelectedDept] = r.useState(null);
  const [query, setQuery] = r.useState(``);
  const [department, setDepartment] = r.useState(`전체 부서`);
  const [position, setPosition] = r.useState(`전체 직급`);
  const [learningStatus, setLearningStatus] = r.useState(`전체 학습 상태`);
  const activeDepartment = selectedDept || department;
  const filteredEmployees = employees.filter(
    (employee) =>
      (!query ||
        employee.name.includes(query) ||
        employee.dept.includes(query) ||
        employee.id.toLowerCase().includes(query.toLowerCase())) &&
      (activeDepartment === `전체 부서` ||
        employee.dept === activeDepartment) &&
      (position === `전체 직급` || employee.position === position) &&
      (learningStatus === `전체 학습 상태` ||
        employee.learningStatus === learningStatus),
  );
  const resetFilters = () => {
    setQuery(``);
    setDepartment(`전체 부서`);
    setPosition(`전체 직급`);
    setLearningStatus(`전체 학습 상태`);
    setSelectedDept(null);
  };

  return (
    <section className="department-hub learner-management-hub">
      <div className="learner-management-filter">
        <div className="search">
          <Icon icon={Search01Icon} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="이름 또는 부서 검색"
          />
        </div>
        <select
          value={department}
          aria-label="부서"
          onChange={(event) => {
            setDepartment(event.target.value);
            setSelectedDept(null);
          }}
        >
          {[`전체 부서`, ...departmentMeta.map((dept) => dept.name)].map(
            (value) => (
              <option key={value}>{value}</option>
            ),
          )}
        </select>
        <select
          value={position}
          aria-label="직급"
          onChange={(event) => setPosition(event.target.value)}
        >
          {[`전체 직급`, `인턴`, `매니저`, `파트장`, `팀장`].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <select
          value={learningStatus}
          aria-label="학습 상태"
          onChange={(event) => setLearningStatus(event.target.value)}
        >
          {[`전체 학습 상태`, `관리 필요`, `수강 중`, `수료`].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <button className="filter-reset" onClick={resetFilters}>
          <Icon icon={RefreshIcon} /> 초기화
        </button>
      </div>

      <div className="department-hub-intro learner-department-head">
        <div>
          <h2>부서별 학습 현황</h2>
          <p>부서별 학습 현황을 확인하고 소속 학습자를 관리할 수 있습니다.</p>
        </div>
        <span>
          전체 학습자 <b>248명</b>
        </span>
      </div>

      <div className="department-card-grid learner-department-grid">
        {departmentMeta.map((dept) => (
          <button
            className={`department-card learner-department-card ${selectedDept === dept.name ? `selected` : ``}`}
            key={dept.name}
            onClick={() => {
              setSelectedDept(dept.name);
              setDepartment(`전체 부서`);
            }}
          >
            <div className="learner-department-card-top">
              <div className={`department-icon ${dept.tone}`}>
                <Icon icon={dept.icon} size={19} />
              </div>
              <div className="department-card-title">
                <h3>{dept.name}</h3>
                <span>{dept.members}명</span>
              </div>
            </div>
            <div className="learner-department-metrics">
              <div>
                <small>평균 진도율</small>
                <b>{dept.progress}%</b>
              </div>
              <div>
                <small>수료율</small>
                <b>{dept.completion}%</b>
              </div>
              <div className={dept.required > 0 ? `needs-attention` : ``}>
                <small>관리 필요</small>
                <b>{dept.required}명</b>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="learner-list-head">
        <div>
          <h2>{selectedDept ? `${selectedDept} 학습자` : `전체 학습자`}</h2>
          <span>{filteredEmployees.length}명</span>
        </div>
        {selectedDept && (
          <button onClick={() => setSelectedDept(null)}>전체 보기</button>
        )}
      </div>

      <div className="table-wrap learner-table learner-management-table">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>부서</th>
              <th>직급</th>
              <th>수강 중 과정</th>
              <th>평균 진도율</th>
              <th>수료 현황</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div className="person">
                    <span>{employee.name[0]}</span>
                    <div>
                      <b>{employee.name}</b>
                      <small>{employee.id}</small>
                    </div>
                  </div>
                </td>
                <td>{employee.dept}</td>
                <td>{employee.position}</td>
                <td>{Math.max(0, employee.courses - employee.completed)}개</td>
                <td>
                  <div className="table-progress">
                    {d({ value: employee.progress })}
                    <span>{employee.progress}%</span>
                  </div>
                </td>
                <td>
                  <span
                    className={`learner-state ${employee.learningStatus === `수료` ? `complete` : employee.learningStatus === `관리 필요` ? `attention` : `learning`}`}
                  >
                    {employee.learningStatus}
                  </span>
                  <small className="learner-completion-count">
                    {employee.completed}/{employee.courses} 과정
                  </small>
                </td>
                <td>
                  <button className="detail" onClick={() => onSelect(employee)}>
                    자세히 보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredEmployees.length === 0 && (
        <div className="learner-management-empty">
          조건에 맞는 학습자가 없습니다.
        </div>
      )}
    </section>
  );
}

function LearnerProfilePage({ learner, onBack }) {
  const learningCourses = a
    .concat(a)
    .slice(0, learner.courses)
    .map((course, index) => ({
      ...course,
      learningProgress:
        index < learner.completed
          ? 100
          : index === learner.completed
            ? learner.progress
            : 0,
      state:
        index < learner.completed
          ? `수료`
          : index === learner.completed
            ? `수강 중`
            : `미수강`,
    }));
  return (
    <section className="learner-profile-page-full">
      <button className="department-back" onClick={onBack}>
        <Icon icon={ArrowLeft01Icon} />
        학습자 목록으로
      </button>
      <div className="learner-profile-hero">
        <div className="learner-profile-avatar">{learner.name[0]}</div>
        <div className="learner-profile-identity">
          <span>{learner.status}</span>
          <h2>{learner.name}</h2>
          <p>
            {learner.dept} · {learner.position} · {learner.id}
          </p>
        </div>
        <div className="learner-profile-contact">
          <span>이메일</span>
          <b>{learner.id.toLowerCase()}@sparkplus.co</b>
          <span>입사일</span>
          <b>2025.03.04</b>
        </div>
      </div>
      <div className="learner-profile-summary">
        <div>
          <span>수강 과정</span>
          <b>{learner.courses}개</b>
        </div>
        <div>
          <span>수료 과정</span>
          <b>{learner.completed}개</b>
        </div>
        <div>
          <span>평균 진도율</span>
          <b>{learner.progress}%</b>
        </div>
        <div>
          <span>보유 뱃지</span>
          <b>3개</b>
        </div>
      </div>
      <div className="learner-profile-grid">
        <article className="panel learner-progress-history">
          <div className="panel-head">
            <div>
              <h2>학습 진도 추이</h2>
              <p>최근 6개월 평균 진도율입니다.</p>
            </div>
          </div>
          <div className="profile-line-chart">
            <svg viewBox="0 0 560 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="learnerArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3182f6" stopOpacity=".2" />
                  <stop offset="100%" stopColor="#3182f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="profile-area"
                d={`M20,150 L124,128 L228,112 L332,94 L436,70 L540,${170 - learner.progress * 1.35} L540,170 L20,170 Z`}
              />
              <polyline
                points={`20,150 124,128 228,112 332,94 436,70 540,${170 - learner.progress * 1.35}`}
              />
            </svg>
            <div>
              {[`3월`, `4월`, `5월`, `6월`, `7월`, `8월`].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </article>
        <article className="panel learner-badges-panel">
          <div className="panel-head">
            <div>
              <h2>획득 뱃지</h2>
              <p>학습 성과로 받은 뱃지입니다.</p>
            </div>
          </div>
          {[
            [Medal01Icon, `이달의 TOP 3`, `gold`],
            [Award01Icon, `수료 마스터`, `blue`],
            [CheckmarkCircle02Icon, `필수교육 완료`, `green`],
          ].map(([icon, label, tone]) => (
            <div className="profile-badge-row" key={label}>
              <span className={tone}>
                <Icon icon={icon} />
              </span>
              <div>
                <b>{label}</b>
                <small>2026.08 획득</small>
              </div>
            </div>
          ))}
        </article>
      </div>
      <div className="learner-course-section">
        <div>
          <h2>수강 과정</h2>
          <span>총 {learningCourses.length}개</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>교육과정</th>
                <th>교육 기간</th>
                <th>진도율</th>
                <th>학습 상태</th>
                <th>최근 학습일</th>
              </tr>
            </thead>
            <tbody>
              {learningCourses.map((course, index) => (
                <tr key={`${course.id}-${index}`}>
                  <td>
                    <b>{course.title}</b>
                    <small>{course.category}</small>
                  </td>
                  <td>{course.period}</td>
                  <td>
                    <div className="rate-cell">
                      <span>
                        <i style={{ width: `${course.learningProgress}%` }} />
                      </span>
                      <b>{course.learningProgress}%</b>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`learning-state ${course.state === `수료` ? `complete` : course.state === `수강 중` ? `current` : `none`}`}
                    >
                      {course.state}
                    </span>
                  </td>
                  <td>
                    {course.state === `미수강`
                      ? `—`
                      : `2026.08.${String(8 - index).padStart(2, `0`)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function y({
  data: e,
  query: t,
  setQuery: n,
  dept: r,
  setDept: a,
  position: o,
  setPosition: s,
  onSelect: c,
}) {
  return (0, i.jsxs)(`section`, {
    className: `learner-list-page`,
    children: [
      (0, i.jsxs)(`div`, {
        className: `learner-filter-panel`,
        children: [
          (0, i.jsxs)(`div`, {
            className: `filter-title`,
            children: [
              (0, i.jsx)(`b`, { children: `학습자 검색` }),
              (0, i.jsx)(`span`, {
                children: `이름·사번·부서명으로 검색하거나 소속과 직급을 선택해 주세요.`,
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `learner-filter-fields`,
            children: [
              (0, i.jsxs)(`div`, {
                className: `search`,
                children: [
                  (0, i.jsx)(Icon, { icon: Search01Icon }),
                  (0, i.jsx)(`input`, {
                    value: t,
                    onChange: (e) => n(e.target.value),
                    placeholder: `이름, 사번 또는 부서명을 입력해 주세요`,
                  }),
                ],
              }),
             …31140 tokens truncated…com`), z(!1));
          },
        })
      : (0, i.jsxs)(`div`, {
          className: `app-shell`,
          children: [
            (0, i.jsx)(F, {
              role: n,
              page: e,
              go: $,
              profileOpen: R,
              setProfileOpen: z,
              theme: theme,
              setTheme: setTheme,
              logout: () => {
                (t(`login`), z(!1));
              },
            }),
            e === `userDashboard` && (0, i.jsx)(L, { courses: Q, go: $ }),
            e === `adminDashboard` && (0, i.jsx)(U, { go: $ }),
            e === `catalog` &&
              (0, i.jsx)(K, {
                courses: le,
                search: y,
                setSearch: b,
                category: x,
                setCategory: S,
                levelFilter: C,
                setLevelFilter: w,
                recruit: T,
                setRecruit: E,
                applyFilters: () =>
                  k({ search: y, category: x, level: C, recruit: T }),
                quickTag: (e) => {
                  let t =
                    e === `리더십`
                      ? `리더십`
                      : e === `AI`
                        ? `AI·DX`
                        : e === `필수교육`
                          ? `법정의무`
                          : `전체 분야`;
                  (b(e),
                    S(t),
                    k({ search: e, category: t, level: C, recruit: T }));
                },
                reset: () => {
                  (b(``),
                    S(`전체 분야`),
                    w(`전체 레벨`),
                    E(`모집 상태`),
                    k({
                      search: ``,
                      category: `전체 분야`,
                      level: `전체 레벨`,
                      recruit: `모집 상태`,
                    }));
                },
                go: $,
              }),
            e === `courseDetail` &&
              (0, i.jsx)(X, {
                course: Z,
                go: $,
                apply: () => (Z.enrolled ? $(`learning`) : M(`apply`)),
              }),
            e === `learning` &&
              (0, i.jsx)(te, {
                courses: Q,
                go: $,
                notify: (e) => {
                  (I(e), setTimeout(() => I(``), 2600));
                },
              }),
            e === `lectureDetail` && (0, i.jsx)(ne, { course: Z, go: $ }),
            e === `player` &&
              (0, i.jsx)(re, {
                course: Z,
                go: $,
                lessonOpen: B,
                setLessonOpen: V,
                playing: H,
                setPlaying: W,
                videoProgress: G,
                saveProgress: fe,
              }),
            e === `noticeList` && (0, i.jsx)(ie, { go: $ }),
            e === `noticeDetail` &&
              (0, i.jsx)(ae, {
                notice: j.find((e) => e.id === J) ?? j[0],
                go: $,
              }),
            (e === `profile` || e === `password`) &&
              (0, i.jsx)(oe, {
                initialTab: e === `profile` ? `info` : `password`,
                notify: (e) => {
                  (I(e), setTimeout(() => I(``), 2600));
                },
              }),
            e === `placeholder` && (0, i.jsx)(se, { role: n, go: $ }),
            A &&
              (0, i.jsx)(ee, {
                kind: A,
                course: Z,
                close: () => M(null),
                enroll: de,
                goLearning: () => {
                  (M(null), $(`learning`));
                },
              }),
            P &&
              (0, i.jsxs)(`div`, {
                className: `toast`,
                children: [
                  (0, i.jsx)(`span`, {
                    children: (0, i.jsx)(Icon, { icon: CheckmarkCircle02Icon }),
                  }),
                  P,
                ],
              }),
            (0, i.jsx)(ce, {}),
          ],
        });
}
function N({
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
            className: `intro-copy`,
            children: (0, i.jsx)(`div`, {
              className: `login-hero-logo`,
              children: (0, i.jsx)(P, {}),
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
              children: (0, i.jsx)(P, {}),
            }),
            (0, i.jsxs)(`div`, {
              className: `login-title`,
              children: [
                (0, i.jsx)(P, {}),
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
function P({ light: e = !1 }) {
  return (0, i.jsxs)(`div`, {
    className: `logo ${e ? `logo-light` : ``}`,
    children: [
      (0, i.jsx)(`img`, {
        src: `https://sparkplus-lms-prototype.min20993.chatgpt.site/sparkplus-logo-black.png`,
        alt: `SPARKPLUS`,
      }),
      (0, i.jsx)(`em`, { children: `LMS` }),
    ],
  });
}
function F({
  role: e,
  page: t,
  go: n,
  profileOpen: r,
  setProfileOpen: a,
  logout: o,
  theme: s,
  setTheme: c,
}) {
  return (0, i.jsx)(`header`, {
    className: `topbar`,
    children: (0, i.jsxs)(`div`, {
      className: `topbar-inner`,
      children: [
        (0, i.jsx)(`button`, {
          className: `brand-button`,
          onClick: () => n(e === `user` ? `userDashboard` : `adminDashboard`),
          children: (0, i.jsx)(P, {}),
        }),
        (0, i.jsx)(`nav`, {
          children: A[e].map(([e, r]) =>
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
                children: [
                  (0, i.jsx)(Icon, { icon: menuIcon(r) }),
                  (0, i.jsx)(`span`, { children: r }),
                ],
              },
              r,
            ),
          ),
        }),
        (0, i.jsxs)(`div`, {
          className: `header-tools`,
          children: [
            (0, i.jsx)(`button`, {
              className: `theme-toggle`,
              onClick: () => c(s === `light` ? `dark` : `light`),
              title: `라이트·다크 모드 전환`,
              children: (0, i.jsx)(Icon, {
                icon: s === `light` ? Moon02Icon : Sun03Icon,
                size: 20,
              }),
            }),
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
                  (0, i.jsxs)(`button`, {
                    className: `logout-button`,
                    onClick: o,
                    children: [
                      (0, i.jsx)(Icon, { icon: Logout01Icon }),
                      (0, i.jsx)(`span`, { children: `로그아웃` }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function I({ kicker: e, title: t, description: n, action: r }) {
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
function L({ courses: e, go: t }) {
  let n = e[0] ?? O[0];
  const ranking = [
    { rank: 1, name: `이지은`, dept: `마케팅팀`, score: 1280 },
    { rank: 2, name: `정유진`, dept: `운영팀`, score: 1160 },
    { rank: 3, name: `김지수`, dept: `People팀`, score: 1040 },
  ];
  const popular = [
    { ...O[5], likes: 126 },
    { ...O[2], likes: 98 },
    { ...O[1], likes: 87 },
  ];
  return (
    <main className="page dashboard-page home-minimal">
      <section className="home-welcome">
        <div>
          <span>8월 10일 월요일</span>
          <h1>
            김지수님, 오늘도 가볍게
            <br />
            시작해볼까요?
          </h1>
        </div>
        <div className="home-quick-stats">
          <div>
            <span>수강 중</span>
            <b>3</b>
          </div>
          <div>
            <span>수료</span>
            <b>12</b>
          </div>
          <div>
            <span>현재 순위</span>
            <b>3위</b>
          </div>
        </div>
      </section>

      <section className="home-primary-grid">
        <article className="home-continue">
          <div className="home-section-label">
            <span>
              <Icon icon={PlayIcon} size={16} />
            </span>
            이어서 학습하기
          </div>
          <div className="home-continue-content">
            <J accent={n.accent} label={n.category} />
            <div>
              <small>
                {n.category} · {n.level}
              </small>
              <h2>{n.title}</h2>
              <div className="home-progress-line">
                <Z value={n.progress ?? 65} />
                <span>{n.progress ?? 65}%</span>
              </div>
              <button className="primary" onClick={() => t(`player`, n.id)}>
                학습 이어가기 <Icon icon={ArrowRight01Icon} />
              </button>
            </div>
          </div>
        </article>

        <article className="home-ranking">
          <div className="home-card-head">
            <div>
              <span className="home-icon lavender">
                <Icon icon={RankingIcon} />
              </span>
              <div>
                <h2>이달의 학습</h2>
                <small>8월 TOP 3</small>
              </div>
            </div>
            <button onClick={() => t(`learning`)}>전체 보기</button>
          </div>
          <div className="home-ranking-list">
            {ranking.map((person) => (
              <div
                className={`home-rank-row medal-${person.rank}`}
                key={person.rank}
              >
                <span>
                  <Icon icon={Medal01Icon} size={21} />
                </span>
                <div>
                  <b>{person.name}</b>
                  <small>{person.dept}</small>
                </div>
                <strong>{person.score.toLocaleString()}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="home-popular-section">
        <div className="home-section-head">
          <div>
            <span className="home-icon blue">
              <Icon icon={ThumbsUpIcon} />
            </span>
            <div>
              <h2>이번 달 인기 교육</h2>
              <p>구성원들이 가장 유익하게 본 과정이에요</p>
            </div>
          </div>
          <button onClick={() => t(`catalog`)}>
            전체 보기 <Icon icon={ArrowRight01Icon} size={16} />
          </button>
        </div>
        <div className="home-popular-list">
          {popular.map((course, index) => (
            <button
              key={course.id}
              onClick={() => t(`courseDetail`, course.id)}
            >
              <span className="home-popular-rank">0{index + 1}</span>
              <J accent={course.accent} compact={true} />
              <div>
                <small>{course.category}</small>
                <b>{course.title}</b>
                <em>
                  <Icon icon={ThumbsUpIcon} size={14} />
                  {course.likes}
                </em>
              </div>
              <Icon icon={ArrowRight01Icon} className="home-course-arrow" />
            </button>
          ))}
        </div>
      </section>

      <section className="home-bottom-grid">
        <article className="home-notices">
          <div className="home-section-head">
            <div>
              <span className="home-icon mint">
                <Icon icon={Notification01Icon} />
              </span>
              <div>
                <h2>최근 공지사항</h2>
              </div>
            </div>
            <button onClick={() => t(`noticeList`)}>
              전체 보기 <Icon icon={ArrowRight01Icon} size={16} />
            </button>
          </div>
          <div className="home-notice-list">
            {j.slice(0, 3).map((notice) => (
              <button
                onClick={() => t(`noticeDetail`, notice.id)}
                key={notice.id}
              >
                <span>
                  {notice.important && <i>중요</i>}
                  {notice.title}
                </span>
                <small>{notice.date.slice(5)}</small>
              </button>
            ))}
          </div>
        </article>
        <article className="home-badge">
          <div className="home-card-head">
            <div>
              <span className="home-icon gold">
                <Icon icon={Award01Icon} />
              </span>
              <div>
                <h2>나의 학습 뱃지</h2>
                <small>이번 달 획득</small>
              </div>
            </div>
          </div>
          <div className="home-badge-main">
            <span>
              <Icon icon={Award01Icon} size={38} />
            </span>
            <b>이달의 학습 TOP 3</b>
            <p>꾸준한 학습으로 얻은 뱃지예요</p>
          </div>
          <div className="home-next-badge">
            <span>다음 순위까지</span>
            <b>160점</b>
          </div>
        </article>
      </section>
    </main>
  );
}
function R({ label: e, value: t, tone: n }) {
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
function z({ label: e, value: t, tone: n, note: r }) {
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
function B({ title: e, action: t }) {
  return (0, i.jsxs)(`div`, {
    className: `section-title`,
    children: [(0, i.jsx)(`h2`, { children: e }), t],
  });
}
function V({ d: e, title: t, date: n, urgent: r = !1 }) {
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
function H({ title: e, date: t, important: n = !1, onClick: r }) {
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
function U({ go: e }) {
  return (0, i.jsxs)(`main`, {
    className: `page dashboard-page`,
    children: [
      (0, i.jsx)(I, {
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
          (0, i.jsx)(z, {
            label: `운영 중인 과정`,
            value: `18`,
            tone: `blue`,
            note: `전월 대비 +2`,
          }),
          (0, i.jsx)(z, {
            label: `전체 학습자`,
            value: `248`,
            tone: `violet`,
            note: `활성 계정`,
          }),
          (0, i.jsx)(z, {
            label: `이번 달 수료 인원`,
            value: `64`,
            tone: `green`,
            note: `전월 대비 +12`,
          }),
          (0, i.jsx)(z, {
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
            children: [(0, i.jsx)(Icon, { icon: Add01Icon }), `새 과정 등록`],
          }),
          (0, i.jsx)(`button`, {
            onClick: () => e(`placeholder`),
            children: [(0, i.jsx)(Icon, { icon: Search01Icon }), `학습자 조회`],
          }),
          (0, i.jsx)(`button`, {
            onClick: () => e(`placeholder`),
            children: [(0, i.jsx)(Icon, { icon: Edit02Icon }), `새 공지 작성`],
          }),
          (0, i.jsx)(`button`, {
            onClick: () => e(`placeholder`),
            children: [
              (0, i.jsx)(Icon, { icon: ChartHistogramIcon }),
              `통계 조회`,
            ],
          }),
        ],
      }),
      (0, i.jsxs)(`div`, {
        className: `admin-grid`,
        children: [
          (0, i.jsxs)(`section`, {
            className: `card span-2`,
            children: [
              (0, i.jsx)(B, {
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
              (0, i.jsx)(B, { title: `과정별 평균 진도율` }),
              (0, i.jsxs)(`div`, {
                className: `bar-chart`,
                children: [
                  (0, i.jsx)(W, { label: `AI 실무`, value: 78 }),
                  (0, i.jsx)(W, { label: `리더십`, value: 64 }),
                  (0, i.jsx)(W, { label: `개인정보`, value: 91 }),
                  (0, i.jsx)(W, { label: `커뮤니케이션`, value: 56 }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `card span-2`,
            children: [
              (0, i.jsx)(B, { title: `최근 학습 현황` }),
              (0, i.jsxs)(`div`, {
                className: `activity-list`,
                children: [
                  (0, i.jsx)(G, {
                    name: `김지수`,
                    text: `데이터 분석 기초 3차시를 완료했습니다.`,
                    time: `10분 전`,
                  }),
                  (0, i.jsx)(G, {
                    name: `이민호`,
                    text: `개인정보보호 필수 교육을 수료했습니다.`,
                    time: `32분 전`,
                  }),
                  (0, i.jsx)(G, {
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
              (0, i.jsx)(B, {
                title: `최근 공지사항`,
                action: (0, i.jsx)(`button`, {
                  onClick: () => e(`placeholder`),
                  children: `관리`,
                }),
              }),
              (0, i.jsx)(H, {
                title: `하반기 법정의무교육 안내`,
                date: `08.04`,
                important: !0,
              }),
              (0, i.jsx)(H, { title: `시스템 정기 점검 안내`, date: `08.01` }),
              (0, i.jsx)(H, { title: `8월 신규 과정 오픈`, date: `07.29` }),
            ],
          }),
        ],
      }),
    ],
  });
}
function W({ label: e, value: t }) {
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
function G({ name: e, text: t, time: n }) {
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
function K({
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
  quickTag: p,
  reset: d,
  go: f,
}) {
  const tags = [`신입사원`, `리더십`, `AI`, `보안`, `필수교육`];
  const useTag = (tag) => p(tag);
  return (
    <main className="page toss-page">
      <I
        kicker="교육과정 조회"
        title="교육과정 조회"
        description="성장을 위한 다양한 교육과정을 찾아보세요."
      />
      <section className="filter-card">
        <div className="search-wrap">
          <Icon icon={Search01Icon} />
          <input
            value={t}
            onChange={(event) => n(event.target.value)}
            onKeyDown={(event) => event.key === `Enter` && u()}
            placeholder="과정명, 키워드 검색"
          />
        </div>
        <div className="filters">
          {q({
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
          })}
          {q({
            value: o,
            set: s,
            options: [`전체 레벨`, `레벨 1`, `레벨 2`, `레벨 3`],
          })}
          {q({
            value: c,
            set: l,
            options: [`모집 상태`, `모집 중`, `모집 예정`, `마감 임박`],
          })}
          <div className="filter-actions">
            <button className="secondary reset" onClick={d}>
              <Icon icon={RefreshIcon} />
              초기화
            </button>
            <button className="primary search-button" onClick={u}>
              <Icon icon={Search01Icon} />
              검색
            </button>
          </div>
        </div>
        <div className="quick-tags">
          <span>
            <Icon icon={FilterIcon} size={15} />
            빠른 선택
          </span>
          {tags.map((tag) => (
            <button key={tag} onClick={() => useTag(tag)}>
              #{tag}
            </button>
          ))}
        </div>
      </section>
      <div className="result-head">
        <p>
          총 <b>{e.length}</b>개 과정
        </p>
        <select aria-label="정렬">
          <option>추천순</option>
          <option>인기순</option>
          <option>최신순</option>
          <option>마감 임박순</option>
        </select>
      </div>
      {e.length ? (
        <div className="course-grid">
          {e.map((course) => (
            <Y course={course} go={f} key={course.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>조건에 맞는 과정이 없습니다</h3>
        </div>
      )}
      <div className="pagination">
        <button disabled>‹</button>
        <button className="selected">1</button>
        <button>2</button>
        <button>›</button>
      </div>
    </main>
  );
}
function q({ value: e, set: t, options: n }) {
  return (0, i.jsx)(`select`, {
    value: e,
    onChange: (e) => t(e.target.value),
    children: n.map((e) => (0, i.jsx)(`option`, { children: e }, e)),
  });
}
function J({ accent: e, label: t, compact: n = !1 }) {
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
function Y({ course: e, go: t }) {
  const base = [74, 87, 98, 64, 53, 126][e.id - 1] || 42;
  const key = `sparkplus-like-${e.id}`;
  const [liked, setLiked] = (0, r.useState)(
    () => localStorage.getItem(key) === `true`,
  );
  const toggle = () => {
    const next = !liked;
    setLiked(next);
    localStorage.setItem(key, String(next));
  };
  return (
    <article className="course-card toss-card">
      <div className="visual-wrap">
        <J accent={e.accent} label={e.category} />
        <span
          className={`status-ribbon ${e.status === `마감 임박` ? `danger` : e.status === `모집 예정` ? `muted` : ``}`}
        >
          {e.status}
        </span>
        <button
          className={`course-like ${liked ? `liked` : ``}`}
          onClick={toggle}
          aria-label="좋아요"
        >
          <Icon icon={ThumbsUpIcon} size={16} />
          <span>{base + (liked ? 1 : 0)}</span>
        </button>
      </div>
      <div className="course-card-body">
        <div className="course-labels">
          <span className="category-text">{e.category}</span>
          <span className="level-badge">{e.level}</span>
        </div>
        <h2>{e.title}</h2>
        <div className="card-meta">
          <span>▣ {e.duration}</span>
          <span>수강 {48 + e.id * 11}명</span>
        </div>
        {e.enrolled && <Z value={e.progress ?? 0} small={true} />}
        <div className="card-actions">
          <button className="secondary" onClick={() => t(`courseDetail`, e.id)}>
            상세 보기
          </button>
          <button
            className="primary"
            onClick={() =>
              t(e.enrolled ? `lectureDetail` : `courseDetail`, e.id)
            }
          >
            {e.enrolled ? `강의실 입장` : `수강 신청`}
          </button>
        </div>
      </div>
    </article>
  );
}
function X({ course: e, go: t, apply: n }) {
  let a = k[e.id] ?? [],
    [o, s] = (0, r.useState)(`intro`);
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
          (0, i.jsx)(J, { accent: e.accent, label: e.category }),
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
                    "aria-selected": o === `intro`,
                    className: o === `intro` ? `active` : ``,
                    onClick: () => s(`intro`),
                    children: `과정 소개`,
                  }),
                  (0, i.jsx)(`button`, {
                    role: `tab`,
                    "aria-selected": o === `curriculum`,
                    className: o === `curriculum` ? `active` : ``,
                    onClick: () => s(`curriculum`),
                    children: `커리큘럼`,
                  }),
                ],
              }),
              o === `intro`
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
function ee({ kind: e, course: t, close: n, enroll: r, goLearning: a }) {
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
          children: (0, i.jsx)(Icon, { icon: Cancel01Icon }),
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
                  children: (0, i.jsx)(Icon, { icon: CheckmarkCircle02Icon }),
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
function te({ courses: e, go: t, notify: n }) {
  let [a, o] = (0, r.useState)(`active`),
    [s, c] = (0, r.useState)(null),
    l = [
      {
        ...O[1],
        period: `2026.04.01 ~ 2026.04.30`,
        duration: `4시간`,
        progress: 100,
      },
      {
        ...O[3],
        period: `2026.03.10 ~ 2026.03.31`,
        duration: `3시간`,
        progress: 100,
      },
      {
        ...O[5],
        period: `2026.01.15 ~ 2026.02.15`,
        duration: `5시간`,
        progress: 100,
      },
    ],
    u = [`2026.04.30`, `2026.03.31`, `2026.02.15`],
    d = Math.round(
      e.reduce((e, t) => e + (t.progress ?? 0), 0) / Math.max(e.length, 1),
    );
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsx)(I, {
        kicker: `나의 학습`,
        title: `나의 학습`,
        description: `수강 중인 과정과 완료한 학습 내역을 확인하세요.`,
      }),
      (0, i.jsxs)(`div`, {
        className: `tabs standalone`,
        role: `tablist`,
        children: [
          (0, i.jsxs)(`button`, {
            className: a === `active` ? `active` : ``,
            onClick: () => o(`active`),
            children: [
              `수강 중인 과정 `,
              (0, i.jsx)(`span`, { children: e.length }),
            ],
          }),
          (0, i.jsxs)(`button`, {
            className: a === `completed` ? `active` : ``,
            onClick: () => o(`completed`),
            children: [
              `수강 완료 과정 `,
              (0, i.jsx)(`span`, { children: l.length }),
            ],
          }),
        ],
      }),
      a === `active`
        ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(`div`, {
                className: `learning-summary`,
                children: [
                  (0, i.jsx)(`span`, { children: `전체 학습 현황` }),
                  (0, i.jsxs)(`b`, { children: [`평균 진도율 `, d, `%`] }),
                  (0, i.jsx)(Z, { value: d }),
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
                        (0, i.jsx)(J, { accent: e.accent, label: e.category }),
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
                            (0, i.jsx)(Z, { value: e.progress ?? 0 }),
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
            children: l.map((e, t) =>
              (0, i.jsxs)(
                `article`,
                {
                  className: `completed-card`,
                  children: [
                    (0, i.jsx)(J, { accent: e.accent, label: e.category }),
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
                                (0, i.jsx)(`dd`, { children: u[t] }),
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
                          onClick: () => c(e),
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
      s &&
        (0, i.jsx)(`div`, {
          className: `modal-backdrop`,
          children: (0, i.jsxs)(`div`, {
            className: `modal certificate-modal`,
            children: [
              (0, i.jsx)(`button`, {
                className: `modal-close`,
                onClick: () => c(null),
                children: (0, i.jsx)(Icon, { icon: Cancel01Icon }),
              }),
              (0, i.jsx)(P, {}),
              (0, i.jsx)(`p`, {
                className: `certificate-kicker`,
                children: `CERTIFICATE OF COMPLETION`,
              }),
              (0, i.jsx)(`h2`, { children: `수료증` }),
              (0, i.jsxs)(`p`, {
                className: `certificate-number`,
                children: [`제 2026-`, String(s.id).padStart(4, `0`), `호`],
              }),
              (0, i.jsx)(`strong`, { children: `김지수` }),
              (0, i.jsxs)(`p`, {
                children: [
                  `위 사람은 아래 교육과정을 성실히 이수하였으므로`,
                  (0, i.jsx)(`br`, {}),
                  `이 수료증을 수여합니다.`,
                ],
              }),
              (0, i.jsx)(`h3`, { children: s.title }),
              (0, i.jsxs)(`dl`, {
                children: [
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`dt`, { children: `교육 기간` }),
                      (0, i.jsx)(`dd`, { children: s.period }),
                    ],
                  }),
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`dt`, { children: `총 학습 시간` }),
                      (0, i.jsx)(`dd`, { children: s.duration }),
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
function Z({ value: e, small: t = !1 }) {
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
function ne({ course: e, go: t }) {
  let n = k[e.id] ?? [],
    r = e.progress ?? 0,
    a = Math.min(n.length, Math.floor(r / 20)),
    o = n.map((e, t) => ({
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
          (0, i.jsx)(J, { accent: e.accent, label: e.category }),
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
                  (0, i.jsx)(Z, { value: r }),
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
              (0, i.jsx)(`i`, {
                className: `complete`,
                children: (0, i.jsx)(Icon, { icon: CheckmarkCircle02Icon }),
              }),
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
              (0, i.jsx)(B, {
                title: `전체 커리큘럼`,
                action: (0, i.jsxs)(`span`, {
                  className: `course-count`,
                  children: [a, `/`, n.length, ` 차시 완료`],
                }),
              }),
              (0, i.jsx)(`div`, {
                className: `lesson-list`,
                children: o.map((n, r) =>
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
                  (0, i.jsx)(B, { title: `과정 공지` }),
                  (0, i.jsx)(H, {
                    title: `3차시 실습 자료가 업데이트되었습니다.`,
                    date: `08.04`,
                  }),
                  (0, i.jsx)(H, {
                    title: `학습 마감일을 확인해 주세요.`,
                    date: `07.30`,
                  }),
                ],
              }),
              (0, i.jsxs)(`section`, {
                className: `card file-card`,
                children: [
                  (0, i.jsx)(B, { title: `첨부 자료` }),
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
                      (0, i.jsx)(`em`, {
                        children: (0, i.jsx)(Icon, { icon: Download01Icon }),
                      }),
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
                      (0, i.jsx)(`em`, {
                        children: (0, i.jsx)(Icon, { icon: Download01Icon }),
                      }),
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
function re({
  course: e,
  go: t,
  lessonOpen: n,
  setLessonOpen: a,
  playing: o,
  setPlaying: s,
  videoProgress: c,
  saveProgress: l,
}) {
  let [quizAnswer, setQuizAnswer] = (0, r.useState)(null),
    [quizDone, setQuizDone] = (0, r.useState)(!1),
    [u, d] = (0, r.useState)(`goals`),
    f = k[e.id] ?? [],
    p = e.id === 6,
    m = p ? 0 : 2,
    h = f.map((e, t) => ({
      ...e,
      status: t < m ? `수강 완료` : t === m ? `수강 중` : `미수강`,
    })),
    g = h[m] ?? { title: `현재 차시`, duration: `32분`, status: `수강 중` };
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
              (0, i.jsx)(`button`, {
                onClick: () => a(!1),
                children: (0, i.jsx)(Icon, { icon: Cancel01Icon }),
              }),
            ],
          }),
          (0, i.jsx)(`div`, {
            className: `side-progress`,
            children: (0, i.jsx)(Z, { value: e.progress ?? 0 }),
          }),
          (0, i.jsx)(`div`, {
            className: `sidebar-lessons`,
            children: h.map((e, t) =>
              (0, i.jsxs)(
                `button`,
                {
                  className: t === m ? `current` : ``,
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
              children: [(0, i.jsx)(Icon, { icon: Menu01Icon }), `차시 목록`],
            }),
          (0, i.jsxs)(`div`, {
            className: `player-head`,
            children: [
              (0, i.jsxs)(`div`, {
                children: [
                  (0, i.jsxs)(`span`, { children: [m + 1, `차시`] }),
                  (0, i.jsx)(`h1`, { children: g.title }),
                ],
              }),
              (0, i.jsx)(`button`, {
                className: `secondary exit-classroom`,
                onClick: () => t(`lectureDetail`, e.id),
                children: `← 강의실 나가기`,
              }),
            ],
          }),
          p
            ? (0, i.jsx)(`div`, {
                className: `video youtube-embed`,
                children: (0, i.jsx)(`iframe`, {
                  src: `https://www.youtube-nocookie.com/embed/P8pEFQBXbKI?rel=0`,
                  title: `생성형 AI와 업무 혁신 강의 영상`,
                  allow: `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,
                  referrerPolicy: `strict-origin-when-cross-origin`,
                  allowFullScreen: !0,
                }),
              })
            : (0, i.jsxs)(`div`, {
                className: `video`,
                children: [
                  (0, i.jsxs)(`div`, {
                    className: `video-art`,
                    children: [
                      (0, i.jsxs)(`div`, {
                        className: `data-card`,
                        children: [
                          (0, i.jsx)(`span`, {
                            children: String(m + 1).padStart(2, `0`),
                          }),
                          (0, i.jsx)(`h2`, { children: g.title }),
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
                        onClick: () => s(!o),
                        children: (0, i.jsx)(Icon, {
                          icon: o ? Cancel01Icon : PlayIcon,
                          size: 22,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(`div`, {
                    className: `video-controls`,
                    children: [
                      (0, i.jsx)(`button`, {
                        onClick: () => s(!o),
                        children: (0, i.jsx)(Icon, {
                          icon: o ? Cancel01Icon : PlayIcon,
                        }),
                      }),
                      (0, i.jsxs)(`span`, {
                        children: [`08:42 / `, g.duration],
                      }),
                      (0, i.jsx)(`div`, {
                        className: `video-track`,
                        children: (0, i.jsx)(`i`, {
                          style: { width: `${c}%` },
                        }),
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
              (0, i.jsx)(`span`, {
                children: (0, i.jsx)(Icon, { icon: CheckmarkCircle02Icon }),
              }),
              (0, i.jsxs)(`p`, {
                children: [
                  (0, i.jsx)(`b`, {
                    children: p
                      ? `영상 학습 후 진도 저장 버튼을 눌러주세요.`
                      : `학습 진도는 자동으로 저장됩니다.`,
                  }),
                  (0, i.jsx)(`small`, {
                    children: p
                      ? `저장된 진도는 나의 학습 현황에 반영됩니다.`
                      : `창을 닫기 전 수동으로 저장할 수도 있습니다.`,
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
                className: u === `goals` ? `active` : ``,
                onClick: () => d(`goals`),
                children: `학습 목표`,
              }),
              (0, i.jsx)(`button`, {
                className: u === `contents` ? `active` : ``,
                onClick: () => d(`contents`),
                children: `주요 내용`,
              }),
              (0, i.jsxs)(`button`, {
                className: u === `files` ? `active` : ``,
                onClick: () => d(`files`),
                children: [`첨부 자료 `, (0, i.jsx)(`span`, { children: `2` })],
              }),
              (0, i.jsx)(`button`, {
                className: u === `memo` ? `active` : ``,
                onClick: () => d(`memo`),
                children: `학습 메모`,
              }),
              (0, i.jsxs)(`button`, {
                className: u === `quiz` ? `active ai-quiz-tab` : `ai-quiz-tab`,
                onClick: () => d(`quiz`),
                children: [`AI 퀴즈 `, (0, i.jsx)(`span`, { children: `NEW` })],
              }),
            ],
          }),
          (0, i.jsxs)(`div`, {
            className: `player-tab-content`,
            children: [
              u === `goals` &&
                (0, i.jsxs)(`div`, {
                  className: `lesson-info`,
                  children: [
                    (0, i.jsx)(`h3`, { children: `이번 차시 학습 목표` }),
                    (0, i.jsxs)(`ul`, {
                      children: [
                        (0, i.jsxs)(`li`, {
                          children: [
                            g.title,
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
              u === `contents` &&
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
              u === `files` &&
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
                        (0, i.jsx)(`em`, {
                          children: [
                            (0, i.jsx)(Icon, { icon: Download01Icon }),
                            `다운로드`,
                          ],
                        }),
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
                        (0, i.jsx)(`em`, {
                          children: [
                            (0, i.jsx)(Icon, { icon: Download01Icon }),
                            `다운로드`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              u === `memo` &&
                (0, i.jsx)(`textarea`, {
                  placeholder: `학습하면서 기억하고 싶은 내용을 자유롭게 메모해 보세요.`,
                }),
              u === `quiz` &&
                (0, i.jsxs)(`div`, {
                  className: `ai-quiz-panel`,
                  children: [
                    (0, i.jsxs)(`div`, {
                      className: `ai-quiz-head`,
                      children: [
                        (0, i.jsx)(`span`, {
                          children: (0, i.jsx)(Icon, {
                            icon: SparklesIcon,
                            size: 23,
                          }),
                        }),
                        (0, i.jsxs)(`div`, {
                          children: [
                            (0, i.jsx)(`h3`, {
                              children: `강의 내용 확인 퀴즈`,
                            }),
                            (0, i.jsx)(`p`, {
                              children: `현재 영상과 학습 자료를 바탕으로 생성된 문제입니다.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(`b`, {
                      className: `quiz-question`,
                      children: `Q1. 이번 차시의 핵심 내용을 업무에 적용할 때 가장 먼저 해야 할 일은 무엇인가요?`,
                    }),
                    (0, i.jsx)(`div`, {
                      className: `quiz-options`,
                      children: [
                        `목표와 현재 상황을 확인한다`,
                        `도구부터 새로 구매한다`,
                        `모든 업무를 한 번에 변경한다`,
                        `검토 없이 바로 실행한다`,
                      ].map((e, t) =>
                        (0, i.jsx)(
                          `button`,
                          {
                            className: quizAnswer === t ? `selected` : ``,
                            onClick: () => {
                              (setQuizAnswer(t), setQuizDone(!1));
                            },
                            children: e,
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, i.jsx)(`button`, {
                      className: `primary quiz-submit`,
                      disabled: quizAnswer === null,
                      onClick: () => setQuizDone(!0),
                      children: `정답 확인`,
                    }),
                    quizDone &&
                      (0, i.jsxs)(`div`, {
                        className:
                          quizAnswer === 0
                            ? `quiz-result correct`
                            : `quiz-result wrong`,
                        children: [
                          (0, i.jsx)(`b`, {
                            children:
                              quizAnswer === 0
                                ? `정답입니다!`
                                : `다시 한번 생각해 보세요.`,
                          }),
                          (0, i.jsx)(`span`, {
                            children:
                              quizAnswer === 0
                                ? `목표와 현재 상황을 먼저 파악해야 적절한 적용 방법을 선택할 수 있습니다.`
                                : `강의의 핵심 원칙은 목표와 현재 상황을 먼저 확인하는 것입니다.`,
                          }),
                        ],
                      }),
                  ],
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
                onClick: l,
                children: `진도 저장`,
              }),
              (0, i.jsx)(`button`, {
                className: `primary`,
                onClick: l,
                children: `다음 차시 →`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ie({ go: e }) {
  let [t, n] = (0, r.useState)(``),
    [a, o] = (0, r.useState)(`전체`),
    s = j.filter(
      (e) => (a === `전체` || e.category === a) && (!t || e.title.includes(t)),
    );
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsx)(I, {
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
              (0, i.jsx)(Icon, { icon: Search01Icon }),
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
function ae({ notice: e, go: t }) {
  let n = j.findIndex((t) => t.id === e.id),
    r = j[n - 1],
    a = j[n + 1];
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
                    (0, i.jsx)(`em`, {
                      children: [
                        (0, i.jsx)(Icon, { icon: Download01Icon }),
                        `다운로드`,
                      ],
                    }),
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
function oe({ initialTab: e, notify: t }) {
  let [n, a] = (0, r.useState)(e);
  return (0, i.jsxs)(`main`, {
    className: `page`,
    children: [
      (0, i.jsx)(I, {
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
function se({ role: e, go: t }) {
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
function ce() {
  return (0, i.jsxs)(`footer`, {
    children: [
      (0, i.jsx)(P, {}),
      (0, i.jsx)(`span`, {
        children: `고객센터 · 이용약관 · 개인정보처리방침`,
      }),
      (0, i.jsx)(`small`, {
        children: `© 2026 SPARKPLUS. All rights reserved.`,
      }),
    ],
  });
}
export { M as default };
