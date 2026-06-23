"use client";

import { CircleDollarSign, Infinity, Upload } from "lucide-react";
import { AdminCourseCreationMetaInfoIconCardsSection } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-icon-cards-section";
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
    />
  );
}
