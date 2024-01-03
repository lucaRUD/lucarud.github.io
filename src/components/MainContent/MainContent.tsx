import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader, useThree} from '@react-three/fiber';
import { Mesh, TextureLoader, BoxGeometry,SphereGeometry, MeshBasicMaterial, BackSide } from 'three';
import camiTEX from './one.jpg';
import { getTexture } from '../Intro/Intro.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import './MainContent.css'
import { OrbitControls } from '@react-three/drei';

//Import dome Tex

import smallTex from './Nebula_small.jpg'

const MainContent = ({isActive}) => {

  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();


  // function Cube() {
  //   const { gl, scene, camera} = useThree();
  //   const meshRef = useRef(null);
  //   console.log('gl:', gl); // Check the value of gl
  //   console.log('scene:', scene); // Check the value of scene
  
  //   const hdrEquirect = useLoader(RGBELoader, domTex);
  //   console.log('hdrEquirect:', hdrEquirect); // Check the value of hdrEquirect
  //   const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, { format: THREE.RGBAFormat });
  //   const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
  //   scene.add(cubeCamera);
  
  //   // Don't render the cube until all textures are loaded
  //   if (!hdrEquirect) return null;
  
  //   const material = new THREE.MeshStandardMaterial({
  //     color: 'white', // set color to white
  //     envMap: cubeRenderTarget.texture,
  //     metalness: 0.3,
  //     // roughness: 0.05,
  //   });

    
    
  
  //   const onMouseMove = (event) => {
  //     pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  //     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
  //     raycaster.setFromCamera(pointer, camera);
    
      
  //     if (meshRef.current) {
  //       const intersects = raycaster.intersectObject(meshRef.current);
    
  //       if (intersects.length > 0) {
  //         const object = intersects[0].object;
  //         if (object instanceof THREE.Mesh && object.material && object.material.color) {
  //           object.material.color.set('red'); // change color to red
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener('mousemove', onMouseMove);

    
  
  //   return (
  //     <mesh ref={meshRef}>
  //       <boxGeometry args={[2,2,2]} />
  //       <primitive object={material} attach="material" />
  //     </mesh>
  //   );
  // }


  function Cube() {
    const { gl, scene, camera } = useThree();
    const meshRef = useRef(null);
    const texture = getTexture();
  
    const hdrEquirect = useLoader(RGBELoader, texture);
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, { format: THREE.RGBAFormat });
    const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
    scene.add(cubeCamera);
  
    const onMouseClick = (event) => {
      event.preventDefault();
  
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
      raycaster.setFromCamera(pointer, camera);
  
      if (meshRef.current) {
        const intersects = raycaster.intersectObject(meshRef.current);
  
        if (intersects.length > 0) {
          const intersect = intersects[0];
          if (intersect && intersect.face) {
            const face = intersect.face;
  
            // Check which face was clicked
            if (face.normal.x === 1) {
              console.log('Right face clicked');
            } else if (face.normal.x === -1) {
              console.log('Left face clicked');
            } else if (face.normal.y === 1) {
              console.log('Top face clicked');
            } else if (face.normal.y === -1) {
              console.log('Bottom face clicked');
            } else if (face.normal.z === 1) {
              console.log('Front face clicked');
            } else if (face.normal.z === -1) {
              console.log('Back face clicked');
            }
          }
        }
      }
    };
  
    useEffect(() => {
      // Add event listener for click events
      document.addEventListener('click', onMouseClick);
  
      // Clean up event listener when the component unmounts
      return () => {
        document.removeEventListener('click', onMouseClick);
      };
    }, [camera, meshRef]);  // Add dependencies here
  
    // Don't render the cube until all textures are loaded
    if (!hdrEquirect) return null;
  
    const material = new THREE.MeshStandardMaterial({
      color: 'white', // set color to white
      envMap: cubeRenderTarget.texture,
      metalness: 0.3,
      // roughness: 0.05,
    });
  
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[2,2,2]} />
        <primitive object={material} attach="material" />
      </mesh>
    );
  }
  
  
  

  function Skydome() {
    const { gl } = useThree();
    gl.toneMapping = THREE.LinearToneMapping;
  
    const texture = getTexture();
  
    // Check if the texture has been loaded
    if (!texture) return null;
  
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
    });
  
    return (
      <mesh geometry={geometry} material={material} />
    );
  }


 

   return (
     <div className={`main-content ${isActive ? 'active' : 'inactive'}`}>
      <Canvas flat camera={{ position: [0, 0, 5] }} >
          {/* <Skybox2/> */}
          <Skydome/>
          <ambientLight intensity={1}/>
          <Cube />
          <OrbitControls enablePan={false} minDistance={3} maxDistance={12} />
      </Canvas>
     </div>
   );
 };

 export default MainContent;


