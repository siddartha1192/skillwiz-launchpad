import { useEffect, useRef, useState } from "react";
import { Crosshair, TrendingUp, Trophy, Users, Smartphone, Building2 } from "lucide-react";

const features = [
  { icon: Crosshair,  color: "#1EC8E8", tag: "AI Intelligence",  title: "Personalized AI Learning Path", desc: "Our GPS algorithm maps every student's knowledge graph in real-time, identifies exact weak nodes, and plots the shortest route to their goal.", stat: { value: "3×",   label: "Faster skill improvement" } },
  { icon: TrendingUp, color: "#FF7A1A", tag: "Smart Assessment", title: "Continuous Assessment",          desc: "One-time tests show a snapshot. Our platform runs intelligent micro-assessments in the background — tracking momentum and adapting difficulty week by week.", stat: { value: "70%",  label: "Reduction in knowledge gaps" } },
  { icon: Trophy,     color: "#a78bfa", tag: "Engagement",       title: "Gamified Experience",            desc: "Leaderboards, streaks, badges, and challenge modes turn studying into a sport. Students compete, celebrate wins and push each other forward.", stat: { value: "4.9★", label: "Average student rating" } },
  { icon: Users,      color: "#1EC8E8", tag: "Mentorship",       title: "Expert Mentors",                 desc: "Live sessions with industry professionals and college alumni. Get resume feedback, mock interviews, and career guidance from people who've done it.", stat: { value: "500+", label: "Mentor sessions monthly" } },
  { icon: Smartphone, color: "#FF7A1A", tag: "Accessibility",    title: "Learn Anywhere",                 desc: "Fully offline-capable mobile app. Download question sets, take timed tests without internet, and sync results automatically when back online.", stat: { value: "98%",  label: "Uptime & availability" } },
  { icon: Building2,  color: "#a78bfa", tag: "Administration",   title: "Institute Analytics",            desc: "Real-time dashboards show administrators exactly where each batch stands — topic by topic, student by student. Act before placement season arrives.", stat: { value: "200+", label: "Institutes empowered" } },
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

  return (
    <div id="about" ref={sectionRef} style={{ height: `calc(${features.length * 28}vh + 70vh)` }}>
      <div className="sticky overflow-hidden" style={{ top: "15vh", height: "70vh" }}>

        {/* Background photo */}
        <img
          src="/PlacementPage/pexels-karola-g-6958531.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Single uniform dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(13,27,62,0.70)" }} />

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30">
          <div className="h-full transition-all duration-500"
            style={{ width: `${((active + 1) / features.length) * 100}%`, background: `linear-gradient(90deg, #1EC8E8, ${f.color})` }} />
        </div>

        {/* Step counter */}
        <div className="absolute top-5 right-8 z-20 flex items-center gap-1.5">
          <span className="font-black text-2xl" style={{ color: f.color }}>{String(active + 1).padStart(2, "0")}</span>
          <span className="text-white/25 font-bold">/</span>
          <span className="text-white/25 font-bold">{String(features.length).padStart(2, "0")}</span>
        </div>

        {/* Centred content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">

          {/* Section eyebrow */}
          <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ color: "#FF7A1A" }}>Why SkillWiz</p>

          {/* Feature block */}
          <div
            key={active}
            className="flex flex-col items-center text-center w-full"
            style={{
              maxWidth: 860,
              animation: "featureIn 0.55s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            {/* Tag + Icon row */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${f.color}20`,
                  border: `2px solid ${f.color}40`,
                  boxShadow: `0 0 32px ${f.color}40`,
                }}>
                <f.icon size={30} style={{ color: f.color }} />
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: `${f.color}18`, color: f.color, border: `1px solid ${f.color}35` }}>
                {f.tag}
              </div>
            </div>

            {/* Title — big & impactful */}
            <h3 className="font-black text-white leading-[1.0] mb-5"
              style={{
                fontSize: "clamp(3.2rem,7vw,5.6rem)",
                letterSpacing: "-0.03em",
                textShadow: "0 2px 40px rgba(0,0,0,0.5)",
              }}>
              {f.title}
            </h3>

            {/* Desc */}
            <p className="leading-relaxed mb-6"
              style={{ fontSize: "clamp(1rem,1.4vw,1.2rem)", color: "rgba(255,255,255,0.65)", maxWidth: 620 }}>
              {f.desc}
            </p>

            {/* Stat */}
            <div className="inline-flex items-center gap-4 px-7 py-3.5 rounded-2xl"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: `1.5px solid ${f.color}35`,
                backdropFilter: "blur(10px)",
              }}>
              <span className="font-black text-3xl" style={{ color: f.color }}>{f.stat.value}</span>
              <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{f.stat.label}</span>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2.5 mt-7">
            {features.map((ft, i) => (
              <div key={i} className="rounded-full transition-all duration-300"
                style={{
                  width: active === i ? 24 : 7,
                  height: 7,
                  background: active === i ? ft.color : "rgba(255,255,255,0.2)",
                  boxShadow: active === i ? `0 0 8px ${ft.color}` : "none",
                }} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes featureIn {
          from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }
      `}</style>
    </div>
  );
}
