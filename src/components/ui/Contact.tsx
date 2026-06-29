import { FiGithub, FiLinkedin, FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import type { ContactInfo } from "../../types/portfolio";

type ContactProps = {
  contact: ContactInfo;
  resumeUrl?: string;
};

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return <FiGithub size={16} />;
    case "linkedin":
      return <FiLinkedin size={16} />;
    case "email":
      return <FiMail size={16} />;
    case "phone":
      return <FiPhone size={16} />;
    default:
      return <FiExternalLink size={16} />;
  }
};


const Contact = ({ contact, resumeUrl }: ContactProps) => {
  const phoneLink = contact.phone.replace(/\s/g, "");
  const resumeTarget = resumeUrl?.startsWith("http") ? "_blank" : undefined;
  const resumeRel = resumeTarget ? "noreferrer" : undefined;

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let&apos;s craft the next system.</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card surface-panel">
          <h3>Start a conversation</h3>
          <p className="text-dim">
            Reach out for collaborations, product builds, or advanced system design work.
          </p>
          <div className="contact-list">
            <div>
              <p className="contact-label">Email</p>
              <a href={`mailto:${contact.email}`} data-cursor="link">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="contact-label">Phone</p>
              <a href={`tel:${phoneLink}`} data-cursor="link">
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="contact-label">Location</p>
              <span>{contact.location}</span>
            </div>
          </div>
          <div className="contact-actions">
            <a
              className="btn-primary"
              href={`mailto:${contact.email}`}
              data-cursor="magnet"
            >
              Email Me
            </a>
            <a
              className="btn-secondary"
              href={`tel:${phoneLink}`}
              data-cursor="magnet"
            >
              Call Me
            </a>
            {resumeUrl ? (
              <a
                className="btn-ghost"
                href={resumeUrl}
                data-cursor="link"
                target={resumeTarget}
                rel={resumeRel}
              >
                Resume
              </a>
            ) : null}
          </div>
          <div className="contact-socials">
            {contact.socials.map((social) => {
              const isExt = social.url.startsWith("http");
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  className="social-link"
                  target={isExt ? "_blank" : undefined}
                  rel={isExt ? "noreferrer" : undefined}
                  data-cursor="link"
                >
                  {getSocialIcon(social.platform)}
                  <span>{social.label}</span>
                  {isExt && <FiExternalLink size={12} className="ext-arrow" />}
                </a>
              );
            })}
          </div>
        </div>
        <form
          className="contact-form surface-panel"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="form-field">
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label className="form-field">
            <span>Message</span>
            <textarea name="message" rows={4} placeholder="Tell me about the build" />
          </label>
          <button type="submit" className="btn-primary" data-cursor="magnet">
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
