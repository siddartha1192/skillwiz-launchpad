import { Crosshair, Brain, School, BarChart3, BookOpen, Bot, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const products = [
  { icon: Crosshair, title: "MyPlacement", desc: "AI-driven campus placement prep with coding, aptitude, core engineering, and company-specific mock tests.", tag: "For Engineering Students" },
  { icon: Brain, title: "SmartGATE", desc: "Personalized GATE preparation combining online + classroom learning, analytics, and expert faculty.", tag: "GATE Preparation" },
  { icon: School, title: "Institute Suite", desc: "Complete assessment and analytics platform for engineering colleges — continuous evaluation, accreditation data, and recruitment tools.", tag: "For Institutes" },
  { icon: BarChart3, title: "NEAT Assessment", desc: "Conduct campus recruitment drives, coding tests, and cognitive assessments with your own device or lab.", tag: "For Recruiters" },
  { icon: BookOpen, title: "Coaching Platform", desc: "Built for schools and coaching institutes — content for JEE, NEET, SSC, Banking, Railway exams.", tag: "For Coaching Centers" },
  { icon: Bot, title: "AI GPS Learning", desc: "Our intelligent algorithm detects gaps, creates a personalized study plan, and navigates the shortest path to your success.", tag: "AI-Powered" },
];

export default function ProductsSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="products" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">OUR PRODUCTS</span>
          <h2 className="section-title text-foreground">Everything You Need to Succeed</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className={`bg-card rounded-2xl p-7 card-hover shadow-md ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <p.icon className="text-accent" size={24} />
              </div>
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">{p.tag}</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
              <button className="text-accent font-semibold text-sm flex items-center gap-1.5 group">
                Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
