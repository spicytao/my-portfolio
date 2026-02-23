// app/projects/4/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project4Page() {
  const title = "Building a Tower";
  const router = useRouter();

  // 第二屏内容的引用
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
                color: "#bfbfbfff",
                maxWidth: "760px",
                margin: "0 auto 22px"
              }}
            >
              <div>Architectural Performance Art Show</div>
              <div style={{ marginTop: "4px" }}>
                How can architectural narratives be a metaphor for the plight of the
                city today?
              </div>
            </div>

            {/* 设计说明 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7bff",
                maxWidth: "750px",
                margin: "0 auto"
              }}
            >
              In ancient times, kings saw tall towers as a symbol of power. In
              today's world, people construct skyscrapers for various reasons—be it
              the lack of production means or the pursuit of cultural icons. People
              live and work in these towers, often navigating between them,
              unwittingly becoming trapped within these structures.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7bff",
                maxWidth: "750px",
                margin: "18px auto 0"
              }}
            >
              By stripping away conventional aims or symbolic depth, the project
              aimed to mirror the meaningless race for height in architecture. This
              pure vertical accumulation sought to unravel the complexities and
              perhaps the obsessions ingrained within our modern pursuit of towers.
            </p>
          </div>

          {/* 媒体：视频 + 竖排图片 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1.mp4 视频 */}
            <div style={{ marginBottom: "32px" }}>
              <video
                src="/projects/4/1.mp4"
                controls
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2–10：竖排图片 */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/2.jpg"
                alt="Building a tower image 2"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/3.jpg"
                alt="Building a tower image 3"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/4.jpg"
                alt="Building a tower image 4"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/5.jpg"
                alt="Building a tower image 5"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/6.jpg"
                alt="Building a tower image 6"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/7.jpg"
                alt="Building a tower image 7"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/8.jpg"
                alt="Building a tower image 8"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/4/9.jpg"
                alt="Building a tower image 9"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "40px" }}>
              <img
                src="/projects/4/10.jpg"
                alt="Building a tower image 10"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头样式 & 返回按钮（保持和前几个项目一致） */}
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
          transform: rotate(-45deg) translate(2px, 0px); /* 稍微向右一点居中 */
        }
      `}</style>
    </>
  );
}
