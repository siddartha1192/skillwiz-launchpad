import { useState, useEffect } from "react";
import { Play, ArrowRight, Sparkles, Zap, Target, Trophy, Brain, Users, TrendingUp } from "lucide-react";

const PARTICLES = [
  { id: 0,  x: 8,  y: 15, size: 2,   dur: 7,    delay: 0,   type: 0 },
  { id: 1,  x: 20, y: 72, size: 1.5, dur: 9,    delay: 1.2, type: 1 },
  { id: 2,  x: 35, y: 30, size: 3,   dur: 6,    delay: 0.5, type: 2 },
  { id: 3,  x: 55, y: 85, size: 1.5, dur: 11,   delay: 2,   type: 0 },
  { id: 4,  x: 70, y: 20, size: 2.5, dur: 8,    delay: 0.8, type: 1 },
  { id: 5,  x: 85, y: 60, size: 2,   dur: 7.5,  delay: 1.5, type: 2 },
  { id: 6,  x: 92, y: 35, size: 1.5, dur: 10,   delay: 3,   type: 0 },
  { id: 7,  x: 15, y: 50, size: 3,   dur: 6.5,  delay: 0.3, type: 1 },
  { id: 8,  x: 45, y: 10, size: 2,   dur: 9.5,  delay: 2.5, type: 2 },
  { id: 9,  x: 78, y: 80, size: 1.5, dur: 8.5,  delay: 1,   type: 0 },
  { id: 10, x: 60, y: 45, size: 2.5, dur: 7,    delay: 4,   type: 1 },
  { id: 11, x: 25, y: 88, size: 2,   dur: 12,   delay: 1.8, type: 2 },
  { id: 12, x: 42, y: 65, size: 1.5, dur: 9,    delay: 0.7, type: 0 },
  { id: 13, x: 88, y: 12, size: 3,   dur: 6,    delay: 2.2, type: 1 },
  { id: 14, x: 5,  y: 90, size: 2,   dur: 11,   delay: 3.5, type: 2 },
  { id: 15, x: 65, y: 92, size: 1.5, dur: 7.5,  delay: 0.4, type: 0 },
  { id: 16, x: 50, y: 5,  size: 2.5, dur: 8,    delay: 1.6, type: 1 },
  { id: 17, x: 30, y: 40, size: 2,   dur: 10,   delay: 2.8, type: 2 },
  { id: 18, x: 95, y: 75, size: 1.5, dur: 6.5,  delay: 0.9, type: 0 },
  { id: 19, x: 12, y: 35, size: 2.5, dur: 9,    delay: 3.2, type: 1 },
];

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

const PARTICLE_COLORS = ["#1EC8E8", "#818CF8", "#FF7A1A"];

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(160deg, #04091c 0%, #060d22 35%, #080b28 65%, #050912 100%)" }}
    >
      {/* ── Grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,200,232,0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,200,232,0.032) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />

      {/* ── Glowing orb – top left ── */}
      <div
        className="absolute -top-20 -left-20 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(30,200,232,0.11) 0%, rgba(30,200,232,0.03) 40%, transparent 70%)",
          transform: `translate(${mouse.x * -28}px, ${mouse.y * -18}px) translateY(${scrollY * -0.22}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* ── Glowing orb – bottom right ── */}
      <div
        className="absolute -bottom-40 -right-20 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(83,83,200,0.13) 0%, rgba(83,83,200,0.04) 40%, transparent 70%)",
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 14}px) translateY(${scrollY * -0.09}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* ── Orange accent orb ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          right: "6%",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, rgba(255,122,26,0.08) 0%, transparent 70%)",
          transform: `translate(${mouse.x * 14}px, ${mouse.y * 9}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: PARTICLE_COLORS[p.type],
              opacity: 0.18 + (p.id % 3) * 0.09,
              animation: `floatParticle ${p.dur}s ease-in-out infinite ${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT: COPY ── */}
            <div style={{ transform: `translateY(${scrollY * -0.04}px)` }}>

              {/* AI badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2.5px] uppercase px-5 py-2.5 rounded-full mb-8 animate-slide-in-left"
                style={{
                  background: "linear-gradient(135deg, rgba(30,200,232,0.1), rgba(83,83,200,0.06))",
                  color: "#1EC8E8",
                  border: "1px solid rgba(30,200,232,0.22)",
                  boxShadow: "0 0 30px rgba(30,200,232,0.08), inset 0 0 20px rgba(30,200,232,0.04)",
                  animationDelay: "0s",
                }}
              >
                <Sparkles size={11} />
                AI-Powered Learning Platform
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Big headline */}
              <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <h1
                  className="font-bold leading-[1.05] mb-7"
                  style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.3rem)" }}
                >
                  <span className="block text-white">Your Shortcut</span>
                  <span className="block hero-gradient-text">to Campus</span>
                  <span className="block text-white">Placement &amp;</span>
                  <span className="block hero-orange-text">GATE Success</span>
                </h1>
              </div>

              {/* Sub-copy */}
              <p
                className="text-base md:text-lg leading-relaxed max-w-[480px] mb-10 animate-slide-in-left"
                style={{ color: "rgba(180,200,240,0.55)", animationDelay: "0.2s" }}
              >
                India's smartest EdTech platform using AI, analytics, and
                personalized learning paths to take engineering students from
                college to career.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                <button
                  className="group relative flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-white overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #FF7A1A 0%, #FF9847 100%)",
                    boxShadow: "0 8px 32px rgba(255,122,26,0.45)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 44px rgba(255,122,26,0.62), 0 0 0 4px rgba(255,122,26,0.12)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,122,26,0.45)";
                  }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)" }}
                  />
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  className="group flex items-center gap-3 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                  style={{
                    color: "rgba(200,215,255,0.8)",
                    border: "1px solid rgba(200,215,255,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(30,200,232,0.38)";
                    el.style.color = "#1EC8E8";
                    el.style.background = "rgba(30,200,232,0.06)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(200,215,255,0.12)";
                    el.style.color = "rgba(200,215,255,0.8)";
                    el.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(30,200,232,0.1)",
                      border: "1px solid rgba(30,200,232,0.18)",
                    }}
                  >
                    <Play size={13} fill="#1EC8E8" color="#1EC8E8" className="ml-0.5" />
                  </span>
                  Watch Demo
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 animate-slide-in-left" style={{ animationDelay: "0.45s" }}>
                {[
                  { Icon: Users,  label: "50,000+ Students", color: "#1EC8E8" },
                  { Icon: Trophy, label: "200+ Institutes",  color: "#818CF8" },
                  { Icon: Zap,    label: "AI-Powered",       color: "#FF7A1A" },
                ].map(({ Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={14} style={{ color }} />
                    <span className="text-sm font-medium" style={{ color: "rgba(180,200,240,0.45)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: DASHBOARD VISUAL ── */}
            <div className="hidden lg:block animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
              <div className="relative" style={{ transform: `translateY(${scrollY * -0.07}px)` }}>

                {/* Floating chip – top right */}
                <div
                  className="absolute -top-9 -right-5 z-20 flex items-center gap-3 rounded-2xl px-4 py-3 animate-float"
                  style={{
                    background: "rgba(8,14,35,0.8)",
                    border: "1px solid rgba(30,200,232,0.22)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(30,200,232,0.06)",
                    animationDelay: "0s",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(30,200,232,0.12)", border: "1px solid rgba(30,200,232,0.2)" }}
                  >
                    <Brain size={15} style={{ color: "#1EC8E8" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">AI Study Plan</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(180,200,240,0.4)" }}>Active · 3 modules</div>
                  </div>
                </div>

                {/* Floating chip – top left */}
                <div
                  className="absolute -top-5 left-10 z-20 flex items-center gap-2 rounded-xl px-3 py-2"
                  style={{
                    background: "rgba(8,14,35,0.8)",
                    border: "1px solid rgba(129,140,248,0.22)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    animation: "float 4.5s ease-in-out infinite 0.8s",
                  }}
                >
                  <Trophy size={13} style={{ color: "#818CF8" }} />
                  <span className="text-xs font-bold" style={{ color: "#818CF8" }}>GATE Rank #847</span>
                </div>

                {/* Floating chip – bottom left */}
                <div
                  className="absolute -bottom-7 -left-5 z-20 flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(8,14,35,0.8)",
                    border: "1px solid rgba(255,122,26,0.22)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                    animation: "float 4s ease-in-out infinite 1.6s",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,122,26,0.12)", border: "1px solid rgba(255,122,26,0.2)" }}
                  >
                    <Target size={15} style={{ color: "#FF7A1A" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">Placement Ready</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(180,200,240,0.4)" }}>94% mock score</div>
                  </div>
                </div>

                {/* Floating vertical badge – right */}
                <div
                  className="absolute top-1/3 -right-5 z-20 flex flex-col items-center gap-1.5 rounded-xl px-3 py-3"
                  style={{
                    background: "rgba(8,14,35,0.8)",
                    border: "1px solid rgba(255,122,26,0.15)",
                    backdropFilter: "blur(20px)",
                    animation: "float 5s ease-in-out infinite 2s",
                  }}
                >
                  <TrendingUp size={14} style={{ color: "#FF7A1A" }} />
                  <div className="text-sm font-bold" style={{ color: "#FF7A1A" }}>4.9★</div>
                  <div className="text-[10px] text-center leading-tight" style={{ color: "rgba(180,200,240,0.35)" }}>
                    Avg<br />Rating
                  </div>
                </div>

                {/* Dashboard card with mouse parallax */}
                <div
                  style={{
                    transform: `
                      perspective(1400px)
                      rotateX(${mouse.y * -2.5}deg)
                      rotateY(${mouse.x * 3.5}deg)
                    `,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  {/* Ambient glow behind card */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: "0 0 80px rgba(30,200,232,0.07), 0 0 160px rgba(83,83,200,0.06)",
                    }}
                  />

                  <div
                    className="rounded-3xl overflow-hidden relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      backdropFilter: "blur(24px)",
                      boxShadow: `
                        0 40px 80px rgba(0,0,0,0.55),
                        0 0 0 1px rgba(255,255,255,0.035),
                        inset 0 1px 0 rgba(255,255,255,0.07)
                      `,
                    }}
                  >
                    {/* Browser chrome */}
                    <div
                      className="flex items-center gap-3 px-5 py-3.5"
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div className="flex gap-1.5">
                        {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
                          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.85 }} />
                        ))}
                      </div>
                      <div
                        className="flex-1 h-7 rounded-lg flex items-center px-3 text-xs font-mono"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.22)",
                          border: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <span style={{ color: "rgba(30,200,232,0.5)" }}>🔒</span>
                        <span className="ml-2">skillwiz.ai/dashboard</span>
                      </div>
                    </div>

                    {/* Dashboard body */}
                    <div className="p-5 space-y-4">

                      {/* Welcome row */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-bold text-white">Good morning, Arjun! 👋</div>
                          <div className="text-xs mt-0.5" style={{ color: "rgba(180,200,240,0.4)" }}>Your GATE exam is in 47 days</div>
                        </div>
                        <div
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                          style={{
                            background: "rgba(30,200,232,0.1)",
                            color: "#1EC8E8",
                            border: "1px solid rgba(30,200,232,0.15)",
                          }}
                        >
                          On Track ✓
                        </div>
                      </div>

                      {/* Stat tiles */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: "94%",  label: "Placement", color: "#1EC8E8", bg: "rgba(30,200,232,0.08)",   border: "rgba(30,200,232,0.15)"  },
                          { value: "#847", label: "GATE Rank", color: "#818CF8", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.15)" },
                          { value: "4.9★", label: "Rating",    color: "#FF7A1A", bg: "rgba(255,122,26,0.08)",  border: "rgba(255,122,26,0.15)"  },
                        ].map(({ value, label, color, bg, border }) => (
                          <div
                            key={label}
                            className="rounded-2xl p-3.5 text-center"
                            style={{ background: bg, border: `1px solid ${border}` }}
                          >
                            <div className="text-lg font-bold" style={{ color }}>{value}</div>
                            <div className="text-[10px] mt-0.5" style={{ color: "rgba(180,200,240,0.4)" }}>{label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Chart */}
                      <div
                        className="rounded-2xl p-4"
                        style={{
                          background: "rgba(30,200,232,0.03)",
                          border: "1px solid rgba(30,200,232,0.08)",
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-white">Performance Trend</span>
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{ background: "rgba(30,200,232,0.1)", color: "#1EC8E8" }}
                          >
                            ↑ 23% this month
                          </span>
                        </div>
                        <svg viewBox="0 0 280 70" className="w-full" style={{ overflow: "visible" }}>
                          <defs>
                            <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.28" />
                              <stop offset="100%" stopColor="#1EC8E8" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {[18, 36, 52, 68].map(y => (
                            <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                          ))}
                          <polygon
                            points="0,65 40,55 80,50 120,40 160,30 200,20 240,12 280,6 280,70 0,70"
                            fill="url(#heroChartGrad)"
                          />
                          <polyline
                            points="0,65 40,55 80,50 120,40 160,30 200,20 240,12 280,6"
                            stroke="#1EC8E8"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {([[0,65],[80,50],[160,30],[240,12],[280,6]] as [number,number][]).map(([x, y], i) => (
                            <g key={i}>
                              <circle cx={x} cy={y} r={i === 4 ? 4 : 2.5} fill="#1EC8E8" />
                              {i === 4 && <circle cx={x} cy={y} r={9} fill="#1EC8E8" fillOpacity="0.18" />}
                            </g>
                          ))}
                        </svg>
                      </div>

                      {/* Activity feed */}
                      <div className="space-y-2">
                        {[
                          { emoji: "🧠", text: "AI Study Plan Generated",       time: "2m ago",  dot: "#1EC8E8" },
                          { emoji: "🎯", text: "Mock Test: 94% — Personal Best!", time: "1h ago",  dot: "#FF7A1A" },
                          { emoji: "🏆", text: "GATE Rank Improved by 312",      time: "3h ago",  dot: "#818CF8" },
                        ].map(({ emoji, text, time, dot }) => (
                          <div
                            key={text}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                            style={{
                              background: "rgba(255,255,255,0.025)",
                              border: "1px solid rgba(255,255,255,0.04)",
                            }}
                          >
                            <span className="text-sm leading-none flex-shrink-0">{emoji}</span>
                            <span className="text-xs flex-1 font-medium" style={{ color: "rgba(200,215,255,0.65)" }}>{text}</span>
                            <span className="text-[10px] flex-shrink-0" style={{ color: "rgba(180,200,240,0.22)" }}>{time}</span>
                            <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: dot, boxShadow: `0 0 6px ${dot}` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom glow line */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px pointer-events-none"
                      style={{
                        width: "72%",
                        background: "linear-gradient(90deg, transparent, rgba(30,200,232,0.65), rgba(129,140,248,0.45), transparent)",
                        boxShadow: "0 0 20px 5px rgba(30,200,232,0.18)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          TICKER STRIP
      ══════════════════════════════════ */}
      <div
        className="relative z-10 w-full py-5 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <div className="flex" style={{ animation: "marqueeScroll 32s linear infinite" }}>
          {[...TICKER, ...TICKER].map((item, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap px-8">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: PARTICLE_COLORS[i % 3] }}
              />
              <span className="text-sm font-medium" style={{ color: "rgba(180,200,240,0.48)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-[5.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: Math.max(0, 0.6 - scrollY * 0.006) }}
      >
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(30,200,232,0.25)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "#1EC8E8", animation: "scrollDot 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
