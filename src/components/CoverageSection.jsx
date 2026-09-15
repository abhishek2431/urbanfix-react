import { useMemo, useState } from "react";
import { MapPin, Check, Search, ArrowUpRight, Clock3, Zap } from "lucide-react";
import { cities, neighbourhoods } from "../data/content";

const PROS_ONLINE = 12;

export default function CoverageSection({ selectedCity, onSelectCity, onOpenCityPicker }) {
  const [neighbourhoodQuery, setNeighbourhoodQuery] = useState("");
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState(null);

  const filteredNeighbourhoods = useMemo(() => {
    if (!neighbourhoodQuery.trim()) return neighbourhoods;
    const q = neighbourhoodQuery.toLowerCase();
    return neighbourhoods.filter((n) => n.name.toLowerCase().includes(q));
  }, [neighbourhoodQuery]);

  return (
    <section id="coverage" className="scroll-mt-20 border-b border-slate-200 bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="eyebrow">Local by design</p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            Help that knows your neighbourhood.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
            We&rsquo;re starting close to home, with trusted technicians serving Indore, Bhopal,
            Ujjain and Dewas. More neighbourhoods are on the way.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {cities.map((city) => {
              const selected = city === selectedCity;
              return (
                <button
                  key={city}
                  className={`city-pill ${selected ? "city-pill-selected" : ""}`}
                  aria-pressed={selected}
                  onClick={() => onSelectCity(city)}
                >
                  <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                  {city}
                  {selected && <Check size={13} strokeWidth={2} aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          <button
            className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-sky-700 hover:text-sky-900"
            onClick={onOpenCityPicker}
          >
            Change city <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </button>

          <div className="neighbourhood-finder">
            <div className="flex items-center justify-between gap-3">
              <div>
                <strong className="block text-sm font-extrabold text-slate-900">
                  Choose your neighbourhood
                </strong>
                <span className="mt-1 block text-xs text-slate-500">
                  See local availability around <span>{selectedCity}</span>.
                </span>
              </div>
              <MapPin size={18} strokeWidth={2} className="text-sky-600" aria-hidden="true" />
            </div>
            <div className="neighbourhood-search">
              <Search size={16} strokeWidth={2} aria-hidden="true" />
              <input
                placeholder="Search locality"
                aria-label="Search neighbourhood"
                value={neighbourhoodQuery}
                onChange={(e) => setNeighbourhoodQuery(e.target.value)}
              />
            </div>
            <div className="neighbourhood-chips">
              {filteredNeighbourhoods.map((n) => (
                <button
                  key={n.name}
                  className={`neighbourhood-chip ${
                    selectedNeighbourhood === n.name ? "neighbourhood-chip-selected" : ""
                  }`}
                  aria-pressed={selectedNeighbourhood === n.name}
                  onClick={() => setSelectedNeighbourhood(n.name)}
                >
                  {n.name}
                </button>
              ))}
            </div>
          </div>

          <div className="availability-card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Area availability</p>
                <strong className="mt-2 block text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                  <span>{PROS_ONLINE}</span> pros online in <span>{selectedCity}</span>
                </strong>
              </div>
              <span className="availability-live">
                <span /> Live now
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="availability-stat">
                <Clock3 size={15} strokeWidth={2} aria-hidden="true" />
                <span>
                  <strong className="block text-sm text-slate-900">8 AM – 9 PM</strong>
                  <small>Service hours</small>
                </span>
              </div>
              <div className="availability-stat">
                <Zap size={15} strokeWidth={2} aria-hidden="true" />
                <span>
                  <strong className="block text-sm text-slate-900">30–45 min average</strong>
                  <small>Typical arrival</small>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="coverage-map">
          <div className="map-grid" />
          <svg
            className="coverage-map-svg"
            viewBox="0 0 100 100"
            role="img"
            aria-label={`Neighbourhood coverage map for ${selectedCity}`}
          >
            <circle className="map-radius map-radius-wide" cx="50" cy="49" r="39" />
            <circle className="map-radius map-radius-mid" cx="50" cy="49" r="27" />
            <circle className="map-radius map-radius-near" cx="50" cy="49" r="15" />
            {neighbourhoods.map((n) => (
              <g key={n.name}>
                <circle
                  className="map-neighbourhood-dot"
                  cx={n.x}
                  cy={n.y}
                  r={selectedNeighbourhood === n.name ? 3.4 : 2.4}
                />
                <text className="map-neighbourhood-label" x={n.labelX} y={n.labelY}>
                  {n.name}
                </text>
              </g>
            ))}
          </svg>
          <div className="map-pin map-pin-one">
            <MapPin size={18} strokeWidth={2} fill="currentColor" aria-hidden="true" />
          </div>
          <div className="map-pin map-pin-two">
            <MapPin size={18} strokeWidth={2} fill="currentColor" aria-hidden="true" />
          </div>
          <div className="map-pin map-pin-three">
            <MapPin size={18} strokeWidth={2} fill="currentColor" aria-hidden="true" />
          </div>
          <div className="map-label">
            <span className="status-dot"><span /></span>
            <span>
              <strong className="block text-sm text-slate-900">
                <span>{PROS_ONLINE}</span> pros online now
              </strong>
              <small className="text-xs text-slate-500">
                Across <span>{selectedCity}</span> and nearby
              </small>
            </span>
          </div>
          <span className="map-radius-legend">Travel radius · up to 8 km</span>
        </div>
      </div>
    </section>
  );
}
