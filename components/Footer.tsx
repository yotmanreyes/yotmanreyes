export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Alex Rodriguez. Crafted with
          <span className="text-red-400 mx-1">♥</span>
          and lots of
          <span className="text-amber-400 mx-1">☕</span>
        </p>
      </div>
    </footer>
  )
}
