import { Profile } from "../../types/portfolio";

interface AboutProps {
  data: Profile;
}

const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="about-section">
      <div className="grid-container">
        <div className="text-content">
          <h2 className="section-title">Identity <span className="accent">/</span></h2>
          <p className="large-text">{data.summary}</p>
          
          <div className="philosophy-card glass-panel">
            <h3 className="mono accent">System Philosophy</h3>
            <p>{data.philosophy}</p>
          </div>
        </div>

        <div className="focus-grid">
          {data.focusAreas.map((area, i) => (
            <div key={area} className="focus-item glass-panel">
              <span className="mono accent">0{i + 1}</span>
              <h4>{area}</h4>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .grid-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .large-text {
          font-size: 1.5rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }
        .philosophy-card {
          padding: 2rem;
          max-width: 500px;
        }
        .philosophy-card h3 {
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .focus-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .focus-item {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: transform 0.3s ease;
        }
        .focus-item:hover {
          transform: translateX(10px);
          border-color: var(--accent-cyan);
        }
        @media (max-width: 968px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
