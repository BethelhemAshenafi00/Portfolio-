export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-box">
            <a href="#hero" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">BA</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-brand-desc">
              Full-Stack Software Engineer & Ambo University CS Graduate.
              Designing reliable digital platforms with clean ASP.NET Core, React, Angular, and PostgreSQL architectures.
            </p>
          </div>

          <nav className="footer-nav-menu" aria-label="Footer Quick Links">
            <a href="#hero">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a 
              href="/Bethelhem_Ashenafi_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-resume-tag"
            >
              Resume (PDF) ↗
            </a>
          </nav>

          <div className="footer-action-box">
            <button 
              onClick={scrollToTop} 
              className="btn-back-to-top" 
              title="Return to top of page" 
              aria-label="Scroll back to top"
            >
              <span>↑</span>
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} Bethelhem Ashenafi. Crafted with React 19 & modern CSS architecture.
          </p>

          <div className="footer-social-strip">
            <a 
              href="https://www.linkedin.com/in/bethelhem-ashenafi-17092717b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              LinkedIn ↗
            </a>
            <a 
              href="https://github.com/BethelhemAshenafi00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              GitHub ↗
            </a>
            <a 
              href="mailto:bettyashu5@gmail.com"
              className="footer-social-link"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
