import React, { useEffect, useRef } from 'react';
import * as THREE from "three";


function ThreeScene() {
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);


    //Crear un cubo
    const geometry = new THREE.BoxGeometry(0.5, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -3
    scene.add(cube);

    //Crear un cubo
    const geometryc2 = new THREE.BoxGeometry(1, 1, 1);
    const materialc2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cube2 = new THREE.Mesh(geometryc2, materialc2);
    cube2.position.x = 3;
    scene.add(cube2);

    //Crear un cilindro
    const geometry3 = new THREE.CylinderGeometry(1, 1, 4, 20);
    const material3 = new THREE.MeshBasicMaterial({ color: 0xccffcc });
    const cylinder = new THREE.Mesh(geometry3, material3); scene.add(cylinder);
    scene.add(cylinder);

    camera.position.z = 5;
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;


      time += 0.05;

      // Aplicar movimiento de arriba a abajo usando Math.sin
      const amplitude = 2; // Amplitud del movimiento
      cube2.position.y = Math.sin(time) * amplitude;
      renderer.render(scene, camera);
    }

    animate();

    const renderScene = () => {
      renderer.render(scene, camera);
    }

    const handleResize = () =>{
        camera.aspect = window.innerWidth /window.innerHeight;
        camera.projectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    //Llamar a la escena
    renderScene();
    return () => {
    
        window.removeEventListener('resize', handleResize);

      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="App">
      {/*Div renderizador de threejs*/}
      <div ref={mountRef} style={{ width: "100vw", height: "90vh" }}></div>
    </div>
  )
}

export default ThreeScene
