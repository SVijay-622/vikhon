"use client";
import { motion } from "framer-motion";
import { Code2, Palette, PenTool, Smartphone, TrendingUp, ArrowRight } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const SERVICES = [
  {
    icon: <Code2 size={20} />,
    title: "Web Development",
    description:
      "High-performance React & Next.js applications that load fast, scale effortlessly, and convert visitors into customers.",
    tags: ["React", "Next.js", "TypeScript"],
    price: "From $30",
  },
  {
    icon: <Palette size={20} />,
    title: "UI/UX Design",
    description:
      "Interfaces so intuitive and beautiful that users never want to leave your product.",
    tags: ["Figma", "Prototyping", "Research"],
    price: "From $25",
  },
  {
    icon: <PenTool size={20} />,
    title: "Graphic Design",
    description:
      "Visual identities and brand assets that make you impossible to forget in a crowded market.",
    tags: ["Logo", "Branding", "Print"],
    price: "From $20",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that users open every single day.",
    tags: ["React Native", "Firebase", "iOS", "Android"],
    price: "From $50",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that drive real growth — SEO, social media, paid ads, and analytics.",
    tags: ["SEO", "Social", "Ads", "Analytics"],
    price: "From $30",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-indigo-400 text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
            01 / SERVICES
          </p>
          <h2
            className="font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            <span className="gradient-text">Everything your</span>
            <br />
            <span className="indigo-text">business needs</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl text-base leading-relaxed">
            From concept to launch — we handle every digital touchpoint with
            obsessive attention to quality.
          </p>
        </motion.div>

        {/* Cards */}
        <HoverEffect
          items={SERVICES}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary inline-flex items-center gap-2 group"
            style={{ cursor: "none" }}
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
