"use client";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, goals, and audience to understand what success looks like for your project. No assumptions — only clarity.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "Wireframes evolve into high-fidelity designs. Every pixel placed with intention, every interaction crafted with care. You see it before we build it.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "Clean, performant code delivered with full transparency. Built to scale, designed to last. We keep you in the loop every step of the way.",
  },
  {
    n: "04",
    title: "Launch",
    description:
      "We deploy, test thoroughly, and support you through go-live and beyond. Your success is our success — the relationship doesn't end at delivery.",
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-20 text-center"
        >
          <p className="text-indigo-400 text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
            03 / PROCESS
          </p>
          <h2
            className="font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            <span className="gradient-text">From idea</span>{" "}
            <span className="indigo-text">to launch</span>
          </h2>
        </motion.div>

        {/* Tracing beam with steps */}
        <TracingBeam className="px-6">
          <div className="flex flex-col gap-10 md:gap-16 pl-2 md:pl-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <span
                      className="font-black indigo-text leading-none"
                      style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
