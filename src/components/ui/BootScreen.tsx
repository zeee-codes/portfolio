import { useEffect, useState } from "react";

type BootScreenProps = {
  onComplete: () => void;
  onDisable: () => void;
};

const bootStages = [
  "Loading portfolio assets",
  "Initializing 3D environment",
  "Preparing interactive experience",
];

const BootScreen = ({ onComplete, onDisable }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 12 + 8);
      setProgress(value);
      const nextStage = Math.min(
        bootStages.length - 1,
        Math.floor((value / 100) * bootStages.length)
      );
      setStageIndex(nextStage);

      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(onComplete, 300);
      }
    }, 100);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="boot-screen" role="status" aria-live="polite">
      <div className="boot-panel">
        <div className="boot-head">
          <span className="boot-kicker">ZAID SAYYED</span>
          <span className="boot-code">PORTFOLIO</span>
        </div>
        <h1 className="boot-title">Welcome</h1>
        <p className="boot-subtitle text-dim">{bootStages[stageIndex]}</p>
        <div className="boot-progress">
          <span style={{ width: `${Math.round(progress)}%` }} />
        </div>
        <div className="boot-meta">
          <span>Loading</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="boot-actions">
          <button
            type="button"
            className="boot-skip"
            onClick={onComplete}
            data-cursor="link"
          >
            Enter Now
          </button>
          <button
            type="button"
            className="boot-skip boot-disable"
            onClick={onDisable}
            data-cursor="magnet"
          >
            Skip loading screen in future
          </button>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
