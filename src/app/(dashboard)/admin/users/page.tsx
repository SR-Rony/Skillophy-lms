import { Suspense } from "react";
import { AdminEmployeeManagementPage } from "@/components/admin/employee-management";
import { adminEmployeeManagementService } from "@/services/admin";

export const metadata = { title: "Employee Management" };

export default async function AdminUsersPage() {
  const data = await adminEmployeeManagementService.getEmployees();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminEmployeeManagementPage data={data} />
    </Suspense>
  );
}
