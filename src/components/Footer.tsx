import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const products = ["MyPlacement", "SmartGATE", "NEAT Assessment", "Coaching Platform", "AI GPS Learning"];
const company = ["About Us", "Careers", "Blog", "Contact"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        {/* Brand */}
        <div>
          <a href="#" className="inline-block mb-3">
            <img src="/logo-white.png" alt="mySkillWiz" className="h-10 w-auto" />
          </a>
          <p className="text-white/50 text-sm leading-relaxed mb-5">Empowering Skills. Shaping Futures.</p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-accent hover:bg-white/10 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
          <ul className="space-y-2.5">
            {products.map((p) => <li key={p}><a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{p}</a></li>)}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2.5">
            {company.map((c) => <li key={c}><a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{c}</a></li>)}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-white/50 text-sm">
            <li className="flex items-center gap-2"><Mail size={14} className="text-accent shrink-0" /> info@myskillwiz.com</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-accent shrink-0" /> 9850696969</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="text-accent shrink-0 mt-0.5" /> Jagatpura, Jaipur, Rajasthan - 302017</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-6 text-white/30 text-xs gap-2">
        <span>© 2025 MEPL. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
