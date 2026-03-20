import { useState } from "react";

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
      className="flex-shrink-0 mx-4 flex items-center justify-center rounded-2xl px-8 py-5 cursor-pointer transition-all duration-300"
      style={{
        width: 200,
        height: 100,
        background: hovered ? "white" : "rgba(255,255,255,0.85)",
        border: `2px solid ${hovered ? "#1EC8E8" : "rgba(13,27,62,0.08)"}`,
        boxShadow: hovered
          ? "0 20px 48px rgba(13,27,62,0.18), 0 0 0 4px rgba(30,200,232,0.1)"
          : "0 4px 16px rgba(13,27,62,0.07)",
        transform: hovered ? "translateY(-8px) scale(1.06)" : "translateY(0) scale(1)",
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
          maxHeight: 60,
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

  return (
    <section
      className="relative overflow-hidden py-16"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #fff7f0 100%)",
        borderTop: "1px solid rgba(13,27,62,0.06)",
        borderBottom: "1px solid rgba(13,27,62,0.06)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(30,200,232,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,200,232,0.08) 0%, transparent 70%)" }} />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,122,26,0.08) 0%, transparent 70%)" }} />

      {/* Header */}
      <div className="text-center mb-10 relative z-10 px-4">
        <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: "#1EC8E8" }}>
          Trusted Partners
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0d1b3e" }}>
          Powering <span style={{ color: "#FF7A1A" }}>200+</span> Leading Institutions
        </h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(13,27,62,0.45)" }}>
          Top engineering colleges across India trust SkillWiz to prepare their students for placement and GATE success.
        </p>
      </div>

      {/* Marquee wrapper — hover pauses both rows */}
      <div
        className="relative z-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(240,249,255,1) 0%, rgba(240,249,255,0.85) 40%, transparent 100%)" }} />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(255,247,240,1) 0%, rgba(255,255,255,0.85) 40%, transparent 100%)" }} />

        {/* Single row — scrolls left */}
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

      {/* Counter strip */}
      <div className="flex items-center justify-center gap-8 mt-10 flex-wrap px-4 relative z-10">
        {[
          { value: "200+", label: "Partner Institutes", color: "#1EC8E8" },
          { value: "18+",  label: "States Covered",     color: "#FF7A1A" },
          { value: "50K+", label: "Students Placed",    color: "#5353C8" },
        ].map(({ value, label, color }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-2xl font-black" style={{ color }}>{value}</span>
            <span className="text-sm font-medium" style={{ color: "rgba(13,27,62,0.45)" }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
