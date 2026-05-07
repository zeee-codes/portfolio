import { Html, useProgress } from "@react-three/drei";

const CustomLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader">
        <p className="loader-label">Loading scene</p>
        <div className="loader-bar">
          <span style={{ width: `${Math.round(progress)}%` }} />
        </div>
        <p className="loader-percent">{Math.round(progress)}%</p>
      </div>
    </Html>
  );
};

export default CustomLoader;
