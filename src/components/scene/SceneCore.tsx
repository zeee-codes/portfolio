import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SceneCore = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 1.2, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshStandardMaterial
          color="#c34e52"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
        <torusGeometry args={[2.4, 0.05, 18, 220]} />
        <meshStandardMaterial
          color="#5f8242"
          emissive="#5f8242"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

export default SceneCore;
