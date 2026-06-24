"use client";

import { ChevronDown } from "lucide-react";
import { AdminCourseCreationVideoPreview } from "@/components/admin/course-creation/admin-course-creation-video-preview";
import {
  AccountSettingsField,
  accountSettingsInputClassName,
  accountSettingsSelectClassName,
  accountSettingsTextareaClassName,
} from "@/components/student/account-settings/account-settings-field";
import type {
  AdminCourseCreationFormOptions,
  AdminCourseCreationGeneralInfo,
} from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationLiveGeneralInfoGridProps {
  form: AdminCourseCreationGeneralInfo;
  formOptions: AdminCourseCreationFormOptions;
  isEditing: boolean;
  isCreateMode: boolean;
  onChange: <K extends keyof AdminCourseCreationGeneralInfo>(
    field: K,
    value: AdminCourseCreationGeneralInfo[K]
  ) => void;
}

function getOptionLabel(
  options: { value: string; label: string }[],
  value: string
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function AdminCourseCreationLiveGeneralInfoGrid({
  form,
  formOptions,
  isEditing,
  isCreateMode,
  onChange,
}: AdminCourseCreationLiveGeneralInfoGridProps) {
  const showEmptyValue = (value: string) => isCreateMode && !value.trim();

  return (
    <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
      <div className="space-y-5">
        <AccountSettingsField label="Course Title">
          {isEditing ? (
            <input
              type="text"
              value={form.courseTitle}
              onChange={(event) => onChange("courseTitle", event.target.value)}
              placeholder="Enter course title"
              className={accountSettingsInputClassName}
            />
          ) : (
            <p className={cn(accountSettingsInputClassName, "flex items-center")}>{form.courseTitle}</p>
          )}
        </AccountSettingsField>

        <AccountSettingsField label="Course Level">
          {isEditing ? (
            <div className="relative">
              <select
                value={form.courseLevel}
                onChange={(event) => onChange("courseLevel", event.target.value)}
                className={accountSettingsSelectClassName}
              >
                <option value="" disabled hidden>
                  Select course level
                </option>
                {formOptions.courseLevels.map((option) => (
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
          ) : (
            <p className={cn(accountSettingsInputClassName, "flex items-center")}>
              {showEmptyValue(form.courseLevel)
                ? "Select course level"
                : getOptionLabel(formOptions.courseLevels, form.courseLevel)}
            </p>
          )}
        </AccountSettingsField>

        <AccountSettingsField label="Course Duration">
          {isEditing ? (
            <div className="relative">
              <select
                value={form.courseDuration}
                onChange={(event) => onChange("courseDuration", event.target.value)}
                className={accountSettingsSelectClassName}
              >
                <option value="" disabled hidden>
                  ex. 40 hours
                </option>
                {formOptions.courseDurations.map((option) => (
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
          ) : (
            <p className={cn(accountSettingsInputClassName, "flex items-center")}>
              {showEmptyValue(form.courseDuration)
                ? "ex. 40 hours"
                : getOptionLabel(formOptions.courseDurations, form.courseDuration)}
            </p>
          )}
        </AccountSettingsField>

        <AccountSettingsField label="Course Summary">
          {isEditing ? (
            <>
              <textarea
                value={form.courseSummary}
                onChange={(event) => onChange("courseSummary", event.target.value)}
                placeholder="Write your course summary.."
                className={accountSettingsTextareaClassName}
              />
              <p className="mt-2 text-[12px] text-[#9ca3af] sm:text-[13px]">
                Write course summary in 200 words
              </p>
            </>
          ) : (
            <p className="rounded-xl bg-[#f5f5f5] px-4 py-3.5 text-[14px] leading-relaxed text-[#9ca3af] sm:text-[15px]">
              {form.courseSummary || "Write your course summary.."}
            </p>
          )}
        </AccountSettingsField>
      </div>

      <div className="space-y-5">
        <AccountSettingsField label="Course Intro Video">
          {isEditing ? (
            <input
              type="url"
              value={form.introVideoUrl}
              onChange={(event) => onChange("introVideoUrl", event.target.value)}
              placeholder="Enter course intro video url"
              className={accountSettingsInputClassName}
            />
          ) : (
            <p
              className={cn(
                accountSettingsInputClassName,
                "flex items-center truncate text-[#9ca3af]"
              )}
            >
              {form.introVideoUrl || "Enter course intro video url"}
            </p>
          )}
        </AccountSettingsField>

        <AdminCourseCreationVideoPreview videoUrl={form.introVideoUrl} className="aspect-[16/10] w-full" />

        <AccountSettingsField label="Course Category">
          {isEditing ? (
            <div className="relative">
              <select
                value={form.courseCategory}
                onChange={(event) => onChange("courseCategory", event.target.value)}
                className={accountSettingsSelectClassName}
              >
                <option value="" disabled hidden>
                  Select course category
                </option>
                {formOptions.courseCategories.map((option) => (
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
          ) : (
            <p className={cn(accountSettingsInputClassName, "flex items-center")}>
              {showEmptyValue(form.courseCategory)
                ? "Select course category"
                : getOptionLabel(formOptions.courseCategories, form.courseCategory)}
            </p>
          )}
        </AccountSettingsField>

        <AccountSettingsField label="Course Price (৳)">
          {isEditing ? (
            <input
              type="text"
              inputMode="numeric"
              value={form.coursePrice}
              onChange={(event) => onChange("coursePrice", event.target.value)}
              placeholder="ex. 4100"
              className={accountSettingsInputClassName}
            />
          ) : (
            <p className={cn(accountSettingsInputClassName, "flex items-center")}>{form.coursePrice}</p>
          )}
        </AccountSettingsField>
      </div>
    </div>
  );
}
