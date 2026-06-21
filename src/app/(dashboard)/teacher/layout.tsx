import { teacherFooterNav, teacherNav } from "@/config";
import { DashboardShell } from "@/components/dashboard";
import { getTeacherDashboardData } from "@/data/mock/teacher-dashboard.mock";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const { headerBadges } = getTeacherDashboardData();

  return (
    <DashboardShell
      navItems={teacherNav}
      footerNavItems={teacherFooterNav}
      roleLabel="Teacher"
      headerTitle="Dashboard"
      headerMessageCount={headerBadges.messages}
      headerNotificationCount={headerBadges.notifications}
    >
      {children}
    </DashboardShell>
  );
}
