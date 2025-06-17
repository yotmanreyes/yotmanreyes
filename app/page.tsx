"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProjectModal from "@/components/ProjectModal"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ConsultoriaSection from "@/components/sections/ConsultoriaSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Portfolio() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Main Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 -z-10" />

      {/* Animated Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #1e293b 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #334155 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 40px 40px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />
      </div>

      {/* Large Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Top Left Orb */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-300/20 to-slate-500/10 rounded-full blur-3xl animate-pulse" />

        {/* Top Right Orb */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-bl from-slate-400/15 to-slate-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        />

        {/* Bottom Left Orb */}
        <div
          className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-slate-500/15 to-slate-700/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        />

        {/* Bottom Right Orb */}
        <div
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-slate-600/20 to-slate-800/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "6s" }}
        />

        {/* Geometric Shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-slate-300/30 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-slate-400/20 rounded-lg rotate-45 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/6 w-16 h-16 bg-slate-500/10 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="floating-element absolute top-20 left-10 w-2 h-2 bg-slate-400/60 rounded-full" />
        <div
          className="floating-element absolute top-40 right-20 w-3 h-3 bg-slate-500/40 rounded-full"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="floating-element absolute bottom-40 left-20 w-1 h-1 bg-slate-600/80 rounded-full"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="floating-element absolute bottom-20 right-40 w-2 h-2 bg-slate-400/50 rounded-full"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="floating-element absolute top-1/3 left-1/2 w-1 h-1 bg-slate-500/60 rounded-full"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="floating-element absolute top-2/3 right-1/3 w-2 h-2 bg-slate-600/40 rounded-full"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-slate-900">
        <Header />
        <HeroSection onOpenProjectModal={() => setIsProjectModalOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ConsultoriaSection onOpenProjectModal={() => setIsProjectModalOpen(true)} />
        <ContactSection />
        <Footer />

        <ProjectModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} />
      </div>
    </div>
  )
}
