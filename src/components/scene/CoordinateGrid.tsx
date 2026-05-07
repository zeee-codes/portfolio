import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CoordinateGrid = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = -2 + Math.sin(t * 0.6) * 0.15;
    groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.03;
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      <gridHelper args={[50, 50, "#5f8242", "#1a2414"]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color="#0a1209" transparent opacity={0.35} />
      </mesh>
    </group>
  );
};

export default CoordinateGrid;
