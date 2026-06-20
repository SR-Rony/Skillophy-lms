"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { StudentAccountSettingsPasswordData } from "@/types/student-account-settings.types";
import { cn } from "@/utils";

interface AccountSettingsPasswordFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function AccountSettingsPasswordField({
  id,
  label,
  value,
  onChange,
  placeholder = "Enter password",
}: AccountSettingsPasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-[#1a1a1a]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="flex h-12 w-full rounded-xl border border-[#ebe8e6] bg-white px-4 pr-11 text-[14px] text-[#1a1a1a] placeholder:text-[#b0b7c3] focus:outline-none focus:ring-2 focus:ring-primary/15 sm:text-[15px]"
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-[#757575] transition-colors hover:text-[#1a1a1a]"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeOff className="h-4 w-4" aria-hidden />
          ) : (
            <Eye className="h-4 w-4" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}

interface AccountSettingsChangePasswordCardProps {
  data: StudentAccountSettingsPasswordData;
  className?: string;
}

export function AccountSettingsChangePasswordCard({
  data,
  className,
}: AccountSettingsChangePasswordCardProps) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7",
        className
      )}
    >
      <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Change Password</h2>
      <p className="mt-2 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
        {data.lastChangedLabel}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5 sm:space-y-6">
        <AccountSettingsPasswordField
          id="old-password"
          label="Old Password"
          value={oldPassword}
          onChange={setOldPassword}
        />
        <AccountSettingsPasswordField
          id="new-password"
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
        />
        <AccountSettingsPasswordField
          id="confirm-new-password"
          label="Confirm New Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        <button
          type="submit"
          className="inline-flex min-w-[160px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          Update Password
        </button>
      </form>
    </section>
  );
}
