import type { Profile } from "../../types/portfolio";

type AboutProps = {
  profile: Profile;
};

const About = ({ profile }: AboutProps) => {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <p className="section-kicker">About</p>
        <h2 className="section-title">Designing systems with cinematic clarity.</h2>
      </div>
      <div className="about-grid">
        <div className="about-panel surface-panel">
          <p className="about-title">Profile</p>
          <p className="text-dim">{profile.summary}</p>
        </div>
        <div className="about-panel surface-panel">
          <p className="about-title">Philosophy</p>
          <p className="text-dim">{profile.philosophy}</p>
          <div className="about-focus">
            {profile.focusAreas.map((area) => (
              <span key={area} className="pill">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
