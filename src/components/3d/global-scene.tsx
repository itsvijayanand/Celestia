"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function GlassShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(t / 4);
      torusRef.current.rotation.y = Math.sin(t / 2);
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t / 1.5) * 0.1 - 1;
    }
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = t * 0.2;
      icosahedronRef.current.rotation.y = t * 0.3;
    }
    
    // Subtle parallax effect based on scroll
    if (groupRef.current) {
      const scrollY = window.scrollY;
      // Move objects slightly up as you scroll down
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        -scrollY * 0.002,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={torusRef} position={[2, 1, -2]}>
          <torusGeometry args={[1, 0.4, 32, 64]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.2}
            anisotropy={0.3}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.1}
            ior={1.5}
            color="#B89BEA"
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh ref={sphereRef} position={[-2.5, -1, 1]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.5}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.5}
            temporalDistortion={0.2}
            ior={1.4}
            color="#D8C8F8"
          />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={icosahedronRef} position={[1.5, -2, 0.5]}>
          <icosahedronGeometry args={[0.6, 0]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.3}
            ior={1.2}
            color="#ffffff"
          />
        </mesh>
      </Float>
    </group>
  );
}

export function GlobalScene() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          
          <GlassShapes />
          
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
