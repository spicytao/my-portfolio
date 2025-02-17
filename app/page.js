"use client";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const mountRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("default");

  useEffect(() => {
    if (!mountRef.current) return;

    // 创建场景和相机
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    camera.position.set(0, 0, 1500);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    // 创建粒子系统
    const particleCount = 170000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 300 + (1500 - 300) * Math.pow(Math.random(), 1.5);
      positions.set(
        [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi),
        ],
        i * 3
      );
    }
       // 改变粒子大小，透明度
    const particles = new THREE.BufferGeometry();
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      opacity: 0.5,
      transparent: true,
      sizeAttenuation: true,
    });
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    let mouseVelocity = 0;

    // 处理鼠标移动事件
    const handleMouseMove = (e) => {
      const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
      mouseVelocity = Math.min(speed * 0.02, 2);
      particleSystem.rotation.x += e.movementY * 0.0005;
      particleSystem.rotation.y += e.movementX * 0.0005;
      setCursorStyle("pointer");
    };

    // 处理鼠标点击事件，触发页面转换
    const handleMouseDown = (e) => {
      if (e.button === 0) {
        setFadeOut(true);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 100);
        setTimeout(() => {
          setShowSecondPage(true);
        }, 700);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    // 动画循环
    function animate() {
      if (isTransitioning) {
        particleSystem.scale.x += 0.1;
        particleSystem.scale.y += 0.1;
        particleSystem.scale.z += 0.1;
        material.opacity -= 0.005;
      } else {
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

    // 清理函数，移除事件监听器和释放资源
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      material.dispose();
      particles.dispose();
      scene.remove(particleSystem);
    };
  }, [isTransitioning]);

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
          cursor: cursorStyle,
        }}
      />
      <AnimatePresence>
        {!fadeOut && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              zIndex: 10,
            }}
          >
            Shengtao. Space
            <p style={{ fontSize: "1rem", opacity: 0.8 }}>
              Driven by Everything in Vagary
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


// 这是第二个界面
function SecondPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初始透明度为 0
      animate={{ opacity: 1 }} // 过渡到完全可见
      transition={{ duration: 1, ease: "easeInOut" }} // 1秒淡入动画
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        paddingTop: "4rem",
      }}
    >
      {/* 顶部导航栏 */}
      <nav
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          top: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h3 style={{ fontSize: "1 rem", fontWeight: "bold" }}>Shengtao Shen</h3>
        <div>
          <a href="#" style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}>About</a>
          <a href="#" style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}>Projects</a>
          <a href="#" style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* 主要介绍部分 */}
      <div style={{ textAlign: "center", maxWidth: "800px", marginTop: "5rem" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", lineHeight: "1.3" }}>
        Forging order from chaos<br /> 
        Shaping the unseen into presence
    
        </h1>

        {/* 叠加的视频背景 */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      top: "23%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      maxWidth: "860px",
      zIndex: 1, // 让它在文字背后
      opacity: 0.3, // 透明度，确保不影响可读性
      borderRadius: "10px", // 可选，给视频加一点弧度
      maskImage: "linear-gradient(to bottom, black 10%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 10%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    }}
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            opacity: 0.8,
          }}
        >
          <span style={{ margin: "0 1rem" }}>MIT SA+P</span> |
          <span style={{ margin: "0 1rem" }}>Harvard</span> 
        </div>
      </div>

      {/* 标签筛选 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "6rem",
          gap: "1rem",
        }}
      >
        {["All", "Featured", "Spatial", "Interaction", "Exhibition", "Interface", "Computation"].map((tag) => (
  <span
    key={tag}
    style={{
      padding: "0.5rem 1rem",
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.5)", // 50% 透明度的白色边框
      cursor: "pointer",
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 0.6)", // 60% 透明度的文字
      backgroundColor: "rgba(255, 255, 255, 0.1)", // 10% 透明度的背景
      transition: "all 0.3s ease-in-out", // 让透明度变化更平滑
    }}
  >
    #{tag}
  </span>
))}

      </div>

      {/* 项目展示 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          marginTop: "3rem",
          width: "80%",
        }}
      >
        <div
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/400x300?technology')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/400x300?innovation')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/400x300?future')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/400x300?science')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      </motion.div>
  );
}