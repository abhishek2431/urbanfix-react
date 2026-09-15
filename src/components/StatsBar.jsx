import { stats } from "../data/content";

export default function StatsBar() {
  return (
    <section className="border-y border-slate-200/80 bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-slate-200/80 px-5 py-5 sm:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0 sm:px-6">
            <strong className="block text-xl font-extrabold tracking-[-0.04em] text-slate-950">
              {stat.value}
            </strong>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.13em] text-slate-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
