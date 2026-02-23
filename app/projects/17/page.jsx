// app/projects/17/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project17Page() {
  const title = "The Seaport Saga";
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
                margin: "0 auto 14px"
              }}
            >
              A Game of Urban Evolution
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
              The Seaport Saga is a multiplayer strategy card game that
              transforms the urban transformation of South Boston’s Seaport into
              a playable narrative. Set during a critical moment of
              redevelopment and gentrification, the game divides the district
              into six zones—industrial, waterfront, fishing culture, historic,
              residential, and commercial. Players step into asymmetric roles
              such as developers, community advocates, and an architect, each
              with distinct goals and abilities. Through the play of action,
              object, and event cards, they negotiate, clash, and collaborate as
              they push each zone toward intensive development or cultural
              preservation.
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
              Each round, card effects shift the status of zones along a
              spectrum from -2 (protection) to +2 (development), triggering the
              construction of different building types and gradually assembling
              a unique physical model of the Seaport on the board. By the end of
              the game, the table becomes a tangible “snapshot” of the city
              shaped by competing interests—ranging from profit-driven skylines
              to community-oriented waterfronts or uneasy hybrids of both. In
              this way, The Seaport Saga is not only entertainment but also a
              critical tool that makes the hidden mechanisms of urban
              change—capital flows, policy decisions, and social
              resistance—visible, discussable, and shareable.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1：gif 封面 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/17/1.gif"
                alt="The Seaport Saga — animated box"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2：游戏局面单张 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/17/2.jpg"
                alt="The Seaport Saga — in play overview"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 3 & 4 并排 */}
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
                  src="/projects/17/3.jpg"
                  alt="The Seaport Saga — box view 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/17/4.jpg"
                  alt="The Seaport Saga — box with components"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 5 & 6 并排 */}
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
                  src="/projects/17/5.jpg"
                  alt="The Seaport Saga — rulebook cover"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/17/6.jpg"
                  alt="The Seaport Saga — unfolded rulebook"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* 7,8,9 三张并排：桌游试玩照片 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "10px"
              }}
            >
              <div style={{ flex: "1 1 220px" }}>
                <img
                  src="/projects/17/7.jpg"
                  alt="The Seaport Saga — playtest group 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 220px" }}>
                <img
                  src="/projects/17/8.jpg"
                  alt="The Seaport Saga — playtest group 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 220px" }}>
                <img
                  src="/projects/17/9.jpg"
                  alt="The Seaport Saga — playtest group 3"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 样式：沿用白底项目通用样式 */}
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
