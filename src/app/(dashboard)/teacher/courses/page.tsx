import { TeacherMyCoursesPage } from "@/components/teacher/courses";
import { teacherCoursesService } from "@/services/teacher";

export const metadata = { title: "My Courses" };

export default async function TeacherCoursesPage() {
  const data = await teacherCoursesService.getCoursesPage();

  return <TeacherMyCoursesPage data={data} />;
}
