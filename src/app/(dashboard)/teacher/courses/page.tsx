import { TeacherMyCoursesPage } from "@/components/teacher/courses";
import { getTeacherCoursesPageData } from "@/data/mock/teacher-courses.mock";

export const metadata = { title: "My Courses" };

export default function TeacherCoursesPage() {
  const data = getTeacherCoursesPageData();

  return <TeacherMyCoursesPage data={data} />;
}
