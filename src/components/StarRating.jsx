import { Star } from "lucide-react";

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];
const MAX_STARS = STAR_KEYS.length;

export default function StarRating({ count = 5, size = 14, className = "" }) {
  const safeCount = Math.min(MAX_STARS, Math.max(0, Math.floor(Number(count) || 0)));
  const keys = STAR_KEYS.slice(0, safeCount);

  return (
    <div
      className={`flex gap-0.5 text-amber-400 ${className}`}
      role="img"
      aria-label={`${safeCount} out of ${MAX_STARS} stars`}
    >
      {keys.map((key) => (
        <Star
          key={key}
          size={size}
          fill="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}