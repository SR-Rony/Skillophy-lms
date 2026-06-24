import { Suspense } from "react";
import { AdminCourseCreationPage } from "@/components/admin/course-creation";
import { adminCourseCreationService } from "@/services/admin";

export const metadata = { title: "Live Course Creation" };

export default async function AdminLiveCourseCreatePage() {
  const data = await adminCourseCreationService.getLiveCourseCreation();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminCourseCreationPage data={data} mode="edit" />
    </Suspense>
  );
}
