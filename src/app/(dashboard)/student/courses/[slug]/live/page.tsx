import { notFound } from "next/navigation";
import { StudentLiveVideoPage } from "@/components/student/live-video/student-live-video-page";
import { getStudentLiveVideoSession } from "@/data/mock/student-live-video.mock";

interface StudentLiveVideoRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveVideoRouteProps) {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = getStudentLiveVideoSession(slug, lesson);

  return {
    title: data ? `${data.session.title} — Live Class` : "Live Class",
  };
}

export default async function StudentLiveVideoRoute({
  params,
  searchParams,
}: StudentLiveVideoRouteProps) {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = getStudentLiveVideoSession(slug, lesson);

  if (!data) {
    notFound();
  }

  return <StudentLiveVideoPage course={data.course} session={data.session} />;
}
