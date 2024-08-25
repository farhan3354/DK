// GoldFlowBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GoldFlowBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Your material and geometry setup here
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
      },
      vertexShader: `...`, // Vertex shader code
      fragmentShader: `...`, // Fragment shader code for gold flow
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      material.uniforms.time.value += 0.05; // Update time for animation
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default GoldFlowBackground;
