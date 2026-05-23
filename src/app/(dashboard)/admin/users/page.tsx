import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Users" };

export default function AdminUsersPage() {
  return (
    <ModulePlaceholder
      title="User management"
      description="Manage students, teachers, and admins."
      feature="users"
    />
  );
}
