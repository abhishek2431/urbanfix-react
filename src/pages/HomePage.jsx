import HeroSection from "../components/HeroSection";
import PopularServicesSection from "../components/PopularServicesSection";
import CategoriesSection from "../components/CategoriesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TrustSection from "../components/TrustSection";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";

/**
 * Homepage — UC-style structure:
 * Hero → Popular services → Categories → How it works
 * → Trust → FAQs → Final CTA.
 *
 * Navbar, Footer and modals are rendered by Layout, so this file does NOT
 * re-render them (they used to be duplicated here).
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularServicesSection />
      <CategoriesSection />
      <HowItWorksSection />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}