import { Link, NavLink } from "react-router-dom";
import { Wrench, ChevronDown, Search, UserCircle } from "lucide-react";
import { useState } from "react";
import CityPickerModal from "./CityPickerModal";

export default function Header({ selectedCity, onOpenBookingModal }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCityPickerOpen, setIsCityPickerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:px-8 md:py-5">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="brand-mark">
            <Wrench size={20} strokeWidth={2} aria-hidden="true" />
          </span>
          <strong className="text-lg tracking-[-0.04em]">UrbanFix</strong>
        </Link>

        <nav className={`fixed inset-0 z-50 flex flex-col bg-white px-5 pt-24 pb-12 transition-transform duration-300 md:static md:z-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0 ${isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-base font-bold text-slate-950 hover:text-sky-600 ${isActive
                ? "text-sky-600"
                : "text-slate-950"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block text-base font-bold text-slate-950 hover:text-sky-600 ${isActive
                ? "text-sky-600"
                : "text-slate-950"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `block text-base font-bold text-slate-950 hover:text-sky-600 ${isActive
                ? "text-sky-600"
                : "text-slate-950"
              }`
            }
          >
            Why Us
          </NavLink>
          <NavLink
            to="/coverage"
            className={({ isActive }) =>
              `block text-base font-bold text-slate-950 hover:text-sky-600 ${isActive
                ? "text-sky-600"
                : "text-slate-950"
              }`
            }
          >
            Coverage
          </NavLink>
          <button
            type="button"
            className="mt-6 flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-bold text-white hover:bg-sky-700 transition-colors md:mt-0"
            onClick={onOpenBookingModal}
          >
            Book a Service
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-600 hover:bg-sky-200 transition-colors"
              onClick={() => setIsCityPickerOpen(!isCityPickerOpen)}
            >
              {selectedCity} <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
            </button>
            {isCityPickerOpen && (
              <CityPickerModal
                onSelectCity={(city) => {
                  setIsCityPickerOpen(false);
                }}
              />
            )}
          </div>
          <button
            type="button"
            className="rounded-full bg-sky-100 p-2 text-sky-600 hover:bg-sky-200 transition-colors"
          >
            <Search size={18} strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rounded-full bg-sky-100 p-2 text-sky-600 hover:bg-sky-200 transition-colors"
          >
            <UserCircle size={18} strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg
              className={`h-6 w-6 text-slate-950 transition-transform ${isNavOpen ? "rotate-90" : ""
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}