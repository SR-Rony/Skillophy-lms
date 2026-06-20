import { Check } from "lucide-react";
import { cn } from "@/utils";

interface AccountSettingsStatusIndicatorProps {
  isCompleted?: boolean;
  className?: string;
}

export function AccountSettingsStatusIndicator({
  isCompleted = true,
  className,
}: AccountSettingsStatusIndicatorProps) {
  return (
    <span
      className={cn(
        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 sm:h-[22px] sm:w-[22px]",
        isCompleted ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#c4c4c4] bg-white",
        className
      )}
      aria-hidden
    >
      {isCompleted ? <Check className="h-3 w-3 stroke-[3] text-white" /> : null}
    </span>
  );
}
