import { AdminDashboardCourseFilter } from "@/components/admin/dashboard/admin-dashboard-course-filter";
import { TeacherDashboardPanel } from "@/components/teacher/dashboard/teacher-dashboard-panel";
import type {
  AdminDashboardCourseFilter as AdminDashboardCourseFilterType,
  AdminDashboardCourseStatistics,
} from "@/types/admin-dashboard.types";

const SIZE = 188;
const CENTER = SIZE / 2;
const RADIUS = 68;
const STROKE = 16;

interface AdminCourseStatisticsCardProps {
  courseFilters: AdminDashboardCourseFilterType[];
  selectedCourseId: string;
  statistics: AdminDashboardCourseStatistics;
}

function StatLegendItem({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden />
        <span className="text-[12px] font-medium text-[#6b7280] sm:text-[13px]">{label}</span>
      </div>
      <p className="mt-2.5 pl-[18px] text-[22px] font-bold leading-none text-[#1a1a1a] sm:text-[24px]">
        {value}
      </p>
    </div>
  );
}

export function AdminCourseStatisticsCard({
  courseFilters,
  selectedCourseId,
  statistics,
}: AdminCourseStatisticsCardProps) {
  const circumference = 2 * Math.PI * RADIUS;
  const hasData = statistics.completionPercent > 0 || statistics.enrolledLearners > 0;
  const completionPercent = hasData ? statistics.completionPercent : 0;
  const pinkAccentPercent = hasData ? 14 : 0;
  const redLength = (completionPercent / 100) * circumference;
  const pinkLength = (pinkAccentPercent / 100) * circumference;
  const percentLabel = hasData ? `${statistics.completionPercent}%` : "00%";
  const enrolledLabel = hasData ? statistics.enrolledLearners.toLocaleString() : "00";
  const completedLabel = hasData ? statistics.completedLearners.toLocaleString() : "00";

  return (
    <TeacherDashboardPanel
      title="Course Statistics"
      className="min-h-[390px]"
      action={
        <AdminDashboardCourseFilter
          courseFilters={courseFilters}
          selectedCourseId={selectedCourseId}
        />
      }
      contentClassName="flex flex-1 flex-col px-5 pb-6 pt-3 sm:px-6"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative flex h-[188px] w-[188px] items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            aria-hidden
          >
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke="#e8e8e8"
              strokeWidth={STROKE}
            />
            {hasData && (
              <>
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke="#ff4747"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  strokeDasharray={`${redLength} ${circumference - redLength}`}
                />
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke="#ffcaca"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  strokeDasharray={`${pinkLength} ${circumference - pinkLength}`}
                  strokeDashoffset={-redLength}
                />
              </>
            )}
          </svg>
          <span className="text-[36px] font-bold leading-none text-[#1a1a1a] sm:text-[40px]">
            {percentLabel}
          </span>
        </div>

        <div className="mt-8 grid w-full max-w-[340px] grid-cols-2 gap-6 sm:gap-10">
          <StatLegendItem color="#ffcaca" label="Enrolled Learners" value={enrolledLabel} />
          <StatLegendItem color="#ff4747" label="Completed Learners" value={completedLabel} />
        </div>
      </div>
    </TeacherDashboardPanel>
  );
}
