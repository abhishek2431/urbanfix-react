import { ArrowRight } from "lucide-react";

export default function TaskCard({ task, onBookService }) {
  return (
    <div className="task-card group">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-extrabold tracking-[-0.03em] text-slate-950">
          {task.title}
        </h4>
        <button
          className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700"
          onClick={() => onBookService(task)}
        >
          Book <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {task.duration}
        </p>
        <p className="text-sm font-extrabold text-slate-950">
          ₹{task.price}
        </p>
      </div>
    </div>
  );
}