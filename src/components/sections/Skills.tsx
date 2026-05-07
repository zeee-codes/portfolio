import { SkillCategory } from "../../types/portfolio";

interface SkillsProps {
  categories: SkillCategory[];
}

const Skills = ({ categories }: SkillsProps) => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical <span className="accent">Stack</span></h2>
        <p className="section-subtitle">A breakdown of my engineering capabilities across the stack.</p>
      </div>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="skill-cat-card glass-panel">
            <h3 className="mono accent">{cat.title}</h3>
            <p className="cat-desc">{cat.description}</p>
            
            <div className="skills-list">
              {cat.skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span className="mono level">{skill.level}</span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ 
                        width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '75%' : '50%',
                        backgroundColor: cat.accentColor 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .skill-cat-card {
          padding: 2.5rem;
        }
        .skill-cat-card h3 {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .cat-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          height: 3rem;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .skill-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .level {
          font-size: 0.7rem;
          opacity: 0.6;
        }
        .skill-bar-container {
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        .skill-bar {
          height: 100%;
          transition: width 1s ease-out;
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
