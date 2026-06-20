import { Pencil } from "lucide-react";
import type { StudentAccountSettingsJobExperienceItem } from "@/types/student-account-settings.types";
import { AccountSettingsStatusIndicator } from "./account-settings-status-indicator";
import { cn } from "@/utils";

interface AccountSettingsJobExperienceItemRowProps {
  item: StudentAccountSettingsJobExperienceItem;
  className?: string;
}

export function AccountSettingsJobExperienceItemRow({
  item,
  className,
}: AccountSettingsJobExperienceItemRowProps) {
  return (
    <article className={cn("flex gap-3 sm:gap-4", className)}>
      <AccountSettingsStatusIndicator />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[14px] font-bold leading-snug text-[#1a1a1a] sm:text-[15px]">
            {item.title}{" "}
            <span className="font-medium text-[#757575]">({item.dateRange})</span>
          </h3>

          <button
            type="button"
            aria-label={`Edit ${item.title}`}
            className="shrink-0 text-[#b0b7c3] transition-colors hover:text-[#1a1a1a]"
          >
            <Pencil className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </button>
        </div>

        <p className="mt-2.5 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

interface AccountSettingsJobExperienceCardProps {
  items: StudentAccountSettingsJobExperienceItem[];
  className?: string;
}

export function AccountSettingsJobExperienceCard({
  items,
  className,
}: AccountSettingsJobExperienceCardProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, index) => (
        <div key={item.id}>
          <AccountSettingsJobExperienceItemRow item={item} />
          {index < items.length - 1 ? (
            <div className="mt-6 border-b border-[#f0ece9]" aria-hidden />
          ) : null}
        </div>
      ))}
    </div>
  );
}
