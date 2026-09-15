import { Link } from "react-router-dom";
import { Wrench, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { contact, cities } from "../data/content";

const SERVICE_LINKS = [
  { label: "AC service", to: "/services?q=AC" },
  { label: "Plumbing", to: "/services?q=Plumbing" },
  { label: "Deep cleaning", to: "/services?q=Cleaning" },
  { label: "Electrical", to: "/services?q=Electrician" },
];
const COMPANY_LINKS = [
  { label: "Why UrbanFix", to: "/why-us" },
  { label: "How it works", to: "/why-us" },
  { label: "Service areas", to: "/coverage" },
  { label: "Customer stories", to: "/coverage" },
];

export default function Footer({ onRequestTechnician }) {
  return (
    <footer className="bg-slate-950 px-5 pb-24 pt-14 text-white sm:pb-10 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="brand-mark brand-mark-dark">
                <Wrench size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              <strong className="text-lg tracking-[-0.04em]">UrbanFix</strong>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Local home repair, cleaning and maintenance — made simple for busy homes.
            </p>
            <div className="mt-5 flex gap-2">
              <a className="footer-contact-button" href={contact.phoneHref}>
                <Phone size={15} strokeWidth={2} aria-hidden="true" /> Call us
              </a>
              <a className="footer-contact-button" href={contact.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={15} strokeWidth={2} aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Services</h3>
            <div className="footer-links">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Company</h3>
            <div className="footer-links">
              {COMPANY_LINKS.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Need a hand?</h3>
            <p className="text-sm leading-6 text-slate-400">
              Tell us what&rsquo;s going on and we&rsquo;ll point you in the right direction.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-2.5 text-sm font-medium text-slate-950 hover:bg-sky-100 transition-colors"
              onClick={onRequestTechnician}
            >
              Request a technician <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row">
          <span>© 2025 UrbanFix Home Services</span>
          <span>Serving {cities.join(" · ")}</span>
        </div>
      </div>
    </footer>
  );
}
