// app/projects/24/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project24Page() {
  const title = "Woven Memories";
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
                marginBottom: "10px"
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
                margin: "0 auto 18px"
              }}
            >
              Space, Memory and Community Action in Yulin
            </div>

            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 500,
                color: "#555555",
                maxWidth: "840px",
                margin: "0 auto 18px"
              }}
            >
              How can the emotions and memories of the past be preserved in the
              process of urbanization?
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "800px",
                margin: "0 auto 16px",

              }}
            >
              Over the forty years since the 1980s, Yulin in Chengdu has
              undergone continuous waves of growth and renewal, gathering many
              of the questions shared by contemporary Chinese cities under
              globalization: historical preservation, local identity, grassroots
              governance, community building, and public participation.
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
              Woven Memories takes Yulin 2 Lane as its focus, unfolding the
              everyday stories and community initiatives embedded in this
              ordinary yet distinctive neighborhood. Through residents’
              participation, an exhibition of old objects and urban memories is
              curated in situ, transforming them from passive observers into
              co-curators of their own history. Knitted wool spreads across
              façades, railings, and corners, materializing an “urban fabric”
              that stitches together people and place. These woven textures
              recall shared memories, register the warmth that persists amid
              rapid change, and offer a gentle way of holding onto Yulin’s
              emotional landscape as the city continues to evolve.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/1.jpg"
                alt="Woven Memories — street activity in Yulin 2 Lane"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/2.jpg"
                alt="Woven Memories — site diagram"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 3 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/3.jpg"
                alt="Woven Memories — community model workshop"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 4 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/4.jpg"
                alt="Woven Memories — program / activity diagram"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 5 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/5.jpg"
                alt="Woven Memories — resident installing knitted work"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 6 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/6.jpg"
                alt="Woven Memories — existing shop and fabrics"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 7 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/7.jpg"
                alt="Woven Memories — stakeholder diagram"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 8 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/24/8.jpg"
                alt="Woven Memories — knitted exhibition wall"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 9, 10, 11 并排 */}
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
                  src="/projects/24/9.jpg"
                  alt="Woven Memories — alley perspective with installations 1"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/24/10.jpg"
                  alt="Woven Memories — alley perspective with installations 2"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <img
                  src="/projects/24/11.jpg"
                  alt="Woven Memories — interior / courtyard evening render"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 通用样式 */}
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
