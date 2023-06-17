/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF, Html } from "@react-three/drei";
import glb from "../../assets/model/meridian.glb";
import "../../App.css";

export function Meridian(props) {
  const { nodes, materials } = useGLTF(glb);
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane003"
        geometry={nodes.Plane003.geometry}
        material={materials.Material}
        position={[-37.61, 0.26, -19.41]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[122.38, 246.97, 102.15]}
      />
      <mesh
        name="Cube003"
        geometry={nodes.Cube003.geometry}
        material={materials["Material.018"]}
        position={[-0.05, 2.44, 12.01]}
        scale={0.26}
      />
      <mesh
        name="Plane004"
        geometry={nodes.Plane004.geometry}
        material={materials["Material.019"]}
        position={[-31.6, 19.18, -58.39]}
        rotation={[0.6, -0.52, 0.33]}
        scale={[14.23, 4.85, 5.77]}
      />
      <mesh
        name="Cube001"
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[29.46, 0.42, 11.23]}
        rotation={[0, -1.57, 0]}
        scale={[30.66, 0.34, 9.72]}
      />
      <mesh
        name="tree342"
        geometry={nodes.tree342.geometry}
        material={materials["Material.003"]}
        position={[-72.95, 0.06, 56.68]}
        rotation={[0, -0.25, 0]}
        scale={[0.2, 0.84, 0.2]}
      />
      <group
        name="coconut_tree_2001"
        position={[-55.4, 0.53, -9.09]}
        rotation={[0.01, -0.16, 0.57]}
        scale={[0.27, 0.01, 0.36]}
      >
        <mesh
          name="Cylinder339"
          geometry={nodes.Cylinder339.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Cylinder339_1"
          geometry={nodes.Cylinder339_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Cylinder339_2"
          geometry={nodes.Cylinder339_2.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          name="Cylinder339_3"
          geometry={nodes.Cylinder339_3.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        name="Plane006"
        geometry={nodes.Plane006.geometry}
        material={materials["Material.005"]}
        position={[-28.15, 2.39, -62.33]}
        rotation={[Math.PI, -0.98, Math.PI]}
        scale={[10.66, 10.21, 11.18]}
      />
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials["Material.011"]}
        position={[-64.94, 0.27, 7.06]}
        rotation={[Math.PI, -1.47, Math.PI]}
        scale={[0.08, 0.16, 0.16]}
      />
      <mesh
        name="Cube002"
        geometry={nodes.Cube002.geometry}
        material={materials["Material.011"]}
        position={[-28.71, 0.27, 5.93]}
        rotation={[Math.PI, -1.07, Math.PI]}
        scale={[0.08, 0.16, 0.16]}
      />
      <mesh
        name="screen"
        geometry={nodes.screen.geometry}
        material={materials["Material.018"]}
        position={[0.02, 2.48, -3.39]}
        scale={0.26}
      >
        <Html
          className="content"
          // rotation-x={-Math.PI / 2}
          position={[0, 0, 0.225]}
          transform
          occlude
        >
          <div className="wrapper">
            <iframe
              width="1040"
              height="450"
              src="https://www.youtube.com/embed/X0-0aikATIs?rel=0&autoplay=1&loop=1&modestbranding=1&fs=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload(glb);