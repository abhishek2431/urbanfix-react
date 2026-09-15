import { MapPin } from "lucide-react";
import { reviews } from "../data/content";
import StarRating from "./StarRating";

export default function ReviewsSection() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Good words</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              The kind of help you tell a friend about.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
              Real homes, real fixes, and a support team that cares about the details.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="flex items-center justify-between">
                <StarRating />
                <span className="text-xs font-bold text-slate-400">{review.category}</span>
              </div>
              <p className="mt-5 text-[17px] font-semibold leading-7 tracking-[-0.02em] text-slate-800">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-3">
                <span className="review-avatar">{review.initial}</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-900">{review.author}</strong>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} strokeWidth={2} aria-hidden="true" /> <span>{review.city}</span> ·
                    Verified booking
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
