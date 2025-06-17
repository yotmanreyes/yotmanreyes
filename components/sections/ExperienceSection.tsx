"use client"

import { useState, useEffect } from "react"
import { experience } from "@/lib/data"

export default function ExperienceSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="experience" className="py-20 px-6 relative bg-slate-50">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 border border-slate-300 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-slate-300 rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-light mb-16 text-center">Professional Journey</h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 border border-slate-300">
                    {exp.icon}
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 group-hover:text-slate-700 transition-colors">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-neutral-600 mt-1">{exp.company}</h4>
                    </div>
                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 lg:mt-0 border border-slate-200">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>

              {index < experience.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-12 bg-gradient-to-b from-slate-300 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
