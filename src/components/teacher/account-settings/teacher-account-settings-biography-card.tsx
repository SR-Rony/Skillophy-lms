"use client";

import { useState } from "react";
import {
  AccountSettingsField,
  accountSettingsTextareaClassName,
} from "@/components/student/account-settings/account-settings-field";
import type { TeacherAccountSettingsBiography } from "@/types/teacher-account-settings.types";
import { cn } from "@/utils";

interface TeacherAccountSettingsBiographyCardProps {
  biography: TeacherAccountSettingsBiography;
  className?: string;
}

export function TeacherAccountSettingsBiographyCard({
  biography,
  className,
}: TeacherAccountSettingsBiographyCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(biography.description);
  const [savedDescription, setSavedDescription] = useState(biography.description);

  function handleEdit() {
    if (isEditing) {
      setSavedDescription(description);
      setIsEditing(false);
      return;
    }

    setDescription(savedDescription);
    setIsEditing(true);
  }

  function handleCancel() {
    setDescription(savedDescription);
    setIsEditing(false);
  }

  return (
    <section
      className={cn(
        "flex h-full flex-col rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Biography</h2>

        {isEditing ? (
          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] sm:text-[14px]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:text-[14px]"
            >
              Save Info
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:text-[14px]"
          >
            Edit Info
          </button>
        )}
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <AccountSettingsField label="Description" className="flex flex-1 flex-col">
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            disabled={!isEditing}
            className={cn(accountSettingsTextareaClassName, "min-h-[280px] flex-1 sm:min-h-[320px]")}
          />
        </AccountSettingsField>
      </div>
    </section>
  );
}
