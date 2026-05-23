import { teacherNav } from "@/config";
import { DashboardShell } from "@/components/dashboard";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell navItems={teacherNav} roleLabel="Teacher">
      {children}
    </DashboardShell>
  );
}
