"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type {
  StudentAccountSettingsProfileInfo,
  StudentAccountSettingsSelectOption,
} from "@/types/student-account-settings.types";
import {
  AccountSettingsField,
  accountSettingsInputClassName,
  accountSettingsSelectClassName,
} from "./account-settings-field";
import { cn } from "@/utils";

interface AccountSettingsProfileInfoCardProps {
  profileInfo: StudentAccountSettingsProfileInfo;
  genderOptions: StudentAccountSettingsSelectOption[];
  countryOptions: StudentAccountSettingsSelectOption[];
  className?: string;
}

export function AccountSettingsProfileInfoCard({
  profileInfo,
  genderOptions,
  countryOptions,
  className,
}: AccountSettingsProfileInfoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(profileInfo);

  function handleChange(field: keyof StudentAccountSettingsProfileInfo, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Profile Info</h2>
        <button
          type="button"
          onClick={() => setIsEditing((current) => !current)}
          className="shrink-0 text-[13px] font-semibold text-[#1a1a1a] underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-[14px]"
        >
          {isEditing ? "Save Info" : "Edit Info"}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
        <AccountSettingsField label="Full Name">
          <input
            type="text"
            value={form.fullName}
            onChange={(event) => handleChange("fullName", event.target.value)}
            placeholder="Enter your full name"
            disabled={!isEditing}
            className={accountSettingsInputClassName}
          />
        </AccountSettingsField>

        <AccountSettingsField label="Certificate Name">
          <input
            type="text"
            value={form.certificateName}
            onChange={(event) => handleChange("certificateName", event.target.value)}
            placeholder="Enter your certificate name"
            disabled={!isEditing}
            className={accountSettingsInputClassName}
          />
        </AccountSettingsField>

        <AccountSettingsField label="Your Email">
          <input
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="Enter email address"
            disabled={!isEditing}
            className={accountSettingsInputClassName}
          />
        </AccountSettingsField>

        <AccountSettingsField label="Your Phone">
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            placeholder="Enter phone number"
            disabled={!isEditing}
            className={accountSettingsInputClassName}
          />
        </AccountSettingsField>

        <AccountSettingsField label="Gender">
          <div className="relative">
            <select
              value={form.gender}
              onChange={(event) => handleChange("gender", event.target.value)}
              disabled={!isEditing}
              className={accountSettingsSelectClassName}
            >
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#757575]"
              aria-hidden
            />
          </div>
        </AccountSettingsField>

        <AccountSettingsField label="Age">
          <input
            type="text"
            inputMode="numeric"
            value={form.age}
            onChange={(event) => handleChange("age", event.target.value)}
            placeholder="Enter your age"
            disabled={!isEditing}
            className={accountSettingsInputClassName}
          />
        </AccountSettingsField>

        <AccountSettingsField label="Address">
          <input
            type="text"
            value={form.address}
            onChange={(event) => handleChange("address", event.target.value)}
            placeholder="Write your address"
            disabled={!isEditing}
            className={accountSettingsInputClassName}
          />
        </AccountSettingsField>

        <AccountSettingsField label="Country">
          <div className="relative">
            <select
              value={form.country}
              onChange={(event) => handleChange("country", event.target.value)}
              disabled={!isEditing}
              className={accountSettingsSelectClassName}
            >
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#757575]"
              aria-hidden
            />
          </div>
        </AccountSettingsField>
      </div>
    </section>
  );
}
