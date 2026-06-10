"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Section = { heading: string; body: string };

export default function PolicyPage({
  label,
  title,
  lastUpdated,
  sections,
}: {
  label: string;
  title: string;
  lastUpdated: string;
  sections: Section[];
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Minimal top bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6"
        style={{
          height: "70px",
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Link
          href="/"
          className="font-black text-xl text-white select-none"
          style={{ letterSpacing: "0.2em" }}
        >
          VIKHON
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-[13px] text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          Back to site
        </Link>
      </header>

      {/* Content */}
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-[11px] tracking-[0.4em] text-indigo-400 font-mono mb-4 uppercase">
              {label}
            </p>
            <h1
              className="font-black leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {title}
            </h1>
            <p className="text-zinc-600 text-sm">
              Last updated: {lastUpdated}
            </p>
            <div
              className="mt-6 h-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(99,102,241,0.6), transparent)",
              }}
            />
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.div
                key={s.heading}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
              >
                <h2 className="text-base font-bold text-white mb-2">
                  {s.heading}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <div
            className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-[11px] text-zinc-700">© 2026 VIKHON</p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-[11px] text-zinc-700 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <span className="text-zinc-800">·</span>
              <Link
                href="/terms"
                className="text-[11px] text-zinc-700 hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
