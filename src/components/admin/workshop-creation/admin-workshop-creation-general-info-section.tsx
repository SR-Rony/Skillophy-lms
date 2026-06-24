"use client";

import { ChevronDown } from "lucide-react";
import { AdminCourseCreationContentEditor } from "@/components/admin/course-creation/admin-course-creation-content-editor";
import { AdminCourseCreationTeacherSelect } from "@/components/admin/course-creation/admin-course-creation-teacher-select";
import { AdminCourseCreationVideoPreview } from "@/components/admin/course-creation/admin-course-creation-video-preview";
import {
  AccountSettingsField,
  accountSettingsInputClassName,
  accountSettingsSelectClassName,
  accountSettingsTextareaClassName,
} from "@/components/student/account-settings/account-settings-field";
import type {
  AdminWorkshopCreationFormOptions,
  AdminWorkshopCreationGeneralInfo,
} from "@/types/admin-workshop-creation.types";
import { cn } from "@/utils";

interface AdminWorkshopCreationGeneralInfoSectionProps {
  form: AdminWorkshopCreationGeneralInfo;
  formOptions: AdminWorkshopCreationFormOptions;
  isEditing: boolean;
  isCreateMode?: boolean;
  onChange: <K extends keyof AdminWorkshopCreationGeneralInfo>(
    field: K,
    value: AdminWorkshopCreationGeneralInfo[K]
  ) => void;
}

function getOptionLabel(
  options: { value: string; label: string }[],
  value: string
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function AdminWorkshopCreationGeneralInfoSection({
  form,
  formOptions,
  isEditing,
  isCreateMode = false,
  onChange,
}: AdminWorkshopCreationGeneralInfoSectionProps) {
  const showEmptyValue = (value: string) => isCreateMode && !value.trim();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">General Info</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="space-y-5">
            <AccountSettingsField label="Workshop Title">
              {isEditing ? (
                <input
                  type="text"
                  value={form.workshopTitle}
                  onChange={(event) => onChange("workshopTitle", event.target.value)}
                  placeholder="Enter workshop title"
                  className={accountSettingsInputClassName}
                />
              ) : (
                <p className={cn(accountSettingsInputClassName, "flex items-center")}>
                  {form.workshopTitle}
                </p>
              )}
            </AccountSettingsField>

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
                <p className="rounded-xl bg-[#f5f5f5] px-4 py-3.5 text-[14px] leading-relaxed text-[#1a1a1a] sm:text-[15px]">
                  {form.courseSummary || (isCreateMode ? "Write your course summary.." : "")}
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
                <p className={cn(accountSettingsInputClassName, "flex items-center truncate")}>
                  {form.introVideoUrl ||
                    (isCreateMode ? "Enter course intro video url" : form.introVideoUrl)}
                </p>
              )}
            </AccountSettingsField>

            <AdminCourseCreationVideoPreview
              videoUrl={form.introVideoUrl}
              className="aspect-[16/10] w-full"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <div>
            <h2 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">Course Content</h2>
            <div className="mt-5">
              <AdminCourseCreationContentEditor
                label="What You'll Learn"
                value={form.whatYouWillLearn}
                placeholder="Write learner's will learn from this course..."
                isEditing={isEditing}
                onChange={(value) => onChange("whatYouWillLearn", value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <h2 className="shrink-0 text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">
                Course Teacher
              </h2>
              <div className="h-px flex-1 bg-[#ebe8e6]" aria-hidden />
            </div>
            <div className="mt-5">
              <AdminCourseCreationTeacherSelect
                label="Select Main Teacher"
                placeholder="Select course main teacher.."
                teachers={formOptions.teachers}
                selectedIds={form.mainTeacherIds}
                maxTeachers={formOptions.maxTeachersPerRole}
                isEditing={isEditing}
                onChange={(ids) => onChange("mainTeacherIds", ids)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
