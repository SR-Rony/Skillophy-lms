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
  accountSettingsTextareaClassName,
} from "./account-settings-field";
import { cn } from "@/utils";

interface AccountSettingsProfileInfoCardProps {
  profileInfo: StudentAccountSettingsProfileInfo;
  genderOptions: StudentAccountSettingsSelectOption[];
  countryOptions: StudentAccountSettingsSelectOption[];
  isEditing: boolean;
  onEditingChange: (isEditing: boolean) => void;
  className?: string;
}

export function AccountSettingsProfileInfoCard({
  profileInfo,
  genderOptions,
  countryOptions,
  isEditing,
  onEditingChange,
  className,
}: AccountSettingsProfileInfoCardProps) {
  const [form, setForm] = useState(profileInfo);
  const [savedForm, setSavedForm] = useState(profileInfo);

  function handleChange(field: keyof StudentAccountSettingsProfileInfo, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleEdit() {
    setForm(savedForm);
    onEditingChange(true);
  }

  function handleCancel() {
    setForm(savedForm);
    onEditingChange(false);
  }

  function handleSave() {
    setSavedForm(form);
    onEditingChange(false);
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

        {isEditing ? (
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex min-w-[88px] items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] sm:min-w-[96px] sm:px-5 sm:text-[14px]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex min-w-[96px] items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:min-w-[104px] sm:px-5 sm:text-[14px]"
            >
              Save Info
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="shrink-0 text-[13px] font-semibold text-[#1a1a1a] underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-[14px]"
          >
            Edit Info
          </button>
        )}
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

        <AccountSettingsField label="Address" className="sm:col-span-2">
          <textarea
            value={form.address}
            onChange={(event) => handleChange("address", event.target.value)}
            placeholder="Write your address"
            disabled={!isEditing}
            rows={3}
            className={cn(
              accountSettingsTextareaClassName,
              "min-h-[88px] sm:min-h-[96px]"
            )}
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
