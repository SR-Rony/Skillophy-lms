"use client";

import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { AssignmentProgressTable } from "@/components/shared/assignment-progress-table";
import { Container } from "@/components/shared";

interface StudentCourseAssignmentTabProps {
  course: StudentCourseDetailsData;
}

export function StudentCourseAssignmentTab({ course }: StudentCourseAssignmentTabProps) {
  const assignments = course.assignments ?? [];

  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <Container className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <AssignmentProgressTable rows={assignments} />
      </Container>
    </section>
  );
}
