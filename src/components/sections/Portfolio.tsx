"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    category: "Web",
    badge: "DEMO PROJECT",
    title: "Restaurant Website",
    description:
      "Modern restaurant site with online menu, gallery, and reservation system.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    gradient: "from-indigo-950 via-indigo-900 to-purple-900",
    accent: "bg-indigo-500",
    letter: "R",
  },
  {
    category: "Design",
    badge: "DEMO PROJECT",
    title: "Brand Identity Kit",
    description:
      "Complete brand system with logo, colors, typography, and guidelines for a modern startup.",
    stack: ["Figma", "Illustrator", "InDesign"],
    gradient: "from-purple-950 via-violet-900 to-indigo-900",
    accent: "bg-purple-500",
    letter: "B",
  },
  {
    category: "Apps",
    badge: "DEMO PROJECT",
    title: "Fitness Tracker App",
    description:
      "Cross-platform mobile app with workout tracking and progress analytics.",
    stack: ["React Native", "Firebase", "Expo"],
    gradient: "from-violet-950 via-purple-900 to-fuchsia-900",
    accent: "bg-violet-500",
    letter: "F",
  },
];

const FILTERS = ["All", "Web", "Design", "Apps"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-32 px-4 bg-[#0A0A0A]">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="font-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              <span className="gradient-text">Built to</span>{" "}
              <span className="indigo-text">impress</span>
            </h2>
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group card-dark overflow-hidden"
              >
                {/* Image placeholder */}
                <div
                  className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-black text-white/10 select-none pointer-events-none"
                      style={{ fontSize: "9rem", lineHeight: 1 }}
                    >
                      {project.letter}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="flex items-center gap-2 text-white font-semibold text-sm bg-indigo-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        View Project <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] bg-black/60 backdrop-blur-sm text-zinc-300 border border-zinc-700/50 font-medium px-3 py-1 rounded-full tracking-wider">
                      {project.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] ${project.accent} text-white font-semibold px-3 py-1 rounded-full tracking-wider`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
