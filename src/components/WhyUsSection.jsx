import { ArrowRight } from "lucide-react";
import { trustPoints } from "../data/content";
import Icon from "./Icon";

export default function WhyUsSection({ onMeetPro }) {
  return (
    <section id="why-us" className="scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Why UrbanFix</p>
            <h2 className="mt-3 max-w-lg text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              A better way to take care of your home.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-500">
              No guessing, no chasing, no awkward surprises. Just capable people, honest rates,
              and support that stays with you.
            </p>
            <button
              type="button"
              className="mt-7 inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-950 px-5 text-sm font-bold text-white hover:bg-sky-700 transition-colors"
              onClick={onMeetPro}
            >
              Meet your next pro <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div className="trust-card" key={point.id}>
                <span className="trust-card-icon">
                  <Icon name={point.icon} size={20} />
                </span>
                <div>
                  <h3 className="font-extrabold tracking-[-0.02em] text-slate-900">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
