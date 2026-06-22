import { Suspense } from "react";
import { AdminLayoutShell } from "@/components/admin/admin-layout-shell";
import { adminDashboardService } from "@/services/admin";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { headerBadges } = await adminDashboardService.getDashboard();

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#ececec]" />}>
      <AdminLayoutShell headerBadges={headerBadges}>{children}</AdminLayoutShell>
    </Suspense>
  );
}
