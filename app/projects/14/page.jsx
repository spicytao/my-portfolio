// app/projects/14/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project14Page() {
  const title = "As If, As Not";
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
              fontSize: "150px",
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "0.04em"
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
                margin: "0 auto 14px"
              }}
            >
              4.152 Architecture Design Core Studio II
            </div>

            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#999999",
                maxWidth: "760px",
                margin: "0 auto 20px",
                fontStyle: "italic"
              }}
            >
              Between the city and the forest, a mist quietly rises.
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "820px",
                margin: "0 auto",

              }}
            >
              As If, As Not is an interfaith chapel designed as an elliptical
              pavilion. It guides visitors through a spatial journey from
              perception to reflection. The enclosed half contains meditation
              rooms framing views of mist, fostering solitude or quiet
              togetherness. As visitors move outward onto the boardwalk, the
              mist’s artificial source is revealed, shifting the experience from
              awe to awareness. The architecture enacts a cycle of belief,
              rupture, and return—offering a non-denominational space where
              meaning emerges not through symbols, but through the act of
              seeing, doubting, and seeing again.
            </p>
          </div>

          {/* 图片区域：全部竖排 */}
          <div style={{ marginTop: "8px" }}>
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/1.gif"
                alt="As If, As Not — animated model view"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/2.jpg"
                alt="As If, As Not — aerial rendering"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/3.jpg"
                alt="As If, As Not — site plan"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/4.jpg"
                alt="As If, As Not — diagram board"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/5.jpg"
                alt="As If, As Not — section perspective"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/6.jpg"
                alt="As If, As Not — chapel interior views"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/7.jpg"
                alt="As If, As Not — corridor view"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/14/8.gif"
                alt="As If, As Not — model animation"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/14/9.jpg"
                alt="As If, As Not — physical model overview"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头 & 返回按钮样式（白底版） */}
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
