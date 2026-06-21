import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface TeacherCourseScheduleEmptyCardProps {
  className?: string;
}

export function TeacherCourseScheduleEmptyCard({ className }: TeacherCourseScheduleEmptyCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#fff5f5] px-5 py-7 sm:px-6 sm:py-8",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center px-2 py-2 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
          <CalendarClock className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
        <p className="max-w-[260px] text-[13px] leading-relaxed text-[#9ca3af] sm:text-sm">
          There is no class schedule available at this moment for you.
        </p>
        <Link
          href={ROUTES.courses}
          className="mt-4 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
}
