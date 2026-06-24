"use client";

import { useState } from "react";
import { CircleDollarSign, Infinity, Upload } from "lucide-react";
import { AdminCourseCreationMetaInfoIconCardsSection } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-icon-cards-section";
import { AdminCourseCreationMetaInfoRequirements } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-requirements";
import { ADMIN_COURSE_BENEFIT_TEMPLATES } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-templates";
import { createAdminCourseMetaId } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import type { AdminWorkshopMetaInfo } from "@/types/admin-workshop-creation.types";

interface AdminWorkshopCreationMetaInfoSectionProps {
  initialData: AdminWorkshopMetaInfo;
}

const BENEFIT_ICONS = [Infinity, CircleDollarSign, Upload];

export function AdminWorkshopCreationMetaInfoSection({
  initialData,
}: AdminWorkshopCreationMetaInfoSectionProps) {
  const [metaInfo, setMetaInfo] = useState<AdminWorkshopMetaInfo>(initialData);

  function handleToggleBenefitTemplate(templateId: string, selected: boolean) {
    if (selected) {
      const template = ADMIN_COURSE_BENEFIT_TEMPLATES.find((item) => item.id === templateId);

      if (!template || metaInfo.benefits.some((item) => item.templateId === templateId)) {
        return;
      }

      setMetaInfo((current) => ({
        ...current,
        benefits: [
          ...current.benefits,
          {
            id: createAdminCourseMetaId("benefit"),
            title: template.title,
            subtitle: template.subtitle,
            templateId: template.id,
          },
        ],
      }));
      return;
    }

    setMetaInfo((current) => ({
      ...current,
      benefits: current.benefits.filter((item) => item.templateId !== templateId),
    }));
  }

  const selectedBenefitTemplateIds = metaInfo.benefits
    .map((item) => item.templateId)
    .filter((templateId): templateId is string => Boolean(templateId));

  return (
    <div className="space-y-8">
      <AdminCourseCreationMetaInfoRequirements
        requirements={metaInfo.requirements}
        onChange={(requirements) => setMetaInfo((current) => ({ ...current, requirements }))}
        withTopBorder={false}
      />

      <AdminCourseCreationMetaInfoIconCardsSection
        sectionTitle="What You'll Get"
        items={metaInfo.benefits}
        icons={BENEFIT_ICONS}
        onChange={(benefits) => setMetaInfo((current) => ({ ...current, benefits }))}
        createIdPrefix="benefit"
        titleLabel="Title (Up to 30 letters)"
        subtitleLabel="Subtitle (Up to 100 letters)"
        titlePlaceholder="Life Time Access"
        subtitlePlaceholder="Write subtitle..."
        emptyTitlePlaceholder="Enter title here"
        emptySubtitlePlaceholder="Enter subtitle here"
        titleMaxLength={30}
        templateConfig={{
          templates: ADMIN_COURSE_BENEFIT_TEMPLATES,
          selectedTemplateIds: selectedBenefitTemplateIds,
          onToggleTemplate: handleToggleBenefitTemplate,
        }}
      />
    </div>
  );
}
