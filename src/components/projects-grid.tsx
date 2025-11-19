"use client"

import { useLanguage } from "@/components/i18n/LanguageContext"
import { AnimatedWaves } from "./animated-waves"

export function ProjectsGrid() {
  const { language } = useLanguage()
  return (
    <section id="proyectos" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
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

      <AnimatedWaves />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-16 text-center">
          <span className="text-cyan-400 neon-glow">{language === 'en' ? 'MY ' : 'MIS '}</span>
          <span className="text-pink-500 neon-glow">{language === 'en' ? 'PROJECTS' : 'PROYECTOS'}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr items-stretch">
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/70 transition-all h-full flex flex-col">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src="/students-db.jpg"
                  alt="Base de Datos de Estudiantes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-3">
                  {language === 'es' ? "Base de Datos de Estudiantes" : "Student Database System"}
                </h3>
                <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                  {language === 'es'
                    ? "Sistema completo de gestión académica con MySQL. Permite registrar, consultar y administrar información de estudiantes, cursos y calificaciones con interfaz intuitiva."
                    : "Complete academic management system with MySQL. Allows registering, querying, and managing student information, courses, and grades with an intuitive interface."}
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
              </div>
            </div>
          </div>

          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/60 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/70 transition-all h-full flex flex-col">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src="/cognitive-games.jpg"
                  alt="Juegos Cognitivos"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                  {language === 'es' ? 'Juegos Cognitivos' : 'Cognitive Games'}
                </h3>
                <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                  {language === 'es'
                    ? 'Colección de juegos para estimular la memoria y concentración. Incluye juegos de memoria, puzzles y ejercicios de atención con dificultad progresiva.'
                    : 'Collection of games designed to stimulate memory and concentration. Includes memory games, puzzles and attention exercises with progressive difficulty.'}
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
              </div>
            </div>
          </div>

          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/60 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl overflow-hidden hover:border-pink-500/70 transition-all h-full flex flex-col">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src="/tailwind-card.jpg"
                  alt="Card Tailwind"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-500 mb-3">
                  {language === 'es' ? 'Card Components Tailwind' : 'Tailwind Card Components'}
                </h3>
                <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                  {language === 'es'
                    ? 'Biblioteca de componentes de tarjetas reutilizables construidas con Tailwind CSS. Incluye variantes, animaciones y diseños responsivos.'
                    : 'Library of reusable card components built with Tailwind CSS. Includes variants, animations and responsive designs.'}
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
              </div>
            </div>
          </div>

          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/70 transition-all h-full flex flex-col">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src="/web-wireframe.jpg"
                  alt="Maquetación CSS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                  {language === 'es' ? 'Diseños CSS Avanzados' : 'Advanced CSS Layouts'}
                </h3>
                <p className="text-cyan-100/80 text-sm mb-4 leading-relaxed">
                  {language === 'es'
                    ? 'Colección de diseños web responsivos utilizando técnicas avanzadas de CSS como Grid, Flexbox y animaciones. Incluye plantillas modernas para diferentes tipos de sitios web.'
                    : 'Collection of responsive web designs using advanced CSS techniques like Grid, Flexbox and animations. Includes modern templates for different types of websites.'}
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
              </div>
            </div>
          </div>

          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/60 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/70 transition-all h-full flex flex-col">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src="/mobile-ui.jpg"
                  alt="Sistema de Gestión de Tareas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "https://www.proofhub.com/articles/wp-content/uploads/2020/02/Best-Task-Management-App-%E2%80%93-Keep-Your-Business-On-Track.jpg"
                  }}
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
              </div>
            </div>
          </div>

          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/60 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl overflow-hidden hover:border-pink-500/70 transition-all h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/landing-page.jpg"
                  alt="Landing Page Responsive"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.onerror = null
                    img.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}