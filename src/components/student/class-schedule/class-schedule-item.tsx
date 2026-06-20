import Link from "next/link";
import { Clock } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type { StudentClassScheduleItem } from "@/types/student-class-schedule.types";
import { cn } from "@/utils";

interface ClassScheduleItemProps {
  session: StudentClassScheduleItem;
  isLast?: boolean;
  className?: string;
}

export function ClassScheduleItem({ session, isLast = false, className }: ClassScheduleItemProps) {
  const joinButtonClassName = session.canJoin
    ? "bg-primary text-white hover:bg-primary/90"
    : "cursor-not-allowed bg-[#f3f4f6] text-[#9ca3af]";

  return (
    <article
      className={cn(
        "relative px-5 py-5 sm:px-6 sm:py-6",
        session.canJoin ? "bg-[#fff5f5]" : "bg-white",
        !isLast && "border-b border-[#e5e7eb]",
        className
      )}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-5 sm:gap-6">
          <div className="flex shrink-0 items-center gap-5 sm:gap-6">
            <div className="flex flex-col items-center px-1">
              <span className="text-xs font-semibold text-primary">{session.month}</span>
              <span className="mt-0.5 text-[32px] font-extrabold leading-none text-[#4a0e0e]">
                {session.day}
              </span>
            </div>
            <div className="h-14 w-px shrink-0 bg-[#f0d4d4]" aria-hidden />
          </div>

          <div className="min-w-0 space-y-1.5">
            <p className="text-[12px] font-medium text-[#9ca3af]">{session.topic}</p>
            <Heading as="h3" variant="dashboard-panel">
              {session.title}
            </Heading>
            <p className="flex items-center gap-1.5 text-[13px] text-[#9ca3af]">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {session.datetime}
            </p>
          </div>
        </div>

        {session.canJoin ? (
          <Link
            href={session.joinUrl}
            className={cn(
              "inline-flex w-full shrink-0 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition-colors lg:w-auto",
              joinButtonClassName
            )}
          >
            Join LIVE Class
          </Link>
        ) : (
          <span
            className={cn(
              "inline-flex w-full shrink-0 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold lg:w-auto",
              joinButtonClassName
            )}
          >
            Join LIVE Class
          </span>
        )}
      </div>
    </article>
  );
}
