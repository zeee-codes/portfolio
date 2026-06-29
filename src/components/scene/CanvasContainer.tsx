import { Component, ReactNode, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import * as THREE from "three";
import Starfield from "./Starfield";
import CoordinateGrid from "./CoordinateGrid";
import FloatingNodes from "./FloatingNodes";
import ParticleMorph from "./ParticleMorph";
import SceneCore from "./SceneCore";
import DistortionEffect from "./DistortionEffect";
import CustomLoader from "../common/CustomLoader";

type CanvasErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type CanvasErrorBoundaryState = {
  hasError: boolean;
};

class CanvasErrorBoundary extends Component<CanvasErrorBoundaryProps, CanvasErrorBoundaryState> {
  state: CanvasErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const isWebGLAvailable = () => {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const cameraWaypoints = [
  new THREE.Vector3(0, 2.4, 14.5),
  new THREE.Vector3(-4.2, 3.8, 10.5),
  new THREE.Vector3(3.4, 2.4, 7.2),
  new THREE.Vector3(0.2, 1.0, 3.2),
  new THREE.Vector3(-2.6, 1.4, 7.8),
  new THREE.Vector3(0.6, 2.6, 10.8),
];

const useScrollProgress = () => {
  const progress = useRef(0);

  useEffect(() => {
    const update = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      progress.current = total > 0 ? window.scrollY / total : 0;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
};

type ScrollRigProps = {
  progress: React.MutableRefObject<number>;
  reduceMotion?: boolean;
};

const ScrollRig = ({ progress, reduceMotion = false }: ScrollRigProps) => {
  const mouse = useRef({ x: 0, y: 0 });
  const targetPosition = useRef(new THREE.Vector3());
  const parallaxTarget = useRef(new THREE.Vector3());
  const lookTarget = useRef(new THREE.Vector3());
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(cameraWaypoints, false, "catmullrom", 0.5),
    []
  );

  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(({ camera }) => {
    const t = THREE.MathUtils.clamp(progress.current, 0, 1);
    curve.getPointAt(t, targetPosition.current);
    curve.getTangentAt(t, lookTarget.current);

    parallaxTarget.current.copy(targetPosition.current);
    const parallaxStrength = reduceMotion ? 0.35 : 1.2;
    parallaxTarget.current.x += mouse.current.x * parallaxStrength;
    parallaxTarget.current.y += -mouse.current.y * (reduceMotion ? 0.25 : 0.8);

    camera.position.lerp(parallaxTarget.current, reduceMotion ? 0.04 : 0.08);
    camera.lookAt(
      targetPosition.current.x + lookTarget.current.x * 4,
      targetPosition.current.y + lookTarget.current.y * 4,
      targetPosition.current.z + lookTarget.current.z * 4
    );
  });

  return null;
};

const CanvasFallback = () => (
  <div className="canvas-fallback">
    <div className="canvas-fallback-card surface-panel">
      <p className="canvas-fallback-title">WebGL not available</p>
      <p className="text-dim">
        This device cannot render the 3D scene. The portfolio remains fully accessible.
      </p>
    </div>
  </div>
);

const CanvasPaused = () => (
  <div className="canvas-paused">
    <div className="canvas-fallback-card surface-panel">
      <p className="canvas-fallback-title">3D paused</p>
      <p className="text-dim">
        Re-enable the 3D scene from the controls to continue the immersive view.
      </p>
    </div>
  </div>
);

type CanvasContainerProps = {
  paused?: boolean;
  reduceMotion?: boolean;
};

const CanvasContainer = ({ paused = false, reduceMotion = false }: CanvasContainerProps) => {
  const [webglAvailable, setWebglAvailable] = useState(true);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    setWebglAvailable(isWebGLAvailable());
  }, []);

  if (!webglAvailable) {
    return <CanvasFallback />;
  }

  if (paused) {
    return <CanvasPaused />;
  }

  return (
    <div className="canvas-layer" aria-hidden="true">
      <CanvasErrorBoundary fallback={<CanvasFallback />}>
        <Canvas
          dpr={reduceMotion ? [1, 1] : [1, 1.6]}
          camera={{ position: [0, 2.2, 12], fov: 55, near: 0.1, far: 220 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <color attach="background" args={["#050703"]} />
          <fog attach="fog" args={["#050703", 12, 60]} />

          <ambientLight intensity={0.35} />
          <directionalLight position={[6, 6, 6]} intensity={0.6} color="#e9f6c6" />
          <pointLight position={[-6, 3, 2]} intensity={0.4} color="#c34e52" />

          <Suspense fallback={<CustomLoader />}>
            <ScrollRig progress={scrollProgress} reduceMotion={reduceMotion} />
            <ParticleMorph progressRef={scrollProgress} />
            <Starfield />
            <SceneCore />
            <CoordinateGrid />
            <FloatingNodes />
          </Suspense>

          <EffectComposer multisampling={0}>
            <Bloom
              intensity={reduceMotion ? 0.2 : 0.45}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.8}
            />
            {reduceMotion ? <></> : <Noise opacity={0.08} />}
            {reduceMotion ? (
              <></>
            ) : (
              <DistortionEffect
                progressRef={scrollProgress}
                sections={cameraWaypoints.length}
              />
            )}
          </EffectComposer>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default CanvasContainer;
