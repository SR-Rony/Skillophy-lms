import { TeacherClassSchedulePage } from "@/components/teacher/class-schedule";
import { getTeacherClassSchedulePageData } from "@/data/mock/teacher-class-schedule.mock";

export const metadata = { title: "Class Schedule" };

export default function TeacherSchedulePage() {
  const data = getTeacherClassSchedulePageData();

  return <TeacherClassSchedulePage data={data} />;
}
