import { useOutletContext } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { contact } from "../data/content";

/**
 * End-of-page call to action. Big, unmissable banner with three ways to reach us.
 */
export default function FinalCTA() {
  const { onBookService, selectedCity } = useOutletContext();

  return (
    <section className="px-5 pb-16 pt-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-950 px-6 py-12 text-white sm:px-12 sm:py-16">
          {/* soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow eyebrow-dark inline-flex items-center gap-2">
                <Sparkles size={14} strokeWidth={2.5} aria-hidden="true" />
                Ready when you are
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                Ready to fix it? <br className="hidden sm:block" />
                We&rsquo;re one tap away.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Book a verified pro in {selectedCity} in under 60 seconds. No advance payment,
                no surprises &mdash; just a job done properly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-1.5 rounded-full bg-sky-500 px-6 text-sm font-bold text-white hover:bg-sky-400 transition-colors"
                  onClick={() => onBookService(null)}
                >
                  Book a service <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </button>
                <a
                  className="inline-flex h-12 items-center gap-1.5 rounded-full border border-white/15 px-6 text-sm font-bold text-white hover:border-sky-400/60 hover:text-sky-300 transition-colors"
                  href={contact.phoneHref}
                >
                  <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
                <a
                  className="inline-flex h-12 items-center gap-1.5 rounded-full border border-white/15 px-6 text-sm font-bold text-white hover:border-emerald-400/60 hover:text-emerald-300 transition-colors"
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              <Stat value="4.9/5" label="Average rating" />
              <Stat value="25k+" label="Homes helped" />
              <Stat value="30 min" label="Fastest arrival" />
              <Stat value="30-day" label="Work warranty" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <strong className="block text-xl font-extrabold tracking-[-0.03em] text-white sm:text-2xl">
        {value}
      </strong>
      <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </span>
    </div>
  );
}