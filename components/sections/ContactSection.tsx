import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const contactLinks = [
    { icon: Mail, label: "alex@example.com", href: "mailto:alex@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl font-light mb-6 text-white">Let's Create Something Amazing</h2>
        <p className="text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed text-lg">
          Ready to bring your ideas to life? I'm always excited about new challenges and opportunities to create
          impactful solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {contactLinks.map((contact, index) => (
            <Button
              key={contact.label}
              variant="outline"
              size="lg"
              className="border-slate-600 text-white hover:bg-slate-800 backdrop-blur-sm group relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <contact.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              {contact.label}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
