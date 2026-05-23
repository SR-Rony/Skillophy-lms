import { notFound } from "next/navigation";
import { courseService } from "@/services";
import { CourseDetail } from "@/features/courses/components/course-detail";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await courseService.getBySlug(slug);

  if (!course) notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <CourseDetail course={course} />
    </div>
  );
}
