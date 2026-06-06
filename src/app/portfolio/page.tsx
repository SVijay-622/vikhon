'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Code2, ArrowRight } from 'lucide-react'

const projects = [
  { id: 1, title: 'ShopElite — E-Commerce Platform', description: 'A full-featured online store with dynamic product catalog, cart, Stripe checkout, and admin dashboard.', category: 'web', tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'], bg: 'from-blue-900/50 to-indigo-950/70', live: '#', github: '#' },
  { id: 2, title: 'TableReserve — Booking App', description: 'Real-time restaurant reservation system with table management, SMS confirmations, and analytics.', category: 'web', tech: ['React', 'Node.js', 'MongoDB', 'Twilio'], bg: 'from-emerald-900/50 to-teal-950/70', live: '#', github: '#' },
  { id: 3, title: 'Monarch — Brand Identity', description: 'Complete luxury brand identity: logo, typography, color system, packaging, and brand guidelines.', category: 'design', tech: ['Illustrator', 'Figma', 'InDesign'], bg: 'from-amber-900/50 to-orange-950/70', live: '#', github: null },
  { id: 4, title: 'FitTrack — Fitness App', description: 'Cross-platform mobile fitness tracker with workout plans, progress charts, and nutrition logging.', category: 'apps', tech: ['React Native', 'Firebase', 'Expo'], bg: 'from-violet-900/50 to-purple-950/70', live: '#', github: '#' },
  { id: 5, title: 'Artisan Portfolio', description: 'Minimalist creative portfolio with scroll animations, dark mode, and blazing-fast performance.', category: 'web', tech: ['Next.js', 'Framer Motion', 'Tailwind'], bg: 'from-rose-900/50 to-pink-950/70', live: '#', github: '#' },
  { id: 6, title: 'Pulse Dashboard — UI Kit', description: 'SaaS analytics dashboard UI with 40+ components, dark/light modes, and complete design tokens.', category: 'design', tech: ['Figma', 'Adobe XD', 'Storybook'], bg: 'from-cyan-900/50 to-sky-950/70', live: '#', github: null },
]

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web' },
  { value: 'design', label: 'Design' },
  { value: 'apps', label: 'Apps' },
]

function Divider() {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/25" />
      <span className="mx-6 text-[#C9A84C]/40 tracking-widest text-sm">◆ ◆ ◆</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/25" />
    </div>
  )
}

export default function PortfolioPage() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-4">Our Work</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="section-title gold-text mb-5">Portfolio</motion.h1>
          <Divider />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-4)' }}>
            A showcase of projects where creativity meets technical excellence. Each piece represents our commitment to delivering the extraordinary.
          </motion.p>
        </div>
      </section>

      {/* ═══ FILTER + GRID ═══ */}
      <section className="pb-28 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((f) => (
              <button key={f.value} onClick={() => setActive(f.value)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  active === f.value
                    ? 'bg-[#C9A84C] text-black shadow-[0_0_20px_rgba(201,168,76,0.35)]'
                    : 'border border-[#C9A84C]/25 hover:border-[#C9A84C]/60 hover:text-[#C9A84C]'
                }`}
                style={active !== f.value ? { color: 'var(--text-3)' } : {}}>
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((p) => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35 }}
                  className="card-vikhon group overflow-hidden flex flex-col">
                  {/* Thumbnail */}
                  <div className={`h-52 bg-gradient-to-br ${p.bg} border-b border-[#C9A84C]/10 relative flex items-center justify-center overflow-hidden`}>
                    <span className="text-[#C9A84C]/8 font-black select-none" style={{ fontSize: '6rem', lineHeight: 1 }}>
                      {p.title.charAt(0)}
                    </span>
                    <span className="absolute top-3 right-3 text-[11px] bg-[#C9A84C] text-black px-2.5 py-0.5 rounded font-semibold tracking-wider capitalize">
                      {p.category}
                    </span>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a href={p.live} className="w-10 h-10 bg-[#C9A84C] text-black rounded-full flex items-center justify-center hover:bg-[#E8C96A] transition-colors" aria-label="Live demo">
                        <ExternalLink size={16} />
                      </a>
                      {p.github && (
                        <a href={p.github} className="w-10 h-10 border border-white/30 text-white rounded-full flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors" aria-label="GitHub">
                          <Code2 size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold mb-2 group-hover:text-[#C9A84C] transition-colors duration-300 text-sm"
                      style={{ color: 'var(--text-1)' }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-4)' }}>{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[11px] border border-[#C9A84C]/20 text-[#C9A84C]/70 px-2 py-0.5 rounded-sm">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-3 border-t border-[#C9A84C]/10">
                      <a href={p.live} className="flex items-center gap-1.5 text-[#C9A84C] text-[11px] tracking-widest uppercase hover:text-[#E8C96A] transition-colors">
                        <ExternalLink size={12} /> Live Demo
                      </a>
                      {p.github && (
                        <a href={p.github} className="flex items-center gap-1.5 text-[11px] tracking-widest uppercase hover:text-[#C9A84C] transition-colors"
                          style={{ color: 'var(--text-3)' }}>
                          <Code2 size={12} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-4 border-t border-[#C9A84C]/10" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-1)' }}>
            Ready to build something <span className="gold-text">extraordinary?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }} className="mb-8" style={{ color: 'var(--text-4)' }}>
            Your project could be the next featured work in our portfolio. Let&rsquo;s talk.
          </motion.p>
          <Link href="/contact" className="btn-gold text-xs tracking-widest uppercase inline-flex items-center gap-2">
            Start a Project <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
