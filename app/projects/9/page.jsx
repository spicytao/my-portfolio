// app/projects/9/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project9Page() {
  const title = "Folded Continuum";
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
          background: "#000000",
          color: "#f5f5f5"
        }}
      >
        {/* 第一屏标题 */}
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
              color: "#ffffffff",
              letterSpacing: "0.04em",
              textTransform: "none"
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
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "64px 16px 80px"
          }}
        >
          {/* 文本部分 */}
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
                marginBottom: "16px"
              }}
            >
              {title}
            </h2>

            {/* 小标题 */}
            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#656565ff",
                maxWidth: "760px",
                margin: "0 auto 18px"
              }}
            >
              A continuous lattice grown from a single crease.
            </div>

            {/* 概要说明 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#b3b3b3ff",
                maxWidth: "840px",
                margin: "0 auto"
              }}
            >
              Folded Continuum begins with a family of familiar volumetric
              silhouettes that are analytically reduced to a single operative
              contour: a diamond profile. This profile becomes a topological
              unit rather than a decorative motif, iterated through rotation,
              scaling, and phased offset to generate a continuous folded
              lattice. The piece translates origami logic into a
              three-dimensional manifold in which every crease performs
              simultaneously as stiffener, boundary, and transition between
              local cells.
              <br />
              <br />
              3D printing is used not merely as a fabrication method but as a
              way to test the limits of continuity in a discretized system—
              allowing thin members, acute angles, and graded porosity to be
              produced as one self-supporting object. The result is a
              scalar-ambiguous structure that oscillates between mesh and solid,
              illustrating how a single folded unit can encode complex
              topological behavior once released into an additive manufacturing
              environment.
            </p>
          </div>

          {/* 图片：全部竖排单张 */}
          <div style={{ marginTop: "8px" }}>
            <div style={{ marginBottom: "28px" }}>
              <img
                src="/projects/9/1.jpg"
                alt="Folded Continuum — view 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <img
                src="/projects/9/2.jpg"
                alt="Folded Continuum — drawing 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <img
                src="/projects/9/3.jpg"
                alt="Folded Continuum — drawing 2"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <img
                src="/projects/9/4.jpg"
                alt="Folded Continuum — view 2"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <img
                src="/projects/9/5.jpg"
                alt="Folded Continuum — detail 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <img
                src="/projects/9/6.jpg"
                alt="Folded Continuum — detail 2"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <img
                src="/projects/9/7.jpg"
                alt="Folded Continuum — top view 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/9/8.jpg"
                alt="Folded Continuum — top view 2"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头 + 返回按钮样式 */}
      <style jsx>{`
        .scroll-arrow {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          border-radius: 999px;
          border: 1px solid #777;
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
          background: rgba(255, 255, 255, 0.12);
        }

        .scroll-arrow-inner {
          width: 10px;
          height: 10px;
          border-left: 2px solid #ffffff;
          border-bottom: 2px solid #ffffff;
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
          border: 1px solid #777;
          background: rgba(79, 79, 79, 0.7);
          display: flex;
          align-items: center;
          justifyContent: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(8, 8, 8, 0.6);
          backdrop-filter: blur(4px);
          opacity: 0.5;
          transition: background 0.2s ease, transform 0.15s ease,
            box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.8);
          opacity: 1;
        }

        .back-button-arrow {
          width: 9px;
          height: 9px;
          border-top: 2px solid #868686ff;
          border-left: 2px solid #868686ff;
          transform: rotate(-45deg) translate(5px, 5px);
        }
      `}</style>
    </>
  );
}
