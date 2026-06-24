import { notFound } from "next/navigation";
import { AdminSupportTicketDetailPage } from "@/components/admin/support-management/admin-support-ticket-detail-page";
import { adminSupportManagementService } from "@/services/admin";

export const metadata = { title: "Support" };

interface AdminSupportDetailRouteProps {
  params: Promise<{ ticketId: string }>;
}

export default async function AdminSupportDetailRoute({ params }: AdminSupportDetailRouteProps) {
  const { ticketId } = await params;
  const ticket = await adminSupportManagementService.getTicketDetail(ticketId);

  if (!ticket) {
    notFound();
  }

  return <AdminSupportTicketDetailPage ticket={ticket} />;
}
