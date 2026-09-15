import { Headphones, MessageCircle, Phone } from "lucide-react";
import { howItWorksSteps, contact } from "../data/content";

export default function HowItWorksSection() {
  return (
    <section className="overflow-hidden bg-slate-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-xl">
          <p className="eyebrow eyebrow-dark">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
            From “uh-oh” to “all sorted.”
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            We&rsquo;ve made booking help feel as simple as sending a message to someone you
            trust.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {howItWorksSteps.map((step, i) => (
            <div className="relative" key={step.number}>
              <span className="step-number">{step.number}</span>
              {i < howItWorksSteps.length - 1 && <span className="step-line" />}
              <h3 className="mt-5 text-xl font-extrabold tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <Headphones size={19} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <strong className="block text-sm">Need help choosing?</strong>
              <span className="text-xs text-slate-400">Our local support team is one call away.</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              className="flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-emerald-400 transition-colors"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} strokeWidth={2} aria-hidden="true" /> WhatsApp us
            </a>
            <a
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-white/10 transition-colors"
              href={contact.phoneHref}
            >
              <Phone size={16} strokeWidth={2} aria-hidden="true" /> Call{" "}
              <span>{contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
