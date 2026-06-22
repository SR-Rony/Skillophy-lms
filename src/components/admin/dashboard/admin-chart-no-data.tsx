import { TeacherEmptyIllustration } from "@/components/teacher/shared/teacher-empty-illustration";

export function AdminChartNoData() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <TeacherEmptyIllustration size="sm" />
      <p className="mt-3 text-[13px] font-semibold text-[#9ca3af] sm:text-[14px]">No Data</p>
    </div>
  );
}
