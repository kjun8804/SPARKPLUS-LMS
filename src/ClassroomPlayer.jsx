import { useEffect, useMemo, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  CheckmarkCircle02Icon,
  Download01Icon,
  Menu01Icon,
  PlayIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import "./classroom-polish.css";

function Icon({ icon, size = 18 }) {
  return <HugeiconsIcon icon={icon} size={size} color="currentColor" strokeWidth={1.8} />;
}

const lessonThemes = [
  ["#1f4f78", "#0d2134"],
  ["#34558b", "#14263e"],
  ["#2f657d", "#102936"],
  ["#4a4c86", "#1e203d"],
  ["#345f68", "#12292e"],
];

function lessonDetails(course, lesson, index) {
  const title = lesson?.title || `현재 차시`;
  const number = String(index + 1).padStart(2, "0");
  return {
    number,
    title,
    duration: lesson?.duration || "32분",
    goals: [
      `${title}의 핵심 개념과 업무상 의미를 설명할 수 있습니다.`,
      `차시에서 소개한 판단 기준을 실제 업무 상황에 적용할 수 있습니다.`,
      `학습 내용을 바탕으로 실행 가능한 개선 방법을 선택할 수 있습니다.`,
    ],
    contents: [
      `${title}의 핵심 개념과 실무에서 자주 마주치는 상황`,
      `업무 적용을 위한 단계별 방법과 확인 기준`,
      `사례를 통한 실전 적용 방법과 주의사항`,
    ],
    files: [
      { type: "PDF", name: `${number}차시_${course.category}_학습자료.pdf`, size: "2.4MB" },
      { type: "XLS", name: `${number}차시_실습자료.xlsx`, size: "820KB" },
    ],
    question: `${title}의 내용을 업무에 적용할 때 가장 먼저 해야 할 일은 무엇인가요?`,
  };
}

export default function ClassroomPlayer({
  course,
  lessons,
  go,
  lessonOpen,
  setLessonOpen,
  playing,
  setPlaying,
  videoProgress,
  saveProgress,
}) {
  const initialIndex = course.id === 6 ? 0 : Math.min(2, Math.max(lessons.length - 1, 0));
  const [activeLesson, setActiveLesson] = useState(initialIndex);
  const [activeTab, setActiveTab] = useState("goals");
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizDone, setQuizDone] = useState(false);
  const mainRef = useRef(null);
  const detail = useMemo(
    () => lessonDetails(course, lessons[activeLesson], activeLesson),
    [course, lessons, activeLesson],
  );
  const youtubeCourse = course.id === 6;
  const lastLesson = Math.max(lessons.length - 1, 0);

  useEffect(() => {
    setQuizAnswer(null);
    setQuizDone(false);
    setPlaying(false);
  }, [activeLesson, setPlaying]);

  const selectLesson = (index) => {
    if (index < 0 || index > lastLesson || index === activeLesson) return;
    setActiveLesson(index);
    setActiveTab("goals");
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={`player-page classroom-polished ${lessonOpen ? "sidebar-open" : ""}`}>
      <aside className="lesson-sidebar">
        <div className="sidebar-head">
          <div><small>{course.category}</small><b>{course.title}</b></div>
          <button onClick={() => setLessonOpen(false)} aria-label="차시 목록 닫기"><Icon icon={Cancel01Icon} /></button>
        </div>
        <div className="side-progress">
          <div className="classroom-progress-copy"><span>전체 진도율</span><b>{course.progress ?? 0}%</b></div>
          <div className="classroom-progress-track"><i style={{ width: `${course.progress ?? 0}%` }} /></div>
        </div>
        <div className="sidebar-lessons">
          {lessons.map((lesson, index) => {
            const current = index === activeLesson;
            const completed = index < activeLesson;
            const status = current ? "수강 중" : completed ? "수강 완료" : "미수강";
            return (
              <button
                key={`${lesson.title}-${index}`}
                className={current ? "current" : completed ? "lesson-completed" : ""}
                onClick={() => selectLesson(index)}
                aria-current={current ? "step" : undefined}
              >
                <span className={completed ? "completed" : current ? "active-number" : ""}>{completed ? "✓" : index + 1}</span>
                <div><small>{index + 1}차시 · {status}</small><b>{lesson.title}</b><em>{lesson.duration}</em></div>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="player-main" ref={mainRef}>
        {!lessonOpen && <button className="open-sidebar" onClick={() => setLessonOpen(true)}><Icon icon={Menu01Icon} />차시 목록</button>}
        <div className="player-head">
          <div><span className="lesson-pill">{detail.number}차시</span><h1>{detail.title}</h1></div>
          <button className="secondary exit-classroom" onClick={() => go("lectureDetail", course.id)}>← 강의실 나가기</button>
        </div>

        {youtubeCourse ? (
          <div className="video youtube-embed" key={`youtube-${activeLesson}`}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/P8pEFQBXbKI?rel=0&start=${activeLesson * 30}`}
              title={`${detail.number}차시 ${detail.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="video" key={`video-${activeLesson}`}>
            <div className="video-art" style={{ background: `radial-gradient(circle at 30% 20%, ${lessonThemes[activeLesson % lessonThemes.length][0]}, ${lessonThemes[activeLesson % lessonThemes.length][1]} 68%)` }}>
              <div className="data-card"><span>{detail.number}</span><h2>{detail.title}</h2><p>{course.category} 업무에 바로 적용할 핵심 내용을 학습합니다.</p></div>
              <button className="play" onClick={() => setPlaying(!playing)} aria-label={playing ? "일시정지" : "재생"}>
                {playing ? <span className="pause-symbol">Ⅱ</span> : <Icon icon={PlayIcon} size={24} />}
              </button>
            </div>
            <div className="video-controls">
              <button onClick={() => setPlaying(!playing)} aria-label={playing ? "일시정지" : "재생"}>{playing ? <span className="pause-symbol small">Ⅱ</span> : <Icon icon={PlayIcon} size={18} />}</button>
              <span className="video-time">08:42 / {detail.duration}</span>
              <div className="video-track" aria-label={`재생 진행률 ${videoProgress}%`}><i style={{ width: `${videoProgress}%` }} /></div>
              <button className="speed-control" aria-label="재생 속도">1.0x</button>
              <button aria-label="음량"><span className="control-symbol">◖</span></button>
              <button aria-label="전체 화면"><span className="control-symbol fullscreen-symbol">⌗</span></button>
            </div>
          </div>
        )}

        <div className="auto-save">
          <span><Icon icon={CheckmarkCircle02Icon} /></span>
          <p><b>학습 진도는 자동으로 저장됩니다.</b><small>차시를 이동해도 지금까지의 학습 기록이 유지됩니다.</small></p>
        </div>

        <div className="player-tabs" role="tablist">
          <button className={activeTab === "goals" ? "active" : ""} onClick={() => setActiveTab("goals")}>학습 목표</button>
          <button className={activeTab === "contents" ? "active" : ""} onClick={() => setActiveTab("contents")}>주요 내용</button>
          <button className={activeTab === "files" ? "active" : ""} onClick={() => setActiveTab("files")}>첨부 자료 <span>{detail.files.length}</span></button>
          <button className={`ai-quiz-tab ${activeTab === "quiz" ? "active" : ""}`} onClick={() => setActiveTab("quiz")}>AI 퀴즈 <span>NEW</span></button>
        </div>

        <div className="player-tab-content">
          {activeTab === "goals" && <div className="lesson-info"><h3>이번 차시 학습 목표</h3><ul>{detail.goals.map((item) => <li key={item}>{item}</li>)}</ul></div>}
          {activeTab === "contents" && <div className="lesson-info"><h3>주요 내용</h3><ol>{detail.contents.map((item) => <li key={item}>{item}</li>)}</ol></div>}
          {activeTab === "files" && <div className="player-files">{detail.files.map((file) => <button key={file.name}><span>{file.type}</span><div><b>{file.name}</b><small>{file.size}</small></div><em><Icon icon={Download01Icon} size={16} />다운로드</em></button>)}</div>}
          {activeTab === "quiz" && (
            <div className="ai-quiz-panel">
              <div className="ai-quiz-head"><span><Icon icon={SparklesIcon} size={20} /></span><div><div className="ai-title-line"><h3>AI 퀴즈</h3><small>NEW</small></div><p>이번 차시의 핵심 내용을 확인해보세요.</p></div></div>
              <div className="quiz-question"><span>Q1.</span><b>{detail.question}</b></div>
              <div className="quiz-options">
                {["목표와 현재 상황을 확인한다", "도구부터 새로 구매한다", "모든 업무를 한 번에 변경한다", "검토 없이 바로 실행한다"].map((option, index) => (
                  <button key={option} className={quizAnswer === index ? "selected" : ""} onClick={() => { setQuizAnswer(index); setQuizDone(false); }}>
                    <i aria-hidden="true" /> <span>{option}</span>
                  </button>
                ))}
              </div>
              <button className="primary quiz-submit" disabled={quizAnswer === null} onClick={() => setQuizDone(true)}>정답 확인</button>
              {quizDone && <div className={`quiz-result ${quizAnswer === 0 ? "correct" : "wrong"}`}><b>{quizAnswer === 0 ? "정답입니다!" : "다시 한번 생각해 보세요."}</b><span>{quizAnswer === 0 ? "목표와 현재 상황을 먼저 파악해야 적절한 적용 방법을 선택할 수 있습니다." : "강의의 핵심 원칙은 목표와 현재 상황을 먼저 확인하는 것입니다."}</span></div>}
            </div>
          )}
        </div>

        <div className="player-actions">
          <button className="lesson-nav previous" disabled={activeLesson === 0} onClick={() => selectLesson(activeLesson - 1)}><Icon icon={ArrowLeft01Icon} size={17} />이전 차시</button>
          <button className="lesson-nav next" disabled={activeLesson === lastLesson} onClick={() => { saveProgress?.(); selectLesson(activeLesson + 1); }}>다음 차시<Icon icon={ArrowRight01Icon} size={17} /></button>
        </div>
      </section>
    </main>
  );
}
