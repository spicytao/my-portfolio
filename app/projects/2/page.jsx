// app/projects/2/page.jsx
"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Project2Page() {
  const title = "Far Sight";
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

  // --- 9–11 照片集轮播 ---
  const sliderImages = [
    "/projects/2/9.jpg",
    "/projects/2/10.jpg",
    "/projects/2/11.jpg"
  ];
  const total = sliderImages.length;
  const extendedImages = [
    sliderImages[total - 1],
    ...sliderImages,
    sliderImages[0]
  ];
 const extendedLength = extendedImages.length;

  const [sliderIndex, setSliderIndex] = useState(1); // 对应真正的第 1 张
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const realIndex = (sliderIndex - 1 + total) % total;

  const clampIndex = (index) => {
    if (index < 0) return 0;
    if (index > extendedLength - 1) return extendedLength - 1;
    return index;
  };
  const handlePrev = () => {
    setSliderIndex((prev) => clampIndex(prev - 1));
  };

  const handleNext = () => {
    setSliderIndex((prev) => clampIndex(prev + 1));
  };

  // 自动播放
  useEffect(() => {
    if (isHovering) return; // 悬停时不自动切换
    const timer = setInterval(() => {
      setSliderIndex((prev) => clampIndex(prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovering]);

  // 处理克隆首尾
  const handleTransitionEnd = () => {
    if (sliderIndex === extendedImages.length - 1) {
      setIsAnimating(false);
      setSliderIndex(1);
    } else if (sliderIndex === 0) {
      setIsAnimating(false);
      setSliderIndex(total);
    }
  };

  useEffect(() => {
    if (!isAnimating) {
      const id = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isAnimating]);

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
              <div>
                MIT Reality Hack 2025 — Best Social Impact with Qualcomm Technologies
              </div>
              <div style={{ marginTop: "4px" }}>
                GitHub:&nbsp;
                <a
                  href="https://github.com/worth12/RH-2025"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "rgba(205, 205, 205, 1)",
                    textDecoration: "underline"
                  }}
                >
                  https://github.com/worth12/RH-2025
                </a>
              </div>
              <div>
                DevPost:&nbsp;
                <a
                  href="https://devpost.com/software/farsight-caxyd8"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                   color: "rgba(205, 205, 205, 1)",
                    textDecoration: "underline"
                  }}
                >
                  https://devpost.com/software/farsight-caxyd8
                </a>
              </div>
              <div>
                Winners:&nbsp;
                <a
                  href="https://www.mitrealityhack.com/2025-tracks-prizes"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "rgba(205, 205, 205, 1)",
                    textDecoration: "underline"
                  }}
                >
                  https://www.mitrealityhack.com/2025-tracks-prizes
                </a>
              </div>
              <div style={{ marginTop: "4px" }}>
                Team: Shengtao Shen, Yuhan Wang, Sheldon McLeod, Brennan Worth McGarey, Ming Jin
                Yong
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
                margin: "0 auto",

              }}
            >
              The devastating wildfires in Los Angeles exposed how little information
              firefighters often have when entering smoke-filled, collapsing buildings:
              they cannot see who is inside, where fire is spreading, or how toxic the
              air has become. Far Sight is a rover and mixed-reality HUD system that
              scouts ahead of first responders. Equipped with the Qualcomm RB3 Vision
              Development Kit, environmental sensors and an onboard detection model, the
              rover identifies people, pets and fire hotspots while streaming data back
              to a Meta Quest 3 headset.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#b3b3b3ff",
                maxWidth: "800px",
                margin: "18px auto 0",

              }}
            >
              Through the Meta SDKs, firefighters see a heads-up display overlaid on
              their surroundings: icons for detected individuals, temperature and
              air-quality readouts, and cues about where it is safe or dangerous to
              move. By separating sensing and data display from any specific robot
              body, the system can later migrate to drones, quadruped robots, or even
              wearables for first responders, extending its use beyond firefighting to
              disaster relief and industrial safety inspections.
            </p>
          </div>
            {/* YouTube 视频（插在这里，图片前面） */}
          <div
            style={{
              marginTop: "12px",
              marginBottom: "40px",
              position: "relative",
              paddingBottom: "61%", // 16:9
              height: 0,
              overflow: "hidden"
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/uHkHHP-HOhw?start=5"
              title="Far Sight demo video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "0"
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* 1–6：正常竖排图片（无文字） */}
          <div style={{ marginTop: "24px" }}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} style={{ marginBottom: "32px" }}>
                <img
                  src={`/projects/2/${num}.jpg`}
                  alt={`Far Sight image ${num}`}
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "8px",
              marginBottom: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "24px"
            }}
          >
            <div style={{ flex: "1 1 320px" }}>
              <img
                src="/projects/2/5.jpg"
                alt="Far Sight HUD demo"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ flex: "1 1 320px" }}>
              <img
                src="/projects/2/6.jpg"
                alt="Far Sight AR interface"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>

          {/* 7 & 8：左右并排 */}
          <div
            style={{
              marginTop: "8px",
              marginBottom: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "24px"
            }}
          >
            <div style={{ flex: "1 1 320px" }}>
              <img
                src="/projects/2/7.gif"
                alt="Far Sight HUD demo"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ flex: "1 1 320px" }}>
              <img
                src="/projects/2/8.gif"
                alt="Far Sight AR interface"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>

         {/* 9–11：滑动照片集 + 文字 */}
          <div style={{ marginTop: "24px" }}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                marginBottom: "18px",
                background: "#000000",
                minHeight: "260px" // 确保区域不至于完全高度为 0
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                style={{
                  display: "flex",
                  transform: `translateX(-${sliderIndex * 100}%)`,
                  transition: isAnimating ? "transform 0.6s ease-in-out" : "none"
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedImages.map((src, idx) => (
                  <div key={`${src}-${idx}`} style={{ flex: "0 0 100%" }}>
                    <img
                      src={src}
                      alt={`Far Sight event photo ${idx}`}
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>
                ))}
              </div>

                            {/* 左右按钮，箭头用 span 往上挪一点 */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12px",
                  transform: "translateY(-50%)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "999px",
                  border: "none",
                  padding: 0,
                  background: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  opacity: 0.85
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    transform: "translateY(-1px)" // ⬅ 只把箭头往上挪一点
                  }}
                >
                  ‹
                </span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "12px",
                  transform: "translateY(-50%)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "999px",
                  border: "none",
                  padding: 0,
                  background: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  opacity: 0.85
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    transform: "translateY(-1px)" // ⬅ 同样往上挪
                  }}
                >
                  ›
                </span>
              </button>
            </div>

            {/* 计数器移到文字上方 */}
            <div
              style={{
                fontSize: "13px",
                color: "#888888",
                textAlign: "center",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "6px"
              }}
            >
              {realIndex + 1} / 3
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#d0d0d0",
                maxWidth: "100%",
                margin: "0 auto 6px",
                textAlign: "justify"
              }}
            >
              The final photos capture moments from MIT Reality Hack 2025: testing the
              rover in hallways, presenting on stage, and working side by side in the
              hacking space. They trace the project from an idea on a whiteboard to a
              functional prototype recognised for social impact.
            </p>
          </div>
        </section>
      </main>

      {/* 小箭头样式 & 轮播按钮 & 返回按钮 */}
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
          transform: rotate(-45deg) translateX(1px);
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: none;
          padding: 0;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.85;
          backdrop-filter: blur(4px);
          transition: background 0.2s ease, transform 0.15s ease,
            opacity 0.2s ease;
        }

        .carousel-arrow-left {
          left: 12px;
        }

        .carousel-arrow-right {
          right: 12px;
        }

        .carousel-arrow:hover {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transform: translateY(-50%) scale(1.05);
        }
      `}</style>
    </>
  );
}
