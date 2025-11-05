"use client"
import { useLanguage } from "./i18n/LanguageContext"

export function CVButton() {
  const { t } = useLanguage()
  const handleDownloadCV = async () => {
    const candidates = [
      "/cv-juan-pablo-lucero.pdf",
      "/cv-juan-pablo-lucero.pdf.pdf",
    ]

    try {
      // Probar las posibles rutas de archivo en public
      for (const url of candidates) {
        const res = await fetch(url, { method: "HEAD" })
        const isPdf = res.headers.get("content-type")?.includes("application/pdf")
        if (res.ok && isPdf) {
          const link = document.createElement("a")
          link.href = url
          link.download = "CV-Juan-Pablo-Lucero-Morales.pdf"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          return
        }
      }
    } catch (e) {
      // Si falla el HEAD, probamos fallback a generación
    }

    // Fallback: generar un PDF básico con jsPDF si no existe el archivo en public
    try {
      const jsPDF = (await import("jspdf")).default
      const doc = new jsPDF()

      doc.setFontSize(18)
      doc.text("Curriculum Vitae", 20, 20)
      doc.setFontSize(14)
      doc.text("Juan Pablo Lucero Morales", 20, 35)
      doc.text("Ingeniero de Software", 20, 45)
      doc.text("Email: tu.email@ejemplo.com", 20, 60)
      doc.text("LinkedIn: https://linkedin.com/in/tu-perfil", 20, 70)

      doc.setFontSize(12)
      doc.text("Resumen:", 20, 90)
      doc.text(
        "Desarrollador web con experiencia en Next.js, React y TypeScript. Apasionado por crear experiencias modernas y eficientes.",
        20,
        100,
        { maxWidth: 170 }
      )

      doc.save("CV-Juan-Pablo-Lucero-Morales.pdf")
    } catch (err) {
      console.error("No se pudo generar el PDF", err)
    }
  }

  return (
    <button
      onClick={handleDownloadCV}
      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
    >
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
      {t("cv.download")}
    </button>
  )
}
