import { useEffect, useRef } from "react";
import { X, MapPin } from "lucide-react";
import { cities } from "../data/content";

export default function CityPickerModal({ selectedCity, onSelectCity, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose?.();
  };

  const handleSelect = (city) => {
    onSelectCity(city);
    handleClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="city-picker-overlay"
      aria-label="Choose your city"
      onClose={handleClose}
    >
      <div className="city-picker-dialog">
        <button
          type="button"
          className="booking-close"
          aria-label="Close city picker"
          onClick={handleClose}
        >
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
                type="button"
                className={`city-picker-option ${selected ? "city-picker-option-selected" : ""}`}
                onClick={() => handleSelect(city)}
                aria-pressed={selected}
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
    </dialog>
  );
}