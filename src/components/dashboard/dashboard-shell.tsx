"use client";

import type { NavItem } from "@/types";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { useUIStore } from "@/store";
import { cn } from "@/utils";

interface DashboardShellProps {
  children: React.ReactNode;
  navItems: NavItem[];
  footerNavItems?: NavItem[];
  roleLabel: string;
  headerTitle?: string;
  showHeaderBackButton?: boolean;
  headerMessageCount?: number;
  headerNotificationCount?: number;
}

/**
 * Shared dashboard chrome — sidebar + header + scrollable main.
 * Used by teacher and admin route group layouts.
 */
export function DashboardShell({
  children,
  navItems,
  footerNavItems,
  roleLabel,
  headerTitle = "Dashboard",
  showHeaderBackButton = false,
  headerMessageCount = 0,
  headerNotificationCount = 0,
}: DashboardShellProps) {
  const sidebarCollapsed = useUIStore((state) => state.sidebarCollapsed);

  return (
    <div className="min-h-screen bg-[#ececec]">
      <DashboardSidebar items={navItems} footerItems={footerNavItems} roleLabel={roleLabel} />

      <div
        className={cn(
          "flex min-h-screen min-w-0 flex-col transition-[margin] duration-200",
          sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
        )}
      >
        <DashboardHeader
          title={headerTitle}
          showBackButton={showHeaderBackButton}
          messageCount={headerMessageCount}
          notificationCount={headerNotificationCount}
        />
        <main className="flex-1 overflow-auto bg-[#ececec] p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
