import { AdminLayoutShell } from "@/components/admin/admin-layout-shell";
import { adminDashboardService } from "@/services/admin";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { headerBadges } = await adminDashboardService.getDashboard();

  return <AdminLayoutShell headerBadges={headerBadges}>{children}</AdminLayoutShell>;
}
