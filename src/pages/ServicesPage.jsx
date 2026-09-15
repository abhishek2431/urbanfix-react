import { useOutletContext } from "react-router-dom";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedServicesSection from "../components/FeaturedServicesSection";

export default function ServicesPage() {
  const { onBookService } = useOutletContext();

  return (
    <>
      <div className="px-5 pt-12 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="eyebrow">All services</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Everything your home needs, in one place.
          </h1>
        </div>
      </div>
      <CategoriesSection />
      <FeaturedServicesSection onBookService={onBookService} />
    </>
  );
}
