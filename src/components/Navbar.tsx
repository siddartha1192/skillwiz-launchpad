import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Crosshair, Brain, School, BarChart3, BookOpen, Bot } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Success Stories", id: "success-stories" },
  { label: "Contact", id: "contact" },
];

const products = [
  { icon: Crosshair, title: "MyPlacement", desc: "AI-driven campus placement prep", id: "products" },
  { icon: Brain, title: "SmartGATE", desc: "Personalized GATE preparation", id: "products" },
  { icon: School, title: "Institute Suite", desc: "Assessment & analytics for colleges", id: "products" },
  { icon: BarChart3, title: "NEAT Assessment", desc: "Campus recruitment & coding tests", id: "products" },
  { icon: BookOpen, title: "Coaching Platform", desc: "JEE, NEET, SSC & more", id: "products" },
  { icon: Bot, title: "AI GPS Learning", desc: "Personalized AI study plans", id: "products" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setProductsOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setProductsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setProductsOpen(false), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-[0_6px_32px_rgba(30,200,232,0.10),0_2px_12px_rgba(0,0,0,0.07)]"
          : "shadow-[0_4px_20px_rgba(30,200,232,0.07),0_1px_6px_rgba(0,0,0,0.04)]"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(105deg, #e4f6fb 0%, #f5fcff 18%, #ffffff 45%, #f0eeff 72%, #eae8ff 100%)"
          : "linear-gradient(105deg, #dff4fa 0%, #f2fafd 20%, #ffffff 48%, #eeecff 75%, #e6e3ff 100%)",
      }}
    >
      {/* Top accent line */}
      <div className="h-[3px] bg-orange-gradient w-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-[68px]">

        {/* Logo — uses the actual brand image; white navbar = perfect blend */}
        <a href="#" className="flex items-center">
          <img
            src="/logo-white.png"
            alt="SkillWiz"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          <button
            onClick={() => scrollTo("home")}
            className="text-navy/65 hover:text-navy text-[13px] font-medium tracking-wide uppercase px-4 py-2 rounded-md transition-colors hover:bg-navy/[0.05]"
          >
            Home
          </button>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`flex items-center gap-1 text-[13px] font-medium tracking-wide uppercase px-4 py-2 rounded-md transition-colors ${
                productsOpen
                  ? "text-navy bg-navy/[0.06]"
                  : "text-navy/65 hover:text-navy hover:bg-navy/[0.05]"
              }`}
              onClick={() => scrollTo("products")}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                productsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-[420px] bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.13)] border border-gray-100 overflow-hidden">
                <div className="px-5 pt-4 pb-2">
                  <p className="text-[11px] font-semibold tracking-[2px] uppercase text-accent">Our Products</p>
                </div>
                <div className="px-2 pb-3 grid grid-cols-1 gap-0.5">
                  {products.map((p) => (
                    <button
                      key={p.title}
                      onClick={() => scrollTo(p.id)}
                      className="flex items-center gap-3.5 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-gray-50 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                        <p.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-navy block leading-tight">{p.title}</span>
                        <span className="text-xs text-navy/50 leading-tight">{p.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {navLinks.slice(1).map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.id)}
              className="text-navy/65 hover:text-navy text-[13px] font-medium tracking-wide uppercase px-4 py-2 rounded-md transition-colors hover:bg-navy/[0.05]"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="text-navy/65 hover:text-navy text-sm font-medium transition-colors px-4 py-2 rounded-md hover:bg-navy/[0.05]">
            Login
          </button>
          <button className="btn-primary text-sm px-6 py-2.5">Get Started</button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-navy/70 p-2 rounded-md hover:bg-navy/[0.06] transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden animate-slide-up" style={{ background: "linear-gradient(160deg, #e4f6fb 0%, #f8fdff 30%, #ffffff 55%, #eeeeff 100%)" }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            <button
              onClick={() => scrollTo("home")}
              className="text-navy/70 hover:text-navy text-left py-2.5 px-3 text-sm font-medium rounded-md hover:bg-navy/[0.05] transition-colors"
            >
              Home
            </button>

            {/* Mobile products accordion */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between text-navy/70 hover:text-navy text-left py-2.5 px-3 text-sm font-medium rounded-md hover:bg-navy/[0.05] transition-colors"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="ml-3 pl-3 border-l-2 border-accent/20 mt-1 mb-2 flex flex-col gap-0.5">
                  {products.map((p) => (
                    <button
                      key={p.title}
                      onClick={() => scrollTo(p.id)}
                      className="flex items-center gap-3 py-2 px-3 rounded-md text-left hover:bg-navy/[0.05] transition-colors"
                    >
                      <p.icon size={16} className="text-accent shrink-0" />
                      <span className="text-navy/70 text-sm">{p.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.id)}
                className="text-navy/70 hover:text-navy text-left py-2.5 px-3 text-sm font-medium rounded-md hover:bg-navy/[0.05] transition-colors"
              >
                {l.label}
              </button>
            ))}

            <div className="flex gap-3 pt-3 mt-2 border-t border-gray-100">
              <button className="text-navy/70 text-sm font-medium px-3 py-2">Login</button>
              <button className="btn-primary text-sm px-5 py-2">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
