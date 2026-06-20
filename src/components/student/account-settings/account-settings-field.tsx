import type { ReactNode } from "react";
import { cn } from "@/utils";

interface AccountSettingsFieldProps {
  label: string;
  className?: string;
  children: ReactNode;
}

export function AccountSettingsField({ label, className, children }: AccountSettingsFieldProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <label className="mb-2 block text-[13px] font-medium text-[#757575] sm:text-[14px]">
        {label}
      </label>
      {children}
    </div>
  );
}

export const accountSettingsInputClassName =
  "flex h-11 w-full rounded-xl border-0 bg-[#f5f5f5] px-4 text-[14px] text-[#1a1a1a] placeholder:text-[#b0b7c3] focus:outline-none focus:ring-2 focus:ring-primary/15 disabled:cursor-default disabled:opacity-100 sm:h-12 sm:text-[15px]";

export const accountSettingsSelectClassName =
  "flex h-11 w-full appearance-none rounded-xl border-0 bg-[#f5f5f5] px-4 pr-10 text-[14px] text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-primary/15 disabled:cursor-default disabled:opacity-100 sm:h-12 sm:text-[15px]";

export const accountSettingsTextareaClassName =
  "min-h-[220px] w-full resize-none rounded-xl border-0 bg-[#f5f5f5] px-4 py-3.5 text-[14px] leading-relaxed text-[#1a1a1a] placeholder:text-[#b0b7c3] focus:outline-none focus:ring-2 focus:ring-primary/15 disabled:cursor-default disabled:opacity-100 sm:min-h-[260px] sm:text-[15px]";
