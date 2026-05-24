import { notFound } from "next/navigation";
import { Container } from "@/components/shared";
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
    <Container className="py-12">
      <CourseDetail course={course} />
    </Container>
  );
}
