import { Suspense } from "react";
import { AdminRoleManagementPage } from "@/components/admin/role-management";
import { adminRoleManagementService } from "@/services/admin";

export const metadata = { title: "Role Management" };

export default async function AdminRoleManagementRoute() {
  const data = await adminRoleManagementService.getRoles();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminRoleManagementPage data={data} />
    </Suspense>
  );
}
