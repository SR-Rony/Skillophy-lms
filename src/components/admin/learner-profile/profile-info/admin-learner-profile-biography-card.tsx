"use client";

import { useState } from "react";
import {
  AccountSettingsField,
  accountSettingsTextareaClassName,
} from "@/components/student/account-settings/account-settings-field";
import type { AdminLearnerProfileBiography } from "@/types/admin-learner-profile.types";
import { cn } from "@/utils";

interface AdminLearnerProfileBiographyCardProps {
  biography: AdminLearnerProfileBiography;
  className?: string;
}

export function AdminLearnerProfileBiographyCard({
  biography,
  className,
}: AdminLearnerProfileBiographyCardProps) {
  const [description, setDescription] = useState(biography.description);

  return (
    <section
      className={cn(
        "flex h-full flex-col rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7",
        className
      )}
    >
      <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Biography</h2>

      <div className="mt-6 flex flex-1 flex-col">
        <AccountSettingsField label="Description" className="flex flex-1 flex-col">
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Write your bio..."
            readOnly
            className={cn(accountSettingsTextareaClassName, "min-h-[280px] flex-1 sm:min-h-[320px]")}
          />
        </AccountSettingsField>
      </div>
    </section>
  );
}
