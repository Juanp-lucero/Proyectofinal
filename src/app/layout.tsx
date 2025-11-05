import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClientProviders } from "../components/ClientProviders"
import { Navbar } from "../components/Navbar"
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
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
        </ClientProviders>
        </body>
      </html>
  )
}