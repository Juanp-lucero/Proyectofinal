"use client"

import React from "react"
import { useLanguage } from "@/components/i18n/LanguageContext"

// Icono sólido estilo toggle (similar al de modo oscuro)
const GlobeSolid = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    className={`${className} block align-middle`}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath>
    </defs>
  </svg>
)

// Ícono moderno estilo outline (minimalista y legible)
const GlobeModern = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
    className={`${className} block align-middle`}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a16 16 0 0 0 0 18" />
    <path d="M12 3a16 16 0 0 1 0 18" />
  </svg>
)

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 px-2.5 py-1.5 h-8 bg-black/40 border border-cyan-500/25 hover:border-cyan-500/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40"
      aria-label={`${t("language.select")}: ${language === "es" ? t("language.es") : t("language.en")}`}
      title={t("language.select") as string}
    >
      <span className="inline-flex items-center justify-center rounded-full bg-cyan-500/15 w-6 h-6">
        <GlobeModern className="w-4 h-4 text-cyan-400" />
      </span>
      <span className="text-xs font-medium text-cyan-200">
        {language === "es" ? t("language.es") : t("language.en")}
      </span>
    </button>
  )
}