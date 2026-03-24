import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Zap, Trophy, Users } from "lucide-react";

const TICKER = [
  "50,000+ Students Placed",
  "94% Placement Rate",
  "200+ Partner Institutes",
  "GATE Top 100 Achievers",
  "4.9★ Student Rating",
  "AI-Powered Study Plans",
  "Real-Time Analytics",
  "Expert Mentorship",
];

const TICKER_COLORS = ["#41b7d1", "#3f3f99", "#41b7d1"];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Full-section background photo ── */}
      <div className="absolute inset-0">
        <img
          src="/backphoto.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text stays readable */}
        {/* Mobile: full dark overlay; Desktop: fades to transparent on the right */}
        <div className="absolute inset-0 md:hidden" style={{ background: "rgba(13,27,62,0.82)" }} />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(13,27,62,0.88) 25%, rgba(13,27,62,0.75) 35%, rgba(13,27,62,0.30) 55%, rgba(13,27,62,0.05) 88%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-8">
          <div style={{ transform: `translateY(${scrollY * -0.04}px)` }} className="max-w-2xl">

            {/* Big headline */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <h1
                className="font-bold leading-[1.05] mb-7 text-white"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.3rem)" }}
              >
                <span className="block">Become the</span>
                <span className="block hero-gradient-text">Engineer Every</span>
                <span className="block">Company Wants</span>
                <span className="block hero-orange-text">to Hire.</span>
              </h1>
            </div>

            {/* Sub-copy */}
            <p
              className="text-base md:text-lg leading-relaxed max-w-[480px] mb-10 animate-slide-in-left"
              style={{ color: "rgba(255,255,255,0.72)", animationDelay: "0.2s" }}
            >
              India's smartest EdTech platform using AI, analytics, and
              personalized learning paths to take engineering students from
              college to career.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              {/* Mobile: solid sky blue */}
              <Link
                to="/placement"
                className="md:hidden group flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-white transition-all duration-300 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #41b7d1 0%, #2ea8c4 100%)",
                  boxShadow: "0 6px 20px rgba(65,183,209,0.45)",
                }}
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Desktop: frosted glass */}
              <Link
                to="/placement"
                className="hidden md:group md:relative md:flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-white overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(125,216,235,0.18) 100%)",
                  border: "1.5px solid rgba(125,216,235,0.45)",
                  boxShadow: "0 8px 28px rgba(125,216,235,0.15)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(255,255,255,0.26) 0%, rgba(125,216,235,0.26) 100%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(125,216,235,0.28)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(125,216,235,0.18) 100%)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(125,216,235,0.15)";
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  }}
                />
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                to="/demo"
                className="group flex items-center gap-3 font-semibold px-6 py-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#41b7d1";
                  el.style.background = "rgba(65,183,209,0.15)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.7)";
                  el.style.background = "rgba(255,255,255,0.15)";
                }}
              >
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.5)" }}
                >
                  <Play size={13} fill="white" color="white" className="ml-0.5" />
                </span>
                Watch Demo
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 animate-slide-in-left" style={{ animationDelay: "0.45s" }}>
              {[
                { Icon: Users,  label: "50,000+ Students", color: "#41b7d1" },
                { Icon: Trophy, label: "200+ Institutes",  color: "#3f3f99" },
                { Icon: Zap,    label: "AI-Powered",       color: "#41b7d1" },
              ].map(({ Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} style={{ color }} />
                  <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 animate-slide-in-left mt-4" style={{ animationDelay: "0.55s" }}>
              {[
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  color: "#0A66C2",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com",
                  color: "#1877F2",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  color: "#E1306C",
                  gradient: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: `2px solid ${s.color}`,
                    color: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = s.gradient ?? s.color;
                    el.style.color = "white";
                    el.style.boxShadow = `0 6px 20px ${s.color}55`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.75)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          TICKER STRIP
      ══════════════════════════════════ */}
      <div
        className="relative z-10 w-full py-4 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(13,27,62,0.55)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex" style={{ animation: "marqueeScroll 32s linear infinite" }}>
          {[...TICKER, ...TICKER].map((item, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap px-8">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: TICKER_COLORS[i % 3] }}
              />
              <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: Math.max(0, 0.5 - scrollY * 0.006) }}
      >
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "#41b7d1", animation: "scrollDot 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
