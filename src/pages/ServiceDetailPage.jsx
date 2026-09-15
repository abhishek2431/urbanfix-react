import { useParams } from "react-router-dom";
import { tasks } from "../data/tasks";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = Object.values(tasks).flatMap(category => category).find(task => task.id === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="px-5 pt-12 pb-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 md:grid-cols-[1fr_minmax(300px,500px)]">
          <div>
            <img src={service.image} alt={service.title} className="rounded-xl" />
          </div>
          <div>
            <p className="eyebrow">{service.category}</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] leading-tight text-slate-950 sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500">
              Starting from <strong className="text-slate-900">₹{service.price}</strong> · {service.duration}
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">What's Included</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-500">
                  <li>Professional service</li>
                  <li>All necessary tools and materials</li>
                  <li>Thorough cleanup</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">What's Not Included</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-500">
                  <li>Replacement parts (if needed)</li>
                  <li>Disposal of old/damaged items</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">Service Process</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-500">
                  <li>Book the service</li>
                  <li>Our pro will contact you to confirm the visit</li>
                  <li>Service is completed, you pay after</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">FAQs</h3>
                <ul className="mt-3 space-y-3 text-sm text-slate-500">
                  <li>
                    <strong className="text-slate-950">How long does the service take?</strong>
                    <p className="mt-1">{service.duration}</p>
                  </li>
                  <li>
                    <strong className="text-slate-950">Do I need to be present during the service?</strong>
                    <p className="mt-1">Yes, we recommend you or an adult be present during the service.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <button
                className="h-12 w-full rounded-xl bg-sky-600 text-sm font-bold text-white hover:bg-sky-700 transition-colors"
                onClick={() => onBookService(service)}
              >
                Book Now
              </button>
            </div>
            <div className="mt-4 sm:hidden">
              <button
                className="h-12 w-full rounded-xl bg-sky-600 text-sm font-bold text-white hover:bg-sky-700 transition-colors"
                onClick={() => onBookService(service)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}