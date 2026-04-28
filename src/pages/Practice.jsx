import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Code2 } from 'lucide-react';
import { problems, topics, difficulties } from '../data/problems';
import { useProgress } from '../hooks/useProgress';
import ProblemCard from '../components/ProblemCard';
import '../components/components.css';
import './Practice.css';

const COMPANIES = ['All', 'Google', 'Amazon', 'Meta', 'Microsoft', 'Apple', 'Netflix'];
const COMPANY_DOT = {
  Google: '#4285F4', Amazon: '#FF9900', Meta: '#0866FF',
  Microsoft: '#00A4EF', Apple: '#888', Netflix: '#E50914',
};

export default function Practice() {
  const navigate = useNavigate();
  const { isSolved } = useProgress();
  const [search, setSearch]       = useState('');
  const [topic, setTopic]         = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [company, setCompany]     = useState('All');

  const filtered = problems.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchTopic = topic === 'All' || p.topic === topic;
    const matchDiff  = difficulty === 'All' || p.difficulty === difficulty;
    const matchComp  = company === 'All' || (p.companies || []).includes(company);
    return matchSearch && matchTopic && matchDiff && matchComp;
  });

  const easyCnt  = problems.filter(p => p.difficulty === 'Easy').length;
  const medCnt   = problems.filter(p => p.difficulty === 'Medium').length;
  const hardCnt  = problems.filter(p => p.difficulty === 'Hard').length;
  const solvedCnt = problems.filter(p => isSolved(p.id)).length;
  const faangCnt  = problems.filter(p => (p.companies || []).length > 0).length;

  return (
    <div className="practice-page page-wrapper">
      <div className="container">
        <div className="practice-header">
          <div>
            <h1 className="section-title">Practice <span className="gradient-text">Arena</span></h1>
            <p className="section-subtitle">Sharpen your coding skills with real interview-style problems.</p>
          </div>
          <div className="practice-stats">
            <div className="pstat"><span className="pstat-val" style={{ color: 'var(--accent-green)' }}>{solvedCnt}</span><span className="pstat-label">Solved</span></div>
            <div className="pstat"><span className="pstat-val" style={{ color: 'var(--accent-green)' }}>{easyCnt}</span><span className="pstat-label">Easy</span></div>
            <div className="pstat"><span className="pstat-val" style={{ color: 'var(--accent-yellow)' }}>{medCnt}</span><span className="pstat-label">Medium</span></div>
            <div className="pstat"><span className="pstat-val" style={{ color: 'var(--accent-red)' }}>{hardCnt}</span><span className="pstat-label">Hard</span></div>
            <div className="pstat"><span className="pstat-val" style={{ color: '#FF9900' }}>{faangCnt}</span><span className="pstat-label">FAANG</span></div>
          </div>
        </div>

        <div className="practice-filters">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              className="search-input"
              placeholder="Search problems or tags..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <Filter size={14} />
            <div className="filter-pills">
              {difficulties.map(d => (
                <button key={d} className={`tag-pill ${difficulty === d ? 'active' : ''}`} onClick={() => setDifficulty(d)}>{d}</button>
              ))}
            </div>
          </div>
          <div className="filter-pills topic-pills">
            {topics.map(t => (
              <button key={t} className={`tag-pill ${topic === t ? 'active' : ''}`} onClick={() => setTopic(t)}>{t}</button>
            ))}
          </div>

          {/* FAANG Company Filter */}
          <div className="faang-filter-row">
            <span className="faang-label">🏢 Company</span>
            {COMPANIES.map(c => (
              <button
                key={c}
                className={`company-pill ${company === c ? 'active ' + c.toLowerCase() : ''}`}
                onClick={() => setCompany(c)}
              >
                {c !== 'All' && (
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: company === c ? '#fff' : COMPANY_DOT[c],
                    display: 'inline-block', flexShrink: 0,
                  }} />
                )}
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="practice-count">
          <Code2 size={14} /> {filtered.length} problem{filtered.length !== 1 ? 's' : ''} found
          {company !== 'All' && <span style={{ marginLeft: 8, color: COMPANY_DOT[company], fontWeight: 700 }}>• {company}</span>}
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <span style={{ fontSize: '3rem' }}>🔍</span>
            <h3>No problems found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="problems-grid">
            {filtered.map(p => (
              <ProblemCard
                key={p.id}
                problem={p}
                isSolved={isSolved(p.id)}
                onClick={() => navigate(`/editor/${p.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
