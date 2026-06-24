import { Suspense } from "react";
import { AdminTemplateManagementPage } from "@/components/admin/template-management";
import { adminTemplateManagementService } from "@/services/admin";

export const metadata = { title: "Templates" };

export default async function AdminTemplatesRoute() {
  const data = await adminTemplateManagementService.getTemplates();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminTemplateManagementPage data={data} />
    </Suspense>
  );
}
