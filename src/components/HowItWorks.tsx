import { ClipboardList, FlaskConical, Map, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: ClipboardList, title: "Register & Set Goal", desc: "Choose your target: Placement, GATE, or Competitive Exam" },
  { icon: FlaskConical, title: "Take Diagnostic Test", desc: "AI assesses your current level across all topics" },
  { icon: Map, title: "Get Your Learning GPS", desc: "A personalized study plan is generated just for you" },
  { icon: Rocket, title: "Practice, Improve, Succeed", desc: "Daily practice, mock tests, mentor sessions, Smart Resume" },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title text-foreground">From Day One to Dream Job</h2>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-accent/20" />
          {steps.map((s, i) => (
            <div key={i} className={`flex flex-col items-center text-center relative ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 relative z-10 border-2 border-accent/20">
                <s.icon className="text-accent" size={28} />
              </div>
              <span className="text-accent font-bold text-sm mb-1">Step {i + 1}</span>
              <h3 className="font-semibold text-foreground mb-1.5">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((s, i) => (
            <div key={i} className={`flex gap-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${i * 120}ms` }}>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center border-2 border-accent/20">
                  <s.icon className="text-accent" size={22} />
                </div>
                {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-accent/20 mt-2" />}
              </div>
              <div className="pb-6">
                <span className="text-accent font-bold text-xs">Step {i + 1}</span>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
