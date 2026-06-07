"use client";
import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { GlobeConfig, Position, WorldProps } from "@/components/ui/globe";

const World = dynamic<WorldProps>(
  () => import("@/components/ui/globe").then((m) => m.World),
  { ssr: false }
);

const GLOBE_CONFIG: GlobeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 13.08, lng: 80.27 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const c = () => colors[Math.floor(Math.random() * colors.length)];

const ARCS: Position[] = [
  { order: 1,  startLat: 13.08,   startLng: 80.27,   endLat: 40.71,   endLng: -74.00,  arcAlt: 0.4, color: c() },
  { order: 2,  startLat: 13.08,   startLng: 80.27,   endLat: 51.50,   endLng: -0.12,   arcAlt: 0.4, color: c() },
  { order: 3,  startLat: 13.08,   startLng: 80.27,   endLat: 25.20,   endLng: 55.27,   arcAlt: 0.2, color: c() },
  { order: 4,  startLat: 13.08,   startLng: 80.27,   endLat: 1.35,    endLng: 103.81,  arcAlt: 0.3, color: c() },
  { order: 5,  startLat: 13.08,   startLng: 80.27,   endLat: 35.68,   endLng: 139.69,  arcAlt: 0.4, color: c() },
  { order: 6,  startLat: 13.08,   startLng: 80.27,   endLat: -33.86,  endLng: 151.20,  arcAlt: 0.5, color: c() },
  { order: 7,  startLat: 13.08,   startLng: 80.27,   endLat: 43.65,   endLng: -79.38,  arcAlt: 0.4, color: c() },
  { order: 8,  startLat: 13.08,   startLng: 80.27,   endLat: 52.52,   endLng: 13.40,   arcAlt: 0.3, color: c() },
  { order: 9,  startLat: 13.08,   startLng: 80.27,   endLat: -23.55,  endLng: -46.63,  arcAlt: 0.6, color: c() },
  { order: 10, startLat: 13.08,   startLng: 80.27,   endLat: 19.07,   endLng: 72.87,   arcAlt: 0.1, color: c() },
  { order: 11, startLat: 13.08,   startLng: 80.27,   endLat: 12.97,   endLng: 77.59,   arcAlt: 0.1, color: c() },
  { order: 12, startLat: 13.08,   startLng: 80.27,   endLat: 28.61,   endLng: 77.20,   arcAlt: 0.2, color: c() },
  { order: 2,  startLat: 51.50,   startLng: -0.12,   endLat: 40.71,   endLng: -74.00,  arcAlt: 0.2, color: c() },
  { order: 3,  startLat: 35.68,   startLng: 139.69,  endLat: 1.35,    endLng: 103.81,  arcAlt: 0.2, color: c() },
  { order: 4,  startLat: 25.20,   startLng: 55.27,   endLat: 51.50,   endLng: -0.12,   arcAlt: 0.3, color: c() },
  { order: 5,  startLat: -33.86,  startLng: 151.20,  endLat: 22.31,   endLng: 114.17,  arcAlt: 0.3, color: c() },
  { order: 6,  startLat: 43.65,   startLng: -79.38,  endLat: 34.05,   endLng: -118.24, arcAlt: 0.1, color: c() },
  { order: 7,  startLat: 52.52,   startLng: 13.40,   endLat: 48.86,   endLng: 2.35,    arcAlt: 0.1, color: c() },
];

// ── Animated counter ─────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let val = 0;
    const step = target / (1500 / 16);
    const t = setInterval(() => {
      val += step;
      if (val >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(val));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const WORDS = [["We", "work", "with"], ["clients", "worldwide."]];

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative flex flex-col md:flex-row md:min-h-screen">
        {/* ── LEFT: text ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center
                     w-full md:w-[42%] order-2 md:order-1
                     px-6 md:px-16 py-16 md:py-24
                     text-center md:text-left"
        >
          {/* Label */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <p className="text-[11px] tracking-[0.3em] text-indigo-400 font-mono uppercase">
              Work With Us
            </p>
          </div>

          {/* Heading */}
          <h2
            className="font-black text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            {WORDS.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                {line.map((word, wi) => (
                  <motion.span
                    key={word + wi}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      delay: 0.2 + (li * line.length + wi) * 0.1,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>

          {/* Para */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0"
          >
            From Chennai to the world. VIKHON partners with businesses across
            the globe to build extraordinary digital experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center justify-center md:justify-start mb-10"
          >
            {[
              { value: 5,   suffix: "+", label: "Projects"     },
              { value: 3,   suffix: "+", label: "Clients"      },
              { value: 100, suffix: "%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-5 first:pl-0 ${i < 2 ? "border-r border-white/10" : ""}`}
              >
                <div className="text-3xl font-black text-white leading-none">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-zinc-500 tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-4"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 px-6 py-3 rounded-full transition-all duration-300 hover:bg-indigo-500 min-h-[48px]"
              style={{ cursor: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 25px rgba(99,102,241,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Start Your Project
              <ArrowRight size={15} />
            </button>

            <a
              href="mailto:hello@vikhon.com"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 min-h-[48px]"
              style={{ cursor: "none" }}
            >
              hello@vikhon.com
              <ArrowRight size={14} className="opacity-60" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Globe ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full md:w-[58%] order-1 md:order-2 h-[420px] md:h-auto"
        >
          {/* Left fade into text on desktop */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10 hidden md:block"
            style={{ background: "linear-gradient(to right,#0A0A0A,transparent)" }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
            style={{ background: "linear-gradient(to top,#0A0A0A,transparent)" }}
          />
          {/* Top fade */}
          <div
            className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
            style={{ background: "linear-gradient(to bottom,#0A0A0A,transparent)" }}
          />

          <div className="w-full h-full">
            <World globeConfig={GLOBE_CONFIG} data={ARCS} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
