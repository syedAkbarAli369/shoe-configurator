

import { useRef, useState, useEffect } from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import state from "../utils/state";

const Shoe = () => {

  const ref = useRef();
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('shoe-draco.glb')
  const [hovered, setHovered] = useState(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20);
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        console.log('Hovered: ', e.object.material.name);
        setHovered(e.object.material.name)
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 && setHovered(null)
      }}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => {
        e.stopPropagation();
        console.log('Clicked: ', e.object.material.name);
        state.current = e.object.material.name;
      }}

    >
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />

    </group>
  )
}

export default Shoe