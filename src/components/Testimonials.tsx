import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Sayanjit Roy", college: "KIIT University — M.E. Electrical", company: "Cognizant", quote: "SkillWiz played a key role in making me industry ready. The skill enhancement modules are so in-depth I never needed another resource.", initials: "SR" },
  { name: "Priya Sharma", college: "VIT University — B.Tech CSE", company: "Amazon", quote: "The company-specific mock tests and leaderboard strategy helped me crack Amazon in my final year.", initials: "PS" },
  { name: "Rahul Mehta", college: "NIT Trichy — B.Tech ECE", company: "Infosys", quote: "From Level 1 to Level 3 in 3 months. The gamified modules made studying addictive.", initials: "RM" },
  { name: "Anjali Nair", college: "Amrita University — B.Tech IT", company: "Capgemini", quote: "The Smart Resume feature suggested company-specific keywords. I got shortlisted in my first attempt.", initials: "AN" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="success-stories" className="section-padding bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">SUCCESS STORIES</span>
          <h2 className="section-title text-white">Students Who Made It Big</h2>
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Desktop: show 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const t = testimonials[(current + offset) % testimonials.length];
              return (
                <div key={offset} className={`rounded-2xl bg-white/5 border border-white/10 p-7 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${offset * 100}ms` }}>
                  <Quote className="text-accent mb-4" size={28} />
                  <p className="text-white/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent" fill="hsl(var(--orange))" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">{t.initials}</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/50 text-xs">{t.college}</div>
                      <div className="text-accent text-xs font-semibold">{t.company}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            {(() => {
              const t = testimonials[current];
              return (
                <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
                  <Quote className="text-accent mb-4" size={28} />
                  <p className="text-white/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent" fill="hsl(var(--orange))" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">{t.initials}</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/50 text-xs">{t.college}</div>
                      <div className="text-accent text-xs font-semibold">{t.company}</div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors active:scale-95">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-white/30"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors active:scale-95">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
