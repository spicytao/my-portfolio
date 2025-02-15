"use client";
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import * as THREE from 'three';

export default function Home() {
  const mountRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("default");

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 0, 1500);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    // 创建粒子
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
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ size: 0.3, color: 0xffffff, opacity: 0.6, transparent: true });
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    let mouseVelocity = 0;
    
    // 监听鼠标移动，改变光标
    let lastMoveTime = Date.now();
    window.addEventListener("mousemove", (e) => {
      const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
      mouseVelocity = Math.min(speed * 0.02, 2);
      particleSystem.rotation.x += e.movementY * 0.0005;
      particleSystem.rotation.y += e.movementX * 0.0005;
      setCursorStyle("pointer"); // 移动时变成可点击的光标
      lastMoveTime = Date.now();
    });

    // 检测鼠标是否静止
    const checkMouseIdle = setInterval(() => {
      if (Date.now() - lastMoveTime > 1000) {
        setCursorStyle("default"); // 鼠标静止时恢复默认
      }
    }, 500);

    // 监听鼠标点击事件，触发过渡动画
    window.addEventListener("mousedown", (e) => {
      if (e.button === 0) {
        setIsTransitioning(true);
        setCursorStyle("default"); // 过渡时恢复默认光标
      }
    });

    function animate() {
      if (isTransitioning) {
        // 过渡时放大粒子（恢复到原来的 0.05）
        particleSystem.scale.x += 0.05;
        particleSystem.scale.y += 0.05;
        particleSystem.scale.z += 0.05;
        material.opacity -= 0.005; // 透明度降低

        if (particleSystem.scale.x > 10) {
          setShowSecondPage(true); // 切换到第二个界面
        }
      } else {
        // 正常旋转
        particleSystem.rotation.x += 0.0005 + mouseVelocity * 0.0002;
        particleSystem.rotation.y += 0.001 + mouseVelocity * 0.0004;
        particleSystem.rotation.z += 0.0003 + mouseVelocity * 0.0001;
      }

      material.size = 0.3 + mouseVelocity * 0.2;
      material.opacity = Math.max(0, material.opacity);
      mouseVelocity *= 0.95;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      clearInterval(checkMouseIdle);
    };
  }, [isTransitioning]);

  // 如果 `showSecondPage` 变为 `true`，渲染新的界面
  if (showSecondPage) {
    return <SecondPage />;
  }

  return (
    <>
      <Head>
        <title>shengtao.space | Home</title>
        <meta name="description" content="Driven by Everything in Vagary with Mouse Interaction" />
      </Head>
      <div
        ref={mountRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          backgroundColor: "#000",
          cursor: cursorStyle, // 绑定动态光标
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        Shengtao. Space
        <p style={{ fontSize: "1rem", opacity: 0.8 }}>Driven by Everything in Vagary</p>
      </div>
    </>
  );
}

// 这是第二个界面
function SecondPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "3rem",
      }}
    >
      Welcome to the Second Page!
    </div>
  );
}
