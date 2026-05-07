import { useEffect, useState } from "react";

type BootScreenProps = {
  onComplete: () => void;
  onDisable: () => void;
};

const bootStages = [
  "Powering core",
  "Loading render modules",
  "Calibrating motion grid",
  "Syncing visual systems",
  "Launching interface",
];

const BootScreen = ({ onComplete, onDisable }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 10 + 6);
      setProgress(value);
      const nextStage = Math.min(
        bootStages.length - 1,
        Math.floor((value / 100) * bootStages.length)
      );
      setStageIndex(nextStage);

      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(onComplete, 500);
      }
    }, 140);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="boot-screen" role="status" aria-live="polite">
      <div className="boot-panel">
        <div className="boot-head">
          <span className="boot-kicker">SYSTEM BOOT</span>
          <span className="boot-code">ZX-17</span>
        </div>
        <h1 className="boot-title">Initializing signal stack</h1>
        <p className="boot-subtitle text-dim">{bootStages[stageIndex]}</p>
        <div className="boot-progress">
          <span style={{ width: `${Math.round(progress)}%` }} />
        </div>
        <div className="boot-meta">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="boot-actions">
          <button
            type="button"
            className="boot-skip"
            onClick={onComplete}
            data-cursor="link"
          >
            Skip
          </button>
          <button
            type="button"
            className="boot-skip boot-disable"
            onClick={onDisable}
            data-cursor="magnet"
          >
            Don&apos;t show again
          </button>
        </div>
        <div className="boot-lines">
          {bootStages.map((stage, index) => (
            <div
              key={stage}
              className={`boot-line ${index <= stageIndex ? "is-active" : ""}`}
            >
              <span className="boot-dot" />
              {stage}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
