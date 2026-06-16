import { notFound } from "next/navigation";
import { StudentCourseDetailsPage } from "@/components/student/course-details";
import { getStudentCourseDetails } from "@/data/mock/student-course-details.mock";

interface StudentCourseDetailsRouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: StudentCourseDetailsRouteProps) {
  const { slug } = await params;
  const course = getStudentCourseDetails(slug);

  return {
    title: course ? course.title : "Course Details",
  };
}

export default async function StudentCourseDetailsRoute({ params }: StudentCourseDetailsRouteProps) {
  const { slug } = await params;
  const course = getStudentCourseDetails(slug);

  if (!course) {
    notFound();
  }

  return <StudentCourseDetailsPage course={course} />;
}
