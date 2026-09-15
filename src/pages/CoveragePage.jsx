import { useOutletContext } from "react-router-dom";
import CoverageSection from "../components/CoverageSection";
import LocalProofSection from "../components/LocalProofSection";
import ReviewsSection from "../components/ReviewsSection";

export default function CoveragePage() {
  const { selectedCity, onSelectCity, onOpenCityPicker } = useOutletContext();

  return (
    <>
      <div className="px-5 pt-12 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="eyebrow">Coverage</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Where we&rsquo;re helping right now.
          </h1>
        </div>
      </div>
      <CoverageSection selectedCity={selectedCity} onSelectCity={onSelectCity} onOpenCityPicker={onOpenCityPicker} />
      <LocalProofSection selectedCity={selectedCity} />
      <ReviewsSection />
    </>
  );
}
