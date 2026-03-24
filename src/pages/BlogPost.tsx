import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft, Clock, Tag, User, Calendar, MessageSquare,
  ThumbsUp, Share2, Bookmark, ChevronRight, Send,
} from "lucide-react";

const INDIGO = "#3f3f99";
const CYAN   = "#41b7d1";

/* ─────────────────────────────── BLOG DATA ─────────────────────────────── */
export const blogPosts: Record<string, {
  id: string; category: string; title: string; subtitle: string;
  author: string; authorRole: string; date: string; readTime: string;
  image: string; tags: string[];
  sections: { type: "p" | "h2" | "h3" | "ul" | "ol" | "qa" | "tip" | "divider"; content?: string; items?: string[]; pairs?: { q: string; a: string }[] }[];
}> = {
  "placement-guide-infosys": {
    id: "placement-guide-infosys",
    category: "Placement",
    title: "Placement Preparedness Guide: INFOSYS",
    subtitle: "Everything you need to know about Infosys recruitment — test pattern, aptitude samples, interview sets, and pro tips.",
    author: "Admin",
    authorRole: "SkillWiz Team",
    date: "October 30, 2024",
    readTime: "12 min read",
    image: "/PlacementPage/pexels-armin-rimoldi-5554261.jpg",
    tags: ["Infosys", "Placement", "Aptitude", "Interview", "Campus Hiring"],
    sections: [
      { type: "p", content: "Infosys, the Indian multinational corporation, has been recruiting engineering freshers for years and visits most college campuses. Before the recruitment process it's important to get an overview of the company profile, test pattern and interview styles. The SkillWiz team resourced all the data from students who appeared in the process and this will definitely help you get placed in your dream company." },
      { type: "h2", content: "About Infosys" },
      { type: "p", content: "Infosys Limited was established in the year 1981 with its headquarters in Bengaluru, India. Infosys provides business consultancy, information technology and outsourcing services to its clients. The company has more than 160,000+ employees." },
      { type: "p", content: "Infosys is known to provide software development, maintenance and independent validation services to companies in banking, finance, insurance, manufacturing and other domains. Finacle, one of its well-known products, provides universal banking solutions with various components for retail and corporate banking." },
      { type: "h3", content: "Key Products" },
      { type: "ul", items: [
        "NIA — Next Generation Integrated AI Platform (MANA)",
        "Infosys Information Platform",
        "EdgeVerve Systems",
        "Finacle — Global Banking Platform",
        "Panaya Cloud Suite",
        "Skava",
      ]},
      { type: "h3", content: "Major Acquisitions" },
      { type: "p", content: "Some of the major acquisitions by Infosys till date include Australia-based IT service provider Expert Information Services, Atlanta-based McCamish Systems, Australia-based Portland Group, Switzerland-based Lodestone Management Consultants, Panaya Inc, Skava, and Noah Consulting." },
      { type: "divider" },
      { type: "h2", content: "Overview of the Test & Aptitude Segments" },
      { type: "p", content: "Infosys divides the selection process into two stages:" },
      { type: "ol", items: ["Written Test", "Personal Interview (Technical + HR)"] },
      { type: "h3", content: "Written Round" },
      { type: "p", content: "The test consists of three sections:" },
      { type: "ul", items: [
        "Quantitative Aptitude — 10 questions, 35 minutes",
        "Reasoning Ability — 15 questions, 25 minutes",
        "Verbal Ability — 40 questions, 35 minutes",
      ]},
      { type: "tip", content: "There are sectional cut-offs but NO negative marking. Attempt every question!" },
      { type: "h3", content: "Section-wise Analysis" },
      { type: "h3", content: "Quantitative Aptitude" },
      { type: "ul", items: [
        "Checks problem-solving ability and analytical skills.",
        "Questions majorly come from: Number System, Algebra, Permutation & Combination, Time-Speed-Distance, Time & Work, and Probability.",
        "Solve with full concentration — questions can be time-consuming.",
      ]},
      { type: "h3", content: "Verbal Ability" },
      { type: "ul", items: [
        "Checks grammar and comprehension skills.",
        "Topics: Vocabulary, Grammar, Synonyms & Antonyms, Comprehension Passages, Critical Reasoning.",
        "1 long passage + 1 short passage — attempt the short one first.",
        "Options may seem similar — focus on accuracy and read carefully.",
        "Most candidates are not shortlisted because of underperforming in this section.",
      ]},
      { type: "divider" },
      { type: "h2", content: "Sample Aptitude Questions" },
      { type: "qa", pairs: [
        { q: "There is a 5-digit number. 3 pairs of sum is eleven each. Last digit is 3 times the first one. 3rd digit is 3 less than the second. 4th digit is 4 more than the second one. Find the number.", a: "25296" },
        { q: "Every day a cyclist meets a train at a particular crossing. Both are travelling in the same direction. The cyclist travels at 10 kmph. One day the cyclist comes late by 25 min and meets the train 5 km before the crossing. What is the speed of the train?", a: "60 kmph" },
        { q: "Two twins: one always lies on Mon/Wed/Fri, the other on Tue/Thu/Sat. Person A says 'Today is Sunday, my name is Anil.' Person B says 'Today is Tuesday, my name is Bill.' What day is today?", a: "Tuesday" },
        { q: "If x and y are both positive integers, how much greater is x than y? (I) x + y = 20  (II) x = y²", a: "C — Both statements taken together are sufficient." },
        { q: "50% of articles are by staff. 60% are on current affairs. 75% of current affairs articles are by staff with 5+ years experience. 20 articles are written by staff members. How many current affairs articles are by journalists with 5+ years experience?", a: "A — Statement 1 alone is sufficient." },
        { q: "Is xy > 0? (I) x/y < 0  (II) x + y < 0", a: "A — Statement 1 alone is sufficient." },
        { q: "Is w a whole number? (I) 3w is an odd number. (II) 2w is an even number.", a: "B — Statement 2 alone is sufficient." },
      ]},
      { type: "divider" },
      { type: "h2", content: "Personal Interview — Technical + HR" },
      { type: "tip", content: "Main focus areas: Technical knowledge, project/internship questions, basic coding in C / C++ / Java." },
      { type: "h3", content: "Interview Set 1" },
      { type: "ul", items: [
        "Introduce yourself.",
        "Which subjects have you prepared?",
        "Difference between procedural and object-oriented language.",
        "Write a program demonstrating overriding.",
        "What is inheritance?",
        "What is DBMS? Properties of DBMS.",
        "What are the stages of SDLC?",
        "Write a C program to count the number of strings.",
      ]},
      { type: "h3", content: "Interview Set 2" },
      { type: "ul", items: [
        "Tell me about yourself and your college.",
        "Why do you want to join Infosys?",
        "What is SDLC cycle? Explain the different stages.",
        "Explain the operation and maintenance stage.",
        "Which programming language are you comfortable with?",
        "Write code for the Fibonacci series.",
        "Tell me about your project.",
      ]},
      { type: "h3", content: "Interview Set 3" },
      { type: "ul", items: [
        "Tell me about yourself.",
        "What is your favourite subject?",
        "What is a pointer?",
        "What is great about C? Why?",
        "What is an operating system?",
        "What is Big Data?",
        "What is IoT?",
        "Differences between C++ and Java.",
        "Explain the projects mentioned in your resume.",
      ]},
      { type: "h3", content: "Interview Set 4 — Stress Interview" },
      { type: "ul", items: [
        "How many engineering schools are there in your campus?",
        "What is the strength of E&TC branch in your college?",
        "What is polymorphism?",
        "Why IT company?",
        "What do you know about what Infosys actually does?",
        "Infosys offers less than Accenture — then why do you want to join Infosys?",
        "If I were an Accenture interviewer right now, which company would you choose?",
      ]},
      { type: "h3", content: "Interview Set 5" },
      { type: "ul", items: [
        "Tell me something about yourself.",
        "What is ACID property?",
        "Why is your % so low in B.Tech?",
        "What is encapsulation and polymorphism?",
        "What is 3NF in DBMS?",
        "What is a JOIN in database?",
        "What is pass by value vs pass by reference?",
        "What is class and interface in Java?",
        "Design a login form using HTML and connect it to a database.",
        "Perform operation on string 'ROHIT' and print it vertically.",
        "Create a linked list.",
        "What is insertion sort and its complexity?",
        "What is Agile methodology?",
        "Why should I hire you?",
      ]},
      { type: "divider" },
      { type: "h2", content: "General Tips to Crack Infosys" },
      { type: "ul", items: [
        "Be thorough with your resume — expect questions on everything you mention.",
        "Be thorough with your project and able to explain every decision.",
        "Prepare domain-based technical questions for your branch.",
        "Have knowledge about Infosys' services, products and recent news.",
        "Practice basic coding problems in at least one language (C / C++ / Java).",
        "Be confident and composed — especially during stress interviews.",
        "Work on your spoken English — Verbal is the most-failed section.",
      ]},
    ],
  },
};

/* ─────────────────────────────── COMMENTS ─────────────────────────────── */
interface Comment {
  id: number; name: string; date: string; text: string; likes: number;
}

const seedComments: Comment[] = [
  { id: 1, name: "Rahul Sharma", date: "Nov 2, 2024", text: "This guide is incredibly detailed! The stress interview set really opened my eyes — I never expected them to pit Accenture against Infosys like that. Definitely preparing for it now.", likes: 14 },
  { id: 2, name: "Priya Nair", date: "Nov 5, 2024", text: "Just cracked the Infosys written round! The tip about attempting the short comprehension passage first saved me a lot of time. Thanks SkillWiz!", likes: 9 },
  { id: 3, name: "Aditya Mehta", date: "Nov 8, 2024", text: "The sample aptitude questions are spot on. Q2 about the cyclist and train is a classic. Practice these type of problems on SkillWiz and you'll be fine.", likes: 6 },
];

/* ─────────────────────────────── RELATED ─────────────────────────────── */
const relatedPosts = [
  { title: "Placement Preparedness Guide: TCS", category: "Placement", date: "Nov 15, 2024", image: "/PlacementPage/pexels-shkrabaanthony-6609373.jpg" },
  { title: "Top 10 Skills Recruiters Look for in 2025", category: "Career", date: "Feb 28, 2025", image: "/PlacementPage/pexels-karola-g-6958531.jpg" },
  { title: "Cracking Aptitude: A 30-Day Plan", category: "Placement", date: "Feb 7, 2025", image: "/PlacementPage/pexels-olly-3808809.jpg" },
];

/* ─────────────────────────────── PAGE ─────────────────────────────── */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  const [comments, setComments] = useState<Comment[]>(seedComments);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const [form, setForm] = useState({ name: "", email: "", text: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#f0f0ff" }}>
        <Navbar />
        <p className="text-2xl font-bold mt-32" style={{ color: "#0d1b3e" }}>Post not found.</p>
        <Link to="/blog" className="mt-6 text-sm font-semibold" style={{ color: CYAN }}>← Back to Blog</Link>
        <Footer />
      </div>
    );
  }

  const handleLike = (id: number) => {
    if (likedIds.has(id)) return;
    setLikedIds(prev => new Set(prev).add(id));
    setComments(prev => prev.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    setComments(prev => [...prev, {
      id: Date.now(), name: form.name.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      text: form.text.trim(), likes: 0,
    }]);
    setForm({ name: "", email: "", text: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all border-2";
  const inputStyle = { borderColor: "rgba(13,27,62,0.12)", color: "#0d1b3e" };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg,#f0f0ff 0%,#ffffff 60%,#f5f5ff 100%)" }}>
      <Navbar />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,27,62,0.95) 0%, rgba(13,27,62,0.70) 55%, rgba(13,27,62,0.35) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 pt-36 pb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-6 transition-colors hover:opacity-80" style={{ color: "#7dd8eb" }}>
            <ArrowLeft size={15} /> Back to Blog
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <Tag size={12} style={{ color: "#7dd8eb" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7dd8eb" }}>{post.category}</span>
          </div>

          <h1 className="font-black text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
          <p className="text-white/65 text-base mb-8 max-w-2xl">{post.subtitle}</p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <User size={14} />
              <span className="font-semibold text-white/75">{post.author}</span>
              <span>·</span>
              <span>{post.authorRole}</span>
            </div>
            <div className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</div>
            <div className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</div>
            <div className="flex items-center gap-1.5"><MessageSquare size={14} />{comments.length} comments</div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid lg:grid-cols-[1fr_300px] gap-12 items-start">

        {/* Article content */}
        <article>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map(t => (
              <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: `${INDIGO}0d`, color: INDIGO, border: `1px solid ${INDIGO}22` }}>
                #{t}
              </span>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-5" style={{ color: "rgba(13,27,62,0.72)", lineHeight: 1.85 }}>
            {post.sections.map((sec, i) => {
              if (sec.type === "divider") return <div key={i} className="h-px my-8" style={{ background: "rgba(13,27,62,0.08)" }} />;
              if (sec.type === "h2") return (
                <h2 key={i} className="font-black text-2xl mt-10 mb-2" style={{ color: "#0d1b3e", letterSpacing: "-0.01em" }}>{sec.content}</h2>
              );
              if (sec.type === "h3") return (
                <h3 key={i} className="font-bold text-lg mt-6 mb-1" style={{ color: INDIGO }}>{sec.content}</h3>
              );
              if (sec.type === "p") return <p key={i} className="text-[15px]">{sec.content}</p>;
              if (sec.type === "ul") return (
                <ul key={i} className="space-y-2 ml-2">
                  {sec.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: INDIGO }} />
                      {item}
                    </li>
                  ))}
                </ul>
              );
              if (sec.type === "ol") return (
                <ol key={i} className="space-y-2 ml-2">
                  {sec.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px]">
                      <span className="font-black shrink-0" style={{ color: INDIGO, minWidth: 20 }}>{j + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              );
              if (sec.type === "tip") return (
                <div key={i} className="rounded-2xl px-6 py-4"
                  style={{ background: `${CYAN}0d`, border: `1.5px solid ${CYAN}30` }}>
                  <p className="text-sm font-semibold" style={{ color: "#2a8ca8" }}>💡 {sec.content}</p>
                </div>
              );
              if (sec.type === "qa") return (
                <div key={i} className="space-y-4">
                  {sec.pairs?.map((pair, j) => (
                    <div key={j} className="rounded-2xl overflow-hidden"
                      style={{ border: `1px solid ${INDIGO}18` }}>
                      <div className="px-5 py-3" style={{ background: `${INDIGO}07` }}>
                        <p className="text-sm font-semibold" style={{ color: "#0d1b3e" }}>
                          <span className="font-black mr-2" style={{ color: INDIGO }}>Q{j + 1}.</span>
                          {pair.q}
                        </p>
                      </div>
                      <div className="px-5 py-3 bg-white">
                        <p className="text-sm" style={{ color: "rgba(13,27,62,0.65)" }}>
                          <span className="font-bold mr-1" style={{ color: CYAN }}>Ans:</span>
                          {pair.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
              return null;
            })}
          </div>

          {/* Share strip */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 py-6 px-6 rounded-2xl"
            style={{ background: "rgba(13,27,62,0.03)", border: "1px solid rgba(13,27,62,0.07)" }}>
            <p className="text-sm font-bold" style={{ color: "#0d1b3e" }}>Found this helpful? Share it!</p>
            <div className="flex items-center gap-3">
              {[
                { icon: Share2,   label: "Share", color: CYAN   },
                { icon: Bookmark, label: "Save",  color: INDIGO },
              ].map(({ icon: Icon, label, color }) => (
                <button key={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.04]"
                  style={{ background: `${color}12`, color }}>
                  <Icon size={14} /> {label}
                </button>
              ))}
            </div>
          </div>

          {/* ── COMMENTS ── */}
          <div className="mt-14" id="comments">
            <h2 className="font-black text-xl mb-8 flex items-center gap-3" style={{ color: "#0d1b3e" }}>
              <MessageSquare size={20} style={{ color: INDIGO }} />
              {comments.length} Comments
            </h2>

            {/* Existing comments */}
            <div className="space-y-5 mb-10">
              {comments.map(c => (
                <div key={c.id} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-black text-sm text-white"
                    style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)` }}>
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 rounded-2xl p-5 bg-white"
                    style={{ border: "1px solid rgba(13,27,62,0.07)", boxShadow: "0 4px 16px rgba(13,27,62,0.05)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-sm" style={{ color: "#0d1b3e" }}>{c.name}</span>
                        <span className="text-xs ml-2" style={{ color: "rgba(13,27,62,0.35)" }}>{c.date}</span>
                      </div>
                      <button onClick={() => handleLike(c.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                        style={{
                          background: likedIds.has(c.id) ? `${INDIGO}15` : "rgba(13,27,62,0.04)",
                          color: likedIds.has(c.id) ? INDIGO : "rgba(13,27,62,0.4)",
                        }}>
                        <ThumbsUp size={12} /> {c.likes}
                      </button>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,62,0.65)" }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment form */}
            <div className="rounded-3xl p-7 md:p-8"
              style={{ background: "white", border: `1px solid ${INDIGO}12`, boxShadow: "0 8px 32px rgba(13,27,62,0.07)" }}>
              <h3 className="font-black text-lg mb-1" style={{ color: "#0d1b3e" }}>Leave a Comment</h3>
              <p className="text-sm mb-6" style={{ color: "rgba(13,27,62,0.4)" }}>Your email address will not be published.</p>

              {submitted && (
                <div className="mb-5 rounded-xl px-5 py-3" style={{ background: `${CYAN}0d`, border: `1.5px solid ${CYAN}30` }}>
                  <p className="text-sm font-semibold" style={{ color: "#2a8ca8" }}>Thank you! Your comment has been posted.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.45)" }}>Name *</label>
                    <input required type="text" placeholder="Arjun Sharma" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.45)" }}>Email (optional)</label>
                    <input type="email" placeholder="you@example.com" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputCls} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(13,27,62,0.45)" }}>Comment *</label>
                  <textarea required rows={4} placeholder="Share your experience or ask a question…" value={form.text}
                    onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                    className={inputCls + " resize-none w-full"} style={inputStyle} />
                </div>
                <button type="submit"
                  className="flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-2xl text-white transition-all duration-300 hover:scale-[1.03]"
                  style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 8px 28px ${INDIGO}40` }}>
                  Post Comment <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="space-y-7 lg:sticky lg:top-24">

          {/* Author card */}
          <div className="rounded-2xl p-6 bg-white" style={{ border: "1px solid rgba(13,27,62,0.07)", boxShadow: "0 8px 28px rgba(13,27,62,0.07)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white"
                style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)` }}>A</div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#0d1b3e" }}>{post.author}</p>
                <p className="text-xs" style={{ color: "rgba(13,27,62,0.45)" }}>{post.authorRole}</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(13,27,62,0.58)" }}>
              The SkillWiz team collects first-hand placement data from students who have appeared in recruitment drives to bring you the most accurate and useful guides.
            </p>
          </div>

          {/* Related posts */}
          <div className="rounded-2xl p-6 bg-white" style={{ border: "1px solid rgba(13,27,62,0.07)", boxShadow: "0 8px 28px rgba(13,27,62,0.06)" }}>
            <p className="text-xs font-bold tracking-[3px] uppercase mb-4" style={{ color: INDIGO }}>Related Articles</p>
            <div className="space-y-4">
              {relatedPosts.map((r, i) => (
                <Link key={i} to="/blog"
                  className="flex gap-3 group transition-all duration-200 hover:opacity-80">
                  <img src={r.image} alt={r.title}
                    className="w-16 h-14 rounded-xl object-cover shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: INDIGO }}>{r.category}</span>
                    <p className="text-xs font-semibold leading-snug mt-0.5 line-clamp-2 transition-colors"
                      style={{ color: "#0d1b3e" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = CYAN}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#0d1b3e"}>
                      {r.title}
                    </p>
                    <p className="text-[10px] mt-1" style={{ color: "rgba(13,27,62,0.35)" }}>{r.date}</p>
                  </div>
                  <ChevronRight size={14} className="shrink-0 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: INDIGO }} />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg,#eef0ff,#e8e8f8)", border: `1.5px solid ${INDIGO}22` }}>
            <p className="text-sm font-black mb-2" style={{ color: "#0d1b3e" }}>Ready for placement?</p>
            <p className="text-xs mb-4" style={{ color: "rgba(13,27,62,0.55)" }}>Take a mock test and know where you stand before the drive.</p>
            <Link to="/demo"
              className="inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-white text-sm transition-all duration-300 hover:scale-[1.04]"
              style={{ background: `linear-gradient(135deg, ${INDIGO}, #5252b8)`, boxShadow: `0 6px 20px ${INDIGO}35` }}>
              Take a Test <ArrowLeft size={13} className="rotate-180" />
            </Link>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
