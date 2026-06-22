import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Admins" };

export default function AdminAdminsPage() {
  return (
    <ModulePlaceholder
      title="Admins"
      description="Manage admin accounts and role permissions."
      feature="admin/users"
    />
  );
}
