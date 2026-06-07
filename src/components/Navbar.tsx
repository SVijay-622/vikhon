"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/vikhon.studio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/vikhon" },
  { label: "GitHub", href: "https://github.com/vikhon" },
  { label: "Fiverr", href: "https://fiverr.com/vijayandiran" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* ─── Main bar ─────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "70px",
          transition:
            "background 400ms ease, backdrop-filter 400ms ease, border-color 400ms ease, box-shadow 400ms ease",
          background: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
          borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.06)" : "transparent"}`,
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* LEFT — Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-black text-xl text-white select-none"
            style={{
              letterSpacing: "0.2em",
              transition: "letter-spacing 500ms ease",
              cursor: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.letterSpacing = "0.35em"; }}
            onMouseLeave={(e) => { e.currentTarget.style.letterSpacing = "0.2em"; }}
          >
            VIKHON
          </button>

          {/* CENTER — Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative flex flex-col items-center text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-500 hover:text-white"
                  }`}
                  style={{ cursor: "none" }}
                >
                  {link.label}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="mt-[5px] w-1 h-1 rounded-full bg-indigo-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* RIGHT — CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA button */}
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:inline-flex items-center text-[13px] font-medium text-zinc-300 border border-white/20 px-5 py-2 rounded-full transition-all duration-300 hover:border-indigo-500 hover:text-white"
              style={{ cursor: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 15px rgba(99,102,241,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              Let&rsquo;s Talk
            </button>

            {/* Mobile hamburger — 2 lines */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
              aria-label="Toggle menu"
              style={{ cursor: "none" }}
            >
              <motion.span
                className="block w-6 h-[1.5px] bg-white rounded-full origin-center"
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 3.75 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="block w-6 h-[1.5px] bg-white rounded-full origin-center"
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -3.75 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile fullscreen overlay ────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100]"
            style={{
              background: "rgba(3,3,3,0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full flex flex-col"
            >
              {/* Top bar */}
              <div
                className="flex items-center justify-between px-6 flex-shrink-0"
                style={{ height: "70px" }}
              >
                <span
                  className="font-black text-xl text-white select-none"
                  style={{ letterSpacing: "0.2em" }}
                >
                  VIKHON
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-full border border-white/10"
                  style={{ cursor: "none" }}
                  aria-label="Close menu"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M1 1l12 12M13 1L1 13" />
                  </svg>
                </button>
              </div>

              {/* Nav links — centered, staggered */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => scrollTo(link.href)}
                    className="text-white/20 hover:text-white text-4xl font-black py-3 px-6 transition-all duration-200 hover:scale-105"
                    style={{ cursor: "none" }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* Bottom — availability + socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22 }}
                className="px-6 pb-12 flex flex-col items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-emerald-400 text-sm font-mono">
                    Available for new projects
                  </span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] tracking-widest text-zinc-500 hover:text-white transition-colors duration-150"
                      style={{ cursor: "none" }}
                    >
                      {s.label.toUpperCase()}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
