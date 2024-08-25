// ThreeBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

// Custom shader material
const GoldFlowMaterial = shaderMaterial(
  { uTime: 0, uTexture: null },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      uv.y += uTime * 0.05; // Control flow speed here
      vec4 color = texture2D(uTexture, uv);
      gl_FragColor = color;
    }
  `
);

// Register the material in Drei's extend
extend({ GoldFlowMaterial });

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

    // Load the gold texture
    const textureLoader = new THREE.TextureLoader();
    const goldTexture = textureLoader.load('path_to_your_gold_texture.jpg');

    // Create the gold flow material
    const goldFlowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: goldTexture }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform sampler2D uTexture;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          uv.y += uTime * 0.05; // Control flow speed here
          vec4 color = texture2D(uTexture, uv);
          gl_FragColor = color;
        }
      `,
      transparent: true,
    });

    // Plane geometry
    const planeGeometry = new THREE.PlaneGeometry(10, 10, 1, 1);
    const plane = new THREE.Mesh(planeGeometry, goldFlowMaterial);
    scene.add(plane);

    // Animation
    camera.position.z = 5;

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      // Update uniform time
      goldFlowMaterial.uniforms.uTime.value = clock.getElapsedTime();

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
