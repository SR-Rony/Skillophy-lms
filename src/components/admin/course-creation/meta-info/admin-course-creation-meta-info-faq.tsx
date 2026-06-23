"use client";

import { Minus } from "lucide-react";
import { AdminCourseCreationMetaInfoSectionHeader } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-section-header";
import { AdminCourseCreationMetaInfoTemplateActions } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-template-actions";
import { ADMIN_COURSE_FAQ_TEMPLATES } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-templates";
import {
  adminCourseMetaInfoInputClassName,
  adminCourseMetaInfoRemoveButtonClassName,
  adminCourseMetaInfoSeamCardClassName,
  adminCourseMetaInfoTextareaClassName,
  createAdminCourseMetaId,
} from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import type { AdminCourseMetaFaq } from "@/types/admin-course-creation.types";

interface AdminCourseCreationMetaInfoFaqProps {
  faqs: AdminCourseMetaFaq[];
  onChange: (faqs: AdminCourseMetaFaq[]) => void;
}

export function AdminCourseCreationMetaInfoFaq({
  faqs,
  onChange,
}: AdminCourseCreationMetaInfoFaqProps) {
  function handleUpdate(id: string, updates: Partial<AdminCourseMetaFaq>) {
    onChange(faqs.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  }

  function handleDelete(id: string) {
    onChange(faqs.filter((item) => item.id !== id));
  }

  function handleAddBlank() {
    onChange([
      ...faqs,
      { id: createAdminCourseMetaId("faq"), question: "", answer: "" },
    ]);
  }

  function handleToggleTemplate(templateId: string, selected: boolean) {
    if (selected) {
      const template = ADMIN_COURSE_FAQ_TEMPLATES.find((item) => item.id === templateId);

      if (!template || faqs.some((item) => item.templateId === templateId)) {
        return;
      }

      onChange([
        ...faqs,
        {
          id: createAdminCourseMetaId("faq"),
          question: template.question,
          answer: template.answer,
          templateId: template.id,
        },
      ]);
      return;
    }

    onChange(faqs.filter((item) => item.templateId !== templateId));
  }

  const selectedTemplateIds = faqs
    .map((item) => item.templateId)
    .filter((templateId): templateId is string => Boolean(templateId));

  return (
    <section className="space-y-4 border-t border-[#f0f0f0] pt-8">
      <AdminCourseCreationMetaInfoSectionHeader title="Frequently Asked Questions (FAQ)" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {faqs.map((faq) => (
          <article key={faq.id} className={adminCourseMetaInfoSeamCardClassName}>
            <button
              type="button"
              onClick={() => handleDelete(faq.id)}
              className={adminCourseMetaInfoRemoveButtonClassName}
              aria-label="Remove FAQ"
            >
              <Minus className="h-3.5 w-3.5" aria-hidden />
            </button>

            <div className="space-y-4 pr-6">
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">Question</label>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(event) => handleUpdate(faq.id, { question: event.target.value })}
                  placeholder="How can we buy this course?"
                  className={adminCourseMetaInfoInputClassName}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">Answer</label>
                <textarea
                  value={faq.answer}
                  onChange={(event) => handleUpdate(faq.id, { answer: event.target.value })}
                  placeholder="Write answer here..."
                  className={adminCourseMetaInfoTextareaClassName}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <AdminCourseCreationMetaInfoTemplateActions
        templates={ADMIN_COURSE_FAQ_TEMPLATES}
        selectedTemplateIds={selectedTemplateIds}
        onToggleTemplate={handleToggleTemplate}
        onCreateFromBlank={handleAddBlank}
      />
    </section>
  );
}
