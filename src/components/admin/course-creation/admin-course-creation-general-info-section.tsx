"use client";

import { ChevronDown } from "lucide-react";
import { AdminCourseCreationActiveStatus } from "@/components/admin/course-creation/admin-course-creation-active-status";
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
  AdminCourseCreationFormOptions,
  AdminCourseCreationGeneralInfo,
} from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationGeneralInfoSectionProps {
  form: AdminCourseCreationGeneralInfo;
  formOptions: AdminCourseCreationFormOptions;
  isEditing: boolean;
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

export function AdminCourseCreationGeneralInfoSection({
  form,
  formOptions,
  isEditing,
  onChange,
}: AdminCourseCreationGeneralInfoSectionProps) {
  return (
    <div className="space-y-8">
      <AdminCourseCreationActiveStatus
        isActive={form.isActive}
        isEditing={isEditing}
        onChange={(isActive) => onChange("isActive", isActive)}
      />

      <section>
        <h2 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">General Info</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="space-y-5">
            <AccountSettingsField label="Course Title">
              {isEditing ? (
                <input
                  type="text"
                  value={form.courseTitle}
                  onChange={(event) => onChange("courseTitle", event.target.value)}
                  className={accountSettingsInputClassName}
                />
              ) : (
                <p className={cn(accountSettingsInputClassName, "flex items-center")}>
                  {form.courseTitle}
                </p>
              )}
            </AccountSettingsField>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <AccountSettingsField label="Course Level">
                {isEditing ? (
                  <div className="relative">
                    <select
                      value={form.courseLevel}
                      onChange={(event) => onChange("courseLevel", event.target.value)}
                      className={accountSettingsSelectClassName}
                    >
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
                    {getOptionLabel(formOptions.courseLevels, form.courseLevel)}
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
                    {getOptionLabel(formOptions.courseCategories, form.courseCategory)}
                  </p>
                )}
              </AccountSettingsField>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <AccountSettingsField label="Course Duration">
                {isEditing ? (
                  <div className="relative">
                    <select
                      value={form.courseDuration}
                      onChange={(event) => onChange("courseDuration", event.target.value)}
                      className={accountSettingsSelectClassName}
                    >
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
                    {getOptionLabel(formOptions.courseDurations, form.courseDuration)}
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
                    className={accountSettingsInputClassName}
                  />
                ) : (
                  <p className={cn(accountSettingsInputClassName, "flex items-center")}>
                    {form.coursePrice}
                  </p>
                )}
              </AccountSettingsField>
            </div>

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
                  {form.courseSummary}
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
                  {form.introVideoUrl}
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
        <h2 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">Course Content</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <AdminCourseCreationContentEditor
            label="Course Overview"
            value={form.courseOverview}
            placeholder="Write details about this course..."
            isEditing={isEditing}
            onChange={(value) => onChange("courseOverview", value)}
          />
          <AdminCourseCreationContentEditor
            label="What You'll Learn"
            value={form.whatYouWillLearn}
            placeholder="Write learner's will learn from this course..."
            isEditing={isEditing}
            onChange={(value) => onChange("whatYouWillLearn", value)}
          />
        </div>
      </section>

      <section>
        <h2 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">Course Teacher</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <AdminCourseCreationTeacherSelect
            label="Select Main Teacher"
            teachers={formOptions.teachers}
            selectedIds={form.mainTeacherIds}
            maxTeachers={formOptions.maxTeachersPerRole}
            isEditing={isEditing}
            onChange={(ids) => onChange("mainTeacherIds", ids)}
          />
          <AdminCourseCreationTeacherSelect
            label="Select Support Teacher"
            teachers={formOptions.teachers}
            selectedIds={form.supportTeacherIds}
            maxTeachers={formOptions.maxTeachersPerRole}
            isEditing={isEditing}
            onChange={(ids) => onChange("supportTeacherIds", ids)}
          />
        </div>
      </section>
    </div>
  );
}
