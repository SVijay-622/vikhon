'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, ShieldCheck, Zap, Heart, ArrowRight, Code2, Palette, Database } from 'lucide-react'

const team = [
  { name: 'Vijay Andiran', role: 'Founder & Lead Developer', bio: 'Specialist in React, Next.js, and full-stack JavaScript. Crafts performant web experiences that scale.', skills: ['React', 'Next.js', 'TypeScript', 'Node.js'], initial: 'V', gradient: 'from-blue-900/40 to-indigo-900/40' },
]

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace the latest technologies and creative approaches to solve problems in new ways.' },
  { icon: ShieldCheck, title: 'Quality', desc: 'Every pixel, every line of code is crafted to the highest standard of quality and precision.' },
  { icon: Zap, title: 'Speed', desc: 'Fast delivery without compromising quality. We respect your deadlines as if they were our own.' },
  { icon: Heart, title: 'Trust', desc: 'Transparent communication and honest relationships form the foundation of everything we do.' },
]

const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Figma', 'MongoDB', 'PostgreSQL', 'Firebase', 'React Native', 'Python', 'Framer Motion']

const whyPoints = [
  { label: 'Luxury-grade quality at accessible prices', icon: ShieldCheck },
  { label: 'End-to-end service from concept to launch', icon: Code2 },
  { label: 'Fast turnaround without quality compromise', icon: Zap },
  { label: 'Dedicated support & post-launch care', icon: Heart },
  { label: 'Modern tech stack & best practices', icon: Database },
  { label: 'Creative, detail-obsessed team', icon: Palette },
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

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-4">Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="section-title gold-text mb-5">About VIKHON</motion.h1>
          <Divider />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-4)' }}>
            Born from a passion for digital excellence and a belief that premium quality should be accessible to every visionary, VIKHON was founded in Chennai to redefine what a digital agency can be.
          </motion.p>
        </div>
      </section>

      {/* ═══ MISSION & VISION ═══ */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Our Mission', title: 'Delivering the Extraordinary', body: 'To provide world-class digital solutions that empower businesses of all sizes to compete at the highest level. We combine technical mastery with creative vision to produce work that is not just functional — but unforgettable.' },
            { label: 'Our Vision', title: 'A New Standard in Digital', body: 'To become the most trusted premium digital agency in South Asia — where service truly meets the extraordinary. We envision a future where every brand has access to luxury-calibre digital presence and strategy.' },
          ].map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="card-vikhon p-8">
              <div className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">{item.label}</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-1)' }}>{item.title}</h2>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--text-4)' }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-3">The Creators</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="section-title gold-text">Our Team</motion.h2>
            <Divider />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }} className="max-w-2xl mx-auto text-sm" style={{ color: 'var(--text-4)' }}>
              A small, focused team of passionate experts dedicated to crafting excellence in every project.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card-vikhon overflow-hidden group">
                <div className={`h-44 bg-gradient-to-br ${member.gradient} flex items-center justify-center border-b border-[#C9A84C]/10`}>
                  <span className="text-[#C9A84C]/20 font-black select-none" style={{ fontSize: '5rem' }}>{member.initial}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-0.5 group-hover:text-[#C9A84C] transition-colors duration-300" style={{ color: 'var(--text-1)' }}>{member.name}</h3>
                  <p className="text-[#C9A84C]/70 text-xs tracking-widest uppercase mb-3">{member.role}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-4)' }}>{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span key={s} className="text-[11px] border border-[#C9A84C]/20 text-[#C9A84C]/70 px-2 py-0.5 rounded-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-28 px-4" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-3">What Drives Us</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="section-title gold-text">Our Values</motion.h2>
            <Divider />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-vikhon p-7 text-center group">
                <div className="w-14 h-14 border border-[#C9A84C]/25 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C9A84C]/10 group-hover:border-[#C9A84C]/60 transition-all duration-300">
                  <v.icon className="text-[#C9A84C]" size={24} />
                </div>
                <h3 className="font-bold mb-3 tracking-wider uppercase text-sm" style={{ color: 'var(--text-1)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-4)' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-3">Our Stack</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="section-title gold-text">Technologies We Use</motion.h2>
            <Divider />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.div key={tech} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-[#C9A84C]/20 px-5 py-2.5 rounded-full text-sm tracking-wider hover:border-[#C9A84C]/60 hover:text-[#C9A84C] transition-all duration-300 cursor-default"
                style={{ color: 'var(--text-3)' }}>
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-28 px-4" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-3">The VIKHON Advantage</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="section-title gold-text">Why Choose VIKHON?</motion.h2>
            <Divider />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyPoints.map((pt, i) => (
              <motion.div key={pt.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 card-vikhon">
                <div className="w-10 h-10 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                  <pt.icon className="text-[#C9A84C]" size={18} />
                </div>
                <span className="text-sm" style={{ color: 'var(--text-3)' }}>{pt.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/contact" className="btn-gold text-xs tracking-widest uppercase inline-flex items-center gap-2">
              Work With Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
