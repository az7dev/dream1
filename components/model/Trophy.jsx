/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Tropy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/model/Tropy.glb");
  const { actions } = useAnimations(animations, group);
  React.useEffect(() => {
    actions["TropyAction"].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.002"]}
          position={[0, 1.41, 0]}
          scale={[1.67, 1, 1.47]}
        />
        <mesh
          name="Logo_of_ICC_World_T20svg"
          castShadow
          receiveShadow
          geometry={nodes.Logo_of_ICC_World_T20svg.geometry}
          material={materials.Material}
          scale={18.69}
        />
        <mesh
          name="Tropy"
          castShadow
          receiveShadow
          geometry={nodes.Tropy.geometry}
          material={materials["Material.001"]}
        />
        <group
          name="Trophy-Tour_Poster_1920x1080-1-copy"
          position={[0.56, 9.25, -9.41]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={16.91}
        >
          <mesh
            name="Trophy-Tour_Poster_1920x1080-1-copy_1"
            castShadow
            receiveShadow
            geometry={nodes["Trophy-Tour_Poster_1920x1080-1-copy_1"].geometry}
            material={materials["Trophy-Tour_Poster_1920x1080-1-copy"]}
          />
          <mesh
            name="Trophy-Tour_Poster_1920x1080-1-copy_2"
            castShadow
            receiveShadow
            geometry={nodes["Trophy-Tour_Poster_1920x1080-1-copy_2"].geometry}
            material={materials["Material.009"]}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/Tropy2.glb");
