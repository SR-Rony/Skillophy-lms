import { notFound } from "next/navigation";
import { AdminContactQueryDetailPage } from "@/components/admin/query-form-management/admin-contact-query-detail-page";
import { adminQueryFormManagementService } from "@/services/admin";

export const metadata = { title: "Contact Query Form" };

interface AdminContactQueryDetailRouteProps {
  params: Promise<{ queryId: string }>;
}

export default async function AdminContactQueryDetailRoute({
  params,
}: AdminContactQueryDetailRouteProps) {
  const { queryId } = await params;
  const query = await adminQueryFormManagementService.getContactQueryDetail(queryId);

  if (!query) {
    notFound();
  }

  return <AdminContactQueryDetailPage query={query} />;
}
