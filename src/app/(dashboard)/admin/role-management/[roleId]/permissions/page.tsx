import { notFound } from "next/navigation";
import { AdminRolePermissionsPage } from "@/components/admin/role-management/admin-role-permissions-page";
import { adminRoleManagementService } from "@/services/admin";

export const metadata = { title: "Role Management" };

interface AdminRolePermissionsRouteProps {
  params: Promise<{ roleId: string }>;
  searchParams: Promise<{ name?: string }>;
}

export default async function AdminRolePermissionsRoute({
  params,
  searchParams,
}: AdminRolePermissionsRouteProps) {
  const { roleId } = await params;
  const { name } = await searchParams;
  const data = await adminRoleManagementService.getRolePermissions(roleId, name);

  if (!data) {
    notFound();
  }

  return <AdminRolePermissionsPage data={data} />;
}
