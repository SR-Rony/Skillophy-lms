import { AdminDashboardHome } from "@/components/admin/dashboard";
import { adminDashboardService } from "@/services/admin";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const data = await adminDashboardService.getDashboard();

  return <AdminDashboardHome data={data} />;
}
