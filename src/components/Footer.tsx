import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, MessageCircle, ExternalLink, Globe, Share2, Rss, Camera } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Web Development', 'UI/UX Design', 'Graphic Design', 'Mobile Apps', 'Digital Marketing',
]

const socials = [
  { icon: Globe, href: '#', label: 'GitHub' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
  { icon: Rss, href: '#', label: 'Twitter' },
  { icon: Camera, href: '#', label: 'Instagram' },
]

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-semibold tracking-widest uppercase text-xs mb-6 flex items-center gap-3"
        style={{ color: 'var(--text-1)' }}>
      <span className="w-5 h-px bg-[#C9A84C]" />
      {children}
    </h3>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A84C]/15" style={{ backgroundColor: 'var(--bg-alt)' }}>
      {/* Decorative top divider */}
      <div className="flex items-center justify-center py-5">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/20 max-w-sm" />
        <span className="mx-6 text-[#C9A84C]/40 text-sm tracking-widest">◆ ◆ ◆</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/20 max-w-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="block mb-5">
              <div className="relative footer-logo-wrap" style={{ width: '148px', height: '80px' }}>
                <Image
                  src="/logo.png"
                  alt="VIKHON"
                  fill
                  sizes="148px"
                  className="logo-img"
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-4)' }}>
              Where Service Meets The Extraordinary. Premium digital solutions crafted with passion and precision.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 border border-[#C9A84C]/20 flex items-center justify-center hover:text-[#C9A84C] hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 transition-all duration-300 rounded-sm"
                  style={{ color: 'var(--text-4)' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}
                    className="text-sm hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2 group"
                    style={{ color: 'var(--text-4)' }}>
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/services"
                    className="text-sm hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2 group"
                    style={{ color: 'var(--text-4)' }}>
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 flex-shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Get In Touch</FooterHeading>
            <ul className="space-y-4">
              {[
                { icon: Mail, href: 'mailto:hello@vikhon.com', text: 'hello@vikhon.com', external: false },
                { icon: MessageCircle, href: 'https://wa.me/918056058965', text: '+91 80560 58965', external: true },
                { icon: ExternalLink, href: 'https://fiverr.com/vijayandiran', text: 'fiverr.com/vijayandiran', external: true },
              ].map(({ icon: Icon, href, text, external }) => (
                <li key={text}>
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-start gap-3 text-sm hover:text-[#C9A84C] transition-colors group"
                    style={{ color: 'var(--text-4)' }}>
                    <Icon size={15} className="mt-0.5 text-[#C9A84C]/50 group-hover:text-[#C9A84C] flex-shrink-0" />
                    {text}
                  </a>
                </li>
              ))}
              <li>
                <span className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-4)' }}>
                  <MapPin size={15} className="mt-0.5 text-[#C9A84C]/50 flex-shrink-0" />
                  Chennai, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm" style={{ color: 'var(--text-4)' }}>
            © 2026 <span className="text-[#C9A84C]">VIKHON</span>. All rights reserved.
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-5)' }}>
            Where Service Meets The Extraordinary
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <Link key={t} href="#" className="text-xs hover:text-[#C9A84C] transition-colors"
                style={{ color: 'var(--text-5)' }}>{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
