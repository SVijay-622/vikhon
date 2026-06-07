"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    category: "Web",
    badge: "LIVE PROJECT",
    live: true,
    url: "https://ashwinsv.netlify.app",
    title: "Ashwin SV — Portfolio",
    client: "Ashwin SV · Graphic Designer",
    description:
      "Dark, editorial designer portfolio with massive typographic hero, scrolling marquee, and a service showcase built to make the designer's brand unforgettable.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    image: "/portfolio/ashwin-sv.png",
    gradient: "from-zinc-900 via-zinc-800 to-neutral-900",
    accent: "bg-emerald-600",
    letter: "A",
  },
  {
    category: "Web",
    badge: "LIVE PROJECT",
    live: true,
    url: "https://www.twelvea.in/",
    title: "TwelveA Code and Design",
    client: "TwelveA · Design & Development Agency",
    description:
      "Agency website for a 6-person design & development studio — bold purple branding, stats showcase (100+ projects, 50+ clients), portfolio grid, and testimonials.",
    stack: ["Web Design", "Development", "Branding"],
    image: "/portfolio/twelvea.png",
    gradient: "from-slate-900 via-blue-950 to-slate-900",
    accent: "bg-violet-600",
    letter: "T",
  },
  {
    category: "Web",
    badge: "DEMO PROJECT",
    live: false,
    url: null,
    title: "Restaurant Website",
    client: null,
    description:
      "Modern restaurant site with online menu, gallery, and reservation system.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    image: null,
    gradient: "from-indigo-950 via-indigo-900 to-purple-900",
    accent: "bg-indigo-500",
    letter: "R",
  },
  {
    category: "Design",
    badge: "DEMO PROJECT",
    live: false,
    url: null,
    title: "Brand Identity Kit",
    client: null,
    description:
      "Complete brand system with logo, colors, typography, and guidelines for a modern startup.",
    stack: ["Figma", "Illustrator", "InDesign"],
    image: null,
    gradient: "from-purple-950 via-violet-900 to-indigo-900",
    accent: "bg-purple-500",
    letter: "B",
  },
];

const FILTERS = ["All", "Web", "Design"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-16 md:py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
            02 / OUR WORK
          </p>
          <h2
            className="font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            <span className="gradient-text">Built to</span>{" "}
            <span className="indigo-text">impress</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-indigo-500/40 hover:text-white"
              }`}
              style={{ cursor: "none" }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const CardTag = project.live ? "a" : "div";
              const liveProps = project.live
                ? { href: project.url!, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <CardTag
                    {...liveProps}
                    className="group card-dark overflow-hidden block"
                    style={{ cursor: "none", textDecoration: "none" }}
                  >
                    {/* Thumbnail */}
                    <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                      {/* Real screenshot */}
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}

                      {/* Fallback letter (shown when no image) */}
                      {!project.image && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="font-black text-white/10 select-none pointer-events-none"
                            style={{ fontSize: "9rem", lineHeight: 1 }}
                          >
                            {project.letter}
                          </span>
                        </div>
                      )}

                      {/* Dark gradient overlay at bottom (for image cards) */}
                      {project.image && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/25 transition-all duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <span className="flex items-center gap-2 text-white font-semibold text-sm bg-indigo-600/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            {project.live ? "Visit Site" : "View Project"}{" "}
                            <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>

                      {/* Live / Demo badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`text-[10px] backdrop-blur-sm font-medium px-3 py-1 rounded-full tracking-wider border ${
                            project.live
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                              : "bg-black/60 text-zinc-300 border-zinc-700/50"
                          }`}
                        >
                          {project.badge}
                        </span>
                      </div>

                      {/* Category pill */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`text-[10px] ${project.accent} text-white font-semibold px-3 py-1 rounded-full tracking-wider`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6">
                      {project.client && (
                        <p className="text-[11px] text-emerald-500 font-mono mb-1 tracking-wide">
                          {project.client}
                        </p>
                      )}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] text-indigo-400/70 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardTag>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
