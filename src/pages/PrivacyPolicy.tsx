import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm">
            Your privacy matters to us. Please read how we collect, use, and protect your data.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div
          className="prose-none text-sm leading-[1.95] space-y-5"
          style={{ color: "rgba(13,27,62,0.65)" }}
        >

          <p>
            SkillWiz is a cutting-edge online platform designed to revolutionize the way educators and students interact, learn, and grow. Whether you are an educator looking to create engaging teaching content or a learner striving to enhance your skills, SkillWiz provides the tools, resources, and community to help you succeed. Our platform offers a comprehensive range of interactive learning experiences, personalized assessments, and powerful learning management tools tailored to meet the needs of diverse users.
          </p>

          <p>
            At SkillWiz, we understand the importance of accessible and effective learning. That's why we've built a user-friendly platform that allows learners to access high-quality courses, practice assessments, and proctored tests. Educators, on the other hand, can easily create and manage educational content, track student progress, and foster a collaborative learning environment. With a growing community of educators, students, and industry experts, SkillWiz is more than just a learning platform; it's a thriving ecosystem that promotes continuous learning and skill development.
          </p>

          <p>
            In addition to being a platform for academic growth, SkillWiz also supports learners in their career aspirations by offering industry-relevant assessments and certifications. Our real-time analytics and AI-powered insights enable educators and administrators to track performance and identify opportunities for improvement, ensuring that every learner's potential is fully realized.
          </p>

          <p>
            At SkillWiz, we are committed to creating a safe, secure, and inclusive environment where knowledge sharing and skill development can thrive. With data security and privacy as our top priority, we ensure that your personal and learning information is always protected while you explore, learn, and connect on our platform.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            We gather information from you in various ways to ensure that we provide the best possible service. The data we collect falls into the following categories. When creating an account on SkillWiz, we collect details such as your name, email address, password, and role (student, educator, admin). For premium members, we collect payment information, billing details, and course preferences to facilitate a seamless transaction and learning experience. You can provide additional details, such as your educational background, skill interests, learning goals, and preferred teaching methods. If you participate in SkillWiz forums, discussions, or share learning materials, your contributions may be visible to other users.
          </p>

          <p>
            We automatically gather certain data when you interact with SkillWiz. This includes information such as your device type, browser details, operating system, and IP address. To enhance your experience, we track how you use the platform, including the courses you view, lessons you engage with, and your overall activity on the site. We use cookies and similar technologies to provide personalized content, store your preferences, and analyze how you interact with SkillWiz. You can manage cookie preferences via your browser settings. If you sign up via third-party accounts such as Google or Facebook, we may collect basic information from those platforms, such as your name, profile photo, and email address, as per the privacy settings of the third-party provider.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            SkillWiz uses your information to deliver and improve our services, as well as to ensure a seamless and personalized experience for all users. Your data is used to facilitate course enrollment, provide access to educational resources, and track your learning progress. We customize your learning journey by offering course recommendations based on your interests, performance, and preferences. We send updates, promotional content, and notifications about new features, which you can manage from your account settings. In the event you need assistance, we use your data to respond to inquiries and provide troubleshooting support. We also analyze user behavior to enhance platform performance and build new features tailored to user needs, and we implement various security protocols to protect your data from unauthorized access, loss, or misuse.
          </p>

          <p>
            We believe in empowering you to control your own information. You can access, update, or delete your personal data directly through your profile settings at any time. You may opt out of promotional emails or notifications by clicking the "unsubscribe" link provided in every email you receive from us. You can manage cookies through your browser settings, although please note that disabling certain cookies may affect your experience on SkillWiz. If you wish to request access to your data, or if you'd like to delete your information, you can contact our support team for assistance.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            We take your privacy seriously and implement stringent measures to protect your personal data. All sensitive information transmitted over the internet, such as payment data, is encrypted using industry-standard protocols. Only authorized personnel have access to personal data, and we employ robust authentication methods to protect your account. We perform regular security audits to identify and address vulnerabilities within our platform and only collect data that is necessary to provide our services. While we implement these protective measures, please understand that no online platform can guarantee 100% security. However, we are dedicated to doing everything possible to keep your information safe.
          </p>

          <p>
            Your personal information is treated with the utmost care and is shared only under specific circumstances. We may share information with trusted third-party service providers who assist with hosting, payments, analytics, and customer support — these providers are required to adhere to strict confidentiality obligations. We may also disclose your information to comply with applicable laws, regulations, or legal requests from government authorities. In the event of a merger, acquisition, or asset sale, your personal data may be transferred to the new owner or entity.
          </p>

          <div className="h-px my-8" style={{ background: "rgba(13,27,62,0.07)" }} />

          <p>
            SkillWiz is designed for users aged 13 and older. We do not knowingly collect personal information from children under the age of 13. If we learn that we have inadvertently collected information from a child under 13, we will promptly delete that data. Parents and guardians can contact us if they have concerns about their child's use of our platform.
          </p>

          <p>
            SkillWiz reserves the right to update or modify this Privacy Policy from time to time. We will notify users of significant changes by updating the "Effective Date" at the top of this page. For smaller changes, we may not provide notice, but we encourage you to review this policy regularly to stay informed about how we are protecting your data.
          </p>

        </div>

        {/* Contact Us box */}
        <div
          className="mt-14 rounded-2xl p-8"
          style={{ background: "linear-gradient(135deg, #0d1b3e 0%, #111d45 100%)" }}
        >
          <h3 className="text-lg font-bold text-white mb-1">Contact Us</h3>
          <p className="text-white/45 text-sm mb-6">
            If you have any questions or concerns about this Privacy Policy or your personal data, please reach out to us:
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
    </div>
  );
}
