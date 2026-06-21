import { cn } from "@/utils";

interface TeacherDashboardEmptyStateProps {
  icon: React.ReactNode;
  message: string;
  className?: string;
}

export function TeacherDashboardEmptyState({
  icon,
  message,
  className,
}: TeacherDashboardEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:py-12",
        className
      )}
    >
      <div className="mb-5 sm:mb-6">{icon}</div>
      <p className="max-w-[340px] text-[13px] font-medium leading-[1.65] text-[#6b7280] sm:text-[14px]">
        {message}
      </p>
    </div>
  );
}
