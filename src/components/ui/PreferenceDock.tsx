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
  return (
    <div className="preference-dock surface-panel">
      <div className="preference-head">
        <span className="preference-kicker">Controls</span>
        <span className="preference-status">{pause3d ? "3D Paused" : "3D Live"}</span>
      </div>
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
  );
};

export default PreferenceDock;
