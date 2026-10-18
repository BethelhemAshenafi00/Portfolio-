import { useState } from 'react';

const projects = [
  {
    id: "qr-menu-system",
    title: "QR Menu System",
    tagline: "Digital Ordering & Restaurant Management Suite",
    category: "Full-Stack SaaS Platform",
    filterTag: "fullstack",
    urlDisplay: "qrmenu-client-osgf.onrender.com",
    description:
      "A contactless ordering and kitchen management platform. Diners scan a table-specific QR code to browse interactive categorized menus and place orders instantly, while restaurant staff monitor live tickets and update menu inventory through a dedicated administrative dashboard.",
    highlights: [
      "Table-specific automated session & cart state management",
      "Interactive management dashboard for kitchen & service staff",
      "Decoupled REST API backend engineered with ASP.NET Core & PostgreSQL"
    ],
    technologies: ["React", "ASP.NET Core", "PostgreSQL", "REST API", "Render", "Tailwind CSS"],
    icon: "🍽️",
    status: "Live Production Demo",
    statusType: "live",
    github: "https://github.com/BethelhemAshenafi00/QRMenuSystem",
    views: [
      { label: "Customer Menu", image: "/menu.png" },
      { label: "Admin Dashboard", image: "/qr admin.png" },
      { label: "Orders", image: "/qr orders.png" },
      { label: "Login", image: "/qr login page.png" },
      { label: "Category", image: "/qr catagory.png" },
      { label: "Menu Items", image: "/qr menu items.png" },
      { label: "Tables", image: "/qr table.png" }
    ],
    demos: [
      {
        label: "Customer Menu",
        url: "https://qrmenu-client-osgf.onrender.com/?tableId=11&tableNumber=2",
      },
      {
        label: "Admin Dashboard",
        url: "https://qrmenu-admin-c8qm.onrender.com/",
      },
    ],
  },
  {
    id: "fix-my-campus",
    title: "FixMyCampus",
    tagline: "Campus Maintenance & Issue Tracking Platform",
    category: "Enterprise Web Solution",
    filterTag: "fullstack",
    urlDisplay: "fixmycampus.ambo.edu.et",
    description:
      "A centralized maintenance tracking solution allowing students and university staff to report infrastructure defects, monitor work orders in real-time, and enabling campus facility managers to triage, dispatch, and verify resolutions with accountability.",
    highlights: [
      "Role-based access control (RBAC) for students, technicians & supervisors",
      "Relational PostgreSQL database architecture with Entity Framework Core",
      "Modular, responsive Angular frontend designed for high accessibility"
    ],
    technologies: ["Angular", "ASP.NET Core", "PostgreSQL", "EF Core", "TypeScript", "Clean Architecture"],
    icon: "🏫",
    status: "Hackathon Project",
    statusType: "hackathon",
    github: "https://github.com/BethelhemAshenafi00/FixMyCampus",
    views: [
      { label: "Login Page", image: "/fix login.jpg" },
      { label: "Admin Dashboard", image: "/fix admin.jpg" },
      { label: "Report Issue in the campus", image: "/Fix report campus issue.jpg" },
      { label: "Issue Assign", image: "/fix issue assign.jpg" },
      { label: "Issue Status", image: "/Fix All issues.jpg" },

    ],
  },
  {
    id: "ethio-bid",
    title: "Ethio BID",
    tagline: "Real-Time Online Auction & Bidding Platform",
    category: "E-Commerce & Auctions",
    filterTag: "web",
    urlDisplay: "ethio-bid-auction-system.vercel.app",
    description:
      "A dynamic digital auction application designed to facilitate transparent online bidding, item lot verification, and real-time auction workflow lifecycles for prospective buyers and sellers.",
    highlights: [
      "Dynamic lot catalog with active countdown timelines and reserve prices",
      "Bid validation and transparent multi-participant activity logs",
      "Optimized for high-speed mobile responsiveness and low latency"
    ],
    technologies: ["React", "JavaScript ES6+", "UI/UX Architecture", "Vercel"],
    icon: "🔨",
    status: "Live Web App",
    statusType: "live",
    github: null,
    views: [
      { label: "Bidder Portal", image: "/bidder.png" },
      { label: "Seller Dashboard", image: "/seller.png" }
    ],
    demos: [
      {
        label: "Open Live Demo",
        url: "https://ethio-bid-auction-system.vercel.app/",
      },
    ],
  },
  {
    id: "tms-api",
    title: "TmsApi Task Engine",
    tagline: "High-Throughput Task Management REST API",
    category: "Backend & Cloud APIs",
    filterTag: "fullstack",
    urlDisplay: "api.tms-engine.internal/swagger",
    description:
      "A modular, scalable task management backend engineered following Clean Architecture principles. Features secure JWT authentication, role-based authorization, and automated database schema evolutions using Entity Framework Core.",
    highlights: [
      "Layered Clean Architecture (Domain, Application, Infrastructure, API)",
      "JWT-based authorization with claims-based access policies",
      "Full OpenAPI / Swagger interactive documentation and unit test coverage"
    ],
    technologies: ["C#", "ASP.NET Core Web API", "PostgreSQL", "EF Core", "JWT Auth", "Swagger"],
    icon: "📋",
    status: "Clean Architecture",
    statusType: "live",
    github: "https://github.com/BethelhemAshenafi00?tab=repositories",
  },
  {
    id: "online-exam",
    title: "Online Examination System",
    tagline: "Secure Academic Assessment Platform",
    category: "Education Technology",
    filterTag: "web",
    urlDisplay: "exam.ambo.edu.et",
    description:
      "A comprehensive digital examination system developed as an Ambo University capstone project, engineered to replace paper testing with secure computerized assessments and immediate score evaluations.",
    highlights: [
      "Candidate authentication and test session anti-tampering management",
      "Timed examination module with randomized question delivery",
      "Automated evaluation algorithms with exportable analytics for educators"
    ],
    technologies: ["Web Systems", "Database Design", "Security & Auth", "C#", "SQL Server"],
    icon: "📝",
    status: "University Capstone",
    statusType: "academic",
    github: null,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedViews, setSelectedViews] = useState({});

  const handleViewChange = (projectId, viewIndex) => {
    setSelectedViews(prev => ({
      ...prev,
      [projectId]: viewIndex
    }));
  };

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
          <h2 className="section-heading-lg">Feature Works</h2>
          <p className="section-description-centered">
            A curated selection of full-stack web applications, REST APIs, and software systems built with 
            production-grade frameworks, responsive interfaces, and relational databases.
          </p>

          {/* Filter Pills */}
          <div className="projects-filter-bar" role="tablist">
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeFilter === 'all'}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`filter-pill ${activeFilter === 'fullstack' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeFilter === 'fullstack'}
            >
              Full-Stack (.NET & React/Angular)
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`filter-pill ${activeFilter === 'web' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeFilter === 'web'}
            >
              Web Platforms
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-bento-grid">
          {filteredProjects.map((project) => {
            const currentViewIndex = selectedViews[project.id] || 0;
            const currentView = project.views ? project.views[currentViewIndex] : null;

            return (
              <article className="project-bento-card glass-card" key={project.id}>
                {/* Visual Browser Mockup Preview (if project has views) */}
                {project.views && project.views.length > 0 && (
                  <div className="project-browser-frame">
                    <div className="browser-top-bar">
                      <div className="browser-dots">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                      </div>
                      <div className="browser-url-pill">
                        <span className="url-lock">🔒</span>
                        <span className="url-domain">{project.urlDisplay}</span>
                      </div>
                      {project.views.length > 1 && (
                        <div className="browser-view-tabs">
                          {project.views.map((v, idx) => (
                            <button
                              key={v.label}
                              onClick={() => handleViewChange(project.id, idx)}
                              className={`browser-tab-btn ${currentViewIndex === idx ? 'active' : ''}`}
                              title={`View ${v.label}`}
                            >
                              {v.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="browser-screen-wrapper">
                      <img
                        src={currentView.image}
                        alt={`${project.title} - ${currentView.label}`}
                        className="browser-screenshot"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0.5';
                        }}
                      />
                      <div className="screenshot-overlay">
                        {project.demos && project.demos[0] && (
                          <a
                            href={project.demos[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-preview-visit"
                          >
                            <span>Open Demo</span>
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Header Row */}
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
                        <span>Codebase</span>
                        <span className="action-arrow">↗</span>
                      </a>
                    )}
                  </div>

                  {!project.github && (!project.demos || project.demos.length === 0) && (
                    <span className="project-confidential-note">
                      🔒 Academic capstone code & architecture specs available upon request
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
