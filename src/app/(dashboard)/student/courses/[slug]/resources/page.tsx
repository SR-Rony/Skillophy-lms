import { notFound } from "next/navigation";
import { StudentLiveResourcesPage } from "@/components/student/live-resources/student-live-resources-page";
import { getStudentLiveResourceSession } from "@/data/mock/student-live-resources.mock";

interface StudentLiveResourcesRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ resource?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveResourcesRouteProps) {
  const { slug } = await params;
  const { resource } = await searchParams;
  const data = getStudentLiveResourceSession(slug, resource);

  return {
    title: data ? `${data.session.title} — Resources` : "Course Resources",
  };
}

export default async function StudentLiveResourcesRoute({
  params,
  searchParams,
}: StudentLiveResourcesRouteProps) {
  const { slug } = await params;
  const { resource: resourceId } = await searchParams;
  const data = getStudentLiveResourceSession(slug, resourceId);

  if (!data) {
    notFound();
  }

  return <StudentLiveResourcesPage course={data.course} session={data.session} />;
}
