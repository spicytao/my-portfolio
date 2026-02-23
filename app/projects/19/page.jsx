// app/projects/19/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project19Page() {
  const title = "Stairscapes";
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
        {/* 第一屏：整页大标题 */}
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
                margin: "0 auto 18px"
              }}
            >
              Exploring Color and Form Through Stair Geometry
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
              Stairscapes is a modular construction toy that takes the archetype
              of the stair as its generative idea. Each piece is a small stepped
              volume, cut and colored to act simultaneously as architectural
              fragment, sculptural element, and abstract pixel. By rotating,
              mirroring, and interlocking these units, players can compose an
              open field of forms—from simple towers and bridges to intricate,
              ambiguous geometries that shift between two and three dimensions.
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
              The use of distinct, saturated colors turns every configuration
              into a study of chromatic relationships. Gradients, contrasts, and
              symmetries emerge not as decoration but as an integral part of the
              spatial composition. In inviting users to endlessly reassemble the
              pieces, Stairscapes becomes less a fixed toy and more a tactile
              tool for exploring form, rhythm, and color—an intuitive
              introduction to architectural thinking through play.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1：gif 封面 */}


            {/* 2 & 3 并排 */}
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
                  src="/projects/19/2.jpg"
                  alt="Stairscapes — white prototype"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/19/1.gif"
                  alt="Stairscapes — white prototype"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/19/3.jpg"
                  alt="Stairscapes — single colored module"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 4：多色模块 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/19/4.jpg"
                alt="Stairscapes — color variations"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 5：组合玩耍 */}
            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/19/5.jpg"
                alt="Stairscapes — assembled landscape"
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
