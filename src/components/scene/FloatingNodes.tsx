import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type NodeData = {
  position: THREE.Vector3;
  rotation: THREE.Vector3;
  scale: number;
  speed: number;
  offset: number;
};

const FloatingNodes = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const tempObject = useMemo(() => new THREE.Object3D(), []);

  const nodes = useMemo<NodeData[]>(() => {
    return new Array(36).fill(0).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        Math.random() * 6 + 1,
        (Math.random() - 0.5) * 18
      ),
      rotation: new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      scale: Math.random() * 0.5 + 0.25,
      speed: Math.random() * 0.6 + 0.2,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    nodes.forEach((node, index) => {
      tempObject.position.copy(node.position);
      tempObject.position.y += Math.sin(t * node.speed + node.offset) * 0.6;
      tempObject.rotation.set(
        node.rotation.x + t * 0.1,
        node.rotation.y + t * 0.12,
        node.rotation.z + t * 0.08
      );
      tempObject.scale.setScalar(node.scale);
      tempObject.updateMatrix();
      meshRef.current?.setMatrixAt(index, tempObject.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, nodes.length]}>
      <icosahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial
        color="#5f8242"
        emissive="#a2d094"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.4}
        transparent
        opacity={0.85}
      />
    </instancedMesh>
  );
};

export default FloatingNodes;
