// app/projects/23/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project23Page() {
  const title = "Overprint";
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
              {title}
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
              Mapping Breath Between World and Body
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "750px",
                margin: "0 auto 18px",

              }}
            >
              We once mapped the world to keep it—rivers folded into lines,
              forests pressed into symbols, people as fields of color. Mapping
              was a grammar of possession. Here, it borrows another grammar:
              breath.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "750px",
                margin: "0 auto 18px",

              }}
            >
              Outside, a continuous mirror acts as a self-developing plate.
              Clouds and birdsong stitch across it; wind combs grasses into
              contours; a passerby pauses and longitude softens on the skin. The
              mirror draws no limit—it lends a shared skin where sky, plants,
              and bodies borrow one another’s image: the world as its own
              cartographer.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "750px",
                margin: "0 auto 18px",
 
              }}
            >
              A narrow slit leads within. Light lowers; hearing and smell rise.
              Charred wood holds resin, rain, and a faint sweetness of ash.
              Leaning planes grade from smooth to rough, composing a contour of
              touch. Each hand, shoulder, and breath writes subtle temperatures
              and runnels—hydrographs and isotherms the skin can read.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "750px",
                margin: "0 auto 18px",

              }}
            >
              Outside records how the world passes through us; inside, how we
              remain in the world. Two sensitive maps stand back-to-back,
              endlessly overprinting—a temporary commons revised by weather,
              time, and strangers. We do not possess this place with lines; we
              enter its history with feeling, drawing an open meridian with
              plants, wind, and rain.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                fontWeight: 300,
                color: "#7b7b7b",
                maxWidth: "750px",
                margin: "0 auto",

              }}
            >
              Built as bolted modules with recyclable frames and charred timber,
              the work travels on: timber becomes shade; mirrors, greenhouse
              reflectors. The atlas keeps breathing.
            </p>
          </div>

          {/* 图片区域：全部竖排 */}
          <div style={{ marginTop: "8px" }}>
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/23/1.jpg"
                alt="Overprint — exterior perspective in forest"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/23/2.jpg"
                alt="Overprint — site and section drawing"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/23/3.jpg"
                alt="Overprint — planting palette / ground textures"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/23/4.jpg"
                alt="Overprint — mirror and wall sequence diagrams"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 如果 5.jpg 是图纸/渲染就按顺序展示；没有的话可以删掉这一块 */}
            <div style={{ marginBottom: "30px" }}>
              <img
                src="/projects/23/5.jpg"
                alt="Overprint — additional drawing or detail"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <img
                src="/projects/23/6.jpg"
                alt="Overprint — interior light slit view"
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
