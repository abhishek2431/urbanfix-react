import { Phone, MessageCircle, Wrench } from "lucide-react";
import { contact } from "../data/content";

export default function MobileContactBar({ onBookAPro }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-slate-200 bg-white/95 p-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:hidden">
      <a className="mobile-contact-link" href={contact.phoneHref}>
        <Phone size={17} strokeWidth={2} aria-hidden="true" /> Call now
      </a>
      <a
        className="mobile-contact-link mobile-contact-whatsapp"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={17} strokeWidth={2} aria-hidden="true" /> WhatsApp
      </a>
      <button className="mobile-contact-link mobile-contact-book" onClick={() => onBookAPro()}>
        <Wrench size={17} strokeWidth={2} aria-hidden="true" /> Book pro
      </button>
    </div>
  );
}
