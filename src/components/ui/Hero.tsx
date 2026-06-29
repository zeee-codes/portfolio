import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
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
        <div className="hero-chip">{contact.availability}</div>
        <div className="hero-chip">{contact.location}</div>
      </div>

      <div className="hero-main-container">
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
                {social.platform === "github" ? <FiGithub size={16} /> : <FiLinkedin size={16} />}
                <span>{social.label}</span>
                <FiExternalLink size={12} className="ext-arrow" />
              </a>
            ))}
          </div>
        </div>

        {/* Separated Overview Strip below headline narrative */}
        <div className="hero-overview-strip surface-panel">
          <div className="overview-block">
            <span className="overview-title">Focus Areas</span>
            <ul className="overview-list">
              {profile.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {profile.quickFacts?.length ? (
            <div className="overview-block">
              <span className="overview-title">Quick Facts</span>
              <div className="hero-facts">
                {profile.quickFacts.map((fact) => (
                  <div key={fact.label} className="hero-fact">
                    <span className="hero-fact-label">{fact.label}</span>
                    <span className="hero-fact-value">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
