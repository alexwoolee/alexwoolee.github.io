import { Suspense } from 'react';
import '../styles/threejs.css'
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import Loading from "../components/ui/Loading.jsx";
import Cafe from "../models/Cafe";
import { OrbitControls } from '@react-three/drei';

const ThreeJS = () => {
  return (
    <div className="threejs-container">
      {/* All 3d objects and lights will be rendered here */}
      <Canvas 
        className="threejs-canvas"
        camera={{ position: [3, 3, 3], fov: 75, near: 0.1, far: 1000 }} 
      >
        {/* Render the loading screen, lets you define a fallback to a component */}
        <Suspense fallback={<Loading />}>
          {/*
            <spotLight/>
            <hemisphereLight/> 
          */}
          <OrbitControls position={[6, 6, 6]} autoRotate={true} autoRotateSpeed={10}/>
          <directionalLight isDirectionalLight={true} />
          <pointLight position={[6, 7, 6]} distance={0} decay={2} color={"blue"} intensity={100}/>
          <ambientLight intensity={10}/>

          <mesh>  
            <boxGeometry />
            <meshStandardMaterial color={"red"}/>
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeJS

