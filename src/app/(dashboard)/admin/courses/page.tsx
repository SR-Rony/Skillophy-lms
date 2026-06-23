import { Suspense } from "react";
import { AdminCourseManagementPage } from "@/components/admin/course-management";
import { adminCourseManagementService } from "@/services/admin";

export const metadata = { title: "Course Management" };

export default async function AdminCoursesPage() {
  const data = await adminCourseManagementService.getCourseManagement();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminCourseManagementPage data={data} />
    </Suspense>
  );
}
