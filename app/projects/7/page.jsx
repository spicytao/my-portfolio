// app/projects/7/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project7Page() {
  const title = "Framed Curvature";
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
                color: "#656565ff",
                maxWidth: "760px",
                margin: "0 auto 22px"
              }}
            >
              <div>4.118 Creative Computation</div>
              <div>Team: Zaynab Eltaib, Justin Wan, Shengtao Shen</div>
            </div>

            {/* 设计说明 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#b3b3b3ff",
                maxWidth: "830px",
                margin: "0 auto",
              }}
            >
              Framed Curvature explores how a curved surface can be constructed from
              flat elements through the interaction of textile tension and panelized
              geometry. A continuous digital surface is decomposed into triangular
              panels, turning smooth curvature into a faceted, buildable skin whose
              seams and slight offsets visibly record the transformation from digital
              form to physical structure.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#b3b3b3ff",
                maxWidth: "830px",
                margin: "18px auto 0",
              }}
            >
              A dark textile membrane is draped over this rigid “hard fabric,” both
              anchored to a shared frame that is conceived not as a neutral support
              but as an active instrument guiding curvature, calibrating points of
              tension, slack, and overlap. The resulting object oscillates between
              cloth and façade, surface and volume, revealing how form can emerge
              from the negotiation between material behavior, structural logic, and
              the desire to flatten the curved.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1.jpg 单独竖排 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/7/1.jpg"
                alt="Framed Curvature image 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2 & 3：并排 + 共同说明文字 */}
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginBottom: "10px"
                }}
              >
                <div style={{ flex: "1 1 260px" }}>
                  <img
                    src="/projects/7/2.gif"
                    alt="Framed Curvature prototype 2"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
                <div style={{ flex: "1 1 260px" }}>
                  <img
                    src="/projects/7/3.gif"
                    alt="Framed Curvature prototype 3"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: "#b3b3b3ff",
                  maxWidth: "100%",
                  margin: "0 auto 22px",
                  textAlign: "justify"
                }}
              >
                Small-scale prototype tests.
              </p>
            </div>

            {/* 4–7 竖排 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/7/4.gif"
                alt="Framed Curvature image 4"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/7/5.gif"
                alt="Framed Curvature image 5"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/7/6.jpg"
                alt="Framed Curvature image 6"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "40px" }}>
              <img
                src="/projects/7/7.jpg"
                alt="Framed Curvature image 7"
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
          transform: rotate(-45deg) translate(2px, 0px);
        }
      `}</style>
    </>
  );
}