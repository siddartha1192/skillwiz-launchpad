import { useState, useEffect } from "react";
import { Play, ArrowRight, Sparkles, Zap, Target, Trophy, Brain, Users, Star } from "lucide-react";

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

const STUDENTS = [
  { initials: "AK", name: "Arjun K.", sub: "GATE #112", color: "#1EC8E8", bg: "rgba(30,200,232,0.1)",  border: "rgba(30,200,232,0.18)" },
  { initials: "PR", name: "Priya R.", sub: "Placed ✓",  color: "#5353C8", bg: "rgba(83,83,200,0.1)",  border: "rgba(83,83,200,0.18)"  },
  { initials: "MS", name: "Mihir S.", sub: "GATE #389", color: "#FF7A1A", bg: "rgba(255,122,26,0.1)", border: "rgba(255,122,26,0.18)" },
];

const TICKER_COLORS = ["#1EC8E8", "#5353C8", "#FF7A1A"];

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
      style={{
        background: "linear-gradient(140deg, #dff3fa 0%, #f0f9ff 22%, #ffffff 50%, #fff7f0 78%, #feeee0 100%)",
      }}
    >
      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.07) 1.2px, transparent 1.2px)",
          backgroundSize: "30px 30px",
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />

      {/* ── Glowing orb – cyan top-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-6%",
          width: "560px",
          height: "560px",
          background: "radial-gradient(circle, rgba(30,200,232,0.16) 0%, rgba(30,200,232,0.05) 42%, transparent 68%)",
          transform: `translate(${mouse.x * -22}px, ${mouse.y * -14}px) translateY(${scrollY * -0.18}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* ── Glowing orb – orange bottom-right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-12%",
          right: "-6%",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(255,122,26,0.13) 0%, rgba(255,122,26,0.04) 42%, transparent 68%)",
          transform: `translate(${mouse.x * 18}px, ${mouse.y * 12}px) translateY(${scrollY * -0.1}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* ── Indigo orb – center ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "35%",
          left: "42%",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(83,83,200,0.07) 0%, transparent 68%)",
          transform: `translate(-50%, -50%) translate(${mouse.x * 10}px, ${mouse.y * 7}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ── LEFT: COPY ── */}
            <div style={{ transform: `translateY(${scrollY * -0.04}px)` }}>

              {/* AI badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2.5px] uppercase px-5 py-2.5 rounded-full mb-8 border animate-slide-in-left"
                style={{
                  background: "rgba(30,200,232,0.07)",
                  color: "#0c9ab8",
                  borderColor: "rgba(30,200,232,0.22)",
                  animationDelay: "0s",
                }}
              >
                <Sparkles size={11} />
                AI-Powered Learning Platform
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Big headline */}
              <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <h1
                  className="font-bold leading-[1.05] mb-7"
                  style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.3rem)", color: "#0d1b3e" }}
                >
                  <span className="block">Your Shortcut</span>
                  <span className="block hero-gradient-text">to Campus</span>
                  <span className="block">Placement &amp;</span>
                  <span className="block hero-orange-text">GATE Success</span>
                </h1>
              </div>

              {/* Sub-copy */}
              <p
                className="text-base md:text-lg leading-relaxed max-w-[480px] mb-10 animate-slide-in-left"
                style={{ color: "rgba(13,27,62,0.54)", animationDelay: "0.2s" }}
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
                    boxShadow: "0 8px 28px rgba(255,122,26,0.38)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(255,122,26,0.55)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(255,122,26,0.38)"; }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)" }}
                  />
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  className="group flex items-center gap-3 font-semibold px-6 py-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                  style={{
                    color: "#0d1b3e",
                    borderColor: "rgba(13,27,62,0.13)",
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(30,200,232,0.4)";
                    el.style.color = "#0c9ab8";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(13,27,62,0.13)";
                    el.style.color = "#0d1b3e";
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,122,26,0.1)", border: "1px solid rgba(255,122,26,0.2)" }}
                  >
                    <Play size={13} fill="#FF7A1A" color="#FF7A1A" className="ml-0.5" />
                  </span>
                  Watch Demo
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 animate-slide-in-left" style={{ animationDelay: "0.45s" }}>
                {[
                  { Icon: Users,  label: "50,000+ Students", color: "#1EC8E8" },
                  { Icon: Trophy, label: "200+ Institutes",  color: "#5353C8" },
                  { Icon: Zap,    label: "AI-Powered",       color: "#FF7A1A" },
                ].map(({ Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={14} style={{ color }} />
                    <span className="text-sm font-medium" style={{ color: "rgba(13,27,62,0.44)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: STUDENT PHOTOS + DASHBOARD ── */}
            <div className="hidden lg:block animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
              <div className="relative" style={{ transform: `translateY(${scrollY * -0.07}px)` }}>

                {/* Floating chip – top right */}
                <div
                  className="absolute -top-8 -right-4 z-20 flex items-center gap-3 rounded-2xl px-4 py-3 animate-float"
                  style={{
                    background: "white",
                    border: "1px solid rgba(30,200,232,0.2)",
                    boxShadow: "0 8px 32px rgba(13,27,62,0.1)",
                    animationDelay: "0s",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(30,200,232,0.1)" }}
                  >
                    <Brain size={15} style={{ color: "#1EC8E8" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: "#0d1b3e" }}>AI Study Plan</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(13,27,62,0.38)" }}>Active · 3 modules</div>
                  </div>
                </div>

                {/* Floating chip – bottom left */}
                <div
                  className="absolute -bottom-7 -left-5 z-20 flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: "white",
                    border: "1px solid rgba(255,122,26,0.2)",
                    boxShadow: "0 8px 32px rgba(13,27,62,0.1)",
                    animation: "float 4s ease-in-out infinite 1.6s",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,122,26,0.1)" }}
                  >
                    <Target size={15} style={{ color: "#FF7A1A" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: "#0d1b3e" }}>Placement Ready</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(13,27,62,0.38)" }}>94% mock score</div>
                  </div>
                </div>

                {/* Main card – mouse parallax */}
                <div
                  style={{
                    transform: `
                      perspective(1200px)
                      rotateX(${mouse.y * -2}deg)
                      rotateY(${mouse.x * 3}deg)
                    `,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  <div
                    className="rounded-3xl overflow-hidden"
                    style={{
                      background: "white",
                      border: "1px solid rgba(13,27,62,0.06)",
                      boxShadow: "0 32px 80px rgba(13,27,62,0.11), inset 0 0 0 1px rgba(255,255,255,0.9)",
                    }}
                  >

                    {/* ════════════════
                        STUDENT PHOTOS
                    ════════════════ */}
                    <div
                      className="px-6 pt-6 pb-5"
                      style={{
                        borderBottom: "1px solid rgba(13,27,62,0.055)",
                        background: "linear-gradient(135deg, rgba(30,200,232,0.04) 0%, rgba(255,122,26,0.03) 100%)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-xs font-semibold tracking-widest uppercase"
                          style={{ color: "rgba(13,27,62,0.38)" }}
                        >
                          Our Students
                        </span>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: "rgba(30,200,232,0.09)", color: "#0c9ab8" }}
                        >
                          50,000+ enrolled
                        </span>
                      </div>

                      {/* 4-column photo grid */}
                      <div className="grid grid-cols-4 gap-3">

                        {/* Real photo card */}
                        <div className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer">
                          <img
                            src="/hero-student.png"
                            alt="Student"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Gradient overlay on hover */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "linear-gradient(to top, rgba(13,27,62,0.62), transparent 60%)" }}
                          />
                          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-white text-[10px] font-bold leading-tight">Rohit M.</div>
                            <div className="text-white text-[9px] opacity-70">GATE #312</div>
                          </div>
                        </div>

                        {/* Avatar initials cards */}
                        {STUDENTS.map((s) => (
                          <div
                            key={s.initials}
                            className="relative rounded-2xl aspect-square flex flex-col items-center justify-center gap-1.5 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.05]"
                            style={{
                              background: `linear-gradient(135deg, ${s.bg}, rgba(255,255,255,0.6))`,
                              border: `1px solid ${s.border}`,
                            }}
                          >
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                              style={{ background: `${s.color}15`, color: s.color }}
                            >
                              {s.initials}
                            </div>
                            <div className="text-[9px] font-bold text-center px-1 leading-tight" style={{ color: "#0d1b3e" }}>
                              {s.name}
                            </div>
                            <div className="text-[8px] text-center font-semibold" style={{ color: s.color }}>
                              {s.sub}
                            </div>
                            {/* Hover shine */}
                            <div
                              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                              style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}12, transparent 70%)` }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Rating strip */}
                      <div className="flex items-center gap-1.5 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="#FF7A1A" color="#FF7A1A" />
                        ))}
                        <span className="text-xs font-semibold ml-1" style={{ color: "#0d1b3e" }}>4.9</span>
                        <span className="text-xs ml-0.5" style={{ color: "rgba(13,27,62,0.38)" }}>
                          from 8,200+ reviews
                        </span>
                      </div>
                    </div>

                    {/* ════════════════
                        STATS DASHBOARD
                    ════════════════ */}
                    <div className="p-5 space-y-4">

                      {/* Welcome row */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-bold" style={{ color: "#0d1b3e" }}>
                            Good morning, Arjun! 👋
                          </div>
                          <div className="text-xs mt-0.5" style={{ color: "rgba(13,27,62,0.38)" }}>
                            Your GATE exam is in 47 days
                          </div>
                        </div>
                        <div
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                          style={{
                            background: "rgba(30,200,232,0.09)",
                            color: "#0c9ab8",
                            border: "1px solid rgba(30,200,232,0.14)",
                          }}
                        >
                          On Track ✓
                        </div>
                      </div>

                      {/* Stat tiles */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: "94%",  label: "Placement", color: "#1EC8E8", bg: "rgba(30,200,232,0.07)",  border: "rgba(30,200,232,0.13)" },
                          { value: "#847", label: "GATE Rank", color: "#5353C8", bg: "rgba(83,83,200,0.07)",   border: "rgba(83,83,200,0.13)"  },
                          { value: "4.9★", label: "Rating",    color: "#FF7A1A", bg: "rgba(255,122,26,0.07)", border: "rgba(255,122,26,0.13)" },
                        ].map(({ value, label, color, bg, border }) => (
                          <div
                            key={label}
                            className="rounded-2xl p-3.5 text-center"
                            style={{ background: bg, border: `1px solid ${border}` }}
                          >
                            <div className="text-lg font-bold" style={{ color }}>{value}</div>
                            <div className="text-[10px] mt-0.5" style={{ color: "rgba(13,27,62,0.38)" }}>{label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Trend chart */}
                      <div
                        className="rounded-2xl p-4"
                        style={{
                          background: "rgba(30,200,232,0.04)",
                          border: "1px solid rgba(30,200,232,0.1)",
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold" style={{ color: "#0d1b3e" }}>
                            Performance Trend
                          </span>
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{ background: "rgba(30,200,232,0.1)", color: "#0c9ab8" }}
                          >
                            ↑ 23% this month
                          </span>
                        </div>
                        <svg viewBox="0 0 280 62" className="w-full">
                          <defs>
                            <linearGradient id="heroChartLight" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.22" />
                              <stop offset="100%" stopColor="#1EC8E8" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {[15, 31, 47, 62].map(y => (
                            <line key={y} x1="0" y1={y} x2="280" y2={y}
                              stroke="rgba(13,27,62,0.05)" strokeWidth="1" />
                          ))}
                          <polygon
                            points="0,59 40,50 80,45 120,36 160,26 200,17 240,9 280,3 280,62 0,62"
                            fill="url(#heroChartLight)"
                          />
                          <polyline
                            points="0,59 40,50 80,45 120,36 160,26 200,17 240,9 280,3"
                            stroke="#1EC8E8" strokeWidth="2.2" fill="none"
                            strokeLinecap="round" strokeLinejoin="round"
                          />
                          {([[0,59],[80,45],[160,26],[240,9],[280,3]] as [number,number][]).map(([x,y],i) => (
                            <g key={i}>
                              <circle cx={x} cy={y} r={i === 4 ? 4 : 2.5} fill="#1EC8E8" />
                              {i === 4 && <circle cx={x} cy={y} r={9} fill="#1EC8E8" fillOpacity="0.14" />}
                            </g>
                          ))}
                        </svg>
                      </div>

                      {/* Activity feed */}
                      <div className="space-y-2">
                        {[
                          { emoji: "🧠", text: "AI Study Plan Generated",         time: "2m ago",  dot: "#1EC8E8" },
                          { emoji: "🎯", text: "Mock Test: 94% — Personal Best!",  time: "1h ago",  dot: "#FF7A1A" },
                          { emoji: "🏆", text: "GATE Rank Improved by 312",        time: "3h ago",  dot: "#5353C8" },
                        ].map(({ emoji, text, time, dot }) => (
                          <div
                            key={text}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                            style={{
                              background: "rgba(13,27,62,0.022)",
                              border: "1px solid rgba(13,27,62,0.042)",
                            }}
                          >
                            <span className="text-sm leading-none flex-shrink-0">{emoji}</span>
                            <span className="text-xs flex-1 font-medium" style={{ color: "rgba(13,27,62,0.62)" }}>
                              {text}
                            </span>
                            <span className="text-[10px] flex-shrink-0" style={{ color: "rgba(13,27,62,0.25)" }}>
                              {time}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />
                          </div>
                        ))}
                      </div>
                    </div>
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
        className="relative z-10 w-full py-4 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(13,27,62,0.07)",
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex" style={{ animation: "marqueeScroll 32s linear infinite" }}>
          {[...TICKER, ...TICKER].map((item, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap px-8">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: TICKER_COLORS[i % 3] }}
              />
              <span className="text-sm font-medium" style={{ color: "rgba(13,27,62,0.43)" }}>
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
          style={{ borderColor: "rgba(13,27,62,0.15)" }}
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
