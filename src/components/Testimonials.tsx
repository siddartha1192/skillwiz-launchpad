import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Sayanjit Roy", college: "KIIT University — M.E. Electrical", company: "Cognizant", quote: "SkillWiz played a key role in making me industry ready. The skill enhancement modules are so in-depth I never needed another resource.", initials: "SR" },
  { name: "Priya Sharma", college: "VIT University — B.Tech CSE", company: "Amazon", quote: "The company-specific mock tests and leaderboard strategy helped me crack Amazon in my final year.", initials: "PS" },
  { name: "Rahul Mehta", college: "NIT Trichy — B.Tech ECE", company: "Infosys", quote: "From Level 1 to Level 3 in 3 months. The gamified modules made studying addictive.", initials: "RM" },
  { name: "Anjali Nair", college: "Amrita University — B.Tech IT", company: "Capgemini", quote: "The Smart Resume feature suggested company-specific keywords. I got shortlisted in my first attempt.", initials: "AN" },
];

const CYAN = "#41b7d1";
const INDIGO = "#3f3f99";

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

  function Card({ t, delay }: { t: typeof testimonials[0]; delay?: string }) {
    return (
      <div
        className={`rounded-2xl p-7 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${CYAN}30`,
          animationDelay: delay,
        }}
      >
        <Quote size={28} style={{ color: CYAN }} className="mb-4" />
        <p className="text-white/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} style={{ color: CYAN }} fill={CYAN} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
            style={{ background: `${INDIGO}40`, color: CYAN, border: `1.5px solid ${CYAN}50` }}
          >
            {t.initials}
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{t.name}</div>
            <div className="text-white/50 text-xs">{t.college}</div>
            <div className="text-xs font-semibold" style={{ color: CYAN }}>{t.company}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="success-stories" className="section-padding bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label" style={{ color: CYAN }}>SUCCESS STORIES</span>
          <h2 className="section-title text-white">Students Who Made It Big</h2>
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Desktop: show 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => (
              <Card key={offset} t={testimonials[(current + offset) % testimonials.length]} delay={`${offset * 100}ms`} />
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <Card t={testimonials[current]} />
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors active:scale-95"
              style={{ border: `1px solid ${CYAN}40`, color: "rgba(255,255,255,0.6)" }}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 10,
                    height: 10,
                    background: i === current ? CYAN : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors active:scale-95"
              style={{ border: `1px solid ${CYAN}40`, color: "rgba(255,255,255,0.6)" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
