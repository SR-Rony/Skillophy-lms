"use client";

import { ModulePlaceholder } from "@/components/shared/module-placeholder";

interface TeacherCourseDetailsTabPlaceholderProps {
  feature: string;
  title: string;
  description: string;
}

export function TeacherCourseDetailsTabPlaceholder({
  feature,
  title,
  description,
}: TeacherCourseDetailsTabPlaceholderProps) {
  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <ModulePlaceholder title={title} description={description} feature={feature} />
      </div>
    </section>
  );
}
