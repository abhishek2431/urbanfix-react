import { Clock3, ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, onBook }) {
  return (
    <article className="service-card group">
      <div className="service-image">
        <img alt={service.title} loading="lazy" src={service.image} />
        <span className="service-category">{service.category.toUpperCase()}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-extrabold tracking-[-0.03em] text-slate-900">{service.title}</h3>
          <span className="mt-1 flex shrink-0 items-center gap-1 text-[11px] font-bold text-slate-400">
            <Clock3 size={13} strokeWidth={2} aria-hidden="true" /> {service.duration}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{service.description}</p>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
              Starting from
            </span>
            <strong className="text-xl font-extrabold tracking-[-0.04em] text-slate-950">
              ₹{service.price}
            </strong>
            <span className="ml-2 text-xs text-slate-400 line-through">₹{service.originalPrice}</span>
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-sky-50 px-2.5 h-7 text-[0.8rem] font-bold text-sky-700 hover:bg-sky-100 transition-colors"
            onClick={() => onBook(service)}
          >
            Book <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
