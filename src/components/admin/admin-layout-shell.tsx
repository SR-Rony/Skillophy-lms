"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { DashboardShell } from "@/components/dashboard";
import { getAdminEmployeeManagementHref, parseAdminEmployeeTab } from "@/components/admin/employee-management/admin-employee-management.utils";
import { adminFooterNav, adminNav } from "@/config";
import { ROUTES } from "@/constants";
import { useUIStore } from "@/store";

const adminPageTitles: Record<string, string> = {
  [ROUTES.admin.root]: "Dashboard",
  [ROUTES.admin.users]: "Employee Management",
  [ROUTES.admin.learners]: "Learner Management",
  [ROUTES.admin.students]: "Learner Management",
  [ROUTES.admin.teachers]: "Teachers",
  [ROUTES.admin.admins]: "Admins",
  [ROUTES.admin.courses]: "Course Management",
  [ROUTES.admin.courseCreate]: "Course Management",
  [ROUTES.admin.categories]: "Categories",
  [ROUTES.admin.promos]: "Promo & Discounts",
  [ROUTES.admin.workshop]: "Workshop",
  [ROUTES.admin.transactions]: "Transaction",
  [ROUTES.admin.quiz]: "Today's Quiz",
  [ROUTES.admin.messages]: "Messages",
  [ROUTES.admin.jobOpening]: "Job Opening",
  [ROUTES.admin.queryForm]: "Query Form",
  [ROUTES.admin.roleManagement]: "Role Management",
  [ROUTES.admin.templates]: "Templates",
  [ROUTES.admin.activityLog]: "Activity Log",
  [ROUTES.admin.report]: "Report",
  [ROUTES.admin.analytics]: "Analytics",
  [ROUTES.admin.blog]: "Blog",
  [ROUTES.admin.settings]: "Account Settings",
  [ROUTES.admin.support]: "Support",
};

function getAdminPageTitle(pathname: string) {
  if (/^\/admin\/query-form\/business\/[^/]+$/.test(pathname)) {
    return "Business Query Form";
  }

  if (/^\/admin\/query-form\/contact\/[^/]+$/.test(pathname)) {
    return "Contact Query Form";
  }

  if (adminPageTitles[pathname]) {
    return adminPageTitles[pathname];
  }

  const matchedEntry = Object.entries(adminPageTitles)
    .sort(([a], [b]) => b.length - a.length)
    .find(([path]) => pathname.startsWith(`${path}/`));

  return matchedEntry?.[1] ?? "Dashboard";
}

const staticUserSubroutes: string[] = [
  ROUTES.admin.learners,
  ROUTES.admin.students,
  ROUTES.admin.teachers,
  ROUTES.admin.admins,
];

function isEmployeeProfileRoute(pathname: string) {
  return /^\/admin\/users\/[^/]+$/.test(pathname) && !staticUserSubroutes.includes(pathname);
}

function isLearnerProfileRoute(pathname: string) {
  return /^\/admin\/users\/learners\/[^/]+$/.test(pathname);
}

interface AdminLayoutShellProps {
  children: React.ReactNode;
  headerBadges: {
    messages: number;
    notifications: number;
  };
}

export function AdminLayoutShell({ children, headerBadges }: AdminLayoutShellProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const headerTitleOverride = useUIStore((state) => state.headerTitleOverride);
  const isProfileRoute = isEmployeeProfileRoute(pathname);
  const isLearnerProfile = isLearnerProfileRoute(pathname);
  const fromTab = parseAdminEmployeeTab(searchParams.get("fromTab"));
  const showHeaderBackButton =
    pathname === ROUTES.admin.users ||
    pathname === ROUTES.admin.learners ||
    isProfileRoute ||
    isLearnerProfile;
  const headerBackHref = isProfileRoute
    ? getAdminEmployeeManagementHref(fromTab)
    : isLearnerProfile
      ? ROUTES.admin.learners
      : undefined;

  return (
    <DashboardShell
      navItems={adminNav}
      footerNavItems={adminFooterNav}
      roleLabel="Admin"
      headerTitle={headerTitleOverride ?? getAdminPageTitle(pathname)}
      showHeaderBackButton={showHeaderBackButton}
      headerBackHref={headerBackHref}
      headerMessageCount={headerBadges.messages}
      headerNotificationCount={headerBadges.notifications}
    >
      {children}
    </DashboardShell>
  );
}
