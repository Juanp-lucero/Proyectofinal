import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/70 to-black"></div>

        {/* Grid pattern */}
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

        {/* Contenido principal */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg">
              SOFTWARE ENGINEER
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
            Estudiante de <span className="text-cyan-400 font-bold">INGENIERÍA DE SOFTWARE</span> en quinto semestre.
            Comprometido, proactivo y apasionado por el{" "}
            <span className="text-purple-400 font-bold">APRENDIZAJE CONTINUO</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:scale-105 transition-transform">
              VER PROYECTOS
            </button>
            <button className="px-8 py-4 bg-black/40 text-cyan-400 border-2 border-cyan-500/50 font-bold rounded-xl hover:bg-cyan-500/20 transition-all">
              CONTACTAR
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Estructura básica */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SOBRE MÍ</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-cyan-100/90 leading-relaxed">
                Soy <span className="text-cyan-400 font-bold">JUAN PABLO LUCERO MORALES</span>, estudiante de Ingeniería
                de Software en quinto.
              </p>
              <p className="text-cyan-100/90 leading-relaxed">
                Me caracterizo por ser una persona comprometida, proactiva y apasionada por el aprendizaje continuo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">TECH STACK</h3>
              <div className="grid grid-cols-2 gap-3">
                {["HTML/CSS/JS", "TypeScript", "React", "Next.js", "MySQL", "MongoDB"].map((skill) => (
                  <div key={skill} className="bg-black/40 border border-cyan-500/30 rounded-lg p-3 text-center">
                    <span className="text-cyan-400 font-bold text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer básico */}
      <footer className="py-8 px-6 border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-100/70">© 2025 Juan Pablo Lucero Morales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
