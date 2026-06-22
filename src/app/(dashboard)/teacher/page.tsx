import { TeacherDashboardHome } from "@/components/teacher";
import { teacherDashboardService } from "@/services/teacher";

export const metadata = { title: "Teacher Dashboard" };

export default async function TeacherDashboardPage() {
  const data = await teacherDashboardService.getDashboard();

  return <TeacherDashboardHome data={data} />;
}
