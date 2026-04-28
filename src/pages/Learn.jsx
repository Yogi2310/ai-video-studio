import { useState } from 'react';
import { learningTracks } from '../data/learningTracks';
import { useProgress } from '../hooks/useProgress';
import LearningCard from '../components/LearningCard';
import '../components/components.css';
import './Learn.css';

export default function Learn() {
  const { progress, markLessonComplete, isLessonDone } = useProgress();
  const [activeTrack, setActiveTrack] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);

  const openTrack = (track) => {
    setActiveTrack(track);
    setActiveChapter(track.chapters[0]);
  };

  const completedForTrack = (track) =>
    track.chapters.filter(c => isLessonDone(c.id)).length;

  if (activeTrack && activeChapter) {
    return (
      <div className="learn-lesson page-wrapper">
        <div className="lesson-layout">
          {/* Sidebar */}
          <aside className="lesson-sidebar">
            <button className="back-btn" onClick={() => { setActiveTrack(null); setActiveChapter(null); }}>
              ← Back to Tracks
            </button>
            <div className="sidebar-track-title">
              <span>{activeTrack.icon}</span> {activeTrack.title}
            </div>
            <div className="sidebar-chapters">
              {activeTrack.chapters.map((ch, i) => (
                <button
                  key={ch.id}
                  className={`sidebar-chapter ${activeChapter.id === ch.id ? 'active' : ''} ${isLessonDone(ch.id) ? 'done' : ''}`}
                  onClick={() => setActiveChapter(ch)}
                >
                  <span className="ch-num">{i + 1}</span>
                  <span className="ch-title">{ch.title}</span>
                  {isLessonDone(ch.id) && <span className="ch-done">✓</span>}
                </button>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="lesson-main">
            <div className="lesson-header">
              <span className="lesson-breadcrumb">{activeTrack.title}</span>
              <h1 className="lesson-title">{activeChapter.title}</h1>
            </div>
            <div className="lesson-content">
              <div className="lesson-theory">
                {activeChapter.content.split('\n').map((line, i) => (
                  line === '' ? <br key={i} /> :
                  line.startsWith('•') ? <li key={i} className="lesson-li">{line.slice(2)}</li> :
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="lesson-code-block">
                <div className="code-block-header">
                  <span className="code-lang">{activeChapter.language}</span>
                  <span className="code-label">Example Code</span>
                </div>
                <pre className="code-block">{activeChapter.code}</pre>
              </div>
            </div>
            <div className="lesson-actions">
              {!isLessonDone(activeChapter.id) && (
                <button
                  className="btn btn-green"
                  onClick={() => markLessonComplete(activeChapter.id)}
                >
                  ✓ Mark as Complete
                </button>
              )}
              {isLessonDone(activeChapter.id) && (
                <span className="lesson-done-msg">✓ Completed!</span>
              )}
              {activeTrack.chapters.indexOf(activeChapter) < activeTrack.chapters.length - 1 && (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const idx = activeTrack.chapters.indexOf(activeChapter);
                    setActiveChapter(activeTrack.chapters[idx + 1]);
                  }}
                >
                  Next Lesson →
                </button>
              )}
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="learn-page page-wrapper">
      <div className="container">
        <h1 className="section-title">Learning <span className="gradient-text">Paths</span></h1>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          Structured courses for beginners and IT professionals. Learn at your own pace.
        </p>
        <div className="grid-3">
          {learningTracks.map(track => (
            <LearningCard
              key={track.id}
              track={track}
              completedCount={completedForTrack(track)}
              onClick={() => openTrack(track)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
