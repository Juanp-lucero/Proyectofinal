import { useLanguage } from "./i18n/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  
  const { language } = useLanguage();
  
  const testimonials = [
    {
      name: language === 'es' ? "Dr. Carlos Mendoza" : "Dr. Carlos Mendoza",
      role: language === 'es' ? "Profesor de Ingeniería de Software" : "Software Engineering Professor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content: t('testimonials.professor.text'),
      gradient: "from-cyan-500 to-purple-500",
      borderColor: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-500/70",
    },
    {
      name: language === 'es' ? "María González" : "Maria Gonzalez",
      role: language === 'es' ? "Compañera de Proyecto - Hackathon 2024" : "Project Teammate - Hackathon 2024",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content: t('testimonials.teammate.text'),
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-500/70",
    },
    {
      name: language === 'es' ? "Roberto Silva" : "Roberto Silva",
      role: language === 'es' ? "Cliente Freelance" : "Freelance Client",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      content: t('testimonials.client_roberto.text'),
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
          <span className="text-cyan-400 neon-glow">{t('testimonials.title')}</span>
        </h2>

        <p className="text-center text-cyan-100/70 text-lg mb-16 max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
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
                  <div className="text-6xl text-cyan-400/20 mb-4 leading-none">"</div>

                  <p className="text-cyan-100/90 text-sm leading-relaxed mb-6 flex-grow italic">
                    {testimonial.content}
                  </p>

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

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-full">
            <span className="text-2xl">⭐</span>
            <span className="text-cyan-100/90 font-semibold">{t('testimonials.excellence')}</span>
            <span className="text-2xl">⭐</span>
          </div>
        </div>
      </div>
    </section>
  )
}