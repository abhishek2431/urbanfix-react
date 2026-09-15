import { tasks } from "../data/tasks";
import TaskCard from "./TaskCard";

export default function TasksSection({ onBookService }) {
  return (
    <div className="px-5 pt-12 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-slate-950">
          Explore Our Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(tasks).map(([category, categoryTasks]) => (
            <div key={category}>
              <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                {category}
              </h3>
              <div className="mt-4 space-y-4">
                {categoryTasks.map((task) => (
                  <TaskCard key={task.id} task={task} onBookService={onBookService} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}