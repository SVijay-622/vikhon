'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('vikhon-theme')
    setIsDark(stored !== 'light')
  }, [])

  const toggle = () => {
    const next = !isDark
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('vikhon-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('vikhon-theme', 'light')
    }
    setIsDark(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 border border-[#C9A84C]/35 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/70 transition-all duration-300 rounded-sm"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
