import { TeacherCourseResourcesPage } from "@/components/teacher/course-resources";
import { teacherCourseResourcesService } from "@/services/teacher";

export const metadata = { title: "Course Resources" };

export default async function TeacherResourcesPage() {
  const data = await teacherCourseResourcesService.getResourcesPage();

  return <TeacherCourseResourcesPage data={data} />;
}
