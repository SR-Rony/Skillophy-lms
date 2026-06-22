import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/utils";

interface TeacherDashboardStatCardProps {
  label: string;
  count: number;
  icon: LucideIcon | React.ComponentType<LucideProps>;
  iconBg: string;
  bgColor: string;
  borderColor: string;
  iconFill?: boolean;
  valuePrefix?: string;
  displayValue?: string;
  className?: string;
}

export function TeacherDashboardStatCard({
  label,
  count,
  icon: Icon,
  iconBg,
  bgColor,
  borderColor,
  iconFill = false,
  valuePrefix = "",
  displayValue,
  className,
}: TeacherDashboardStatCardProps) {
  const formattedCount = displayValue ?? count.toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "flex min-h-[92px] items-center gap-4 rounded-[18px] border px-5 py-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)] sm:min-h-[96px] sm:px-6",
        bgColor,
        borderColor,
        className
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-[0_4px_10px_rgba(15,23,42,0.12)]",
          iconBg
        )}
      >
        <Icon
          className={cn("h-[22px] w-[22px] text-white", iconFill && "fill-white")}
          strokeWidth={2.1}
        />
      </div>

      <div className="min-w-0">
        <p className="text-[13px] font-semibold leading-none text-[#374151] sm:text-[14px]">
          {label}
        </p>
        <p className="mt-2.5 text-[28px] font-extrabold leading-none tracking-tight text-[#111827] sm:text-[32px]">
          {valuePrefix}
          {formattedCount}
        </p>
      </div>
    </div>
  );
}
