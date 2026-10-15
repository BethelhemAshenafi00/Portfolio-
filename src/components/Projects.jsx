import { useState } from 'react';

const projects = [
  {
    id: "fix-my-campus",
    title: "FixMyCampus",
    tagline: "Campus Maintenance & Issue Tracking Platform",
    category: "Full-Stack Application",
    filterTag: "fullstack",
    description:
      "A centralized maintenance tracking solution allowing students and university staff to report infrastructure issues, track work orders in real-time, and enabling campus administrators to dispatch and verify resolutions efficiently.",
    highlights: [
      "Role-based access for students, technicians & administrators",
      "Relational PostgreSQL database architecture with EF Core",
      "Component-driven responsive Angular frontend"
    ],
    technologies: ["Angular", "ASP.NET Core", "PostgreSQL", "EF Core", "TypeScript"],
    icon: "🏫",
    status: "Hackathon Project",
    statusType: "hackathon",
    github: "https://github.com/BethelhemAshenafi00/FixMyCampus",
  },
  {
    id: "qr-menu-system",
    title: "QR Menu System",
    tagline: "Digital Ordering & Restaurant Management Suite",
    category: "Restaurant Technology",
    filterTag: "fullstack",
    description:
      "A contactless ordering platform. Diners scan a table-specific QR code to browse categorized menus and place orders instantly, while restaurant staff monitor orders and update inventory through a dedicated admin dashboard.",
    highlights: [
      "Table-specific automated session & cart tracking",
      "Interactive management dashboard for kitchen & staff",
      "Decoupled REST API backend built with ASP.NET Core"
    ],
    technologies: ["React", "ASP.NET Core", "PostgreSQL", "REST API", "Render"],
    icon: "🍽️",
    status: "Live Production Demo",
    statusType: "live",
    github: "https://github.com/BethelhemAshenafi00/QRMenuSystem",
    demos: [
      {
        label: "Admin Dashboard",
        url: "https://qrmenu-admin-c8qm.onrender.com/",
      },
      {
        label: "Customer Menu",
        url: "https://qrmenu-client-osgf.onrender.com/?tableId=11&tableNumber=2",
      },
    ],
  },
  {
    id: "ethio-bid",
    title: "Ethio BID",
    tagline: "Real-Time Online Auction & Bidding Platform",
    category: "Online Auction Platform",
    filterTag: "web",
    description:
      "A dynamic digital auction application designed to facilitate online bidding, transparent item lot verification, and structured auction workflow lifecycles for prospective buyers.",
    highlights: [
      "Dynamic lot catalog with active countdown timelines",
      "Bid validation and transparent activity logs",
      "Optimized for high-speed mobile and desktop browsing"
    ],
    technologies: ["React", "JavaScript ES6+", "UI/UX Architecture", "Vercel"],
    icon: "🔨",
    status: "Live Web App",
    statusType: "live",
    github: null,
    demos: [
      {
        label: "Open Live Demo",
        url: "https://ethio-bid-auction-system.vercel.app/",
      },
    ],
  },
  {
    id: "online-exam",
    title: "Online Examination System",
    tagline: "Secure Academic Assessment Platform",
    category: "Education Technology",
    filterTag: "web",
    description:
      "A comprehensive digital examination system developed as a university capstone project, engineered to replace manual paper testing with secure computerized assessments and immediate score evaluations.",
    highlights: [
      "Candidate authentication and test session management",
      "Timed examination module with randomized questions",
      "Automated evaluation algorithms with exportable analytics"
    ],
    technologies: ["Web Systems", "Database Design", "Security & Auth", "C#"],
    icon: "📝",
    status: "University Capstone",
    statusType: "academic",
    github: null,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.filterTag === activeFilter);

  return (
    <section id="projects" className="projects-modern-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-heading-lg">Featured Engineering Work</h2>
          <p className="section-description-centered">
            A curated selection of full-stack web applications and software systems built with 
            production-grade frameworks, responsive interfaces, and relational databases.
          </p>

          {/* Filter Pills */}
          <div className="projects-filter-bar">
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`filter-pill ${activeFilter === 'fullstack' ? 'active' : ''}`}
            >
              Full-Stack (.NET & React/Angular)
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`filter-pill ${activeFilter === 'web' ? 'active' : ''}`}
            >
              Web Platforms
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-bento-grid">
          {filteredProjects.map((project) => (
            <article className="project-bento-card glass-card" key={project.id}>
              {/* Card Header */}
              <div className="card-top-row">
                <div className="project-icon-box" aria-hidden="true">
                  {project.icon}
                </div>

                <div className={`status-badge-modern status-${project.statusType}`}>
                  <span className="beacon-indicator"></span>
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="project-header-block">
                <span className="project-category-label">{project.category}</span>
                <h3 className="project-card-name">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              {/* Description */}
              <p className="project-body-text">{project.description}</p>

              {/* Feature Highlights */}
              <div className="project-feature-list">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-bullet">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="project-tech-badges">
                {project.technologies.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions Footer */}
              <div className="project-card-footer">
                <div className="project-buttons-wrap">
                  {project.demos && project.demos.map((demo) => (
                    <a
                      key={demo.url}
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action btn-action-live"
                    >
                      <span className="action-icon">⚡</span>
                      <span>{demo.label}</span>
                      <span className="action-arrow">↗</span>
                    </a>
                  ))}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action btn-action-github"
                    >
                      <svg className="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>Code</span>
                      <span className="action-arrow">↗</span>
                    </a>
                  )}
                </div>

                {!project.github && (!project.demos || project.demos.length === 0) && (
                  <span className="project-confidential-note">
                    🔒 Source code & architectural specs available upon request
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
