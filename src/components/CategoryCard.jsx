import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/services?category=${category.id}`}
      className="category-card group block text-left"
    >
      <div className="category-image">
        <img alt={`${category.name} service`} loading="lazy" src={category.image} />
        <span className="category-icon">
          <Icon name={category.icon} size={17} />
        </span>
      </div>
      <div className="p-4">
        <strong className="block text-[15px] font-extrabold tracking-[-0.02em] text-slate-900">
          {category.name}
        </strong>
        <span className="mt-1 block text-xs leading-5 text-slate-500">
          {category.description}
        </span>
        <span className="mt-3 block text-xs font-extrabold text-sky-700">
          From <span>₹{category.priceFrom}</span>
        </span>
        <div className="mt-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:text-sky-700">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}