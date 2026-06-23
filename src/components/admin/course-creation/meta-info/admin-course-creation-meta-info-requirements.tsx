"use client";

import { Check, Globe, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AdminCourseCreationMetaInfoSectionHeader } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-section-header";
import { AdminCourseCreationMetaInfoTemplateActions } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-template-actions";
import { ADMIN_COURSE_REQUIREMENT_TEMPLATES } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-templates";
import {
  adminCourseMetaInfoInputClassName,
  adminCourseMetaInfoRemoveButtonClassName,
  adminCourseMetaInfoSeamCardClassName,
  createAdminCourseMetaId,
} from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import type { AdminCourseMetaRequirement } from "@/types/admin-course-creation.types";

interface AdminCourseCreationMetaInfoRequirementsProps {
  requirements: AdminCourseMetaRequirement[];
  onChange: (requirements: AdminCourseMetaRequirement[]) => void;
}

const REQUIREMENT_ICONS: LucideIcon[] = [Globe];

function AdminCourseCreationMetaInfoRequirementIcon({
  Icon,
}: {
  Icon: LucideIcon;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">Icon</label>
      <button
        type="button"
        className="relative flex h-[88px] w-[88px] items-center justify-center rounded-xl border border-dashed border-[#d1d5db] bg-[#fafafa] transition-colors hover:border-[#c4c4c4] sm:h-[92px] sm:w-[92px]"
        aria-label="Select requirement icon"
      >
        <Icon className="h-7 w-7 text-[#757575]" aria-hidden />
        <span className="absolute bottom-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#1a1a1a]">
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} aria-hidden />
        </span>
      </button>
    </div>
  );
}

export function AdminCourseCreationMetaInfoRequirements({
  requirements,
  onChange,
}: AdminCourseCreationMetaInfoRequirementsProps) {
  function handleUpdate(id: string, title: string) {
    onChange(requirements.map((item) => (item.id === id ? { ...item, title } : item)));
  }

  function handleDelete(id: string) {
    onChange(requirements.filter((item) => item.id !== id));
  }

  function handleAddBlank() {
    onChange([
      ...requirements,
      { id: createAdminCourseMetaId("requirement"), title: "" },
    ]);
  }

  function handleToggleTemplate(templateId: string, selected: boolean) {
    if (selected) {
      const template = ADMIN_COURSE_REQUIREMENT_TEMPLATES.find((item) => item.id === templateId);

      if (!template || requirements.some((item) => item.templateId === templateId)) {
        return;
      }

      onChange([
        ...requirements,
        {
          id: createAdminCourseMetaId("requirement"),
          title: template.title,
          templateId: template.id,
        },
      ]);
      return;
    }

    onChange(requirements.filter((item) => item.templateId !== templateId));
  }

  const selectedTemplateIds = requirements
    .map((item) => item.templateId)
    .filter((templateId): templateId is string => Boolean(templateId));

  return (
    <section className="space-y-4 border-t border-[#f0f0f0] pt-8">
      <AdminCourseCreationMetaInfoSectionHeader title="Requirements" />

      <div className="space-y-4">
        {requirements.map((requirement, index) => {
          const Icon = REQUIREMENT_ICONS[index % REQUIREMENT_ICONS.length];

          return (
            <article key={requirement.id} className={adminCourseMetaInfoSeamCardClassName}>
              <button
                type="button"
                onClick={() => handleDelete(requirement.id)}
                className={adminCourseMetaInfoRemoveButtonClassName}
                aria-label="Remove requirement"
              >
                <Minus className="h-3.5 w-3.5" aria-hidden />
              </button>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <AdminCourseCreationMetaInfoRequirementIcon Icon={Icon} />

                <div className="min-w-0 flex-1 space-y-2">
                  <label className="text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
                    Title (Up to 30 letters)
                  </label>
                  <input
                    type="text"
                    value={requirement.title}
                    onChange={(event) => handleUpdate(requirement.id, event.target.value)}
                    placeholder="Good Internet Connection"
                    maxLength={30}
                    className={adminCourseMetaInfoInputClassName}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <AdminCourseCreationMetaInfoTemplateActions
        templates={ADMIN_COURSE_REQUIREMENT_TEMPLATES}
        selectedTemplateIds={selectedTemplateIds}
        onToggleTemplate={handleToggleTemplate}
        onCreateFromBlank={handleAddBlank}
      />
    </section>
  );
}
