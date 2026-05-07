import MagneticButton from "../common/MagneticButton";
import type { ContactInfo, Profile } from "../../types/portfolio";

type HeroProps = {
  profile: Profile;
  contact: ContactInfo;
};

const Hero = ({ profile, contact }: HeroProps) => {
  const primarySocials = contact.socials.filter((social) =>
    ["github", "linkedin"].includes(social.platform)
  );
  const resumeTarget = profile.resumeUrl?.startsWith("http") ? "_blank" : undefined;
  const resumeRel = resumeTarget ? "noreferrer" : undefined;
  const headlineWords = profile.headline.split(" ").filter(Boolean);
  const lastWord = headlineWords.pop();
  const leadingHeadline = headlineWords.join(" ");

  return (
    <section id="hero" className="section hero">
      <div className="hero-topline">
        <div className="hero-chip">
          <span className="hero-dot" aria-hidden="true" />
          <span>Live · {contact.availability}</span>
        </div>
        <div className="hero-chip">{contact.location}</div>
      </div>
      <div className="hero-layout">
        <div className="hero-left">
          <p className="section-kicker">Zaid Sayyed</p>
          <h1 className="hero-title">
            {leadingHeadline ? (
              <span className="hero-title-line">{leadingHeadline}</span>
            ) : null}
            {lastWord ? (
              <span className="hero-title-line hero-title-accent">{lastWord}</span>
            ) : null}
          </h1>
          <p className="hero-subtitle">{profile.tagline}</p>
          <p className="hero-summary text-dim">{profile.summary}</p>
          <div className="cta-row">
            <MagneticButton href="#projects" className="btn-primary" cursor="magnet">
              View Projects
            </MagneticButton>
            <MagneticButton
              href={`mailto:${contact.email}`}
              className="btn-secondary"
              cursor="link"
            >
              Work With Me
            </MagneticButton>
            {profile.resumeUrl ? (
              <MagneticButton
                href={profile.resumeUrl}
                className="btn-ghost"
                cursor="link"
                target={resumeTarget}
                rel={resumeRel}
              >
                Resume
              </MagneticButton>
            ) : null}
          </div>
          <div className="hero-socials">
            {primarySocials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-panel surface-panel">
          <div className="hero-panel-head">
            <span className="hero-panel-title">Focus Areas</span>
            <span className="hero-panel-kicker">{contact.title}</span>
          </div>
          <ul className="hero-panel-list">
            {profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          {profile.quickFacts?.length ? (
            <div className="hero-facts">
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="hero-fact">
                  <span className="hero-fact-label">{fact.label}</span>
                  <span className="hero-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
