import { PageHeader } from "@/components/shared/page-header";
import { CourseCatalog } from "@/features/courses/components/course-catalog";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="All courses"
        description="Explore our catalog of professional courses."
        className="mb-10"
      />
      <CourseCatalog />
    </div>
  );
}
