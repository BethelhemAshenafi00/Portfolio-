import { useState, useEffect } from 'react';

export default function Navbar({ theme, setTheme, views }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = ['hero', 'projects', 'about', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-pill glass-card">
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={closeMobile} aria-label="Bethelhem - Home">
          <span className="logo-symbol">&lt;</span>
          <span className="logo-name">BA</span>
          <span className="logo-symbol">/&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-menu-desktop" role="menubar">
          <a
            href="#hero"
            className={`nav-item ${activeSection === 'hero' ? 'active' : ''}`}
            role="menuitem"
          >
            Home
          </a>
          <a
            href="#projects"
            className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            role="menuitem"
          >
            Projects
          </a>
          <a
            href="#about"
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            role="menuitem"
          >
            About
          </a>
          <a
            href="#contact"
            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            role="menuitem"
          >
            Contact
          </a>
        </div>

        {/* Right Actions */}
        <div className="nav-actions-group">
          {/* Views Display */}
          <div className="nav-views-pill" title="Total Portfolio Visits">
            <span className="views-dot"></span>
            <span className="views-text">{views?.toLocaleString() || 0} views</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-button"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle visual theme"
          >
            <span className="theme-emoji">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation drawer"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`nav-drawer ${mobileOpen ? 'is-open' : ''}`}>
        <div className="nav-drawer-links">
          <a href="#hero" onClick={closeMobile}>
            <span className="drawer-icon">🏠</span> Home
          </a>
          <a href="#projects" onClick={closeMobile}>
            <span className="drawer-icon">💼</span> Projects
          </a>
          <a href="#about" onClick={closeMobile}>
            <span className="drawer-icon">👤</span> About & Skills
          </a>
          <a href="#contact" onClick={closeMobile}>
            <span className="drawer-icon">✉️</span> Contact
          </a>
          <a
            href="https://www.linkedin.com/in/bethelhem-ashenafi-17092717b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="drawer-linkedin"
          >
            <span className="drawer-icon">🔗</span> LinkedIn Profile
          </a>
        </div>
      </div>
      {mobileOpen && <div className="nav-backdrop" onClick={closeMobile}></div>}
    </header>
  );
}
