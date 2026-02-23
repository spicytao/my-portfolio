// app/home/page.jsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import HeroSimple from "./HeroSimple";
import ProjectsGrid from "./ProjectsGrid";

export default function HomePage() {
  // 统一的滚动函数：滚到下面的项目区
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 在页面最顶时，向下滚轮也会滚到内容区
  useEffect(() => {
    const onWheel = (e) => {
      if (window.scrollY < 20 && e.deltaY > 0) {
        scrollToWork();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // 如果是从 /about 过来的 /home#work，让它自动平滑滚到下方
  useEffect(() => {
    if (window.location.hash === "#work") {
      setTimeout(scrollToWork, 0);
    }
  }, []);

  return (
    <>
      {/* 顶部固定 toolbar */}
      <header className="topBar">
        <div className="topBar-left">Shengtao Shen</div>
        <nav className="topBar-right">
          <Link href="/about" className="topBar-link">
            About
          </Link>
          {/* 不用 Link，直接用按钮触发同一个滚动函数 */}
          <button
            type="button"
            className="topBar-link"
            onClick={scrollToWork}
          >
            WORK
          </button>
        </nav>
      </header>

      {/* 内容区域：不再往下推，视频顶到最上，topbar 盖在上面 */}
      <div className="pageShell">
        {/* 全屏视频 + 中间打字机，点击也用同一个滚动函数 */}
        <HeroSimple onEnter={scrollToWork} />

        {/* 白色项目区域 */}
        <main className="wrap white">
          {/* 这里 id="work"，所有滚动/跳转都滚到这里 */}
          <section id="work" className="section">
            <h2>Work</h2>
            <ProjectsGrid />
          </section>
        </main>
      </div>
    </>
  );
}
