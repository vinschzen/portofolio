import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture } from '@react-three/drei'
import { easing } from 'maath'
import './util' // assumes you registered bentPlane & meshSineMaterial here

import { styles } from '../styles/layout'

export default function HeroCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 100], fov: 15 }} style={styles.heroWrap}>
            <fog args={['rgba(38, 0, 255, 1)', 8.5, 12]} />
            <ScrollControls pages={4} infinite>
                <Rig rotation={[0.20, 0, 0.20]}>
                    <Carousel />
                </Rig>
                <Banner position={[0, -0.15, 0]} />
            </ScrollControls>

            <Environment preset="city" background blur={0.5} />
        </Canvas>
    )
}

function Rig(props: any) {
    const ref = useRef<THREE.Group>(null!)
    const scroll = useScroll()

    useFrame((state, delta) => {
        // Rotate carousel based on scroll
        ref.current.rotation.y = -scroll.offset * Math.PI * 2

        // Optional chaining for newer versions
        state.events.update?.()

        // Camera follow
        easing.damp3(
            state.camera.position,
            new THREE.Vector3(-state.pointer.x * 2, state.pointer.y + 1.5, 10),
            0.3,
            delta
        )
        state.camera.lookAt(-0.85, 0, 0.5)
    })

    return <group ref={ref} {...props} />
}

function Carousel({ radius = 1.4, count = 8 }) {
    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <Card
                    key={i}
                    url={`/screenshot.png`}
                    position={[
                        Math.sin((i / count) * Math.PI * 2) * radius,
                        0,
                        Math.cos((i / count) * Math.PI * 2) * radius
                    ]}
                    rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
                />
            ))}
        </>
    )
}

function Card({ url, ...props }: any) {
    const ref = useRef<any>(null)
    const [hovered, hover] = useState(false)
    const [selected, select] = useState(false)

    const pointerOver = (e: any) => {
        e.stopPropagation()
        hover(true)
    }
    const pointerOut = () => hover(false)

    useFrame((_, delta) => {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
        easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
        easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
    })

    const click = () => select(false)

    return (
        <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
            onClick={click}
            {...props}
        >
            <bentPlaneGeometry args={[0.1, 1, 0.85, 20, 20]} />
        </Image>
    )
}

function Banner(props: any) {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useTexture('/banner.png')

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    const scroll = useScroll()

    useFrame((state, delta) => {
        ref.current.material.time.value += Math.abs(scroll.delta) * 4
        ref.current.material.map.offset.x += delta / 2
    })

    return (
        <mesh ref={ref} {...props}>
            <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
            {/* Registered custom material */}
            <meshSineMaterial
                map={texture}
                map-anisotropy={16}
                map-repeat={[30, 1]}
                side={THREE.DoubleSide}
                toneMapped={false}
            />
        </mesh>
    )
}
