import { ClassSchedulePage } from "@/components/student/class-schedule";
import { studentClassScheduleService } from "@/services/student-class-schedule.service";

export async function generateMetadata() {
  const data = await studentClassScheduleService.getSchedule();

  return {
    title: data.title,
  };
}

export default async function StudentClassScheduleRoute() {
  const data = await studentClassScheduleService.getSchedule();

  return <ClassSchedulePage data={data} />;
}
