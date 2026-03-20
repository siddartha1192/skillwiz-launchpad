import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #fff7f0 100%)" }}
    >
      <Navbar />
      {/* ── Hero banner ── */}
      <div
        className="relative overflow-hidden py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0d1b3e 0%, #111d45 60%, #0f1f3d 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(30,200,232,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -right-20 top-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,26,0.12) 0%, transparent 70%)" }} />
        <div className="absolute -left-10 bottom-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(30,200,232,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[3.5px] uppercase mb-3" style={{ color: "#FF7A1A" }}>
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/50 text-sm">
            Please read these terms carefully before using the SkillWiz platform.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-4 py-16">

        {/* Intro callout */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background: "rgba(255,122,26,0.05)",
            border: "1.5px solid rgba(255,122,26,0.18)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "rgba(13,27,62,0.7)" }}>
            Welcome to SkillWiz! By accessing and using the SkillWiz platform, you agree to comply with and be bound by the following terms and conditions. These Terms of Service ("Terms") govern your use of our website, mobile applications, and any associated services (collectively, the "Service").
          </p>
          <p className="text-sm font-semibold mt-3" style={{ color: "#FF7A1A" }}>
            If you do not agree to these Terms, you should not use the Service.
          </p>
        </div>

        {/* Body */}
        <div
          className="text-sm leading-[1.95] space-y-5"
          style={{ color: "rgba(13,27,62,0.65)" }}
        >

          <p>
            By creating an account or using the SkillWiz platform, you agree to these Terms and any future modifications. We reserve the right to update or modify these Terms at any time, and such changes will become effective immediately upon being posted. You are responsible for reviewing these Terms periodically to stay informed about any updates.
          </p>

          <p>
            You must be at least 13 years of age to use SkillWiz. By using the platform, you represent and warrant that you are at least 13 years old. If you are under the age of 18, you must have parental or legal guardian consent to use the platform.
          </p>

          <p>
            To use certain features of the Service, you must create an account. You agree to provide accurate and complete information during the registration process and to keep your account information up-to-date. You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. If you suspect any unauthorized access to your account, you should immediately notify SkillWiz.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            You agree to use SkillWiz only for lawful purposes and in accordance with these Terms. You shall not engage in any activity that violates any applicable laws or regulations, infringes upon the intellectual property rights of others, disrupts or interferes with the Service or the servers connected to the platform, or attempts to gain unauthorized access to any part of the platform, its systems, or its data. SkillWiz may suspend or terminate your account if you violate these Terms.
          </p>

          <p>
            Any content you submit to SkillWiz, including but not limited to text, images, and videos, remains your property. By submitting content, you grant SkillWiz a non-exclusive, worldwide, royalty-free, sublicensable license to use, modify, and distribute the content as part of the Service. All content provided by SkillWiz, including educational materials, software, and platform features, is owned by SkillWiz or its licensors and is protected by intellectual property laws. You may not copy, distribute, or use SkillWiz content without prior written permission.
          </p>

          <p>
            Certain features of SkillWiz may require a subscription or one-time payment. If you subscribe to any premium services, you agree to pay the fees associated with your subscription. Payment details are handled securely, and you will be notified of any charges before they are processed. We offer refunds only under specific conditions — please refer to our Refund Policy for details.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            Your use of SkillWiz is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the platform, you consent to the collection and use of your data in accordance with our Privacy Policy.
          </p>

          <p>
            SkillWiz may contain links to third-party websites or services that are not owned or controlled by SkillWiz. We are not responsible for the content or practices of third-party services. You access such third-party links at your own risk.
          </p>

          <p>
            SkillWiz reserves the right to suspend or terminate your account at its discretion, without notice, if we believe you have violated these Terms or engaged in conduct that is harmful to the platform or its users. Upon termination, all rights granted to you under these Terms will cease, and you must immediately stop using the Service.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            The Service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the platform will always be available, error-free, or secure. To the fullest extent permitted by law, SkillWiz is not liable for any indirect, incidental, special, or consequential damages arising out of your use of the platform, including but not limited to loss of data, business interruption, or other damages.
          </p>

          <p>
            You agree to indemnify and hold SkillWiz, its affiliates, employees, and agents harmless from any claims, damages, losses, liabilities, or expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
          </p>

          <p>
            These Terms will be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or the Service will be subject to the exclusive jurisdiction of the courts in India.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            These Terms, along with our Privacy Policy and any other applicable agreements, constitute the entire agreement between you and SkillWiz regarding your use of the platform. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect. SkillWiz's failure to enforce any provision of these Terms does not constitute a waiver of that provision.
          </p>

        </div>

        {/* Contact Us box */}
        <div
          className="mt-14 rounded-2xl p-8"
          style={{ background: "linear-gradient(135deg, #0d1b3e 0%, #111d45 100%)" }}
        >
          <h3 className="text-lg font-bold text-white mb-1">Contact Us</h3>
          <p className="text-white/45 text-sm mb-6">
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <p className="text-white/70 text-sm font-semibold mb-4">SkillWiz Support Team</p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(30,200,232,0.1)" }}>
                <Mail size={14} style={{ color: "#1EC8E8" }} />
              </span>
              <a href="mailto:info@myskillwiz.com" className="text-white/65 hover:text-white transition-colors text-sm">
                info@myskillwiz.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,122,26,0.12)" }}>
                <Phone size={14} style={{ color: "#FF7A1A" }} />
              </span>
              <a href="tel:+919850696969" className="text-white/65 hover:text-white transition-colors text-sm">
                +91-9850696969
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(83,83,200,0.12)" }}>
                <MapPin size={14} style={{ color: "#a78bfa" }} />
              </span>
              <p className="text-white/65 text-sm leading-relaxed">
                D-403, Shreeram South Court, Nr. DMart,<br />
                Goner Rd, Jagatpura, Jaipur, Rajasthan – 302017
              </p>
            </li>
          </ul>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "#1EC8E8" }}
          >
            <ArrowLeft size={15} />
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
