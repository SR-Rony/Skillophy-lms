import { BookOpen, Clock, Trophy } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/dashboard";
import { StudentOverview } from "@/features/student/components/student-overview";

export const metadata = { title: "Student Dashboard" };

export default function StudentDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Track your learning progress and upcoming activities."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Enrolled courses" value={3} icon={BookOpen} trend="+1" />
        <StatCard title="Hours learned" value="24h" icon={Clock} description="This month" />
        <StatCard title="Certificates" value={1} icon={Trophy} />
      </div>
      <StudentOverview />
    </div>
  );
}
