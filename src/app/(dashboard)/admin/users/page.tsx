import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Users" };

export default function AdminUsersPage() {
  return (
    <ModulePlaceholder
      title="User Management"
      description="Manage students, teachers, and admins."
      feature="users"
    />
  );
}
