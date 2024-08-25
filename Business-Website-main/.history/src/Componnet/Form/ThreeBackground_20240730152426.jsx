// ThreeBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set to transparent
    mountRef.current.appendChild(renderer.domElement);

    // Gold Particles
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffd700, size: 0.1 });
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the particle system for a floating effect
      particleSystem.rotation.y += 0.001;

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
