import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  mouseX: number;
  mouseY: number;
}

export function Particles({ count = 1500, mouseX, mouseY }: ParticlesProps) {
  const points = useRef<THREE.Points>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Create particle positions on a sphere surface
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const radius = 4;
    
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution for even distribution
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, [count]);

  // Create animated geometry - floating icosahedron with vertex animation
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 1);
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate particles
    if (points.current) {
      points.current.rotation.y = time * 0.05;
      points.current.rotation.x = time * 0.03;
      
      // Subtle mouse interaction on particles
      points.current.rotation.x += mouseY * 0.03;
      points.current.rotation.y += mouseX * 0.03;
    }

    // Animate geometric shape
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.x = time * 0.15;
      meshRef.current.rotation.y = time * 0.1;
      
      // Mouse interaction - tilt based on cursor
      meshRef.current.rotation.x += mouseY * 0.2;
      meshRef.current.rotation.y += mouseX * 0.2;
      
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
      
      // Vertex animation for organic feel
      const positionAttribute = meshRef.current.geometry.getAttribute('position');
      const vertex = new THREE.Vector3();
      
      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i);
        const originalLength = vertex.length();
        
        // Create wave effect on vertices
        const wave = Math.sin(time * 1.5 + vertex.x * 2) * 0.05;
        vertex.normalize().multiplyScalar(originalLength + wave);
        
        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      
      positionAttribute.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <>
      {/* Background particles */}
      <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2563eb"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
      
      {/* Animated geometric shape */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#2563eb"
          wireframe={true}
          transparent={true}
          opacity={0.15}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Ambient lighting for subtle depth */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#3b82f6" />
    </>
  );
}
