import { notFound } from "next/navigation";
import { CourseDetailsPage, getCourseDetailsPageData } from "@/components/public/course-details";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const data = await getCourseDetailsPageData(slug);

  return {
    title: data.hero.title,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;

  if (!slug.trim()) {
    notFound();
  }

  const data = await getCourseDetailsPageData(slug);

  return <CourseDetailsPage data={data} />;
}
