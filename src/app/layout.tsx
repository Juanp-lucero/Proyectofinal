import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { LanguageProvider } from "@/components/i18n/LanguageContext"
import { LanguageSelector } from "@/components/i18n/LanguageSelector"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Juan Pablo Lucero Morales | Portafolio",
  description: "Portafolio de Juan Pablo Lucero Morales - Estudiante de Ingeniería de Software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <LanguageProvider>
        <body className={`${inter.variable} font-sans antialiased`}>
          <nav className="relative z-50 bg-black/60 backdrop-blur-md border-b border-cyan-500/30 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              <div className="text-2xl font-black tracking-widest">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 neon-glow">
                  JP LUCERO
                </span>
              </div>

              <div className="flex gap-8 text-lg font-semibold">
                <Link href="/" className="relative group transition-colors">
                  <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">
                    {typeof window !== 'undefined' && window.localStorage.getItem('language') === 'en' ? 'HOME' : 'INICIO'}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="#sobre-mi" className="relative group transition-colors">
                  <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">
                    {typeof window !== 'undefined' && window.localStorage.getItem('language') === 'en' ? 'ABOUT ME' : 'SOBRE MÍ'}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="#proyectos" className="relative group transition-colors">
                  <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">
                    {typeof window !== 'undefined' && window.localStorage.getItem('language') === 'en' ? 'PROJECTS' : 'PROYECTOS'}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="#testimonios" className="relative group transition-colors">
                  <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">
                    {typeof window !== 'undefined' && window.localStorage.getItem('language') === 'en' ? 'TESTIMONIALS' : 'TESTIMONIOS'}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="#experiencia" className="relative group transition-colors">
                  <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">
                    {typeof window !== 'undefined' && window.localStorage.getItem('language') === 'en' ? 'EXPERIENCE' : 'EXPERIENCIA'}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link href="#contacto" className="relative group transition-colors">
                  <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">
                    {typeof window !== 'undefined' && window.localStorage.getItem('language') === 'en' ? 'CONTACT' : 'CONTACTO'}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <LanguageSelector />
              </div>
            </div>
          </nav>

          <ThemeToggle />
          <main>{children}</main>
        </body>
      </LanguageProvider>
    </html>
  )
}