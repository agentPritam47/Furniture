import React, { useState } from "react";
import { Chair1 } from "./Chair1";
import { Chair2 } from "./Chair2";
import { Chair3 } from "./Chair3";
import { Chair4 } from "./Chair4";
import { Billboard, Center, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Chair5 } from "./Chair5";

const Experience = ({ click }) => {
  const wood = useTexture("./wood.jpg");
  wood.wrapS = THREE.RepeatWrapping;
  wood.wrapT = THREE.RepeatWrapping;
  wood.repeat.set(50, 50);
  let s = 1.1;
  if (window.innerWidth < 1300) {
    s = .7;
  } else {
    s = 1.1;
  }

  return (
    <>
      <group scale={s}>
        {click === "chair1" && (
          <Center>
            <Chair1 scale={0.005} rotation-x={-Math.PI / 2} />
          </Center>
        )}
        {click === "chair2" && <Chair2 position-y={-1} />}
        {click === "chair3" && (
          <group position-y={-0.5}>
            <Center>
              <Chair3
                scale={0.002}
                rotation-x={-Math.PI / 2}
                position-y={0.7}
              />
            </Center>
          </group>
        )}
        {click === "chair4" && (
          <group position-y={-0.5}>
            <Center>
              <Chair4
                scale={0.004}
                rotation-x={-Math.PI / 2}
                position-y={-1.5}
              />
            </Center>
          </group>
        )}
        {click === "chair5" && (
          <group position-y={.5}>
            <Center>
              <Chair5 scale={0.004} rotation-x={-Math.PI / 2} rotation-z={-1.57} />
            </Center>
          </group>
        )}
      </group>

      <Billboard>
        <mesh
          receiveShadow
          scale={100}
          rotation-x={-Math.PI / 2}
          position-y={-1.91}
        >
          <planeGeometry args={[10, 10]} />
          <meshPhysicalMaterial roughness={0.6} metalness={1} map={wood} />
        </mesh>
      </Billboard>
    </>
  );
};

export default Experience;
