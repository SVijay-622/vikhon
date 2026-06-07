"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


// ─── Social icon SVGs ───────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function FiverrIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-1.72 0h-.88v-4.347h.88v4.347zm-2.892-1.661c0 .546-.44.99-.985.99a.99.99 0 0 1 0-1.98c.545 0 .985.444.985.99zM16.6 13.93a1.864 1.864 0 0 0-1.865-1.865 1.864 1.864 0 0 0 0 3.73 1.864 1.864 0 0 0 1.865-1.865zM11.37 0C5.085 0 0 5.085 0 11.37c0 6.286 5.085 11.37 11.37 11.37 6.286 0 11.37-5.084 11.37-11.37C22.74 5.085 17.656 0 11.37 0zm4.691 14.5h-.88v-.428a1.86 1.86 0 0 1-1.35.577 1.864 1.864 0 0 1 0-3.728 1.86 1.86 0 0 1 1.35.578v-.428h.88V14.5zm1.926 0h-.88v-4.347h.88V14.5zm1.72-3.357a.995.995 0 1 0 .002 1.99.995.995 0 0 0-.002-1.99z"/>
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────
const NAVIGATE = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Mobile Apps",
  "Digital Marketing",
];

const SOCIALS = [
  { Icon: InstagramIcon, href: "https://instagram.com/vikhon.studio", label: "Instagram" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/company/vikhon", label: "LinkedIn" },
  { Icon: GitHubIcon, href: "https://github.com/vikhon", label: "GitHub" },
  { Icon: FiverrIcon, href: "https://fiverr.com/vijayandiran", label: "Fiverr" },
];

const CTA_LINE1 = ["Let's", "build", "something"];
const CTA_LINE2 = ["extraordinary", "together."];

// ─── Component ──────────────────────────────────────────────────
export default function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const footerInView = useInView(footerRef, { once: true, margin: "-80px" });

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          PART 1 — Cinematic CTA
      ═══════════════════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        className="bg-[#0A0A0A] py-16 md:py-32 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.3em] text-indigo-400 font-mono mb-6 uppercase"
          >
            Ready to Start?
          </motion.p>

          {/* Word-by-word heading */}
          <h2
            className="font-black text-white leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 6.5vw, 5.5rem)" }}
          >
            {/* Line 1 */}
            <span className="block">
              {CTA_LINE1.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 24 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 */}
            <span className="block">
              {CTA_LINE2.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 24 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>

          {/* Email — the real CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mb-10"
          >
            <a
              href="mailto:hello@vikhon.com"
              className="relative group inline-block text-2xl text-zinc-500 hover:text-white transition-colors duration-300"
              style={{ cursor: "none" }}
            >
              hello@vikhon.com
              <span className="absolute bottom-0 left-0 h-px bg-indigo-500 w-0 group-hover:w-full transition-all duration-500 origin-left" />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="text-sm font-medium text-white bg-indigo-600 px-8 py-4 rounded-full transition-all duration-300 hover:bg-indigo-500 hover:scale-[1.02] min-h-[52px]"
              style={{
                cursor: "none",
                boxShadow: "0 0 30px rgba(99,102,241,0.4)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 40px rgba(99,102,241,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.4)"; }}
            >
              Start a Project
            </button>
            <button
              onClick={() => scrollTo("#portfolio")}
              className="text-sm font-medium text-white border border-white/20 px-8 py-4 rounded-full transition-all duration-300 hover:border-white/60 min-h-[52px]"
              style={{ cursor: "none" }}
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PART 2 — Footer body
      ═══════════════════════════════════════════════════════ */}
      <footer
        ref={footerRef}
        style={{
          backgroundColor: "#050505",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
        className="py-10 md:py-12 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Row 1 — 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1 — Brand */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p
                className="font-black text-lg text-white mb-1"
                style={{ letterSpacing: "0.2em" }}
              >
                VIKHON
              </p>
              <p className="text-[10px] text-zinc-600 tracking-wide leading-snug">
                Where Service Meets<br />The Extraordinary
              </p>

              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-emerald-500 text-xs font-mono">
                  Available for new projects
                </span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2 mt-5">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 transition-all duration-200 hover:text-indigo-400"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      cursor: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                      e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Col 2 — Navigate */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[10px] tracking-[0.25em] text-zinc-600 font-mono mb-4 uppercase">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {NAVIGATE.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-zinc-500 hover:text-white hover:translate-x-0.5 transition-all duration-150 flex min-h-[44px] items-center"
                      style={{ cursor: "none" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 3 — Services */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-[10px] tracking-[0.25em] text-zinc-600 font-mono mb-4 uppercase">
                Services
              </p>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollTo("#services")}
                      className="text-sm text-zinc-500 hover:text-white hover:translate-x-0.5 transition-all duration-150 flex min-h-[44px] items-center"
                      style={{ cursor: "none" }}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 4 — Contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-[10px] tracking-[0.25em] text-zinc-600 font-mono mb-4 uppercase">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@vikhon.com"
                    className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors duration-150 min-h-[44px] flex items-center"
                    style={{ cursor: "none" }}
                  >
                    hello@vikhon.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/918056058965"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors duration-150 min-h-[44px] flex items-center"
                    style={{ cursor: "none" }}
                  >
                    +91 80560 58965
                  </a>
                </li>
                <li className="text-sm text-zinc-600 min-h-[44px] flex items-center">
                  Chennai, Tamil Nadu, India
                </li>
                <li>
                  <a
                    href="https://fiverr.com/vijayandiran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors duration-150 min-h-[44px] flex items-center"
                    style={{ cursor: "none" }}
                  >
                    fiverr.com/vijayandiran
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Row 2 — Bottom bar */}
          <div
            className="pt-6 flex flex-wrap items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <span className="text-[11px] text-zinc-700">© 2026 VIKHON</span>
            <span className="text-[11px] text-zinc-700">Crafted with ♥ in Chennai, India</span>
            <div className="flex items-center gap-3">
              <a
                href="/privacy"
                className="text-[11px] text-zinc-700 hover:text-white transition-colors duration-150"
                style={{ cursor: "none" }}
              >
                Privacy
              </a>
              <span className="text-zinc-800">·</span>
              <a
                href="/terms"
                className="text-[11px] text-zinc-700 hover:text-white transition-colors duration-150"
                style={{ cursor: "none" }}
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
