import { notFound } from "next/navigation";
import { AdminReportDetailPage } from "@/components/admin/report-management/admin-report-detail-page";
import { adminReportManagementService } from "@/services/admin";

export const metadata = { title: "Report" };

interface AdminReportDetailRouteProps {
  params: Promise<{ reportId: string }>;
}

export default async function AdminReportDetailRoute({ params }: AdminReportDetailRouteProps) {
  const { reportId } = await params;
  const report = await adminReportManagementService.getReportDetail(reportId);

  if (!report) {
    notFound();
  }

  return <AdminReportDetailPage report={report} />;
}
