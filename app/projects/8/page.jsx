// app/projects/8/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project8Page() {
  const title = "Empty Step";
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

  // 返回到主页的 work 区
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
        {/* 第一屏：整页只有居中的标题 */}
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
          {/* 标题 + 信息 + 设计说明 */}
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

            {/* 项目信息 */}
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
              <div>4.151 Architecture Design Core Studio I</div>
            </div>

            {/* 副标题 */}
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                fontWeight: 400,
                color: "#9a9a9aff",
                maxWidth: "780px",
                margin: "0 auto 20px"
              }}
            >
              A stair to there, and a stair to nowhere. 
            </p>

            {/* 设计说明 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#b3b3b3ff",
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              This is not a stair to climb, but a repetition of the idea of one.
              Without function, it becomes a frame—of emptiness, of hesitation,
              of potential. Each step leads nowhere, yet insists on continuing.
              By repeating a single gesture, the piece holds a rhythm: rising,
              pausing, rising again.
            </p>
          </div>
 {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1.jpg */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/8/1.jpg"
                alt="empty step image 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2.jpg + 说明文字 */}
            <div style={{ marginBottom: "24px" }}>
              <img
                src="/projects/8/2.jpg"
                alt="empty step concrete prototype"
                style={{ width: "100%", display: "block", marginBottom: "8px" }}
              />
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: "#b3b3b3ff",
                  margin: 0,
                  textAlign: "left"
                }}
              >
                Small-scale concrete prototype.
              </p>
            </div>

            {/* 3.jpg 单独一张，无说明文字 */}
            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/8/3.jpg"
                alt="empty step image 3"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头样式 & 返回按钮（沿用之前的黑底风格） */}
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
          justify-content: center;
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
          transform: rotate(-45deg);
        }
      `}</style>
    </>
  );
}
