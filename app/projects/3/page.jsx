// app/projects/3/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project3Page() {
  const title = "Veiled";
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
              fontSize: "160px",
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
            maxWidth: "1000px",
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
              <div>4.151 Architecture Design Core Studio I</div>
              <div style={{ marginTop: "4px" }}>
                How do we describe an occupied space?
              </div>
            </div>

            {/* 设计说明 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#b3b3b3ff",
                maxWidth: "800px",
                margin: "0 auto"
              }}
            >
              People walk in and out, sit down in the long lounge, stand up, and talk
              with friends. We gain temporary &quot;ownership&quot; of this space.
              &quot;Veiled&quot; is a state, a discussion about the ambiguity of
              architectural space.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#b3b3b3ff",
                maxWidth: "800px",
                margin: "18px auto 0"
              }}
            >
              The new long lounge has become a new display window for MIT Building 7,
              and the building has become a stage for performances. The transformation
              of the interior space and the movement of people form fleeting images.
              &quot;Veiled&quot; is a vague way of communicating inside and outside.
              The two moving walls create different usage scenarios according to
              people&apos;s different needs, aiming to discuss how we create, occupy,
              and influence the space we use. Through the translucent window,
              &quot;Veiled&quot; communicates this narrative to the world beyond
              MIT—to passersby, visitors, and the curious alike.
            </p>
          </div>

          {/* 1–8：正常竖排图片（无文字） */}
          <div style={{ marginTop: "-15px" }}>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/3/1.gif"
                alt="Veiled image 1"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/3/2.jpg"
                alt="Veiled image 2"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/3/3.gif"
                alt="Veiled image 3"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/3/4.gif"
                alt="Veiled image 4"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/3/5.gif"
                alt="Veiled image 5"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/3/6.jpg"
                alt="Veiled image 6"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/3/7.jpg"
                alt="Veiled image 7"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ marginBottom: "40px" }}>
              <img
                src="/projects/3/8.jpg"
                alt="Veiled image 8"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>


      {/* 小箭头样式 & 返回按钮（与项目2保持一致） */}
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
          justifyContent: center;
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
          transform: rotate(-45deg) translate(5px, 5px);
        }
      `}</style>
    </>
  );
}
