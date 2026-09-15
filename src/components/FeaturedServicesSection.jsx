import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function FeaturedServicesSection({ onBookService }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const filtered = useMemo(() => {
    if (!searchQuery?.trim()) return services;
    const q = searchQuery.toLowerCase();
    const matches = services.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
    );
    // Fall back to the full list if nothing matches, so the section never goes empty.
    return matches.length ? matches : services;
  }, [searchQuery]);

  return (
    <section id="featured-services" className="scroll-mt-20 bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Popular near you</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Small fixes. Big relief.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
              Straightforward services for the moments that interrupt your day. Book in a few
              taps, or call for a recommendation.
            </p>
          </div>
          <span className="hidden items-center gap-2 text-sm font-bold text-sky-700 md:flex">
            Transparent rates
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>

        {searchQuery && (
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-600">
            Showing results for <span className="text-slate-900">&ldquo;{searchQuery}&rdquo;</span>
            <button
              type="button"
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 transition-colors"
              onClick={() => setSearchParams({})}
            >
              Clear
            </button>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} onBook={onBookService} />
          ))}
        </div>
      </div>
    </section>
  );
}
