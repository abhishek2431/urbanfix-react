import { useOutletContext } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

/**
 * Homepage section that highlights the most-booked services.
 * Reuses the existing ServiceCard so the booking modal wiring stays in one place.
 */
export default function PopularServicesSection() {
  const { onBookService, selectedCity } = useOutletContext();
  const popular = services.slice(0, 4);

  return (
    <section className="px-5 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Flame size={14} strokeWidth={2.5} aria-hidden="true" />
              Most booked
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] leading-tight text-slate-950 sm:text-3xl">
              Popular services in {selectedCity}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Hand-picked services that local homes book again and again.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700"
          >
            View all services <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((service) => (
            <ServiceCard key={service.id} service={service} onBook={onBookService} />
          ))}
        </div>
      </div>
    </section>
  );
}