"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";

const PHRASES = ["extraordinary.", "remarkable.", "unforgettable.", "exceptional."];

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const current = PHRASES[phraseIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && typed.length < current.length) {
      timer = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 75);
    } else if (!deleting && typed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && typed.length > 0) {
      timer = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 40);
    } else {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % PHRASES.length);
    }
    return () => clearTimeout(timer);
  }, [typed, deleting, phraseIdx]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#6366F1"
      />

      <BackgroundBeams className="opacity-40" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/5 px-4 sm:px-5 py-2 rounded-full mb-8 md:mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.45em] text-indigo-300 uppercase font-medium">
            Premium Digital Agency
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-black tracking-tight leading-[1.05] mb-4 text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          We craft the
        </motion.h1>

        {/* Typewriter line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          <span className="font-black tracking-tight leading-[1.05] indigo-text">
            {typed}
          </span>
          <span
            className="inline-block bg-indigo-500 align-middle ml-1"
            style={{
              width: "3px",
              height: "0.75em",
              opacity: cursor ? 1 : 0,
              transition: "opacity 0.1s",
              verticalAlign: "middle",
            }}
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-zinc-400 text-lg sm:text-xl mb-12 tracking-wide"
        >
          Where Service Meets The Extraordinary
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary text-sm font-semibold inline-flex items-center justify-center gap-2 group"
            style={{ cursor: "none" }}
          >
            <span className="flex items-center gap-2">
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="btn-secondary text-sm font-semibold inline-flex items-center justify-center gap-2"
            style={{ cursor: "none" }}
          >
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo("stats")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
        style={{ cursor: "none" }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
