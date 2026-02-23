// app/projects/28/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project28Page() {
  const title = "Air Vessel";
  const router = useRouter();
  const contentRef = useRef(null);

  // 滚动到内容区
  const scrollToContent = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, []);

  // 返回到主页 work 区
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
              fontSize: "140px",
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
                marginBottom: "20px"
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "800px",
                margin: "0 auto 18px",
              }}
            >
              Air Vessel (以虚成器) is an inflatable vase study inspired by the Dao De Jing: “Clay is shaped into a vessel; it is the empty space that makes it useful.” Here, the vase is defined by “emptiness.” When deflated, it is almost absent—only a foldable sheet of translucent film. When air is introduced, air becomes structure: heat-sealed seams and radial panels act as a skeleton that guides where the surface bulges, creases, and ultimately stands.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "800px",
                margin: "0 auto 18px",
              }}
            >
              The object forms in a single breath. This quick transformation foregrounds a reversible state—presence and collapse—rather than a permanent volume. The translucent material further softens the boundary between flower, water, and room; stems appear suspended inside a light, temporary body.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              AIR VESSEL explores how 2D fabrication can generate 3D utility, and how an everyday container can be rethought as a choreography of void, pressure, and form—where “use” emerges precisely from what is not there.
            </p>
          </div>

          {/* 图片区域：全竖排 */}
          <div style={{ marginTop: "8px" }}>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/28/1.jpg"
                alt="Air Vessel — in use with flowers"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/28/2.jpg"
                alt="Air Vessel — forms and variations"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/28/3.jpg"
                alt="Air Vessel — air valve and seam details"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/28/4.jpg"
                alt="Air Vessel — inflated structure view"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/28/5.jpg"
                alt="Air Vessel — front silhouette"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头 & 返回按钮样式 */}
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