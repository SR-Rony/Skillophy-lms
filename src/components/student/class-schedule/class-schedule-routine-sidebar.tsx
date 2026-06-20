import { Clock } from "lucide-react";
import type { StudentClassScheduleRoutineGroup } from "@/types/student-class-schedule.types";
import { cn } from "@/utils";

interface ClassScheduleRoutineSidebarProps {
  routine: StudentClassScheduleRoutineGroup[];
  className?: string;
}

export function ClassScheduleRoutineSidebar({
  routine,
  className,
}: ClassScheduleRoutineSidebarProps) {
  return (
    <aside
      className={cn(
        "w-full shrink-0 self-start rounded-2xl bg-[#f8f8f8] px-6 py-6 lg:w-fit lg:min-w-[248px]",
        className
      )}
    >
      <h2 className="text-[20px] font-bold leading-tight tracking-[-0.01em] text-[#1a1a1a]">
        Class Routine
      </h2>

      <div className="mt-6">
        {routine.map((group, index) => (
          <div
            key={group.title}
            className={cn(index > 0 && "mt-5 border-t border-[#e8e8e8] pt-5")}
          >
            <p className="text-[14px] font-bold leading-snug text-[#991b1b]">{group.title}</p>
            <ul className="mt-3 space-y-2.5">
              {group.entries.map((entry) => (
                <li
                  key={entry.datetime}
                  className="flex items-center gap-2 text-[13px] font-medium leading-snug text-[#444444]"
                >
                  <Clock
                    className="h-[15px] w-[15px] shrink-0 text-[#444444]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  {entry.datetime}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
