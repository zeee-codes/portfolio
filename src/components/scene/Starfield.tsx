import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type StarfieldProps = {
  count?: number;
  radius?: number;
};

const Starfield = ({ count = 1400, radius = 70 }: StarfieldProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const distance = Math.random() * radius + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      data[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      data[i * 3 + 1] = distance * Math.cos(phi);
      data[i * 3 + 2] = distance * Math.sin(phi) * Math.sin(theta);
    }
    return data;
  }, [count, radius]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = t * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#e9f6c6"
        size={0.07}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
};

export default Starfield;
