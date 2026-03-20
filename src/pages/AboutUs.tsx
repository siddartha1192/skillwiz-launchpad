import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Zap, Globe, Target, Heart, Compass, Star, Users, Sparkles,
  MapPin, Coffee, GraduationCap, BarChart3, ArrowRight,
} from "lucide-react";

/* ── scroll reveal ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current; if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight + 300) {
      setVisible(true); return;
    }
  }, []);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (visible) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "0px 0px 250px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible]);

  return { ref, visible };
}

const spring = "cubic-bezier(0.16,1,0.3,1)";
function rv(visible: boolean, delay = 0, from: "up"|"left"|"right"|"fade" = "up"): React.CSSProperties {
  const t = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", fade: "translateY(0)" };
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : t[from],
    filter: visible ? "blur(0)" : "blur(4px)",
    transition: `opacity 0.6s ${spring} ${delay}ms, transform 0.6s ${spring} ${delay}ms, filter 0.5s ease ${delay}ms`,
  };
}

const values = [
  { icon: Heart,   color: "#FF7A1A", title: "Authenticity",  desc: "To be genuine and vulnerable." },
  { icon: Sparkles,color: "#1EC8E8", title: "Simplicity",    desc: "Distill to the meaningful and balanced." },
  { icon: Zap,     color: "#a78bfa", title: "Drive",         desc: "Do what you love." },
  { icon: Compass, color: "#FF7A1A", title: "Adventure",     desc: "Take risks and embrace where they take you." },
  { icon: Star,    color: "#1EC8E8", title: "Appreciation",  desc: "Dwell on the good." },
];

const differences = [
  { icon: Target,     color: "#1EC8E8", title: "Personalized Learning",  desc: "Tailored experiences for learners and educators." },
  { icon: Zap,        color: "#FF7A1A", title: "Innovative Approach",    desc: "Beyond textbooks, fostering real-world skills." },
  { icon: Users,      color: "#a78bfa", title: "Community-Driven",       desc: "A network of passionate educators and learners." },
  { icon: Globe,      color: "#1EC8E8", title: "Tech-Enabled Growth",    desc: "Seamless, smart, and adaptive learning solutions." },
  { icon: GraduationCap, color: "#FF7A1A", title: "Future-Ready",        desc: "Constantly evolving to shape tomorrow's education." },
];

const funFacts = [
  { icon: MapPin,    color: "#1EC8E8", label: "Work Locations",          value: "Delhi · Mumbai · Dhanbad · Bangalore · Jaipur · Jalandhar" },
  { icon: Users,     color: "#FF7A1A", label: "Gender Split",            value: "62% Male · 38% Female" },
  { icon: GraduationCap, color: "#a78bfa", label: "Pedigree",            value: "NIT Kurukshetra · NIT Jamshedpur · BIT Sindri · Delhi University · IU · Pune University & more" },
  { icon: BarChart3, color: "#1EC8E8", label: "Backgrounds",             value: "Technologist · Engineer · Data Scientist · Algorithm Scientist · Academician · UX Designer" },
  { icon: Star,      color: "#FF7A1A", label: "Age Group",               value: "Mean 38 · Median 40" },
  { icon: Coffee,    color: "#a78bfa", label: "Fuel",                    value: "Coffee · Beer · Ice-cream · Coke · Greek Yogurt" },
];

export default function AboutUs() {
  const hero    = useReveal();
  const vision  = useReveal();
  const mission = useReveal();
  const team    = useReveal();
  const diff    = useReveal();
  const facts   = useReveal();
  const values2 = useReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden flex flex-col" style={{ minHeight: "80vh" }}>
        <div className="absolute inset-0">
          <img src="/PlacementPage/pexels-olly-3808809.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(13,27,62,0.95) 0%, rgba(13,27,62,0.75) 50%, rgba(13,27,62,0.4) 100%)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <div ref={hero.ref} className="relative z-10 flex-1 flex items-center px-6 md:px-16 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "rgba(255,122,26,0.18)", color: "#FF7A1A", border: "1px solid rgba(255,122,26,0.35)" }}>
              About Us
            </div>
            <h1 className="font-black text-white leading-[1.0] mb-6"
              style={{ ...rv(hero.visible, 0, "left"), fontSize: "clamp(3rem,6vw,5rem)", letterSpacing: "-0.03em" }}>
              SkillWiz:<br />
              <span style={{ color: "#1EC8E8" }}>Empowering Skills,</span><br />
              <span style={{ color: "#FF7A1A" }}>Shaping Futures.</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl" style={rv(hero.visible, 150)}>
              We are driven by the belief that education is the gateway to limitless potential — transforming learning into an engaging journey for every student and educator.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: "#1EC8E8" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISION ══ */}
      <section className="py-24 px-6 md:px-16" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#ffffff 60%,#fff7f0 100%)" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center" ref={vision.ref}>
          {/* Image */}
          <div style={rv(vision.visible, 0, "left")}>
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3", boxShadow: "0 40px 80px rgba(13,27,62,0.18)" }}>
              <img src="/PlacementPage/pexels-armin-rimoldi-5554261.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,27,62,0.5) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-6 px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}>
                <div className="text-2xl font-black" style={{ color: "#0d1b3e" }}>50,000+</div>
                <div className="text-xs font-semibold" style={{ color: "rgba(13,27,62,0.5)" }}>Lives Transformed</div>
              </div>
            </div>
          </div>
          {/* Text */}
          <div style={rv(vision.visible, 150, "right")}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>The SkillWiz Vision</p>
            <h2 className="font-black mb-5 leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              Education is the<br /><span style={{ color: "#1EC8E8" }}>Gateway to Limitless</span><br />Potential
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(13,27,62,0.6)" }}>
              Our platform is designed to transform learning into an engaging journey, where students can elevate their skills and educators can ignite the minds of tomorrow.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(13,27,62,0.6)" }}>
              We are committed to creating a dynamic, accessible, and personalized learning ecosystem that empowers everyone — whether you're a learner or an educator — to thrive, grow, and achieve your dreams.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
              style={{ background: "rgba(30,200,232,0.1)", color: "#1EC8E8", border: "1px solid rgba(30,200,232,0.25)" }}>
              <Zap size={14} /> Digitally Optimized — Learn Anytime, Anywhere
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className="relative overflow-hidden py-24 px-6 md:px-16"
        style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute right-0 top-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle,rgba(30,200,232,0.12) 0%,transparent 70%)" }} />
        <div className="absolute left-0 bottom-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle,rgba(255,122,26,0.1) 0%,transparent 70%)" }} />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center" ref={mission.ref}>
          <div style={rv(mission.visible, 0, "left")}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>The SkillWiz Mission</p>
            <h2 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", letterSpacing: "-0.02em" }}>
              Breaking Down Barriers,<br /><span style={{ color: "#1EC8E8" }}>Building Up Futures</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Our mission is to empower learners and educators by providing a seamless, accessible platform for skill development — fostering collaboration and offering personalized tools that help everyone reach their full potential.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Whether you're enhancing your skills or guiding others, SkillWiz is where <span className="text-white font-semibold">Empowering Skills, Shaping Futures</span> happens — making education meaningful, impactful, and accessible for all.
            </p>
          </div>
          <div style={rv(mission.visible, 150, "right")}>
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
              <img src="/PlacementPage/pexels-shkrabaanthony-6609373.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,27,62,0.65) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 right-6 px-4 py-3 rounded-xl"
                style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 8px 24px rgba(255,122,26,0.4)" }}>
                <div className="text-2xl font-black text-white">200+</div>
                <div className="text-xs font-semibold text-white/80">Partner Institutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-24 px-6 md:px-16 overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f0f9ff 50%,#fff7f0 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" ref={values2.ref}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: "#FF7A1A" }}>Our Values</p>
            <h2 className="font-black leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              What Drives Us Every Day
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-3xl p-8 cursor-default transition-all duration-400 hover:-translate-y-3"
                  style={{
                    width: "clamp(200px, 18vw, 220px)",
                    background: "white",
                    border: `2px solid rgba(13,27,62,0.07)`,
                    boxShadow: "0 4px 24px rgba(13,27,62,0.07)",
                    animationDelay: `${i * 80}ms`,
                    ...rv(values2.visible, i * 80, "up"),
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = v.color;
                    el.style.boxShadow = `0 24px 56px ${v.color}28`;
                    el.style.background = `linear-gradient(160deg, white 0%, ${v.color}08 100%)`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(13,27,62,0.07)";
                    el.style.boxShadow = "0 4px 24px rgba(13,27,62,0.07)";
                    el.style.background = "white";
                  }}
                >
                  {/* Top colour bar */}
                  <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: v.color }} />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${v.color}14`, boxShadow: `0 6px 20px ${v.color}20` }}>
                    <Icon size={26} style={{ color: v.color }} />
                  </div>

                  {/* Number */}
                  <div className="text-[10px] font-black uppercase tracking-[3px] mb-2" style={{ color: `${v.color}80` }}>
                    0{i + 1}
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-xl mb-2 leading-tight" style={{ color: "#0d1b3e" }}>
                    {v.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,62,0.5)" }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ONE TEAM ══ */}
      <section className="relative overflow-hidden py-24 px-6 md:px-16">
        <div className="absolute inset-0">
          <img src="/PlacementPage/pexels-karola-g-6958531.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,62,0.88)" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center" ref={team.ref}>
          <div style={rv(team.visible, 0)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>One Team</p>
            <h2 className="font-black text-white mb-6 leading-tight" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", letterSpacing: "-0.02em" }}>
              One Team, One Vision —<br /><span style={{ color: "#1EC8E8" }}>Empowering Skills, Shaping Futures</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6 mx-auto" style={{ maxWidth: 680 }}>
              Collaboration is the driving force behind every great innovation. Our strength lies in a team that blends expertise, passion, and a shared vision of transforming education.
            </p>
            <p className="text-white/50 text-base leading-relaxed mx-auto" style={{ maxWidth: 640 }}>
              Diversity fuels creativity. By bringing together individuals from different backgrounds, perspectives, and experiences, we cultivate a culture that thrives on fresh ideas and bold solutions. We don't just work together — we grow together.
            </p>
          </div>
        </div>
      </section>

      {/* ══ HOW ARE WE DIFFERENT ══ */}
      <section className="py-24 px-6 md:px-16" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#ffffff 50%,#fff7f0 100%)" }}>
        <div className="max-w-6xl mx-auto" ref={diff.ref}>
          <div className="text-center mb-14" style={rv(diff.visible)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: "#FF7A1A" }}>Our Edge</p>
            <h2 className="font-black leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              How Are We <span style={{ color: "#1EC8E8" }}>Different?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i}
                  className="group rounded-2xl p-7 cursor-default transition-all duration-300 hover:-translate-y-2"
                  style={{ ...rv(diff.visible, i * 80), background: "white", border: "2px solid rgba(13,27,62,0.07)", boxShadow: "0 4px 20px rgba(13,27,62,0.06)" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = d.color; el.style.boxShadow = `0 20px 48px ${d.color}22`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(13,27,62,0.07)"; el.style.boxShadow = "0 4px 20px rgba(13,27,62,0.06)"; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${d.color}12` }}>
                    <Icon size={22} style={{ color: d.color }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#0d1b3e" }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,62,0.55)" }}>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FUN FACTS ══ */}
      <section className="py-24 px-6 md:px-16"
        style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-6xl mx-auto relative z-10" ref={facts.ref}>
          <div className="text-center mb-14" style={rv(facts.visible)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-2" style={{ color: "#FF7A1A" }}>The People Behind SkillWiz</p>
            <h2 className="font-black text-white leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", letterSpacing: "-0.02em" }}>
              Fun Facts About Our Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {funFacts.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i}
                  className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    ...rv(facts.visible, i * 80),
                    background: "rgba(255,255,255,0.04)",
                    border: `1.5px solid rgba(255,255,255,0.07)`,
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${f.color}50`; el.style.background = `${f.color}0d`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "rgba(255,255,255,0.04)"; }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${f.color}18` }}>
                      <Icon size={16} style={{ color: f.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: f.color }}>{f.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{f.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#ffffff 50%,#fff7f0 100%)" }}>
        <p className="text-xs font-bold tracking-[3.5px] uppercase mb-4" style={{ color: "#FF7A1A" }}>Join Us</p>
        <h2 className="font-black mb-5 leading-tight" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
          Be Part of the Journey
        </h2>
        <p className="text-lg mb-8 mx-auto" style={{ color: "rgba(13,27,62,0.55)", maxWidth: 500 }}>
          Whether you're a student, educator, or institution — SkillWiz is built for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/demo" className="group inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 10px 32px rgba(255,122,26,0.4)" }}>
            Request a Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/placement" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
            style={{ background: "rgba(13,27,62,0.06)", color: "#0d1b3e", border: "2px solid rgba(13,27,62,0.1)" }}>
            Explore Products <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <style>{`
        @keyframes valFadeIn {
          from { opacity: 0; transform: translateY(12px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }
      `}</style>
      <Footer />
    </div>
  );
}
