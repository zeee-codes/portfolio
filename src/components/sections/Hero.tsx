import { Profile } from "../../types/portfolio";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
  data: Profile;
}

const Hero = ({ data }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        delay: 0.5,
        ease: "power4.out",
      });
      
      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.8,
        delay: 1.5,
        duration: 1,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="hero-section">
      <div className="hero-content">
        <p className="mono accent hero-line">Initializing Identity.exe...</p>
        <h1 ref={titleRef} className="section-title hero-line">
          {data.firstName} <br />
          <span className="accent">{data.lastName}</span>
        </h1>
        <p className="section-subtitle hero-line">
          {data.tagline}
        </p>
        
        <div className="hero-cta hero-line">
          <a href="#projects" className="cta-button">
            View My Systems
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p className="mono">Scroll to Traverse</p>
      </div>

      <style>{`
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .hero-content {
          max-width: 800px;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: var(--accent-cyan);
          color: #000;
          text-decoration: none;
          font-weight: 800;
          border-radius: 4px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          margin-top: 2rem;
        }
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 240, 255, 0.3);
        }
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          opacity: 0.6;
        }
        .mouse {
          width: 26px;
          height: 42px;
          border: 2px solid var(--text-primary);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        .wheel {
          width: 4px;
          height: 8px;
          background: var(--accent-cyan);
          border-radius: 2px;
          animation: scroll 2s infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
