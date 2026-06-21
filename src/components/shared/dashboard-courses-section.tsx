import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

interface DashboardCoursesSectionProps {
  title: string;
  count: number;
  children: React.ReactNode;
  className?: string;
}

function SectionCountBadge({ count }: { count: number }) {
  const label = count === 1 ? "1 course" : `${count} courses`;

  return (
    <span className="inline-flex items-center rounded-full bg-[#f5ebe0] px-3 py-1 text-xs font-semibold text-[#6b5344]">
      {label}
    </span>
  );
}

export function DashboardCoursesSection({
  title,
  count,
  children,
  className,
}: DashboardCoursesSectionProps) {
  if (count === 0) {
    return null;
  }

  return (
    <section className={cn("space-y-5", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <Heading as="h2" variant="dashboard-section">
          {title}
        </Heading>
        <SectionCountBadge count={count} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{children}</div>
    </section>
  );
}
