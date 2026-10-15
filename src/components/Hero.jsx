import { useState } from 'react';

export default function Hero({ views }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bettyashu5@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const techStack = [
    'React', 'ASP.NET Core', 'PostgreSQL', 'Angular', 'C#', 
    'TypeScript', 'Entity Framework', 'REST APIs', 'SQL Server', 
    'JavaScript ES6+', 'Git & GitHub', 'System Diagnostics'
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-mesh-background" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Left Column: Intro & Calls to Action */}
        <div className="hero-intro">
          <div className="hero-status-pill">
            <span className="status-beacon"></span>
            <span className="status-text">Open to Full-Stack & Software Roles</span>
          </div>

          <h1 className="hero-main-title">
            Engineering scalable web apps with <span className="gradient-text">modern precision.</span>
          </h1>

          <p className="hero-subtext">
            Hi, I'm <strong>Bethelhem Ashenafi</strong> 👋 — a Computer Science graduate from <strong>Ambo University</strong>. 
            I design and build resilient, full-stack digital solutions by uniting clean <strong>React & Angular</strong> interfaces 
            with secure <strong>ASP.NET Core & PostgreSQL</strong> backends.
          </p>

          <div className="hero-action-row">
            <a href="#projects" className="btn-modern btn-accent">
              <span>Explore Projects</span>
              <span className="btn-arrow-right">↓</span>
            </a>
            <a href="#contact" className="btn-modern btn-ghost">
              <span>Let's Talk</span>
            </a>
            <button 
              onClick={handleCopyEmail} 
              className={`btn-modern btn-clipboard ${copied ? 'is-copied' : ''}`}
              title="Click to copy email address"
              aria-label="Copy email address to clipboard"
            >
              <span className="clipboard-icon">{copied ? '✓' : '📋'}</span>
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="hero-social-strip">
            <a
              href="https://www.linkedin.com/in/bethelhem-ashenafi-17092717b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-link"
              title="Connect on LinkedIn"
            >
              <svg className="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/BethelhemAshenafi00"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-link"
              title="View GitHub Repositories"
            >
              <svg className="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <div className="social-views-badge">
              <span className="sparkle-icon">✨</span>
              <span><strong>{views?.toLocaleString() || 0}</strong> views</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bento Developer Card */}
        <div className="hero-bento-visual">
          <div className="bento-profile-box glass-card">
            <div className="profile-photo-wrapper">
              <div className="photo-glow-effect"></div>
              <img
                src="/betty.jpg"
                alt="Bethelhem Ashenafi"
                className="profile-photo"
                loading="eager"
              />
              <div className="floating-badge-cs">
                <span className="badge-icon">🎓</span>
                <div className="badge-text">
                  <strong>Ambo University</strong>
                  <span>Computer Science Graduate</span>
                </div>
              </div>
            </div>

            <div className="profile-code-card">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">developer.ts</span>
              </div>
              <pre className="code-content">
                <code>
                  <span className="code-keyword">const</span> developer = &#123;{'\n'}
                  {'  '}name: <span className="code-string">"Bethelhem Ashenafi"</span>,{'\n'}
                  {'  '}role: <span className="code-string">"Full-Stack Engineer"</span>,{'\n'}
                  {'  '}location: <span className="code-string">"Addis Ababa, ET"</span>,{'\n'}
                  {'  '}stack: [<span className="code-string">"ASP.NET"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Postgres"</span>]{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Marquee Ribbon */}
      <div className="hero-tech-ribbon" aria-hidden="true">
        <div className="marquee-track">
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={index} className="marquee-item">
              <span className="marquee-dot">◆</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}