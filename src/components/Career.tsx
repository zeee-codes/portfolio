import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Designer</h4>
                <h5>Independent Builder</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Architected scalable systems for various startups, focusing on performance optimization and Gen AI integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>Tech Solutions Inc.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed robust web applications using Next.js and Node.js, implementing complex business logic and state management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Solutions Lead</h4>
                <h5>Syncell OS</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading the development of an AI-first operating system, leveraging LLMs to redefine human-computer interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
