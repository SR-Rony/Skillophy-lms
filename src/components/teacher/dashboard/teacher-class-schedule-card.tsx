import Image from "next/image";
import { TeacherDashboardEmptyState } from "@/components/teacher/dashboard/teacher-dashboard-empty-state";
import type { TeacherDashboardEmptyState as TeacherDashboardEmptyStateData } from "@/types/teacher-dashboard.types";
import { cn } from "@/utils";

interface TeacherClassScheduleCardProps {
  emptyState: TeacherDashboardEmptyStateData;
  className?: string;
}

export function TeacherClassScheduleCard({ emptyState, className }: TeacherClassScheduleCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[#fecaca] bg-[#fff1f2] shadow-[0_2px_10px_rgba(15,23,42,0.04)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-[radial-gradient(circle_at_70%_50%,rgba(254,202,202,0.55)_0%,rgba(255,241,242,0)_72%)]"
      />

      <TeacherDashboardEmptyState
        icon={
          <Image
            src="/images/clander.png"
            alt=""
            width={128}
            height={128}
            className="relative h-auto w-[104px] object-contain sm:w-[118px]"
          />
        }
        message={emptyState.message}
        className="relative py-10 sm:py-11"
      />
    </div>
  );
}
