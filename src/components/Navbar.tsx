"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme/theme-toggle"
import { LanguageSelector } from "./i18n/LanguageSelector"
import { useLanguage } from "@/components/i18n/LanguageContext"
import { useState } from "react"

export function Navbar() {
  const { t } = useLanguage()
  const nav = t("navigation") as any
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen((v) => !v)

  return (
    <nav className="relative z-50 bg-black/60 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="text-2xl font-black tracking-widest">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 neon-glow">
            JP LUCERO
          </span>
        </div>

        {/* Links de escritorio */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
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

          <Link href="#futuro" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">{nav.future}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#contacto" className="relative group transition-colors">
            <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">{nav.contact}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Controles y botón de menú en móvil */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4">
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle inline />
          </div>
          <button
            type="button"
            className="md:hidden mt-2 inline-flex items-center justify-center p-2 rounded-lg border border-cyan-500/40 text-cyan-300 hover:text-pink-400 hover:border-pink-400 transition-colors self-end"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="px-4 pb-4 border-t border-cyan-500/20 bg-black/70 backdrop-blur-md">
          <div className="flex flex-col gap-4 pt-4 text-base font-semibold">
            <Link href="/" className="text-cyan-300 hover:text-pink-400" onClick={() => setOpen(false)}>
              {nav.home}
            </Link>
            <Link href="#sobre-mi" className="text-cyan-300 hover:text-pink-400" onClick={() => setOpen(false)}>
              {nav.about}
            </Link>
            <Link href="#proyectos" className="text-cyan-300 hover:text-pink-400" onClick={() => setOpen(false)}>
              {nav.projects}
            </Link>
            <Link href="#testimonios" className="text-cyan-300 hover:text-pink-400" onClick={() => setOpen(false)}>
              {nav.testimonials}
            </Link>
            <Link href="#experiencia" className="text-cyan-300 hover:text-pink-400" onClick={() => setOpen(false)}>
              {nav.experience}
            </Link>
            <Link href="#futuro" className="text-cyan-300 hover:text-pink-400" onClick={() => setOpen(false)}>
              {nav.future}
            </Link>
            <Link href="#contacto" className="text-cyan-300 hover:text-pink-400" onClick={() => setOpen(false)}>
              {nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}