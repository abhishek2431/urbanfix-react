import { useOutletContext } from "react-router-dom";
import WhyUsSection from "../components/WhyUsSection";
import HowItWorksSection from "../components/HowItWorksSection";

export default function WhyUsPage() {
  const { onBookService } = useOutletContext();

  return (
    <>
      <div className="px-5 pt-12 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="eyebrow">Why UrbanFix</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            People trust us with their homes. Here&rsquo;s why.
          </h1>
        </div>
      </div>
      <WhyUsSection onMeetPro={() => onBookService(null)} />
      <HowItWorksSection />
    </>
  );
}
