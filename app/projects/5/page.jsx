// app/projects/5/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project5Page() {
  const title = "Limina";
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

            {/* 副标题 + Layer 1 问句 */}
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
              <div>A cymatic pavilion about identity in flux.</div>

            </div>

            {/* 设计说明三段 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7bff",
                maxWidth: "780px",
                margin: "0 auto"
              }}
            >
              In an age of precision, datafication, and self-surveillance, Limina
              responds to the quiet instability of identity—the gap between who we
              are, who we perform to be, and who we long to become. Rather than using
              technology to classify or correct the self, the pavilion asks what it
              means to lean into ambiguity instead of control.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7bff",
                maxWidth: "780px",
                margin: "18px auto 0"
              }}
            >
              Limina is composed of cymatic water vessels activated by human
              movement. Sensors translate proximity and gesture into modulated sound
              frequencies that ripple through water, generating shifting patterns of
              interference. Light traces these vibrations onto the ceiling, turning
              it into an ephemeral register of the body&apos;s invisible effects. The
              environment never fixes identity as data; it leaves only echoes—a
              choreography of shadows, vibrations, and passing forms.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7bff",
                maxWidth: "780px",
                margin: "18px auto 0"
              }}
            >
              Underlying the project is a belief that ambiguity is not a void but a
              generative force. The pavilion imagines identity and longing as
              thresholds rather than endpoints: conditions of continual crossing.
              Modular, reconfigurable panels let the architecture open, fold, or
              contract like an emotional state. As a practice working across
              architecture, computation, and installation art, we use technology here
              as a medium for resonance and introspection—where bodies shape systems
              and systems mirror bodies, not as metrics, but as patterns of motion,
              presence, and change.
            </p>
          </div>

          {/* 1–8：竖排图片 */}
          <div style={{ marginTop: "24px" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
              <div
                key={num}
                style={{ marginBottom: idx === 7 ? "40px" : "32px" }}
              >
                <img
                  src={`/projects/5/${num}.jpg`}
                  alt={`Limina image ${num}`}
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 小箭头样式 & 返回按钮（白底适配） */}
      <style jsx>{`
        .scroll-arrow {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          border-radius: 999px;
          border: 1px solid #999999;
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
          border: 1px solid #999999;
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
