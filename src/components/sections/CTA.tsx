"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

export default function CTA() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden bg-[#0A0A0A]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-950/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      {/* Meteors */}
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={25} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
            Ready to Begin?
          </p>

          <h2
            className="font-black tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            <span className="gradient-text">Ready to build</span>
            <br />
            <span className="gradient-text">something</span>
            <br />
            <span className="indigo-text">extraordinary?</span>
          </h2>

          <p className="text-zinc-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Your vision deserves more than average. Let&rsquo;s create
            something the world has never seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary text-sm font-semibold inline-flex items-center justify-center gap-2 group"
              style={{ cursor: "none" }}
            >
              <span className="flex items-center gap-2">
                Start Your Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
            <a
              href="https://wa.me/918056058965"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm font-semibold inline-flex items-center justify-center gap-2"
              style={{ cursor: "none" }}
            >
              Schedule a Call
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-600 text-sm">
            <a
              href="mailto:hello@vikhon.com"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              style={{ cursor: "none" }}
            >
              <Mail size={14} />
              hello@vikhon.com
            </a>
            <span className="text-zinc-800">•</span>
            <a
              href="tel:+918056058965"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              style={{ cursor: "none" }}
            >
              <Phone size={14} />
              +91 80560 58965
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
