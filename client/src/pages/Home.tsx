import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
    </div>
  );
};

export default Home;
