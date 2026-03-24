import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, CheckCircle2, Brain, Zap, Globe, Target,
  BarChart3, BookOpen, Users, Play, ChevronRight,
} from "lucide-react";

/* ── scroll reveal ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    const el = ref.current; if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight + 300) { setVisible(true); return; }
  }, []);
  useEffect(() => {
    const el = ref.current; if (!el || visible) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { rootMargin: "0px 0px 250px 0px" });
    obs.observe(el); return () => obs.disconnect();
  }, [visible]);
  return { ref, visible };
}

const spring = "cubic-bezier(0.16,1,0.3,1)";
function rv(visible: boolean, delay = 0, from: "up" | "left" | "right" | "fade" = "up"): React.CSSProperties {
  const t = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", fade: "translateY(0)" };
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : t[from],
    filter: visible ? "blur(0)" : "blur(4px)",
    transition: `opacity 0.6s ${spring} ${delay}ms, transform 0.6s ${spring} ${delay}ms, filter 0.5s ease ${delay}ms`,
  };
}

// Logo palette
const INDIGO       = "#3f3f99";
const CYAN         = "#41b7d1";
const INDIGO_LIGHT = "#9898d4";
const CYAN_LIGHT   = "#7dd8eb";

const branches = [
  { label: "Computer Science", short: "CS",  color: CYAN   },
  { label: "Electronics",      short: "ECE", color: INDIGO },
  { label: "Electrical",       short: "EE",  color: CYAN   },
  { label: "Mechanical",       short: "ME",  color: INDIGO },
  { label: "Civil",            short: "CE",  color: CYAN   },
];

const highlights = [
  { icon: Globe,     color: CYAN,   title: "Anytime & Anywhere",           desc: "On your phone, access tests, notes, videos and forums. Learn at your own pace while we monitor and guide you." },
  { icon: Zap,       color: INDIGO, title: "Continuous Assessment",         desc: "Improve your areas of weakness with ongoing micro-assessments that adapt as you progress." },
  { icon: Target,    color: CYAN,   title: "Most Economical",               desc: "Save money compared to expensive coaching institutes — and save time by preparing on campus. We come to you." },
  { icon: BookOpen,  color: INDIGO, title: "Digital & Classroom Coaching",  desc: "Best of both worlds — cutting-edge digital tools combined with expert classroom guidance." },
  { icon: Brain,     color: CYAN,   title: "Personalized Coaching",         desc: "One student at a time. Our AI algorithm creates a path built specifically for your strengths and gaps." },
  { icon: BarChart3, color: INDIGO, title: "Data · Insight · Analytics",    desc: "Deep analytics on every test, every question — so you always know exactly where to focus next." },
];

const offerings = [
  "3000+ Questions & Solutions for each branch",
  "Guaranteed Personalized Learning & Mentoring",
  "Reference Study Capsules, eBooks & Videos",
  "All India Mock Test Series",
  "Classroom Faculties for Teaching & Guidance",
  "Practice Anytime & Anywhere",
  "Collaborate with Peers — Discussion & Forum",
];

const steps = [
  { num: "01", color: CYAN,   title: "Enroll & Onboard",           desc: "Sign up, pick your branch, and get your personalised dashboard set up in minutes." },
  { num: "02", color: INDIGO, title: "Measure & Baseline",         desc: "Take a diagnostic test. Our AI maps your knowledge graph and identifies exact gaps." },
  { num: "03", color: CYAN,   title: "Attend Right Classes",       desc: "Online + offline sessions targeted to your weak areas — no wasted time on what you already know." },
  { num: "04", color: INDIGO, title: "Take Tests to Find Gaps",    desc: "Continuous mock tests reveal regressions early and track your improvement week over week." },
];

/* ── How It Works sticky scroll ── */
function HowItWorks() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current; if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrolled = -top;
      const total = height - window.innerHeight;
      if (scrolled < 0 || scrolled > total) return;
      setActive(Math.min(steps.length - 1, Math.floor((scrolled / total) * steps.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const s = steps[active];
  const displayColor = s.color === INDIGO ? INDIGO_LIGHT : CYAN_LIGHT;

  return (
    <div ref={sectionRef} style={{ height: `${steps.length * 55}vh` }}>
      <div className="sticky overflow-hidden" style={{ top: "15vh", height: "70vh" }}>
        {/* BG */}
        <img src="/gate/exam1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "rgba(13,27,62,0.82)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30">
          <div className="h-full transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%`, background: `linear-gradient(90deg, ${CYAN}, ${INDIGO})` }} />
        </div>

        {/* Step counter */}
        <div className="absolute top-5 right-8 z-20 flex items-center gap-1.5">
          <span className="font-black text-2xl" style={{ color: displayColor }}>{String(active + 1).padStart(2, "0")}</span>
          <span className="text-white/25 font-bold">/</span>
          <span className="text-white/25 font-bold">{String(steps.length).padStart(2, "0")}</span>
        </div>

        {/* Centred content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
          <p className="text-[10px] font-bold tracking-[3.5px] uppercase mb-4" style={{ color: CYAN_LIGHT }}>How It Works</p>
          <div key={active} className="flex flex-col items-center text-center"
            style={{ maxWidth: 680, animation: "stepIn 0.55s cubic-bezier(0.16,1,0.3,1) both" }}>
            <div className="text-7xl font-black mb-4 leading-none" style={{ color: `${displayColor}25`, letterSpacing: "-0.04em" }}>{s.num}</div>
            <h3 className="font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,5vw,3.8rem)", letterSpacing: "-0.03em", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
              {s.title}
            </h3>
            <p style={{ fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.70)", maxWidth: 520 }} className="leading-relaxed mb-6">
              {s.desc}
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
              style={{ background: "rgba(0,0,0,0.3)", border: `1.5px solid ${displayColor}35`, backdropFilter: "blur(10px)" }}>
              <div className="w-2 h-2 rounded-full" style={{ background: displayColor, boxShadow: `0 0 8px ${displayColor}` }} />
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>Step {active + 1} of {steps.length}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2.5 mt-7">
            {steps.map((st, i) => {
              const dc = st.color === INDIGO ? INDIGO_LIGHT : CYAN_LIGHT;
              return (
                <div key={i} className="rounded-full transition-all duration-300"
                  style={{ width: active === i ? 24 : 7, height: 7, background: active === i ? dc : "rgba(255,255,255,0.2)", boxShadow: active === i ? `0 0 8px ${dc}` : "none" }} />
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@keyframes stepIn { from{opacity:0;transform:translateY(20px);filter:blur(6px)} to{opacity:1;transform:translateY(0);filter:blur(0)} }`}</style>
    </div>
  );
}

export default function SmartGate() {
  const [activeBranch, setActiveBranch] = useState(0);
  const hero       = useReveal();
  const branchSec  = useReveal();
  const hlSec      = useReveal();
  const offerSec   = useReveal();
  const prepareSec = useReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden flex flex-col" style={{ minHeight: "92vh" }}>
        <div className="absolute inset-0">
          <img src="/gate/exam2.jpg" alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(13,27,62,0.95) 0%, rgba(13,27,62,0.78) 45%, rgba(13,27,62,0.25) 100%)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <div ref={hero.ref} className="relative z-10 flex-1 flex items-center px-6 md:px-16 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: `${CYAN}22`, color: CYAN_LIGHT, border: `1px solid ${CYAN}45` }}>
              <Brain size={11} /> GPS to GATE
            </div>

            <h1 className="font-black text-white leading-[1.0] mb-5"
              style={{ ...rv(hero.visible, 0, "left"), fontSize: "clamp(3.2rem,6.5vw,5.5rem)", letterSpacing: "-0.03em" }}>
              Smart<span style={{ color: CYAN_LIGHT }}>GATE</span>
            </h1>

            <p className="font-bold mb-3" style={{ ...rv(hero.visible, 80), fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "rgba(255,255,255,0.85)" }}>
              Find and navigate the shortest distance<br />to score high in the GATE exam.
            </p>

            <p className="text-white/60 leading-relaxed mb-10" style={{ ...rv(hero.visible, 130), fontSize: "clamp(0.95rem,1.2vw,1.1rem)", maxWidth: 500 }}>
              Powered by a proprietary AI algorithm — continuous measurement, personalized learning and expert mentoring to guarantee your success.
            </p>

            <div className="flex flex-wrap gap-4" style={rv(hero.visible, 180)}>
              <Link to="/demo"
                className="group flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 10px 32px ${INDIGO}55` }}>
                Take a Test <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#how-it-works"
                className="flex items-center gap-2.5 font-semibold px-6 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.04]"
                style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.22)", backdropFilter: "blur(8px)" }}>
                <Play size={13} fill="white" /> See How It Works
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-[10px] tracking-widest uppercase">Explore</span>
            <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: CYAN_LIGHT }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ BRANCHES ══ */}
      <section className="py-20 px-6 md:px-16" style={{ background: "linear-gradient(135deg,#f0f0ff 0%,#ffffff 50%,#f5f5ff 100%)" }}>
        <div className="max-w-6xl mx-auto" ref={branchSec.ref}>
          <div className="text-center mb-12" style={rv(branchSec.visible)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: INDIGO }}>Branches We Cover</p>
            <h2 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              Prepare for <span style={{ color: CYAN }}>Success</span>
            </h2>
            <p className="text-base mx-auto" style={{ color: "rgba(13,27,62,0.55)", maxWidth: 560 }}>
              Now serving the following branches. If you'd like your branch added, contact us and we'll understand your needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {branches.map((b, i) => {
              const on = activeBranch === i;
              return (
                <button key={i} onClick={() => setActiveBranch(i)}
                  className="group flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1"
                  style={{
                    ...rv(branchSec.visible, i * 70),
                    background: on ? `linear-gradient(135deg, ${b.color}18, ${b.color}08)` : "white",
                    border: `2px solid ${on ? b.color : "rgba(13,27,62,0.08)"}`,
                    color: on ? "#0d1b3e" : "rgba(13,27,62,0.45)",
                    boxShadow: on ? `0 12px 36px ${b.color}22` : "0 4px 16px rgba(13,27,62,0.06)",
                  }}>
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-300"
                    style={{ background: on ? b.color : "rgba(13,27,62,0.06)", color: on ? "white" : "rgba(13,27,62,0.3)" }}>
                    {b.short}
                  </span>
                  {b.label}
                  {on && <ChevronRight size={16} style={{ color: b.color }} />}
                </button>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl p-6 text-center" style={{ background: "rgba(13,27,62,0.03)", border: "1.5px dashed rgba(13,27,62,0.1)" }}>
            <p className="text-sm" style={{ color: "rgba(13,27,62,0.5)" }}>
              You can learn more about what's covered in each branch. If you would like your branch here,{" "}
              <a href="/demo" className="font-semibold transition-colors hover:underline" style={{ color: CYAN }}>contact us →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ PROGRAM HIGHLIGHTS ══ */}
      <section className="py-24 px-6 md:px-16 relative" style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-6xl mx-auto relative z-10" ref={hlSec.ref}>
          <div className="text-center mb-14" style={rv(hlSec.visible)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: CYAN_LIGHT }}>Program Highlights</p>
            <h2 className="font-black text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", letterSpacing: "-0.02em" }}>
              Best of Technology, Teaching<br /><span style={{ color: CYAN_LIGHT }}>& Mentoring — Combined</span>
            </h2>
            <p className="mx-auto" style={{ color: "rgba(255,255,255,0.65)", maxWidth: 520 }}>
              We bring the best of tech, analysis, teaching and mentoring to prepare you smartly — reaching your goal in the shortest distance, time and money.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              const dc = h.color === INDIGO ? INDIGO_LIGHT : CYAN_LIGHT;
              return (
                <div key={i}
                  className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-default"
                  style={{
                    ...rv(hlSec.visible, i * 80),
                    background: "rgba(255,255,255,0.04)",
                    border: "1.5px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${dc}50`; el.style.background = `${dc}0d`; el.style.boxShadow = `0 20px 48px ${dc}18`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "rgba(255,255,255,0.04)"; el.style.boxShadow = "none"; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${dc}18` }}>
                    <Icon size={22} style={{ color: dc }} />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{h.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PREPARE FOR SUCCESS — offerings + photo ══ */}
      <section className="py-24 px-6 md:px-16" style={{ background: "linear-gradient(135deg,#f0f0ff 0%,#ffffff 60%,#f5f5ff 100%)" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-6" ref={prepareSec.ref}>

          {/* Left — text */}
          <div style={rv(prepareSec.visible, 0, "left")}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: INDIGO }}>Prepare for Success</p>
            <h2 className="font-black mb-5 leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              Everything You Need<br /><span style={{ color: CYAN }}>to Crack GATE</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(13,27,62,0.60)" }}>
              SmartGATE is built on innovative technology from the USA and a winning strategy from India — a proprietary (patent-pending) algorithm of continuous measurement and learning to guarantee your success.
            </p>
            <ul className="space-y-3 mb-10">
              {offerings.map((o, i) => (
                <li key={i} className="flex items-start gap-3" style={rv(prepareSec.visible, 80 + i * 50)}>
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: CYAN }} />
                  <span className="text-sm font-medium" style={{ color: "rgba(13,27,62,0.72)" }}>{o}</span>
                </li>
              ))}
            </ul>
            <Link to="/demo"
              className="group inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.04]"
              style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 10px 32px ${INDIGO}50` }}>
              Take a Test Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right — photo + badges */}
          <div style={rv(prepareSec.visible, 150, "right")}>
            <div className="relative" style={{ borderRadius: "1.5rem" }}>
              <img src="/gate/groth.png" alt="Prepare for Success"
                className="w-full rounded-3xl"
                style={{ display: "block", boxShadow: "0 40px 80px rgba(13,27,62,0.18)" }} />

              <div className="absolute -top-4 -left-4 px-4 py-3 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)", boxShadow: "0 8px 28px rgba(13,27,62,0.14)" }}>
                <div className="text-2xl font-black" style={{ color: "#0d1b3e" }}>3000+</div>
                <div className="text-xs font-semibold" style={{ color: "rgba(13,27,62,0.45)" }}>Questions & Solutions</div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${CYAN}, #5bcfe8)`, boxShadow: `0 8px 28px ${CYAN}55` }}>
                <div className="text-2xl font-black text-white">AI-Powered</div>
                <div className="text-xs font-semibold text-white/80">Personalized Path</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS — sticky scroll ══ */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden py-28 px-6 text-center"
        style={{ background: "linear-gradient(135deg,#f0f0ff 0%,#ffffff 45%,#f5f5ff 100%)" }}>
        <div className="absolute -left-24 top-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${INDIGO}18 0%,transparent 70%)` }} />
        <div className="absolute -right-24 bottom-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${CYAN}18 0%,transparent 70%)` }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse,${INDIGO}0a 0%,transparent 70%)` }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[3.5px] uppercase mb-4" style={{ color: INDIGO }}>Start Today</p>
          <h2 className="font-black mb-5 leading-tight" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", letterSpacing: "-0.03em", color: "#0d1b3e" }}>
            Ready to Crack<br /><span style={{ color: CYAN }}>GATE?</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(13,27,62,0.55)" }}>
            Join thousands of students who found the shortest path to GATE success with SmartGATE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo"
              className="group flex items-center gap-3 font-bold px-10 py-4 rounded-2xl text-white text-lg transition-all duration-300 hover:scale-[1.04]"
              style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 14px 44px ${INDIGO}45` }}>
              Take a Test <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/demo"
              className="font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-[1.04]"
              style={{ background: "white", border: "2px solid rgba(13,27,62,0.12)", color: "#0d1b3e", boxShadow: "0 4px 20px rgba(13,27,62,0.08)" }}>
              Request a Demo →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
