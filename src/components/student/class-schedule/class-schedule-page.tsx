import type { StudentClassSchedulePageData } from "@/types/student-class-schedule.types";
import { ClassScheduleContent } from "./class-schedule-content";
import { ClassScheduleHero } from "./class-schedule-hero";

interface ClassSchedulePageProps {
  data: StudentClassSchedulePageData;
}

export function ClassSchedulePage({ data }: ClassSchedulePageProps) {
  return (
    <div className="bg-white">
      <ClassScheduleHero title={data.title} subtitle={data.subtitle} />
      <ClassScheduleContent data={data} />
    </div>
  );
}
