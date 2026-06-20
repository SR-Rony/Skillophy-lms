import type { ReactNode } from "react";
import { cn } from "@/utils";

interface AccountSettingsSectionCardProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  children: ReactNode;
}

export function AccountSettingsSectionCard({
  title,
  actionLabel = "Add New",
  onAction,
  className,
  children,
}: AccountSettingsSectionCardProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">{title}</h2>
        {onAction ? (
          <button
            type="button"
            onClick={onAction}
            className="shrink-0 text-[13px] font-semibold text-[#1a1a1a] underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-[14px]"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}
