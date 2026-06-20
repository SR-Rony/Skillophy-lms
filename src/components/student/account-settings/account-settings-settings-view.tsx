"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { StudentAccountSettingsPreferencesData } from "@/types/student-account-settings.types";
import { AccountSettingsChangePasswordCard } from "./account-settings-change-password-card";
import { cn } from "@/utils";

interface AccountSettingsSettingsCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function AccountSettingsSettingsCheckbox({
  id,
  label,
  checked,
  onChange,
}: AccountSettingsSettingsCheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-3">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border-2 transition-colors",
          checked ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#c4c4c4] bg-white"
        )}
      >
        {checked ? <Check className="h-2.5 w-2.5 stroke-[3] text-white" aria-hidden /> : null}
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="sr-only"
      />
      <span className="text-[14px] font-medium text-[#1a1a1a] sm:text-[15px]">{label}</span>
    </label>
  );
}

interface AccountSettingsSettingsViewProps {
  data: StudentAccountSettingsPreferencesData;
}

export function AccountSettingsSettingsView({ data }: AccountSettingsSettingsViewProps) {
  const [emailNotification, setEmailNotification] = useState(data.notification.emailNotification);
  const [pushNotification, setPushNotification] = useState(data.notification.pushNotification);

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
      <AccountSettingsChangePasswordCard data={data.password} />

      <section className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7">
        <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Notification</h2>
        <p className="mt-3 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
          {data.notification.description}
        </p>

        <div className="mt-6 space-y-4 sm:space-y-5">
          <AccountSettingsSettingsCheckbox
            id="email-notification"
            label="Allow email notification"
            checked={emailNotification}
            onChange={setEmailNotification}
          />
          <AccountSettingsSettingsCheckbox
            id="push-notification"
            label="Allow push notification"
            checked={pushNotification}
            onChange={setPushNotification}
          />
        </div>
      </section>
    </div>
  );
}
