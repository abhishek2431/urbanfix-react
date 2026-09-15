import { Check } from "lucide-react";

export default function CityNotice({ city }) {
  return (
    <div className="city-notice" role="status">
      <span className="city-notice-check">
        <Check size={13} strokeWidth={2.5} aria-hidden="true" />
      </span>
      Now showing pros in {city}
    </div>
  );
}
