import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Students" };

export default function AdminStudentsPage() {
  return (
    <ModulePlaceholder
      title="Students"
      description="Manage student accounts, enrollments, and access."
      feature="admin/users"
    />
  );
}
