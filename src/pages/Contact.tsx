import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { useTexture } from '@react-three/drei'
import React from 'react'

// Example logo items (replace with your own)
const logoTextures = [
  '/logos/github.png',
  '/logos/linkedin.png',
  '/logos/twitter.png',
]

function LogoBox({ textureUrl }: { textureUrl: string }) {
  const texture = useTexture(textureUrl)
  return (
    <RigidBody colliders="cuboid" restitution={0.4} friction={0.8}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </RigidBody>
  )
}

const Contact: React.FC = () => (
  <section className="w-full h-screen flex flex-col items-center justify-center">
    <h2 className="text-4xl mb-4">Contact</h2>
    <p className="mb-8">You can reach me at: <strong>vinshentwianata@gmail.com</strong></p>

    <div>
      {/* <Canvas shadows camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} castShadow />

        <Physics gravity={[0, -9.8, 0]}>
          {logoTextures.map((t, i) => (
            <LogoBox key={i} textureUrl={t} />
          ))}

          <RigidBody type="fixed">
            <mesh receiveShadow>
              <boxGeometry args={[20, 1, 20]} />
              <meshStandardMaterial color="#222" />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas> */}
    </div>
  </section>
)

export default Contact