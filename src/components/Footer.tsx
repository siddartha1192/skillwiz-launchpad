import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const products = ["MyPlacement", "SmartGATE", "NEAT Assessment", "Coaching Platform", "AI GPS Learning"];
const company: { label: string; href: string }[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers",  href: "/careers" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-navy-deep pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Newsletter strip ── */}
        <div className="rounded-2xl px-8 py-7 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <p className="text-white font-bold text-lg leading-tight">Stay in the loop</p>
            <p className="text-white/40 text-sm mt-0.5">Get updates on new features, placements &amp; tips.</p>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#1EC8E8" }}>
              <CheckCircle2 size={18} /> Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1EC8E8"; }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
              <button type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-[1.04] shrink-0"
                style={{ background: "linear-gradient(135deg,#FF7A1A,#FF9847)", boxShadow: "0 6px 20px rgba(255,122,26,0.4)" }}>
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* About / Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img src="/logo-white.png" alt="mySkillWiz" className="h-10 w-auto" />
            </a>

            {/* About blurb */}
            <p className="text-white/55 text-sm leading-relaxed mb-2">
              At SkillWiz, we make learning immersive, accessible, and future-ready. Our platform
              empowers learners to grow and educators to inspire, creating a world where knowledge
              knows no limits!
            </p>
            <p
              className="text-sm font-semibold mb-5"
              style={{ color: "#FF7A1A" }}
            >
              Empowering Skills, Shaping Futures.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-accent hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link to={c.href} className="text-white/50 hover:text-white text-sm transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <ul className="space-y-4 text-sm">

              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,122,26,0.12)" }}>
                  <Phone size={14} style={{ color: "#FF7A1A" }} />
                </span>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Phone</div>
                  <a href="tel:+919850696969" className="text-white/65 hover:text-white transition-colors">
                    +91-9850696969
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(30,200,232,0.1)" }}>
                  <Mail size={14} style={{ color: "#1EC8E8" }} />
                </span>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Email</div>
                  <a href="mailto:info@myskillwiz.com" className="text-white/65 hover:text-white transition-colors">
                    info@myskillwiz.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(83,83,200,0.12)" }}>
                  <MapPin size={14} style={{ color: "#a78bfa" }} />
                </span>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Address</div>
                  <p className="text-white/65 leading-relaxed">
                    D-403, Shreeram South Court,<br />
                    Nr. DMart, Goner Rd, Jagatpura,<br />
                    Jaipur, Rajasthan – 302017
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-white/30 text-xs gap-2">
          <span>© 2025 MEPL. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
