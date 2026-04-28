import { Link } from 'react-router-dom';
import { Code2, BookOpen, Swords, BrainCircuit, ArrowRight, CheckCircle, Zap, Users, Star } from 'lucide-react';
import './Home.css';

const features = [
  { icon: '🖥️', title: 'Online Code Compiler', desc: 'Write and run code in Python, JavaScript, Java, C++ directly in your browser — no setup needed.' },
  { icon: '📚', title: 'Structured Learning', desc: 'Beginner-friendly tracks covering Python, JS, DSA, SQL, and System Design from scratch.' },
  { icon: '💡', title: 'Practice Problems', desc: '12+ curated coding challenges with difficulty filters, topic tags, and detailed explanations.' },
  { icon: '🎯', title: 'Interview Prep', desc: 'Company-tagged Q&A covering DSA, OOP, Databases, OS, Networking, and System Design.' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Track your solved problems and completed lessons. Your progress is saved automatically.' },
  { icon: '⚡', title: 'Multi-Language', desc: 'Code in Python, JavaScript, Java, C++, and C. Switch languages with a single click.' },
];

const stats = [
  { label: 'Practice Problems', value: '12+', icon: Swords },
  { label: 'Learning Lessons', value: '25+', icon: BookOpen },
  { label: 'Interview Questions', value: '30+', icon: BrainCircuit },
  { label: 'Languages Supported', value: '5', icon: Code2 },
];

const tracks = [
  { icon: '🐍', label: 'Python for Beginners', level: 'Beginner', color: '#3b82f6', to: '/learn' },
  { icon: '⚡', label: 'JavaScript Fundamentals', level: 'Beginner', color: '#f59e0b', to: '/learn' },
  { icon: '🧠', label: 'Data Structures & Algorithms', level: 'Intermediate', color: '#7c3aed', to: '/learn' },
  { icon: '🗃️', label: 'SQL for Backend', level: 'Beginner', color: '#06b6d4', to: '/learn' },
  { icon: '🏗️', label: 'System Design', level: 'Advanced', color: '#10b981', to: '/learn' },
];

export default function Home() {
  return (
    <div className="home page-wrapper">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="orb orb-purple" style={{ width: 500, height: 500, top: -100, left: -100 }} />
          <div className="orb orb-blue" style={{ width: 400, height: 400, bottom: -80, right: -80 }} />
        </div>
        <div className="container hero-content">
          <div className="hero-badge animate-fade-in">
            <Zap size={13} /> The #1 Platform for IT Professionals & Beginners
          </div>
          <h1 className="hero-title animate-fade-in-up">
            Code. Learn. <span className="gradient-text">Grow.</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up">
            Practice coding problems, compile code in 5 languages, and learn IT fundamentals
            from scratch — all in one beautiful platform built for beginners and professionals.
          </p>
          <div className="hero-actions animate-fade-in-up">
            <Link to="/practice" className="btn btn-primary btn-lg">
              <Swords size={18} /> Start Practicing
            </Link>
            <Link to="/learn" className="btn btn-secondary btn-lg">
              <BookOpen size={18} /> Browse Courses
            </Link>
          </div>
          <div className="hero-checks">
            {['Free to use', 'No sign-up required', 'Beginner friendly', '5 coding languages'].map(t => (
              <span key={t} className="hero-check"><CheckCircle size={14} /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="stat-card">
                <div className="stat-icon"><Icon size={22} /></div>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything You Need to <span className="gradient-text">Succeed</span></h2>
            <p className="section-subtitle">From your first "Hello World" to cracking top tech interviews — we've got you covered.</p>
          </div>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="section tracks-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Structured <span className="gradient-text">Learning Paths</span></h2>
            <p className="section-subtitle">Choose your track and learn step by step, from basics to advanced concepts.</p>
          </div>
          <div className="tracks-list" style={{ marginTop: 40 }}>
            {tracks.map(t => (
              <Link key={t.label} to={t.to} className="track-row">
                <div className="track-row-left">
                  <div className="track-row-icon" style={{ background: `${t.color}22`, border: `1px solid ${t.color}44` }}>
                    <span>{t.icon}</span>
                  </div>
                  <span className="track-row-label">{t.label}</span>
                </div>
                <div className="track-row-right">
                  <span className={`badge ${t.level === 'Beginner' ? 'badge-easy' : t.level === 'Intermediate' ? 'badge-medium' : 'badge-hard'}`}>
                    {t.level}
                  </span>
                  <ArrowRight size={16} className="track-arrow" />
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/learn" className="btn btn-secondary">View All Tracks <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="orb orb-purple" style={{ width: 300, height: 300, top: -80, right: -80, opacity: 0.2 }} />
            <Star size={36} className="cta-star" />
            <h2 className="cta-title">Ready to Level Up Your <span className="gradient-text">Coding Skills?</span></h2>
            <p className="cta-desc">Join thousands of IT professionals and beginners who are learning and practicing every day.</p>
            <div className="cta-actions">
              <Link to="/editor" className="btn btn-primary btn-lg"><Code2 size={18} /> Open Code Editor</Link>
              <Link to="/interview" className="btn btn-secondary btn-lg"><BrainCircuit size={18} /> Interview Prep</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
