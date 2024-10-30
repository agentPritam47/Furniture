import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import {
  Billboard,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";

const Scene = ({ click }) => {
  return (
    <Canvas>
      <Experience click={click} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
        <ContactShadows
          position-y={-1.5}
          blur={1.5}
          opacity={0.55}
          scale={10}
        />
      <Environment preset="forest" background backgroundBlurriness={100} />
    </Canvas>
  );
};

export default Scene;
