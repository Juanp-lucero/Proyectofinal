"use client"

import { useLanguage } from "@/components/i18n/LanguageContext"
import { AnimatedWaves } from "./animated-waves"

export function AboutSection() {
  const { language, t } = useLanguage()
  return (
    <section id="sobre-mi" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/50 to-black"></div>

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

      <AnimatedWaves />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-16 text-center">
          <span className="text-cyan-400 neon-glow">{language === 'en' ? 'ABOUT ' : 'SOBRE '}</span>
          <span className="text-pink-500 neon-glow">{language === 'en' ? 'ME' : 'MÍ'}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <p className="text-lg text-cyan-100/90 leading-relaxed mb-4">
                {language === 'es' ? (
                  <>
                    Soy{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">
                      JUAN PABLO LUCERO MORALES
                    </span>
                    , estudiante de Ingeniería de Software en quinto semestre.
                  </>
                ) : (
                  <>
                    I am{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">
                      JUAN PABLO LUCERO MORALES
                    </span>
                    , a fifth-semester Software Engineering student.
                  </>
                )}
              </p>
              <p className="text-lg text-cyan-100/90 leading-relaxed mb-4">
                {language === 'es' ? (
                  <>
                    Me caracterizo por ser una persona <span className="text-cyan-400 font-bold">COMPROMETIDA</span>,{" "}
                    <span className="text-purple-400 font-bold">PROACTIVA</span> y apasionada por el aprendizaje continuo.
                  </>
                ) : (
                  <>
                    I am characterized by being a <span className="text-cyan-400 font-bold">COMMITTED</span>,{" "}
                    <span className="text-purple-400 font-bold">PROACTIVE</span> person passionate about continuous learning.
                  </>
                )}
              </p>
              <p className="text-lg text-cyan-100/90 leading-relaxed mb-4">
                {language === 'es' ? (
                  <>
                    A lo largo de mi formación he demostrado constancia y dedicación en cada proyecto académico, aplicando
                    mis conocimientos tanto en el <span className="text-cyan-400 font-bold">DESARROLLO TÉCNICO</span> como
                    en la solución creativa de problemas.
                  </>
                ) : (
                  <>
                    Throughout my education, I have demonstrated consistency and dedication in each academic project, applying
                    my knowledge in both <span className="text-cyan-400 font-bold">TECHNICAL DEVELOPMENT</span> and
                    creative problem solving.
                  </>
                )}
              </p>
              <p className="text-lg text-cyan-100/90 leading-relaxed">
                Mi enfoque está en crecer como{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">
                  PROFESIONAL INTEGRAL
                </span>
                , combinando la lógica de la programación con el trabajo en equipo, la innovación y la{" "}
                <span className="text-pink-400 font-bold">MEJORA CONSTANTE</span>.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                {language === 'es' ? 'FORMACIÓN ADICIONAL' : 'ADDITIONAL TRAINING'}
              </h3>
              <div className="flex items-start gap-3">
                <div className="text-3xl">📊</div>
                <div>
                  <p className="text-cyan-100/90 leading-relaxed">
                    {language === 'es' ? (
                      <>
                        He completado un curso de <span className="text-purple-400 font-bold">ANÁLISIS DE DATOS</span>,
                        ampliando mis habilidades en la interpretación y visualización de información para la toma de
                        decisiones estratégicas.
                      </>
                    ) : (
                      <>
                        I have completed a <span className="text-purple-400 font-bold">DATA ANALYSIS</span> course,
                        expanding my skills in interpreting and visualizing information for strategic decision-making.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
                {t("beyond.title")}
              </h3>

              <p className="text-cyan-100/80 leading-relaxed mb-4">
                {t("beyond.intro")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-black/40 border border-cyan-500/20 rounded-lg p-3">
                  <span className="text-2xl">🚴</span>
                  <span className="text-cyan-400 font-semibold">{t("beyond.activities.cycling")}</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border border-purple-500/20 rounded-lg p-3">
                  <span className="text-2xl">🏃</span>
                  <span className="text-purple-400 font-semibold">{t("beyond.activities.running")}</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border border-pink-500/20 rounded-lg p-3">
                  <span className="text-2xl">⚽</span>
                  <span className="text-pink-400 font-semibold">{t("beyond.activities.sports")}</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border border-cyan-500/20 rounded-lg p-3">
                  <span className="text-2xl">💪</span>
                  <span className="text-cyan-400 font-semibold">{t("beyond.activities.fitness")}</span>
                </div>
              </div>
              <p className="text-cyan-100/70 text-sm mt-4 leading-relaxed">
                {t("beyond.footer")}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 text-center">
                {language === 'es' ? 'TECH STACK' : 'TECH STACK'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "HTML/CSS/JS", color: "cyan" },
                  { name: "TypeScript", color: "purple" },
                  { name: "React", color: "pink" },
                  { name: "Next.js", color: "cyan" },
                  { name: "MySQL", color: "purple" },
                  { name: "MongoDB", color: "pink" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`relative group bg-black/60 border-2 border-${skill.color}-500/30 rounded-xl p-4 text-center hover:border-${skill.color}-500/70 transition-all hover:scale-105`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${skill.color}-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                    ></div>
                    <span className={`relative text-${skill.color}-400 font-bold text-sm`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <p className="text-xl text-cyan-100/90 leading-relaxed italic">
                    {language === 'es'
                      ? "\"La tecnología es mejor cuando acerca a las personas\""
                      : "\"Technology is best when it brings people together\""}
                  </p>
                  <p className="text-cyan-400/70 text-sm mt-4">- Matt Mullenweg</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-black/40 border-2 border-pink-500/30 rounded-xl overflow-hidden">
                <img
                  src="/about-gym.jpg"
                  alt={language === 'es' ? 'Sobre mí en el gimnasio' : 'About me at the gym'}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=300&fit=crop"
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