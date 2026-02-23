
// app/projects/11/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project10Page() {
  const title = "Equilibra";
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
          background: "#ffffff",
          color: "#000000"
        }}
      >
        {/* 第一屏：整页居中标题 */}
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
                color: "#bfbfbf",
                maxWidth: "760px",
                margin: "0 auto 18px"
              }}
            >
              <div>A Totem of Nature</div>
              <div style={{ marginTop: "4px" }}>
                1st place, Expressive Design Award — The 11th International
                Industrial Design Competition (Prime) Chair
              </div>
            </div>

            {/* 设计说明 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "780px",
                margin: "0 auto 18px"
              }}
            >
              “Equilibra” takes its cue from pebbles leaning along a riverbank:
              stability achieved by form rather than force. Rooted in the
              vernacular logic of timber craft and refined by CNC precision,
              European beech components are milled and pre-indexed, then
              assembled with dry, interlocking curved joints.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "780px",
                margin: "0 auto"
              }}
            >
              Finished in an oil-wax seal, the piece invites touch, allows easy
              maintenance, and can be disassembled, flat-packed, and
              reassembled. As a “natural totem/seat,” it traces a gentle, lucid
              path between forest memory and industrial reason—letting the
              material be heard, the craft be seen, and the act of sitting
              re-sensed through a quiet, poised balance.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1：森林渲染 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/10/1.jpg"
                alt="Equilibra — outdoor view"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2：草图 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/10/2.jpg"
                alt="Equilibra — concept sketch"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 3 & 4：并排 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "32px"
              }}
            >
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/10/3.jpg"
                  alt="Equilibra — prototype view 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/10/4.jpg"
                  alt="Equilibra — prototype view 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 5：产品渲染 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/10/5.jpg"
                alt="Equilibra — product render"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 6、7：设计图纸竖排 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/10/6.jpg"
                alt="Equilibra — design drawings 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/10/7.jpg"
                alt="Equilibra — design drawings 2"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 8,9,10：领奖与合照三张并排 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "32px"
              }}
            >
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/10/8.jpg"
                  alt="Equilibra — award photo 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/10/9.jpg"
                  alt="Equilibra — award photo 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/10/10.jpg"
                  alt="Equilibra — award photo 3"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 11：演讲竖排 */}
            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/10/11.jpg"
                alt="Equilibra — presentation"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头样式 & 返回按钮（和 4 号项目保持一致） */}
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
