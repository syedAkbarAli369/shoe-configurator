

import { Canvas } from '@react-three/fiber'
import Picker from './components/Picker'
import Shoe from './components/Shoe'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Button from './components/Button'

const App = () => {
  return (
    <div className='relative flex items-center justify-center  h-screen'>
      <Header />
      <Hero />
      <Canvas
        id='shoe-canvas'
        gl={{ preserveDrawingBuffer: true }}
        shadows
        camera={{ position: [0, 0, 4], fov: 45 }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Shoe />
        <Environment preset='city' />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.25}
          scale={10}
          blur={1.5}
          far={0.9}
        />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
      <Picker />
      <Button />
      <Footer />
    </div>
  )
}

export default App