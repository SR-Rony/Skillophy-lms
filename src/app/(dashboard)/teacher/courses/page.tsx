import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Courses" };

export default function TeacherCoursesPage() {
  return (
    <ModulePlaceholder
      title="My courses"
      description="Create and manage your courses."
      feature="courses"
    />
  );
}
