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
    className={className}
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

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl">
      <span className="inline-flex items-center justify-center rounded-full bg-cyan-500/15 p-1">
        <GlobeSolid className="w-4 h-4 text-cyan-400" />
      </span>
      <label htmlFor="lang" className="text-sm text-cyan-300 whitespace-nowrap leading-none">
        {t("language.select")}
      </label>
      <select
        id="lang"
        value={language}
        onChange={handleChange}
        className="px-2 py-1 bg-black/20 border border-cyan-500/40 rounded text-cyan-100 text-sm focus:outline-none hover:border-cyan-500/60 transition-colors"
        aria-label={t("language.select")}
        title={t("language.select") as string}
      >
        <option value="es">{t("language.es")}</option>
        <option value="en">{t("language.en")}</option>
      </select>
    </div>
  )
}