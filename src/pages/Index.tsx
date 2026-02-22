import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BigLinksSection from "@/components/BigLinksSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import AudienceSection from "@/components/AudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BigLinksSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <AudienceSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
