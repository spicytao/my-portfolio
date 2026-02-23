// app/projects/1/page.jsx
"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Project1Page() {
  const title = "(Fake)History";
  const router = useRouter();

  // 第二屏内容的引用
  const contentRef = useRef(null);

  // 轮播图图片（3-8）
  const sliderImages = [
    "/projects/1/3.jpg",
    "/projects/1/4.jpg",
    "/projects/1/5.jpg",
    "/projects/1/6.jpg",
    "/projects/1/7.jpg",
    "/projects/1/8.jpg"
  ];
  const total = sliderImages.length;

  // 轮播图的文字说明（关于 Chinatown 虚构历史，同一段复用）
  const sliderCaptions = [
    "In the finished sequence, Manhattan’s Chinatown unfolds as a speculative corridor where the 1912 suffrage march led by Mabel Lee and the 1982 garment workers’ protest echo through one another. These invented streets do not claim historical accuracy; instead they use AI-generated space to keep the memory of marginalised Chinese women moving, even when the archive is incomplete.",
    "In the finished sequence, Manhattan’s Chinatown unfolds as a speculative corridor where the 1912 suffrage march led by Mabel Lee and the 1982 garment workers’ protest echo through one another. These invented streets do not claim historical accuracy; instead they use AI-generated space to keep the memory of marginalised Chinese women moving, even when the archive is incomplete.",
    "In the finished sequence, Manhattan’s Chinatown unfolds as a speculative corridor where the 1912 suffrage march led by Mabel Lee and the 1982 garment workers’ protest echo through one another. These invented streets do not claim historical accuracy; instead they use AI-generated space to keep the memory of marginalised Chinese women moving, even when the archive is incomplete.",
    "In the finished sequence, Manhattan’s Chinatown unfolds as a speculative corridor where the 1912 suffrage march led by Mabel Lee and the 1982 garment workers’ protest echo through one another. These invented streets do not claim historical accuracy; instead they use AI-generated space to keep the memory of marginalised Chinese women moving, even when the archive is incomplete.",
    "In the finished sequence, Manhattan’s Chinatown unfolds as a speculative corridor where the 1912 suffrage march led by Mabel Lee and the 1982 garment workers’ protest echo through one another. These invented streets do not claim historical accuracy; instead they use AI-generated space to keep the memory of marginalised Chinese women moving, even when the archive is incomplete.",
    "In the finished sequence, Manhattan’s Chinatown unfolds as a speculative corridor where the 1912 suffrage march led by Mabel Lee and the 1982 garment workers’ protest echo through one another. These invented streets do not claim historical accuracy; instead they use AI-generated space to keep the memory of marginalised Chinese women moving, even when the archive is incomplete."
  ];

  // 单张图片 1、2 的文字（技术说明）
  const image1Caption =
    "Behind the scenes, we built a pipeline that chains together 3D scanning, AI redrawing, AI motion capture, AI-generated 3D assets, and VR previsualisation. Depth cameras and photogrammetry produce dense point clouds of Chinatown; diffusion models re-render them into grainy archival textures; pose-tracking systems infer riders and crowds from video; generative tools output props, signs, and facades as 3D assets; and a VR scene lets us block the parade, test camera paths, and feel scale before committing to the final render.";
  const image2Caption =
    "On site at the MIT AI Film Hack 2025, we iterated live between XR previews, AI tools and traditional editing, tuning the rhythm of the march so that synthetic movement and historical reference could inhabit the same timeline.";

  // 扩展数组：前后各克隆一张，实现无限轮播
  const extendedImages = [
    sliderImages[total - 1],
    ...sliderImages,
    sliderImages[0]
  ];
  const extendedLength = extendedImages.length; // total + 2

  // sliderIndex 是在 extendedImages 里的下标（0 ~ total+1）
  // 初始为 1，对应真正的第 3 张
  const [sliderIndex, setSliderIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false); // 鼠标悬停时暂停
  const [isAnimating, setIsAnimating] = useState(true); // 控制是否有过渡动画

  // 对外显示用的“真实” index（0~total-1），对应 3~8
  const realIndex = (sliderIndex - 1 + total) % total;

    // 确保 sliderIndex 始终在 0 ~ extendedLength - 1 之间
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


  // 自动播放：每 4 秒切换一张
  useEffect(() => {
    if (isHovering) return; // 悬停时不自动切换
    const timer = setInterval(() => {
      setSliderIndex((prev) => clampIndex(prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovering]);


  // 监听滑动结束：如果滑到了“克隆的 first / last”，瞬间跳回真正的 first / last
  const handleTransitionEnd = () => {
    if (sliderIndex === extendedLength - 1) {
      // 到了最后一个（克隆的第 3 张）
      setIsAnimating(false);
      setSliderIndex(1); // 跳回真正的第 3 张
    } else if (sliderIndex === 0) {
      // 到了第 0 个（克隆的第 8 张）
      setIsAnimating(false);
      setSliderIndex(total); // 跳回真正的第 8 张
    }
  };

  // 取消过渡之后下一帧再打开，避免闪烁
  useEffect(() => {
    if (!isAnimating) {
      const id = requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isAnimating]);

  // 图片说明文字样式（大小与宽度都回到之前）
  const captionStyle = {
    marginTop: "18px",
    fontSize: "14px",
    lineHeight: 1.7,
    fontWeight: 300,
    color: "#555555",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
     textAlign: "justify"  
  };

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
              color: "#000000ff",
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

        {/* 往下滑后的内容 */}
        <section
          ref={contentRef}
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "64px 24px 88px"
          }}
        >
          {/* 居中标题 + 信息 + 设计说明 */}
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

            {/* 三行信息 */}
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
              <div>MIT AI Film Hack 2025</div>
              <div>
                Nominated for{" "}
                <span style={{ fontStyle: "italic" }}>&quot;Best XR Film&quot;</span> and{" "}
                <span style={{ fontStyle: "italic" }}>
                  &quot;Autodesk Movement Award&quot;
                </span>
                .
              </div>
              <div>
                In collaboration with Jianuo Xuan, Haixin Yin, Fei Deng, Zihao Zhang.
              </div>
            </div>

            {/* 设计说明：大小 & 宽度回到原来 */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                fontWeight: 300,
                color: "#7b7b7bff",
                maxWidth: "800px",
                margin: "0 auto"
              }}
            >
              <span style={{ fontStyle: "italic" }}>Dressage: Marching Through Memories</span>{" "}
              treats AI as a way to fabricate a fictive history of Manhattan&apos;s
              Chinatown. Instead of reconstructing past events with documentary
              fidelity, the film assembles point-cloud streets, hallucinated facades and
              reanimated crowds into a continuous procession. Between the 1912 suffrage
              march and the 1982 garment workers&apos; protest, technology becomes a
              lens that lets memory move forward while always facing back toward the
              women who marched first.
            </p>
          </div>

          {/* YouTube 视频 */}
          <div
            style={{
              marginTop: "12px",
              position: "relative",
              paddingBottom: "63%", // 16:9
              height: 0,
              overflow: "hidden"
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/a_uSclceO_Q"
              title="Dressage: Marching Through Memories"
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

          {/* 静态图片 1 + 技术说明 */}
          <div style={{ marginTop: "48px" }}>
            <img
              src="/projects/1/1.jpg"
              alt="Dressage making-of image 1"
              style={{ width: "100%", display: "block" }}
            />
            <p style={captionStyle}>{image1Caption}</p>
          </div>

          {/* 静态图片 2 + 说明 */}
          <div style={{ marginTop: "40px" }}>
            <img
              src="/projects/1/2.jpg"
              alt="Dressage making-of image 2"
              style={{ width: "100%", display: "block" }}
            />
            <p style={captionStyle}>{image2Caption}</p>
          </div>

          {/* 3-8：图片集（自动播放 + 无限向右滑动）+ Chinatown 虚构历史说明 */}
          <div style={{ marginTop: "40px" }}>
            <div
              style={{
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* 滑动轨道 —— 简化成固定 100% 宽度的 slide，避免消失问题 */}
              <div
                style={{
                  display: "flex",
                  transform: `translateX(-${sliderIndex * 100}%)`,
                  transition: isAnimating
                    ? "transform 0.6s ease-in-out"
                    : "none"
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedImages.map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    style={{
                      flex: "0 0 100%"
                    }}
                  >
                    <img
                      src={src}
                      alt={`Dressage Chinatown frame ${idx}`}
                      style={{
                        width: "100%",
                        display: "block"
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* 左右切换按钮 */}
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

            {/* 当前图片的说明文字（讲 Chinatown 虚构历史） */}
            <p style={captionStyle}>{sliderCaptions[realIndex]}</p>

            {/* 小计数器：显示 3~8 */}
            <div
              style={{
                marginTop: "6px",
                fontSize: "11px",
                color: "#9a9a9a",
                textAlign: "center",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              {realIndex + 3} / 8
            </div>
          </div>
        </section>
      </main>

      {/* 样式：返回按钮 + 小箭头 + 轮播箭头 */}
      <style jsx>{`
        .back-button {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 50;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid #999;
          background: rgba(255, 255, 255, 0.88);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(4px);
          opacity: 0.5;
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
          border-top: 2px solid #555;
          border-left: 2px solid #555;
          transform: rotate(-45deg) translateX(1px);
        }

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
          transition: opacity 0.2s ease;
        }

        .scroll-arrow:hover {
          opacity: 1;
        }

        .scroll-arrow-inner {
          width: 10px;
          height: 10px;
          border-left: 2px solid #777;
          border-bottom: 2px solid #777;
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

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: none;
          padding: 0;
          background: rgba(0, 0, 0, 0.45);
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.8;
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
          background: rgba(0, 0, 0, 0.75);
          opacity: 1;
          transform: translateY(-50%) scale(1.03);
        }
      `}</style>
    </>
  );
}
