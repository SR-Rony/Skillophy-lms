"use client";

import {
  adminCourseMetaInfoInputClassName,
  adminCourseMetaInfoTextareaClassName,
} from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import { AdminTemplateIconUpload } from "@/components/admin/template-management/admin-template-icon-upload";
import { AdminTemplateTypeSelector } from "@/components/admin/template-management/admin-template-type-selector";
import { createAdminTemplateFormForType } from "@/components/admin/template-management/admin-template-form.utils";
import type { AdminTemplateForm, AdminTemplateTypeId } from "@/types/admin-template-management.types";

interface AdminTemplateFormContentProps {
  form: AdminTemplateForm;
  onChange: (form: AdminTemplateForm) => void;
}

export function AdminTemplateFormContent({ form, onChange }: AdminTemplateFormContentProps) {
  function handleTypeChange(type: AdminTemplateTypeId) {
    onChange(createAdminTemplateFormForType(type));
  }

  function handleFieldChange(updates: Partial<AdminTemplateForm>) {
    onChange({ ...form, ...updates });
  }

  return (
    <div className="space-y-6">
      <AdminTemplateTypeSelector selectedType={form.type} onChange={handleTypeChange} />

      <div className="rounded-xl border border-[#ebe8e6] bg-[#fafafa] p-4 sm:p-5">
        {form.type === "faq" ? (
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
                Question
              </label>
              <input
                type="text"
                value={form.question}
                onChange={(event) => handleFieldChange({ question: event.target.value })}
                placeholder="Enter title here"
                className={adminCourseMetaInfoInputClassName}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
                Answer
              </label>
              <textarea
                value={form.answer}
                onChange={(event) => handleFieldChange({ answer: event.target.value })}
                placeholder="Enter subtitle here"
                className={adminCourseMetaInfoTextareaClassName}
              />
            </div>
          </div>
        ) : null}

        {form.type === "what-youll-get" ? (
          <div className="space-y-5">
            <AdminTemplateIconUpload
              fileName={form.iconFileName}
              onChange={(iconFileName) => handleFieldChange({ iconFileName })}
            />

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
                Title (Up to 20 letters)
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(event) => handleFieldChange({ title: event.target.value })}
                placeholder="Enter title here"
                maxLength={20}
                className={adminCourseMetaInfoInputClassName}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
                Subtitle (Up to 100 letters)
              </label>
              <textarea
                value={form.subtitle}
                onChange={(event) => handleFieldChange({ subtitle: event.target.value })}
                placeholder="Enter subtitle here"
                maxLength={100}
                className={adminCourseMetaInfoTextareaClassName}
              />
            </div>
          </div>
        ) : null}

        {form.type === "requirement" ? (
          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(event) => handleFieldChange({ title: event.target.value })}
              placeholder="Enter title here"
              className={adminCourseMetaInfoInputClassName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
