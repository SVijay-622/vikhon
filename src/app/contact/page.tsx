'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, MapPin, ExternalLink, CheckCircle, Send } from 'lucide-react'

const contactCards = [
  { icon: Mail, label: 'Email Us', value: 'hello@vikhon.com', href: 'mailto:hello@vikhon.com', desc: 'For inquiries & project briefs' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 80560 58965', href: 'https://wa.me/918056058965', desc: 'Chat with us directly' },
  { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu', href: '#', desc: 'India — serving globally' },
  { icon: ExternalLink, label: 'Fiverr', value: 'fiverr.com/vijayandiran', href: 'https://fiverr.com/vijayandiran', desc: 'Order services on Fiverr' },
]

const projectTypes = ['Web Development', 'UI/UX Design', 'Graphic Design / Branding', 'Mobile App Development', 'Digital Marketing', 'Full Project Package', 'Other']
const budgets = ['Under $100', '$100 – $300', '$300 – $600', '$600 – $1,000', '$1,000 – $2,000', '$2,000+']

function Divider() {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/25" />
      <span className="mx-6 text-[#C9A84C]/40 tracking-widest text-sm">◆ ◆ ◆</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/25" />
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

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
            className="text-[#C9A84C] text-xs tracking-[0.45em] uppercase mb-4">Let&rsquo;s Connect</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="section-title gold-text mb-5">Get In Touch</motion.h1>
          <Divider />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-4)' }}>
            Have a project in mind? Tell us about your vision. We typically respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <section className="pb-28 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-3">
            <div className="card-vikhon p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <CheckCircle className="text-[#C9A84C]" size={56} />
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-1)' }}>Message Sent!</h3>
                  <p className="max-w-sm" style={{ color: 'var(--text-4)' }}>
                    Thank you for reaching out. We&rsquo;ll review your inquiry and get back to you within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', projectType: '', budget: '', message: '' }) }}
                    className="btn-outline text-xs tracking-widest uppercase mt-2">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-1)' }}>Send a Message</h2>
                  <p className="text-sm mb-8" style={{ color: 'var(--text-5)' }}>Fill out the form and we&rsquo;ll be in touch shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Davidson' },
                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-3)' }}>{field.label} *</label>
                          <input type={field.type} name={field.name} value={form[field.name as keyof typeof form]}
                            onChange={handleChange} required placeholder={field.placeholder}
                            className="w-full border border-[#C9A84C]/15 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A84C]/60 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-200 text-sm"
                            style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text-1)' }} />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-3)' }}>Project Type *</label>
                      <select name="projectType" value={form.projectType} onChange={handleChange} required
                        className="w-full border border-[#C9A84C]/15 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A84C]/60 transition-all duration-200 text-sm cursor-pointer"
                        style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text-1)' }}>
                        <option value="" disabled>Select a service…</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-3)' }}>Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange}
                        className="w-full border border-[#C9A84C]/15 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A84C]/60 transition-all duration-200 text-sm cursor-pointer"
                        style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text-1)' }}>
                        <option value="" disabled>Select your budget…</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-3)' }}>Project Details *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                        placeholder="Tell us about your project, goals, and timeline…"
                        className="w-full border border-[#C9A84C]/15 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A84C]/60 transition-all duration-200 text-sm resize-none"
                        style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text-1)' }} />
                    </div>

                    <button type="submit" disabled={loading}
                      className="btn-gold w-full text-xs tracking-widest uppercase inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? (
                        <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending…</>
                      ) : (
                        <>Send Message <Send size={14} /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 flex flex-col gap-5">
            {contactCards.map((card) => (
              <a key={card.label} href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card-vikhon p-6 flex items-start gap-4 group cursor-pointer">
                <div className="w-11 h-11 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C]/10 group-hover:border-[#C9A84C]/60 transition-all duration-300">
                  <card.icon className="text-[#C9A84C]" size={18} />
                </div>
                <div>
                  <div className="text-[#C9A84C]/70 text-[11px] tracking-widest uppercase mb-0.5">{card.label}</div>
                  <div className="text-sm font-medium group-hover:text-[#C9A84C] transition-colors duration-300" style={{ color: 'var(--text-1)' }}>{card.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-5)' }}>{card.desc}</div>
                </div>
              </a>
            ))}

            <div className="card-vikhon p-6 mt-2">
              <div className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">Response Time</div>
              <p className="font-semibold mb-1" style={{ color: 'var(--text-1)' }}>Within 24 Hours</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-5)' }}>
                We review every inquiry personally and respond with a tailored proposal.
              </p>
              <div className="mt-4 pt-4 border-t border-[#C9A84C]/10">
                <div className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">Follow Us</div>
                <div className="flex gap-2 flex-wrap">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                    <a key={s} href="#"
                      className="border border-[#C9A84C]/15 px-3 py-1.5 rounded text-[11px] tracking-wider hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all duration-200"
                      style={{ color: 'var(--text-4)' }}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
