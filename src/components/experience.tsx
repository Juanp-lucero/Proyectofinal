"use client"
import { useLanguage } from "@/components/i18n/LanguageContext"

type WorkItem = {
  title: string
  company: string
  period: string
  description: string
  achievements?: string[]
}

export function Experience() {
  const { t } = useLanguage()
  const ex = t("experience") as any

  const safeTitle: string = typeof ex?.title === "string" ? ex.title : "EXPERIENCIA"

  const academicExperience = [
    {
      title: ex.academic.software_engineering.title,
      institution: ex.academic.software_engineering.institution,
      period: ex.academic.software_engineering.period,
      description: ex.academic.software_engineering.description,
      icon: "🎓",
      gradient: "from-cyan-500 to-purple-500",
      borderColor: "border-cyan-500/30",
    },
    {
      title: ex.academic.data_analysis.title,
      institution: ex.academic.data_analysis.institution,
      period: ex.academic.data_analysis.period,
      description: ex.academic.data_analysis.description,
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
    },
    {
      title: ex.academic.web_bootcamp.title,
      institution: ex.academic.web_bootcamp.institution,
      period: ex.academic.web_bootcamp.period,
      description: ex.academic.web_bootcamp.description,
      icon: "💻",
      gradient: "from-pink-500 to-cyan-500",
      borderColor: "border-pink-500/30",
    },
  ]

  const workItems = t("experience.work.items") as WorkItem[]
  const workExperience = (workItems || []).map((item: WorkItem, idx: number) => ({
    ...item,
    icon: idx === 0 ? "🚀" : idx === 1 ? "💼" : "🔬",
    gradient: idx === 0 ? "from-cyan-500 to-purple-500" : idx === 1 ? "from-purple-500 to-pink-500" : "from-pink-500 to-cyan-500",
    borderColor: idx === 0 ? "border-cyan-500/30" : idx === 1 ? "border-purple-500/30" : "border-pink-500/30",
  }))

  return (
    <section id="experiencia" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black"></div>

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
          <span className="text-cyan-400 neon-glow">{safeTitle.slice(0, 4)}</span>
          <span className="text-pink-500 neon-glow">{safeTitle.slice(4)}</span>
        </h2>

        <p className="text-center text-cyan-100/70 text-lg mb-16 max-w-2xl mx-auto">
          {/* Descripción opcional podría añadirse al diccionario si se desea */}
          
        </p>

        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {ex.academic.title}
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicExperience.map((item, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                ></div>
                <div
                  className={`relative bg-black/60 backdrop-blur-sm border-2 ${item.borderColor} rounded-2xl overflow-hidden hover:border-cyan-500/70 transition-all h-full flex flex-col`}
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-purple-400 font-semibold mb-2">{item.institution}</p>
                    <p className="text-cyan-400/70 text-sm mb-4">{item.period}</p>
                    <p className="text-cyan-100/80 text-sm leading-relaxed flex-grow">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              {ex.work.title}
            </span>
          </h3>

          <div className="space-y-8">
            {(workExperience || []).map((item, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                ></div>
                <div
                  className={`relative bg-black/60 backdrop-blur-sm border-2 ${item.borderColor} rounded-2xl overflow-hidden hover:border-purple-500/70 transition-all`}
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="text-6xl">{item.icon}</div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-purple-400 font-semibold">{item.company}</p>
                          </div>
                          <p className="text-cyan-400/70 text-sm md:text-base mt-2 md:mt-0">{item.period}</p>
                        </div>
                        <p className="text-cyan-100/80 leading-relaxed mb-6">{item.description}</p>

                        <div className="space-y-2">
                          <p className="text-pink-400 font-semibold text-sm mb-3">{(ex?.work?.achievements_title ?? "Logros destacados:")}</p>
                          {(item.achievements ?? []).map((achievement: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="text-cyan-400 mt-1">✓</span>
                              <p className="text-cyan-100/70 text-sm">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              <span className="text-cyan-100/90 font-semibold text-lg">{ex?.growth?.title ?? "En constante crecimiento y aprendizaje"}</span>
              <span className="text-3xl">🎯</span>
            </div>
            <p className="text-cyan-100/60 text-sm max-w-2xl">
              {ex?.growth?.text ?? "Cada proyecto y experiencia me ha permitido desarrollar habilidades técnicas y blandas, preparándome para enfrentar desafíos cada vez más complejos en el mundo del desarrollo de software."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}