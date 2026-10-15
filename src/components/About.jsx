export default function About() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: "🎨",
      skills: ["React", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Responsive UI"],
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      skills: ["ASP.NET Core", "C#", "RESTful APIs", "Entity Framework Core", "JWT Authentication", "Clean Architecture"],
    },
    {
      title: "Database Architecture",
      icon: "🗄️",
      skills: ["PostgreSQL", "SQL Server", "Relational Modeling", "Schema Optimization", "Data Integrity"],
    },
    {
      title: "DevOps & Tooling",
      icon: "🚀",
      skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Vercel", "Render Deployments"],
    },
  ];

  return (
    <section id="about" className="about-modern-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>BACKGROUND & COMPETENCIES</span>
          </div>
          <h2 className="section-heading-lg">About & Technical Architecture</h2>
          <p className="section-description-centered">
            A versatile software developer combining rigorous computer science education, 
            hands-on web development, and practical systems diagnostic experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          {/* Bento Tile 1: Main Story */}
          <div className="bento-tile bento-tile-main glass-card">
            <div className="tile-eyebrow">
              <span className="tile-icon">⚡</span>
              <span>PROFESSIONAL BIOGRAPHY</span>
            </div>
            <h3 className="tile-title">Bridging robust software architecture with human-centered design.</h3>
            
            <p className="tile-paragraph">
              I am a <strong>Computer Science graduate</strong> from <strong>Ambo University</strong> with a focus on building 
              practical, dependable web systems. My engineering approach values maintainability, clean code boundaries, 
              and responsive, accessible interfaces.
            </p>

            <p className="tile-paragraph">
              Whether designing relational schemas in <strong>PostgreSQL</strong>, architecting robust backend APIs in <strong>ASP.NET Core</strong>, 
              or crafting modular client applications with <strong>React</strong> and <strong>Angular</strong>, 
              I strive to deliver software that solves tangible problems for users and organizations.
            </p>

            <div className="tile-actions-row">
              <a
                href="https://www.linkedin.com/in/bethelhem-ashenafi-17092717b/"
                className="btn-modern btn-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Connect on LinkedIn</span>
                <span className="btn-arrow-right">↗</span>
              </a>
              <a href="#contact" className="btn-modern btn-ghost">
                <span>Send a Message</span>
              </a>
            </div>
          </div>

          {/* Bento Tile 2: Academic Credential */}
          <div className="bento-tile bento-tile-academic glass-card">
            <div className="tile-eyebrow">
              <span className="tile-icon">🎓</span>
              <span>ACADEMIC FOUNDATION</span>
            </div>
            
            <div className="academic-seal-box">
              <div className="seal-icon">🏛️</div>
              <div>
                <h4 className="academic-degree">B.Sc. in Computer Science</h4>
                <p className="academic-school">Ambo University</p>
              </div>
            </div>

            <p className="academic-desc">
              Rigorous 4-year curriculum covering Data Structures & Algorithms, Object-Oriented Software Engineering, Database Systems, Operating Systems, and Network Architecture.
            </p>

            <div className="credential-pill">
              <span className="credential-dot"></span>
              <span>Capstone: Online Examination System</span>
            </div>
          </div>

          {/* Bento Tile 3: Systems & IT Differentiator */}
          <div className="bento-tile bento-tile-systems glass-card">
            <div className="tile-eyebrow">
              <span className="tile-icon">🛠️</span>
              <span>THE SYSTEMS ADVANTAGE</span>
            </div>
            
            <h4 className="systems-title">Full-Spectrum Hardware & IT Diagnostics</h4>
            <p className="systems-text">
              Unlike developers restricted solely to high-level code, I bring hands-on experience in 
              <strong> computer hardware maintenance, local network setup, and OS troubleshooting</strong>. 
              This allows me to diagnose bottlenecks from physical infrastructure up through cloud runtime.
            </p>

            <div className="systems-chips">
              <span className="system-chip">Hardware Diagnostics</span>
              <span className="system-chip">Network Configuration</span>
              <span className="system-chip">Software Deployment</span>
              <span className="system-chip">Linux Fundamentals</span>
            </div>
          </div>

          {/* Bento Tile 4: Technical Skills Clusters */}
          <div className="bento-tile bento-tile-skills glass-card">
            <div className="tile-eyebrow">
              <span className="tile-icon">💻</span>
              <span>CORE TECHNICAL ARSENAL</span>
            </div>

            <div className="skills-cluster-grid">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="skill-cluster-card">
                  <div className="cluster-header">
                    <span className="cluster-icon">{cat.icon}</span>
                    <h5 className="cluster-name">{cat.title}</h5>
                  </div>
                  <div className="cluster-tags">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
