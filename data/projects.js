// data/projects.js
// 用 1..24 作为路径（/projects/1 ... /projects/24），但标题/描述/封面都可以自定义
export const projects = [
  { slug: "1",  title: "你的项目标题 1",  img: "/hero/1.jpg",  desc: "这个项目的简短描述（两行以内）。",  cover: "/hero/1.jpg",  intro: "项目 1 的更长一些的简介……" },
  { slug: "2",  title: "你的项目标题 2",  img: "/hero/2.jpg",  desc: "……",                         cover: "/hero/2.jpg",  intro: "……" },
  { slug: "3",  title: "你的项目标题 3",  img: "/hero/3.jpg",  desc: "……",                         cover: "/hero/3.jpg",  intro: "……" },
  { slug: "4",  title: "你的项目标题 4",  img: "/hero/4.jpg",  desc: "……",                         cover: "/hero/4.jpg",  intro: "……" },
  { slug: "5",  title: "你的项目标题 5",  img: "/hero/5.jpg",  desc: "……",                         cover: "/hero/5.jpg",  intro: "……" },
  { slug: "6",  title: "你的项目标题 6",  img: "/hero/6.jpg",  desc: "……",                         cover: "/hero/6.jpg",  intro: "……" },
  { slug: "7",  title: "你的项目标题 7",  img: "/hero/7.jpg",  desc: "……",                         cover: "/hero/7.jpg",  intro: "……" },
  { slug: "8",  title: "你的项目标题 8",  img: "/hero/8.jpg",  desc: "……",                         cover: "/hero/8.jpg",  intro: "……" },
  { slug: "9",  title: "你的项目标题 9",  img: "/hero/9.jpg",  desc: "……",                         cover: "/hero/9.jpg",  intro: "……" },
  { slug: "10", title: "你的项目标题 10", img: "/hero/10.jpg", desc: "……",                         cover: "/hero/10.jpg", intro: "……" },
  { slug: "11", title: "你的项目标题 11", img: "/hero/11.jpg", desc: "……",                         cover: "/hero/11.jpg", intro: "……" },
  { slug: "12", title: "你的项目标题 12", img: "/hero/12.jpg", desc: "……",                         cover: "/hero/12.jpg", intro: "……" },
  { slug: "13", title: "你的项目标题 13", img: "/hero/13.jpg", desc: "……",                         cover: "/hero/13.jpg", intro: "……" },
  { slug: "14", title: "你的项目标题 14", img: "/hero/14.jpg", desc: "……",                         cover: "/hero/14.jpg", intro: "……" },
  { slug: "15", title: "你的项目标题 15", img: "/hero/15.jpg", desc: "……",                         cover: "/hero/15.jpg", intro: "……" },
  { slug: "16", title: "你的项目标题 16", img: "/hero/16.jpg", desc: "……",                         cover: "/hero/16.jpg", intro: "……" },
  { slug: "17", title: "你的项目标题 17", img: "/hero/17.jpg", desc: "……",                         cover: "/hero/17.jpg", intro: "……" },
  { slug: "18", title: "你的项目标题 18", img: "/hero/18.jpg", desc: "……",                         cover: "/hero/18.jpg", intro: "……" },
  { slug: "19", title: "你的项目标题 19", img: "/hero/19.jpg", desc: "……",                         cover: "/hero/19.jpg", intro: "……" },
  { slug: "20", title: "你的项目标题 20", img: "/hero/20.jpg", desc: "……",                         cover: "/hero/20.jpg", intro: "……" },
  { slug: "21", title: "你的项目标题 21", img: "/hero/21.jpg", desc: "……",                         cover: "/hero/21.jpg", intro: "……" },
  { slug: "22", title: "你的项目标题 22", img: "/hero/22.jpg", desc: "……",                         cover: "/hero/22.jpg", intro: "……" },
  { slug: "23", title: "你的项目标题 23", img: "/hero/23.jpg", desc: "……",                         cover: "/hero/23.jpg", intro: "……" },
  { slug: "24", title: "你的项目标题 24", img: "/hero/24.jpg", desc: "……",                         cover: "/hero/24.jpg", intro: "……" },
];

// 也导出一个便捷的 Map，方便按 slug 拿数据
export const projectBySlug = Object.fromEntries(projects.map(p => [p.slug, p]));
