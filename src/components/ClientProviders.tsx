"use client"

import React from "react"
import { ThemeProvider } from "./theme/ThemeContext"
import { LanguageProvider } from "@/components/i18n/LanguageContext"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}