import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { interviewQuestions, topics } from '../data/interviewQuestions';
import './Interview.css';

export default function Interview() {
  const [activeTopic, setActiveTopic] = useState('All');
  const [search, setSearch] = useState('');
  const [openQs, setOpenQs] = useState({});

  const toggleQ = (key) => setOpenQs(prev => ({ ...prev, [key]: !prev[key] }));

  const filteredSections = interviewQuestions
    .filter(s => activeTopic === 'All' || s.topic === activeTopic)
    .map(s => ({
      ...s,
      questions: s.questions.filter(
        q => q.q.toLowerCase().includes(search.toLowerCase()) ||
          q.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(s => s.questions.length > 0);

  return (
    <div className="interview-page page-wrapper">
      <div className="container">
        <div className="interview-header">
          <div>
            <h1 className="section-title">Interview <span className="gradient-text">Prep Hub</span></h1>
            <p className="section-subtitle">Master the most asked interview questions for IT roles. Covers DSA, OOP, SQL, OS, Networking, and System Design.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="interview-filters">
          <div className="search-box">
            <Search size={15} className="search-icon" />
            <input
              className="search-input"
              placeholder="Search questions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="topic-filter">
            {topics.map(t => (
              <button key={t} className={`tag-pill ${activeTopic === t ? 'active' : ''}`} onClick={() => setActiveTopic(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Q&A Sections */}
        {filteredSections.length === 0 ? (
          <div className="empty-state">
            <span style={{ fontSize: '3rem' }}>🔍</span>
            <h3>No questions found</h3>
            <p>Try a different search or topic filter</p>
          </div>
        ) : (
          <div className="interview-sections">
            {filteredSections.map((section) => (
              <div key={section.topic} className="interview-section">
                <div className="section-topic-header" style={{ '--c': section.color }}>
                  <div className="section-topic-icon" style={{ background: `${section.color}22`, border: `1px solid ${section.color}44` }}>
                    <span style={{ fontSize: '1.4rem' }}>{section.icon}</span>
                  </div>
                  <div>
                    <h2 className="section-topic-title">{section.topic}</h2>
                    <p className="section-topic-count">{section.questions.length} questions</p>
                  </div>
                </div>
                <div className="qa-list">
                  {section.questions.map((qa, qi) => {
                    const key = `${section.topic}-${qi}`;
                    const isOpen = openQs[key];
                    return (
                      <div key={qi} className={`qa-item ${isOpen ? 'open' : ''}`}>
                        <button className="qa-question" onClick={() => toggleQ(key)}>
                          <span>{qa.q}</span>
                          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {isOpen && (
                          <div className="qa-answer">
                            {qa.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tips Banner */}
        <div className="tips-banner">
          <h3>💡 Interview Tips</h3>
          <div className="tips-grid">
            {[
              { icon: '🗣️', tip: 'Think out loud — interviewers want to understand your approach.' },
              { icon: '🧪', tip: 'Test your solution with edge cases before submitting.' },
              { icon: '⏱️', tip: 'Clarify requirements before coding — ask questions!' },
              { icon: '📊', tip: 'Always discuss time and space complexity of your solution.' },
              { icon: '🔄', tip: 'Start with brute force, then optimize step by step.' },
              { icon: '🏗️', tip: 'For system design — always start with requirements and scale.' },
            ].map(({ icon, tip }) => (
              <div key={tip} className="tip-card">
                <span className="tip-icon">{icon}</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
