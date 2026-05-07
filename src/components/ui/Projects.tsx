import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../../types/portfolio";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);
  const baseProjects = featuredProjects.length ? featuredProjects : projects.slice(0, 3);
  const visibleProjects = showAll ? projects : baseProjects;
  const totalProjects = projects.length;
  const indexMap = useMemo(
    () => new Map(projects.map((project, index) => [project.id, index])),
    [projects]
  );
  const hasHiddenProjects = projects.length > baseProjects.length;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-head">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Full-scale builds with cinematic depth.</h2>
      </div>
      <div className="projects-full">
        {visibleProjects.map((project) => {
          const displayIndex = indexMap.get(project.id) ?? 0;
          const positionLabel = `${String(displayIndex + 1).padStart(2, "0")} / ${String(
            totalProjects
          ).padStart(2, "0")}`;

          return (
          <article
            key={project.id}
            className="project-showcase"
            style={
              {
                "--accent": project.accentColor,
                "--gradient-start": project.gradient[0],
                "--gradient-end": project.gradient[1],
              } as CSSProperties
            }
          >
            <div className="project-media" aria-hidden="true">
              <div className="project-fallback" />
              {project.videoUrl ? (
                <video
                  className="project-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={project.image}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              ) : null}
              <div className="project-overlay" />
            </div>

            <div className="project-body">
              <div className="project-rail">
                <span className="project-rail-index">
                  {String(displayIndex + 1).padStart(2, "0")}
                </span>
                <span className="project-rail-label">Case Study · {positionLabel}</span>
              </div>
              <motion.div className="project-content" layoutId={`project-${project.id}`}>
                <div className="project-meta">
                  <span className="project-status">{project.status}</span>
                  <span className="project-meta-divider" aria-hidden="true" />
                  <span className="project-meta-label">{project.subtitle}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-facts">
                  <div className="project-fact">
                    <span className="project-fact-label">Role</span>
                    <span>{project.role}</span>
                  </div>
                  <div className="project-fact">
                    <span className="project-fact-label">Timeline</span>
                    <span>{project.timeline}</span>
                  </div>
                  <div className="project-fact">
                    <span className="project-fact-label">Impact</span>
                    <span>{project.impact}</span>
                  </div>
                </div>
                <p className="project-description text-dim">{project.longDescription}</p>
                <ul className="project-results">
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
                <div className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="pill">
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="project-features">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="project-feature surface-panel">
                      <p className="feature-title">{feature.title}</p>
                      <p className="text-dim">{feature.description}</p>
                      {feature.metric ? (
                        <span className="feature-metric">{feature.metric}</span>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <button
                    className="project-detail"
                    type="button"
                    onClick={() => setActiveProject(project)}
                    data-cursor="view"
                  >
                    View Detail
                  </button>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="project-link"
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                      data-cursor="link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </article>
        );
        })}
      </div>
      {hasHiddenProjects ? (
        <div className="projects-toggle">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setShowAll((prev) => !prev)}
            data-cursor="magnet"
          >
            {showAll ? "Show Featured Only" : "View All Projects"}
          </button>
        </div>
      ) : null}

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="project-modal-card surface-panel"
              layoutId={`project-${activeProject.id}`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-modal-head">
                <div>
                  <p className="project-title">{activeProject.title}</p>
                  <p className="project-subtitle">{activeProject.subtitle}</p>
                </div>
                <button
                  type="button"
                  className="project-close"
                  onClick={() => setActiveProject(null)}
                  data-cursor="link"
                >
                  Close
                </button>
              </div>
              <div className="project-facts">
                <div className="project-fact">
                  <span className="project-fact-label">Role</span>
                  <span>{activeProject.role}</span>
                </div>
                <div className="project-fact">
                  <span className="project-fact-label">Timeline</span>
                  <span>{activeProject.timeline}</span>
                </div>
                <div className="project-fact">
                  <span className="project-fact-label">Impact</span>
                  <span>{activeProject.impact}</span>
                </div>
              </div>
              <p className="text-dim">{activeProject.longDescription}</p>
              <ul className="project-results">
                {activeProject.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              <div className="project-features">
                {activeProject.features.map((feature) => (
                  <div key={feature.title} className="project-feature">
                    <p className="feature-title">{feature.title}</p>
                    <p className="text-dim">{feature.description}</p>
                    {feature.metric ? (
                      <span className="feature-metric">{feature.metric}</span>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="project-stack">
                {activeProject.stack.map((item) => (
                  <span key={item} className="stack-tag">
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {activeProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="project-link"
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                    data-cursor="link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
