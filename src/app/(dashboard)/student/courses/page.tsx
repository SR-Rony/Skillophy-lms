import { PageHeader } from "@/components/shared/page-header";
import { CourseCatalog } from "@/features/courses/components/course-catalog";

export const metadata = { title: "My Courses" };

export default function StudentCoursesPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="My courses" description="Courses you are enrolled in." />
      <CourseCatalog />
    </div>
  );
}
