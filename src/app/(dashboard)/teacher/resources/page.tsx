import { TeacherCourseResourcesPage } from "@/components/teacher/course-resources";
import { getTeacherCourseResourcesPageData } from "@/data/mock/teacher-course-resources.mock";

export const metadata = { title: "Course Resources" };

export default function TeacherResourcesPage() {
  const data = getTeacherCourseResourcesPageData();

  return <TeacherCourseResourcesPage data={data} />;
}
