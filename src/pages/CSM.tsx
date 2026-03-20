import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Trophy, Users, Target, Zap, MessageCircle, FileText,
  ArrowRight, CheckCircle2, TrendingUp, Star,
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
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "0px 0px 250px 0px" }
    );
    obs.observe(el); return () => obs.disconnect();
  }, [visible]);
  return { ref, visible };
}

const spring = "cubic-bezier(0.16,1,0.3,1)";
function rv(visible: boolean, delay = 0, from: "up" | "left" | "right" | "fade" = "up"): React.CSSProperties {
  const t = { up: "translateY(36px)", left: "translateX(-36px)", right: "translateX(36px)", fade: "translateY(0)" };
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : t[from],
    filter: visible ? "blur(0)" : "blur(3px)",
    transition: `opacity 0.6s ${spring} ${delay}ms, transform 0.6s ${spring} ${delay}ms, filter 0.5s ease ${delay}ms`,
  };
}

const features = [
  {
    icon: Trophy,
    color: "#FF7A1A",
    bg: "#FF7A1A",
    title: "Leader Board",
    tagline: "Stay ahead of the pack",
    desc: "A dynamic ranking tool that keeps you motivated and competitive. Track your position among peers in real time — because knowing where you stand is the first step to reaching the top.",
    points: ["Real-time rank updates", "Branch & college-wise leaderboards", "Weekly & monthly rankings"],
    image: "/PlacementPage/pexels-shkrabaanthony-6609373.jpg",
    imgPos: "center 75%",
  },
  {
    icon: Users,
    color: "#1EC8E8",
    bg: "#1EC8E8",
    title: "Compare With Topper",
    tagline: "Learn from the best",
    desc: "Benchmark your performance against toppers and high scorers. Understand the gap, identify what they do differently, and bridge it with focused effort.",
    points: ["Side-by-side score comparison", "Topic-wise gap analysis", "Topper study patterns"],
    image: "/PlacementPage/pexels-olly-3808809.jpg",
    imgPos: "center center",
  },
  {
    icon: Target,
    color: "#a78bfa",
    bg: "#a78bfa",
    title: "Strength & Weakness",
    tagline: "Know yourself completely",
    desc: "Instantly see your best and least performing topics across every subject. Stop guessing what to study next — let data guide your preparation.",
    points: ["Topic-level performance heatmap", "Prioritised improvement areas", "Progress tracking over time"],
    image: "/PlacementPage/pexels-karola-g-6958531.jpg",
    imgPos: "center center",
  },
  {
    icon: Zap,
    color: "#FF7A1A",
    bg: "#FF7A1A",
    title: "Accuracy & Speed Analysis",
    tagline: "Precision meets performance",
    desc: "Deep-dive into your accuracy and speed across every topic at your fingertips. Identify where you rush, where you stumble, and optimise your test-taking strategy.",
    points: ["Per-topic accuracy scores", "Time-per-question breakdown", "Trend analysis across tests"],
    image: "/PlacementPage/pexels-armin-rimoldi-5554261.jpg",
    imgPos: "center center",
  },
  {
    icon: MessageCircle,
    color: "#1EC8E8",
    bg: "#1EC8E8",
    title: "Discussion Forum",
    tagline: "Never learn alone",
    desc: "Chat with teachers, mentors and peers anytime. Ask doubts, share insights, and grow together in a collaborative community built for learners like you.",
    points: ["Direct messaging with mentors", "Subject-wise discussion threads", "Peer-to-peer Q&A"],
    image: "/PlacementPage/pexels-olly-3808809_76587.jpg",
    imgPos: "center center",
  },
  {
    icon: FileText,
    color: "#a78bfa",
    bg: "#a78bfa",
    title: "Smart Resume",
    tagline: "For Corporate Drives",
    desc: "Automatically build a performance-backed resume that highlights your assessment scores, certifications and skills. Stand out before you even walk into the interview room.",
    points: ["AI-generated resume from your scores", "Skill badges & certifications", "One-click download & sharing"],
    image: "/PlacementPage/pexels-shkrabaanthony-6609373.jpg",
    imgPos: "center 75%",
  },
];

export default function CSM() {
  const [activeFeature, setActiveFeature] = useState(0);
  const hero      = useReveal();
  const featSec   = useReveal();
  const ctaSec    = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  /* drive active index from scroll position */
  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current; if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrolled = -top;
      const total    = height - window.innerHeight;
      if (scrolled < 0 || scrolled > total) return;
      const idx = Math.min(features.length - 1, Math.floor((scrolled / total) * features.length));
      setActiveFeature(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* click tab → smooth-scroll to that feature's position */
  const scrollToFeature = (i: number) => {
    const el = scrollRef.current; if (!el) return;
    const total       = el.scrollHeight - window.innerHeight;
    const targetTop   = el.offsetTop + (i / features.length) * total;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  const f = features[activeFeature];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#ffffff 50%,#fff7f0 100%)" }}>
      <Navbar />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden flex flex-col" style={{ height: "92vh", paddingTop: "68px" }}>
        <div className="absolute inset-0">
          <img src="/PlacementPage/pexels-shkrabaanthony-6609373.jpg" alt=""
            className="w-full h-full object-cover" style={{ objectPosition: "center 15%" }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(120deg, rgba(13,27,62,0.96) 0%, rgba(13,27,62,0.82) 50%, rgba(13,27,62,0.4) 100%)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at right center, rgba(30,200,232,0.08) 0%, transparent 70%)" }} />

        <div ref={hero.ref} className="relative z-10 flex-1 flex items-center px-6 md:px-20 pt-16 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "rgba(255,122,26,0.15)", color: "#FF7A1A", border: "1px solid rgba(255,122,26,0.3)" }}>
              <Star size={11} fill="#FF7A1A" /> Career Success Management
            </div>

            <h1 className="font-black text-white leading-[1.0] mb-5"
              style={{ ...rv(hero.visible, 0, "left"), fontSize: "clamp(2.8rem,6vw,5.2rem)", letterSpacing: "-0.03em" }}>
              Your Career,<br />
              <span style={{ color: "#1EC8E8" }}>Your Success</span>
            </h1>

            <p className="font-semibold mb-4" style={{ ...rv(hero.visible, 80), fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: "rgba(255,255,255,0.8)" }}>
              All the tools you need to measure, improve<br />and accelerate your career readiness — in one place.
            </p>

            <p className="text-white/50 leading-relaxed mb-10"
              style={{ ...rv(hero.visible, 130), fontSize: "clamp(0.9rem,1.2vw,1.05rem)", maxWidth: 480 }}>
              From leaderboards and performance analytics to mentorship and smart resumes — CSM is your complete career success companion.
            </p>

            <div className="flex flex-wrap gap-4" style={rv(hero.visible, 180)}>
              <Link to="/demo"
                className="group flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 10px 32px rgba(255,122,26,0.45)" }}>
                Try It For Free <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#features"
                className="flex items-center gap-2.5 font-semibold px-6 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.04]"
                style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
                <TrendingUp size={16} /> Explore Features
              </a>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative z-10 px-6 md:px-20 pb-10">
          <div className="flex flex-wrap gap-8">
            {[
              { value: "50K+", label: "Students Using CSM" },
              { value: "94%",  label: "Placement Rate" },
              { value: "6",    label: "Powerful Features" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-black text-2xl" style={{ color: "#1EC8E8" }}>{s.value}</div>
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES — sticky scroll ══ */}
      <section id="features" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#ffffff 50%,#fff7f0 100%)" }}>

        {/* Section heading — scrolls normally above the sticky zone */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-6" ref={featSec.ref}>
          <div className="text-center" style={rv(featSec.visible)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>Our Exciting Features</p>
            <h2 className="font-black leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,3.8vw,3.2rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              Everything You Need to<br /><span style={{ color: "#1EC8E8" }}>Succeed & Get Placed</span>
            </h2>
            <p className="text-base mx-auto" style={{ color: "rgba(13,27,62,0.5)", maxWidth: 540 }}>
              Scroll through six powerful tools — or click any feature to jump straight to it.
            </p>
          </div>
        </div>

        {/* Tall scroll container — drives the sticky panel */}
        <div ref={scrollRef} style={{ height: `${features.length * 90}vh` }}>
          <div className="sticky" style={{ top: 0, height: "100vh", background: "linear-gradient(135deg,#f0f9ff 0%,#ffffff 50%,#fff7f0 100%)" }}>
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-30">
              <div className="h-full transition-all duration-500"
                style={{
                  width: `${((activeFeature + 1) / features.length) * 100}%`,
                  background: `linear-gradient(90deg, #1EC8E8, ${f.color})`,
                }} />
            </div>

            <div className="h-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[340px_1fr] gap-8 items-center">

              {/* Left — clickable tab list */}
              <div className="flex flex-col gap-2 py-4">
                {features.map((feat, i) => {
                  const Icon = feat.icon;
                  const on   = activeFeature === i;
                  return (
                    <button key={i} onClick={() => scrollToFeature(i)}
                      className="flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300"
                      style={{
                        background: on ? "white" : "transparent",
                        boxShadow: on ? "0 8px 32px rgba(13,27,62,0.10)" : "none",
                        border: `1.5px solid ${on ? feat.color + "40" : "transparent"}`,
                        transform: on ? "translateX(6px)" : "translateX(0)",
                      }}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{ background: on ? `${feat.color}18` : "rgba(13,27,62,0.05)" }}>
                        <Icon size={20} style={{ color: on ? feat.color : "rgba(13,27,62,0.3)" }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm leading-tight" style={{ color: on ? "#0d1b3e" : "rgba(13,27,62,0.5)" }}>
                          {feat.title}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: on ? feat.color : "rgba(13,27,62,0.35)" }}>
                          {feat.tagline}
                        </p>
                      </div>
                      {on && <div className="w-1.5 h-8 rounded-full shrink-0" style={{ background: feat.color }} />}
                    </button>
                  );
                })}

                {/* step counter */}
                <div className="flex items-center gap-2 mt-3 px-2">
                  <span className="font-black text-3xl" style={{ color: f.color }}>{String(activeFeature + 1).padStart(2, "0")}</span>
                  <span className="font-bold text-sm" style={{ color: "rgba(13,27,62,0.25)" }}>/ {String(features.length).padStart(2, "0")}</span>
                  <span className="text-xs ml-2 font-medium" style={{ color: "rgba(13,27,62,0.35)" }}>— scroll to explore</span>
                </div>
              </div>

              {/* Right — feature detail panel (animated on change) */}
              <div key={activeFeature} className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 24px 64px rgba(13,27,62,0.13)", animation: "csmFadeIn 0.45s cubic-bezier(0.16,1,0.3,1) both" }}>

                {/* Photo */}
                <div className="relative" style={{ height: 240 }}>
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" style={{ objectPosition: f.imgPos }} />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,27,62,0.88) 0%, rgba(13,27,62,0.25) 60%, transparent 100%)" }} />
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${f.color}28`, backdropFilter: "blur(8px)", border: `1.5px solid ${f.color}55` }}>
                      <f.icon size={22} style={{ color: f.color }} />
                    </div>
                    <div>
                      <p className="font-black text-white text-xl leading-tight">{f.title}</p>
                      <p className="text-xs font-semibold" style={{ color: f.color }}>{f.tagline}</p>
                    </div>
                  </div>
                  {/* dot nav top-right */}
                  <div className="absolute top-5 right-5 flex items-center gap-1.5">
                    {features.map((ft, i) => (
                      <button key={i} onClick={() => scrollToFeature(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: activeFeature === i ? 20 : 6, height: 6,
                          background: activeFeature === i ? ft.color : "rgba(255,255,255,0.3)",
                        }} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 bg-white">
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(13,27,62,0.65)" }}>{f.desc}</p>

                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {f.points.map((pt, j) => (
                      <div key={j} className="flex items-start gap-2.5 p-3 rounded-xl"
                        style={{ background: `${f.color}08`, border: `1px solid ${f.color}18` }}>
                        <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: f.color }} />
                        <span className="text-xs font-medium leading-snug" style={{ color: "rgba(13,27,62,0.7)" }}>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/demo"
                    className="group inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-white text-sm transition-all duration-300 hover:scale-[1.04]"
                    style={{ background: `linear-gradient(135deg,${f.color},${f.color}cc)`, boxShadow: `0 8px 24px ${f.color}40` }}>
                    Try This Feature <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══ ALL FEATURES GRID ══ */}
      <section className="py-24 px-6 md:px-12" style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>At a Glance</p>
            <h2 className="font-black text-white leading-tight" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "-0.02em" }}>
              Six Features. <span style={{ color: "#1EC8E8" }}>One Platform.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <button key={i} onClick={() => { setActiveFeature(i); document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="group text-left rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1.5px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${feat.color}50`; el.style.background = `${feat.color}0d`; el.style.boxShadow = `0 20px 48px ${feat.color}18`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "rgba(255,255,255,0.04)"; el.style.boxShadow = "none"; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${feat.color}18` }}>
                    <Icon size={22} style={{ color: feat.color }} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{feat.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{feat.desc.slice(0, 90)}…</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold transition-colors" style={{ color: feat.color }}>
                    Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden py-28 px-6 text-center"
        style={{ background: "linear-gradient(135deg,#fff7f0 0%,#ffffff 45%,#f0f9ff 100%)" }}>
        <div className="absolute -left-24 top-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,122,26,0.10) 0%,transparent 70%)" }} />
        <div className="absolute -right-24 bottom-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(30,200,232,0.10) 0%,transparent 70%)" }} />

        <div className="relative z-10 max-w-2xl mx-auto" ref={ctaSec.ref}>
          <p className="text-xs font-bold tracking-[3.5px] uppercase mb-4" style={{ ...rv(ctaSec.visible), color: "#FF7A1A" }}>Get Started</p>
          <h2 className="font-black mb-5 leading-tight"
            style={{ ...rv(ctaSec.visible, 60), fontSize: "clamp(2.2rem,5vw,3.8rem)", letterSpacing: "-0.03em", color: "#0d1b3e" }}>
            Ready to Take Control<br /><span style={{ color: "#1EC8E8" }}>of Your Career?</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10"
            style={{ ...rv(ctaSec.visible, 100), color: "rgba(13,27,62,0.5)" }}>
            Join 50,000+ students already using CSM to outperform, outshine and get placed at top companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={rv(ctaSec.visible, 140)}>
            <Link to="/demo"
              className="group flex items-center gap-3 font-bold px-10 py-4 rounded-2xl text-white text-lg transition-all duration-300 hover:scale-[1.04]"
              style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 14px 44px rgba(255,122,26,0.35)" }}>
              Try It For Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
      <style>{`@keyframes csmFadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </div>
  );
}
