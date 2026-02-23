// app/projects/10/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project11Page() {
  const title = "The Fading Herald";
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
              fontSize: "130px",
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

            {/* 副标题 & 奖项信息 */}
            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                fontWeight: 400,
                color: "#bfbfbf",
                maxWidth: "780px",
                margin: "0 auto 18px"
              }}
            >
              <div>Furniture of Nature</div>
              <div style={{ marginTop: "4px" }}>
                Excellence Award, 4th “Kengo Kuma & Higashikawa” KAGU Design
                Competition
              </div>
            </div>

            {/* 概要说明 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "800px",
                margin: "0 auto 18px"
              }}
            >
              Squirrels, foxes, woodpeckers and deer—we notice their traces, yet
              remain silently connected, coexisting in harmony. The relationship
              between humans and animals resembles that of distant pen pals,
              exchanging messages to sustain their relationship. Our proposal is
              envisioned as a herald, carrying these messages between humans and
              wildlife.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "800px",
                margin: "0 auto 18px"
              }}
            >
              Crafted from recycled sawdust sourced from local workshops and
              shaped with local soil, this biodegradable furniture serves as a
              tribute to the natural beauty of Higashikawa. For visitors, it is
              a place to rest and gather; for animals, it becomes a feeding
              station and a temporary shelter. As people pass by, they pause to
              place fruits and nuts, leaving letters to nature. In turn, animals
              arrive to forage, leaving their marks and replies from nature.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "800px",
                margin: "0 auto"
              }}
            >
              Over time, as earth and seeds fill its framework, the structure
              will become camouflaged by thriving plants, blending seamlessly
              into the environment. The cycle of life continues—the furniture
              fades, leaving behind only nature to flourish and bloom.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1：主视图 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/11/1.jpg"
                alt="The Fading Herald — main view"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2：细部 / 渲染 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/11/2.jpg"
                alt="The Fading Herald — detail view"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 3：故事示意 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/11/3.jpg"
                alt="The Fading Herald — narrative diagram"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 4：场地照片 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/11/4.jpg"
                alt="The Fading Herald — site photo"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 5 & 6：并排 */}
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
                  src="/projects/11/5.jpg"
                  alt="The Fading Herald — object view 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/11/6.jpg"
                  alt="The Fading Herald — object view 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 7 & 8：颁奖台并排 */}
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
                  src="/projects/11/7.jpg"
                  alt="The Fading Herald — award ceremony 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/11/8.jpg"
                  alt="The Fading Herald — award ceremony 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 9：大合照竖排 */}
            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/11/9.jpg"
                alt="The Fading Herald — group photo"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头 & 返回按钮样式（与 10 保持一致） */}
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

