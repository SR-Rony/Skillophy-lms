import { notFound } from "next/navigation";
import { TeacherLiveVideoPage } from "@/components/teacher/live-video";
import { getTeacherLiveVideoSession } from "@/data/mock/teacher-live-video.mock";

interface TeacherLiveVideoRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string }>;
}

export async function generateMetadata({ params, searchParams }: TeacherLiveVideoRouteProps) {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = getTeacherLiveVideoSession(slug, lesson);

  return {
    title: data ? `${data.session.title} — Live Class` : "Live Class",
  };
}

export default async function TeacherLiveVideoRoute({
  params,
  searchParams,
}: TeacherLiveVideoRouteProps) {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = getTeacherLiveVideoSession(slug, lesson);

  if (!data) {
    notFound();
  }

  return <TeacherLiveVideoPage course={data.course} session={data.session} />;
}
