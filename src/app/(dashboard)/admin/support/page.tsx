import { Suspense } from "react";
import { AdminSupportManagementPage } from "@/components/admin/support-management";
import { adminSupportManagementService } from "@/services/admin";

export const metadata = { title: "Support" };

export default async function AdminSupportRoute() {
  const data = await adminSupportManagementService.getSupportTickets();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminSupportManagementPage data={data} />
    </Suspense>
  );
}
