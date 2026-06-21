import { TeacherDashboardHome } from "@/components/teacher";
import { getTeacherDashboardData } from "@/data/mock/teacher-dashboard.mock";

export const metadata = { title: "Teacher Dashboard" };

export default function TeacherDashboardPage() {
  const data = getTeacherDashboardData();

  return <TeacherDashboardHome data={data} />;
}
