import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ── SVG illustrations (kept for reference, no longer rendered) ── */
function IllustrationPlacement() {
  return (
    <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="260" fill="url(#p-bg)" />
      <defs>
        <linearGradient id="p-bg" x1="0" y1="0" x2="480" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff7f0" />
          <stop offset="100%" stopColor="#ffe8d6" />
        </linearGradient>
      </defs>
      {/* Trophy */}
      <rect x="210" y="170" width="60" height="12" rx="4" fill="#3f3f99" opacity=".25" />
      <rect x="228" y="150" width="24" height="22" rx="2" fill="#5252b8" opacity=".4" />
      <path d="M200 90 Q200 60 240 60 Q280 60 280 90 Q280 125 240 135 Q200 125 200 90Z" fill="#3f3f99" opacity=".7" />
      <path d="M200 90 Q185 90 183 108 Q181 126 200 128" stroke="#3f3f99" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M280 90 Q295 90 297 108 Q299 126 280 128" stroke="#3f3f99" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="240" cy="100" r="18" fill="white" opacity=".5" />
      <path d="M231 100 l6 6 12-12" stroke="#3f3f99" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Stars */}
      {[[100,60],[360,50],[380,170],[90,180],[420,100]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r={3+i%2*2} fill="#3f3f99" opacity={0.18+i*0.06} />
      ))}
      {/* Floating badges */}
      <rect x="30" y="90" width="110" height="34" rx="10" fill="white" opacity=".7" />
      <circle cx="50" cy="107" r="10" fill="#3f3f99" opacity=".4" />
      <rect x="66" y="100" width="60" height="7" rx="3" fill="#3f3f99" opacity=".35" />
      <rect x="66" y="111" width="42" height="5" rx="2" fill="#3f3f99" opacity=".2" />
      <rect x="340" y="120" width="110" height="34" rx="10" fill="white" opacity=".7" />
      <circle cx="360" cy="137" r="10" fill="#3f3f99" opacity=".4" />
      <rect x="376" y="130" width="60" height="7" rx="3" fill="#3f3f99" opacity=".35" />
      <rect x="376" y="141" width="42" height="5" rx="2" fill="#3f3f99" opacity=".2" />
      {/* Confetti dots */}
      {[[140,40],[300,30],[420,60],[60,200],[400,210]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="8" height="8" rx="2" fill="#3f3f99" opacity={0.15+i*0.05} transform={`rotate(${i*18} ${x+4} ${y+4})`} />
      ))}
    </svg>
  );
}

function IllustrationGate() {
  return (
    <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="260" fill="url(#g-bg)" />
      <defs>
        <linearGradient id="g-bg" x1="0" y1="0" x2="480" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      {/* Brain outline */}
      <path d="M200 160 Q170 155 165 130 Q160 105 180 95 Q175 75 195 70 Q205 55 225 58 Q240 45 260 55 Q278 50 285 68 Q305 70 308 90 Q325 100 318 125 Q315 150 290 158 Q270 175 240 172 Q215 178 200 160Z"
        fill="#41b7d1" opacity=".15" stroke="#41b7d1" strokeWidth="2" />
      {/* Neural nodes */}
      {[[240,85],[215,105],[265,105],[200,130],[240,128],[278,128],[215,152],[265,152]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="6" fill="#41b7d1" opacity={0.5+i*0.05} />
      ))}
      {/* Connections */}
      {[
        [240,85,215,105],[240,85,265,105],
        [215,105,200,130],[215,105,240,128],[265,105,240,128],[265,105,278,128],
        [200,130,215,152],[240,128,215,152],[240,128,265,152],[278,128,265,152],
      ].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#41b7d1" strokeWidth="1.5" opacity=".35" />
      ))}
      {/* Clock */}
      <circle cx="370" cy="80" r="36" fill="white" opacity=".6" stroke="#41b7d1" strokeWidth="2" />
      <line x1="370" y1="80" x2="370" y2="56" stroke="#41b7d1" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="370" y1="80" x2="388" y2="88" stroke="#0d1b3e" strokeWidth="2" strokeLinecap="round" opacity=".5" />
      <circle cx="370" cy="80" r="4" fill="#41b7d1" />
      {/* Study calendar */}
      <rect x="50" y="80" width="90" height="80" rx="10" fill="white" opacity=".6" stroke="#41b7d1" strokeWidth="1.5" />
      <rect x="50" y="80" width="90" height="22" rx="10" fill="#41b7d1" opacity=".25" />
      {[0,1,2].map(row=>[0,1,2].map(col=>(
        <rect key={`${row}-${col}`} x={62+col*26} y={116+row*16} width="14" height="8" rx="2" fill="#41b7d1" opacity={0.15+Math.random()*0.2} />
      )))}
      {/* Percentage */}
      <text x="240" y="215" textAnchor="middle" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#41b7d1" opacity=".35">6 Month Plan</text>
    </svg>
  );
}

function IllustrationCampus() {
  return (
    <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="260" fill="url(#c-bg)" />
      <defs>
        <linearGradient id="c-bg" x1="0" y1="0" x2="480" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="100%" stopColor="#ede9fe" />
        </linearGradient>
      </defs>
      {/* Building */}
      <rect x="160" y="90" width="160" height="120" rx="4" fill="#3f3f99" opacity=".15" />
      <rect x="160" y="70" width="160" height="24" rx="4" fill="#3f3f99" opacity=".25" />
      <rect x="215" y="60" width="50" height="14" rx="2" fill="#3f3f99" opacity=".3" />
      {/* Windows */}
      {[0,1,2,3].map(col=>[0,1,2].map(row=>(
        <rect key={`${col}-${row}`} x={175+col*35} y={104+row*30} width="20" height="18" rx="3"
          fill="#3f3f99" opacity={0.12+col*0.04+row*0.03} />
      )))}
      {/* Door */}
      <rect x="222" y="178" width="36" height="32" rx="4" fill="#3f3f99" opacity=".3" />
      {/* People */}
      {[[80,185],[100,180],[390,185],[410,182],[430,188]].map(([cx,cy],i)=>(
        <g key={i}>
          <circle cx={cx} cy={cy-22} r="9" fill="#3f3f99" opacity=".25" />
          <rect x={cx-7} y={cy-13} width="14" height="18" rx="4" fill="#3f3f99" opacity=".2" />
        </g>
      ))}
      {/* Company logos placeholder */}
      {[[50,80],[380,70],[420,130],[40,150]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="50" height="28" rx="8" fill="white" opacity=".6" stroke="#3f3f99" strokeWidth="1" strokeOpacity=".3" />
      ))}
      {/* Floating tag */}
      <rect x="320" y="90" width="120" height="38" rx="10" fill="white" opacity=".75" />
      <rect x="334" y="102" width="40" height="7" rx="3" fill="#3f3f99" opacity=".4" />
      <rect x="334" y="113" width="70" height="5" rx="2" fill="#3f3f99" opacity=".2" />
      <text x="240" y="245" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fill="#3f3f99" opacity=".3" fontWeight="700">On-Campus Recruitment</text>
    </svg>
  );
}

const posts = [
  {
    category: "Placement Tips",
    title: "Placement Strategy That Got Me 5 PPOs",
    excerpt: "How strategic preparation and mock tests from mySkillWiz helped land multiple pre-placement offers.",
    color: "#3f3f99",
    photo: "/PlacementPage/pexels-armin-rimoldi-5554261.jpg",
  },
  {
    category: "GATE Prep",
    title: "How to Crack GATE in 6 Months",
    excerpt: "A complete study plan breakdown with smart topic prioritization and continuous assessment.",
    color: "#3f3f99",
    photo: "/gate/exam1.jpg",
  },
  {
    category: "Campus Drives",
    title: "Top Companies Visiting Your Campus This Season",
    excerpt: "Updated list of companies conducting on-campus recruitment and what they look for.",
    color: "#3f3f99",
    photo: "/PlacementPage/pexels-olly-3808809.jpg",
  },
];

export default function BlogSection() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const go = useCallback((next: number, dir: "left" | "right") => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 380);
  }, [animating]);

  const prev = () => go((active - 1 + posts.length) % posts.length, "left");
  const next = () => go((active + 1) % posts.length, "right");

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => go((active + 1) % posts.length, "right"), 5000);
    return () => clearInterval(id);
  }, [active, go]);

  const post = posts[active];

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${animDir === "right" ? "40px" : "-40px"})`
      : "translateX(0)",
    filter: animating ? "blur(4px)" : "blur(0)",
    transition: "opacity 0.38s cubic-bezier(0.16,1,0.3,1), transform 0.38s cubic-bezier(0.16,1,0.3,1), filter 0.3s ease",
  };

  return (
    <section
      className="py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f0ff 0%, #ffffff 50%, #f5f5ff 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: "#3f3f99" }}>
              Resources
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0d1b3e" }}>
              Learn. Grow. Succeed.
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                border: "1.5px solid rgba(13,27,62,0.12)",
                background: "white",
                color: "#0d1b3e",
                boxShadow: "0 2px 12px rgba(13,27,62,0.06)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = post.color; (e.currentTarget as HTMLElement).style.color = post.color; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,27,62,0.12)"; (e.currentTarget as HTMLElement).style.color = "#0d1b3e"; }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                border: "1.5px solid rgba(13,27,62,0.12)",
                background: "white",
                color: "#0d1b3e",
                boxShadow: "0 2px 12px rgba(13,27,62,0.06)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = post.color; (e.currentTarget as HTMLElement).style.color = post.color; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,27,62,0.12)"; (e.currentTarget as HTMLElement).style.color = "#0d1b3e"; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[400px]"
          style={{
            border: `1.5px solid ${post.color}30`,
            boxShadow: `0 24px 64px ${post.color}18`,
            transition: "border-color 0.4s, box-shadow 0.4s",
          }}
        >
          {/* Left — photo */}
          <div className="relative overflow-hidden min-h-[240px] md:min-h-0">
            <img
              src={post.photo}
              alt={post.category}
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
              style={slideStyle}
            />
            {/* Subtle overlay so pill is readable */}
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
            {/* Category pill */}
            <div
              className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest z-10"
              style={{
                background: "white",
                color: post.color,
                boxShadow: `0 4px 16px ${post.color}40`,
              }}
            >
              {post.category}
            </div>
          </div>

          {/* Right — text */}
          <div
            className="flex flex-col justify-between p-8 md:p-10"
            style={{ background: "white" }}
          >
            <div style={slideStyle}>
              <h3
                className="text-2xl md:text-3xl font-bold leading-snug mb-5"
                style={{ color: "#0d1b3e" }}
              >
                {post.title}
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(13,27,62,0.52)" }}>
                {post.excerpt}
              </p>
              <button
                className="group inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5"
                style={{
                  background: post.color,
                  color: "white",
                  boxShadow: `0 8px 24px ${post.color}40`,
                  transition: "background 0.4s, box-shadow 0.4s, transform 0.2s",
                }}
              >
                Read Article
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Dots + counter */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex gap-2">
                {posts.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => go(i, i > active ? "right" : "left")}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "24px" : "8px",
                      height: "8px",
                      background: i === active ? post.color : "rgba(13,27,62,0.15)",
                    }}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold ml-1" style={{ color: "rgba(13,27,62,0.3)" }}>
                {active + 1} / {posts.length}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
