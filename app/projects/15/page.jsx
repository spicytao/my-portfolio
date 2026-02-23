// app/projects/15/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project15Page() {
  const title = "Tide to Cloud";
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

            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#bfbfbf",
                maxWidth: "760px",
                margin: "0 auto 10px"
              }}
            >
              Architecture as a Container for Water
            </div>

            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#999999",
                maxWidth: "760px",
                margin: "0 auto 22px",
                fontStyle: "italic"
              }}
            >
              If imperceptible climate turns to weather phenomenon, can we see
              the power of water?
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "820px",
                margin: "0 auto 18px",

              }}
            >
              The tide is water. When the tide disappears, the water remains.
              When the tide is alive, it is water; when the tide is dead, it is
              still water. Water is the basis of the tide, the ending of the
              tide, and water is the infinity and eternity of the tide.
            </p>

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
              The proposal is to design a climate museum on the banks of the
              Thames, by allowing the tides to enter into the architectural
              space, where the architectural space communicates and merges with
              water, and where the tides eventually transform into clouds
              leaving the building. It is a romanticized imagination that
              transforms invisible climate change into visible clouds,
              demystifying the climate while exploring different possibilities
              for architecture.
            </p>
          </div>

          {/* 图片区域：全部竖排 */}
          <div style={{ marginTop: "8px" }}>
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/15/1.jpg"
                alt="Tide to Cloud — model front view"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/15/2.jpg"
                alt="Tide to Cloud — contextual analysis"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/15/3.jpg"
                alt="Tide to Cloud — atmospheric studies"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/15/4.jpg"
                alt="Tide to Cloud — process diagrams"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/15/5.jpg"
                alt="Tide to Cloud — section and spatial sequence"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/15/6.jpg"
                alt="Tide to Cloud — water chambers"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/15/7.jpg"
                alt="Tide to Cloud — structural studies"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/15/8.jpg"
                alt="Tide to Cloud — atmospheric views"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头 & 返回按钮样式（白底版通用） */}
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
