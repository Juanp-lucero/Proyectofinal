import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      <body className={`${geistSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
