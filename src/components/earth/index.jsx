'use client';
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useScroll,useSpring } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d';

export default function earth() {

    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    /* Used for smooth rotation if you're not using Lenis Scroll */
    const smoothRotation = useSpring(scrollYProgress, {
    damping: 20
    });

const [color, normal, aoMap] = useLoader(TextureLoader, [
    '/assets/color.jpg',
    '/assets/normal.png',
    '/assets/occlusion.jpg'
])

    return (
        <Canvas ref={scene} className='bg-black width w-full'>
            {/* <Environment preset='warehouse'/> */}
            {/* <pointLight intensity={1} position={[10,10,10]}/> */}
            <ambientLight intensity={0.1} />
            <directionalLight intensity={2} position={[1, 0, -.25]} />
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]}/>
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
            </motion.mesh>
            {/* <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} enableZoom={false} enableDamping object={motion.mesh}/> */}
        </Canvas>
    )
}
