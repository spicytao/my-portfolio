// app/projects/29/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project29Page() {
  const title = "Over Growth";
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
              fontSize: "130px", /* 适配长标题 */
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
              Over Growth is a textile installation that studies how a soft, repeatable module can accumulate into a self-supporting body. It begins by learning from traditional Chinese straw-rope weaving—not as a direct revival, but as a set of structural gestures: winding, knotting, tightening, and binding as a way to turn pliable fiber into stability. Each unit starts as a porous sleeve—woven, dyed, and stiffened through a minimal binding—then stacked into a leaning column that reads simultaneously as container, scaffold, and organism. As the modules aggregate, their edges buckle and compress, producing a gradient from dense, grounded blues to lighter greens and near-white at the top: a slow transition from weight to air.
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
              Placed in a bright corner, the piece uses daylight as a second material. Light passes through the mesh and registers as a drifting shadow, extending the structure beyond its physical footprint and turning growth into an atmospheric event. The same rope logic—tension meeting slack, control meeting slip—plays out at the scale of the room, where small variations in handwork accumulate into a larger equilibrium.
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
              OVER / GROWTH frames “making” as a negotiation between control and drift—where repetition becomes variation, and textile behavior sees, remembers, and reshapes space.
            </p>
          </div>

          {/* 图片区域：全竖排 */}
          <div style={{ marginTop: "8px" }}>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/29/1.jpg"
                alt="Over Growth — full installation view with shadows"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/29/2.jpg"
                alt="Over Growth — color gradient and structure details"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/29/3.jpg"
                alt="Over Growth — weaving process on frame"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/29/4.jpg"
                alt="Over Growth — yarn and binding studies"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/29/5.jpg"
                alt="Over Growth — single porous sleeve prototype"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/29/6.jpg"
                alt="Over Growth — stacking and assembling the structure"
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