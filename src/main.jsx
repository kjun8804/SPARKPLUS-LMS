import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './dark-mode-fixes.css';
import './course-cta-theme.css';
import './my-learning-polish.css';
import './user-page-hero.css';
import './user-visual-system.css';
import './reward-gamification.css';
import './completion-quest.css';
import './notice-simplified.css';
import './header-unified.css';
import './learner-registration.css';
import './course-assignment.css';
import './admin-feedback.css';
import './dark-design-system.css';
import './admin-period-polish.css';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('[app-render-error]', { message: error?.message, stack: error?.stack, componentStack: info?.componentStack });
  }

  render() {
    if (!this.state.error) return this.props.children;
    const message = String(this.state.error?.message || '알 수 없는 화면 오류');
    const errorCode = `UI-${Array.from(message).reduce((hash, character) => ((hash * 31) + character.charCodeAt(0)) >>> 0, 7).toString(16).toUpperCase()}`;
    return (
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#0f1724', color: '#f8fafc' }}>
        <section style={{ width: 'min(520px, 100%)', padding: 32, border: '1px solid #344054', borderRadius: 18, background: '#172231', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 12px', fontSize: 24 }}>화면을 불러오지 못했습니다</h1>
          <p style={{ margin: '0 0 22px', color: '#b8c4d4', lineHeight: 1.6 }}>입력하신 데이터는 저장되어 있습니다. 페이지를 새로 불러와 다시 시도해주세요.</p>
          <p style={{ margin: '0 0 22px', padding: 12, borderRadius: 10, background: '#0f1724', color: '#fda4af', fontSize: 13, lineHeight: 1.5, wordBreak: 'break-word' }}><b>{errorCode}</b><br />{message}</p>
          <button type="button" onClick={() => window.location.reload()} style={{ minHeight: 44, padding: '0 22px', border: 0, borderRadius: 10, background: '#3182f6', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>페이지 새로고침</button>
        </section>
      </main>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary><App /></AppErrorBoundary>
  </React.StrictMode>,
);
