"use client";
import { motion } from "framer-motion";
import { Zap, Diamond, Headphones, BadgeDollarSign } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Speed without compromise. Your deadline is our deadline — no exceptions.",
  },
  {
    icon: Diamond,
    title: "Premium Quality",
    desc: "Every pixel, every line of code held to world-class standards.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Real humans, real conversations. Always there when you need us.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "World-class work at startup-friendly prices. Growth shouldn't break the bank.",
  },
];

export default function WhyVikhon() {
  return (
    <section className="py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-indigo-400 text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
              04 / WHY VIKHON
            </p>
            <h2
              className="font-black leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              <span className="gradient-text">Built for results,</span>
              <br />
              <span className="indigo-text">not just looks</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 max-w-md text-base">
              We combine technical mastery with creative vision to deliver
              digital solutions that don&rsquo;t just function — they
              transform. Every project is a mission we take personally.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
              <span className="text-zinc-600 text-sm font-mono italic">
                &ldquo;Victory through the light of time&rdquo;
              </span>
            </div>
          </motion.div>

          {/* Right — 2x2 feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-dark p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300">
                  <f.icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-bold mb-2 text-base">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
