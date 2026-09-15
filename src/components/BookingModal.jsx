import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { cities } from "../data/content";

const EMPTY_FORM = { name: "", phone: "", address: "" };

/**
 * Frontend-only booking form. There is no backend yet, so submitting
 * just shows a confirmation state — wire this up to a real API later.
 */
export default function BookingModal({ service, selectedCity, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [city, setCity] = useState(selectedCity);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — this is where a real booking API call would go.
    setSubmitted(true);
  };

  return (
    <div
      className="booking-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Book a technician"
      onClick={onClose}
    >
      <div className="booking-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" aria-label="Close" onClick={onClose}>
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </button>

        {submitted ? (
          /* ─── SUCCESS SCREEN ─────────────────────────── */
          <div className="flex flex-col items-center gap-4 p-10 text-center">
            <CheckCircle2
              size={44}
              strokeWidth={1.6}
              className="text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                Request received!
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                A local UrbanFix pro in {city} will reach out to{" "}
                {form.phone || "your number"} shortly to confirm the visit
                {service ? ` for ${service.title}` : ""}.
              </p>
            </div>
            <button
              className="mt-2 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-bold text-white hover:bg-sky-700 transition-colors"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          /* ─── FORM SCREEN ───────────────────────────── */
          <div className="p-7 sm:p-8">
            {/* Header */}
            <p className="eyebrow">
              {service ? "Book a service" : "Request a technician"}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
              {service ? service.title : "Tell us what you need"}
            </h3>
            {service ? (
              <p className="mt-2 text-sm text-slate-500">
                Starting from{" "}
                <strong className="text-slate-900">₹{service.price}</strong>
                {" · "}
                {service.duration}
              </p>
            ) : (
              <p className="mt-2 text-sm text-slate-500">
                Share a few details and a verified pro will call you back.
              </p>
            )}

            {/* Divider */}
            <div className="my-6 h-px bg-slate-100" />

            {/* Form — 2 column grid on ≥640px */}
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="booking-field">
                  Full name
                  <input
                    required
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                  />
                </label>

                <label className="booking-field">
                  Phone number
                  <input
                    required
                    type="tel"
                    placeholder="e.g. 98765 43210"
                    value={form.phone}
                    onChange={update("phone")}
                    autoComplete="tel"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="booking-field">
                  Address / area
                  <input
                    required
                    placeholder="Flat / street / locality"
                    value={form.address}
                    onChange={update("address")}
                    autoComplete="street-address"
                  />
                </label>

                <label className="booking-field">
                  City
                  <select
                    className="booking-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="mt-3 h-12 rounded-xl bg-sky-600 text-sm font-bold text-white hover:bg-sky-700 transition-colors"
              >
                {service ? "Confirm booking" : "Send request"}
              </button>

              <p className="text-center text-xs text-slate-400">
                No payment needed now — you only pay after the work is done.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}