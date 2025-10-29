import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
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
                <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">INICIO</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="#sobre-mi" className="relative group transition-colors">
                <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">SOBRE MÍ</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="#proyectos" className="relative group transition-colors">
                <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">PROYECTOS</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="#testimonios" className="relative group transition-colors">
                <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">TESTIMONIOS</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="#experiencia" className="relative group transition-colors">
                <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">EXPERIENCIA</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="#contacto" className="relative group transition-colors">
                <span className="text-cyan-400 group-hover:text-pink-400 neon-glow">CONTACTO</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  )
}