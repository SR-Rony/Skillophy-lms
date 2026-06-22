import { notFound } from "next/navigation";
import { AdminTeacherProfilePage } from "@/components/admin/teacher-profile";
import { adminTeacherProfileService } from "@/services/admin";

export const metadata = { title: "Teacher Profile" };

interface AdminTeacherProfileRouteProps {
  params: Promise<{ employeeId: string }>;
}

export default async function AdminTeacherProfileRoute({ params }: AdminTeacherProfileRouteProps) {
  const { employeeId } = await params;
  const data = await adminTeacherProfileService.getTeacherProfile(employeeId);

  if (!data) {
    notFound();
  }

  return <AdminTeacherProfilePage data={data} />;
}
