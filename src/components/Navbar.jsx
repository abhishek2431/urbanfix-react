import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Wrench, MapPin, ChevronDown, Phone, MessageCircle, ArrowRight, Menu, X } from "lucide-react";
import { contact } from "../data/content";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Why us", to: "/why-us" },
  { label: "Coverage", to: "/coverage" },
];

const linkClass = ({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`;

export default function Navbar({ selectedCity, onOpenCityPicker, onBookAPro }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const goBook = () => {
    setMobileOpen(false);
    onBookAPro();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark">
            <Wrench size={20} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="text-left">
            <strong className="block text-[17px] leading-none tracking-[-0.04em] text-slate-950">
              UrbanFix
            </strong>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-sky-600">
              Trusted local pros
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button className="location-control" aria-haspopup="dialog" onClick={onOpenCityPicker}>
            <MapPin size={15} strokeWidth={2} aria-hidden="true" />
            <span className="hidden xl:inline">
              Serving <strong>{selectedCity}</strong>
            </span>
            <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
          </button>
          <a className="icon-action" href={contact.phoneHref} aria-label={`Call UrbanFix at ${contact.phoneDisplay}`}>
            <Phone size={16} strokeWidth={2} aria-hidden="true" />
            <span className="hidden xl:inline">Call us</span>
          </a>
          <a
            className="icon-action whatsapp-action"
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp UrbanFix"
          >
            <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-slate-950 px-5 h-8 text-sm font-bold text-white shadow-lg shadow-slate-900/10 hover:bg-sky-700 transition-colors"
            onClick={goBook}
          >
            Book a pro <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <button
          className="rounded-xl p-2 text-slate-700 sm:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 sm:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2.5 text-left text-sm font-bold hover:bg-slate-50 ${
                    isActive ? "text-sky-700" : "text-slate-700"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              className="rounded-lg px-2 py-2.5 text-left text-sm font-bold text-slate-700 hover:bg-slate-50"
              onClick={() => {
                setMobileOpen(false);
                onOpenCityPicker();
              }}
            >
              Serving {selectedCity} — change city
            </button>
          </nav>
          <button
            type="button"
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white hover:bg-sky-700 transition-colors"
            onClick={goBook}
          >
            Book a pro <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      )}
    </header>
  );
}
