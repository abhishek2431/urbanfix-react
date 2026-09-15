import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: "booking",
    q: "How do I book a service?",
    a: "Pick a service, choose a time slot and share your address. A verified pro will confirm the visit and reach you on time.",
  },
  {
    id: "verified",
    q: "Are your technicians verified?",
    a: "Yes. Every UrbanFix pro is background-checked, skill-tested and trained before their first visit.",
  },
  {
    id: "satisfaction",
    q: "What if I'm not satisfied with the work?",
    a: "Tell us within 30 days and we'll send someone back to fix it. If it's still not right, we'll refund the visit.",
  },
  {
    id: "visit-fee",
    q: "Do you charge a visit fee?",
    a: "No inspection fee. You only pay for the service you book, after the work is completed.",
  },
  {
    id: "cities",
    q: "Which cities do you serve?",
    a: "We're live in Indore, Bhopal, Ujjain and Dewas, and expanding to more cities soon.",
  },
  {
    id: "payment",
    q: "How does payment work?",
    a: "No advance payment. Pay the pro directly after the service using cash, UPI or card.",
  },
];

/**
 * Accordion of common questions. Only one answer is open at a time.
 */
export default function FAQSection() {
  const [openId, setOpenId] = useState(FAQS[0].id);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="px-5 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[840px]">
        <div className="text-center">
          <p className="eyebrow inline-flex items-center gap-2">
            <HelpCircle size={14} strokeWidth={2.5} aria-hidden="true" />
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Everything you wanted to know before booking your first service.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  isOpen ? "border-sky-300 shadow-[0_10px_30px_rgba(14,116,144,0.08)]" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                >
                  <span className="text-base font-extrabold tracking-[-0.02em] text-slate-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2.5}
                    aria-hidden="true"
                    className={`shrink-0 text-sky-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-${faq.id}`}
                    className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-6 text-slate-500"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}