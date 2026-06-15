import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { DashboardEmptyState } from "@/components/shared/dashboard-empty-state";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface ScheduleCardProps {
  className?: string;
}

export function ScheduleCard({ className }: ScheduleCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#fff5f5] px-5 py-8 sm:px-6 sm:py-10",
        className
      )}
    >
      <DashboardEmptyState
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
            <CalendarClock className="h-8 w-8 text-primary" strokeWidth={1.5} />
          </div>
        }
        title="There is no class schedule available at this moment for you."
        action={
          <Link
            href={ROUTES.student.courses}
            className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Explore Courses
          </Link>
        }
      />
    </div>
  );
}
