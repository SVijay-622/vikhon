"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Lightbulb, Shield, Zap, Heart } from "lucide-react";

const VALUES = [
  { icon: Lightbulb, title: "Innovation", desc: "We push the boundaries of what's possible in digital." },
  { icon: Shield, title: "Quality", desc: "No shortcuts. Every deliverable is held to the highest standard." },
  { icon: Zap, title: "Speed", desc: "Fast delivery without compromising on craftsmanship." },
  { icon: Heart, title: "Trust", desc: "Transparent communication and honest relationships always." },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0A0A0A]">
      {/* Lamp effect header */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-indigo-400 text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
            05 / ABOUT
          </p>
          <h2
            className="font-black leading-[1.05] tracking-tight gradient-text"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Born to be extraordinary
          </h2>
        </motion.div>
      </LampContainer>

      {/* Brand story */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12 md:pb-20 text-center -mt-16 sm:-mt-24 md:-mt-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 md:mb-16"
        >
          <strong className="text-indigo-300 font-semibold">VIKHON</strong> combines{" "}
          <em>Vijay</em> — meaning <strong className="text-white">Victory</strong> in Tamil — with{" "}
          <em>Khons</em>, the ancient Egyptian god of{" "}
          <strong className="text-white">light and time</strong>. Like our name, we bring the power
          of victory to every digital project we touch. Born in Chennai. Building for the world.
        </motion.p>

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="card-dark p-6 md:p-8 mb-10 md:mb-16 max-w-sm mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-black text-white mx-auto mb-4">
            V
          </div>
          <h3 className="text-white font-bold text-xl mb-1">Vijayandiran S</h3>
          <p className="text-indigo-400 text-sm font-medium mb-4">Founder &amp; Lead Developer</p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {["React", "Next.js", "TypeScript", "Figma"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-indigo-300/70 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Backed by a passionate team of developers and designers ready to bring your vision to life.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-dark p-6 flex items-start gap-4 text-left group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-all duration-300">
                <v.icon size={18} className="text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
