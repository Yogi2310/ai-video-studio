import { BookOpen, ChevronRight, Trophy } from 'lucide-react';

export default function LearningCard({ track, completedCount, onClick }) {
  const pct = Math.round((completedCount / track.totalLessons) * 100);
  return (
    <div className="learning-card" onClick={onClick} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onClick()}>
      <div className="lc-top">
        <div className="lc-icon" style={{ background: `${track.color}22`, border: `1px solid ${track.color}44` }}>
          <span className="lc-emoji">{track.icon}</span>
        </div>
        <span className={`badge ${track.level === 'Beginner' ? 'badge-easy' : track.level === 'Intermediate' ? 'badge-medium' : 'badge-hard'}`}>
          {track.level}
        </span>
      </div>
      <h3 className="lc-title">{track.title}</h3>
      <p className="lc-desc">{track.description}</p>
      <div className="lc-progress">
        <div className="lc-progress-labels">
          <span>{completedCount}/{track.totalLessons} lessons</span>
          <span style={{ color: track.color }}>{pct}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${track.color}, ${track.color}aa)` }} />
        </div>
      </div>
      <div className="lc-footer">
        {pct === 100 ? (
          <span className="lc-complete"><Trophy size={14} /> Completed!</span>
        ) : (
          <span className="lc-continue"><BookOpen size={14} /> {pct === 0 ? 'Start Learning' : 'Continue'} <ChevronRight size={14} /></span>
        )}
      </div>
    </div>
  );
}
