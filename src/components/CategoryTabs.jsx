import { categories } from "../data/categories";

export default function CategoryTabs({ activeId, onChange }) {
  return (
    <div className="sticky top-[72px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="flex flex-wrap gap-2 py-4">
          <TabButton
            label="All"
            isActive={activeId === null}
            onClick={() => onChange(null)}
          />
          {categories.map((cat) => (
            <TabButton
              key={cat.id}
              label={cat.name}
              isActive={activeId === cat.id}
              onClick={() => onChange(cat.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-bold transition-colors sm:text-[13px] sm:px-3.5 sm:py-2 ${
        isActive
          ? "border-sky-600 bg-sky-600 text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700"
      }`}
    >
      {label}
    </button>
  );
}