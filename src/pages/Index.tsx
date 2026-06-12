import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NoticesSection from "@/components/NoticesSection";
import QuickLinks from "@/components/QuickLinks";
import HomeHighlights from "@/components/HomeHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <Ticker />
        <HeroSection />
        <AboutSection />
        <HomeHighlights />
        <NoticesSection />
        <QuickLinks />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
