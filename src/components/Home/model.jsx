import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model() {
    const gltf = useLoader(GLTFLoader, 'scene.gltf')
    return <primitive object={gltf.scene} scale={4} rotation={[1.55,0,0]} />
  }