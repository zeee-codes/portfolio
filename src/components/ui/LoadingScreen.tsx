import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Initializing Core...");

  useEffect(() => {
    const messages = [
      "Allocating Memory...",
      "Mapping 3D Coordinate Space...",
      "Loading System Identity...",
      "Establishing Connection...",
      "READY."
    ];

    let currentMsg = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        // Update text based on progress
        const nextMsgIndex = Math.floor((prev / 100) * messages.length);
        if (nextMsgIndex > currentMsg) {
          currentMsg = nextMsgIndex;
          setText(messages[currentMsg] || "READY.");
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loader-content">
        <div className="loader-header">
          <span className="mono accent">SYSTEM_BOOT_V4.0</span>
          <span className="mono">{progress}%</span>
        </div>
        
        <div className="progress-track">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        
        <p className="mono loader-text">{text}</p>
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #050505;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-content {
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .loader-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
        }
        .progress-track {
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
        }
        .progress-bar {
          height: 100%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
          transition: width 0.1s linear;
        }
        .loader-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
