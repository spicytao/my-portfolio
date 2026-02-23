// app/page.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import MainPage from "../components/MainPage";

export default function Home() {
  const mountRef = useRef(null);
  const [explode, setExplode] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [pageOpacity, setPageOpacity] = useState(1);
  const [ready, setReady] = useState(false);

  // 第一次挂载时判断：是不是 /#work，如果是，就直接进 MainPage
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#work") {
      setShowMain(true);
      setPageOpacity(0);
    }
    setReady(true);
  }, []);

  // Three.js 粒子 intro（只有在 intro 状态才运行）
  useEffect(() => {
    if (!ready) return;
    if (showMain) return;
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      4000
    );
    camera.position.set(0, 0, 1500);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // 粒子
    const count = 120000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 300 + (1500 - 300) * Math.pow(Math.random(), 1.5);
      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      color: 0xffffff,
      opacity: 0.85,
      transparent: true,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 鼠标交互
    const targetRot = new THREE.Vector2(0, 0);
    const currentRot = new THREE.Vector2(0, 0);
    let mouseActive = false;

    const onPointerMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;

      targetRot.set(ny * 0.9, nx * 1.2);
      mouseActive = true;

      camera.position.x = nx * 120;
      camera.position.y = -ny * 80;
      camera.lookAt(0, 0, 0);
    };
    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let explodeScale = 1;
    let autoRot = 0;

    function animate() {
      if (!showMain) {
        if (!explode) {
          if (mouseActive) {
            currentRot.lerp(targetRot, 0.08);
            const mag = Math.min(1, targetRot.length());
            material.size = 0.18 + mag * 0.35;
          } else {
            autoRot += 0.0012;
            currentRot.set(autoRot * 0.7, autoRot);
            material.size = 0.18;
          }
          points.rotation.x = currentRot.x;
          points.rotation.y = currentRot.y;

          targetRot.multiplyScalar(0.96);
          if (targetRot.length() < 0.001) mouseActive = false;
        } else {
          // 爆散阶段
          explodeScale *= 1.015;
          points.scale.setScalar(explodeScale);
          material.opacity = Math.max(0, material.opacity - 0.01);
        }

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.clear();
    };
  }, [explode, ready, showMain]);

  const handleEnter = () => {
    if (explode) return;
    setFadeOut(true);
    setTimeout(() => setExplode(true), 100);

    setTimeout(() => {
      setPageOpacity(0);
    }, 200);

    setTimeout(() => {
      setShowMain(true);
    }, 500);
  };

  // 还没判断完 hash 前，先不渲染，避免闪一下
  if (!ready) {
    return null;
  }

  // 进入主页面（Hero + Work）
  if (showMain) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ width: "100%", height: "100%" }}
        >
          <MainPage />
        </motion.div>
      </AnimatePresence>
    );
  }

  // Intro 粒子页
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: pageOpacity }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ position: "fixed", inset: 0 }}
    >
      <div
        ref={mountRef}
        onClick={handleEnter}
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          cursor: "pointer",
        }}
      />

      <AnimatePresence>
        {!fadeOut && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9 } }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              color: "#fff",
              textAlign: "center",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <div
              className="hero-title hero-700"
              style={{
                fontSize: "clamp(15px, 6vw, 38px)",
                color: "#f5f5f5",
                fontFamily:
                  "var(--font-noto-sans), var(--font-noto-sans-sc), system-ui, -apple-system, 'Segoe UI', sans-serif",
              }}
            >
              <span
                lang="en"
                style={{
                  fontWeight: 500,
                }}
              >
                Shengtao.Space
              </span>
            </div>

            <div
              style={{
                fontSize: "clamp(10px, 2vw, 16px)",
                fontWeight: 300,
                opacity: 0.75,
                marginTop: 16,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,.92)",
                fontFamily:
                  "var(--font-noto-sans), var(--font-noto-sans-sc), system-ui, -apple-system, 'Segoe UI', sans-serif",
              }}
            >
              Click to enter
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
