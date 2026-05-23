import { adminNav } from "@/config";
import { DashboardShell } from "@/components/dashboard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell navItems={adminNav} roleLabel="Admin">
      {children}
    </DashboardShell>
  );
}
