import { Container } from "@/components/shared";
import { PageHeader } from "@/components/shared/page-header";
import { CourseCatalog } from "@/features/courses/components/course-catalog";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="All courses"
        description="Explore our catalog of professional courses."
        className="mb-10"
      />
      <CourseCatalog />
    </Container>
  );
}
