import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { end: 50131,  suffix: "",  label: "Students",      color: "#41b7d1" },
  { end: 198,    suffix: "",  label: "Teachers",       color: "#3f3f99" },
  { end: 196355, suffix: "",  label: "Attempts",       color: "#41b7d1" },
  { end: 6341,   suffix: "",  label: "Tests",          color: "#3f3f99" },
  { end: 99944,  suffix: "",  label: "Questions",      color: "#41b7d1" },
  { end: 50000,  suffix: "+", label: "Hours Learned",  color: "#3f3f99" },
];

function Counter({ end, suffix, run }: { end: number; suffix: string; run: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const totalSteps = 70;
    const stepTime = 1600 / totalSteps;
    const step = end / totalSteps;
    let current = 0;
    const id = setInterval(() => {
      current += step;
      if (current >= end) { setVal(end); clearInterval(id); }
      else setVal(Math.floor(current));
    }, stepTime);
    return () => clearInterval(id);
  }, [run, end]);
  return <>{val.toLocaleString("en-IN")}{suffix}</>;
}

export default function StatsBar() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1b3e 0%, #0f2048 50%, #0d1b3e 100%)",
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Indigo glow left */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(63,63,153,0.18) 0%, transparent 70%)",
      }} />
      {/* Cyan glow right */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(65,183,209,0.12) 0%, transparent 70%)",
      }} />

      {/* ── DESKTOP ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 hidden md:block">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/[0.07]">
          {stats.map((s, i) => {
            const active = hovered === i;
            return (
              <div
                key={i}
                className={`relative flex flex-col items-center justify-center py-10 px-4 text-center cursor-default transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 80}ms` }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] rounded-b-full transition-all duration-400"
                  style={{
                    width: active ? "60%" : "0%",
                    background: s.color,
                    boxShadow: active ? `0 0 12px ${s.color}` : "none",
                  }}
                />
                <div
                  className="font-black leading-none mb-2 transition-all duration-300"
                  style={{
                    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                    color: active ? s.color : "rgba(255,255,255,0.9)",
                    letterSpacing: "-0.03em",
                    textShadow: active ? `0 0 32px ${s.color}55` : "none",
                  }}
                >
                  <Counter end={s.end} suffix={s.suffix} run={isVisible} />
                </div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
                  style={{ color: active ? s.color : "rgba(255,255,255,0.3)" }}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: compact 3-col grid, 2 rows ── */}
      <div className="relative z-10 md:hidden px-3 py-5">
        <div className="grid grid-cols-3 gap-[1px] rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-4 px-2 text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{
                animationDelay: `${i * 60}ms`,
                background: "rgba(255,255,255,0.02)",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              {/* Colored dot accent */}
              <div className="w-1.5 h-1.5 rounded-full mb-1.5" style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }} />
              {/* Number */}
              <div
                className="font-black leading-none text-[1.15rem] tracking-tight"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                <Counter end={s.end} suffix={s.suffix} run={isVisible} />
              </div>
              {/* Label */}
              <div
                className="text-[9px] font-semibold uppercase tracking-widest mt-1 leading-tight"
                style={{ color: s.color, opacity: 0.8 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
