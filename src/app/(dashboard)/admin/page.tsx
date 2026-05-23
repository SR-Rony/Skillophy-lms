import { Users, DollarSign, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/dashboard";

export const metadata = { title: "Admin Dashboard" };

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Admin overview"
        description="Platform metrics and management tools."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Total users" value="2,450" icon={Users} trend="+8%" />
        <StatCard title="Revenue" value="$48.2k" icon={DollarSign} description="This month" />
        <StatCard title="Published courses" value={128} icon={BookOpen} />
      </div>
    </div>
  );
}
