"use client";

import { useState } from "react";
import type { StudentAccountSettingsBiography } from "@/types/student-account-settings.types";
import {
  AccountSettingsField,
  accountSettingsTextareaClassName,
} from "./account-settings-field";
import { cn } from "@/utils";

interface AccountSettingsBiographyCardProps {
  biography: StudentAccountSettingsBiography;
  className?: string;
}

export function AccountSettingsBiographyCard({
  biography,
  className,
}: AccountSettingsBiographyCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(biography.description);

  return (
    <section
      className={cn(
        "flex h-full flex-col rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Biography</h2>
        <button
          type="button"
          onClick={() => setIsEditing((current) => !current)}
          className="shrink-0 text-[13px] font-semibold text-[#1a1a1a] underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-[14px]"
        >
          {isEditing ? "Save Info" : "Edit Info"}
        </button>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <AccountSettingsField label="Description" className="flex flex-1 flex-col">
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Write your bio..."
            disabled={!isEditing}
            className={cn(accountSettingsTextareaClassName, "flex-1")}
          />
        </AccountSettingsField>
      </div>
    </section>
  );
}
