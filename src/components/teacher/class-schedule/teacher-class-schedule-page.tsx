import { TeacherClassScheduleContent } from "./teacher-class-schedule-content";
import type { TeacherClassSchedulePageData } from "@/types/teacher-class-schedule.types";

interface TeacherClassSchedulePageProps {
  data: TeacherClassSchedulePageData;
}

export function TeacherClassSchedulePage({ data }: TeacherClassSchedulePageProps) {
  return (
    <div className="bg-white pb-10 sm:pb-12 md:pb-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
        <TeacherClassScheduleContent data={data} />
      </div>
    </div>
  );
}
