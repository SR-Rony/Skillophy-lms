import { TeacherClassSchedulePage } from "@/components/teacher/class-schedule";
import { teacherClassScheduleService } from "@/services/teacher";

export const metadata = { title: "Class Schedule" };

export default async function TeacherSchedulePage() {
  const data = await teacherClassScheduleService.getSchedule();

  return <TeacherClassSchedulePage data={data} />;
}
