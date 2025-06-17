"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function BudgetCalculator() {
  const [projectType, setProjectType] = useState("")
  const [complexity, setComplexity] = useState("")
  const [features, setFeatures] = useState<string[]>([])
  const [timeline, setTimeline] = useState("")
  const [estimate, setEstimate] = useState(0)

  const baseRates = {
    landing: 1500,
    "web-app": 5000,
    "mobile-app": 8000,
    ecommerce: 12000,
    api: 4000,
    dashboard: 6000,
  }

  const complexityMultipliers = {
    simple: 1,
    medium: 1.5,
    complex: 2.5,
  }

  const featureRates = {
    auth: 800,
    payment: 1200,
    admin: 1500,
    "api-integration": 1000,
    "real-time": 2000,
    analytics: 1200,
    "mobile-responsive": 600,
    seo: 400,
  }

  const timelineMultipliers = {
    rush: 1.5,
    normal: 1,
    flexible: 0.9,
  }

  useEffect(() => {
    if (projectType && complexity && timeline) {
      const basePrice = baseRates[projectType as keyof typeof baseRates] || 0
      const complexityPrice = basePrice * (complexityMultipliers[complexity as keyof typeof complexityMultipliers] || 1)
      const featuresPrice = features.reduce(
        (sum, feature) => sum + (featureRates[feature as keyof typeof featureRates] || 0),
        0,
      )
      const timelinePrice =
        (complexityPrice + featuresPrice) * (timelineMultipliers[timeline as keyof typeof timelineMultipliers] || 1)

      setEstimate(Math.round(timelinePrice))
    }
  }, [projectType, complexity, features, timeline])

  const toggleFeature = (feature: string) => {
    setFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Proyecto</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
          >
            <option value="">Selecciona tipo</option>
            <option value="landing">Landing Page</option>
            <option value="web-app">Aplicación Web</option>
            <option value="mobile-app">App Móvil</option>
            <option value="ecommerce">E-commerce</option>
            <option value="api">API/Backend</option>
            <option value="dashboard">Dashboard</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Complejidad</label>
          <select
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
          >
            <option value="">Selecciona complejidad</option>
            <option value="simple">Simple</option>
            <option value="medium">Intermedio</option>
            <option value="complex">Complejo</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">Funcionalidades Adicionales</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { id: "auth", label: "Autenticación" },
            { id: "payment", label: "Pagos" },
            { id: "admin", label: "Panel Admin" },
            { id: "api-integration", label: "APIs Externas" },
            { id: "real-time", label: "Tiempo Real" },
            { id: "analytics", label: "Analytics" },
            { id: "mobile-responsive", label: "Responsive" },
            { id: "seo", label: "SEO" },
          ].map((feature) => (
            <label key={feature.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.includes(feature.id)}
                onChange={() => toggleFeature(feature.id)}
                className="rounded border-slate-300 text-slate-600 focus:ring-slate-500"
              />
              <span className="text-sm text-slate-700">{feature.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
        <select
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
        >
          <option value="">Selecciona timeline</option>
          <option value="rush">Urgente (+50%)</option>
          <option value="normal">Normal</option>
          <option value="flexible">Flexible (-10%)</option>
        </select>
      </div>

      {estimate > 0 && (
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 text-center border border-slate-200">
          <h4 className="text-lg font-semibold text-slate-800 mb-2">Estimación de Presupuesto</h4>
          <div className="text-3xl font-bold text-slate-700 mb-2">${estimate.toLocaleString()}</div>
          <p className="text-sm text-slate-600">
            *Esta es una estimación aproximada. El precio final puede variar según los requerimientos específicos.
          </p>
          <Button className="mt-4 bg-slate-700 hover:bg-slate-800">Solicitar Cotización Detallada</Button>
        </div>
      )}
    </div>
  )
}
