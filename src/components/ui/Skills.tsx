import type { SkillCategory } from "../../types/portfolio";

type SkillsProps = {
  categories: SkillCategory[];
};

const Skills = ({ categories }: SkillsProps) => {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <p className="section-kicker">Tech Stack</p>
        <h2 className="section-title">Engineered stack & applied capabilities.</h2>
      </div>
      <div className="skill-grid">
        {categories.map((category, index) => (
          <article key={category.id} className="skill-card surface-panel">
            <div className="skill-card-header">
              <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
              <div
                className="skill-accent"
                style={{ backgroundColor: category.accentColor }}
              />
              <div>
                <h3>{category.title}</h3>
                <p className="text-dim">{category.description}</p>
              </div>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill.name} className="skill-pill">
                  {skill.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
