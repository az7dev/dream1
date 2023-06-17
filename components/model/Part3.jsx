/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Part3(props) {
  const { nodes, materials } = useGLTF("/assets/model/cricket_pull_shot.glb");
  return (
    <group {...props} dispose={null} scale={0.05}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .cricket_pullshot_0043_FBX_only_cricket_pullshot_0043_FBX_only_0
                .geometry
            }
            material={materials.cricket_pullshot_0043_FBX_only}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Legs_Legs_0001.geometry}
            material={materials.Legs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Legs_Legs_0002.geometry}
            material={materials.Legs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Legs_Legs_0.geometry}
            material={materials.Legs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Legs_Legs_0004.geometry}
            material={materials.Legs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Legs_Legs_0003.geometry}
            material={materials.Legs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Upper_body_Upper_body_0.geometry}
            material={materials.Upper_body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Upper_body_Upper_body_0001.geometry}
            material={materials.Upper_body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Upper_body_Upper_body_0002.geometry}
            material={materials.Upper_body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Upper_body_Upper_body_0004.geometry}
            material={materials.Upper_body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Upper_body_Upper_body_0003.geometry}
            material={materials.Upper_body}
          />
        </group>
      </group>
    </group>
  );
}
