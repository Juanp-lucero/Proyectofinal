"use client"

import { CVButton } from "./cv-button"
import { useLanguage } from "./i18n/LanguageContext"
import Image from "next/image"
import heroDog from "../../public/hero-dog.jpg"
import heroSelfie from "../../public/hero-selfie.jpg"

const AnimatedWaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -bottom-32 left-0 right-0 h-96 opacity-20">
      <svg className="absolute w-full h-full animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="url(#wave-gradient-1)"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00fff7" />
            <stop offset="50%" stopColor="#a020f0" />
            <stop offset="100%" stopColor="#ff0080" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div className="absolute -bottom-24 left-0 right-0 h-96 opacity-15">
      <svg className="absolute w-full h-full animate-wave-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="url(#wave-gradient-2)"
          d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0080" />
            <stop offset="50%" stopColor="#a020f0" />
            <stop offset="100%" stopColor="#00fff7" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div className="absolute -bottom-16 left-0 right-0 h-96 opacity-10">
      <svg className="absolute w-full h-full animate-wave-reverse" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="url(#wave-gradient-3)"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a020f0" />
            <stop offset="50%" stopColor="#00fff7" />
            <stop offset="100%" stopColor="#ff0080" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
)

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/70 to-black"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <AnimatedWaves />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg">
            {t("hero.role")}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
          <span className="text-white">JUAN PABLO</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            LUCERO MORALES
          </span>
        </h1>

        <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          {t("about.student")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <CVButton />
          <button className="px-8 py-4 bg-black/40 text-cyan-400 border-2 border-cyan-500/50 font-bold rounded-xl hover:bg-cyan-500/20 transition-all">
            {t("hero.contact")}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="relative group animate-float">
            <div className="relative z-20 bg-black/20 border-2 border-cyan-500 rounded-2xl overflow-hidden p-2">
              <div className="relative h-64">
                <img
                  src="/hero-dog.jpg"
                  alt="Dog raising its paw at a table"
                  className="w-full h-64 object-cover rounded-xl block"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "/hero-dog.svg"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="relative group animate-float" style={{ animationDelay: "1s" }}>
            <div className="relative z-20 bg-black/20 border-2 border-purple-500 rounded-2xl overflow-hidden p-2">
              <div className="relative h-64">
                <img
                  src="/hero-selfie.jpg"
                  alt="Mirror selfie wearing a pink hoodie"
                  className="w-full h-64 object-cover rounded-xl block"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "/hero-selfie.svg"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}