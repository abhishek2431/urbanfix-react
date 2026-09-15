import { X, MapPin } from "lucide-react";
import { cities } from "../data/content";

export default function CityPickerModal({ selectedCity, onSelectCity, onClose }) {
  return (
    <div
      className="city-picker-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Choose your city"
      onClick={onClose}
    >
      <div className="city-picker-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" aria-label="Close" onClick={onClose}>
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </button>
        <p className="eyebrow">Choose your city</p>
        <h3 className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
          Where should we send help?
        </h3>
        <div className="mt-5 grid gap-2.5">
          {cities.map((city) => {
            const selected = city === selectedCity;
            return (
              <button
                key={city}
                className={`city-picker-option ${selected ? "city-picker-option-selected" : ""}`}
                onClick={() => {
                  onSelectCity(city);
                  onClose();
                }}
              >
                <span className="city-picker-icon">
                  <MapPin size={17} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-slate-900">{city}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
