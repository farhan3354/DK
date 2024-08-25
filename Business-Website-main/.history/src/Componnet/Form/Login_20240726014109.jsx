import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CirclesScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create circles
    const numCircles = 8;
    const radius = 5;
    const circles = [];
    const geometry = new THREE.CircleGeometry(0.5, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    for (let i = 0; i < numCircles; i++) {
      const angle = (i / numCircles) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      const circle = new THREE.Mesh(geometry, material);
      circle.position.set(x, 0, z);
      circles.push(circle);
      scene.add(circle);
    }

    // Create a rounded rectangle card
    const createRoundedRectangle = (width, height, radius, segments) => {
      const shape = new THREE.Shape();
      shape.moveTo(-width / 2 + radius, -height / 2);
      shape.lineTo(width / 2 - radius, -height / 2);
      shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius);
      shape.lineTo(width / 2, height / 2 - radius);
      shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2);
      shape.lineTo(-width / 2 + radius, height / 2);
      shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius);
      shape.lineTo(-width / 2, -height / 2 + radius);
      shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2);
      return new THREE.ShapeGeometry(shape, segments);
    };

    const cardGeometry = createRoundedRectangle(4, 2, 0.5, 16);
    const cardMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const card = new THREE.Mesh(cardGeometry, cardMaterial);
    card.position.set(0, 0, -10); // Position the card in front of the camera
    scene.add(card);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);

      // Apply rotation to all circles
      circles.forEach((circle, index) => {
        circle.rotation.y += 0.01;
        circle.position.y = Math.sin(Date.now() * 0.001 + index) * 2;
      });

      // Optionally animate the card (e.g., rotate it)
      card.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', zIndex: 1 }}>
        <h1>Your Details</h1>
        <p>Here you can add your text details or information.</p>
        <p>Feel free to customize this section to include anything you like!</p>
      </div>
    </div>
  );
};

export default CirclesScene;
