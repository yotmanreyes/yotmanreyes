"use client"

import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-slate-100/50" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">Featured Projects</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="masonry-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`masonry-item masonry-${project.size} group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-slate-200`}
              onClick={() => {
                const element = document.getElementById(`project-${index}`)
                if (element) {
                  element.classList.toggle("opacity-100")
                  element.classList.toggle("opacity-0")
                }
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-800/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300" />

                {/* Project Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-slate-200">
                  {project.icon}
                </div>

                {/* Project Info Overlay */}
                <div
                  id={`project-${index}`}
                  className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 text-white"
                >
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <ExternalLink className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-white/90 text-sm mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20 hover:bg-white/30 transition-colors"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
