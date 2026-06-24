import { Suspense } from "react";
import { AdminReportManagementPage } from "@/components/admin/report-management";
import { adminReportManagementService } from "@/services/admin";

export const metadata = { title: "Report" };

export default async function AdminReportRoute() {
  const data = await adminReportManagementService.getReports();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminReportManagementPage data={data} />
    </Suspense>
  );
}
