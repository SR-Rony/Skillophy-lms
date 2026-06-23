"use client";

import { CircleDollarSign, Infinity, Upload } from "lucide-react";
import { AdminCourseCreationMetaInfoIconCardsSection } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-icon-cards-section";
import { ADMIN_COURSE_BENEFIT_TEMPLATES } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-templates";
import { createAdminCourseMetaId } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import type { AdminCourseMetaBenefit } from "@/types/admin-course-creation.types";

interface AdminCourseCreationMetaInfoBenefitsProps {
  benefits: AdminCourseMetaBenefit[];
  onChange: (benefits: AdminCourseMetaBenefit[]) => void;
}

const BENEFIT_ICONS = [Infinity, CircleDollarSign, Upload];

export function AdminCourseCreationMetaInfoBenefits({
  benefits,
  onChange,
}: AdminCourseCreationMetaInfoBenefitsProps) {
  function handleToggleTemplate(templateId: string, selected: boolean) {
    if (selected) {
      const template = ADMIN_COURSE_BENEFIT_TEMPLATES.find((item) => item.id === templateId);

      if (!template || benefits.some((item) => item.templateId === templateId)) {
        return;
      }

      onChange([
        ...benefits,
        {
          id: createAdminCourseMetaId("benefit"),
          title: template.title,
          subtitle: template.subtitle,
          templateId: template.id,
        },
      ]);
      return;
    }

    onChange(benefits.filter((item) => item.templateId !== templateId));
  }

  const selectedTemplateIds = benefits
    .map((item) => item.templateId)
    .filter((templateId): templateId is string => Boolean(templateId));

  return (
    <AdminCourseCreationMetaInfoIconCardsSection
      sectionTitle="What You'll Get"
      items={benefits}
      icons={BENEFIT_ICONS}
      onChange={onChange}
      createIdPrefix="benefit"
      titleLabel="Title"
      subtitleLabel="Subtitle"
      titlePlaceholder="Life Time Access"
      subtitlePlaceholder="Write subtitle..."
      emptyTitlePlaceholder="Enter title here"
      emptySubtitlePlaceholder="Enter subtitle here"
      templateConfig={{
        templates: ADMIN_COURSE_BENEFIT_TEMPLATES,
        selectedTemplateIds,
        onToggleTemplate: handleToggleTemplate,
      }}
    />
  );
}
