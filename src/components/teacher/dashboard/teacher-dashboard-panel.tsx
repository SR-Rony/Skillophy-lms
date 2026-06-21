import { cn } from "@/utils";

interface TeacherDashboardPanelProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function TeacherDashboardPanel({
  title,
  action,
  children,
  className,
  contentClassName,
}: TeacherDashboardPanelProps) {
  return (
    <section
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-[#e8e4e1] bg-white shadow-[0_2px_14px_rgba(35,25,22,0.06)]",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f0ebe8] bg-white px-5 py-4 sm:px-6">
        <h2 className="text-[15px] font-bold text-[#111827] sm:text-[16px]">{title}</h2>
        {action}
      </div>
      <div className={cn("flex min-h-0 flex-1 flex-col bg-white", contentClassName)}>{children}</div>
    </section>
  );
}
