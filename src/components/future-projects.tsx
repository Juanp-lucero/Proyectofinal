"use client"
import { useLanguage } from "@/components/i18n/LanguageContext"

export function FutureProjects() {
  const { t } = useLanguage()
  const fp = t("future_projects") as any

  const items = [
    {
      title: fp.items?.platform?.title,
      description: fp.items?.platform?.description,
      icon: "🌐",
      gradient: "from-cyan-500 to-purple-500",
      borderColor: "border-cyan-500/30",
      badges: ["Next.js", "PostgreSQL", "Prisma"],
    },
    {
      title: fp.items?.mobile?.title,
      description: fp.items?.mobile?.description,
      icon: "📱",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      badges: ["React Native", "Expo", "Firebase"],
    },
    {
      title: fp.items?.ai?.title,
      description: fp.items?.ai?.description,
      icon: "🤖",
      gradient: "from-pink-500 to-cyan-500",
      borderColor: "border-pink-500/30",
      badges: ["Python", "FastAPI", "Embeddings"],
    },
  ]

  const safeTitle: string = typeof fp?.title === "string" ? fp.title : "PROYECTOS A FUTURO"
  const safeSubtitle: string = typeof fp?.subtitle === "string" ? fp.subtitle : "Ideas y planes para evoluciones del portafolio"

  return (
    <section id="futuro" className="py-32 px-6 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-6 text-center">
          <span className="text-cyan-400 neon-glow">{safeTitle.slice(0, 10)}</span>
          <span className="text-pink-500 neon-glow">{safeTitle.slice(10)}</span>
        </h2>
        <p className="text-center text-cyan-100/70 text-lg mb-16 max-w-3xl mx-auto">{safeSubtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}></div>
              <div className={`relative bg-black/60 backdrop-blur-sm border-2 ${item.borderColor} rounded-2xl overflow-hidden hover:border-cyan-500/70 transition-all h-full flex flex-col`}>
                <div className="p-8 flex flex-col h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">{item.title}</h4>
                  <p className="text-cyan-100/80 text-sm leading-relaxed flex-grow">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.badges.map((b) => (
                      <span key={b} className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}