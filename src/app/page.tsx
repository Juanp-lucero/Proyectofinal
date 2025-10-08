"use client"

import { useState } from "react"

export default function Home() {
  const [showCode, setShowCode] = useState<number | null>(null)

  const projectsCode = {
    1: `// Sistema de Base de Datos de Estudiantes
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'estudiantes_db'
});

// Consulta de estudiantes
app.get('/estudiantes', (req, res) => {
  const query = 'SELECT * FROM estudiantes';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});`,
    2: `// Juego de Memoria Cognitivo
class MemoryGame {
  constructor() {
    this.cards = [];
    this.flippedCards = [];
    this.score = 0;
  }
  
  flipCard(cardId) {
    const card = this.cards[cardId];
    card.flipped = true;
    this.flippedCards.push(card);
    
    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }
}`,
    3: `// Card Component con Tailwind
export function Card({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg 
                    hover:shadow-2xl transition-all 
                    duration-300 p-6 border-2 
                    border-transparent hover:border-blue-500">
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}`,
    4: `/* Maquetación CSS Grid Avanzada */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
}`,
    5: `// Task Manager - Next.js API Route
export async function POST(request: Request) {
  const { title, priority, category } = await request.json();
  
  const task = await prisma.task.create({
    data: {
      title,
      priority,
      category,
      userId: session.user.id,
      completed: false
    }
  });
  
  return Response.json(task);
}`,
    6: `// Landing Page con Framer Motion
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center">
      <h1 className="text-6xl font-bold">
        Bienvenido
      </h1>
    </motion.section>
  );
}`,
  }

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
        </div>

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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:scale-105 transition-transform">
              VER PROYECTOS
            </button>
            <button className="px-8 py-4 bg-black/40 text-cyan-400 border-2 border-cyan-500/50 font-bold rounded-xl hover:bg-cyan-500/20 transition-all">
              CONTACTAR
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <div className="relative group animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl overflow-hidden p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/abstract-technology-network-connections-data-visua-ewU2LSuN2w53JQR4edEPjhKMR0C8Bd.jpg"
                  alt="Software Development"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="relative group animate-float" style={{ animationDelay: "1s" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl overflow-hidden p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/software-developer-coding-on-laptop-with-neon-holo-CWVvVTfPwXyiqKRIH60KgaIkf8Q1cQ.jpg"
                  alt="Technology Network"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-32 px-6 relative overflow-hidden">
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

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
            <span className="text-cyan-400 neon-glow">SOBRE </span>
            <span className="text-pink-500 neon-glow">MÍ</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* Descripción principal */}
              <div className="bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <p className="text-lg text-cyan-100/90 leading-relaxed mb-4">
                  Soy{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">
                    JUAN PABLO LUCERO MORALES
                  </span>
                  , estudiante de Ingeniería de Software en quinto semestre.
                </p>
                <p className="text-lg text-cyan-100/90 leading-relaxed mb-4">
                  Me caracterizo por ser una persona <span className="text-cyan-400 font-bold">COMPROMETIDA</span>,{" "}
                  <span className="text-purple-400 font-bold">PROACTIVA</span> y apasionada por el aprendizaje continuo.
                </p>
                <p className="text-lg text-cyan-100/90 leading-relaxed mb-4">
                  A lo largo de mi formación he demostrado constancia y dedicación en cada proyecto académico, aplicando
                  mis conocimientos tanto en el <span className="text-cyan-400 font-bold">DESARROLLO TÉCNICO</span> como
                  en la solución creativa de problemas.
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
                  FORMACIÓN ADICIONAL
                </h3>
                <div className="flex items-start gap-3">
                  <div className="text-3xl">📊</div>
                  <div>
                    <p className="text-cyan-100/90 leading-relaxed">
                      He completado un curso de <span className="text-purple-400 font-bold">ANÁLISIS DE DATOS</span>,
                      ampliando mis habilidades en la interpretación y visualización de información para la toma de
                      decisiones estratégicas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
                  MÁS ALLÁ DEL CÓDIGO
                </h3>

                <p className="text-cyan-100/80 leading-relaxed mb-4">
                  Fuera del mundo de la programación, mantengo un estilo de vida activo y saludable. Disfruto de:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-black/40 border border-cyan-500/20 rounded-lg p-3">
                    <span className="text-2xl">🚴</span>
                    <span className="text-cyan-400 font-semibold">Ciclismo</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 border border-purple-500/20 rounded-lg p-3">
                    <span className="text-2xl">🏃</span>
                    <span className="text-purple-400 font-semibold">Running</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 border border-pink-500/20 rounded-lg p-3">
                    <span className="text-2xl">⚽</span>
                    <span className="text-pink-400 font-semibold">Deportes</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 border border-cyan-500/20 rounded-lg p-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-cyan-400 font-semibold">Fitness</span>
                  </div>
                </div>
                <p className="text-cyan-100/70 text-sm mt-4 leading-relaxed">
                  Estas actividades me ayudan a mantener el equilibrio, la disciplina y la energía necesaria para
                  enfrentar nuevos desafíos tanto personales como profesionales.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 text-center">
                  TECH STACK
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
                      "La tecnología es mejor cuando acerca a las personas"
                    </p>
                    <p className="text-cyan-400/70 text-sm mt-4">- Matt Mullenweg</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-black/40 border-2 border-pink-500/30 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=300&fit=crop"
                    alt="Deportes y vida activa"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-32 px-6 relative overflow-hidden">
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
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
            <span className="text-cyan-400 neon-glow">MIS </span>
            <span className="text-pink-500 neon-glow">PROYECTOS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1: Base de Datos de Estudiantes */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/70 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop"
                    alt="Base de Datos de Estudiantes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-3">
                    Base de Datos de Estudiantes
                  </h3>
                  <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                    Sistema completo de gestión académica con MySQL. Permite registrar, consultar y administrar
                    información de estudiantes, cursos y calificaciones con interfaz intuitiva.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                      MySQL
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                      PHP
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs">
                      Bootstrap
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCode(showCode === 1 ? null : 1)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">{"</>"}</span>
                    {showCode === 1 ? "Ocultar Código" : "Ver Código"}
                  </button>

                  {showCode === 1 && (
                    <div className="mt-4 bg-black/80 border border-cyan-500/30 rounded-lg p-4 overflow-x-auto animate-in slide-in-from-top duration-300">
                      <pre className="text-cyan-400 text-xs">
                        <code>{projectsCode[1]}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Proyecto 2: Juegos Cognitivos */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/70 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
                    alt="Juegos Cognitivos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                    Juegos Cognitivos
                  </h3>
                  <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                    Colección interactiva de juegos diseñados para estimular habilidades cognitivas como memoria,
                    atención y lógica. Incluye sistema de puntuación y niveles progresivos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs">
                      HTML5 Canvas
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                      CSS3
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCode(showCode === 2 ? null : 2)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold rounded-lg text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">{"</>"}</span>
                    {showCode === 2 ? "Ocultar Código" : "Ver Código"}
                  </button>

                  {showCode === 2 && (
                    <div className="mt-4 bg-black/80 border border-purple-500/30 rounded-lg p-4 overflow-x-auto animate-in slide-in-from-top duration-300">
                      <pre className="text-purple-400 text-xs">
                        <code>{projectsCode[2]}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Proyecto 3: Card Tailwind */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl overflow-hidden hover:border-pink-500/70 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop"
                    alt="Card Tailwind"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-500 mb-3">
                    Card Components Tailwind
                  </h3>
                  <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                    Biblioteca de componentes de tarjetas reutilizables construidas con Tailwind CSS. Incluye variantes,
                    animaciones y diseños responsivos listos para producción.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                      TypeScript
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCode(showCode === 3 ? null : 3)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-black font-bold rounded-lg text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">{"</>"}</span>
                    {showCode === 3 ? "Ocultar Código" : "Ver Código"}
                  </button>

                  {showCode === 3 && (
                    <div className="mt-4 bg-black/80 border border-pink-500/30 rounded-lg p-4 overflow-x-auto animate-in slide-in-from-top duration-300">
                      <pre className="text-pink-400 text-xs">
                        <code>{projectsCode[3]}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Proyecto 4: Maquetación CSS */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/70 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
                    alt="Maquetación CSS"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-3">
                    Maquetación CSS Avanzada
                  </h3>
                  <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                    Proyecto de layouts complejos usando CSS Grid y Flexbox. Incluye diseños responsivos, animaciones
                    CSS puras y técnicas modernas de maquetación web.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                      CSS3
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                      HTML5
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs">
                      Responsive
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCode(showCode === 4 ? null : 4)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold rounded-lg text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">{"</>"}</span>
                    {showCode === 4 ? "Ocultar Código" : "Ver Código"}
                  </button>

                  {showCode === 4 && (
                    <div className="mt-4 bg-black/80 border border-cyan-500/30 rounded-lg p-4 overflow-x-auto animate-in slide-in-from-top duration-300">
                      <pre className="text-cyan-400 text-xs">
                        <code>{projectsCode[4]}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Proyecto 5: Sistema de Gestión de Tareas */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/70 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://www.proofhub.com/articles/wp-content/uploads/2020/02/Best-Task-Management-App-%E2%80%93-Keep-Your-Business-On-Track.jpg"
                    alt="Sistema de Gestión de Tareas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 mb-3">
                    Task Manager App
                  </h3>
                  <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                    Aplicación full-stack para gestión de tareas con autenticación, categorías, prioridades y
                    notificaciones. Incluye dashboard con estadísticas y filtros avanzados.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs">
                      TypeScript
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCode(showCode === 5 ? null : 5)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-bold rounded-lg text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">{"</>"}</span>
                    {showCode === 5 ? "Ocultar Código" : "Ver Código"}
                  </button>

                  {showCode === 5 && (
                    <div className="mt-4 bg-black/80 border border-purple-500/30 rounded-lg p-4 overflow-x-auto animate-in slide-in-from-top duration-300">
                      <pre className="text-purple-400 text-xs">
                        <code>{projectsCode[5]}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Proyecto 6: Landing Page Responsive */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl overflow-hidden hover:border-pink-500/70 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Landing Page Responsive"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-3">
                    Landing Page Moderna
                  </h3>
                  <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                    Template de landing page completamente responsive con animaciones, formularios de contacto y
                    optimización SEO. Diseño moderno y adaptable a cualquier negocio.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                      Framer Motion
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCode(showCode === 6 ? null : 6)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold rounded-lg text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">{"</>"}</span>
                    {showCode === 6 ? "Ocultar Código" : "Ver Código"}
                  </button>

                  {showCode === 6 && (
                    <div className="mt-4 bg-black/80 border border-pink-500/30 rounded-lg p-4 overflow-x-auto animate-in slide-in-from-top duration-300">
                      <pre className="text-pink-400 text-xs">
                        <code>{projectsCode[6]}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-100/70">© 2025 Juan Pablo Lucero Morales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}