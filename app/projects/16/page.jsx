// app/projects/16/page.jsx
"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Project16Page() {
  const title = "Shy Parasite";
  const router = useRouter();
  const contentRef = useRef(null);

  const [carousel1Index, setCarousel1Index] = useState(0); // 4–6
  const [carousel2Index, setCarousel2Index] = useState(0); // 9–12

  const carousel1Images = [
    "/projects/16/4.jpg",
    "/projects/16/5.jpg",
    "/projects/16/6.jpg"
  ];

  const carousel2Images = [
    "/projects/16/9.jpg",
    "/projects/16/10.jpg",
    "/projects/16/11.jpg",
    "/projects/16/12.jpg"
  ];

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

  const prev1 = () =>
    setCarousel1Index(
      (i) => (i - 1 + carousel1Images.length) % carousel1Images.length
    );
  const next1 = () =>
    setCarousel1Index((i) => (i + 1) % carousel1Images.length);

  const prev2 = () =>
    setCarousel2Index(
      (i) => (i - 1 + carousel2Images.length) % carousel2Images.length
    );
  const next2 = () =>
    setCarousel2Index((i) => (i + 1) % carousel2Images.length);

  // 自动播放：4–6
  useEffect(() => {
    const id = setInterval(() => {
      setCarousel1Index(
        (i) => (i + 1) % carousel1Images.length
      );
    }, 4000);
    return () => clearInterval(id);
  }, [carousel1Images.length]);

  // 自动播放：9–12
  useEffect(() => {
    const id = setInterval(() => {
      setCarousel2Index(
        (i) => (i + 1) % carousel2Images.length
      );
    }, 4000);
    return () => clearInterval(id);
  }, [carousel2Images.length]);

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
                margin: "0 auto 18px"
              }}
            >
              4.151 Architecture Design Core Studio I
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
              This project proposes a parasitic addition that attaches to the
              circulation spaces of an existing MIT building. It develops a new
              architectural form that is functionally independent but spatially
              dependent—coexisting with the host rather than replacing it.
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
              The addition is designed with a dual character: in section, it
              penetrates and reconfigures parts of the old structure; in
              elevation, a continuous new façade conceals these insertions,
              presenting a unified external image. Spaces transition from public
              to private, and from light to dark, as they extend from the
              exterior into the existing building. Some original spaces are
              reprogrammed, allowing old and new to interact without full
              assimilation.
            </p>
          </div>

          {/* 图片区域 */}
          <div style={{ marginTop: "8px" }}>
            {/* 1 单张 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/16/1.gif"
                alt="Shy Parasite — animated model"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 2 单张 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/16/2.jpg"
                alt="Shy Parasite — concept diagram"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 3 单张 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/16/3.jpg"
                alt="Shy Parasite — site plan"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 4-6 轮播 */}
            <div style={{ marginBottom: "40px" }}>
              <div className="carousel">
                <div className="carousel-image-wrapper">
                  <img
                    src={carousel1Images[carousel1Index]}
                    alt={`Shy Parasite — plan ${carousel1Index + 1}`}
                    style={{ width: "100%", display: "block" }}
                  />
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow-left"
                    onClick={prev1}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow-right"
                    onClick={next1}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                  <div className="carousel-counter">
                    {carousel1Index + 1} / {carousel1Images.length}
                  </div>
                </div>
              </div>
            </div>

            {/* 7 单张 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/16/7.jpg"
                alt="Shy Parasite — section drawing"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 8 单张 */}
            <div style={{ marginBottom: "40px" }}>
              <img
                src="/projects/16/8.jpg"
                alt="Shy Parasite — elevation rendering"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 9-12 轮播 */}
            <div style={{ marginBottom: "10px" }}>
              <div className="carousel">
                <div className="carousel-image-wrapper">
                  <img
                    src={carousel2Images[carousel2Index]}
                    alt={`Shy Parasite — night / model view ${
                      carousel2Index + 1
                    }`}
                    style={{ width: "100%", display: "block" }}
                  />
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow-left"
                    onClick={prev2}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow-right"
                    onClick={next2}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                  <div className="carousel-counter">
                    {carousel2Index + 1} / {carousel2Images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 样式 */}
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

        /* 轮播样式：与其他图片同宽，箭头在左右两边 */
        .carousel {
          width: 100%;
          position: relative;
        }

        .carousel-image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 4px;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          padding: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: background 0.15s ease, transform 0.1s ease,
            box-shadow 0.15s ease, opacity 0.15s ease;
          opacity: 0.75;
        }

        .carousel-arrow-left {
          left: 14px;
        }

        .carousel-arrow-right {
          right: 14px;
        }

        .carousel-arrow:hover {
          background: #ffffff;
          transform: translateY(-50%) translateY(-1px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
          opacity: 1;
        }

        .carousel-counter {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          padding: 2px 10px;
          border-radius: 999px;
          background: rgba(131, 131, 131, 0.5);
          color: #ffffff;
          font-size: 11px;
          letter-spacing: 0.08em;
        }
      `}</style>
    </>
  );
}
