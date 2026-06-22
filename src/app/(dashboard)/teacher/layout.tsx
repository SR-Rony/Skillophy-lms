import { TeacherLayoutShell } from "@/components/teacher/teacher-layout-shell";
import { teacherDashboardService } from "@/services/teacher";

export default async function TeacherLayout({ children }: { children: React.ReactNode }) {
  const { headerBadges } = await teacherDashboardService.getDashboard();

  return <TeacherLayoutShell headerBadges={headerBadges}>{children}</TeacherLayoutShell>;
}
