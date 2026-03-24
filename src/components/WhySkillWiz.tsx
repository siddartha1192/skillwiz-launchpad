import { useEffect, useRef, useState } from "react";
import { Crosshair, TrendingUp, Trophy, Users, Smartphone, Building2 } from "lucide-react";

const scrollImages = ["/scroll/web1.jpg", "/scroll/web2.jpg", "/scroll/web3.jpg", "/scroll/web4.jpg"];

const features = [
  { icon: Crosshair,  color: "#41b7d1", tag: "AI Intelligence",  title: "Personalized AI Learning Path", desc: "Our GPS algorithm maps every student's knowledge graph in real-time, identifies exact weak nodes, and plots the shortest route to their goal.", stat: { value: "3×",   label: "Faster skill improvement" } },
  { icon: TrendingUp, color: "#3f3f99", tag: "Smart Assessment", title: "Continuous Assessment",          desc: "One-time tests show a snapshot. Our platform runs intelligent micro-assessments in the background — tracking momentum and adapting difficulty week by week.", stat: { value: "70%",  label: "Reduction in knowledge gaps" } },
  { icon: Trophy,     color: "#41b7d1", tag: "Engagement",       title: "Gamified Experience",            desc: "Leaderboards, streaks, badges, and challenge modes turn studying into a sport. Students compete, celebrate wins and push each other forward.", stat: { value: "4.9★", label: "Average student rating" } },
  { icon: Users,      color: "#3f3f99", tag: "Mentorship",       title: "Expert Mentors",                 desc: "Live sessions with industry professionals and college alumni. Get resume feedback, mock interviews, and career guidance from people who've done it.", stat: { value: "500+", label: "Mentor sessions monthly" } },
  { icon: Smartphone, color: "#41b7d1", tag: "Accessibility",    title: "Learn Anywhere",                 desc: "Fully offline-capable mobile app. Download question sets, take timed tests without internet, and sync results automatically when back online.", stat: { value: "98%",  label: "Uptime & availability" } },
  { icon: Building2,  color: "#3f3f99", tag: "Administration",   title: "Institute Analytics",            desc: "Real-time dashboards show administrators exactly where each batch stands — topic by topic, student by student. Act before placement season arrives.", stat: { value: "200+", label: "Institutes empowered" } },
];

export default function WhySkillWiz() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrolled = -top;
      const total = height - window.innerHeight;
      if (scrolled < 0 || scrolled > total) return;
      const idx = Math.min(features.length - 1, Math.floor((scrolled / total) * features.length));
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const f = features[active];
  // Lighten colors for visibility on the dark gradient panel
  const displayColor = f.color === "#3f3f99" ? "#9898d4" : "#7dd8eb";

  return (
    <div id="about" ref={sectionRef} style={{ height: `calc(${features.length * 28}vh + 70vh)` }}>
      <div className="sticky overflow-hidden" style={{ top: "15vh", height: "70vh" }}>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30">
          <div className="h-full transition-all duration-500"
            style={{ width: `${((active + 1) / features.length) * 100}%`, background: `linear-gradient(90deg, #41b7d1, #3f3f99)` }} />
        </div>

        <div className="absolute inset-0 flex">

          {/* ── LEFT: Photo panel ── */}
          <div className="relative overflow-hidden" style={{ width: "40%" }}>
            {scrollImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: i === active % scrollImages.length ? 1 : 0, objectPosition: "center top" }}
              />
            ))}
          </div>

          {/* ── RIGHT: Text panel ── */}
          <div
            className="relative flex flex-col justify-center px-10 lg:px-14"
            style={{
              width: "60%",
              background: "linear-gradient(135deg, #1a2461, #0d3b6b, #241b5e, #0e2d5e, #1a2461)",
              backgroundSize: "300% 300%",
              animation: "panelGradient 10s ease infinite",
            }}
          >
            {/* Feature-color radial glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 20% 50%, ${displayColor}22 0%, transparent 60%)`, transition: "background 0.6s" }} />

            {/* Vertical scroll dots */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
              {features.map((ft, i) => {
                const dotColor = ft.color === "#3f3f99" ? "#9898d4" : "#7dd8eb";
                return (
                  <div key={i} className="rounded-full transition-all duration-300"
                    style={{
                      width: 6,
                      height: active === i ? 26 : 6,
                      background: active === i ? dotColor : "rgba(255,255,255,0.2)",
                      boxShadow: active === i ? `0 0 8px ${dotColor}` : "none",
                    }} />
                );
              })}
            </div>

            {/* Content — animates on change */}
            <div
              key={active}
              className="relative z-10"
              style={{ animation: "featureIn 0.5s cubic-bezier(0.16,1,0.3,1) both", maxWidth: 460 }}
            >
              {/* Eyebrow */}
              <p className="text-sm font-bold tracking-[4px] uppercase mb-5" style={{ color: "#7dd8eb" }}>
                Why SkillWiz
              </p>

              {/* Icon + tag */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${displayColor}25`,
                    border: `2px solid ${displayColor}60`,
                    boxShadow: `0 0 24px ${displayColor}30`,
                  }}>
                  <f.icon size={26} style={{ color: displayColor }} />
                </div>
                <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest"
                  style={{ background: `${displayColor}25`, color: displayColor, border: `1.5px solid ${displayColor}70` }}>
                  {f.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-black text-white leading-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", letterSpacing: "-0.03em" }}>
                {f.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed mb-7"
                style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", color: "rgba(255,255,255,0.92)", maxWidth: 420 }}>
                {f.desc}
              </p>

              {/* Stat */}
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-xl"
                style={{
                  background: `${displayColor}20`,
                  border: `1.5px solid ${displayColor}60`,
                }}>
                <span className="font-black text-3xl" style={{ color: displayColor }}>{f.stat.value}</span>
                <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.90)" }}>{f.stat.label}</span>
              </div>

              {/* Step counter */}
              <div className="flex items-center gap-1.5 mt-8">
                <span className="font-black text-xl" style={{ color: displayColor }}>{String(active + 1).padStart(2, "0")}</span>
                <span className="font-bold" style={{ color: "rgba(255,255,255,0.45)" }}>/</span>
                <span className="font-bold" style={{ color: "rgba(255,255,255,0.45)" }}>{String(features.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Scroll hint — visible only on first slide */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
              style={{
                opacity: active === 0 ? 1 : 0,
                transition: "opacity 0.5s ease",
                animation: active === 0 ? "scrollHintFade 2s ease-in-out infinite" : "none",
              }}
            >
              <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                scroll to explore
              </span>
              <div className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                <div className="w-1 h-2 rounded-full" style={{ background: "#7dd8eb", animation: "scrollDotBounce 1.4s ease-in-out infinite" }} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes featureIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes panelGradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scrollDotBounce {
          0%, 100% { transform: translateY(0);   opacity: 1;   }
          50%       { transform: translateY(6px); opacity: 0.4; }
        }
        @keyframes scrollHintFade {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.45; }
        }
      `}</style>
    </div>
  );
}
