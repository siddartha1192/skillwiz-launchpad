import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ProductsSection from "@/components/ProductsSection";
import WhySkillWiz from "@/components/WhySkillWiz";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import InstituteCTA from "@/components/InstituteCTA";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import InstitutesSection from "@/components/InstitutesSection";
import Reveal from "@/components/Reveal";

export default function Index() {
  return (
    <>
      <Navbar />

      {/* Hero is always visible — no reveal */}
      <HeroSection />

      <Reveal from="up" delay={0}>
        <StatsBar />
      </Reveal>

      <Reveal from="up" delay={0}>
        <InstitutesSection />
      </Reveal>

      <Reveal from="up" delay={0}>
        <ProductsSection />
      </Reveal>

      <Reveal from="left" delay={0}>
        <WhySkillWiz />
      </Reveal>

      <Reveal from="up" delay={0}>
        <HowItWorks />
      </Reveal>

      <Reveal from="right" delay={0}>
        <Testimonials />
      </Reveal>

      <Reveal from="up" delay={0}>
        <InstituteCTA />
      </Reveal>

      <Reveal from="up" delay={0}>
        <BlogSection />
      </Reveal>

      <Reveal from="fade" delay={0}>
        <Footer />
      </Reveal>
    </>
  );
}
