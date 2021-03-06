/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame, useResource } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/models/room.glb')

  const [cubeRef, cube] = useResource()
  const [coneRef, cone] = useResource()

  useFrame(() => {
    cube.rotation.y += 0.01
    cone.rotation.z += 0.04
    cone.rotation.x += 0.02
  })

  return (
    <group ref={group} {...props} dispose={null} position={[0, 0, -20]}>
      <scene name="Scene">
        <group name="Light" position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]} />
        <group name="Camera" position={[7.36, 4.96, 6.93]} rotation={[1.24, 0.33, -0.76]} />
        <mesh
          ref={cubeRef}
          geometry={nodes.Cube.geometry}
          name="Cube"
          position={[0, 5.17, 0.06]}
          scale={[5.14, 5.14, 5.14]}
        >
          <meshLambertMaterial
            attach="material"
            color={0xffff00}
            depthTest={false}
            depthWrite={false}
            emissive={0x0}
            reflectivity={1}
            refractionRatio={1}
          />
        </mesh>
        <mesh
          ref={coneRef} 
          receiveShadow
          position={[0, -10, 0]}
        >
          <coneGeometry attach="geometry" args={[8, 14, 24, 24]} />
          <meshLambertMaterial
            attach="material"
            color={0xff0000}
            depthTest={false}
            depthWrite={false}
            emissive={0x0}
            reflectivity={1}
            refractionRatio={1}
            transparent
          />
        </mesh>
      </scene>
    </group>
  )
}