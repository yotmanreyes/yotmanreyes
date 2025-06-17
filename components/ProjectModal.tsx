"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">🚀 Solicitar Proyecto</h3>
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
              <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                placeholder="Nombre de tu empresa"
              />
            </div>
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

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Proyecto *</label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all">
              <option value="">Selecciona el tipo</option>
              <option value="web-app">Aplicación Web</option>
              <option value="mobile-app">Aplicación Móvil</option>
              <option value="ecommerce">E-commerce</option>
              <option value="api">API/Backend</option>
              <option value="landing">Landing Page</option>
              <option value="dashboard">Dashboard</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Descripción del Proyecto *</label>
            <textarea
              rows={4}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-none"
              placeholder="Describe tu proyecto, funcionalidades principales, objetivos..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Timeline Deseado</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all">
                <option value="">Selecciona timeline</option>
                <option value="1-2weeks">1-2 semanas</option>
                <option value="1month">1 mes</option>
                <option value="2-3months">2-3 meses</option>
                <option value="3-6months">3-6 meses</option>
                <option value="6months+">6+ meses</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Presupuesto</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all">
                <option value="">Rango de presupuesto</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-25000">$10,000 - $25,000</option>
                <option value="25000+">$25,000+</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-slate-300 text-slate-700"
            >
              Cancelar
            </Button>
            <Button className="flex-1 bg-slate-700 hover:bg-slate-800 text-white">Solicitar Cotización</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
