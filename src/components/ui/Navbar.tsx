import { useState, useEffect } from "react";
import {
  FiHome,
  FiZap,
  FiUser,
  FiCpu,
  FiGrid,
  FiBriefcase,
  FiMail,
  FiExternalLink,
  FiMenu,
  FiX,
  FiSend,
} from "react-icons/fi";
import type { NavSection } from "../../types/portfolio";

type NavbarProps = {
  sections: NavSection[];
  resumeUrl?: string;
};

const getSectionIcon = (id: string) => {
  switch (id) {
    case "hero":
    case "home":
      return <FiHome size={14} className="nav-item-icon" />;
    case "why-hire":
      return <FiZap size={14} className="nav-item-icon" />;
    case "about":
    case "identity":
      return <FiUser size={14} className="nav-item-icon" />;
    case "skills":
    case "stack":
      return <FiCpu size={14} className="nav-item-icon" />;
    case "projects":
    case "works":
      return <FiGrid size={14} className="nav-item-icon" />;
    case "experience":
      return <FiBriefcase size={14} className="nav-item-icon" />;
    case "contact":
    case "link":
      return <FiMail size={14} className="nav-item-icon" />;
    default:
      return null;
  }
};

const Navbar = ({ sections, resumeUrl }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const resumeTarget = resumeUrl?.startsWith("http") ? "_blank" : undefined;
  const resumeRel = resumeTarget ? "noreferrer" : undefined;

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
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
    <nav className="dynamic-island-shell">
      <div className="dynamic-island-capsule">
        {/* Brand Monogram Badge */}
        <a href="#hero" className="island-brand" onClick={handleNavClick}>
          <span className="brand-avatar">ZS</span>
          <span className="brand-text desktop-only">ZAID SAYYED</span>
          <span className="status-pulse-dot" title="Available for Hire" />
        </a>

        {/* Desktop Central Links Dock */}
        <div className="island-links desktop-only">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`island-link ${isActive ? "is-active" : ""}`}
                data-cursor="link"
              >
                {getSectionIcon(section.id)}
                <span className="island-link-label">{section.label}</span>
                {isActive && <span className="active-glow-pill" />}
              </a>
            );
          })}
        </div>

        {/* Desktop Right Actions */}
        <div className="island-actions desktop-only">
          {resumeUrl ? (
            <a
              href={resumeUrl}
              className="island-cta-btn island-resume-btn"
              data-cursor="link"
              target={resumeTarget}
              rel={resumeRel}
            >
              <span>Resume</span> <FiExternalLink size={12} />
            </a>
          ) : null}
          <a href="#contact" className="island-cta-btn island-primary-btn" data-cursor="magnet">
            <span>Hire Me</span> <FiSend size={12} />
          </a>
        </div>

        {/* Mobile Dynamic Toggle */}
        <button
          type="button"
          className="island-mobile-toggle mobile-only"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          <span className="mobile-toggle-lbl">{mobileOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Mobile Dynamic Island Expanded Overlay */}
      {mobileOpen && (
        <div className="island-mobile-menu surface-panel">
          <div className="island-mobile-head">
            <span className="mobile-head-title">SYSTEM NAVIGATION</span>
            <span className="mobile-head-status">ONLINE</span>
          </div>
          <div className="island-mobile-links">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`island-mobile-link ${isActive ? "is-active" : ""}`}
                  onClick={handleNavClick}
                >
                  <div className="mobile-link-left">
                    {getSectionIcon(section.id)}
                    <span>{section.label}</span>
                  </div>
                  {isActive && <span className="mobile-active-tag">ACTIVE</span>}
                </a>
              );
            })}
          </div>
          <div className="island-mobile-actions">
            {resumeUrl ? (
              <a
                href={resumeUrl}
                className="island-cta-btn island-resume-btn mobile-act"
                target={resumeTarget}
                rel={resumeRel}
                onClick={handleNavClick}
              >
                <span>Resume</span> <FiExternalLink size={14} />
              </a>
            ) : null}
            <a
              href="#contact"
              className="island-cta-btn island-primary-btn mobile-act"
              onClick={handleNavClick}
            >
              <span>Hire Me</span> <FiSend size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
