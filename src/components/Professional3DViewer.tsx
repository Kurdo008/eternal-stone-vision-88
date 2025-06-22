
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface Professional3DViewerProps {
  material?: string;
  text?: string;
  shape?: string;
  color?: string;
}

const ProfessionalGravestone = ({ material = 'granite', text = 'In Herinnering', shape = 'rectangular', color = '#4a4a4a' }: Professional3DViewerProps) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  const getMaterial = () => {
    const materialColor = new THREE.Color(color);
    
    switch (material) {
      case 'granite':
        return (
          <meshStandardMaterial 
            color={materialColor}
            roughness={0.2}
            metalness={0.1}
            normalScale={new THREE.Vector2(0.5, 0.5)}
          />
        );
      case 'marble':
        return (
          <meshStandardMaterial 
            color="#f8f8f8"
            roughness={0.05}
            metalness={0.02}
          />
        );
      default:
        return (
          <meshStandardMaterial 
            color={materialColor}
            roughness={0.25}
            metalness={0.1}
          />
        );
    }
  };

  return (
    <group ref={meshRef}>
      {/* Main gravestone body */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 0.4]} />
        {getMaterial()}
      </mesh>
      
      {/* Rounded top */}
      <mesh position={[0, 3.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.4, 32]} />
        {getMaterial()}
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -1.2, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[3.5, 0.4, 0.6]} />
        {getMaterial()}
      </mesh>
      
      {/* Text engraving */}
      {text && (
        <Suspense fallback={null}>
          <Center position={[0, 1.5, 0.25]}>
            <Text3D
              font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
              size={0.25}
              height={0.02}
              curveSegments={12}
            >
              {text}
              <meshStandardMaterial color="#2a2a2a" />
            </Text3D>
          </Center>
          
          <Center position={[0, 0.8, 0.25]}>
            <Text3D
              font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
              size={0.15}
              height={0.01}
              curveSegments={12}
            >
              1950 - 2023
              <meshStandardMaterial color="#2a2a2a" />
            </Text3D>
          </Center>
        </Suspense>
      )}
      
      {/* Decorative elements */}
      <mesh position={[0, 0.2, 0.25]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="#8b7355" />
      </mesh>
    </group>
  );
};

const Professional3DViewer = (props: Professional3DViewerProps) => {
  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-sage-50 to-white rounded-xl overflow-hidden shadow-inner border border-sage-200">
      <Canvas 
        camera={{ position: [6, 4, 6], fov: 50 }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />
          
          <ProfessionalGravestone {...props} />
          
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4} 
          />
          
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={4}
            maxDistance={12}
            maxPolarAngle={Math.PI / 2}
            autoRotate={false}
          />
          
          <Environment preset="park" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Professional3DViewer;
