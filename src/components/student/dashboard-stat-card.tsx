import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";

interface DashboardStatCardProps {
  label: string;
  count: number;
  icon: LucideIcon;
  iconBg: string;
  iconColor?: string;
  iconFill?: boolean;
  bgColor: string;
  valuePrefix?: string;
  className?: string;
}

export function DashboardStatCard({
  label,
  count,
  icon: Icon,
  iconBg,
  iconColor = "text-white",
  iconFill = false,
  bgColor,
  valuePrefix = "",
  className,
}: DashboardStatCardProps) {
  const formattedCount = count.toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "flex items-center gap-3.5 rounded-2xl px-4 py-4 sm:px-5 sm:py-[18px]",
        bgColor,
        className
      )}
    >
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12",
          iconBg
        )}
      >
        <Icon
          className={cn("h-[22px] w-[22px]", iconColor, iconFill && "fill-white")}
          strokeWidth={2.2}
        />
      </div>
      <div className="min-w-0">
        <p className="text-[12px] font-medium text-[#6b7280] sm:text-[13px]">{label}</p>
        <p className="mt-1 text-[26px] font-extrabold leading-none tracking-tight text-[#1a1a1a] sm:text-[28px]">
          {valuePrefix}
          {formattedCount}
        </p>
      </div>
    </div>
  );
}
