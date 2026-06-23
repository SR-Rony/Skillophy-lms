"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { AdminLearnerProfileTableEmptyState } from "@/components/admin/learner-profile/shared/admin-learner-profile-table-empty-state";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { cn } from "@/utils";

interface AdminLearnerProfileDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  courseTitle?: string;
  descriptionPrefix?: string;
  maxWidthClassName?: string;
  closeLabel: string;
  emptyMessage: string;
  hasItems: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  children: React.ReactNode;
}

export function AdminLearnerProfileDetailsDrawer({
  open,
  onOpenChange,
  title,
  courseTitle,
  descriptionPrefix = "You can see details progress of learner's on",
  maxWidthClassName = "max-w-[840px]",
  closeLabel,
  emptyMessage,
  hasItems,
  currentPage,
  totalPages,
  onPageChange,
  children,
}: AdminLearnerProfileDetailsDrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="teacher-side-drawer-overlay fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content
          className={cn(
            "teacher-side-drawer-panel fixed inset-y-0 right-0 z-50 flex h-full w-full flex-col overflow-hidden bg-white shadow-[-16px_0_48px_rgba(0,0,0,0.14)] focus:outline-none will-change-transform",
            maxWidthClassName
          )}
        >
          <div className="relative shrink-0 overflow-hidden border-b border-[#f3f4f6]">
            <MyCoursesSeamBackground />

            <div className="relative z-10 px-7 py-5 sm:px-9 sm:py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 pr-2">
                  <Dialog.Title className="text-[22px] font-bold leading-tight text-[#1a1a1a] sm:text-[24px]">
                    {title}
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 max-w-[640px] text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
                    {descriptionPrefix}{" "}
                    <span className="font-semibold text-[#6b7280]">
                      {courseTitle ?? "this course"}
                    </span>{" "}
                    course
                  </Dialog.Description>
                </div>

                <Dialog.Close
                  type="button"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-white/80 hover:text-[#1a1a1a]"
                  aria-label={closeLabel}
                >
                  <X className="h-5 w-5" aria-hidden />
                </Dialog.Close>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col bg-white">
            <div className="min-h-0 flex-1 overflow-x-hidden px-7 py-5 sm:px-9 sm:py-6">
              {hasItems ? children : <AdminLearnerProfileTableEmptyState message={emptyMessage} />}
            </div>

            <div className="mt-auto shrink-0 border-t border-[#f0ebe8] bg-white px-7 py-4 sm:px-9 sm:py-5">
              <StudentNotificationsPagination
                currentPage={currentPage}
                totalPages={Math.max(totalPages, 1)}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
