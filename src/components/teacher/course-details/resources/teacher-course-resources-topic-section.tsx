"use client";

import { TeacherCourseResourceCard } from "./teacher-course-resource-card";
import type {
  TeacherCourseResourceItem,
  TeacherCourseResourceTopicGroup,
} from "@/types/teacher-course-details.types";

interface TeacherCourseResourcesTopicSectionProps {
  group: TeacherCourseResourceTopicGroup;
  onEditMaterial?: (material: TeacherCourseResourceItem) => void;
  onDeleteMaterial?: (material: TeacherCourseResourceItem) => void;
}

export function TeacherCourseResourcesTopicSection({
  group,
  onEditMaterial,
  onDeleteMaterial,
}: TeacherCourseResourcesTopicSectionProps) {
  const materialCountLabel =
    group.materials.length === 1 ? "1 material" : `${group.materials.length} materials`;

  const heading = group.topicLabel.endsWith(".")
    ? `${group.topicLabel} ${group.topicTitle}`
    : `${group.topicLabel}: ${group.topicTitle}`;

  return (
    <section className="space-y-3 sm:space-y-4">
      <div className="flex flex-wrap items-center gap-2.5">
        <h2 className="text-[14px] font-semibold text-[#9ca3af] sm:text-[15px]">{heading}</h2>
        <span className="inline-flex rounded-full bg-[#f5efe8] px-2.5 py-1 text-[11px] font-bold text-[#6f6562] sm:text-[12px]">
          {materialCountLabel}
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {group.materials.map((material) => (
          <TeacherCourseResourceCard
            key={material.id}
            material={material}
            onEdit={onEditMaterial}
            onDelete={onDeleteMaterial}
          />
        ))}
      </div>
    </section>
  );
}
