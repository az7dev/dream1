/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function IndiaFan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/model/india-cricket.glb"
  );
  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    actions["GLTF_created_0Action"].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_68">
          <group name="GLTF_created_0">
            <group name="Wolf3D_Avatar_67" />
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              name="Object_7"
              geometry={nodes.Object_7.geometry}
              material={materials.Wolf3D_Avatar}
              skeleton={nodes.Object_7.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/india-cricket.glb");
