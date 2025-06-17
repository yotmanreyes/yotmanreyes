"use client"

import { Button } from "@/components/ui/button"
import BudgetCalculator from "@/components/BudgetCalculator"

interface ConsultoriaSectionProps {
  onOpenProjectModal: () => void
}

export default function ConsultoriaSection({ onOpenProjectModal }: ConsultoriaSectionProps) {
  return (
    <section
      id="consultoria"
      className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">Consultoría 1:1</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            ¿Necesitas orientación técnica personalizada? Ofrezco sesiones de consultoría individual para ayudarte a
            resolver desafíos específicos y acelerar tu desarrollo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Consultation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow mb-12 border border-slate-200">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">💬 Solicitar Consultoría</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nombre *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Consultoría *</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all">
                  <option value="">Selecciona una opción</option>
                  <option value="architecture">Arquitectura de Software</option>
                  <option value="code-review">Code Review</option>
                  <option value="performance">Optimización de Performance</option>
                  <option value="mentoring">Mentoría Técnica</option>
                  <option value="career">Consultoría de Carrera</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Describe tu situación *</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto o el desafío que enfrentas..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Presupuesto Estimado</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all">
                  <option value="">Selecciona un rango</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>

              <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3">Solicitar Consultoría</Button>
            </form>
          </div>

          {/* Call to Action for Projects */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="mb-6 opacity-90">
              Si necesitas desarrollar una aplicación completa, te ayudo desde la conceptualización hasta el despliegue.
            </p>
            <Button onClick={onOpenProjectModal} className="bg-white text-slate-700 hover:bg-slate-50">
              Solicitar Proyecto Completo
            </Button>
          </div>
        </div>

        {/* Budget Calculator */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-3">
              🧮 Calculadora de Presupuesto
            </h3>
            <BudgetCalculator />
          </div>
        </div>
      </div>
    </section>
  )
}
