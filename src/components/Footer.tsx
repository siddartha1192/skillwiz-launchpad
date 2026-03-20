import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const products = ["MyPlacement", "SmartGATE", "NEAT Assessment", "Coaching Platform", "AI GPS Learning"];
const company  = ["About Us", "Careers", "Blog", "Contact"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

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
                <li key={c}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{c}</a>
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
