'use client'

import { useState } from "react"
import { Hero } from "../components/hero"
import { Experience } from "../components/experience"
import { FutureProjects } from "../components/future-projects"
import { Testimonials } from "../components/testimonials"
import { useLanguage } from "@/components/i18n/LanguageContext"
import { AnimatedWaves } from "../components/animated-waves"
import { AboutSection } from "../components/about-section"
import { ProjectsGrid } from "../components/projects-grid"
import { ContactSection } from "../components/contact-section"
import { SiteFooter } from "../components/site-footer"

export default function Home() {
  const [showCode, setShowCode] = useState<number | null>(null);
  const { language, t } = useLanguage();

  

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
      <Hero />

      <AboutSection />

      <ProjectsGrid />

      <Testimonials />

      <Experience />

      <FutureProjects />

      <ContactSection />

      <SiteFooter />
    </div>
  )
}