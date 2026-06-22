import { notFound } from "next/navigation";
import { AdminEmployeeProfilePage } from "@/components/admin/employee-profile";
import { AdminTeacherProfilePage } from "@/components/admin/teacher-profile";
import { adminEmployeeProfileService, adminTeacherProfileService } from "@/services/admin";

export const metadata = { title: "Employee Profile" };

interface AdminEmployeeProfileRouteProps {
  params: Promise<{ employeeId: string }>;
}

export default async function AdminEmployeeProfileRoute({
  params,
}: AdminEmployeeProfileRouteProps) {
  const { employeeId } = await params;

  const teacherData = await adminTeacherProfileService.getTeacherProfile(employeeId);
  if (teacherData) {
    return <AdminTeacherProfilePage data={teacherData} />;
  }

  const employeeData = await adminEmployeeProfileService.getEmployeeProfile(employeeId);
  if (employeeData) {
    return <AdminEmployeeProfilePage data={employeeData} />;
  }

  notFound();
}
