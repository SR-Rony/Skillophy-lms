import { AdminChartNoData } from "@/components/admin/dashboard/admin-chart-no-data";
import { AdminDashboardCourseFilter } from "@/components/admin/dashboard/admin-dashboard-course-filter";
import { TeacherDashboardPanel } from "@/components/teacher/dashboard/teacher-dashboard-panel";
import type {
  AdminDashboardCourseFilter as AdminDashboardCourseFilterType,
  AdminDashboardEnrollmentMonth,
} from "@/types/admin-dashboard.types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Y_AXIS_TICKS = [1000, 800, 600, 400, 200, 0];
const CHART_HEIGHT = 232;
const MAX_ENROLLMENT = 1000;

interface AdminStudentEnrolmentCardProps {
  courseFilters: AdminDashboardCourseFilterType[];
  selectedCourseId: string;
  monthlyEnrollment: AdminDashboardEnrollmentMonth[];
}

export function AdminStudentEnrolmentCard({
  courseFilters,
  selectedCourseId,
  monthlyEnrollment,
}: AdminStudentEnrolmentCardProps) {
  const hasData = monthlyEnrollment.length > 0;

  return (
    <TeacherDashboardPanel
      title="Student Enrolment"
      className="min-h-[390px]"
      action={
        <AdminDashboardCourseFilter
          courseFilters={courseFilters}
          selectedCourseId={selectedCourseId}
        />
      }
      contentClassName="flex flex-1 flex-col px-5 pb-6 pt-3 sm:px-6"
    >
      <div className="flex min-h-0 flex-1 gap-2.5 sm:gap-3">
        <div className="flex w-4 shrink-0 items-center justify-center sm:w-5">
          <p className="origin-center -rotate-90 whitespace-nowrap text-[11px] font-medium text-[#9ca3af] sm:text-[12px]">
            Enrolled Students
          </p>
        </div>

        <div
          className="flex w-7 shrink-0 flex-col justify-between pb-9 text-[11px] font-medium text-[#9ca3af] sm:w-8 sm:text-[12px]"
          style={{ height: CHART_HEIGHT }}
        >
          {Y_AXIS_TICKS.map((tick) => (
            <span key={tick} className="leading-none">
              {tick}
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <div
            className="relative border-b border-l border-[#e5e7eb]"
            style={{ height: CHART_HEIGHT }}
          >
            {Y_AXIS_TICKS.slice(0, -1).map((tick) => (
              <div
                key={tick}
                className="absolute inset-x-0 border-t border-[#f0f0f0]"
                style={{ bottom: `${(tick / MAX_ENROLLMENT) * CHART_HEIGHT}px` }}
              />
            ))}

            {hasData ? (
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-1 px-1">
                {monthlyEnrollment.map((item) => (
                  <div key={item.month} className="flex flex-1 justify-center">
                    <div
                      className="w-full max-w-[14px] rounded-t-[5px] bg-[#f39314] sm:max-w-[16px]"
                      style={{
                        height: `${Math.max(6, (item.enrolledStudents / MAX_ENROLLMENT) * CHART_HEIGHT)}px`,
                      }}
                      title={`${item.month}: ${item.enrolledStudents}`}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <AdminChartNoData />
            )}
          </div>

          <div className="mt-3 flex justify-between gap-0.5 px-1">
            {(hasData ? monthlyEnrollment : MONTHS.map((month) => ({ month }))).map((item) => (
              <span
                key={item.month}
                className="flex-1 text-center text-[10px] font-medium text-[#9ca3af] sm:text-[11px]"
              >
                {item.month}
              </span>
            ))}
          </div>

          <p className="mt-2.5 text-center text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
            Month
          </p>
        </div>
      </div>
    </TeacherDashboardPanel>
  );
}
