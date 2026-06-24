import { Suspense } from "react";
import { AdminActivityLogManagementPage } from "@/components/admin/activity-log-management";
import { adminActivityLogManagementService } from "@/services/admin";

export const metadata = { title: "Activity Log" };

export default async function AdminActivityLogRoute() {
  const data = await adminActivityLogManagementService.getActivityLogs();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminActivityLogManagementPage data={data} />
    </Suspense>
  );
}
