import { useEffect, useRef } from 'react';
import Head from 'next/head';
import * as THREE from 'three';

export default function Home() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return; // 确保 ref 存在
  
    const mount = mountRef.current; // 存储 ref 的当前值
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 0, 1500);
  
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mount.appendChild(renderer.domElement); // 使用局部变量

    // 添加粒子
    const particleCount = 300000;
    const positions = new Float32Array(particleCount * 3);
  
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = Math.pow(Math.random(), 1.5) * 1500;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.set([x, y, z], i * 3);
    }
  
    const particles = new THREE.BufferGeometry();
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
    const material = new THREE.PointsMaterial({ size: 0.5, color: 0xffffff, opacity: 0.6, transparent: true });
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    // 动画函数
    function animate() {
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.z += 0.0003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  
    // ✅ 修正 Cleanup 逻辑，避免 `mountRef.current` 变更时错误
    return () => {
      if (mount) { // 只在 mount 存在时执行
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>shengtao.space | Home</title>
        <meta name="description" content="Welcome to Shengtao's space - Interactive Vortex Animation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh', position: 'fixed', backgroundColor: '#000' }} />
    </>
  );
}
