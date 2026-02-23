// components/JellyHero.jsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * JellyHero
 * - Fullscreen shader “jellyfish” using sin-based deformation and time-based color.
 * - Mouse controls amplitude + offset; first pointerdown enables WebAudio (bandpass + sine osc).
 */
export default function JellyHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ---------- Three.js setup ----------
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); // fullscreen quad
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // uniforms
    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }, // 0..1
      uAmp: { value: 0.2 }, // wave amplitude
      uHueShift: { value: 0.0 },
    };

    // fullscreen quad
    const geo = new THREE.PlaneGeometry(2, 2);

    // ---- Vertex shader (pass-through) ----
    const vert = /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // ---- Fragment shader ----
    // 基于极坐标的“果冻/水母”形：一个软圆边界 + 多重正弦扰动 + time 颜色
    const frag = /* glsl */ `
      precision highp float;
      varying vec2 vUv;
      uniform vec2  uRes;
      uniform vec2  uMouse;     // [0,1]
      uniform float uTime;
      uniform float uAmp;       // 0.0~1.0
      uniform float uHueShift;  // 颜色微调

      // palette from IQ, 做个流动色带；如果要纯白，把最终 col *= gray 即可
      vec3 palette(float t){
        vec3 a = vec3(0.55, 0.50, 0.55);
        vec3 b = vec3(0.45, 0.35, 0.75);
        vec3 c = vec3( 1.0, 1.0, 1.0 );
        vec3 d = vec3(0.10, 0.33 + uHueShift, 0.67);
        return a + b*cos(6.28318*(c*t + d));
      }

      // 伪光照：法线近似+rim
      float rim(vec3 n, vec3 v){
        return pow(1.0 - max(dot(n, v), 0.0), 1.6);
      }

      // 主体
      void main() {
        vec2 uv = vUv;
        // 居中并按屏幕比例校正
        vec2 p = (uv*2.0 - 1.0);
        p.x *= uRes.x/uRes.y;

        // 让水母轻轻朝鼠标偏移
        vec2 m = (uMouse*2.0 - 1.0);
        m.x *= uRes.x/uRes.y;
        p -= m * 0.1;

        // 极坐标
        float r = length(p);
        float a = atan(p.y, p.x);

        // 边界基础半径
        float baseR = 0.42;

        // 多频正弦扰动（像裙边）
        float w1 = sin(a*6.0 + uTime*1.4);
        float w2 = sin(a*11.0 - uTime*1.9);
        float w3 = sin(a*18.0 + uTime*2.6);
        float wave = (w1*0.45 + w2*0.35 + w3*0.2) * uAmp;

        // 半径随时间脉动，制造“呼吸”
        float breathe = 0.04*sin(uTime*1.2);

        // 最终半径
        float R = baseR + wave + breathe;

        // 软边距离场（负值在内部）
        float d = r - R;

        // 内部层纹（深浅褶皱）
        float layers = 0.5 + 0.5 * sin(r*18.0 - uTime*2.0 + a*2.5);
        layers *= smoothstep(0.02, -0.08, d);

        // 伪法线与边缘高光
        vec3 n = normalize(vec3(p, 0.25 - d*6.0));
        float spec = pow(max(dot(n, normalize(vec3(-0.3,0.5,0.8))), 0.0), 24.0);
        float rimL = rim(n, normalize(vec3(0.0,0.0,1.0)));

        // 颜色：随时间流动的渐变
        vec3 col = palette(0.3 + 0.25*sin(uTime*0.6) + r*0.25);
        // 想要“蓝系”，可以给 col *= vec3(0.85,0.95,1.2);
        // 想要“白色果冻”，换成：col = vec3(0.92);

        // 组合：内部+高光+边缘
        vec3 jelly = col * (0.65 + 0.45*layers) + vec3(1.0)*spec*0.9 + vec3(0.9)*rimL*0.35;

        // 背景：纯黑
        vec3 bg = vec3(0.0);

        // 软遮罩
        float alpha = smoothstep(0.02, -0.01, d); // 内部=1，外部=0
        vec3 finalCol = mix(bg, jelly, alpha);

        gl_FragColor = vec4(finalCol, 1.0);
      }
    `;

    const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: vert, fragmentShader: frag });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // ---------- Audio: bandpass + oscillator ----------
    let audioCtx = null;
    let osc = null;
    let band = null;
    let gain = null;
    let audioStarted = false;

    const startAudio = () => {
      if (audioStarted) return;
      audioStarted = true;
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      osc = audioCtx.createOscillator();
      osc.type = "sine"; // 振荡器：正弦

      band = audioCtx.createBiquadFilter();
      band.type = "bandpass";
      band.Q.value = 8; // 峰值

      gain = audioCtx.createGain();
      gain.gain.value = 0.0; // 初始静音

      osc.connect(band);
      band.connect(gain);
      gain.connect(audioCtx.destination);

      osc.frequency.value = 220;
      osc.start();
    };

    // ---------- Interaction ----------
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const mouse = new THREE.Vector2(0.5, 0.5);
    let amp = 0.2; // uAmp 目标值
    let ampVel = 0.0;

    const onPointerMove = (e) => {
      const x = e.clientX ?? e.touches?.[0].clientX;
      const y = e.clientY ?? e.touches?.[0].clientY;
      if (x == null || y == null) return;
      targetMouse.set(x / window.innerWidth, 1 - y / window.innerHeight);
      // 拨动：波幅短暂增大
      ampVel += 0.08;
      if (gain) {
        // 声音映射：x 控制频率，y 控制带通频率/Q 与音量
        const f = 120 + targetMouse.x * 1200;           // 120~1320Hz
        const bp = 200 + targetMouse.y * 2800;          // 200~3000Hz
        osc.frequency.exponentialRampToValueAtTime(f, audioCtx.currentTime + 0.05);
        band.frequency.exponentialRampToValueAtTime(bp, audioCtx.currentTime + 0.05);
        band.Q.setTargetAtTime(4 + targetMouse.y*12, audioCtx.currentTime, 0.08);
        gain.gain.setTargetAtTime(0.02 + targetMouse.y*0.06, audioCtx.currentTime, 0.05);
      }
    };
    const onPointerDown = () => {
      startAudio(); // 解决浏览器自动播放限制
      ampVel += 0.15;
    };
    const onPointerUp = () => {
      // 慢慢把音量降一点
      if (gain && audioCtx) {
        gain.gain.setTargetAtTime(0.008, audioCtx.currentTime, 0.2);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });

    const onResize = () => {
      uniforms.uRes.value.set(window.innerWidth, window.innerHeight);
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ---------- Loop ----------
    let raf = 0;
    const tick = (tMs) => {
      const t = tMs * 0.001;
      uniforms.uTime.value = t;

      // 平滑鼠标 & 波幅阻尼
      mouse.lerp(targetMouse, 0.12);
      uniforms.uMouse.value.copy(mouse);

      amp += ampVel;
      ampVel *= 0.85; // 阻尼
      amp = THREE.MathUtils.clamp(THREE.MathUtils.damp(amp, 0.24, 6, 0.016), 0.12, 0.6);
      uniforms.uAmp.value = amp;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);

      if (osc) { try { osc.stop(); } catch(_){} }
      if (audioCtx) { try { audioCtx.close(); } catch(_){} }
      gain = band = osc = null;
      audioCtx = null;

      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: "relative", width: "100%", height: "100vh", background: "#000" }}>
      {/* 可选：居中标题（覆盖在画布之上） */}
      <div style={{
        position:"absolute", inset:0, display:"grid", placeItems:"center",
        pointerEvents:"none", color:"#fff", fontWeight:700, fontSize:"clamp(18px,4vw,42px)",
        textShadow:"0 2px 16px rgba(0,0,0,.35)"
      }}>
        {/* Hi, I am BADBITCH */}
      </div>
    </div>
  );
}
