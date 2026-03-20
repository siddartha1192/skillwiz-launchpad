import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search, MapPin, Briefcase, Clock, ArrowRight,
  Building2, Users, Zap, Heart, ChevronDown, X,
} from "lucide-react";

const jobTypes = ["All", "Full time", "Part time", "Internship", "Contract"];
const locations = ["All", "Jaipur", "Bangalore", "Mumbai", "Chennai", "Hyderabad", "Kolkata", "New Delhi"];

const jobs = [
  {
    id: 1,
    company: "SkillWiz",
    title: "Business & Support Analyst",
    type: "Full time",
    locations: ["Bangalore", "Chennai", "Hyderabad", "Mumbai", "New Delhi"],
    posted: "1 year ago",
    color: "#1EC8E8",
    department: "Business",
    description: "Practice. Analyze. Improve. We are looking for an experienced personnel (preferably MBA) who can handle our software support (major) and can evolve in the role of Business Analyst (minor).",
    full: `Practice. Analyze. Improve.

We are looking for an experienced personnel (preferably MBA) who can handle our software support (major) and can evolve in the role of Business Analyst (minor).

Roles & Responsibilities:
• Provide software support to clients and resolve queries in a timely manner
• Analyze business requirements and translate them into functional specifications
• Coordinate with internal teams to ensure smooth delivery of solutions
• Prepare reports and documentation as required
• Build and maintain strong client relationships

Requirements:
• MBA or equivalent degree preferred
• 1–3 years of relevant experience
• Strong analytical and communication skills
• Proficiency in MS Office and data analysis tools
• Ability to manage multiple priorities`,
  },
  {
    id: 2,
    company: "SkillWiz",
    title: "Operation Manager",
    type: "Full time",
    locations: ["Jaipur"],
    posted: "1 year ago",
    color: "#FF7A1A",
    department: "Operations",
    description: "Practice. Analyze. Improve. Company Culture — We are fun loving, smart working and caring people. We care about each other, our clients, and embrace diversity.",
    full: `Practice. Analyze. Improve.

Company Culture
We are fun loving, smart working and caring people – we care about each other, we care about our clients, we care about each other and we embrace diversity.

Roles & Responsibilities:
• Oversee day-to-day operations and ensure smooth business functioning
• Manage teams across departments and drive operational efficiency
• Identify process improvements and implement best practices
• Monitor KPIs and prepare operational reports for leadership
• Coordinate with vendors, partners and clients

Requirements:
• 3–6 years of operations management experience
• Strong leadership and decision-making skills
• Excellent organizational and problem-solving abilities
• Experience with CRM/ERP tools is a plus
• Graduate/Post-graduate in Business Administration or related field`,
  },
  {
    id: 3,
    company: "SkillWiz",
    title: "Corporate Sales Manager",
    type: "Full time",
    locations: ["Kolkata", "Mumbai"],
    posted: "1 year ago",
    color: "#a78bfa",
    department: "Sales",
    description: "Practice. Analyze. Improve. Company Culture — We are fun loving, smart working and caring people. We care about each other, our clients, and embrace diversity.",
    full: `Practice. Analyze. Improve.

Company Culture
We are fun loving, smart working and caring people – we care about each other, we care about our clients, we care about each other and we embrace diversity.

Roles & Responsibilities:
• Drive B2B sales for SkillWiz products targeting corporates and enterprises
• Identify, prospect and close new corporate accounts
• Build long-term relationships with key decision makers
• Achieve monthly and quarterly revenue targets
• Collaborate with product and marketing teams on go-to-market strategies

Requirements:
• 3–7 years of B2B / corporate sales experience
• Proven track record of meeting or exceeding sales targets
• Excellent communication, negotiation and presentation skills
• Experience in EdTech or SaaS sales preferred
• Willingness to travel as required`,
  },
];

const perks = [
  { icon: Zap,      color: "#1EC8E8", title: "Fast Growth",       desc: "Work at the intersection of EdTech and AI — grow faster than anywhere else." },
  { icon: Users,    color: "#FF7A1A", title: "Great Team",        desc: "Fun-loving, smart-working people who care about each other and the mission." },
  { icon: Heart,    color: "#a78bfa", title: "Meaningful Work",   desc: "Every line of code, every sale, every support call helps a student succeed." },
  { icon: Building2,color: "#1EC8E8", title: "Flexible Culture",  desc: "We trust you. Results matter more than hours. Embrace your best work style." },
];

export default function Careers() {
  const [keyword, setKeyword]     = useState("");
  const [jobType, setJobType]     = useState("All");
  const [location, setLocation]   = useState("All");
  const [selected, setSelected]   = useState<typeof jobs[0] | null>(null);
  const [typeOpen, setTypeOpen]   = useState(false);
  const [locOpen, setLocOpen]     = useState(false);

  const filtered = jobs.filter(j => {
    const kw  = keyword.toLowerCase();
    const matchKw  = !kw || j.title.toLowerCase().includes(kw) || j.department.toLowerCase().includes(kw);
    const matchType = jobType === "All" || j.type === jobType;
    const matchLoc  = location === "All" || j.locations.includes(location);
    return matchKw && matchType && matchLoc;
  });

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all border-2 focus:border-[#1EC8E8] focus:shadow-[0_0_0_4px_rgba(30,200,232,0.08)] bg-white";
  const inputStyle = { borderColor: "rgba(13,27,62,0.12)", color: "#0d1b3e" };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#ffffff 50%,#fff7f0 100%)" }}>
      <Navbar />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden py-24 px-4 text-center"
        style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#111d45 60%,#0f1f3d 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(30,200,232,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -right-20 top-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,122,26,0.12) 0%,transparent 70%)" }} />
        <div className="absolute -left-10 bottom-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(30,200,232,0.1) 0%,transparent 70%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>We're Hiring</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Build the Future of<br /><span style={{ color: "#1EC8E8" }}>Education with Us</span>
          </h1>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Join a team that's transforming how students learn, prepare and get placed across India.
          </p>
        </div>
      </div>

      {/* ── Search & Filters ── */}
      <div className="max-w-5xl mx-auto px-4 -mt-7 relative z-10 mb-12">
        <div className="rounded-2xl p-5 md:p-6"
          style={{ background: "white", boxShadow: "0 20px 60px rgba(13,27,62,0.12)", border: "1px solid rgba(13,27,62,0.07)" }}>
          <div className="grid md:grid-cols-[1fr_180px_180px_auto] gap-3 items-end">

            {/* Keyword */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "rgba(13,27,62,0.4)" }}>Keywords</label>
              <div className="relative">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "rgba(13,27,62,0.3)" }} />
                <input type="text" placeholder="Job title, role..." value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                  className={inputCls + " pl-9"} style={inputStyle} />
              </div>
            </div>

            {/* Job Type dropdown */}
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "rgba(13,27,62,0.4)" }}>Job Type</label>
              <button onClick={() => { setTypeOpen(o => !o); setLocOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium border-2 bg-white transition-all"
                style={{ borderColor: typeOpen ? "#1EC8E8" : "rgba(13,27,62,0.12)", color: jobType === "All" ? "rgba(13,27,62,0.4)" : "#0d1b3e" }}>
                {jobType === "All" ? "All Types" : jobType}
                <ChevronDown size={14} className={`transition-transform ${typeOpen ? "rotate-180" : ""}`} style={{ color: "rgba(13,27,62,0.3)" }} />
              </button>
              {typeOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-xl bg-white z-20 overflow-hidden"
                  style={{ boxShadow: "0 12px 36px rgba(13,27,62,0.14)", border: "1px solid rgba(13,27,62,0.08)" }}>
                  {jobTypes.map(t => (
                    <button key={t} onClick={() => { setJobType(t); setTypeOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#f0f9ff]"
                      style={{ color: jobType === t ? "#1EC8E8" : "rgba(13,27,62,0.65)", fontWeight: jobType === t ? 700 : 500 }}>
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location dropdown */}
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "rgba(13,27,62,0.4)" }}>Location</label>
              <button onClick={() => { setLocOpen(o => !o); setTypeOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium border-2 bg-white transition-all"
                style={{ borderColor: locOpen ? "#1EC8E8" : "rgba(13,27,62,0.12)", color: location === "All" ? "rgba(13,27,62,0.4)" : "#0d1b3e" }}>
                {location === "All" ? "All Locations" : location}
                <ChevronDown size={14} className={`transition-transform ${locOpen ? "rotate-180" : ""}`} style={{ color: "rgba(13,27,62,0.3)" }} />
              </button>
              {locOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-xl bg-white z-20 overflow-hidden"
                  style={{ boxShadow: "0 12px 36px rgba(13,27,62,0.14)", border: "1px solid rgba(13,27,62,0.08)" }}>
                  {locations.map(l => (
                    <button key={l} onClick={() => { setLocation(l); setLocOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#f0f9ff]"
                      style={{ color: location === l ? "#1EC8E8" : "rgba(13,27,62,0.65)", fontWeight: location === l ? 700 : 500 }}>
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clear */}
            {(keyword || jobType !== "All" || location !== "All") && (
              <button onClick={() => { setKeyword(""); setJobType("All"); setLocation("All"); }}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.04]"
                style={{ background: "rgba(13,27,62,0.05)", color: "rgba(13,27,62,0.5)" }}>
                <X size={13} /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Job Listings ── */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold" style={{ color: "rgba(13,27,62,0.5)" }}>
            <span className="font-black" style={{ color: "#0d1b3e" }}>{filtered.length}</span> {filtered.length === 1 ? "position" : "positions"} found
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 rounded-2xl" style={{ background: "white", border: "1px solid rgba(13,27,62,0.07)" }}>
            <p className="font-bold text-lg mb-2" style={{ color: "#0d1b3e" }}>No positions found</p>
            <p className="text-sm" style={{ color: "rgba(13,27,62,0.4)" }}>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(job => (
              <div key={job.id}
                className="group rounded-2xl p-6 md:p-7 bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ border: "1px solid rgba(13,27,62,0.07)", boxShadow: "0 4px 20px rgba(13,27,62,0.06)" }}
                onClick={() => setSelected(job)}>
                <div className="flex flex-col md:flex-row md:items-center gap-5">

                  {/* Company logo placeholder */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 font-black text-white text-lg"
                    style={{ background: `linear-gradient(135deg,${job.color},${job.color}99)`, boxShadow: `0 8px 20px ${job.color}30` }}>
                    SW
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold" style={{ color: job.color }}>{job.company}</span>
                      <span className="text-white/0 select-none">·</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-bold"
                        style={{ background: `${job.color}12`, color: job.color }}>{job.type}</span>
                    </div>
                    <h3 className="font-black text-lg leading-tight mb-2 group-hover:text-[#1EC8E8] transition-colors"
                      style={{ color: "#0d1b3e" }}>{job.title}</h3>
                    <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: "rgba(13,27,62,0.55)" }}>
                      {job.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "rgba(13,27,62,0.4)" }}>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {job.locations.join(", ")}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={12} /> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> Posted {job.posted}
                      </span>
                    </div>
                  </div>

                  {/* Apply CTA */}
                  <div className="shrink-0">
                    <button
                      onClick={e => { e.stopPropagation(); setSelected(job); }}
                      className="flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-white text-sm transition-all duration-300 hover:scale-[1.04]"
                      style={{ background: `linear-gradient(135deg,${job.color},${job.color}cc)`, boxShadow: `0 8px 20px ${job.color}35` }}>
                      Apply Now <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Perks ── */}
      <div className="py-20 px-4" style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#0f2048 60%,#0d1b3e 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>Why SkillWiz</p>
            <h2 className="font-black text-white text-2xl md:text-3xl leading-tight" style={{ letterSpacing: "-0.02em" }}>
              More Than a Job — <span style={{ color: "#1EC8E8" }}>A Mission</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${p.color}18` }}>
                    <Icon size={20} style={{ color: p.color }} />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">{p.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Job Detail Modal ── */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(13,27,62,0.6)", backdropFilter: "blur(6px)" }}
          onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white"
            style={{ boxShadow: "0 40px 100px rgba(13,27,62,0.3)" }}
            onClick={e => e.stopPropagation()}>

            {/* Modal header */}
            <div className="sticky top-0 bg-white z-10 px-8 pt-7 pb-5"
              style={{ borderBottom: "1px solid rgba(13,27,62,0.07)" }}>
              <button onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
                style={{ color: "rgba(13,27,62,0.4)" }}>
                <X size={18} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-lg shrink-0"
                  style={{ background: `linear-gradient(135deg,${selected.color},${selected.color}99)` }}>
                  SW
                </div>
                <div>
                  <p className="text-xs font-bold mb-0.5" style={{ color: selected.color }}>{selected.company}</p>
                  <h2 className="font-black text-xl leading-tight" style={{ color: "#0d1b3e" }}>{selected.title}</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  { icon: Briefcase, text: selected.type },
                  { icon: MapPin,    text: selected.locations.join(", ") },
                  { icon: Clock,     text: `Posted ${selected.posted}` },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(13,27,62,0.05)", color: "rgba(13,27,62,0.55)" }}>
                    <Icon size={11} /> {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal body */}
            <div className="px-8 py-6">
              <div className="text-sm leading-[1.9] whitespace-pre-line mb-8" style={{ color: "rgba(13,27,62,0.7)" }}>
                {selected.full}
              </div>

              <Link to="/demo"
                className="w-full flex items-center justify-center gap-2.5 font-bold py-4 rounded-2xl text-white text-base transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 10px 32px rgba(255,122,26,0.4)" }}
                onClick={() => setSelected(null)}>
                Apply for This Position <ArrowRight size={18} />
              </Link>
              <p className="text-center text-xs mt-3" style={{ color: "rgba(13,27,62,0.35)" }}>
                Clicking will take you to our demo/contact form to get in touch.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
