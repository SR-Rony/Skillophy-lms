import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Teachers" };

export default function AdminTeachersPage() {
  return (
    <ModulePlaceholder
      title="Teachers"
      description="Manage teacher profiles, approvals, and course assignments."
      feature="admin/users"
    />
  );
}
