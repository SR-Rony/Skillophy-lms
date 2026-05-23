import type { NavItem } from "@/types";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardHeader } from "./dashboard-header";

interface DashboardShellProps {
  children: React.ReactNode;
  navItems: NavItem[];
  roleLabel: string;
  headerTitle?: string;
}

/**
 * Shared dashboard chrome — sidebar + header + scrollable main.
 * Used by student, teacher, and admin route group layouts.
 */
export function DashboardShell({
  children,
  navItems,
  roleLabel,
  headerTitle,
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar items={navItems} roleLabel={roleLabel} />
      <div className="flex flex-1 flex-col">
        <DashboardHeader title={headerTitle} />
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
