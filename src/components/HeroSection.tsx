import { useState, useEffect } from "react";
import { Play, CheckCircle, Sparkles } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

const badges = ["50,000+ Students", "200+ Institutes", "AI-Powered Learning"];

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth  - 0.5) * 22,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #d6f2f9 0%, #edf8fc 22%, #f8fdff 45%, #f0eeff 70%, #e8e4ff 100%)",
      }}
    >
      {/* ── Background blobs ── */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1EC8E828 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full blur-[80px] opacity-35 pointer-events-none"
        style={{ background: "radial-gradient(circle, #818CF822 0%, transparent 70%)" }} />

      {/* ── Dot-grid texture ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.032]"
        style={{ backgroundImage: "radial-gradient(circle, #0d1b3e 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center relative z-10 w-full">

        {/* ── LEFT — copy ── */}
        <div className="animate-slide-in-left">

          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6 border"
            style={{ background: "rgba(30,200,232,0.09)", color: "#0fa8c8", borderColor: "rgba(30,200,232,0.25)" }}
          >
            <Sparkles size={11} />
            AI-Powered Learning Platform
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] mb-6"
            style={{ color: "#0d1b3e" }}
          >
            Your Shortcut to<br />
            <span style={{ color: "#1EC8E8" }}>Campus Placement</span><br />
            &amp;&nbsp;<span style={{ color: "#5353C8" }}>GATE Success</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-base md:text-lg leading-[1.78] max-w-lg mb-9"
            style={{ color: "rgba(13,27,62,0.56)" }}>
            India's smartest EdTech platform using AI, analytics, and
            personalized learning paths to take engineering students from
            college to career.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-9">
            <button
              className="btn-primary flex items-center gap-2"
              style={{ boxShadow: "0 10px 28px rgba(255,122,26,0.30)" }}
            >
              Explore Products
            </button>
            <button
              className="flex items-center gap-3 font-semibold px-6 py-3 rounded-full border-2 transition-all duration-200 hover:scale-[1.02]"
              style={{ color: "#0d1b3e", borderColor: "rgba(13,27,62,0.14)", background: "rgba(255,255,255,0.70)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(13,27,62,0.28)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(13,27,62,0.14)")}
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,122,26,0.12)" }}>
                <Play size={13} fill="#FF7A1A" color="#FF7A1A" className="ml-[2px]" />
              </span>
              Watch Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm"
                style={{ color: "rgba(13,27,62,0.52)" }}>
                <CheckCircle size={15} style={{ color: "#1EC8E8" }} />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT — SVG illustration with mouse parallax ── */}
        <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
          <div
            style={{
              transform: `translate(${mouse.x * 0.22}px, ${mouse.y * 0.22}px)`,
              transition: "transform 100ms ease-out",
            }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
