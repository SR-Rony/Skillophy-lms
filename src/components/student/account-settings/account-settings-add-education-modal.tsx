"use client";

import { useEffect, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type {
  StudentAccountSettingsAddEducationFormValues,
  StudentAccountSettingsEducationFormOptions,
} from "@/types/student-account-settings.types";
import { AccountSettingsModalDropdown } from "./account-settings-modal-dropdown";
import { AccountSettingsModalSeamBackground } from "./account-settings-modal-seam-background";
import { cn } from "@/utils";

const emptyForm: StudentAccountSettingsAddEducationFormValues = {
  institution: "",
  degree: "",
  startMonth: "",
  startYear: "",
  graduationMonth: "",
  graduationYear: "",
  currentlyStudying: false,
  description: "",
};

interface AccountSettingsAddEducationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formOptions: StudentAccountSettingsEducationFormOptions;
  onSave: (values: StudentAccountSettingsAddEducationFormValues) => void;
}

export function AccountSettingsAddEducationModal({
  open,
  onOpenChange,
  formOptions,
  onSave,
}: AccountSettingsAddEducationModalProps) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!open) {
      setForm(emptyForm);
    }
  }, [open]);

  function handleChange<K extends keyof StudentAccountSettingsAddEducationFormValues>(
    field: K,
    value: StudentAccountSettingsAddEducationFormValues[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(form);
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] max-w-[640px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none">
          <div className="relative overflow-hidden border-b border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
            <AccountSettingsModalSeamBackground />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Add New Educational Information
                </Dialog.Title>
                <Dialog.Description className="mt-2 max-w-[540px] text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  Add your educational background to let employers know where you studied. All fields
                  are optional.
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="scrollbar-hide space-y-5 overflow-y-auto px-5 py-5 sm:space-y-6 sm:px-7 sm:py-6">
              <AccountSettingsModalDropdown
                label="Name of Institution"
                value={form.institution}
                placeholder="Select institution"
                options={formOptions.institutions}
                onChange={(value) => handleChange("institution", value)}
              />

              <AccountSettingsModalDropdown
                label="Degree"
                value={form.degree}
                placeholder="Select degree"
                options={formOptions.degrees}
                onChange={(value) => handleChange("degree", value)}
                listClassName="max-h-[240px]"
              />

              <div>
                <p className="text-[14px] font-semibold text-[#1a1a1a]">Start date</p>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <AccountSettingsModalDropdown
                    label="Month"
                    value={form.startMonth}
                    placeholder="Select month"
                    options={formOptions.months}
                    onChange={(value) => handleChange("startMonth", value)}
                  />
                  <AccountSettingsModalDropdown
                    label="Year"
                    value={form.startYear}
                    placeholder="Select year"
                    options={formOptions.years}
                    onChange={(value) => handleChange("startYear", value)}
                  />
                </div>
              </div>

              <div>
                <p className="text-[14px] font-semibold text-[#1a1a1a]">
                  Graduation date or expected graduation date
                </p>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <AccountSettingsModalDropdown
                    label="Month"
                    value={form.graduationMonth}
                    placeholder="Select month"
                    options={formOptions.months}
                    onChange={(value) => handleChange("graduationMonth", value)}
                    disabled={form.currentlyStudying}
                  />
                  <AccountSettingsModalDropdown
                    label="Year"
                    value={form.graduationYear}
                    placeholder="Select year"
                    options={formOptions.years}
                    onChange={(value) => handleChange("graduationYear", value)}
                    disabled={form.currentlyStudying}
                  />
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={form.currentlyStudying}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    setForm((current) => ({
                      ...current,
                      currentlyStudying: checked,
                      graduationMonth: checked ? "" : current.graduationMonth,
                      graduationYear: checked ? "" : current.graduationYear,
                    }));
                  }}
                  className="h-4 w-4 rounded border-[#d1d5db] text-primary focus:ring-primary/20"
                />
                <span className="text-[14px] font-medium text-[#1a1a1a]">
                  I currently study here
                </span>
              </label>

              <div>
                <label className="mb-2 block text-[14px] font-semibold text-[#1a1a1a]">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(event) => handleChange("description", event.target.value)}
                  placeholder="Add a simple description of your responsibilities and achievements in this role."
                  rows={5}
                  className="min-h-[140px] w-full resize-none rounded-xl border border-[#ebe8e6] bg-white px-4 py-3.5 text-[14px] leading-relaxed text-[#1a1a1a] placeholder:text-[#b0b7c3] focus:outline-none focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </div>

            <div className="border-t border-[#f0ece9] px-5 py-4 sm:px-7 sm:py-5">
              <button
                type="submit"
                className={cn(
                  "inline-flex min-w-[160px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                )}
              >
                Save Information
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function formatEducationTitle(
  values: StudentAccountSettingsAddEducationFormValues,
  formOptions: StudentAccountSettingsEducationFormOptions
) {
  const degree =
    formOptions.degrees.find((option) => option.value === values.degree)?.label ?? values.degree;
  const institution =
    formOptions.institutions.find((option) => option.value === values.institution)?.label ??
    values.institution;

  if (degree && institution) {
    return `${degree} at ${institution.replace(/\s*\([^)]*\)\s*/g, "").trim() || institution}`;
  }

  return degree || institution || "New Education";
}

function formatEducationDateRange(
  values: StudentAccountSettingsAddEducationFormValues,
  formOptions: StudentAccountSettingsEducationFormOptions
) {
  const startMonth =
    formOptions.months.find((option) => option.value === values.startMonth)?.label ??
    values.startMonth;
  const endMonth =
    formOptions.months.find((option) => option.value === values.graduationMonth)?.label ??
    values.graduationMonth;

  const start =
    startMonth && values.startYear ? `${startMonth} ${values.startYear}` : startMonth || values.startYear;
  const end = values.currentlyStudying
    ? "Present"
    : endMonth && values.graduationYear
      ? `${endMonth} ${values.graduationYear}`
      : endMonth || values.graduationYear;

  if (start && end) {
    return `${start} - ${end}`;
  }

  return start || end || "Date not specified";
}

export function buildEducationItemFromForm(
  values: StudentAccountSettingsAddEducationFormValues,
  formOptions: StudentAccountSettingsEducationFormOptions
) {
  return {
    id: `education-${Date.now()}`,
    title: formatEducationTitle(values, formOptions),
    dateRange: formatEducationDateRange(values, formOptions),
    description: values.description,
  };
}
