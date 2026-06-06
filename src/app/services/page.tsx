'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Palette, Pen, Smartphone, TrendingUp, Check, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2, title: 'Web Development', subtitle: 'React & Next.js',
    description: 'Build blazing-fast, scalable web applications and websites that captivate users and drive conversions. From landing pages to complex platforms.',
    price: 30,
    features: ['Custom responsive design', 'React & Next.js development', 'SEO optimization built-in', 'Performance-first approach', 'CMS & API integration', 'Post-launch support'],
    badge: 'Most Popular', badgeColor: 'bg-[#C9A84C] text-black',
  },
  {
    icon: Palette, title: 'UI/UX Design', subtitle: 'Figma & Adobe XD',
    description: 'Create intuitive and visually stunning interfaces that delight users. We design experiences that convert visitors into loyal customers.',
    price: 25,
    features: ['Wireframing & prototyping', 'User research & analysis', 'Design system creation', 'Interactive prototypes', 'Figma handoff & assets', 'Usability testing'],
    badge: null, badgeColor: '',
  },
  {
    icon: Pen, title: 'Graphic Design', subtitle: 'Logos & Branding',
    description: 'Craft a powerful visual identity that makes your brand unforgettable. From logos to complete brand guidelines, we make you stand out.',
    price: 20,
    features: ['Logo design & variants', 'Brand identity system', 'Business cards & stationery', 'Social media assets', 'Print & digital materials', 'Brand style guide'],
    badge: null, badgeColor: '',
  },
  {
    icon: Smartphone, title: 'Mobile Apps', subtitle: 'Android & Cross-platform',
    description: 'Develop powerful mobile applications that users love. Native Android or cross-platform solutions with polished UI and smooth performance.',
    price: 50,
    features: ['Native Android development', 'React Native cross-platform', 'UI/UX design included', 'App Store submission', 'Firebase integration', 'Bug-free guarantee'],
    badge: 'Premium', badgeColor: 'bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30',
  },
  {
    icon: TrendingUp, title: 'Digital Marketing', subtitle: 'SEO & Social Media',
    description: 'Amplify your brand presence and drive measurable growth. Strategic marketing campaigns that deliver real results and lasting impact.',
    price: 30,
    features: ['SEO & content strategy', 'Social media management', 'Google & Meta ads', 'Email marketing campaigns', 'Analytics & reporting', 'Monthly strategy calls'],
    badge: null, badgeColor: '',
  },
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

export default function ServicesPage() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-4">What We Offer</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="section-title gold-text mb-5">Our Services</motion.h1>
          <Divider />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-4)' }}>
            Premium digital services tailored to your vision. Each solution is crafted with precision, expertise, and an unwavering commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* ═══ SERVICE CARDS ═══ */}
      <section className="pb-28 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`card-vikhon p-8 relative flex flex-col ${i === 0 ? 'lg:col-span-2' : ''}`}>

              {svc.badge && (
                <span className={`absolute top-5 right-5 text-[11px] font-semibold px-3 py-1 rounded-full tracking-wider ${svc.badgeColor}`}>
                  {svc.badge}
                </span>
              )}

              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0 bg-[#C9A84C]/5">
                  <svc.icon className="text-[#C9A84C]" size={26} />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--text-1)' }}>{svc.title}</h2>
                  <p className="text-[#C9A84C]/70 text-xs tracking-widest uppercase">{svc.subtitle}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-4)' }}>{svc.description}</p>

              <div className={`grid gap-2 mb-8 flex-1 ${i === 0 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'}`}>
                {svc.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check size={13} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="text-sm" style={{ color: 'var(--text-3)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#C9A84C]/10">
                <div>
                  <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--text-5)' }}>Starting from</span>
                  <div className="text-3xl font-black gold-text leading-tight">${svc.price}</div>
                </div>
                <Link href="/contact" className="btn-gold text-xs tracking-widest uppercase inline-flex items-center gap-2">
                  Get Quote <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-20 px-4 border-t border-[#C9A84C]/10" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-1)' }}>
            Not sure which service you need?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }} className="mb-8" style={{ color: 'var(--text-4)' }}>
            Let&rsquo;s discuss your project and we&rsquo;ll recommend the perfect solution for your goals and budget.
          </motion.p>
          <Link href="/contact" className="btn-gold text-xs tracking-widest uppercase inline-flex items-center gap-2">
            Talk To Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
