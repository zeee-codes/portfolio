import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial } from "three";

const AbstractCharacter = () => {
  const groupRef = useRef<any>();
  const headRef = useRef<Mesh>(null!);
  const bodyRef = useRef<Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Subtle breathing animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }

    // Head subtle movement
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head - A geometric diamond/polyhedron shape */}
      <mesh ref={headRef} position={[0, 1.2, 0]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#a2d094" 
          emissiveIntensity={0.5} 
          wireframe 
        />
      </mesh>

      {/* Torso - Abstract wireframe trapezoid/box */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial 
          color="#111111" 
          metalness={1} 
          roughness={0.1} 
          transparent 
          opacity={0.8}
        />
      </mesh>

      {/* Floating Orbs - Representing 'Systems' */}
      {[...Array(3)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.cos(i * 2 + 1) * 1.5, 
            Math.sin(i * 2) * 1, 
            Math.sin(i * 2 + 2) * 0.5
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#a2d094" emissive="#5f8242" emissiveIntensity={2} />
        </mesh>
      ))}
      
      {/* Limbs / Connections - Thin neon lines */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.5]} />
        <meshStandardMaterial color="#5f8242" />
      </mesh>
    </group>
  );
};

export default AbstractCharacter;
