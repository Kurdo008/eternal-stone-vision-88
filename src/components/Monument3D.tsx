
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface Monument3DProps {
  material: string;
  text: string;
  shape: string;
  color: string;
}

const MonumentMesh = ({ material, text, shape, color }: Monument3DProps) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const getMaterial = () => {
    const materialColor = new THREE.Color(color);
    
    switch (material) {
      case 'granite':
        return (
          <meshStandardMaterial 
            color={materialColor}
            roughness={0.3}
            metalness={0.1}
          />
        );
      case 'marble':
        return (
          <meshStandardMaterial 
            color={materialColor}
            roughness={0.1}
            metalness={0.05}
          />
        );
      case 'bronze':
        return (
          <meshStandardMaterial 
            color="#cd7f32"
            roughness={0.2}
            metalness={0.8}
          />
        );
      default:
        return (
          <meshStandardMaterial 
            color={materialColor}
            roughness={0.3}
            metalness={0.1}
          />
        );
    }
  };

  const getGeometry = () => {
    switch (shape) {
      case 'rectangular':
        return (
          <mesh>
            <boxGeometry args={[2, 3, 0.3]} />
            {getMaterial()}
          </mesh>
        );
      case 'cross':
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[2, 0.5, 0.3]} />
              {getMaterial()}
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.5, 3, 0.3]} />
              {getMaterial()}
            </mesh>
          </group>
        );
      case 'heart':
        return (
          <group>
            <mesh position={[-0.5, 0.5, 0]}>
              <sphereGeometry args={[0.7, 32, 32]} />
              {getMaterial()}
            </mesh>
            <mesh position={[0.5, 0.5, 0]}>
              <sphereGeometry args={[0.7, 32, 32]} />
              {getMaterial()}
            </mesh>
            <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[1.4, 1.4, 1.4]} />
              {getMaterial()}
            </mesh>
          </group>
        );
      default:
        return (
          <mesh>
            <boxGeometry args={[2, 3, 0.3]} />
            {getMaterial()}
          </mesh>
        );
    }
  };

  return (
    <group ref={meshRef}>
      {getGeometry()}
      {text && (
        <Suspense fallback={null}>
          <Center position={[0, shape === 'rectangular' ? 0.5 : -1.8, 0.2]}>
            <Text3D
              font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
              size={0.2}
              height={0.02}
              curveSegments={12}
            >
              {text}
              <meshStandardMaterial color="#333333" />
            </Text3D>
          </Center>
        </Suspense>
      )}
    </group>
  );
};

const Monument3D = (props: Monument3DProps) => {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-sage-100 to-sage-50 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [4, 2, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <MonumentMesh {...props} />
          
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={8}
          />
          
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Monument3D;
