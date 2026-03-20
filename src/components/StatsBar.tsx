import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { end: 50000, suffix: "+", label: "Active Learners" },
  { end: 200, suffix: "+", label: "Partner Institutes" },
  { end: 10000, suffix: "+", label: "Assessments Taken" },
  { end: 95, suffix: "%", label: "Placement Rate" },
];

function Counter({ end, suffix, run }: { end: number; suffix: string; run: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = 0;
    const step = Math.ceil(end / 60);
    const id = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(id); }
      else setVal(start);
    }, 25);
    return () => clearInterval(id);
  }, [run, end]);
  return <>{val.toLocaleString("en-IN")}{suffix}</>;
}

export default function StatsBar() {
  const { ref, isVisible } = useScrollReveal(0.3);
  return (
    <section ref={ref} className="bg-orange-gradient py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((s, i) => (
          <div key={i} className={isVisible ? "animate-slide-up" : "opacity-0"} style={{ animationDelay: `${i * 100}ms` }}>
            <div className="text-3xl md:text-4xl font-bold">
              <Counter end={s.end} suffix={s.suffix} run={isVisible} />
            </div>
            <div className="text-white/80 text-sm mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
