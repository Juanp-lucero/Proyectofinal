import { jsPDF } from "jspdf"
import * as fs from "fs"
import * as path from "path"

// Generate CV PDF with content
const doc = new jsPDF()

// Colors
const primaryColor: [number, number, number] = [0, 188, 212] // Cyan
const accentColor: [number, number, number] = [156, 39, 176] // Purple
const textColor: [number, number, number] = [33, 33, 33]

let yPosition = 20

// Header with name
doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.rect(0, 0, 210, 50, "F")

doc.setTextColor(255, 255, 255)
doc.setFontSize(28)
doc.setFont("helvetica", "bold")
doc.text("JUAN PABLO", 105, 20, { align: "center" })

doc.setTextColor(accentColor[0], accentColor[1], accentColor[2])
doc.setFontSize(28)
doc.text("LUCERO MORALES", 105, 32, { align: "center" })

doc.setTextColor(255, 255, 255)
doc.setFontSize(12)
doc.setFont("helvetica", "normal")
doc.text("SOFTWARE ENGINEER", 105, 42, { align: "center" })

yPosition = 60

// Contact Information
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
doc.text("📧 juanpablo.lucero@email.com", 20, yPosition)
doc.text("📱 +1 (555) 123-4567", 105, yPosition)
doc.text("🔗 github.com/jplucero", 20, yPosition + 6)
doc.text("💼 linkedin.com/in/jplucero", 105, yPosition + 6)

yPosition += 20

// Section: About Me
doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.rect(15, yPosition - 5, 180, 8, "F")
doc.setTextColor(255, 255, 255)
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("SOBRE MÍ", 20, yPosition)

yPosition += 10
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
const aboutText =
  "Estudiante de Ingeniería de Software en quinto semestre. Comprometido, proactivo y apasionado por el aprendizaje continuo. Enfocado en desarrollar soluciones tecnológicas innovadoras y eficientes."
const splitAbout = doc.splitTextToSize(aboutText, 170)
doc.text(splitAbout, 20, yPosition)

yPosition += splitAbout.length * 5 + 10

// Section: Education
doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.rect(15, yPosition - 5, 180, 8, "F")
doc.setTextColor(255, 255, 255)
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("EDUCACIÓN", 20, yPosition)

yPosition += 10
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.text("Ingeniería de Software", 20, yPosition)

doc.setFontSize(10)
doc.setFont("helvetica", "normal")
doc.text("Universidad | 5to Semestre | 2022 - Presente", 20, yPosition + 5)

yPosition += 15

// Section: Technical Skills
doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.rect(15, yPosition - 5, 180, 8, "F")
doc.setTextColor(255, 255, 255)
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("HABILIDADES TÉCNICAS", 20, yPosition)

yPosition += 10
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(10)
doc.setFont("helvetica", "bold")

// Programming Languages
doc.text("Lenguajes de Programación:", 20, yPosition)
doc.setFont("helvetica", "normal")
doc.text("JavaScript, TypeScript, Python, Java, C++", 75, yPosition)

yPosition += 7

// Frontend
doc.setFont("helvetica", "bold")
doc.text("Frontend:", 20, yPosition)
doc.setFont("helvetica", "normal")
doc.text("React, Next.js, HTML5, CSS3, Tailwind CSS", 75, yPosition)

yPosition += 7

// Backend
doc.setFont("helvetica", "bold")
doc.text("Backend:", 20, yPosition)
doc.setFont("helvetica", "normal")
doc.text("Node.js, Express, REST APIs", 75, yPosition)

yPosition += 7

// Databases
doc.setFont("helvetica", "bold")
doc.text("Bases de Datos:", 20, yPosition)
doc.setFont("helvetica", "normal")
doc.text("MySQL, PostgreSQL, MongoDB", 75, yPosition)

yPosition += 7

// Tools
doc.setFont("helvetica", "bold")
doc.text("Herramientas:", 20, yPosition)
doc.setFont("helvetica", "normal")
doc.text("Git, GitHub, VS Code, Docker", 75, yPosition)

yPosition += 15

// Section: Projects
doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.rect(15, yPosition - 5, 180, 8, "F")
doc.setTextColor(255, 255, 255)
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("PROYECTOS DESTACADOS", 20, yPosition)

yPosition += 10
doc.setTextColor(textColor[0], textColor[1], textColor[2])

// Project 1
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.text("• Sistema de Gestión Web", 22, yPosition)
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
const project1 =
  "Aplicación full-stack desarrollada con React y Node.js para gestión de inventarios. Implementa autenticación, CRUD completo y dashboard interactivo."
const splitProject1 = doc.splitTextToSize(project1, 165)
doc.text(splitProject1, 25, yPosition + 5)

yPosition += splitProject1.length * 5 + 8

// Project 2
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.text("• API RESTful de E-commerce", 22, yPosition)
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
const project2 =
  "Backend robusto con Express y PostgreSQL. Incluye sistema de pagos, gestión de usuarios y productos, con documentación completa en Swagger."
const splitProject2 = doc.splitTextToSize(project2, 165)
doc.text(splitProject2, 25, yPosition + 5)

yPosition += splitProject2.length * 5 + 8

// Project 3
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.text("• Portfolio Personal Interactivo", 22, yPosition)
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
const project3 =
  "Sitio web moderno con Next.js y Tailwind CSS. Diseño responsivo con animaciones y efectos visuales avanzados."
const splitProject3 = doc.splitTextToSize(project3, 165)
doc.text(splitProject3, 25, yPosition + 5)

yPosition += splitProject3.length * 5 + 15

// Section: Soft Skills
doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.rect(15, yPosition - 5, 180, 8, "F")
doc.setTextColor(255, 255, 255)
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("HABILIDADES BLANDAS", 20, yPosition)

yPosition += 10
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
doc.text("• Trabajo en equipo y colaboración", 20, yPosition)
doc.text("• Resolución de problemas", 105, yPosition)
yPosition += 6
doc.text("• Comunicación efectiva", 20, yPosition)
doc.text("• Aprendizaje continuo", 105, yPosition)
yPosition += 6
doc.text("• Adaptabilidad", 20, yPosition)
doc.text("• Gestión del tiempo", 105, yPosition)

// Footer
doc.setFontSize(8)
doc.setTextColor(150, 150, 150)
doc.text("Generado automáticamente | Juan Pablo Lucero Morales © 2025", 105, 285, { align: "center" })

// Save the PDF
const pdfBuffer = doc.output("arraybuffer")
const publicDir = path.join(process.cwd(), "public")
const pdfPath = path.join(publicDir, "cv-juan-pablo-lucero.pdf")

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// Write the PDF file
fs.writeFileSync(pdfPath, Buffer.from(pdfBuffer))

console.log("✅ CV PDF generated successfully at:", pdfPath)
console.log("📄 File size:", (Buffer.from(pdfBuffer).length / 1024).toFixed(2), "KB")
