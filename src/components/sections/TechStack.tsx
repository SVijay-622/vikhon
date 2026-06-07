"use client";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const ROW1 = [
  { title: "React" },
  { title: "Next.js" },
  { title: "TypeScript" },
  { title: "Node.js" },
  { title: "Tailwind CSS" },
  { title: "Framer Motion" },
  { title: "Figma" },
  { title: "MongoDB" },
  { title: "Python" },
  { title: "Django" },
];

const ROW2 = [
  { title: "React Native" },
  { title: "Firebase" },
  { title: "AWS" },
  { title: "Vercel" },
  { title: "PostgreSQL" },
  { title: "Express" },
  { title: "GraphQL" },
  { title: "Adobe Suite" },
  { title: "Three.js" },
  { title: "After Effects" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-zinc-600 text-[11px] tracking-[0.5em] uppercase font-mono mb-3">
            Technologies We Use
          </p>
          <h2
            className="font-black tracking-tight gradient-text"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
          >
            Our Tech Arsenal
          </h2>
        </motion.div>
      </div>

      <div className="space-y-4">
        <InfiniteMovingCards items={ROW1} direction="left" speed="normal" />
        <InfiniteMovingCards items={ROW2} direction="right" speed="normal" />
      </div>
    </section>
  );
}
