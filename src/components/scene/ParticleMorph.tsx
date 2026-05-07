import type { MutableRefObject } from "react";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ParticleMorphProps = {
  progressRef: MutableRefObject<number>;
  count?: number;
};

const ParticleMorph = ({ progressRef, count = 1800 }: ParticleMorphProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { nebula, grid, positions } = useMemo(() => {
    const nebulaData = new Float32Array(count * 3);
    const gridData = new Float32Array(count * 3);
    const working = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = Math.random() * 6 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      nebulaData[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      nebulaData[i * 3 + 1] = radius * Math.cos(phi) * 0.8;
      nebulaData[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    const gridSide = Math.ceil(Math.cbrt(count));
    let index = 0;
    for (let x = 0; x < gridSide; x += 1) {
      for (let y = 0; y < gridSide; y += 1) {
        for (let z = 0; z < gridSide; z += 1) {
          if (index >= count) break;
          const spacing = 0.6;
          gridData[index * 3] = (x - gridSide / 2) * spacing;
          gridData[index * 3 + 1] = (y - gridSide / 2) * spacing * 0.7 + 0.6;
          gridData[index * 3 + 2] = (z - gridSide / 2) * spacing;
          index += 1;
        }
      }
    }

    return { nebula: nebulaData, grid: gridData, positions: working };
  }, [count]);

  useFrame(({ clock, mouse }) => {
    const mesh = pointsRef.current;
    if (!mesh) return;

    const t = clock.getElapsedTime();
    const morph = THREE.MathUtils.clamp((progressRef.current - 0.1) / 0.4, 0, 1);
    const morphEase = THREE.MathUtils.smootherstep(morph, 0, 1);

    for (let i = 0; i < positions.length; i += 3) {
      const x = THREE.MathUtils.lerp(nebula[i], grid[i], morphEase);
      const y = THREE.MathUtils.lerp(nebula[i + 1], grid[i + 1], morphEase);
      const z = THREE.MathUtils.lerp(nebula[i + 2], grid[i + 2], morphEase);

      positions[i] = x + Math.sin(t * 0.4 + i) * 0.02 + mouse.x * 0.5;
      positions[i + 1] = y + Math.cos(t * 0.4 + i) * 0.02 + mouse.y * 0.5;
      positions[i + 2] = z + Math.sin(t * 0.2 + i) * 0.02;
    }

    const attribute = mesh.geometry.getAttribute("position") as THREE.BufferAttribute;
    attribute.needsUpdate = true;
    mesh.rotation.y = t * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#7ef9ff"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleMorph;
