import { Suspense } from "react";
import { AdminWorkshopManagementPage } from "@/components/admin/workshop-management";
import { adminWorkshopManagementService } from "@/services/admin";

export const metadata = { title: "Workshop" };

export default async function AdminWorkshopPage() {
  const data = await adminWorkshopManagementService.getWorkshops();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminWorkshopManagementPage data={data} />
    </Suspense>
  );
}
