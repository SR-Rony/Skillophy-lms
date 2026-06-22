import { notFound } from "next/navigation";
import { TeacherLiveVideoPage } from "@/components/teacher/live-video";
import { teacherLiveVideoService } from "@/services/teacher";

interface TeacherLiveVideoRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string }>;
}

export async function generateMetadata({ params, searchParams }: TeacherLiveVideoRouteProps) {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = await teacherLiveVideoService.getSession(slug, lesson);

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
  const data = await teacherLiveVideoService.getSession(slug, lesson);

  if (!data) {
    notFound();
  }

  return <TeacherLiveVideoPage course={data.course} session={data.session} />;
}
