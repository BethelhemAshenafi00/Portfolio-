import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Addis_Ababa',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        // Fallback if Intl fails
        setLocalTime("UTC+3");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("bettyashu5@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .send(
        "service_h0jpde2",
        "template_bx2zniu",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "v6_l2DXmepS8k2erl"
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Thank you! Your message was sent successfully. I will get back to you shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: "Failed to send message via form. Please email directly at bettyashu5@gmail.com.",
        });
        console.error("Email send error:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact-modern-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-heading-lg">Let's Connect & Build</h2>
          <p className="section-description-centered">
            Currently open to full-time software engineering roles, internships, and contract opportunities.
            Feel free to send a message or contact me directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-modern-grid">
          {/* Left: Contact Info Bento */}
          <div className="contact-cards-column">
            {/* Email Card with Quick Copy */}
            <div className="contact-info-card glass-card">
              <div className="info-card-icon" aria-hidden="true">✉️</div>
              <div className="info-card-text">
                <span className="info-card-label">Direct Email</span>
                <a href="mailto:bettyashu5@gmail.com" className="info-card-main-link">
                  bettyashu5@gmail.com
                </a>
              </div>
              <button 
                onClick={handleCopy} 
                className="btn-quick-copy"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? "Copied! ✓" : "Copy"}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/bethelhem-ashenafi-17092717b/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card glass-card hoverable"
            >
              <div className="info-card-icon" aria-hidden="true">
                <svg className="svg-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </div>
              <div className="info-card-text">
                <span className="info-card-label">Professional Network</span>
                <span className="info-card-main-link">Bethelhem Ashenafi</span>
              </div>
              <span className="info-card-arrow" aria-hidden="true">↗</span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/BethelhemAshenafi00"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card glass-card hoverable"
            >
              <div className="info-card-icon" aria-hidden="true">
                <svg className="svg-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div className="info-card-text">
                <span className="info-card-label">Open Source Repositories</span>
                <span className="info-card-main-link">github.com/BethelhemAshenafi00</span>
              </div>
              <span className="info-card-arrow" aria-hidden="true">↗</span>
            </a>

            {/* Phone Card */}
            <div className="contact-info-card glass-card">
              <div className="info-card-icon" aria-hidden="true">📞</div>
              <div className="info-card-text">
                <span className="info-card-label">Direct Phone / SMS</span>
                <div className="phone-numbers-group">
                  <a href="tel:+251942154333" className="phone-item">+251 942 154 333</a>
                  <span className="phone-sep">•</span>
                  <a href="tel:+251987988902" className="phone-item">+251 987 988 902</a>
                </div>
              </div>
            </div>

            {/* Location Card with Live Clock */}
            <div className="contact-info-card glass-card">
              <div className="info-card-icon" aria-hidden="true">📍</div>
              <div className="info-card-text">
                <span className="info-card-label">Location & Time</span>
                <div className="location-row">
                  <span className="info-card-main-link">Addis Ababa, Ethiopia</span>
                  {localTime && (
                    <span className="live-clock-pill">
                      <span className="clock-dot"></span>
                      <span>{localTime} EAT</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Glass Contact Form */}
          <div className="contact-form-column">
            <form onSubmit={sendEmail} className="modern-glass-form glass-card">
              <div className="form-header-badge">
                <span className="badge-dot"></span>
                <span>DIRECT INQUIRY</span>
              </div>
              <h3 className="form-heading">Send a Message</h3>
              <p className="form-subtext">Fill out this quick form and I will respond to your inbox promptly.</p>

              <div className="form-field-group">
                <label htmlFor="user-name" className="field-label">Your Name</label>
                <input
                  id="user-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="modern-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="user-email" className="field-label">Email Address</label>
                <input
                  id="user-email"
                  type="email"
                  name="email"
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="modern-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="user-message" className="field-label">Your Message</label>
                <textarea
                  id="user-message"
                  name="message"
                  placeholder="Tell me about your project, team opportunity, or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="modern-input modern-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="btn-modern btn-accent btn-full-width" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="btn-spinner" aria-hidden="true"></span>
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="btn-arrow-right" aria-hidden="true">✉️</span>
                  </>
                )}
              </button>

              {status.message && (
                <div className={`form-alert alert-${status.type}`}>
                  <span className="alert-emoji">{status.type === 'success' ? '🎉' : '⚠️'}</span>
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}