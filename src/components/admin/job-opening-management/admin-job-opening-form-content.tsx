"use client";

import { ChevronDown } from "lucide-react";
import { AdminCourseCreationActiveStatus } from "@/components/admin/course-creation/admin-course-creation-active-status";
import { AdminCourseCreationContentEditor } from "@/components/admin/course-creation/admin-course-creation-content-editor";
import { AdminCourseCreationLiveClassSchedulePicker } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-live-class-schedule-picker";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type {
  AdminJobOpeningForm,
  AdminJobOpeningFormOptions,
} from "@/types/admin-job-opening-management.types";
import { cn } from "@/utils";

interface AdminJobOpeningFormContentProps {
  form: AdminJobOpeningForm;
  formOptions: AdminJobOpeningFormOptions;
  onChange: (updates: Partial<AdminJobOpeningForm>) => void;
}

function AdminJobOpeningSelectField({
  label,
  value,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(adminCourseAddLessonInputClassName, "appearance-none pr-10")}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
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
    </div>
  );
}

export function AdminJobOpeningFormContent({
  form,
  formOptions,
  onChange,
}: AdminJobOpeningFormContentProps) {
  return (
    <div className="space-y-5 sm:space-y-6">
      <AdminCourseCreationActiveStatus
        isActive={form.isActive}
        isEditing
        onChange={(isActive) => onChange({ isActive })}
      />

      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Job Title</label>
        <input
          type="text"
          value={form.title}
          onChange={(event) => onChange({ title: event.target.value })}
          placeholder="Visual Designer"
          className={adminCourseAddLessonInputClassName}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Salary</label>
          <input
            type="text"
            value={form.salary}
            onChange={(event) => onChange({ salary: event.target.value })}
            placeholder="Negotiable"
            className={adminCourseAddLessonInputClassName}
          />
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Vacancy</label>
          <input
            type="text"
            inputMode="numeric"
            value={form.vacancy}
            onChange={(event) => onChange({ vacancy: event.target.value })}
            placeholder="02"
            className={adminCourseAddLessonInputClassName}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <AdminJobOpeningSelectField
          label="Job Category"
          value={form.category}
          options={formOptions.categories}
          placeholder="Select job category"
          onChange={(category) => onChange({ category })}
        />

        <AdminJobOpeningSelectField
          label="Job Type"
          value={form.jobType}
          options={formOptions.jobTypes}
          placeholder="Select job type"
          onChange={(jobType) => onChange({ jobType })}
        />
      </div>

      <AdminCourseCreationLiveClassSchedulePicker
        label="Deadline"
        value={form.deadline}
        onChange={(deadline) => onChange({ deadline })}
      />

      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Apply Link</label>
        <input
          type="url"
          value={form.applyLink}
          onChange={(event) => onChange({ applyLink: event.target.value })}
          placeholder="https://www.linkedin.com/jobs/collections/recommended"
          className={adminCourseAddLessonInputClassName}
        />
      </div>

      <AdminCourseCreationContentEditor
        label="Job Description"
        value={form.description}
        placeholder="Write details about this job position..."
        isEditing
        onChange={(description) => onChange({ description })}
      />
    </div>
  );
}
