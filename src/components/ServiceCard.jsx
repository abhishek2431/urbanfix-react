import { Clock3, Star, Plus } from "lucide-react";

export default function ServiceCard({ service, onBook }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_38px_rgba(15,23,42,0.1)]">
      <div className="relative h-[180px] overflow-hidden bg-sky-50">
        <img
          alt={service.title}
          loading="lazy"
          decoding="async"
          src={service.image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/75 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur">
          {service.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-extrabold tracking-[-0.02em] text-slate-900">
            {service.title}
          </h3>
          <span className="mt-0.5 flex shrink-0 items-center gap-1 text-xs font-bold text-slate-700">
            <Star
              size={12}
              fill="currentColor"
              strokeWidth={2}
              className="text-amber-400"
              aria-hidden="true"
            />
            {service.rating}
          </span>
        </div>

        <span className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Clock3 size={13} strokeWidth={2} aria-hidden="true" />
          {service.duration}
        </span>

        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-slate-500">
          {service.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <strong className="block text-lg font-extrabold tracking-[-0.03em] text-slate-950">
              ₹{service.price}
            </strong>
            {service.originalPrice > service.price && (
              <span className="text-xs text-slate-400 line-through">
                ₹{service.originalPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => onBook(service)}
            className="inline-flex h-9 shrink-0 items-center gap-1 rounded-lg border border-sky-600 bg-sky-50 px-3 text-sm font-bold text-sky-700 transition-colors hover:bg-sky-600 hover:text-white"
          >
            Add
            <Plus size={14} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}