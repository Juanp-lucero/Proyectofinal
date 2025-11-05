"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme/theme-toggle"
import { LanguageSelector } from "./i18n/LanguageSelector"
import { useLanguage } from "@/components/i18n/LanguageContext"

export function Navbar() {
  const { t } = useLanguage()
  const nav = t("navigation") as any

  return (
    <nav className="relative z-50 bg-black/60 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-black tracking-widest">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 neon-glow">
            JP LUCERO
          </span>
        </div>

        <div className="flex gap-8 text-lg font-semibold">
          <Link href="/" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">
              {nav.home}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#sobre-mi" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">{nav.about}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#proyectos" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">{nav.projects}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#testimonios" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">{nav.testimonials}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#experiencia" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">{nav.experience}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#contacto" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">{nav.contact}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}