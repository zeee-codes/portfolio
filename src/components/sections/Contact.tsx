import { ContactInfo } from "../../types/portfolio";

interface ContactProps {
  contact: ContactInfo;
}

const Contact = ({ contact }: ContactProps) => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container glass-panel">
        <div className="contact-header">
          <h2 className="section-title">Let's <span className="accent">Collaborate</span></h2>
          <p className="section-subtitle">Available for new opportunities and technical discussions.</p>
        </div>

        <div className="contact-methods">
          <div className="method-group">
            <span className="mono accent">/ Direct</span>
            <a href={`mailto:${contact.email}`} className="large-link">{contact.email}</a>
          </div>

          <div className="social-links">
            {contact.socials.map((social) => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn mono"
              >
                {social.platform} <span className="accent">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-meta">
          <p className="mono">© {new Date().getFullYear()} ZAID SAYYED — SYSTEM_ESTABLISHED</p>
          <div className="status-indicator">
            <span className="dot"></span>
            <span className="mono">ONLINE</span>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          min-height: 80vh;
        }
        .contact-container {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .method-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }
        .large-link {
          font-size: clamp(1.5rem, 5vw, 3rem);
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 800;
          transition: color 0.3s;
        }
        .large-link:hover {
          color: var(--accent-cyan);
        }
        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .social-btn {
          padding: 0.8rem 1.5rem;
          border: 1px solid var(--glass-border);
          text-decoration: none;
          color: var(--text-primary);
          text-transform: uppercase;
          font-size: 0.8rem;
          transition: all 0.3s;
        }
        .social-btn:hover {
          background: var(--glass-bg);
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
        }
        .footer-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 4rem;
          border-top: 1px solid var(--glass-border);
          opacity: 0.5;
          font-size: 0.8rem;
        }
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ff00;
        }
        @media (max-width: 768px) {
          .contact-container {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
