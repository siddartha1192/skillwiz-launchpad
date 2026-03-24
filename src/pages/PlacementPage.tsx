import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, CheckCircle2, ChevronDown, Users, GraduationCap, Building2,
  Brain, Target, Zap, Globe, Star, BookOpen, BarChart3, Layers, Shield,
  Smartphone, Clock, Play,
} from "lucide-react";

/* ─── SCROLL REVEAL HOOK ─── */
function useReveal(rootMargin = "0px 0px -80px 0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, visible };
}

const spring = "cubic-bezier(0.16,1,0.3,1)";

function reveal(visible: boolean, delay = 0, from: "up" | "left" | "right" | "fade" = "up"): React.CSSProperties {
  const transforms: Record<string, string> = {
    up: "translateY(50px)", left: "translateX(-50px)", right: "translateX(50px)", fade: "translateY(0)",
  };
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : transforms[from],
    filter: visible ? "blur(0px)" : "blur(4px)",
    transition: `opacity 1.4s ${spring} ${delay}ms, transform 1.4s ${spring} ${delay}ms, filter 1s ease ${delay}ms`,
  };
}

/* ─── COUNTER ─── */
function Counter({ end, suffix = "", run }: { end: number; suffix?: string; run: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const steps = 70, time = 1600 / steps, step = end / steps; let cur = 0;
    const id = setInterval(() => {
      cur += step;
      if (cur >= end) { setVal(end); clearInterval(id); } else setVal(Math.floor(cur));
    }, time);
    return () => clearInterval(id);
  }, [run, end]);
  return <>{val.toLocaleString("en-IN")}{suffix}</>;
}

// Logo palette
const INDIGO       = "#3f3f99";
const CYAN         = "#41b7d1";
const INDIGO_LIGHT = "#9898d4";
const CYAN_LIGHT   = "#7dd8eb";

/* ─── DATA ─── */
const overviewFeatures = [
  { icon: Layers,    title: "All Under One Umbrella",            text: "Industry experts prepare well-researched content — tests, company-specific tests, study notes and videos. Our platform covers every type of assessment tailored to every need." },
  { icon: BarChart3, title: "Take Right Decisions",              text: "Data, analytics and insight help administrators make key decisions and take corrective actions — be it campus recruitment or accreditation. Reduce lead time by early detection." },
  { icon: Brain,     title: "Detection of Skill Gap",            text: "Using AI and algorithms, we find knowledge gaps, identify the shortest learning path and navigate students to their goal in optimal time." },
  { icon: Target,    title: "Opportunities Beyond Placement",    text: "We focus on competitive examinations — GATE, GRE, GMAT, CAT — so interested students can be nurtured while they are still on campus." },
  { icon: Star,      title: "Placement Quality & Quantity",      text: "Improve not just the number of students employed but also the quality of job and package. We help improve conversion ratios and classify students by readiness." },
  { icon: Zap,       title: "Develop & Enhance Skills",         text: "Continuous assessment with a holistic approach focused on fundamentals — aligned with industry expectations to elevate both technical and non-technical skills." },
];

const audiences = [
  {
    id: "student", label: "Student", icon: Users, color: CYAN, light: `${CYAN}14`,
    intro: "Engineering Students are at the core of our platform. We are part of the journey — whether it is finding a campus job or preparing for higher education.",
    features: [
      { icon: GraduationCap, title: "Industry Tailored Guidance",   text: "Learn from industry experts and college alumni mentors. Join webinars, take timely suggestions and grow under supervised guidance." },
      { icon: Target,        title: "Success Oriented",             text: "Not limited to campus jobs — prepare for GRE, GMAT, GATE, CAT with our dedicated SmartGATE product built just for you." },
      { icon: Smartphone,    title: "Anytime, Anywhere",            text: "Practice on mobile or desktop. Download, practice offline and sync results when internet is available." },
      { icon: Brain,         title: "Genuinely Personalized",      text: "Adaptive tests that adjust level based on your skills. Focus on areas where you need the most improvement — always." },
      { icon: Globe,         title: "Social Learning",              text: "Play against friends, ask for solutions, discuss questions — learning made fun, engaging and competitive." },
      { icon: BarChart3,     title: "360° Degree View",            text: "Speed, accuracy, topic, subject, time management — we measure and predict your employability score." },
      { icon: Zap,           title: "GPS in Education",            text: "Our AI algorithm finds gaps, identifies the shortest path and navigates you in optimal time." },
      { icon: Layers,        title: "Unified Platform",            text: "Coding, Aptitude, Core Engineering, Personality and industry tests — all in one place." },
    ],
  },
  {
    id: "teacher", label: "Teacher", icon: GraduationCap, color: INDIGO, light: `${INDIGO}14`,
    intro: "Teachers are our partners with a common mission. We enable teachers by providing the right tools and data, making every teacher a career coach.",
    features: [
      { icon: Globe,         title: "Collaborate Effectively",     text: "Stay engaged after the classroom — social learning, post answers, monitor student behaviour, make announcements." },
      { icon: Layers,        title: "Scale Your Assessment",       text: "Proctored lab tests, homework, or new classrooms of selected students — you are always in control." },
      { icon: BarChart3,     title: "360° View of Classroom",     text: "Identify where most students need help. Take extra classes or assign additional practice tests accordingly." },
      { icon: Users,         title: "Individual Measurement",     text: "Individual performance with recommendations — effectively mentor each student personally." },
      { icon: CheckCircle2,  title: "Automatic Grading",          text: "Free yourself from grading — most tests are automatically graded so your time goes into mentoring." },
      { icon: BookOpen,      title: "Publish Your Questions",     text: "Add your own questions, submit to the question pool. You are always in control of your content." },
      { icon: Shield,        title: "Reusable Question Bank",     text: "Well-crafted questions filtered, tagged and moderated for accuracy — ready for weekly, monthly or yearly assessments." },
    ],
  },
  {
    id: "institute", label: "Institute", icon: Building2, color: INDIGO, light: `${INDIGO}14`,
    intro: "Fulfill your mission of creating well-rounded students, motivated teachers and an engaging campus. Make decisions faster and take corrective action before issues happen.",
    features: [
      { icon: Globe,       title: "Engaged Campus",            text: "Make your campus social — students, teachers and staff discuss jobs, campus life, news and announcements." },
      { icon: Zap,         title: "Integrate with IT Systems", text: "APIs enable seamless integration with ERP, Payroll, Attendance and more. Import and export data effortlessly." },
      { icon: Shield,      title: "Support Accreditation",     text: "Electronic capture and reporting of student data — our infrastructure saves significant cost and time." },
      { icon: Star,        title: "Build Your Brand",          text: "Data-driven institutes establish a stronger brand. Active student-teacher community helps you stand apart." },
      { icon: Smartphone,  title: "Minimal Infrastructure",    text: "All you need is students. We set up a branded SaaS solution and maintain every upgrade for you." },
      { icon: Target,      title: "Assess Anytime",            text: "Proctored tests, admission tests, or quizzes — any size, from one student to thousands. Results are immediate." },
      { icon: BarChart3,   title: "Digitally Visible Campus",  text: "Measure students for employment outcomes and teachers for effective teaching. Data tells your story." },
    ],
  },
];

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function PlacementPage() {
  const [activeTab, setActiveTab]   = useState("student");
  const [statsRun, setStatsRun]     = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const hero       = useReveal("0px");
  const overview   = useReveal();
  const photoSec   = useReveal();
  const tabSec     = useReveal();
  const ctaSec     = useReveal();

  useEffect(() => {
    const el = statsRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsRun(true); }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  const aud = audiences.find(a => a.id === activeTab)!;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ══════════════════════════════
          HERO — full-screen, content-rich
      ══════════════════════════════ */}
      <section className="relative flex flex-col overflow-hidden">
        {/* BG photo */}
        <div className="absolute inset-0">
          <img src="/PlacementPage/pexels-armin-rimoldi-5554261.jpg" alt="" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(13,27,62,0.92) 0%, rgba(13,27,62,0.72) 40%, rgba(13,27,62,0.18) 100%)" }} />
        </div>

        {/* Back link */}
        <div className="relative z-20 px-6 md:px-16 pt-8">
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors">← Back to Home</a>
        </div>

        {/* Main hero grid */}
        <div ref={hero.ref} className="relative z-10 flex-1 flex items-center px-6 md:px-16 py-20">
          <div className="max-w-4xl w-full">

            {/* copy */}
            <div style={reveal(hero.visible, 0, "left")}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ background: `${CYAN}22`, color: CYAN_LIGHT, border: `1px solid ${CYAN}45` }}>
                <Target size={11} /> Flagship Product
              </div>

              <h1 className="font-black text-white leading-[1.02] mb-6" style={{ fontSize: "clamp(3.2rem,6vw,5.2rem)", letterSpacing: "-0.03em" }}>
                My<span style={{ color: CYAN_LIGHT }}>Placement</span>
              </h1>

              <p className="text-white/70 leading-relaxed mb-4" style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", maxWidth: 520 }}>
                Built from scratch for engineering institutes with one objective —
                <span className="text-white font-semibold"> make students successful.</span>
              </p>
              <p className="text-white/55 leading-relaxed mb-10" style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", maxWidth: 480 }}>
                Whether it is a campus job or higher education, we enable students and teachers to succeed by capturing, measuring and analysing the right data.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/demo" className="group flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-white text-base transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                  style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 10px 32px ${INDIGO}55` }}>
                  Request a Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#overview" className="flex items-center gap-2.5 font-semibold px-6 py-4 rounded-2xl text-white text-base transition-all duration-300 hover:scale-[1.04]"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.22)", backdropFilter: "blur(8px)" }}>
                  <Play size={14} fill="white" /> Watch Overview
                </a>
              </div>

              {/* Checkpoints */}
              <div className="grid grid-cols-2 gap-3">
                {["AI-Powered Skill Gap Detection","Campus + Higher Education","Real-Time Analytics","Works Offline Too"].map(t => (
                  <div key={t} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} style={{ color: CYAN_LIGHT, flexShrink: 0 }} />
                    <span className="text-white/65 text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex justify-center pb-8">
          <a href="#overview" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <ChevronDown size={18} className="animate-bounce" />
          </a>
        </div>
      </section>


      {/* ══════════════════════════════
          OVERVIEW
      ══════════════════════════════ */}
      <section id="overview" ref={overview.ref} className="py-28 px-6 md:px-16"
        style={{ background: "linear-gradient(135deg,#f0f0ff 0%,#ffffff 50%,#f5f5ff 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20" style={reveal(overview.visible)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: INDIGO }}>Platform Overview</p>
            <h2 className="font-black mb-5" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              Everything You Need,<br /><span style={{ color: CYAN }}>All Under One Umbrella</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(13,27,62,0.55)" }}>
              A complete ecosystem bridging the gap between campus education and industry expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewFeatures.map((f, i) => {
              const Icon = f.icon;
              const active = hoveredCard === i;
              return (
                <div key={i}
                  className="rounded-3xl p-7 cursor-default transition-all duration-350"
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    ...reveal(overview.visible, i * 90),
                    background: active ? "#0d1b3e" : "white",
                    border: `2px solid ${active ? CYAN : "rgba(13,27,62,0.07)"}`,
                    boxShadow: active ? `0 24px 60px rgba(13,27,62,0.22)` : "0 4px 20px rgba(13,27,62,0.06)",
                    transform: `${reveal(overview.visible, i * 90).transform ?? ""} ${active ? " translateY(-8px)" : ""}`,
                    transition: "background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.3s",
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ background: active ? `${CYAN}25` : `${CYAN}15` }}>
                    <Icon size={22} style={{ color: active ? CYAN_LIGHT : CYAN }} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 transition-colors duration-300" style={{ color: active ? "white" : "#0d1b3e" }}>
                    {f.title}
                  </h3>
                  <p className="text-base leading-relaxed transition-colors duration-300" style={{ color: active ? "rgba(255,255,255,0.72)" : "rgba(13,27,62,0.55)" }}>
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STICKY SCROLL — image fixed, text rolls
      ══════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row">

          {/* LEFT — sticky image */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:self-start lg:h-screen flex items-center py-16">
            <div className="relative w-full">
              {/* Main photo */}
              <div className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.55)", aspectRatio: "4/5" }}>
                <img src="/PlacementPage/pexels-olly-3808809.jpg" alt=""
                  className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: "linear-gradient(to top, rgba(13,27,62,0.6) 0%, transparent 50%)" }} />
              </div>

              {/* Badge — Placement Rate */}
              <div className="absolute top-6 left-6 z-20 px-5 py-4 rounded-2xl"
                style={{ background: "white", boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1"
                  style={{ color: "rgba(13,27,62,0.45)" }}>Placement Rate</div>
                <div className="text-3xl font-black leading-none"
                  style={{ color: "#0d1b3e" }}>94<span style={{ color: CYAN }}>%</span>
                </div>
              </div>

              {/* Badge — Students */}
              <div className="absolute bottom-6 right-6 z-20 px-5 py-4 rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 12px 40px ${INDIGO}55` }}>
                <div className="text-[10px] font-bold text-white/70 uppercase tracking-[0.15em] mb-1">Students Placed</div>
                <div className="text-3xl font-black text-white leading-none">50,000+</div>
              </div>

            </div>
          </div>

          {/* RIGHT — scrolling text blocks */}
          <div className="lg:w-1/2 lg:pl-20 py-24 space-y-20 min-w-0">
            <div>
              <p className="text-xs font-bold tracking-[3.5px] uppercase mb-4" style={{ color: CYAN_LIGHT }}>Why MyPlacement</p>
              <h2 className="font-black text-white mb-6 leading-tight"
                style={{ fontSize: "clamp(2rem,3.2vw,3rem)", letterSpacing: "-0.02em" }}>
                From Campus<br />to Career,<br /><span style={{ color: CYAN_LIGHT }}>We're With You</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed">
                Our platform is the bridge between where students are and where they need to be — blending AI-driven insights, expert content, and real-time analytics to create measurable outcomes.
              </p>
            </div>

            {[
              { icon: Brain,     color: CYAN_LIGHT,   title: "AI Skill Gap Detection",           body: "Our AI engine analyses every student's performance in real-time, pinpoints exact knowledge gaps, and prescribes a personalised learning path — just like a doctor prescribing medicine tailored to the patient." },
              { icon: Target,    color: INDIGO_LIGHT, title: "Beyond Campus Jobs",               body: "Not every student wants a campus job. We simultaneously prepare students for GATE, GRE, GMAT and CAT — giving every student a personalised trajectory while they are still on campus." },
              { icon: BarChart3, color: CYAN_LIGHT,   title: "Predictive Employability Score",  body: "We don't just measure performance — we predict outcomes. Each student gets an employability score showing how close they are to a job in one or more industry profiles." },
              { icon: Zap,       color: INDIGO_LIGHT, title: "Continuous, Not One-Time",         body: "One-time tests only tell part of the story. Our platform runs ongoing assessments, tracks improvement week over week, flags regressions early and celebrates breakthroughs — all automated." },
              { icon: Globe,     color: CYAN_LIGHT,   title: "Social & Offline Learning",        body: "Students challenge friends, discuss questions and sync results whenever internet is available — making learning sticky, competitive and genuinely enjoyable even in low-connectivity environments." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-1 transition-transform duration-500 group-hover:scale-110"
                      style={{ background: `${item.color}20` }}>
                      <Icon size={22} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-black text-white mb-3 leading-tight"
                        style={{ fontSize: "clamp(1.4rem,2vw,1.8rem)" }}>
                        {item.title}
                      </h3>
                      <p className="text-white/65 text-base leading-relaxed group-hover:text-white/85 transition-colors duration-500">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          AUDIENCE TABS
      ══════════════════════════════ */}
      <section ref={tabSec.ref} className="py-28 px-6 md:px-16"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f0f0ff 50%,#f5f5ff 100%)" }}>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14" style={reveal(tabSec.visible)}>
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: INDIGO }}>Who It's For</p>
            <h2 className="font-black mb-4" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", color: "#0d1b3e", letterSpacing: "-0.02em" }}>
              Built for <span style={{ color: CYAN }}>Everyone</span> on Campus
            </h2>
            <p className="text-lg" style={{ color: "rgba(13,27,62,0.50)" }}>
              One platform, three powerful experiences.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap" style={reveal(tabSec.visible, 120)}>
            {audiences.map(a => {
              const Icon = a.icon;
              const on = activeTab === a.id;
              return (
                <button key={a.id} onClick={() => setActiveTab(a.id)}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300"
                  style={{
                    background: on ? a.color : "rgba(13,27,62,0.05)",
                    color: on ? "white" : "rgba(13,27,62,0.5)",
                    boxShadow: on ? `0 10px 28px ${a.color}44` : "none",
                    border: `2px solid ${on ? a.color : "rgba(13,27,62,0.08)"}`,
                    transform: on ? "scale(1.06) translateY(-2px)" : "scale(1)",
                  }}>
                  <Icon size={18} /> {a.label}
                </button>
              );
            })}
          </div>

          {/* Intro banner */}
          <div key={`intro-${activeTab}`} className="rounded-3xl p-8 mb-8 transition-all duration-500"
            style={{ ...reveal(tabSec.visible, 160), background: aud.light, border: `2px solid ${aud.color}33` }}>
            <p className="text-xl font-medium leading-relaxed" style={{ color: "#0d1b3e" }}>{aud.intro}</p>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {aud.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={`${activeTab}-${i}`}
                  className="group rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "white",
                    border: "2px solid rgba(13,27,62,0.07)",
                    boxShadow: "0 4px 20px rgba(13,27,62,0.06)",
                    animationDelay: `${i * 60}ms`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = aud.color;
                    el.style.boxShadow = `0 20px 48px ${aud.color}25`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(13,27,62,0.07)";
                    el.style.boxShadow = "0 4px 20px rgba(13,27,62,0.06)";
                  }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                    style={{ background: aud.light }}>
                    <Icon size={20} style={{ color: aud.color }} />
                  </div>
                  <h4 className="font-bold text-base mb-2" style={{ color: "#0d1b3e" }}>{f.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,62,0.55)" }}>{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section ref={ctaSec.ref} className="relative overflow-hidden py-32 px-6 text-center"
        style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="absolute left-1/4 -top-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${CYAN}1e 0%,transparent 70%)` }} />
        <div className="absolute right-1/4 -bottom-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${INDIGO}1e 0%,transparent 70%)` }} />

        <div className="relative z-10 max-w-3xl mx-auto" style={reveal(ctaSec.visible)}>
          <p className="text-xs font-bold tracking-[3.5px] uppercase mb-5" style={{ color: CYAN_LIGHT }}>Get Started Today</p>
          <h2 className="font-black text-white mb-6 leading-tight" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", letterSpacing: "-0.03em" }}>
            Ready to Transform<br />Your <span style={{ color: CYAN_LIGHT }}>Campus Placements?</span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed mb-12">
            Join <span className="text-white font-semibold">200+ engineering institutes</span> that trust MyPlacement to prepare students, empower teachers and drive measurable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <Link to="/demo"
              className="group flex items-center gap-3 font-bold px-12 py-5 rounded-2xl text-white text-lg transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1"
              style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 14px 44px ${INDIGO}55` }}>
              Request a Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:info@myskillwiz.com"
              className="font-semibold px-10 py-5 rounded-2xl text-white text-lg transition-all duration-300 hover:scale-[1.04]"
              style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.22)", backdropFilter: "blur(8px)" }}>
              Contact Sales →
            </a>
          </div>

          <div className="flex items-center justify-center gap-12 flex-wrap">
            {[
              { value: "200+",  label: "Institutes",   color: CYAN_LIGHT   },
              { value: "50K+",  label: "Students",     color: INDIGO_LIGHT },
              { value: "94%",   label: "Success Rate", color: CYAN_LIGHT   },
              { value: "99K+",  label: "Questions",    color: INDIGO_LIGHT },
            ].map(({ value, label, color }) => (
              <div key={label} className="text-center group cursor-default">
                <div className="text-3xl font-black mb-1 transition-transform duration-200 group-hover:scale-110" style={{ color }}>{value}</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
