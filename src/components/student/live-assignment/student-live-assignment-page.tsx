"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { StudentCourseLiveCurriculum } from "@/components/student/course-details/student-course-live-curriculum";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type { StudentLiveAssignmentTask } from "@/types/student-live-assignment.types";
import { cn } from "@/utils";

interface StudentLiveAssignmentPageProps {
  course: StudentCourseDetailsData;
  assignment: StudentLiveAssignmentTask;
}

function AssignmentTasksCard({ assignment }: { assignment: StudentLiveAssignmentTask }) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
            Assignment Tasks
          </Heading>
          <p className="mt-1.5 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
            Submission Date: {assignment.submissionDate}
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

function YourSubmissionCard({ assignment }: { assignment: StudentLiveAssignmentTask }) {
  const [submissionUrl, setSubmissionUrl] = useState(assignment.placeholderUrl ?? "");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionUrl.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-2 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Heading as="h2" variant="dashboard-section" className="text-[20px] sm:text-[22px]">
          Your Submission
        </Heading>
        <p className="text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
          Last Date: {assignment.lastSubmissionDate}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 sm:mt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="url"
            value={submissionUrl}
            onChange={(event) => setSubmissionUrl(event.target.value)}
            placeholder="Paste your Figma, Google Drive, or project link here"
            className={cn(
              "min-w-0 flex-1 rounded-xl border border-[#e5e0dd] bg-white px-4 py-3.5 text-[14px] text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-primary focus:ring-2 focus:ring-primary/15 sm:text-[15px]"
            )}
            required
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:text-[15px]"
          >
            Submit
          </button>
        </div>

        {submitted && (
          <p className="mt-3 text-[13px] font-medium text-[#16a34a] sm:text-[14px]">
            Assignment submitted successfully.
          </p>
        )}
      </form>
    </div>
  );
}

export function StudentLiveAssignmentPage({
  course,
  assignment,
}: StudentLiveAssignmentPageProps) {
  return (
    <div className="bg-white pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_400px]">
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <AssignmentTasksCard assignment={assignment} />
            <YourSubmissionCard assignment={assignment} />
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <StudentCourseLiveCurriculum
              modules={course.curriculum}
              courseSlug={course.slug}
              activeLessonId={assignment.linkedLessonId}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
