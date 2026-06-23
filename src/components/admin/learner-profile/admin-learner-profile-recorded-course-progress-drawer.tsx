"use client";

import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { AdminLearnerProfileRecordedCourseProgressTable } from "@/components/admin/learner-profile/admin-learner-profile-recorded-course-progress-table";
import { paginateAdminLearnerProgressTopics } from "@/components/admin/learner-profile/admin-learner-profile.utils";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import type {
  AdminLearnerRecordedCourse,
  AdminLearnerRecordedCourseProgressData,
} from "@/types/admin-learner-profile.types";
import { cn } from "@/utils";

interface AdminLearnerProfileRecordedCourseProgressDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: AdminLearnerRecordedCourse | null;
}

const PROGRESS_TOPICS_PAGE_SIZE = 10;

function buildProgressData(course: AdminLearnerRecordedCourse): AdminLearnerRecordedCourseProgressData {
  return {
    courseTitle: course.title,
    topics: course.progressTopics,
    pageSize: PROGRESS_TOPICS_PAGE_SIZE,
  };
}

export function AdminLearnerProfileRecordedCourseProgressDrawer({
  open,
  onOpenChange,
  course,
}: AdminLearnerProfileRecordedCourseProgressDrawerProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const progressData = useMemo(
    () => (course ? buildProgressData(course) : null),
    [course]
  );

  const { items: visibleTopics, totalPages, currentPage: safePage } = useMemo(() => {
    if (!progressData) {
      return { items: [], totalPages: 1, currentPage: 1 };
    }

    return paginateAdminLearnerProgressTopics(
      progressData.topics,
      currentPage,
      progressData.pageSize
    );
  }, [progressData, currentPage]);

  useEffect(() => {
    if (open) {
      setCurrentPage(1);
    }
  }, [open, course?.id]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="teacher-side-drawer-overlay fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content
          className={cn(
            "teacher-side-drawer-panel fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-[840px] flex-col overflow-hidden bg-white shadow-[-16px_0_48px_rgba(0,0,0,0.14)] focus:outline-none will-change-transform"
          )}
        >
          <div className="relative shrink-0 overflow-hidden border-b border-[#f3f4f6]">
            <MyCoursesSeamBackground />

            <div className="relative z-10 px-7 py-5 sm:px-9 sm:py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 pr-2">
                  <Dialog.Title className="text-[22px] font-bold leading-tight text-[#1a1a1a] sm:text-[24px]">
                    Progress Details
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 max-w-[640px] text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
                    You can see details progress of learner&apos;s on{" "}
                    <span className="font-semibold text-[#6b7280]">
                      {progressData?.courseTitle ?? "this course"}
                    </span>{" "}
                    course
                  </Dialog.Description>
                </div>

                <Dialog.Close
                  type="button"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-white/80 hover:text-[#1a1a1a]"
                  aria-label="Close progress details drawer"
                >
                  <X className="h-5 w-5" aria-hidden />
                </Dialog.Close>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col bg-white">
            <div className="min-h-0 flex-1 px-7 py-5 sm:px-9 sm:py-6">
              {visibleTopics.length > 0 ? (
                <AdminLearnerProfileRecordedCourseProgressTable topics={visibleTopics} />
              ) : (
                <div className="rounded-2xl border border-dashed border-[#ebe8e6] px-6 py-12 text-center">
                  <p className="text-[14px] font-medium text-[#9ca3af]">
                    No progress topics available for this course.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-auto shrink-0 border-t border-[#f0ebe8] bg-white px-7 py-4 sm:px-9 sm:py-5">
              <StudentNotificationsPagination
                currentPage={safePage}
                totalPages={Math.max(totalPages, 1)}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
