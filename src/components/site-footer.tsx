"use client"

import { AnimatedWaves } from "./animated-waves"

export function SiteFooter() {
  return (
    <footer className="py-8 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <AnimatedWaves />
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-cyan-100/70">© 2025 Juan Pablo Lucero Morales. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}