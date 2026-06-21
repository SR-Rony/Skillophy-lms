"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { TeacherCourseAssignmentSubmission } from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

const DEFAULT_FEEDBACK =
  "Excellent! Component group example - identify one group 'Dropdown List' and show it has been used on the Registration form. And highlighted one issue like - not optimized for mobile view.";

interface TeacherCourseAssignmentAssessmentDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  submission: TeacherCourseAssignmentSubmission | null;
  onSubmit?: (payload: { marks: number; feedback: string }) => void;
}

export function TeacherCourseAssignmentAssessmentDrawer({
  open,
  onOpenChange,
  submission,
  onSubmit,
}: TeacherCourseAssignmentAssessmentDrawerProps) {
  const [marks, setMarks] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!submission) {
      return;
    }

    const hasDraft =
      submission.status === "submitted" ||
      submission.status === "approved" ||
      submission.assessment;

    setMarks(
      submission.assessment?.marks != null
        ? String(submission.assessment.marks)
        : hasDraft
          ? "80"
          : ""
    );
    setFeedback(submission.assessment?.feedback ?? (hasDraft ? DEFAULT_FEEDBACK : ""));
  }, [submission]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const parsedMarks = Number(marks);
    if (!Number.isFinite(parsedMarks) || parsedMarks < 0 || parsedMarks > 100) {
      return;
    }

    onSubmit?.({ marks: parsedMarks, feedback: feedback.trim() });
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="teacher-side-drawer-overlay fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content
          className={cn(
            "teacher-side-drawer-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-[480px] flex-col bg-white shadow-[-12px_0_40px_rgba(0,0,0,0.12)] focus:outline-none will-change-transform"
          )}
        >
          <div className="border-b border-[#f0ebe8] px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Assignment Assessment
                </Dialog.Title>
                <Dialog.Description className="mt-1.5 text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
                  Your feedback will help learners for their progress
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f7f7f6] hover:text-[#1a1a1a]"
                aria-label="Close assignment assessment drawer"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:space-y-6 sm:px-6 sm:py-6">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#f5d5cf] bg-[#fff5f3] px-4 py-3.5 sm:px-5">
                <span className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
                  Student Submission
                </span>
                <Link
                  href={submission?.assignmentHref ?? submission?.checkHref ?? "#"}
                  className="shrink-0 text-[13px] font-semibold text-primary underline underline-offset-2 transition-colors hover:text-primary/80 sm:text-[14px]"
                >
                  Go to Assignment
                </Link>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="assignment-marks"
                  className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
                >
                  Marks (Out of 100)
                </label>
                <input
                  id="assignment-marks"
                  type="number"
                  min={0}
                  max={100}
                  value={marks}
                  onChange={(event) => setMarks(event.target.value)}
                  placeholder="80"
                  className="w-full rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:text-[15px]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="assignment-feedback"
                  className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
                >
                  Your Feedback
                </label>
                <textarea
                  id="assignment-feedback"
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                  rows={8}
                  placeholder="Write your feedback for the learner..."
                  className="min-h-[180px] w-full resize-y rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] leading-[1.7] text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:min-h-[200px] sm:text-[15px]"
                />
              </div>
            </div>

            <div className="border-t border-[#f0ebe8] px-5 py-5 sm:px-6 sm:py-6">
              <button
                type="submit"
                className="inline-flex min-w-[140px] items-center justify-center rounded-xl bg-primary px-8 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:text-[15px]"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
