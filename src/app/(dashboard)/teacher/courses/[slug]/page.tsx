import { notFound } from "next/navigation";
import { TeacherCourseDetailsPage } from "@/components/teacher/course-details";
import { getTeacherCourseDetails } from "@/data/mock/teacher-course-details.mock";

interface TeacherCourseDetailsRouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TeacherCourseDetailsRouteProps) {
  const { slug } = await params;
  const course = getTeacherCourseDetails(slug);

  return {
    title: course ? course.title : "Course Details",
  };
}

export default async function TeacherCourseDetailsRoute({ params }: TeacherCourseDetailsRouteProps) {
  const { slug } = await params;
  const course = getTeacherCourseDetails(slug);

  if (!course) {
    notFound();
  }

  return <TeacherCourseDetailsPage course={course} />;
}
