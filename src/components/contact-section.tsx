"use client"

import { useLanguage } from "@/components/i18n/LanguageContext"

export function ContactSection() {
  const { language } = useLanguage()
  return (
    <section id="contacto" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/40 to-black"></div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
              linear-gradient(cyan 1px, transparent 1px),
              linear-gradient(90deg, cyan 1px, transparent 1px)
            `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
          <span className="text-cyan-400 neon-glow">{language === 'en' ? 'CONT' : 'CONTAC'}</span>
          <span className="text-pink-500 neon-glow">{language === 'en' ? 'ACT' : 'TO'}</span>
        </h2>

        <p className="text-cyan-100/70 text-lg mb-12">{language === 'en' ? 'Do you have a project in mind? Let\'s talk!' : '¿Tienes un proyecto en mente? ¡Hablemos!'}</p>

        <div className="bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('juanp.lucero.2006@gmail.com')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-black/40 border border-cyan-500/20 rounded-xl"
            >
              <div className="text-3xl">📧</div>
              <div className="text-left">
                <p className="text-cyan-400 font-semibold">Email</p>
                <p className="text-cyan-100/70 text-sm">juanp.lucero.2006@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-black/40 border border-purple-500/20 rounded-xl"
            >
              <div className="text-3xl">💼</div>
              <div className="text-left">
                <p className="text-purple-400 font-semibold">LinkedIn</p>
                <p className="text-cyan-100/70 text-sm">Juan Pablo Lucero</p>
              </div>
            </a>

            <a
              href="https://github.com/Juanp-lucero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-black/40 border border-pink-500/20 rounded-xl"
            >
              <div className="text-3xl">🐙</div>
              <div className="text-left">
                <p className="text-pink-400 font-semibold">GitHub</p>
                <p className="text-cyan-100/70 text-sm">Juanp-lucero</p>
              </div>
            </a>

            <a
              href="https://wa.me/57315819139"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-black/40 border border-cyan-500/20 rounded-xl"
            >
              <div className="text-3xl">📱</div>
              <div className="text-left">
                <p className="text-cyan-400 font-semibold">Teléfono</p>
                <p className="text-cyan-100/70 text-sm">+57 315819139</p>
              </div>
            </a>
          </div>

          <a
            href="https://wa.me/57315819139"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-black font-bold rounded-xl hover:scale-105 transition-transform text-lg inline-block"
          >
            {language === 'es' ? 'ENVIAR MENSAJE' : 'SEND MESSAGE'}
          </a>
        </div>
      </div>
    </section>
  )
}