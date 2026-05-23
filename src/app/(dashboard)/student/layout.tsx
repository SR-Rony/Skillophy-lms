import { studentNav } from "@/config";
import { DashboardShell } from "@/components/dashboard";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell navItems={studentNav} roleLabel="Student">
      {children}
    </DashboardShell>
  );
}
