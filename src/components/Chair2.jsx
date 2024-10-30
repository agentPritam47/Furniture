import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair2(props) {
  const { nodes, materials } = useGLTF('/design_chair.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/design_chair.glb')
