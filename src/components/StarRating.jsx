import { Star } from "lucide-react";

export default function StarRating({ count = 5, size = 14, className = "" }) {
  return (
    <div className={`flex gap-0.5 text-amber-400 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={2} aria-hidden="true" />
      ))}
    </div>
  );
}
