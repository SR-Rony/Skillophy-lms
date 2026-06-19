"use client";

import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";

interface StudentCourseDetailsTabPlaceholderProps {
  course: StudentCourseDetailsData;
  feature: string;
  title: string;
  description: string;
}

export function StudentCourseDetailsTabPlaceholder({
  feature,
  title,
  description,
}: StudentCourseDetailsTabPlaceholderProps) {
  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <Container className="px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <ModulePlaceholder title={title} description={description} feature={feature} />
      </Container>
    </section>
  );
}
