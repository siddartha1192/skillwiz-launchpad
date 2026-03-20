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

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProductsSection />
      <WhySkillWiz />
      <HowItWorks />
      <Testimonials />
      <InstituteCTA />
      <BlogSection />
      <Footer />
    </>
  );
}
