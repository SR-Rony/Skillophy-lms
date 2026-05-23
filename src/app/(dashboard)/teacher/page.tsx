import { Users, BookOpen, Video } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/dashboard";

export const metadata = { title: "Teacher Dashboard" };

export default function TeacherDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Teacher overview"
        description="Manage courses, students, and live sessions."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Active courses" value={5} icon={BookOpen} />
        <StatCard title="Total students" value={342} icon={Users} trend="+12%" />
        <StatCard title="Live sessions" value={2} icon={Video} description="This week" />
      </div>
    </div>
  );
}
