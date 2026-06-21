"use client";

import Link from "next/link";
import { Heading } from "@/components/shared/heading";
import { Container } from "@/components/shared";
import { AssignmentProgressTable } from "@/components/shared/assignment-progress-table";
import { StudentDashboardPageHero } from "@/components/student/student-dashboard-page-hero";
import type { StudentAssignmentsCourseGroup } from "@/data/mock/student-assignments.mock";
import { ROUTES } from "@/constants";

interface StudentAssignmentsPageProps {
  courseGroups: StudentAssignmentsCourseGroup[];
}

export function StudentAssignmentsPage({ courseGroups }: StudentAssignmentsPageProps) {
  return (
    <>
      <StudentDashboardPageHero
        title="Assignments"
        description="View and submit assignments across your enrolled courses."
      />

      <Container className="space-y-8 py-8 md:space-y-10 md:py-10">
        {courseGroups.length === 0 ? (
          <AssignmentProgressTable rows={[]} />
        ) : (
          courseGroups.map((group) => (
            <section key={group.slug} className="space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                    {group.courseType === "live" ? "Live Course" : "Recorded Course"}
                  </p>
                  <Heading as="h2" variant="dashboard-section" className="mt-1 text-[20px] sm:text-[22px]">
                    {group.title}
                  </Heading>
                </div>
                <Link
                  href={ROUTES.student.courseDetails(group.slug)}
                  className="text-[13px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-[14px]"
                >
                  Go to course
                </Link>
              </div>

              <AssignmentProgressTable rows={group.assignments} />
            </section>
          ))
        )}
      </Container>
    </>
  );
}
