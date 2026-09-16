import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Wrench,
  MapPin,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Search,
  ShoppingCart,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Why us", to: "/why-us" },
  { label: "Coverage", to: "/coverage" },
];

// UC-style cycling placeholder phrases
const PLACEHOLDER_PHRASES = [
  "Search for AC service, plumber…",
  "Search for sofa cleaning, deep cleaning…",
  "Search for electrician, tap repair…",
  "Search for appliance repair, carpentry…",
  "Search for bathroom cleaning, kitchen…",
];

/**
 * Cycles through phrases every `interval` ms.
 */
function useCyclingPlaceholder(phrases, interval = 3000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return phrases[index];
}

export default function Navbar({ selectedCity, onOpenCityPicker, onBookAPro }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const animatedPlaceholder = useCyclingPlaceholder(PLACEHOLDER_PHRASES);

  const goBook = () => {
    setMobileOpen(false);
    onBookAPro();
  };

  const submitSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    setMobileOpen(false);
    navigate(q ? `/services?q=${encodeURIComponent(q)}` : "/services");
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto grid h-[72px] max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-3 px-5 lg:px-8">

        {/* ─── LEFT: Logo ─── */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <span className="brand-mark">
            <Wrench size={20} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="hidden text-left sm:block">
            <strong className="block text-[17px] leading-none tracking-[-0.02em] text-slate-950">
              UrbanFix
            </strong>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-sky-600">
              Trusted local pros
            </span>
          </span>
        </Link>

        {/* ─── CENTER: Location + Search ─── */}
        <div className="hidden items-center justify-center gap-3 md:flex">
          <button
            type="button"
            className="location-control shrink-0"
            aria-haspopup="dialog"
            onClick={onOpenCityPicker}
          >
            <MapPin size={15} strokeWidth={2} aria-hidden="true" />
            <span className="hidden lg:inline">
              Serving <strong>{selectedCity}</strong>
            </span>
            <span className="lg:hidden">{selectedCity}</span>
            <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
          </button>

          <form
            className="w-full max-w-[480px]"
            onSubmit={submitSearch}
            role="search"
          >
            <div className="flex h-11 w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50/70 px-4 transition-colors focus-within:border-sky-400 focus-within:bg-white">
              <Search
                size={17}
                strokeWidth={2}
                className="shrink-0 text-slate-400"
                aria-hidden="true"
              />
              <div className="animated-placeholder-wrap w-full min-w-0">
                {!searchQuery && (
                  <span
                    key={animatedPlaceholder}
                    className="animated-placeholder-text"
                  >
                    {animatedPlaceholder}
                  </span>
                )}
                <input
                  type="search"
                  aria-label="Search services"
                  className="relative h-full w-full min-w-0 border-0 bg-transparent px-0 text-sm text-slate-900 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>

        {/* ─── RIGHT: Cart + Book ─── */}
        <div className="hidden items-center gap-2 justify-self-end md:flex">
          <button
            type="button"
            className="icon-action relative"
            aria-label="View cart"
            onClick={() => alert("Cart coming soon!")}
          >
            <ShoppingCart size={17} strokeWidth={2} aria-hidden="true" />
            <span className="absolute -right-0.5 -top-0.5 hidden h-4 min-w-4 items-center justify-center rounded-full bg-sky-600 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-slate-950 px-5 h-10 text-sm font-bold text-white shadow-lg shadow-slate-900/10 hover:bg-sky-700 transition-colors"
            onClick={goBook}
          >
            Book a pro
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        {/* ─── MOBILE: Location + Hamburger ─── */}
        <div className="flex items-center gap-2 justify-self-end md:hidden">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
            aria-haspopup="dialog"
            onClick={onOpenCityPicker}
          >
            <MapPin size={13} strokeWidth={2.5} aria-hidden="true" />
            {selectedCity}
          </button>
          <button
            type="button"
            className="rounded-xl p-2 text-slate-700"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* ─── MOBILE DRAWER ─── */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <form onSubmit={submitSearch} role="search">
            <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 focus-within:border-sky-400 focus-within:bg-white">
              <Search
                size={17}
                strokeWidth={2}
                className="shrink-0 text-slate-400"
                aria-hidden="true"
              />
              <div className="animated-placeholder-wrap w-full min-w-0">
                {!searchQuery && (
                  <span
                    key={animatedPlaceholder}
                    className="animated-placeholder-text"
                  >
                    {animatedPlaceholder}
                  </span>
                )}
                <input
                  type="search"
                  aria-label="Search services"
                  className="relative h-full w-full min-w-0 border-0 bg-transparent px-0 text-sm text-slate-900 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </form>

          <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-bold hover:bg-slate-50 ${isActive ? "text-sky-700" : "text-slate-700"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="mt-3 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 text-sm font-bold text-slate-700"
            onClick={() => {
              setMobileOpen(false);
              alert("Cart coming soon!");
            }}
          >
            <ShoppingCart size={15} strokeWidth={2.5} aria-hidden="true" /> Cart
          </button>

          <button
            type="button"
            className="mt-2 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-slate-950 text-sm font-bold text-white hover:bg-sky-700 transition-colors"
            onClick={goBook}
          >
            Book a pro <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      )}
    </header>
  );
}