import { useMemo, useState } from "react";
import { MapPin, Check } from "lucide-react";
import { localProof, projectFilters } from "../data/content";
import StarRating from "./StarRating";

export default function LocalProofSection({ selectedCity }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") return localProof.projectPhotos;
    return localProof.projectPhotos.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="border-b border-slate-200 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Local proof</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Good work, close to <span>{selectedCity}</span>.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
              A recent <span>{localProof.featuredReview.category.toLowerCase()}</span> visit and a
              few projects from the local UrbanFix crew.
            </p>
          </div>
          <span className="city-proof-badge">
            <MapPin size={14} strokeWidth={2} aria-hidden="true" /> <span>{selectedCity}</span> ·
            Verified bookings
          </span>
        </div>

        <div className="project-filter-bar">
          <span className="text-xs font-extrabold text-slate-500">Filter project proof</span>
          <div className="project-filter-options">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                className={`project-filter-button ${
                  activeFilter === filter ? "project-filter-button-selected" : ""
                }`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="local-review-card">
            <div className="local-review-photo">
              <img alt={`${localProof.featuredReview.category} project in ${selectedCity}`} src={localProof.featuredReview.image} />
              <span className="photo-label">
                Recent <span>{localProof.featuredReview.category.toLowerCase()}</span>
              </span>
            </div>
            <div className="p-6">
              <StarRating />
              <p className="mt-4 text-lg font-semibold leading-7 tracking-[-0.02em] text-slate-800">
                &ldquo;{localProof.featuredReview.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="review-avatar">{localProof.featuredReview.author[0]}</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-900">
                    {localProof.featuredReview.author}
                  </strong>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Check size={12} strokeWidth={2} className="text-emerald-600" aria-hidden="true" />
                    Verified <span>{localProof.featuredReview.category}</span> booking
                  </span>
                </div>
              </div>
            </div>
          </article>

          <div className="local-project-grid">
            {filteredPhotos.map((photo, i) => (
              <figure key={photo.id} className={`local-project-photo local-project-photo-${i + 1}`}>
                <img alt={`${selectedCity} ${photo.category} project`} loading="lazy" src={photo.image} />
                <figcaption>
                  <span>{selectedCity}</span> · <span>{photo.category}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
