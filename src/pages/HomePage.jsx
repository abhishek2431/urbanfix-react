import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import CategoriesSection from "../components/CategoriesSection";

export default function HomePage() {
  const { selectedCity } = useOutletContext();

  return (
    <>
      <HeroSection selectedCity={selectedCity} />
      <StatsBar />
      <CategoriesSection />
    </>
  );
}
