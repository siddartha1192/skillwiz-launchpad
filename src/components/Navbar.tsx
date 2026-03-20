import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = ["Home", "Products", "About", "Success Stories", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 text-white font-bold text-xl md:text-2xl">
          my<span>Skill</span>Wiz
          <Zap className="text-accent w-5 h-5 -ml-0.5" fill="hsl(var(--orange))" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {l}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white/80 hover:text-white text-sm font-medium transition-colors px-4 py-2">Login</button>
          <button className="btn-primary text-sm px-5 py-2">Get Started</button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 animate-slide-up">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-white/80 hover:text-white text-left py-2 text-sm font-medium">
                {l}
              </button>
            ))}
            <div className="flex gap-3 pt-3 border-t border-white/10">
              <button className="text-white/80 text-sm font-medium">Login</button>
              <button className="btn-primary text-sm px-5 py-2">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
