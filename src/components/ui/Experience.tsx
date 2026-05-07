import type { ExperienceItem } from "../../types/portfolio";

type ExperienceProps = {
  timeline: ExperienceItem[];
};

const Experience = ({ timeline }: ExperienceProps) => {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Building systems with measurable impact.</h2>
      </div>
      <div className="experience-grid">
        {timeline.map((item, index) => (
          <article key={item.id} className="experience-card surface-panel">
            <div className="experience-head">
              <span className="experience-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="experience-period">{item.period}</span>
            </div>
            <h3>{item.role}</h3>
            <p className="text-dim">{item.organization}</p>
            <p className="experience-summary">{item.summary}</p>
            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
