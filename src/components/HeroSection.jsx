import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Search, ArrowRight, Star, Check, MapPin } from "lucide-react";
import { quickChips } from "../data/content";

export default function HeroSection() {
  const { selectedCity } = useOutletContext();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const goToServices = (q) => {
    const params = q ? `?q=${encodeURIComponent(q)}` : "";
    navigate(`/services${params}`);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    goToServices(query);
  };

  const handleChip = (chip) => {
    setQuery(chip);
    goToServices(chip);
  };

  return (
    <section className="hero-section">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="mb-5 inline-flex h-5 w-fit shrink-0 items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-sky-700">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
            Trusted home experts
          </span>
          <h1 className="max-w-[670px] text-5xl font-extrabold leading-[1.05] tracking-[-0.02em] text-slate-950 sm:text-6xl lg:text-[68px]">
            Good homes need <span className="text-sky-600">great help.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-600">
            From the leaking tap to the deep-cleaned sofa, verified local pros make home repairs
            feel easy.
          </p>

          <form className="mt-8 max-w-[610px]" onSubmit={submitSearch}>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.1)] focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
              <Search size={21} strokeWidth={2} className="ml-3 shrink-0 text-sky-600" aria-hidden="true" />
              <input
                placeholder="What needs fixing today?"
                aria-label="Search for a home service"
                className="h-12 w-full min-w-0 border-0 bg-transparent px-0 text-[15px] outline-none placeholder:text-slate-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-sky-600 px-4 text-sm font-bold text-white hover:bg-sky-700 flex items-center gap-1.5 transition-colors"
              >
                Find help <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-semibold text-slate-400">Popular:</span>
              {quickChips.map((chip) => (
                <button key={chip} type="button" className="quick-chip" onClick={() => handleChip(chip)}>
                  {chip}
                </button>
              ))}
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <Star size={16} strokeWidth={2} className="fill-amber-400 text-amber-400" aria-hidden="true" />
              4.9/5 from 25k+ homes
            </span>
            <span className="flex items-center gap-2">
              <Check size={17} strokeWidth={2} className="text-emerald-600" aria-hidden="true" />
              30-day work warranty
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-image-wrap">
            <img alt="UrbanFix technician ready to help at home" src="https://images.unsplash.com/photo-1649769069590-268b0b994462?auto=format&fit=crop&w=1100&q=85" />
            <div className="hero-image-shade" />
          </div>
          <div className="hero-float-card hero-float-card-top">
            <span className="status-dot"><span /></span>
            <div>
              <strong className="block text-xs text-slate-900">Technician nearby</strong>
              <span className="text-[10px] text-slate-500">Available in 15 mins</span>
            </div>
          </div>
          <div className="hero-float-card hero-float-card-bottom">
            <StarRow />
            <strong className="mt-1 block text-xs text-slate-900">Loved by local homes</strong>
            <span className="text-[10px] text-slate-500">Reliable. Clear. Human.</span>
          </div>
          <div className="hero-visual-label">
            <MapPin size={15} strokeWidth={2} aria-hidden="true" /> Serving{" "}
            <span>{selectedCity}</span> &amp; nearby
          </div>
        </div>
      </div>
    </section>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} fill="currentColor" strokeWidth={2} aria-hidden="true" />
      ))}
    </div>
  );
}
