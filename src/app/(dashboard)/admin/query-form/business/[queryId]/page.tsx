import { notFound } from "next/navigation";
import { AdminBusinessQueryDetailPage } from "@/components/admin/query-form-management/admin-business-query-detail-page";
import { adminQueryFormManagementService } from "@/services/admin";

export const metadata = { title: "Business Query Form" };

interface AdminBusinessQueryDetailRouteProps {
  params: Promise<{ queryId: string }>;
}

export default async function AdminBusinessQueryDetailRoute({
  params,
}: AdminBusinessQueryDetailRouteProps) {
  const { queryId } = await params;
  const query = await adminQueryFormManagementService.getBusinessQueryDetail(queryId);

  if (!query) {
    notFound();
  }

  return <AdminBusinessQueryDetailPage query={query} />;
}
