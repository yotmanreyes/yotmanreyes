"use client"

import { useState, useEffect } from "react"
import { Mail, ChevronDown, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onOpenProjectModal: () => void
}

export default function HeroSection({ onOpenProjectModal }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1e293b 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-slate-600/20 to-slate-800/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-slate-700/20 to-slate-900/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <span className="text-sm text-neutral-500 font-mono">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              <span className="inline-block animate-text-reveal">Software</span>{" "}
              <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.2s" }}>
                Engineer
              </span>
              <span className="block text-neutral-500 text-4xl md:text-5xl mt-2">
                <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.4s" }}>
                  & Problem
                </span>{" "}
                <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.6s" }}>
                  Solver
                </span>
              </span>
            </h1>

            <p
              className="text-xl text-neutral-600 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Passionate about creating <span className="text-slate-800 font-medium">elegant solutions</span> to complex
              problems. I build <span className="text-slate-800 font-medium">scalable applications</span> that make a
              difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <Button className="bg-slate-800 hover:bg-slate-900 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-900 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 hover:bg-slate-50 group text-slate-700 hover:text-slate-800"
                onClick={onOpenProjectModal}
              >
                <Code className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Solicitar Proyecto
              </Button>
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-600/20 to-slate-800/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Alex Rodriguez - Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce border border-slate-100">
                <Code className="w-6 h-6 text-slate-700" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce border border-slate-100"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="animate-bounce cursor-pointer group">
          <ChevronDown className="w-6 h-6 text-neutral-400 group-hover:text-slate-600 transition-colors" />
        </div>
      </div>
    </section>
  )
}
