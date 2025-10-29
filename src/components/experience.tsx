export function Experience() {
  const academicExperience = [
    {
      title: "Ingeniería de Software",
      institution: "Universidad Tecnológica",
      period: "2022 - Presente",
      description:
        "Actualmente cursando quinto semestre con enfoque en desarrollo web full-stack, bases de datos y arquitectura de software. Promedio destacado y participación activa en proyectos colaborativos.",
      icon: "🎓",
      gradient: "from-cyan-500 to-purple-500",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Curso de Análisis de Datos",
      institution: "Plataforma Online Certificada",
      period: "2024",
      description:
        "Certificación en análisis de datos con Python, visualización con Matplotlib y Pandas, y técnicas de limpieza y procesamiento de información para toma de decisiones estratégicas.",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Bootcamp de Desarrollo Web",
      institution: "Academia de Programación",
      period: "2023",
      description:
        "Programa intensivo de 6 meses enfocado en tecnologías modernas: React, Next.js, TypeScript, Node.js y bases de datos SQL/NoSQL. Desarrollo de 8 proyectos prácticos.",
      icon: "💻",
      gradient: "from-pink-500 to-cyan-500",
      borderColor: "border-pink-500/30",
    },
  ]

  const workExperience = [
    {
      title: "Desarrollador Frontend Junior",
      company: "Tech Solutions S.A.",
      period: "Ene 2024 - Presente",
      description:
        "Desarrollo de interfaces de usuario responsivas con React y TypeScript. Colaboración en equipo ágil para implementar nuevas funcionalidades y optimizar el rendimiento de aplicaciones web.",
      achievements: [
        "Reducción del 30% en tiempo de carga de páginas",
        "Implementación de 15+ componentes reutilizables",
        "Mejora de accesibilidad web (WCAG 2.1)",
      ],
      icon: "🚀",
      gradient: "from-cyan-500 to-purple-500",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Desarrollador Freelance",
      company: "Proyectos Independientes",
      period: "2023 - 2024",
      description:
        "Desarrollo de soluciones web personalizadas para pequeñas empresas y emprendedores. Gestión completa de proyectos desde el diseño hasta el despliegue en producción.",
      achievements: [
        "5+ proyectos completados exitosamente",
        "100% de satisfacción del cliente",
        "Implementación de sistemas de gestión y e-commerce",
      ],
      icon: "💼",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Asistente de Desarrollo",
      company: "Laboratorio de Innovación Universitaria",
      period: "2023",
      description:
        "Apoyo en proyectos de investigación y desarrollo de prototipos tecnológicos. Colaboración con profesores y estudiantes en la implementación de soluciones innovadoras.",
      achievements: [
        "Participación en 3 proyectos de investigación",
        "Desarrollo de prototipo de app educativa",
        "Presentación en congreso estudiantil",
      ],
      icon: "🔬",
      gradient: "from-pink-500 to-cyan-500",
      borderColor: "border-pink-500/30",
    },
  ]

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
          <span className="text-cyan-400 neon-glow">EXPE</span>
          <span className="text-pink-500 neon-glow">RIENCIA</span>
        </h2>

        <p className="text-center text-cyan-100/70 text-lg mb-16 max-w-2xl mx-auto">
          Mi trayectoria académica y profesional en el mundo del desarrollo de software
        </p>

        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Formación Académica
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
              Experiencia Laboral
            </span>
          </h3>

          <div className="space-y-8">
            {workExperience.map((item, index) => (
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
                          <p className="text-pink-400 font-semibold text-sm mb-3">Logros destacados:</p>
                          {item.achievements.map((achievement, idx) => (
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
              <span className="text-cyan-100/90 font-semibold text-lg">En constante crecimiento y aprendizaje</span>
              <span className="text-3xl">🎯</span>
            </div>
            <p className="text-cyan-100/60 text-sm max-w-2xl">
              Cada proyecto y experiencia me ha permitido desarrollar habilidades técnicas y blandas, preparándome para
              enfrentar desafíos cada vez más complejos en el mundo del desarrollo de software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}