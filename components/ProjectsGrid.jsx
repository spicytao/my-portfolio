// components/ProjectsGrid.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "(Fake)History",
    img: "/hero/1.jpg",
    href: "/projects/1",
    desc:
      "VR documentary built from 3D point clouds and AI-animated archives."
  },
  {
    title: "Far Sight",
    img: "/hero/2.jpg",
    href: "/projects/2",
    desc:
      "XR rover that scouts burning buildings, streaming a live HUD of survivors and hazards to firefighters."
  },
  {
    title: "Veiled",
    img: "/hero/3.jpg",
    href: "/projects/3",
    desc:
      "Redesign MIT's Long Lounge into a translucent stage, revealing how people temporarily occupy space."
  },
  { 
    title: "Building a Tower", 
    img: "/hero/4.jpg", 
    href: "/projects/4",
    desc: "Architectural performance that enacts the empty race for height, stacking a purposeless tower as today’s urban condition." 
  },
    /*{ 
    title: "Limina", 
    img: "/hero/5.jpg", 
    href: "/projects/5",
    desc: "Immersive light–water–sound environment where your movement ripples the room in real time." 
  }, */
  { 
    title: "Trees with Amnesia", 
    img: "/hero/6.jpg", 
    href: "/projects/6",
    desc: "Speculative documentary tracing a street tree’s fictional past through sliced terrains and projected time." 
  },  
  { 
    title: "Framed Curvature", 
    img: "/hero/7.jpg", 
    href: "/projects/7",
    desc: "Textile tension and planar panelization choreograph curvature into a frame-scripted surface." 
  },
  { 
    title: "Soft Exoskeleton", 
    img: "/hero/25.jpg", 
    href: "/projects/25",
    desc: "A metal mesh sleeve tuned through density and directional tension, forming wave-like ribs." 
  },
  { 
    title: "Cocooning", 
    img: "/hero/26.jpg", 
    href: "/projects/26",
    desc: "A suspended gauze enclosure reframes “self-binding” as an active, gentle threshold." 
  },
  { 
    title: "Ritual Wind", 
    img: "/hero/27.jpg", 
    href: "/projects/27",
    desc: "A performance garment that uses layered drape and fringe to extend the dancer’s body into space." 
  },

  { 
    title: "Empty Step", 
    img: "/hero/8.jpg", 
    href: "/projects/8",
    desc: "A non-functional stair that repeats into a spatial frame of suspended potential." 
  },  
  
  { 
    title: "The Seaport Saga", 
    img: "/hero/17.jpg", 
    href: "/projects/17",
    desc: "Multiplayer strategy card game staging South Boston Seaport’s gentrification as a contested urban future. " 
  },
  { 
    title: "Folded Continuum", 
    img: "/hero/9.jpg", 
    href: "/projects/9",
    desc: "A scalar-ambiguous lattice grown from a single folded contour, oscillating between mesh and solid." 
  },  

    { 
    title: "Air Vessel", 
    img: "/hero/28.jpg", 
    href: "/projects/28",
    desc: "An inflatable vase where emptiness becomes structure: a flat pattern stands into volume in one breath." 
  },
  { 
    title: "Over Growth", 
    img: "/hero/29.jpg", 
    href: "/projects/29",
    desc: "A repeatable woven module accumulates into a self-supporting column, shaped by compression and daylight." 
  },
  { 
    title: "Wind's Skirt", 
    img: "/hero/30.jpg", 
    href: "/projects/30",
    desc: "Pleated cloth between trees makes wind visible through drifting folds." 
  },
  { 
    title: "The Fading Herald", 
    img: "/hero/10.jpg", 
    href: "/projects/10",
    desc: "Self-supporting biodegradable furniture mediating human–wildlife exchange as it slowly returns to the forest." 
  },
  { 
    title: "Equilibra", 
    img: "/hero/11.jpg", 
    href: "/projects/11",
    desc: "CNC-formed timber “stones” choreograph a poised equilibrium, translating a riverbank cairn into furniture." 
  },
  { 
    title: "Chimera", 
    img: "/hero/12.jpg", 
    href: "/projects/12",
    desc: "Sculpture of hybridity where steel and leather lock in tense coexistence, staging fear at the edge of becoming." 
  },
  { 
    title: "Gentrification Vaccine", 
    img: "/hero/13.jpg", 
    href: "/projects/13",
    desc: "Anti-gentrification housing reimagining Long Beach’s Westside as an equitable waterfront." 
  },
  { 
    title: "As If, As Not", 
    img: "/hero/14.jpg", 
    href: "/projects/14",
    desc: "Interfaith chapel between city and forest, staging belief, doubt, and renewed perception as a quiet spatial ritual." 
  },
  { 
    title: "Tide to Cloud", 
    img: "/hero/15.jpg", 
    href: "/projects/15",
    desc: "Climate museum on the Thames that choreographs tidal water into clouds, turning invisible climate into form." 
  },
  { 
    title: "Shy Parasite", 
    img: "/hero/16.jpg", 
    href: "/projects/16",
    desc: "Parasitic circulation sleeve subtly rewiring an MIT building while hiding within a continuous new skin." 
  },

  { 
    title: "Plant to Plate", 
    img: "/hero/18.jpg", 
    href: "/projects/18",
    desc: "Urban food infrastructure linking cultivation and consumption, envisioning a post-agricultural city." 
  },
   
  /* {
    title: "Stairscapes", 
    img: "/hero/19.jpg", 
    href: "/projects/19",
    desc: "Modular stair units forming chromatic micro-architectures where color and form coevolve." 
  }, 
  { 
    title: "Warped Grid", 
    img: "/hero/20.jpg", 
    href: "/projects/20",
    desc: "Warped Cartesian lattice tracing spatial curvature and layered optical ambiguity in three dimensions." 
  }*/,
  { 
    title: "Shio", 
    img: "/hero/21.jpg", 
    href: "/projects/21",
    desc: "Modular ceramic relief choreographing water into quiet tidal textures, turning bathing into a tactile ritual." 
  }, 
  { 
    title: "Trace", 
    img: "/hero/22.jpg", 
    href: "/projects/22",
    desc: "Tactile rubbings of weathered traces translate erosion, growth, and flow into quiet narratives of nature." 
  },
  { 
    title: "Overprint", 
    img: "/hero/23.jpg", 
    href: "/projects/23",
    desc: "Immersive installation where mirror and charred timber map breath, weather, and touch into a living cartography." 
  },
  { 
    title: "Woven Memories", 
    img: "/hero/24.jpg", 
    href: "/projects/24",
    desc: "Community-woven installation in Yulin 2 Lane that stitches wool, old objects, and memory into a living urban fabric." 
  }
];

export default function ProjectsGrid() {
  return (
    <>
      <section className="wrap">
        <div className="grid">
          {projects.map((p, i) => (
            <motion.article
              key={`${p.title}-${i}`}
              className="card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: (i % 3) * 0.05 }}
            >
              <a className="thumbWrap" href={p.href} aria-label={p.title}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width:1280px) 24vw, (min-width:900px) 30vw, 40vw"
                  priority={i < 3}
                />
              </a>
              <h3 className="title">{p.title}</h3>
              <p className="desc">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <style jsx>{`
        :global(:root){
          --wrap-x: clamp(24px, 8vw, 120px);
          --col-gap: clamp(28px, 5vw, 50px);
          --row-gap: clamp(30px, 6vw, 60px);
          --thumb-radius: 0;
        }

        .wrap{
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(28px, 6vw, 80px) var(--wrap-x);
          background: #fff;
        }

        .grid{
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--row-gap) var(--col-gap);
        }
        @media (min-width: 900px){
          .grid{ grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1280px){
          .grid{ grid-template-columns: repeat(3, 1fr); }
        }

        .card{
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .thumbWrap{
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: transparent;
          border-radius: var(--thumb-radius);
          display: block;
        }
        .thumbWrap :global(img){
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: grayscale(100%) saturate(0) contrast(1) !important;
          transition: filter 220ms ease, transform 320ms ease;
          will-change: transform, filter;
        }
        .thumbWrap:hover :global(img){
          filter: none !important;
          transform: scale(1.02);
        }

        .title{
          font-size: 16px;
          line-height: 1.45;
          color: #0f0f0f;
          font-weight: 700;
          letter-spacing: 0.01em;
          margin: 6px 0 2px;
        }

        .desc{
          color: #535353ff;
          font-size: 13px;
          line-height: 2;
          max-width: 46ch;
          font-weight: 300;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        :global(body.bg-black) .title,
        :global(body[class*="dark"]) .title{ color: #e9e9e9; }
        :global(body.bg-black) .desc,
        :global(body[class*="dark"]) .desc{ color: #a1a1aa; }

        @media (prefers-reduced-motion: reduce){
          .thumbWrap :global(img){ transition: none; }
        }
      `}</style>
    </>
  );
}
