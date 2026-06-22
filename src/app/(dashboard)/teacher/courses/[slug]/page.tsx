import { notFound } from "next/navigation";
import { TeacherCourseDetailsPage } from "@/components/teacher/course-details";
import { teacherCourseDetailsService } from "@/services/teacher";

interface TeacherCourseDetailsRouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TeacherCourseDetailsRouteProps) {
  const { slug } = await params;
  const course = await teacherCourseDetailsService.getCourseDetails(slug);

  return {
    title: course ? course.title : "Course Details",
  };
}

export default async function TeacherCourseDetailsRoute({ params }: TeacherCourseDetailsRouteProps) {
  const { slug } = await params;
  const course = await teacherCourseDetailsService.getCourseDetails(slug);

  if (!course) {
    notFound();
  }

  return <TeacherCourseDetailsPage course={course} />;
}
