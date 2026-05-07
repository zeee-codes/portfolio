import type { NavSection } from "../../types/portfolio";

type NavbarProps = {
  sections: NavSection[];
  resumeUrl?: string;
};

const Navbar = ({ sections, resumeUrl }: NavbarProps) => {
  const resumeTarget = resumeUrl?.startsWith("http") ? "_blank" : undefined;
  const resumeRel = resumeTarget ? "noreferrer" : undefined;

  return (
    <nav className="nav-shell">
      <div className="nav-inner surface-panel nav-surface">
        <div className="nav-brand">Zaid Sayyed</div>
        <div className="nav-links">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="nav-link"
              data-cursor="link"
            >
              {section.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          {resumeUrl ? (
            <a
              href={resumeUrl}
              className="nav-cta nav-resume"
              data-cursor="link"
              target={resumeTarget}
              rel={resumeRel}
            >
              Resume
            </a>
          ) : null}
          <a href="#contact" className="nav-cta" data-cursor="magnet">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
