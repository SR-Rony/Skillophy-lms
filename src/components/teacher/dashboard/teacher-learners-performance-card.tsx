import Image from "next/image";
import { TeacherCourseFilter } from "@/components/teacher/dashboard/teacher-course-filter";
import { TeacherDashboardEmptyState } from "@/components/teacher/dashboard/teacher-dashboard-empty-state";
import { TeacherDashboardPanel } from "@/components/teacher/dashboard/teacher-dashboard-panel";
import { TeacherEmptyIllustration } from "@/components/teacher/shared/teacher-empty-illustration";
import type {
  TeacherDashboardCourseFilter,
  TeacherDashboardEmptyState as TeacherDashboardEmptyStateData,
  TeacherLearnerPerformanceEntry,
} from "@/types/teacher-dashboard.types";
import { cn } from "@/utils";

const rankStyles: Record<number, string> = {
  1: "bg-[#fff0f0]",
  2: "bg-[#eff6ff]",
  3: "bg-[#f5f3ff]",
};

const medalStyles: Record<number, string> = {
  1: "bg-[#fbbf24] text-white",
  2: "bg-[#94a3b8] text-white",
  3: "bg-[#d97706] text-white",
};

function TeacherLearnerPerformanceRow({ entry }: { entry: TeacherLearnerPerformanceEntry }) {
  const rowBg = rankStyles[entry.rank] ?? "bg-white";
  const medalBg = medalStyles[entry.rank];
  const scoreLabel = entry.scoreLabel ?? `${entry.score.toFixed(1)}%`;

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-3 sm:gap-3.5 sm:px-4",
        rowBg
      )}
    >
      <span className="w-5 shrink-0 text-[13px] font-bold text-[#111827] sm:text-[14px]">
        {entry.rank}
      </span>

      <div className="relative shrink-0">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm sm:h-10 sm:w-10">
          <Image
            src={entry.avatar}
            alt={entry.name}
            fill
            unoptimized
            className="object-cover"
            sizes="40px"
          />
        </div>
        {medalBg && (
          <span
            className={cn(
              "absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[10px] font-black",
              medalBg
            )}
          >
            {entry.rank}
          </span>
        )}
      </div>

      <p className="min-w-0 flex-1 truncate text-[13px] font-semibold text-[#111827] sm:text-[14px]">
        {entry.name}
      </p>

      <span className="shrink-0 text-[13px] font-bold text-[#111827] sm:text-[14px]">
        {scoreLabel}
      </span>
    </div>
  );
}

interface TeacherLearnersPerformanceCardProps {
  entries: TeacherLearnerPerformanceEntry[];
  emptyState: TeacherDashboardEmptyStateData;
  courseFilters: TeacherDashboardCourseFilter[];
  selectedCourseId: string;
  className?: string;
}

export function TeacherLearnersPerformanceCard({
  entries,
  emptyState,
  courseFilters,
  selectedCourseId,
  className,
}: TeacherLearnersPerformanceCardProps) {
  const hasEntries = entries.length > 0;

  return (
    <TeacherDashboardPanel
      title="Learner's Performance"
      className={cn(hasEntries ? "min-h-0" : "min-h-[240px]", className)}
      contentClassName={hasEntries ? "px-4 pb-4 pt-3 sm:px-5 sm:pb-5" : undefined}
      action={
        hasEntries ? (
          <TeacherCourseFilter
            courseFilters={courseFilters}
            selectedCourseId={selectedCourseId}
          />
        ) : undefined
      }
    >
      {hasEntries ? (
        <div className="max-h-[320px] space-y-2 overflow-y-auto pr-1">
          {entries.map((entry) => (
            <TeacherLearnerPerformanceRow key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <TeacherDashboardEmptyState
          icon={<TeacherEmptyIllustration size="sm" />}
          message={emptyState.message}
          className="py-8 sm:py-10"
        />
      )}
    </TeacherDashboardPanel>
  );
}
