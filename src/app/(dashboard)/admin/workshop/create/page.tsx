import { Suspense } from "react";
import { AdminWorkshopCreationPage } from "@/components/admin/workshop-creation";
import { adminWorkshopCreationService } from "@/services/admin";

export const metadata = { title: "Workshop Creation" };

export default async function AdminWorkshopCreatePage() {
  const data = await adminWorkshopCreationService.getNewWorkshopCreation();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminWorkshopCreationPage data={data} mode="create" />
    </Suspense>
  );
}
