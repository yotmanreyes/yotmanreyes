import { Sparkles } from "lucide-react"
import { skills } from "@/lib/data"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light mb-6 flex items-center gap-3">
                About Me
                <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  With over <span className="font-semibold text-slate-800">5 years of experience</span> in software
                  development, I specialize in building modern web applications using cutting-edge technologies.
                </p>
                <p>
                  I'm passionate about <span className="font-semibold text-slate-800">clean code</span>,
                  <span className="font-semibold text-slate-800"> user experience</span>, and
                  <span className="font-semibold text-slate-800"> continuous learning</span>.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-medium mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-slate-50 hover:bg-slate-100 transition-colors duration-300 rounded-lg px-4 py-3 text-center font-medium text-slate-700 hover:text-slate-800 border border-slate-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Especializado en desarrollo full-stack con JavaScript/TypeScript, creación de aplicaciones web modernas
              con React y Next.js, y despliegue en la nube con AWS y Docker.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
