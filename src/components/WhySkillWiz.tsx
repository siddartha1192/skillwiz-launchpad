import { Crosshair, TrendingUp, Trophy, Users, Smartphone, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Crosshair, title: "Personalized AI Learning Path", desc: "Our GPS algorithm identifies your weak areas and creates the shortest route to your goal." },
  { icon: TrendingUp, title: "Continuous Assessment", desc: "Not just one-time tests — ongoing micro-assessments that adapt as you improve." },
  { icon: Trophy, title: "Gamified Experience", desc: "Leaderboards, badges, and adaptive challenges keep you motivated and competitive." },
  { icon: Users, title: "Expert Mentors", desc: "1:1 sessions with industry professionals and college alumni who've been in your shoes." },
  { icon: Smartphone, title: "Learn Anywhere", desc: "Offline-capable mobile app. Download tests, practice without internet, sync when back online." },
  { icon: Building2, title: "Institute Analytics", desc: "Administrators get real-time insights to make data-driven decisions before placement season." },
];

export default function WhySkillWiz() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="about" className="section-padding bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">WHY SKILLWIZ</span>
          <h2 className="section-title text-white">We Don't Just Assess — We Transform</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`flex gap-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
                <f.icon className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1.5">{f.title}</h3>
                <p className="text-light text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
