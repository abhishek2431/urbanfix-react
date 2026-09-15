import { useState, useMemo } from "react";
import { useSearchParams, useOutletContext } from "react-router-dom";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import CategoryTabs from "../components/CategoryTabs";

export default function ServicesPage() {
  const { onBookService } = useOutletContext();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const [activeCategory, setActiveCategory] = useState(null);
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let list = [...services];
    if (activeCategory) list = list.filter((s) => s.categoryId === activeCategory);
    if (q) {
      const needle = q.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(needle) ||
          s.category.toLowerCase().includes(needle) ||
          s.description.toLowerCase().includes(needle)
      );
    }
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [activeCategory, q, sort]);

  return (
    <>
      <div className="border-b border-slate-100 bg-gradient-to-b from-sky-50/50 to-white px-5 pt-12 pb-8 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="eyebrow">All services</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.02em] leading-tight text-slate-950 sm:text-4xl">
            Explore our services
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Book a verified pro for repairs, cleaning and maintenance — clear prices, no surprises.
          </p>
          {q && (
            <p className="mt-4 text-sm font-semibold text-sky-700">
              Showing results for <strong>&ldquo;{q}&rdquo;</strong>
            </p>
          )}
        </div>
      </div>

      <CategoryTabs activeId={activeCategory} onChange={setActiveCategory} />

      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 pt-6 lg:px-8">
        <p className="text-sm text-slate-500">
          <strong className="text-slate-900">{filtered.length}</strong> service
          {filtered.length !== 1 && "s"} available
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
            Sort
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-9 rounded-lg border border-slate-200 bg-white px-2 text-sm font-semibold text-slate-700 outline-none focus:border-sky-400"
          >
            <option value="popular">Most popular</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 py-8 lg:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-base font-bold text-slate-900">No services found</p>
            <p className="mt-1 text-sm text-slate-500">
              Try a different category or search term.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} onBook={onBookService} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}