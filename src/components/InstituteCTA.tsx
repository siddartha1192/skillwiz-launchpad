import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download } from "lucide-react";

export default function InstituteCTA() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-10 px-4" style={{ background: "linear-gradient(135deg, #3f3f99 0%, #2e2e7a 50%, #41b7d1 100%)" }}>
      <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textWrap: "balance" }}>Partner With Us</h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Join 200+ engineering institutes already using mySkillWiz to improve placement rates, accreditation scores, and student outcomes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/demo" className="btn-white">Request a Demo</Link>
          <button className="btn-outline-white flex items-center gap-2"><Download size={18} /> Download Brochure</button>
        </div>
      </div>
    </section>
  );
}
