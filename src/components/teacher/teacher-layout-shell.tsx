"use client";

import { usePathname } from "next/navigation";
import { DashboardShell } from "@/components/dashboard";
import { teacherFooterNav, teacherNav } from "@/config";
import { ROUTES } from "@/constants";
import { getTeacherDashboardData } from "@/data/mock/teacher-dashboard.mock";

const teacherPageTitles: Record<string, string> = {
  [ROUTES.teacher.root]: "Dashboard",
  [ROUTES.teacher.courses]: "My Courses",
  [ROUTES.teacher.schedule]: "Class Schedule",
  [ROUTES.teacher.resources]: "Course Resources",
  [ROUTES.teacher.workshop]: "My Workshop",
  [ROUTES.teacher.chat]: "Messages",
  [ROUTES.teacher.payments]: "Payment History",
  [ROUTES.teacher.settings]: "Account Settings",
  [ROUTES.teacher.support]: "Support",
  [ROUTES.teacher.live]: "Live Classes",
  [ROUTES.teacher.students]: "Students",
  [ROUTES.teacher.analytics]: "Analytics",
};

function getTeacherPageTitle(pathname: string) {
  if (teacherPageTitles[pathname]) {
    return teacherPageTitles[pathname];
  }

  if (pathname.startsWith(`${ROUTES.teacher.courses}/`)) {
    return "My Courses";
  }

  const matchedEntry = Object.entries(teacherPageTitles).find(([path]) =>
    pathname.startsWith(`${path}/`)
  );

  return matchedEntry?.[1] ?? "Dashboard";
}

interface TeacherLayoutShellProps {
  children: React.ReactNode;
}

export function TeacherLayoutShell({ children }: TeacherLayoutShellProps) {
  const pathname = usePathname();
  const { headerBadges } = getTeacherDashboardData();

  return (
    <DashboardShell
      navItems={teacherNav}
      footerNavItems={teacherFooterNav}
      roleLabel="Teacher"
      headerTitle={getTeacherPageTitle(pathname)}
      headerMessageCount={headerBadges.messages}
      headerNotificationCount={headerBadges.notifications}
    >
      {children}
    </DashboardShell>
  );
}
