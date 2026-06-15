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
  className,
}: DashboardStatCardProps) {
  const formattedCount = count.toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-2xl px-5 py-[18px]",
        bgColor,
        className
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
          iconBg
        )}
      >
        <Icon
          className={cn("h-[22px] w-[22px]", iconColor, iconFill && "fill-white")}
          strokeWidth={2.2}
        />
      </div>
      <div className="min-w-0">
        <p className="text-[13px] font-medium text-[#6b7280]">{label}</p>
        <p className="mt-1 text-[28px] font-extrabold leading-none tracking-tight text-[#1a1a1a]">
          {formattedCount}
        </p>
      </div>
    </div>
  );
}
