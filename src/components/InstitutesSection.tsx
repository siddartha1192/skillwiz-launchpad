import { useState, useRef } from "react";

const logos = [
  { src: "/college/BVUCOEP-LOGO.png",                    name: "BVUCOEP" },
  { src: "/college/Bits-Sindri-1.png",                   name: "BIT Sindri" },
  { src: "/college/GNIT_Kolkata_logo.png",               name: "GNIT Kolkata" },
  { src: "/college/Git-1.png",                           name: "GIT" },
  { src: "/college/JIS.png",                             name: "JIS" },
  { src: "/college/KIIT.jpeg",                           name: "KIIT" },
  { src: "/college/NIT.jpeg",                            name: "NIT" },
  { src: "/college/SKIT.png",                            name: "SKIT" },
  { src: "/college/Terna-College-300x145-1.png",         name: "Terna College" },
  { src: "/college/Tict_logo_new_7-e1568737588541.png",  name: "TICT" },
  { src: "/college/dpu.png",                             name: "DPU" },
];

// Triple the array so the seamless loop never shows a gap
const row1 = [...logos, ...logos, ...logos];

interface LogoCardProps {
  src: string;
  name: string;
}

function LogoCard({ src, name }: LogoCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-shrink-0 mx-3 flex items-center justify-center rounded-2xl px-6 py-4 cursor-pointer transition-all duration-300"
      style={{
        width: 160,
        height: 88,
        background: hovered ? "white" : "rgba(255,255,255,0.85)",
        border: `2px solid ${hovered ? "#3f3f99" : "rgba(13,27,62,0.08)"}`,
        boxShadow: hovered
          ? "0 20px 48px rgba(13,27,62,0.18), 0 0 0 4px rgba(63,63,153,0.1)"
          : "0 4px 16px rgba(13,27,62,0.07)",
        transform: hovered ? "translateY(-6px) scale(1.05)" : "translateY(0) scale(1)",
        backdropFilter: "blur(8px)",
        zIndex: hovered ? 10 : 1,
        position: "relative",
      }}
    >
      <img
        src={src}
        alt={name}
        className="max-w-full max-h-full object-contain transition-all duration-300"
        style={{
          maxHeight: 52,
          filter: hovered ? "none" : "grayscale(50%) opacity(0.65)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "filter 0.3s ease, transform 0.3s ease",
        }}
      />
    </div>
  );
}

export default function InstitutesSection() {
  const [paused, setPaused] = useState(false);

  // Drag-to-scroll for mobile
  const dragRef    = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX     = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = dragRef.current; if (!el) return;
    isDragging.current = true;
    startX.current     = e.clientX;
    scrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    setPaused(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = dragRef.current; if (!el) return;
    const dx = e.clientX - startX.current;
    el.scrollLeft = scrollLeft.current - dx;
  };

  const onPointerUp = () => {
    isDragging.current = false;
    setPaused(false);
  };

  return (
    <section
      className="relative overflow-hidden py-16"
      style={{
        background: "linear-gradient(135deg, #f0f0ff 0%, #ffffff 50%, #f5f5ff 100%)",
        borderTop: "1px solid rgba(13,27,62,0.06)",
        borderBottom: "1px solid rgba(13,27,62,0.06)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(63,63,153,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(63,63,153,0.08) 0%, transparent 70%)" }} />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(63,63,153,0.06) 0%, transparent 70%)" }} />

      {/* Header */}
      <div className="text-center mb-10 relative z-10 px-4">
        <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: "#3f3f99" }}>
          Trusted Partners
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0d1b3e" }}>
          Powering <span style={{ color: "#3f3f99" }}>200+</span> Leading Institutions
        </h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(13,27,62,0.45)" }}>
          Top engineering colleges across India trust SkillWiz to prepare their students for placement and GATE success.
        </p>
      </div>

      {/* ── DESKTOP: auto-scroll marquee ── */}
      <div
        className="relative z-10 hidden md:block"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(240,240,255,1) 0%, rgba(240,240,255,0.85) 40%, transparent 100%)" }} />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(245,245,255,1) 0%, rgba(255,255,255,0.85) 40%, transparent 100%)" }} />

        <div className="overflow-hidden" style={{ paddingBlock: "14px" }}>
          <div
            className="flex"
            style={{
              animation: "institutesLeft 40s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {row1.map((logo, i) => (
              <LogoCard key={i} src={logo.src} name={logo.name} />
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE: drag-to-scroll ── */}
      <div className="relative z-10 md:hidden">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(240,240,255,1) 0%, transparent 100%)" }} />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(245,245,255,1) 0%, transparent 100%)" }} />

        <div
          ref={dragRef}
          className="flex overflow-x-auto select-none"
          style={{
            paddingBlock: "14px",
            paddingInline: "16px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: isDragging.current ? "grabbing" : "grab",
            gap: 0,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {logos.map((logo, i) => (
            <LogoCard key={i} src={logo.src} name={logo.name} />
          ))}
        </div>

        {/* Drag hint */}
        <p className="text-center text-[10px] font-semibold tracking-widest uppercase mt-1"
          style={{ color: "rgba(13,27,62,0.28)" }}>
          ← drag to explore →
        </p>
      </div>

      {/* Counter strip — desktop */}
      <div className="hidden md:flex items-center justify-center gap-8 mt-10 px-4 relative z-10">
        {[
          { value: "200+", label: "Partner Institutes" },
          { value: "18+",  label: "States Covered" },
          { value: "50K+", label: "Students Placed" },
        ].map(({ value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-2xl font-black" style={{ color: "#3f3f99" }}>{value}</span>
            <span className="text-sm font-medium" style={{ color: "rgba(13,27,62,0.45)" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Counter strip — mobile: compact pill card */}
      <div className="md:hidden mt-8 mx-4 relative z-10">
        <div
          className="flex items-stretch rounded-2xl overflow-hidden"
          style={{
            background: "rgba(63,63,153,0.06)",
            border: "1px solid rgba(63,63,153,0.12)",
          }}
        >
          {[
            { value: "200+", label: "Partners" },
            { value: "18+",  label: "States" },
            { value: "50K+", label: "Placed" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className="flex-1 flex flex-col items-center justify-center py-3"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(63,63,153,0.12)" : "none",
              }}
            >
              <span className="text-lg font-black leading-none" style={{ color: "#3f3f99" }}>{value}</span>
              <span className="text-[10px] font-semibold tracking-wide uppercase mt-0.5" style={{ color: "rgba(13,27,62,0.38)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
