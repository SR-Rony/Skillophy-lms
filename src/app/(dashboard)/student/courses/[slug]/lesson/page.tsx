import { notFound } from "next/navigation";
import { StudentRecordedVideoPage } from "@/components/student/course-video";
import { getStudentRecordedVideoSession } from "@/data/mock/student-recorded-video.mock";

interface StudentRecordedLessonRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentRecordedLessonRouteProps) {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = getStudentRecordedVideoSession(slug, lesson);

  return {
    title: data ? `${data.session.title} — Lesson` : "Course Lesson",
  };
}

export default async function StudentRecordedLessonRoute({
  params,
  searchParams,
}: StudentRecordedLessonRouteProps) {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = getStudentRecordedVideoSession(slug, lesson);

  if (!data) {
    notFound();
  }

  return <StudentRecordedVideoPage course={data.course} session={data.session} />;
}
