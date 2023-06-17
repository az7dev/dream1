import React from "react";
import { useTexture } from "@react-three/drei";

export default function ImageTex(props) {
  const texture = useTexture(
    "//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Dream11_Logo_2023.png/220px-Dream11_Logo_2023.png"
  );

  return (
    <mesh {...props}>
      <planeGeometry args={[5, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
