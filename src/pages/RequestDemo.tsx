import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, CheckCircle2, Building2, Users, GraduationCap,
  Phone, Mail, MapPin, Zap, Target, BarChart3, Brain,
} from "lucide-react";

const INDIGO       = "#3f3f99";
const CYAN         = "#41b7d1";
const INDIGO_LIGHT = "#9898d4";
const CYAN_LIGHT   = "#7dd8eb";

const roles = [
  { id: "student",   label: "Student",          icon: Users },
  { id: "teacher",   label: "Teacher / Faculty", icon: GraduationCap },
  { id: "institute", label: "Institute / Admin", icon: Building2 },
  { id: "recruiter", label: "Recruiter",         icon: Target },
];

const products = [
  "MyPlacement",
  "SmartGATE",
  "Institute Suite",
  "NEAT Assessment",
  "Coaching Platform",
  "AI GPS Learning",
];

const highlights = [
  { icon: Brain,     color: CYAN,   title: "Live Platform Walkthrough",    body: "See the full platform in action — dashboards, analytics, and AI features demonstrated live for your context." },
  { icon: BarChart3, color: INDIGO, title: "Custom ROI Analysis",          body: "We'll show you data from similar institutes and model the expected improvement in placement rate for yours." },
  { icon: Zap,       color: CYAN,   title: "30-Day Free Trial",            body: "After the demo, get a fully configured trial environment for your institution at no cost." },
  { icon: Target,    color: INDIGO, title: "Dedicated Onboarding Support", body: "A dedicated success manager will guide your team from setup to first results." },
];

export default function RequestDemo() {
  const [role, setRole]           = useState("");
  const [product, setProduct]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", institute: "", students: "", message: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = `w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-200 border-2 bg-white focus:border-[${CYAN}] focus:shadow-[0_0_0_4px_rgba(65,183,209,0.12)]`;
  const inputStyle = { borderColor: "rgba(13,27,62,0.12)", color: "#0d1b3e" };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg,#f0f0ff 0%,#ffffff 50%,#f5f5ff 100%)" }}>
      <Navbar />

      {/* ── Hero banner ── */}
      <div className="relative overflow-hidden pt-32 pb-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="absolute left-1/4 -top-16 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${CYAN}1e 0%,transparent 70%)` }} />
        <div className="absolute right-1/4 -bottom-16 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${INDIGO}22 0%,transparent 70%)` }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: `${CYAN}22`, color: CYAN_LIGHT, border: `1px solid ${CYAN}45` }}>
            <Zap size={11} /> Free Demo · No Credit Card Required
          </div>
          <h1 className="font-black text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "-0.03em" }}>
            See SkillWiz in<br />
            <span style={{ color: CYAN_LIGHT }}>Action — Live</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            Get a personalised walkthrough of the platform tailored to your role.
            Our team will show you exactly how SkillWiz drives results for institutes like yours.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* LEFT — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-3xl p-12 text-center"
                style={{ background: "white", boxShadow: "0 24px 80px rgba(13,27,62,0.1)", border: `2px solid ${CYAN}30` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: `${CYAN}15` }}>
                  <CheckCircle2 size={40} style={{ color: CYAN }} />
                </div>
                <h2 className="font-black text-2xl mb-3" style={{ color: "#0d1b3e" }}>Request Received!</h2>
                <p className="text-base mb-8" style={{ color: "rgba(13,27,62,0.55)" }}>
                  Thank you! Our team will reach out within <span className="font-semibold" style={{ color: "#0d1b3e" }}>24 hours</span> to schedule your personalised demo.
                </p>
                <Link to="/" className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.03]"
                  style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 10px 32px ${INDIGO}45` }}>
                  Back to Home <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="rounded-3xl p-8 md:p-10"
                style={{ background: "white", boxShadow: "0 24px 80px rgba(13,27,62,0.08)", border: "1px solid rgba(13,27,62,0.06)" }}>

                <h2 className="font-black text-2xl mb-1" style={{ color: "#0d1b3e" }}>Book Your Demo</h2>
                <p className="text-sm mb-8" style={{ color: "rgba(13,27,62,0.50)" }}>Fill in the details and we'll get back to you within 24 hours.</p>

                {/* Role selector */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(13,27,62,0.5)" }}>I am a</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {roles.map(r => {
                      const Icon = r.icon;
                      const on = role === r.id;
                      return (
                        <button type="button" key={r.id} onClick={() => setRole(r.id)}
                          className="flex flex-col items-center gap-2 py-4 rounded-2xl text-xs font-bold transition-all duration-200"
                          style={{
                            background: on ? `${INDIGO}0d` : "rgba(13,27,62,0.03)",
                            border: `2px solid ${on ? INDIGO : "rgba(13,27,62,0.08)"}`,
                            color: on ? "#0d1b3e" : "rgba(13,27,62,0.45)",
                            transform: on ? "translateY(-2px)" : "none",
                            boxShadow: on ? `0 8px 24px ${INDIGO}20` : "none",
                          }}>
                          <Icon size={20} style={{ color: on ? INDIGO : "rgba(13,27,62,0.3)" }} />
                          {r.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.5)" }}>Full Name *</label>
                    <input required type="text" placeholder="Arjun Sharma" value={form.name} onChange={set("name")}
                      className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.5)" }}>Work Email *</label>
                    <input required type="email" placeholder="you@institute.edu" value={form.email} onChange={set("email")}
                      className={inputCls} style={inputStyle} />
                  </div>
                </div>

                {/* Phone + Institute */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.5)" }}>Phone Number</label>
                    <input type="tel" placeholder="+91 98506 96969" value={form.phone} onChange={set("phone")}
                      className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.5)" }}>Institute / Organisation *</label>
                    <input required type="text" placeholder="KIIT University" value={form.institute} onChange={set("institute")}
                      className={inputCls} style={inputStyle} />
                  </div>
                </div>

                {/* Product + Students */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.5)" }}>Interested In</label>
                    <select value={product} onChange={e => setProduct(e.target.value)}
                      className={inputCls} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">Select a product</option>
                      {products.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.5)" }}>No. of Students</label>
                    <select value={form.students} onChange={set("students")}
                      className={inputCls} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">Select range</option>
                      {["< 500","500 – 1,000","1,000 – 5,000","5,000 – 10,000","10,000+"].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.5)" }}>Anything specific you'd like to see?</label>
                  <textarea rows={3} placeholder="e.g. GATE prep module, placement analytics dashboard..." value={form.message} onChange={set("message")}
                    className={inputCls + " resize-none"} style={inputStyle} />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-3 font-bold py-4 rounded-2xl text-white text-base transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
                  style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 12px 36px ${INDIGO}45` }}>
                  Request My Free Demo <ArrowRight size={18} />
                </button>

                <p className="text-center text-xs mt-4" style={{ color: "rgba(13,27,62,0.35)" }}>
                  No spam. No credit card. Just a conversation.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT — highlights + contact */}
          <div className="lg:col-span-2 space-y-6">

            {/* What you'll get */}
            <div className="rounded-3xl p-7"
              style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 100%)", boxShadow: "0 20px 60px rgba(13,27,62,0.2)" }}>
              <p className="text-xs font-bold tracking-[3px] uppercase mb-5" style={{ color: CYAN_LIGHT }}>What You'll Get</p>
              <div className="space-y-5">
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  const dc = h.color === INDIGO ? INDIGO_LIGHT : CYAN_LIGHT;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${dc}20` }}>
                        <Icon size={18} style={{ color: dc }} />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white mb-1">{h.title}</div>
                        <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>{h.body}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust strip */}
            <div className="rounded-3xl p-6"
              style={{ background: "white", border: "1px solid rgba(13,27,62,0.07)", boxShadow: "0 8px 32px rgba(13,27,62,0.06)" }}>
              <p className="text-xs font-bold tracking-[3px] uppercase mb-4" style={{ color: "rgba(13,27,62,0.35)" }}>Trusted by</p>
              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { value: "200+", label: "Institutes", color: INDIGO },
                  { value: "50K+", label: "Students",   color: INDIGO },
                  { value: "94%",  label: "Placement",  color: INDIGO },
                ].map(({ value, label, color }) => (
                  <div key={label} className="text-center">
                    <div className="font-black text-xl mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "rgba(13,27,62,0.4)" }}>{label}</div>
                  </div>
                ))}
              </div>
              <div className="h-px mb-5" style={{ background: "rgba(13,27,62,0.06)" }} />

              {/* Contact */}
              <div className="space-y-3">
                {[
                  { icon: Phone,  text: "+91-9850696969",      color: INDIGO },
                  { icon: Mail,   text: "info@myskillwiz.com", color: CYAN   },
                  { icon: MapPin, text: "Pune, Maharashtra",   color: INDIGO },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${color}12` }}>
                      <Icon size={14} style={{ color }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "rgba(13,27,62,0.65)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
