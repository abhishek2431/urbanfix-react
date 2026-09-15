import { ShieldCheck } from "lucide-react";
import { trustPoints } from "../data/content";
import Icon from "./Icon";

/**
 * Trust badges row — verified pros, transparent pricing, warranty, support.
 * Uses the shared Icon component so data stays as plain JS objects.
 */
export default function TrustSection() {
  return (
    <section className="bg-slate-50 px-5 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2">
            <ShieldCheck size={14} strokeWidth={2.5} aria-hidden="true" />
            Trusted by local homes
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] leading-tight text-slate-950 sm:text-3xl">
            Why homes trust UrbanFix
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Every visit is backed by verified pros, clear pricing and a workmanship guarantee.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <article key={point.id} className="trust-card">
              <span className="trust-card-icon">
                <Icon name={point.icon} size={20} />
              </span>
              <div>
                <h3 className="text-base font-extrabold tracking-[-0.02em] text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">{point.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}