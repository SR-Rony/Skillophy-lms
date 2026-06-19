import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type { StudentLiveAssignmentTask } from "@/types/student-live-assignment.types";

interface StudentLiveAssignmentTasksCardProps {
  assignment: StudentLiveAssignmentTask;
}

export function StudentLiveAssignmentTasksCard({ assignment }: StudentLiveAssignmentTasksCardProps) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
            Assignment Tasks
          </Heading>
          <p className="mt-1.5 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
            Submission Date:{" "}
            <span className="font-bold text-[#1a1a1a]">{assignment.submissionDate}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
          {assignment.previousAssignment ? (
            <Link
              href={assignment.previousAssignment.href}
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Previous
            </Link>
          ) : (
            <span className="text-[#c4c4c4]">Previous</span>
          )}
          {assignment.nextAssignment ? (
            <Link
              href={assignment.nextAssignment.href}
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              Next
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : (
            <span className="text-[#c4c4c4]">Next</span>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
        {assignment.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">{section.title}</h2>
            <ul className="mt-3 space-y-2.5">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[14px] leading-[1.7] text-[#4a4a4a] sm:text-[15px]"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a1a1a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
