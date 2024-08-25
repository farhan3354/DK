// ThreeBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set the background to be transparent
    mountRef.current.appendChild(renderer.domElement);

    // Gold Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const goldTexture = textureLoader.load('path_to_your_gold_texture.jpg', (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2); // Adjust to your needs
    });

    // Create multiple planes with the gold texture
    const planeGeometry = new THREE.PlaneGeometry(20, 20);
    const planeMaterial = new THREE.MeshBasicMaterial({ map: goldTexture, transparent: true });
    const planeCount = 5;
    const planes = [];

    for (let i = 0; i < planeCount; i++) {
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.position.z = -10 - i * 1.5; // Stack planes along the z-axis
      scene.add(plane);
      planes.push(plane);
    }

    // Animation
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Move the planes to create a flow effect
      planes.forEach((plane, index) => {
        plane.position.y += 0.02 * (index + 1); // Speed varies for depth effect
        if (plane.position.y > 10) plane.position.y = -10; // Reset position
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current.removeChild(renderer.domElement);
      scene.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ThreeBackground;
