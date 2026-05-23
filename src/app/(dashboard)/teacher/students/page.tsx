import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Students" };

export default function TeacherStudentsPage() {
  return (
    <ModulePlaceholder
      title="Students"
      description="View enrollments and progress."
      feature="users"
    />
  );
}
