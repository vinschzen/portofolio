import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, createPortal, useThree } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture, Html } from '@react-three/drei'
import { easing } from 'maath'
import './util' // assumes you registered bentPlane & meshSineMaterial here

import { styles } from '../styles/layout'

export default function HeroCanvas({ page }: { page?: string }) {
    const ref = useRef<THREE.Group>(null!)
    const [selectedCard, setSelectedCard] = useState(null)

    const isSelected = selectedCard !== null

    // useFrame((state, delta) => {
    // easing.damp3(
    //     state.camera.position,
    //     focused
    //         ? new THREE.Vector3(0, 0, 10)
    //         : new THREE.Vector3(-state.pointer.x * 2, state.pointer.y + 1.5, 10),
    //     0.3,
    //     delta
    // )
    // })


    return (
        <Canvas camera={{ position: [0, 0, 0], fov: 15 }} style={styles.heroWrap}>
            <fog args={['rgba(38, 0, 255, 1)', 8.5, 12]} />

            <ScrollControls pages={4} damping={1} enabled={!selectedCard}>
                <Rig page={page} rotation={[0.20, 0, 0.20]} selectedCard={selectedCard}>
                    <Carousel setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
                </Rig>
                <Banner position={[0, -0.15, 0]} />
            </ScrollControls>

            <Environment preset="city" background blur={0.5} />
        </Canvas>
    )
}

function Rig({ page, selectedCard, children, ...props }: { page: string, selectedCard: any; children: any;[key: string]: any }) {
    const ref = useRef<THREE.Group>(null!)
    const scroll = useScroll()

    const isSelected = selectedCard !== null

    useFrame((state, delta) => {
        if (!isSelected)
            ref.current.rotation.y = -scroll.offset * Math.PI * 2

        // Optional chaining for newer versions
        state.events.update?.()

        // Camera follow
        if (page == 'home') {
            easing.damp3(
                state.camera.position,
                new THREE.Vector3(-state.pointer.x * 2, state.pointer.y + 1.5, 10),
                0.3,
                delta
            )

            state.camera.lookAt(
                -0.85,
                0,
                0.5
            )

        } else {
            easing.damp3(
                state.camera.position,
                new THREE.Vector3(0, 15, 10),
                0.3,
                delta
            )

            easing.dampE(
                state.camera.rotation,
                new THREE.Euler(-0.15, -0.02, -0.003),
                0.3,
                delta
            )
        }



    })

    return <group ref={ref} {...props}>{children}</group>
}

function Carousel({ radius = 1.4, count = 8, setSelectedCard, selectedCard }: any) {
    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <Card
                    key={i}
                    index={i}
                    url={`/screenshot.png`}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
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

function Card({ url, setSelectedCard, selectedCard, index, ...props }: any) {
    const ref = useRef<any>(null)
    const { scene } = useThree()
    const [hovered, hover] = useState(false)

    const isSelected = selectedCard?.index === index

    useFrame((_, delta) => {

        if (isSelected) {
            ref.current.renderOrder = 999
            ref.current.material.depthTest = false

            easing.damp3(ref.current.position, [0, 0.2, 0], 0.25, delta)
            easing.dampE(ref.current.rotation, [-0.2, 0, -0.2], 0.25, delta)
            easing.damp3(ref.current.scale, [3, 3, 3], 0.25, delta)
        }
        else {
            ref.current.renderOrder = 0
            ref.current.material.depthTest = true

            easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.18, delta)
            easing.damp(ref.current.material, "radius", hovered ? 0.25 : 0.1, 0.2, delta)
            easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta)

            easing.damp3(ref.current.position, props.position, 0.25, delta)
            easing.dampE(ref.current.rotation, props.rotation, 0.25, delta)
        }
    })

    const card = (
        <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={(e) => { e.stopPropagation(); hover(true) }}
            onPointerOut={() => hover(false)}
            onClick={() => setSelectedCard(index)}
            {...props}
        >
            <bentPlaneGeometry args={[0.1, 1, 0.85, 20, 20]} />
        </Image>
    )

    return card
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
