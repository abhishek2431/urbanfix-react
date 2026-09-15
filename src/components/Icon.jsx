import {
  Snowflake,
  Droplets,
  Lightbulb,
  Sparkles,
  Refrigerator,
  Hammer,
  ShieldCheck,
  Award,
  Zap,
} from "lucide-react";

const ICONS = {
  Snowflake,
  Droplets,
  Lightbulb,
  Sparkles,
  Refrigerator,
  Hammer,
  ShieldCheck,
  Award,
  Zap,
};

/**
 * Renders a lucide icon by name, or the ₹ glyph for "rupee".
 * Used so category/trust-point data can stay plain JS objects.
 */
export default function Icon({ name, size = 17, className = "" }) {
  if (name === "rupee") {
    return (
      <span
        className={`inline-flex items-center justify-center text-current ${className}`}
        style={{ fontSize: size }}
      >
        ₹
      </span>
    );
  }

  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} className={className} strokeWidth={2} aria-hidden="true" />;
}
