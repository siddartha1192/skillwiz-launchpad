import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";

const categories = ["All", "GATE Prep", "Placement", "Career", "AI & Tech", "Student Stories"];

const posts = [
  {
    id: 1,
    slug: "placement-guide-infosys",
    category: "Placement",
    title: "Placement Preparedness Guide: INFOSYS",
    excerpt: "Everything you need to know about Infosys recruitment — company profile, test pattern, sample aptitude questions, interview sets and pro tips from students who cracked it.",
    author: "Admin",
    authorRole: "SkillWiz Team",
    date: "Oct 30, 2024",
    readTime: "12 min read",
    image: "/PlacementPage/pexels-armin-rimoldi-5554261.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: null,
    category: "GATE Prep",
    title: "How AI-Powered Learning is Changing GATE Preparation in 2025",
    excerpt: "Discover how personalized AI algorithms are helping students identify their exact knowledge gaps and reach their target score in less time and money.",
    author: "Dr. Anand Kulkarni",
    authorRole: "GATE Expert & Mentor",
    date: "Mar 15, 2025",
    readTime: "6 min read",
    image: "/PlacementPage/pexels-shkrabaanthony-6609373.jpg",
    featured: false,
  },
  {
    id: 3,
    slug: null,
    category: "Placement",
    title: "From Campus to Corporate: How 94% of Our Students Land Their Dream Job",
    excerpt: "A deep dive into the MyPlacement methodology — assessments, mock interviews, and AI-driven coaching that transforms campus students into job-ready professionals.",
    author: "Priya Mehta",
    authorRole: "Placement Head",
    date: "Mar 10, 2025",
    readTime: "5 min read",
    image: "/PlacementPage/pexels-armin-rimoldi-5554261.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: null,
    category: "Student Stories",
    title: "Rohan's Journey: AIR 42 in GATE CSE — A Strategy That Worked",
    excerpt: "Rohan Sharma shares how SmartGATE's continuous measurement and personalized mentoring helped him go from average scores to an All India Rank of 42.",
    author: "Rohan Sharma",
    authorRole: "GATE CSE AIR 42",
    date: "Mar 5, 2025",
    readTime: "4 min read",
    image: "/PlacementPage/pexels-olly-3808809.jpg",
    featured: false,
  },
  {
    id: 5,
    slug: null,
    category: "Career",
    title: "Top 10 Skills Recruiters Look for in Engineering Graduates in 2025",
    excerpt: "A comprehensive guide on what top companies like TCS, Infosys, Wipro, and startups actually test during campus hiring — and how to prepare for each.",
    author: "Sneha Joshi",
    authorRole: "Career Counsellor",
    date: "Feb 28, 2025",
    readTime: "7 min read",
    image: "/PlacementPage/pexels-karola-g-6958531.jpg",
    featured: false,
  },
  {
    id: 6,
    slug: null,
    category: "AI & Tech",
    title: "The Science Behind Personalized Learning: How Our Algorithm Works",
    excerpt: "A look under the hood at the patent-pending AI algorithm powering SmartGATE — continuous measurement, knowledge graphs, and adaptive question selection.",
    author: "Tech Team, SkillWiz",
    authorRole: "Engineering",
    date: "Feb 20, 2025",
    readTime: "8 min read",
    image: "/PlacementPage/pexels-olly-3808809_76587.jpg",
    featured: false,
  },
  {
    id: 7,
    slug: null,
    category: "GATE Prep",
    title: "GATE 2026 Syllabus Changes: What You Need to Know Right Now",
    excerpt: "A complete breakdown of the updated GATE 2026 syllabus for CS, ECE, EE, ME and CE branches — with a preparation roadmap for each.",
    author: "Dr. Anand Kulkarni",
    authorRole: "GATE Expert & Mentor",
    date: "Feb 14, 2025",
    readTime: "5 min read",
    image: "/PlacementPage/pexels-shkrabaanthony-6609373.jpg",
    featured: false,
  },
  {
    id: 8,
    slug: null,
    category: "Placement",
    title: "Cracking Aptitude Tests: A 30-Day Preparation Plan for Campus Drives",
    excerpt: "Our structured 30-day plan covers quantitative aptitude, logical reasoning, verbal ability, and technical rounds — used by 50,000+ students.",
    author: "Amit Verma",
    authorRole: "Aptitude Coach",
    date: "Feb 7, 2025",
    readTime: "6 min read",
    image: "/PlacementPage/pexels-armin-rimoldi-5554261.jpg",
    featured: false,
  },
  {
    id: 9,
    slug: null,
    category: "Student Stories",
    title: "How Isha Went from 3 Rejections to 3 Offers in One Placement Season",
    excerpt: "Isha's story of resilience, targeted preparation using MyPlacement's mock tests, and how feedback from AI-driven assessments changed her approach.",
    author: "Isha Patel",
    authorRole: "Placed at Deloitte",
    date: "Jan 30, 2025",
    readTime: "4 min read",
    image: "/PlacementPage/pexels-olly-3808809.jpg",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "GATE Prep":      "#1EC8E8",
  "Placement":      "#FF7A1A",
  "Career":         "#a78bfa",
  "AI & Tech":      "#1EC8E8",
  "Student Stories":"#FF7A1A",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);
  const showFeatured = (activeCategory === "All" && search === "") && featured;

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
          <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>SkillWiz Blog</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Insights for <span style={{ color: "#1EC8E8" }}>Learners & Educators</span>
          </h1>
          <p className="text-white/50 text-base mb-8 max-w-xl mx-auto">
            Tips, stories, strategies and deep-dives on GATE prep, campus placement, AI learning, and career growth.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.35)" }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 rounded-2xl text-sm font-medium outline-none"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                color: "white",
                backdropFilter: "blur(10px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Category pills ── */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(c => {
            const on = activeCategory === c;
            return (
              <button key={c} onClick={() => setActiveCategory(c)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: on ? "#0d1b3e" : "white",
                  color: on ? "white" : "rgba(13,27,62,0.55)",
                  border: `1.5px solid ${on ? "#0d1b3e" : "rgba(13,27,62,0.1)"}`,
                  boxShadow: on ? "0 6px 20px rgba(13,27,62,0.18)" : "none",
                }}>
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* ── Featured post ── */}
        {showFeatured && featured && (
          <div className="mb-14 rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 24px 64px rgba(13,27,62,0.12)", border: "1px solid rgba(13,27,62,0.07)" }}>
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[280px]">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.05) 100%)" }} />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: categoryColors[featured.category] || "#1EC8E8", color: "white" }}>
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={12} style={{ color: categoryColors[featured.category] }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: categoryColors[featured.category] }}>
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-black text-2xl md:text-3xl leading-tight mb-4" style={{ color: "#0d1b3e", letterSpacing: "-0.02em" }}>
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(13,27,62,0.55)" }}>{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0d1b3e" }}>{featured.author}</p>
                    <p className="text-xs" style={{ color: "rgba(13,27,62,0.4)" }}>{featured.date} · {featured.readTime}</p>
                  </div>
                  <Link to={featured.slug ? `/blog/${featured.slug}` : "#"}
                    className="group flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-white text-sm transition-all duration-300 hover:scale-[1.04]"
                    style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 8px 24px rgba(255,122,26,0.35)" }}>
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Grid ── */}
        {rest.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map(post => {
              const color = categoryColors[post.category] || "#1EC8E8";
              const href = post.slug ? `/blog/${post.slug}` : "#";
              return (
                <Link key={post.id} to={href}
                  className="group rounded-3xl overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "0 8px 32px rgba(13,27,62,0.07)", border: "1px solid rgba(13,27,62,0.06)", textDecoration: "none" }}>
                  <div className="relative overflow-hidden" style={{ height: 200 }}>
                    <img src={post.image} alt={post.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,27,62,0.35) 0%, transparent 60%)" }} />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{ background: `${color}22`, color, border: `1px solid ${color}40`, backdropFilter: "blur(6px)" }}>
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-black text-base leading-snug mb-3 flex-1" style={{ color: "#0d1b3e" }}>
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(13,27,62,0.5)" }}>
                      {post.excerpt.slice(0, 110)}…
                    </p>
                    <div className="flex items-center justify-between pt-4"
                      style={{ borderTop: "1px solid rgba(13,27,62,0.06)" }}>
                      <div>
                        <p className="text-xs font-semibold" style={{ color: "#0d1b3e" }}>{post.author}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Clock size={10} style={{ color: "rgba(13,27,62,0.35)" }} />
                          <span className="text-[11px]" style={{ color: "rgba(13,27,62,0.4)" }}>{post.readTime} · {post.date}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                        style={{ background: `${color}15`, color }}>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg font-semibold" style={{ color: "rgba(13,27,62,0.35)" }}>No articles found.</p>
          </div>
        )}

        {/* ── Newsletter CTA ── */}
        <div className="mt-20 rounded-3xl p-10 text-center"
          style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#111d45 100%)", boxShadow: "0 24px 64px rgba(13,27,62,0.15)" }}>
          <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>Stay in the Loop</p>
          <h3 className="font-black text-white text-2xl md:text-3xl mb-3 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Get the Latest Articles<br /><span style={{ color: "#1EC8E8" }}>Delivered to Your Inbox</span>
          </h3>
          <p className="text-white/45 text-sm mb-8 max-w-md mx-auto">
            Weekly insights on GATE, placements, AI learning, and career advice — no spam, just value.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-2xl text-sm font-medium outline-none"
              style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.15)", color: "white" }} />
            <button
              className="font-bold px-7 py-3.5 rounded-2xl text-white text-sm transition-all duration-300 hover:scale-[1.04] shrink-0"
              style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 8px 28px rgba(255,122,26,0.4)" }}>
              Subscribe
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
