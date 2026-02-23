// components/HeroSimple.jsx — Fullscreen Video + Centered Typewriter（无 topbar 版本）
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Props (optional):
 * - src:    string  主视频地址（默认 /videos/hero.mp4）
 * - webm:   string  备用 webm 源
 * - poster: string  封面图
 * - onEnter: () => void  点击整屏/按键进入 / 点击 Work
 */
export default function HeroSimple({
  src = "/videos/hero.mp4",
  webm,
  poster,
  onEnter,
}) {
  const videoRef = useRef(null);
  const [typed, setTyped] = useState("");

  // 中间打字机文案（想改就改这里一段文字）
  const fullText = `Hi, I'm Shengtao.
I investigate how space stores emotional memory and how movement can be encoded into objects; through computational design and multimodal interaction I craft playful, evocative prototypes.`;

  // 自动播放视频
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      const p = v.play && v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          v.muted = true;
          v.play && v.play().catch(() => {});
        });
      }
    };

    tryPlay();
    const onInteract = () => tryPlay();
    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    window.addEventListener("pointerdown", onInteract, { passive: true });
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // 打字机效果
  useEffect(() => {
    let i = 0;
    let timer;
    const punctPause = (ch) =>
      ",:".includes(ch)
        ? 200
        : ".?!".includes(ch)
        ? 300
        : ch === "\n"
        ? 260
        : 0;

    const step = () => {
      setTyped(fullText.slice(0, i));
      i += 1;
      if (i <= fullText.length) {
        const base = 35;
        const jitter = Math.random() * 60;
        const extra = punctPause(fullText[i - 1]);
        const headSlow = i < 12 ? 110 : 0;
        timer = setTimeout(step, base + jitter + extra + headSlow);
      }
    };
    step();
    return () => clearTimeout(timer);
  }, []);

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (onEnter) onEnter();
    }
  };

  return (
    <section
      className="hero"
      role="button"
      tabIndex={0}
      onKeyDown={onKey}
      onClick={() => {
        if (onEnter) onEnter();
      }}
      aria-label="Enter"
    >
      <video
        ref={videoRef}
        className="bgVideo"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        {webm ? <source src={webm} type="video/webm" /> : null}
        <source src={src} type="video/mp4" />
      </video>

      {/* 中间打字机文字 */}
      <div className="headline" aria-hidden>
        <span className="type">{typed}</span>
        <span className="caret" />
      </div>

      {/* 鼠标样式的滚动提示 */}
      <div className="mouseHint" aria-hidden>
        <div className="wheel" />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100dvh;
          width: 100%;
          background: #000;
          overflow: hidden;
          cursor: pointer;
        }

        .bgVideo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          opacity: 0.52;
        }

        /* 中心打字机文字 */
        .headline {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(1030px, 85vw);
          text-align: center;
          pointer-events: none;
          color: #ffffff;
          font-size: clamp(16px, 2.2vw, 30px);
          font-weight: 500;
          letter-spacing: 0.01em;
          line-height: 1.6;
          text-shadow: 0 0 18px rgba(0, 0, 0, 0.45),
            0 0 30px rgba(0, 0, 0, 0.35);
          padding: 0 8px;
          z-index: 10;
        }

        .type {
          white-space: pre-line;
        }

        .caret {
          display: inline-block;
          width: 1px;
          height: 1em;
          background: rgba(255, 255, 255, 0.95);
          margin-left: 6px;
          vertical-align: -0.1em;
          animation: blink 1s steps(1, end) infinite;
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        /* 中间下面的鼠标提示 */
        .mouseHint {
          position: absolute;
          left: 50%;
          bottom: 22px;
          transform: translateX(-50%);
          width: 28px;
          height: 44px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          opacity: 0.95;
          backdrop-filter: blur(1px);
          z-index: 10;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 2px;
          margin: 8px auto 0;
          animation: wheelMove 1.6s ease-in-out infinite;
        }

        @keyframes wheelMove {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          60% {
            transform: translateY(10px);
            opacity: 0.1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
