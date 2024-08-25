import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Card from './Card'; // Import the Card component
import './Tree.css'; // You will need to create this CSS file for layout styling

const CirclesScene = () => {
  const mountRef = useRef(null);
  const [cards, setCards] = React.useState(Array(8).fill('Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholde'));

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

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);

      // Apply rotation to all circles
      circles.forEach((circle, index) => {
        circle.rotation.y += 0.01;
        circle.position.y = Math.sin(Date.now() * 0.001 + index) * 2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const handleButtonClick = (index) => {
    alert(`Button ${index + 1} clicked!`);
  };

  return (
    <div className="scene-container">
      <div className="three-canvas" ref={mountRef} />
      <div className="cards-container">
        {cards.map((text, index) => (
          <Card key={index} text={text} onClick={() => handleButtonClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default CirclesScene;
