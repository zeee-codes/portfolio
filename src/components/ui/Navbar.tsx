import { useState, useEffect } from "react";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import type { NavSection } from "../../types/portfolio";

type NavbarProps = {
  sections: NavSection[];
  resumeUrl?: string;
};

const Navbar = ({ sections, resumeUrl }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const resumeTarget = resumeUrl?.startsWith("http") ? "_blank" : undefined;
  const resumeRel = resumeTarget ? "noreferrer" : undefined;

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="nav-shell">
      <div className="nav-inner surface-panel nav-surface">
        <a href="#hero" className="nav-brand" onClick={handleNavClick}>
          ZAID SAYYED
        </a>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
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

        {/* Desktop Actions */}
        <div className="nav-actions desktop-only">
          {resumeUrl ? (
            <a
              href={resumeUrl}
              className="nav-cta nav-resume"
              data-cursor="link"
              target={resumeTarget}
              rel={resumeRel}
            >
              Resume <FiExternalLink className="inline-icon" />
            </a>
          ) : null}
          <a href="#contact" className="nav-cta" data-cursor="magnet">
            Contact
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn mobile-only"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          <span className="mobile-toggle-text">{mobileOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <div className="mobile-menu-overlay surface-panel">
          <div className="mobile-menu-content">
            <p className="mobile-menu-kicker">NAVIGATION</p>
            <div className="mobile-nav-links">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="mobile-nav-link"
                  onClick={handleNavClick}
                >
                  {section.label}
                </a>
              ))}
            </div>
            <div className="mobile-nav-actions">
              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  className="btn-secondary mobile-cta-btn"
                  target={resumeTarget}
                  rel={resumeRel}
                  onClick={handleNavClick}
                >
                  Resume <FiExternalLink className="inline-icon" />
                </a>
              ) : null}
              <a
                href="#contact"
                className="btn-primary mobile-cta-btn"
                onClick={handleNavClick}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

