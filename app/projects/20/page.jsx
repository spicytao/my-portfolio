// app/projects/20/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function WarpedGridPage() {
  const title = "Warped Grid";
  const router = useRouter();
  const contentRef = useRef(null);

  const scrollToContent = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, []);

  const handleBack = useCallback(() => {
    router.push("/#work");
  }, [router]);

  return (
    <>
      {/* 左上角悬浮返回按钮 */}
      <button
        type="button"
        className="back-button"
        onClick={handleBack}
        aria-label="Back to work"
      >
        <span className="back-button-arrow" />
      </button>

      <main
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          color: "#000000"
        }}
      >
        {/* 第一屏：整页主标题 */}
        <section
          style={{
            minHeight: "95vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative"
          }}
          onClick={scrollToContent}
          onWheel={(e) => {
            if (e.deltaY > 0) {
              e.preventDefault();
              scrollToContent();
            }
          }}
        >
          <h1
            style={{
              fontSize: "130px",
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "0.04em",
              textAlign: "center"
            }}
          >
            {title}
          </h1>

          {/* 底部小箭头 */}
          <div
            className="scroll-arrow"
            onClick={(e) => {
              e.stopPropagation();
              scrollToContent();
            }}
          >
            <span className="scroll-arrow-inner" />
          </div>
        </section>

        {/* 内容区 */}
        <section
          ref={contentRef}
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "64px 16px 80px"
          }}
        >
          {/* 文本说明 */}
          <div
            style={{
              paddingTop: "16px",
              paddingBottom: "40px",
              textAlign: "center"
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 600,
                marginBottom: "14px"
              }}
            >
              {title}
            </h2>

            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#bfbfbf",
                maxWidth: "760px",
                margin: "0 auto 14px"
              }}
            >
              4.118 Creative Computation
            </div>

            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#999999",
                maxWidth: "760px",
                margin: "0 auto 20px"
              }}
            >
              Mapping Spatial Distortion in a Cartesian Frame
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "840px",
                margin: "0 auto 18px",

              }}
            >
              Warped Grid begins from the most neutral architectural
              instrument—the Cartesian frame—and subjects it to a controlled
              distortion. A regular three-dimensional lattice provides the outer
              envelope, within which selected nodes are displaced along vector
              paths, twisting the internal members into a dense field of
              diagonals. The object becomes a physical diagram of coordinates in
              motion: a record of how a stable spatial system can be bent,
              stretched, and re-routed without losing its underlying continuity.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "840px",
                margin: "0 auto",

              }}
            >
              Read from different viewpoints, the piece oscillates between pure
              structure and optical illusion. The projected shadows multiply the
              grid onto the ground, revealing hidden layers of curvature and
              depth. Rather than defining rooms or volumes, the work uses
              minimal material to trace trajectories in space, inviting viewers
              to navigate with their eyes through an abstract, three-dimensional
              map of forces, displacements, and potential spaces.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1 & 2 并排 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "30px"
              }}
            >
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/20/1.jpg"
                  alt="Warped Grid — perspective view 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/20/2.jpg"
                  alt="Warped Grid — perspective view 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 3 & 4 并排 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "30px"
              }}
            >
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/20/3.jpg"
                  alt="Warped Grid — side elevation"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/20/4.jpg"
                  alt="Warped Grid — oblique view"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 5：生成过程 gif */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/20/5.gif"
                alt="Warped Grid — layer distortion diagram"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 6：两种状态对比 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/20/6.png"
                alt="Warped Grid — orthogonal vs warped comparison"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 7：阴影投射 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/20/7.png"
                alt="Warped Grid — shadow projection"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 8 & 9 并排：3D 打印过程 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "30px"
              }}
            >
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/20/8.jpg"
                  alt="Warped Grid — printing process 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/20/9.jpg"
                  alt="Warped Grid — printing process 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 10：完成模型 */}
            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/20/10.jpg"
                alt="Warped Grid — final physical model"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 样式：白底通用 */}
      <style jsx>{`
        .scroll-arrow {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          border-radius: 999px;
          border: 1px solid #999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.7;
          backdrop-filter: blur(4px);
          animation: arrowFloat 1.6s ease-in-out infinite;
          transition: opacity 0.2s ease, background 0.2s ease;
        }

        .scroll-arrow:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.06);
        }

        .scroll-arrow-inner {
          width: 10px;
          height: 10px;
          border-left: 2px solid #333333;
          border-bottom: 2px solid #333333;
          transform: rotate(-45deg) translateY(-1px);
        }

        @keyframes arrowFloat {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 6px);
          }
        }

        .back-button {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 50;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid #999;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(4px);
          opacity: 0.45;
          transition: background 0.2s ease, transform 0.15s ease,
            box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .back-button:hover {
          background: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
          opacity: 0.9;
        }

        .back-button-arrow {
          width: 9px;
          height: 9px;
          border-top: 2px solid #555555;
          border-left: 2px solid #555555;
          transform: rotate(-45deg) translate(2px, 0px);
        }
      `}</style>
    </>
  );
}
