import Link from "next/link";
import { Award, Pencil } from "lucide-react";
import type { StudentAccountSettingsCourseItem } from "@/types/student-account-settings.types";
import { AccountSettingsStatusIndicator } from "./account-settings-status-indicator";
import { cn } from "@/utils";

interface AccountSettingsCourseItemRowProps {
  item: StudentAccountSettingsCourseItem;
  className?: string;
}

export function AccountSettingsCourseItemRow({
  item,
  className,
}: AccountSettingsCourseItemRowProps) {
  const isCompleted = item.status === "completed";

  return (
    <article className={cn("flex gap-3 sm:gap-4", className)}>
      <AccountSettingsStatusIndicator isCompleted={isCompleted} />

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

        {item.description ? (
          <p className="mt-2.5 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
            {item.description}
          </p>
        ) : null}

        {item.status === "ongoing" ? (
          <span className="mt-3 inline-flex rounded-md bg-[#fff4e5] px-2.5 py-1 text-[12px] font-semibold text-[#d97706] sm:text-[13px]">
            Ongoing
          </span>
        ) : null}

        {item.certificateUrl ? (
          <Link
            href={item.certificateUrl}
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-opacity hover:opacity-80 sm:text-[14px]"
          >
            <Award className="h-4 w-4 shrink-0" aria-hidden />
            Certificate Link
          </Link>
        ) : null}
      </div>
    </article>
  );
}

interface AccountSettingsCoursesCardProps {
  items: StudentAccountSettingsCourseItem[];
  className?: string;
}

export function AccountSettingsCoursesCard({
  items,
  className,
}: AccountSettingsCoursesCardProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, index) => (
        <div key={item.id}>
          <AccountSettingsCourseItemRow item={item} />
          {index < items.length - 1 ? (
            <div className="mt-6 border-b border-[#f0ece9]" aria-hidden />
          ) : null}
        </div>
      ))}
    </div>
  );
}
