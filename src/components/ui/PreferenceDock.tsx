import { useState } from "react";
import { FiSliders, FiChevronDown, FiChevronUp } from "react-icons/fi";

type PreferenceDockProps = {
  reduceMotion: boolean;
  onToggleMotion: () => void;
  pause3d: boolean;
  onToggle3d: () => void;
};

const PreferenceDock = ({
  reduceMotion,
  onToggleMotion,
  pause3d,
  onToggle3d,
}: PreferenceDockProps) => {
  const [collapsedMobile, setCollapsedMobile] = useState(true);

  return (
    <div className={`preference-dock surface-panel ${collapsedMobile ? "is-collapsed-mobile" : ""}`}>
      <div className="preference-head" onClick={() => setCollapsedMobile((prev) => !prev)}>
        <div className="preference-head-left">
          <FiSliders className="pref-icon" size={16} />
          <span className="preference-kicker">Controls</span>
        </div>
        <div className="preference-head-right">
          <span className="preference-status">{pause3d ? "3D Paused" : "3D Live"}</span>
          <button
            type="button"
            className="pref-collapse-btn mobile-only"
            aria-label={collapsedMobile ? "Expand controls" : "Collapse controls"}
          >
            {collapsedMobile ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          </button>
        </div>
      </div>

      <div className="preference-body">
        <button
          type="button"
          className="pref-toggle"
          onClick={onToggleMotion}
          aria-pressed={reduceMotion}
          data-cursor="magnet"
        >
          <span>Reduce Motion</span>
          <span className={`pref-switch ${reduceMotion ? "is-on" : ""}`} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="pref-toggle"
          onClick={onToggle3d}
          aria-pressed={pause3d}
          data-cursor="magnet"
        >
          <span>Pause 3D</span>
          <span className={`pref-switch ${pause3d ? "is-on" : ""}`} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default PreferenceDock;

