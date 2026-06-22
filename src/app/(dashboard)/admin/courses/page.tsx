import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Courses" };

export default function AdminCoursesPage() {
  return (
    <ModulePlaceholder
      title="Course Management"
      description="Review and moderate platform courses."
      feature="courses"
    />
  );
}
