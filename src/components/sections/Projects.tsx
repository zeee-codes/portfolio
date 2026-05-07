import { Project } from "../../types/portfolio";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="projects-container">
      <div className="section-header">
        <h2 className="section-title">Selected <span className="accent">Systems</span></h2>
        <p className="mono">Execution history [5 entries found]</p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-fullscreen">
            <div className="project-content glass-panel">
              <div className="project-meta">
                <span className="mono accent">{project.year}</span>
                <span className="status-badge">{project.status}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle accent mono">{project.subtitle}</p>
              
              <p className="project-desc">{project.longDescription}</p>

              <div className="project-features">
                {project.features.map((f, i) => (
                  <div key={i} className="feature-pill">
                    <span className="mono">{f.title}</span>
                    {f.metric && <span className="metric">{f.metric}</span>}
                  </div>
                ))}
              </div>

              <div className="project-stack">
                {project.stack.map(s => <span key={s} className="stack-item">#{s}</span>)}
              </div>

              <div className="project-links">
                {project.links.map(link => (
                  <a key={link.label} href={link.url} className="project-link">
                    {link.label} <span>↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Background Gradient Layer for unique feel per project */}
            <div 
              className="project-bg-effect" 
              style={{ background: `radial-gradient(circle at 80% 50%, ${project.accentColor}1a 0%, transparent 50%)` }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .projects-container {
          padding: 0;
        }
        .section-header {
          padding: 100px 10% 40px;
        }
        .project-fullscreen {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 10%;
          position: relative;
          scroll-snap-align: start;
        }
        .project-content {
          max-width: 650px;
          padding: 3rem;
          position: relative;
          z-index: 2;
        }
        .project-meta {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        }
        .status-badge {
          font-size: 0.7rem;
          padding: 2px 8px;
          border: 1px solid var(--text-secondary);
          border-radius: 100px;
          text-transform: uppercase;
        }
        .project-title {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
        }
        .project-subtitle {
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        .project-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .project-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }
        .feature-pill {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        .metric {
          color: var(--accent-cyan);
          font-weight: bold;
        }
        .project-stack {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          opacity: 0.5;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }
        .project-links {
          display: flex;
          gap: 2rem;
        }
        .project-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 800;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--accent-cyan);
          padding-bottom: 4px;
          transition: opacity 0.3s;
        }
        .project-link:hover {
          opacity: 0.6;
        }
        .project-bg-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
