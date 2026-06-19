"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, FileCode, FileText } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { StudentCourseLiveCurriculum } from "@/components/student/course-details/student-course-live-curriculum";
import { StudentCourseLiveCurriculumMobileButton } from "@/components/student/course-details/student-course-live-overview";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type {
  StudentLiveResourceItem,
  StudentLiveResourceSession,
} from "@/types/student-live-resources.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentLiveResourcesPageProps {
  course: StudentCourseDetailsData;
  session: StudentLiveResourceSession;
}

function ResourceFileIcon({ fileType }: { fileType: StudentLiveResourceItem["fileType"] }) {
  const Icon = fileType === "svg" ? FileCode : FileText;

  return <Icon className="h-8 w-8 shrink-0 text-[#9ca3af] sm:h-9 sm:w-9" aria-hidden />;
}

function LearningMaterialRow({ resource }: { resource: StudentLiveResourceItem }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-[#ebe8e6] bg-white px-4 py-4 sm:px-5 sm:py-5">
      <ResourceFileIcon fileType={resource.fileType} />
      <p className="min-w-0 flex-1 text-[14px] font-medium leading-snug text-[#1a1a1a] sm:text-[15px]">
        {resource.title}
      </p>
      <a
        href={resource.downloadUrl ?? "#"}
        download
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-opacity hover:opacity-90 sm:h-11 sm:w-11"
        aria-label={`Download ${resource.title}`}
      >
        <Download className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden />
      </a>
    </div>
  );
}

function LearningMaterialsCard({ session }: { session: StudentLiveResourceSession }) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
            Learning Materials
          </Heading>
          <p className="mt-1.5 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
            These are the learning materials of {session.topicTitle}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
          {session.previousResource ? (
            <Link
              href={session.previousResource.href}
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Previous
            </Link>
          ) : (
            <span className="text-[#c4c4c4]">Previous</span>
          )}
          {session.nextResource ? (
            <Link
              href={session.nextResource.href}
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

      <div className="mt-6 space-y-4 sm:mt-8">
        {session.items.map((resource) => (
          <LearningMaterialRow key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export function StudentLiveResourcesPage({ course, session }: StudentLiveResourcesPageProps) {
  const [showMobileCurriculum, setShowMobileCurriculum] = useState(false);

  return (
    <div
      className={cn(
        "bg-white pt-6 sm:pt-8 lg:pb-14",
        showMobileCurriculum ? "pb-10 sm:pb-12" : "pb-24 sm:pb-28 lg:pb-14"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.student.courseDetails(course.slug)}
          className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:mb-6 sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        {showMobileCurriculum && (
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setShowMobileCurriculum(false)}
              className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
            >
              ← Back to Resources
            </button>
            <StudentCourseLiveCurriculum
              modules={course.curriculum}
              courseSlug={course.slug}
              activeLessonId={session.linkedLessonId}
            />
          </div>
        )}

        <div
          className={cn(
            "grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_400px]",
            showMobileCurriculum && "hidden lg:grid"
          )}
        >
          <div className="min-w-0">
            <LearningMaterialsCard session={session} />
          </div>

          <aside className="hidden lg:sticky lg:block lg:top-6 lg:self-start">
            <StudentCourseLiveCurriculum
              modules={course.curriculum}
              courseSlug={course.slug}
              activeLessonId={session.linkedLessonId}
            />
          </aside>
        </div>
      </div>

      {!showMobileCurriculum && (
        <StudentCourseLiveCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
      )}
    </div>
  );
}
