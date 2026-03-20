import { Play, CheckCircle } from "lucide-react";

const badges = ["50,000+ Students", "200+ Institutes", "AI-Powered Learning"];

export default function HeroSection() {
  return (
    <section id="home" className="bg-navy-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Floating glows */}
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-accent/5 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-10 w-4 h-4 rounded-full bg-accent/30 animate-float" />
      <div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left */}
        <div className="animate-slide-in-left">
          <span className="section-label">AI-POWERED LEARNING PLATFORM</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mt-4 mb-6" style={{ textWrap: "balance" }}>
            Your Shortcut to<br />Campus Placement<br />& GATE Success
          </h1>
          <p className="text-light text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ lineHeight: 1.7 }}>
            India's smartest EdTech platform using AI, analytics, and personalized learning paths to take engineering students from college to career.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="btn-primary flex items-center gap-2">Explore Products</button>
            <button className="btn-outline-white flex items-center gap-2">
              <Play size={18} fill="white" /> Watch Demo
            </button>
          </div>
          <div className="flex flex-wrap gap-5">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle size={16} className="text-accent" /> {b}
              </span>
            ))}
          </div>
        </div>

        {/* Right — abstract dashboard mockup */}
        <div className="hidden lg:flex justify-center animate-slide-in-right">
          <div className="relative w-[420px] h-[360px] animate-float">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-white/10 backdrop-blur-sm" />
            <div className="absolute top-6 left-6 right-6 h-3 rounded-full bg-white/10" />
            <div className="absolute top-14 left-6 w-2/3 h-3 rounded-full bg-white/10" />
            <div className="absolute top-24 left-6 right-6 bottom-6 rounded-xl bg-white/5 border border-white/10 p-4 grid grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-lg bg-gradient-to-br from-accent/20 to-transparent border border-white/10" />
              ))}
            </div>
            {/* Orbit ring */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-accent/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
