import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const posts = [
  { category: "Placement Tips", title: "Placement Strategy That Got Me 5 PPOs", excerpt: "How strategic preparation and mock tests from mySkillWiz helped land multiple pre-placement offers.", color: "from-accent/30 to-accent/10" },
  { category: "GATE Prep", title: "How to Crack GATE in 6 Months", excerpt: "A complete study plan breakdown with smart topic prioritization and continuous assessment.", color: "from-primary/30 to-primary/10" },
  { category: "Campus Drives", title: "Top Companies Visiting Your Campus This Season", excerpt: "Updated list of companies conducting on-campus recruitment and what they look for.", color: "from-accent/20 to-primary/10" },
];

export default function BlogSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">RESOURCES</span>
          <h2 className="section-title text-foreground">Learn. Grow. Succeed.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className={`bg-card rounded-2xl overflow-hidden card-hover shadow-md ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`h-44 bg-gradient-to-br ${p.color}`} />
              <div className="p-6">
                <span className="text-xs font-semibold text-accent tracking-wide uppercase">{p.category}</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.excerpt}</p>
                <button className="text-accent font-semibold text-sm flex items-center gap-1.5 group">
                  Read More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
