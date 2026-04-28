import { Link, useLocation } from 'react-router-dom';
import { Code2, BookOpen, Swords, BrainCircuit, Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home', icon: Zap },
  { to: '/learn', label: 'Learn', icon: BookOpen },
  { to: '/practice', label: 'Practice', icon: Swords },
  { to: '/editor', label: 'Code Editor', icon: Code2 },
  { to: '/interview', label: 'Interview Prep', icon: BrainCircuit },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">
            <Code2 size={20} />
          </div>
          <span>CodeCraft <span className="logo-pro">Pro</span></span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={15} />
              {label}
            </Link>
          ))}
        </div>

        <div className="navbar-right">
          <Link to="/editor" className="btn btn-primary btn-sm">
            <Code2 size={14} /> Start Coding
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
