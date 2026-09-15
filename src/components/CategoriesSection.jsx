import { useNavigate, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/categories";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  const navigate = useNavigate();
  const onSelectCategory = (category) => {
    navigate(`/services?q=${encodeURIComponent(category.name)}`);
  };

  return (
    <section id="categories" className="scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Start here</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Whatever your home needs, we&rsquo;ve got a pro.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
              Browse the services people book most, with clear starting prices and a real person
              ready to help.
            </p>
          </div>
          <Link to="/services" className="hidden items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 md:flex">
            View all services
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} onSelect={onSelectCategory} />
          ))}
        </div>
      </div>
    </section>
  );
}
