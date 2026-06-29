import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import AbstractCharacter from "./AbstractCharacter";

const Experience = () => {
  return (
    <div className="canvas-container">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        <SceneController />
        
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 15]} />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#5f8242" />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          
          <Float speed={3} rotationIntensity={1} floatIntensity={1}>
            <AbstractCharacter />
          </Float>

          <gridHelper args={[40, 80, "#5f8242", "#111111"]} position={[0, -3, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const SceneController = () => {
  useFrame((state) => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollY / maxScroll;

    // Camera movement based on scroll
    state.camera.position.x = Math.sin(progress * Math.PI) * 2;
    state.camera.position.z = 5 + progress * 5;
    state.camera.position.y = progress * 2;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

export default Experience;
