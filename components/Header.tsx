"use client"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Alex Rodriguez
          </div>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Consultoría", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-slate-800 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
