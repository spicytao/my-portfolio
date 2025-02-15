// app/page.js
"use client";
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import * as THREE from 'three';

export default function Home() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 0, 1500);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current?.appendChild(renderer.domElement);

    const particleCount = 300000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = Math.pow(Math.random(), 0.7) * 1500;
      positions.set([
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      ], i * 3);
    }

    const particles = new THREE.BufferGeometry();
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ size: 0.5, color: 0xffffff, opacity: 0.6, transparent: true });
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    let mouseVelocity = 0;
    window.addEventListener('mousemove', (e) => {
      const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
      mouseVelocity = Math.min(speed * 0.02, 2);
      particleSystem.rotation.x += e.movementY * 0.0005;
      particleSystem.rotation.y += e.movementX * 0.0005;
    });

    function animate() {
      particleSystem.rotation.x += 0.0005 + mouseVelocity * 0.0002;
      particleSystem.rotation.y += 0.001 + mouseVelocity * 0.0004;
      particleSystem.rotation.z += 0.0003 + mouseVelocity * 0.0001;
      material.size = 0.5 + mouseVelocity * 0.2;
      material.opacity = 0.6 + mouseVelocity * 0.1;
      mouseVelocity *= 0.95;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <Head>
        <title>shengtao.space | Home</title>
        <meta name="description" content="Driven by Everything in Vagary with Mouse Interaction" />
      </Head>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh', position: 'fixed', backgroundColor: '#000' }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
        textAlign: 'center',
        zIndex: 10,
      }}>
        Shengtao.Space
        <p style={{ fontSize: '1rem', opacity: 0.8 }}>Driven by Everything in Vagary</p>
      </div>
    </>
  );
}