import { CheckCircle2, Clock, Tag, Building2 } from 'lucide-react';

const COMPANY_COLORS = {
  Google:    { bg: '#4285F4', text: '#fff' },
  Amazon:    { bg: '#FF9900', text: '#000' },
  Meta:      { bg: '#0866FF', text: '#fff' },
  Microsoft: { bg: '#00A4EF', text: '#fff' },
  Apple:     { bg: '#555', text: '#fff' },
  Netflix:   { bg: '#E50914', text: '#fff' },
};

export default function ProblemCard({ problem, isSolved, onClick }) {
  const diffClass = problem.difficulty.toLowerCase();
  const companies = problem.companies || [];

  return (
    <div
      className={`problem-card ${isSolved ? 'solved' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <div className="problem-card-header">
        <div className="problem-meta">
          <span className="problem-number">#{problem.id}</span>
          {isSolved && <CheckCircle2 size={15} className="solved-icon" />}
        </div>
        <span className={`badge badge-${diffClass}`}>{problem.difficulty}</span>
      </div>

      <h3 className="problem-title">{problem.title}</h3>

      {/* FAANG company badges */}
      {companies.length > 0 && (
        <div className="company-badges">
          {companies.map(c => (
            <span
              key={c}
              className="company-badge"
              style={{ background: COMPANY_COLORS[c]?.bg || '#444', color: COMPANY_COLORS[c]?.text || '#fff' }}
            >
              {c}
            </span>
          ))}
        </div>
      )}

      <div className="problem-tags">
        {problem.tags.map(tag => (
          <span key={tag} className="badge badge-tag">{tag}</span>
        ))}
      </div>

      <div className="problem-footer">
        <span className="problem-topic">
          <Tag size={12} /> {problem.topic}
        </span>
        <span className="problem-acceptance">
          <Clock size={12} /> {problem.acceptance}% solved
        </span>
      </div>
    </div>
  );
}
