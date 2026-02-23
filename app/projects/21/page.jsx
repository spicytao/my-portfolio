// app/projects/21/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project21Page() {
  const title = "Shio";
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
        {/* 第一屏：整页主标题 */}
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
              fontSize: "200px",
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
    Shio
  </h2>

  <div
    style={{
      fontSize: "13px",
      lineHeight: 1.6,
      fontWeight: 400,
      color: "#bfbfbf",
      maxWidth: "760px",
      margin: "0 auto 20px"
    }}
  >
    Waves that Caress the Quiet
  </div>

  <p
    style={{
      fontSize: "14px",
      lineHeight: 1.8,
      fontWeight: 300,
      color: "#7b7b7b",
      maxWidth: "860px",
      margin: "0 auto 18px",

    }}
  >
    After a day of work, when the fingers sink into warm water, Shio
    turns the bathroom as quiet as the sound of the ebbing tide. The
    flowing relief is shaped by the image of the receding sea: gentle
    three-dimensional waves respond to the palm of the hand and the soles
    of the feet with a faint resistance that gradually loosens the body.
    Fine grooves hold a thin membrane of water that stretches into delicate
    threads, guiding the flow as it slips and pools. When dry, the surface
    is crisp to the touch; when wet, it becomes deep and velvety, filling
    the space with a calm, tactile atmosphere. Glazes shift from sea-salt
    blue to milky white in subtle gradations, catching light on the ridges,
    sinking into the damp valleys, then drying into a soft shimmer like a
    fragment of a wave in an ukiyo-e print.
  </p>

  <p
    style={{
      fontSize: "14px",
      lineHeight: 1.8,
      fontWeight: 300,
      color: "#7b7b7b",
      maxWidth: "860px",
      margin: "0 auto",

    }}
  >
    Hexagonal modules can rotate freely, and their orientation gently
    redirects the “tide” across the walls, greenery, and inside the
    bathtub, connecting them in a single drawn gesture. Water scatters,
    gathers, and finally comes to rest in quiet streams. The pieces are
    easy to handle, keeping daily maintenance light while allowing nuanced
    spatial compositions rather than dramatic effects. Through orientation,
    rhythm, and the choreography of touch, water lingers a little longer
    and the surface becomes softer and more intimate. In the evening, this
    small ritual transforms bathing from a mere act of washing into a slow,
    contemplative process—one that clarifies the mind as the waves of Shio
    caress the silence.
  </p>
</div>


          {/* 图片区域：全部竖排 */}
          <div style={{ marginTop: "8px" }}>
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/21/1.jpg"
                alt="Shio — module drawing and profile"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/21/2.jpg"
                alt="Shio — single ceramic tile"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/21/3.jpg"
                alt="Shio — cluster of tiles"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/21/4.jpg"
                alt="Shio — tiled surface pattern"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/21/5.jpg"
                alt="Shio — installed in bathroom niche"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 公用样式 */}
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
          justifyContent: center;
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
          transform: rotate(-45deg) translate(5px, 5px);
        }
      `}</style>
    </>
  );
}
