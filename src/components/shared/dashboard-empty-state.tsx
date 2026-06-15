import { cn } from "@/utils";

interface DashboardEmptyStateProps {
  icon: React.ReactNode;
  title: string;
  action?: React.ReactNode;
  className?: string;
}

export function DashboardEmptyState({
  icon,
  title,
  action,
  className,
}: DashboardEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-10 text-center",
        className
      )}
    >
      <div className="mb-4">{icon}</div>
      <p className="max-w-xs text-sm leading-relaxed text-[#9ca3af]">{title}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
