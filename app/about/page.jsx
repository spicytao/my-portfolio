// app/about/page.jsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  // 和 home 页类似的统一滚动函数：滚到 awards 区
  const scrollToAwards = () => {
    const el = document.getElementById("awards");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 在页面最顶时，向下滚轮也会滚到 awards 区
  useEffect(() => {
    const onWheel = (e) => {
      if (window.scrollY < 20 && e.deltaY > 0) {
        scrollToAwards();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // 如果是 /about#awards，进入页面后自动平滑滚动下去
  useEffect(() => {
    if (window.location.hash === "#awards") {
      setTimeout(scrollToAwards, 0);
    }
  }, []);

  return (
    <>
      {/* 顶部导航，保持和别的页面一样 */}
      <header className="topBar">
        <div className="topBar-left">SHENGTAO SHEN</div>
        <nav className="topBar-right">
          <Link href="/about" className="topBar-link">
            ABOUT
          </Link>
          <Link href="/#work" className="topBar-link">
            WORK
          </Link>
        </nav>
      </header>

      <main className="aboutPage">
        {/* 第一屏：黑底，左图右文 */}
        <section className="aboutHero" id="top">
          <div className="aboutHeroInner">
            {/* 左侧卡片图片：把图片放在 /public/images/about-card.png */}
            <div className="aboutHeroCard">
              <div className="aboutHeroCardFrame">
                <img
                  src="/images/about-card.png"
                  alt="Portrait of Shengtao Shen"
                  className="aboutHeroCardImg"
                />
              </div>
            </div>

<div className="aboutHeroText">
  <p>
    I am a designer and researcher working at the intersection of architecture, interactive media, AI, and spatial computing. My practice focuses on how emerging technologies—augmented and mixed reality, real-time sensing, and digital fabrication—can be used to prototype new kinds of spatial interfaces and experiences rather than just new screens.
  </p>
  <p>
    Across installations, experimental structures, XR environments, and furniture-scale prototypes, I work end-to-end from concept and interaction flows to physical making and technical implementation. This has included projects realized in China, the United States, Japan, Slovenia, and New Zealand, often in collaboration with teams that span architecture, computation, and the arts. I am particularly interested in how tools from computer vision, machine learning, and responsive media can register and reshape the emotional memory of space.
  </p>
  <p>
    I am currently based in Boston, pursuing my MArch at MIT and working along the boundaries of architecture, interactive systems, and cross-disciplinary art practice.
  </p>
<p>
  Contact me:{' '}
  <a href="mailto:sstheo@mit.edu" className="aboutEmail">
    sstheo@mit.edu
  </a>
</p>

</div>

          </div>

          {/* 中下方一句 pixel 风句子和段落 */}
          <div className="aboutHeroBottom">
            <p className="aboutHeroTagline">
              I turn speculative spaces into tangible experiences.
            </p>
            <p className="aboutHeroDescription">
              I build bridges between digital intelligence and physical space, developing interactive prototypes that link architectural form, computation, and embodied experience.
            </p>
          </div>

<button
  type="button"
  className="aboutScrollArrow"
  aria-label="Scroll to awards"
  onClick={scrollToAwards}
>
  <span className="aboutScrollArrowIcon" />
</button>

        </section>

<section id="awards" className="aboutAwards">
  <div className="aboutAwardsTop">
    <h2 className="aboutAwardsTitle">Awards &amp; Honors</h2>
    {/* 右上角可以放一个跳转到完整简历的链接，不需要可以删掉 */}
    {/* <a
      href="https://your-cv-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="aboutAwardsMore"
    >
      Full CV →
    </a> */}
  </div>

  {/* 表头 */}
  <div className="aboutAwardsHeadRow aboutAwardsRow">
    <div className="aboutAwardsHeadCell">Award</div>
    <div className="aboutAwardsHeadCell">Location</div>
    <div className="aboutAwardsHeadCell">Year</div>
  </div>

  {/* 表格内容：每一行一个 a 标签，可以点击去官网 */}
  <div className="aboutAwardsTable">
    <a
      className="aboutAwardsRow aboutAwardsRow-link"
      href="https://www.tvambienti.si/20/10/2025/festival-lesa-2025-poklon-pragozdom-ustvarjalnosti-in-oblikovanju/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aboutAwardsCell aboutAwardsCell-main">
        Expressive Design Award, The 11th International Industrial Design Competition (Prime) Chair
      </div>
      <div className="aboutAwardsCell">Kočevje, Slovenia</div>
      <div className="aboutAwardsCell">2025</div>
    </a>

    <a
      className="aboutAwardsRow aboutAwardsRow-link"
      href="https://www.kagu-higashikawa.jp/en/winners2024/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aboutAwardsCell aboutAwardsCell-main">
        Excellence Award, 4th “Kengo Kuma & Higashikawa” KAGU Design Competition
      </div>
      <div className="aboutAwardsCell">Higashikawa, Japan</div>
      <div className="aboutAwardsCell">2025</div>
    </a>

    <a
      className="aboutAwardsRow aboutAwardsRow-link"
      href="https://mitaifilmhack.com/winners/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aboutAwardsCell aboutAwardsCell-main">
        Autodesk Movement Award & Best XR Film, MIT AI Film Hack 2024
      </div>
      <div className="aboutAwardsCell">Cambridge, USA</div>
      <div className="aboutAwardsCell">2025</div>
    </a>

        <a
      className="aboutAwardsRow aboutAwardsRow-link"
      href="https://www.realityhackatmit.com/2025-tracks-prizes"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aboutAwardsCell aboutAwardsCell-main">
        Best Social Impact using Qualcomm Technologies, MIT Reality Hack 2025
      </div>
      <div className="aboutAwardsCell">Cambridge, USA</div>
      <div className="aboutAwardsCell">2025</div>
    </a>

            <a
      className="aboutAwardsRow aboutAwardsRow-link"
      href="https://www.asla.org/2023studentawards/8339.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aboutAwardsCell aboutAwardsCell-main">
        Honor Award in Residential Design Category, ASLA Student Award 2023
      </div>
      <div className="aboutAwardsCell">Minneapolis, USA</div>
      <div className="aboutAwardsCell">2023</div>
    </a>

                <a
      className="aboutAwardsRow aboutAwardsRow-link"
      href="https://worldlandscapearchitect.com/2023-wla-student-awards-winners/?v=0b3b97fa6688"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aboutAwardsCell aboutAwardsCell-main">
        Honor Award in CONCEPT - Small Design Category, WLA Student Award 2023
      </div>
      <div className="aboutAwardsCell"> / </div>
      <div className="aboutAwardsCell">2023</div>

    </a>
                    <a
      className="aboutAwardsRow aboutAwardsRow-link"
      href="https://www.facebook.com/NUWAONbS/posts/hey-auckland-people-see-you-tonight-at-530-wg-building-aut-mayoral-drive-to-open/305395265213797/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aboutAwardsCell aboutAwardsCell-main">
        Finalist, NUWAO International Design Competition
      </div>
      <div className="aboutAwardsCell"> Auckland, New Zealand </div>
      <div className="aboutAwardsCell">2023</div>
    </a>

    {/* 再往下复制 a.aboutAwardsRow，多加几行即可 */}
  </div>
</section>

      </main>
    </>
  );
}
