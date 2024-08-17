
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture , OrbitControls, DragControls} from '@react-three/drei'
import Model from './model'
import { easing } from 'maath'
import "../../styles/carousel.css"
import { useTranslation } from 'react-i18next'


import './util'

const isMobile = () => {
  const minWidth = 768; // Minimum width for desktop devices
  return window.innerWidth < minWidth ;
}

const fieldofView = isMobile ? 15 : 10;






export default function Carousel(){

  const {t} = useTranslation();

  if (isMobile()){

    return(
      <div className="carousel-wrapper"> 
        <div className="carousel-title"><h1>{t("transformations-title")}</h1></div>

      <Canvas camera={{ position: [0, 0, 10], fov: fieldofView }} style={{height: '80vh'}} frameloop="demand">
    <color attach="background" args={["black"]} />
    <fog attach="fog" args={['#ff0000', 8.5, 12]} />
    <ScrollControls pages={4} horizontal={true} style={{ scrollbarWidth:'none' }} infinite >
      <Rig>
        <Main />
       <Model/>
      </Rig>
    </ScrollControls>
  </Canvas>
  </div> 


    )
  }
  else{
  
  return(
  <div className="carousel-wrapper"> 
  <div className="carousel-title"><h1>{t("transformations-title")}</h1></div>
  <Canvas camera={{ position: [0, 0, 10], fov: fieldofView }} style={{height: '80vh'}}>
    <color attach="background" args={["black"]} />
    <fog attach="fog" args={['#ff0000', 8.5, 12]} />
    <OrbitControls enablePan={false} enableRotate={true} enableZoom={false}  minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2}/>
        <Main />
        <Model/>
  </Canvas>
  </div> )
  }
};


function Main({ radius = 2.4, count = 12 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img${i+1}_.jpg`}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

function Card({ url, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const pointerOver = (e) => (e.stopPropagation() , hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.5 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
  })
  return (
    <Image ref={ref} url={url} transparent side={THREE.BackSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
      <bentPlaneGeometry args={[0.1, 1.333, 1, 20, 20]} />
    </Image>
  )
}


function Rig(props) {
  const ref = useRef()
  const scroll = useScroll()
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
    state.events.update() // Raycasts every frame rather than on pointer-move
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
    state.camera.lookAt(0, 0, 0) // Look at center
  })
  return <group ref={ref} {...props} />
}
