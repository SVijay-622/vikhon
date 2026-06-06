'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-[#C9A84C]/15 shadow-lg'
          : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'var(--nav-bg)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-11 h-11 flex-shrink-0 nav-logo-wrap">
              <Image
                src="/logo.png"
                alt="VIKHON"
                fill
                priority
                sizes="44px"
                className="logo-img"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="font-black text-xl tracking-[0.3em] uppercase text-[var(--text-1)]">
              VIKHON
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? 'text-[#C9A84C]'
                    : 'text-[var(--text-4)] hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className="btn-gold text-xs tracking-widest uppercase">
              Start Project
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-[#C9A84C] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl border-t border-[#C9A84C]/15 overflow-hidden"
            style={{ backgroundColor: 'var(--nav-bg)' }}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 px-4 text-sm font-medium tracking-widest uppercase rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                      : 'text-[var(--text-4)] hover:text-[#C9A84C] hover:bg-[#C9A84C]/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold block text-center text-xs tracking-widest uppercase"
                >
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
