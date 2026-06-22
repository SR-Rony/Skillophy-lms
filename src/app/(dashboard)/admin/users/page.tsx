import { AdminEmployeeManagementPage } from "@/components/admin/employee-management";
import { adminEmployeeManagementService } from "@/services/admin";

export const metadata = { title: "Employee Management" };

export default async function AdminUsersPage() {
  const data = await adminEmployeeManagementService.getEmployees();

  return <AdminEmployeeManagementPage data={data} />;
}
