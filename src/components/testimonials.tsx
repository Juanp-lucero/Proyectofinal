export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Carlos Mendoza",
      role: "Profesor de Ingeniería de Software",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content:
        "Juan Pablo es uno de los estudiantes más dedicados que he tenido. Su capacidad para resolver problemas complejos y su constante búsqueda de aprendizaje lo destacan del resto. Siempre entrega proyectos de alta calidad y demuestra un profundo entendimiento de los conceptos de programación.",
      gradient: "from-cyan-500 to-purple-500",
      borderColor: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-500/70",
    },
    {
      name: "María González",
      role: "Compañera de Proyecto - Hackathon 2024",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content:
        "Trabajar con Juan Pablo fue una experiencia increíble. Su habilidad para trabajar en equipo y su proactividad hicieron que nuestro proyecto fuera un éxito. Siempre está dispuesto a ayudar y aporta ideas innovadoras. Es el tipo de desarrollador con el que cualquiera querría colaborar.",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-500/70",
    },
    {
      name: "Roberto Silva",
      role: "Cliente - Sistema de Gestión Académica",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      content:
        "Contraté a Juan Pablo para desarrollar un sistema de gestión para mi institución educativa. No solo cumplió con todos los requisitos, sino que superó mis expectativas. Su atención al detalle, comunicación constante y compromiso con la calidad son excepcionales. Definitivamente lo recomendaría.",
      gradient: "from-pink-500 to-cyan-500",
      borderColor: "border-pink-500/30",
      hoverBorder: "hover:border-pink-500/70",
    },
  ]

  return (
    <section id="testimonios" className="py-32 px-6 relative overflow-hidden">
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
          <span className="text-cyan-400 neon-glow">TESTI</span>
          <span className="text-pink-500 neon-glow">MONIOS</span>
        </h2>

        <p className="text-center text-cyan-100/70 text-lg mb-16 max-w-2xl mx-auto">
          Lo que dicen quienes han trabajado conmigo
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
              ></div>
              <div
                className={`relative bg-black/60 backdrop-blur-sm border-2 ${testimonial.borderColor} rounded-2xl overflow-hidden ${testimonial.hoverBorder} transition-all h-full flex flex-col`}
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="text-6xl text-cyan-400/20 mb-4 leading-none">"</div>

                  {/* Content */}
                  <p className="text-cyan-100/90 text-sm leading-relaxed mb-6 flex-grow italic">
                    {testimonial.content}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-cyan-500/20">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur-md opacity-50`}
                      ></div>
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-cyan-500/30"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-cyan-400/80 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-full">
            <span className="text-2xl">⭐</span>
            <span className="text-cyan-100/90 font-semibold">Comprometido con la excelencia</span>
            <span className="text-2xl">⭐</span>
          </div>
        </div>
      </div>
    </section>
  )
}
