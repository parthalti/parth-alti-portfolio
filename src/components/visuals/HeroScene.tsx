import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

const ORBIT_NODES = 8;

function Core() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);
  const pointer = useThree((s) => s.pointer);
  const target = useRef({ x: 0, y: 0 });

  const nodePositions = useMemo(() => {
    return new Array(ORBIT_NODES).fill(0).map((_, i) => {
      const angle = (i / ORBIT_NODES) * Math.PI * 2;
      const radius = 2.05;
      return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.55, Math.sin(angle * 2) * 0.6);
    });
  }, []);

  useFrame((_, delta) => {
    // Ease the group's rotation toward the pointer position for a subtle
    // mouse-follow feel, layered on top of a slow constant self-rotation.
    target.current.x += (pointer.y * 0.35 - target.current.x) * Math.min(1, delta * 2.2);
    target.current.y += (pointer.x * 0.5 - target.current.y) * Math.min(1, delta * 2.2);

    if (group.current) {
      group.current.rotation.x = target.current.x;
      group.current.rotation.y += delta * 0.12 + (target.current.y - group.current.rotation.y) * 0.02;
    }
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.22;
      wire.current.rotation.x += delta * 0.08;
    }
    if (shell.current) {
      shell.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Outer glass shell — echoes the original portrait's outer rings */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.65, 1]} />
        <meshPhysicalMaterial
          color="#7621B0"
          roughness={0.15}
          metalness={0.1}
          transmission={0.9}
          thickness={1.2}
          transparent
          opacity={0.55}
          emissive="#B600A8"
          emissiveIntensity={0.12}
          ior={1.3}
        />
      </mesh>

      {/* Inner wireframe core — echoes the original circuit lines */}
      <mesh ref={wire}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#BBCCD7" wireframe transparent opacity={0.5} />
      </mesh>

      {/* Orbiting nodes — echoes the eight dots from the original SVG portrait */}
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#BE4C00" : "#BBCCD7"}
            emissive={i % 2 === 0 ? "#BE4C00" : "#646973"}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

interface HeroSceneProps {
  className?: string;
}

export default function HeroScene({ className = "" }: HeroSceneProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 42 }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 3, 4]} intensity={22} color="#B600A8" />
          <pointLight position={[-4, -2, -3]} intensity={16} color="#BE4C00" />
          <pointLight position={[0, 4, 2]} intensity={10} color="#BBCCD7" />
          <Core />
          <Sparkles count={70} scale={[7, 5, 4]} size={1.6} speed={0.25} color="#BBCCD7" opacity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
