'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Code2, Palette, Pen, Smartphone,
  Zap, ShieldCheck, Headphones, BadgeDollarSign,
  ArrowRight, Star, Quote, ChevronDown,
} from 'lucide-react'

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const typingPhrases = ['Build Websites', 'Design Brands', 'Create Apps', 'Grow Businesses']

const services = [
  { icon: Code2, title: 'Web Development', desc: 'High-performance React & Next.js apps that load fast, scale effortlessly, and convert visitors.', href: '/services' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Interfaces so intuitive and beautiful that users never want to leave your product.', href: '/services' },
  { icon: Pen, title: 'Graphic Design', desc: 'Visual identities and brand assets that make you impossible to forget in a crowded market.', href: '/services' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications that users open every single day.', href: '/services' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
]

const projects = [
  {
    title: 'ShopElite',
    tag: 'E-Commerce',
    desc: 'A full-featured online store with seamless checkout, real-time inventory, and product pages that sell.',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
    from: 'from-blue-900/60',
    to: 'to-indigo-900/60',
  },
  {
    title: 'Monarch',
    tag: 'Brand Identity',
    desc: 'Complete luxury brand system — logo, typography, color palette, and brand guidelines that command respect.',
    tech: ['Figma', 'Illustrator'],
    from: 'from-amber-900/60',
    to: 'to-orange-900/60',
  },
  {
    title: 'FitTrack',
    tag: 'Mobile App',
    desc: 'Cross-platform fitness tracker with workout plans, progress analytics, and nutrition logging.',
    tech: ['React Native', 'Firebase'],
    from: 'from-emerald-900/60',
    to: 'to-teal-900/60',
  },
]

const whyFeatures = [
  { icon: Zap, title: 'Fast Delivery', desc: 'We ship fast without cutting corners. Your deadline is our deadline, period.' },
  { icon: ShieldCheck, title: 'Premium Quality', desc: 'Every pixel and every line of code is held to the highest standard.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Real support from real people, after launch and beyond. Always.' },
  { icon: BadgeDollarSign, title: 'Affordable Pricing', desc: 'World-class work at prices that make sense for growing businesses.' },
]

const processSteps = [
  { n: '01', title: 'Discovery', desc: 'We learn your goals, audience, and vision inside out before writing a single line.' },
  { n: '02', title: 'Design', desc: 'Wireframes, prototypes, and high-fidelity visuals crafted with obsessive precision.' },
  { n: '03', title: 'Build', desc: 'Clean, performant code delivered with full transparency throughout.' },
  { n: '04', title: 'Launch', desc: 'We deploy, test thoroughly, and support you through go-live and beyond.' },
]

const testimonials = [
  { name: 'John Davidson', role: 'CEO, TechStart', stars: 5, quote: 'VIKHON delivered our platform in 2 weeks. The quality is truly unmatched — worth every penny and more.' },
  { name: 'Sarah Mitchell', role: 'Founder, DesignCo', stars: 5, quote: 'They transformed our brand identity completely. I get compliments on our logo and website every single day.' },
  { name: 'Raj Kumar', role: 'Marketing Director, BrandX', stars: 5, quote: 'Organic traffic doubled in 3 months. VIKHON doesn\'t just build — they deliver results that actually matter.' },
]

/* ══════════════════════════════════════════
   SHARED
══════════════════════════════════════════ */

const inView = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#C9A84C] text-[11px] tracking-[0.6em] uppercase mb-6 font-medium">
      {children}
    </p>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */

export default function HomePage() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [typed, setTyped]         = useState('')
  const [deleting, setDeleting]   = useState(false)
  const [cursor, setCursor]       = useState(true)

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 530)
    return () => clearInterval(t)
  }, [])

  // Typewriter logic
  useEffect(() => {
    const current = typingPhrases[phraseIdx]
    let timer: ReturnType<typeof setTimeout>
    if (!deleting && typed.length < current.length) {
      timer = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 80)
    } else if (!deleting && typed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && typed.length > 0) {
      timer = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 45)
    } else {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % typingPhrases.length)
    }
    return () => clearTimeout(timer)
  }, [typed, deleting, phraseIdx])

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Full screen animated headline
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        {/* Dot grid texture */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />
        {/* Gold radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)',
        }} />

        <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 border border-[#C9A84C]/30 px-5 py-2 rounded-full mb-10 text-[11px] tracking-[0.45em] text-[#C9A84C] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            Premium Digital Agency
          </motion.div>

          {/* Typewriter headline — "WE" static, rest typed */}
          <h1
            className="gold-text font-black tracking-tight leading-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            WE&nbsp;
            <span>{typed}</span>
            <span
              className="inline-block bg-[#C9A84C] align-middle ml-0.5"
              style={{
                width: '3px',
                height: '0.8em',
                opacity: cursor ? 1 : 0,
                transition: 'opacity 0.1s',
              }}
            />
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="tracking-[0.35em] uppercase text-sm sm:text-base mb-14"
            style={{ color: 'var(--text-4)' }}
          >
            Where Service Meets The Extraordinary
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact"
              className="btn-gold text-xs tracking-widest uppercase inline-flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={15} />
            </Link>
            <Link href="/portfolio"
              className="btn-outline text-xs tracking-widest uppercase inline-flex items-center justify-center gap-2">
              View Our Work <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Compact stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-16 pt-8 border-t border-[#C9A84C]/15"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-[#C9A84C] leading-none mb-1">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-5)' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'var(--text-5)' }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SERVICES — Chrome "Fast" style
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-4" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...inView} className="mb-20">
            <SectionLabel>What We Do</SectionLabel>
            <h2
              className="font-black leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--text-1)' }}
            >
              Everything your<br />
              business <span className="gold-text">needs.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={svc.href}
                  className="group block h-full card-vikhon p-8 hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 border border-[#C9A84C]/20 flex items-center justify-center mb-6 group-hover:border-[#C9A84C]/70 group-hover:bg-[#C9A84C]/8 transition-all duration-300">
                    <svc.icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-bold mb-3 text-base group-hover:text-[#C9A84C] transition-colors duration-300"
                    style={{ color: 'var(--text-1)' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-4)' }}>{svc.desc}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-[#C9A84C] text-[11px] tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight size={11} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...inView}
            className="mt-16 text-center"
          >
            <Link href="/services"
              className="btn-outline text-xs tracking-widest uppercase inline-flex items-center gap-2">
              All Services <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PORTFOLIO — Chrome gallery style
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-4" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...inView}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20"
          >
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2
                className="font-black leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--text-1)' }}
              >
                Our work<br /><span className="gold-text">speaks.</span>
              </h2>
            </div>
            <Link href="/portfolio"
              className="btn-outline text-xs tracking-widest uppercase shrink-0 self-start sm:self-end">
              View All Work
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group card-vikhon overflow-hidden cursor-pointer"
              >
                {/* Thumbnail */}
                <div className={`relative h-60 bg-gradient-to-br ${p.from} ${p.to} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-black text-white/8 select-none"
                      style={{ fontSize: '8rem', lineHeight: 1 }}>
                      {p.title.charAt(0)}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                  <span className="absolute top-4 right-4 text-[11px] bg-[#C9A84C] text-black font-semibold px-3 py-1 rounded-full tracking-wider">
                    {p.tag}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#C9A84C] transition-colors duration-300"
                    style={{ color: 'var(--text-1)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-4)' }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-[11px] border border-[#C9A84C]/20 text-[#C9A84C]/70 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHY VIKHON — Chrome "Safe" split screen
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-4" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

            {/* Left — Bold manifesto */}
            <motion.div {...inView}>
              <SectionLabel>Why Us</SectionLabel>
              <h2
                className="font-black leading-[1.05] tracking-tight mb-8"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', color: 'var(--text-1)' }}
              >
                Built for<br />results,<br />not just<br /><span className="gold-text">looks.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-md" style={{ color: 'var(--text-4)' }}>
                We obsess over details, deadlines, and deliverables — because your success is the only metric that matters to us.
              </p>
              <Link href="/about"
                className="btn-gold text-xs tracking-widest uppercase inline-flex items-center gap-2">
                Our Story <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Right — Feature cards */}
            <div className="flex flex-col gap-4">
              {whyFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-5 p-6 card-vikhon group"
                >
                  <div className="w-11 h-11 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C]/60 group-hover:bg-[#C9A84C]/8 transition-all duration-300 rounded-sm">
                    <f.icon size={19} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--text-1)' }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-4)' }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROCESS — 4 steps horizontal
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-4" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...inView} className="text-center mb-24">
            <SectionLabel>How We Work</SectionLabel>
            <h2
              className="font-black tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--text-1)' }}
            >
              From idea to <span className="gold-text">launch.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 20%, rgba(201,168,76,0.6) 50%, rgba(201,168,76,0.4) 80%, transparent)' }} />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mx-auto mb-6 relative z-10"
                  style={{ backgroundColor: 'var(--bg)' }}>
                  <span className="text-[#C9A84C] font-black text-base tracking-wider">{step.n}</span>
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-1)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed max-w-[200px] mx-auto" style={{ color: 'var(--text-4)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TESTIMONIALS — Clean card grid
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-4" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...inView} className="text-center mb-20">
            <SectionLabel>Client Reviews</SectionLabel>
            <h2
              className="font-black tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--text-1)' }}
            >
              Trusted by <span className="gold-text">builders.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card-vikhon p-8 relative"
              >
                <Quote className="absolute top-6 right-6 text-[#C9A84C]/10" size={44} />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed mb-8 italic" style={{ color: 'var(--text-3)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--text-1)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-5)' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — Full screen, Chrome style
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        {/* Gold grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }} />
        {/* Glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div {...inView}>
            <SectionLabel>Let&rsquo;s Work Together</SectionLabel>
            <h2
              className="font-black tracking-tight mb-8"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)',
                color: 'var(--text-1)',
                lineHeight: 1.04,
              }}
            >
              Ready to build<br />
              something<br />
              <span className="gold-text">extraordinary?</span>
            </h2>
            <p className="text-base sm:text-lg mb-14 max-w-xl mx-auto" style={{ color: 'var(--text-4)' }}>
              Your vision deserves more than average. Let&rsquo;s create something the world has never seen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="btn-gold text-xs tracking-widest uppercase inline-flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={15} />
              </Link>
              <a href="mailto:hello@vikhon.com"
                className="btn-outline text-xs tracking-widest uppercase inline-flex items-center justify-center gap-2">
                hello@vikhon.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
