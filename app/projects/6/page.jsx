// app/projects/6/page.jsx
"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Project6Page() {
  const title = "Trees with Amnesia";
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
              fontSize: "120px",
              fontWeight: 700,
              color: "#ffffffff",
              letterSpacing: "0.04em",
              textTransform: "none"
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

            {/* 项目信息行 */}
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
              <div>A Fictional Documentary in Sliced Time</div>
              <div style={{ marginTop: "4px" }}>
                What happens when a tree forgets where it came from?
              </div>
            </div>

            {/* 设计说明：略微收敛，不那么诗意 */}
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
              This project starts from a simple observation: street trees never chose
              to grow in the city. Their roots thread through compacted soil, concrete
              and buried infrastructure, adapting to whatever space is left. Instead
              of framing them as symbols of resilience or nature, the work treats
              them as displaced organisms whose histories are hard to see or record.
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
              In the installation, the tree is removed from its original urban
              context and reimagined through four cast terrain slices. Each section
              represents a different fictional ground condition—a place that never
              existed but could have. Thirty years of growth are translated into a
              sequence of frames, printed onto transparent layers and advanced
              manually like a roll of film. The projector becomes a simple, mechanical
              device for recombining these moments.
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
              The resulting piece sits between documentary and fiction. It uses tools
              associated with scientific imaging—cross-sections, timelines,
              projection—but employs them to construct a speculative narrative rather
              than to verify facts. There is no commentary or final answer. Instead,
              the work asks how urban nature is framed, edited and archived, and what
              is lost when living time is compressed into images.
            </p>
          </div>

          {/* 图片 + 说明文字 */}
          <div style={{ marginTop: "-15px" }}>
            {/* 1.jpg */}
            <div style={{ marginBottom: "24px" }}>
              <img
                src="/projects/6/1.jpg"
                alt="trees with amnesia image 1"
                style={{ width: "100%", display: "block" }}
              />
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: "#b3b3b3ff",
                  maxWidth: "100%",
                  margin: "10px auto 0",
                  textAlign: "justify"
                }}
              >
                The viewer witnesses these temporal shifts not through linear
                progression, but through montage: a fragmented, ambiguous
                pseudo-documentary where time folds, repeats, and questions itself.
                What remains when chronology dissolves? What truths emerge when
                documentation becomes fiction?
              </p>
            </div>

            {/* 2.jpg */}
            <div style={{ marginBottom: "24px" }}>
              <img
                src="/projects/6/2.jpg"
                alt="trees with amnesia image 2"
                style={{ width: "100%", display: "block" }}
              />
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: "#b3b3b3ff",
                  maxWidth: "100%",
                  margin: "10px auto 0",
                  textAlign: "justify"
                }}
              >
                This project begins with an absence—of voice, of space, of purpose. It
                centers on the silent endurance of urban trees, whose roots navigate
                through compacted soils, pipelines, and pavements. In these
                artificial terrains, trees become reluctant performers in a
                choreography not of their choosing.
              </p>
            </div>

            {/* 3.jpg */}
            <div style={{ marginBottom: "24px" }}>
              <img
                src="/projects/6/3.jpg"
                alt="trees with amnesia image 3"
                style={{ width: "100%", display: "block" }}
              />
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: "#b3b3b3ff",
                  maxWidth: "100%",
                  margin: "10px auto 0",
                  textAlign: "justify"
                }}
              >
                By removing the tree from its urban context, this work imagines the
                time of trees in four types of terrain, allowing them to keep growing
                not in soil, but in imaginary slices of ground. These are not real
                spaces, but ones shaped from absence. Each piece is a future that has
                never happened.
              </p>
            </div>

            {/* 4.jpg */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/6/4.jpg"
                alt="trees with amnesia image 4"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 5.jpg */}
            <div style={{ marginBottom: "32px" }}>
              <img
                src="/projects/6/5.jpg"
                alt="trees with amnesia image 5"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 6.jpg */}
            <div style={{ marginBottom: "24px" }}>
              <img
                src="/projects/6/6.jpg"
                alt="trees with amnesia image 6"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* 7.jpg */}
            <div style={{ marginBottom: "40px" }}>
              <img
                src="/projects/6/7.jpg"
                alt="trees with amnesia image 7"
                style={{ width: "100%", display: "block" }}
              />
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: "#b3b3b3ff",
                  maxWidth: "100%",
                  margin: "10px auto 0",
                  textAlign: "justify"
                }}
              >
                This work is not about preserving memory, but about fabricating it.
                Through the blurring of projection, the tension between light and
                surface, and the overlapping of narrative timelines, the project
                becomes a cinematic excavation—an archaeological fiction of nature’s
                quiet rebellion in the urban present.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 小箭头样式 & 返回按钮（沿用 Project3 的样式） */}
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
          transform: rotate(-45deg) 
        }
      `}</style>
    </>
  );
}
