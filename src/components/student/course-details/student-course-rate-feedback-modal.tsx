"use client";

import { useEffect, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Star, X } from "lucide-react";
import { AccountSettingsModalDropdown } from "@/components/student/account-settings/account-settings-modal-dropdown";
import { cn } from "@/utils";

const curriculumOptions = [
  { value: "like-curriculum", label: "I like the course curriculum" },
  { value: "needs-improvement", label: "The curriculum needs improvement" },
  { value: "too-basic", label: "The curriculum is too basic" },
  { value: "too-advanced", label: "The curriculum is too advanced" },
];

const instructorOptions = [
  { value: "like-teacher", label: "I like the course teacher" },
  { value: "excellent", label: "The instructor was excellent" },
  { value: "needs-improvement", label: "The instructor needs improvement" },
  { value: "hard-to-follow", label: "The instructor was hard to follow" },
];

interface StudentCourseRateFeedbackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialRating?: number;
}

export function StudentCourseRateFeedbackModal({
  open,
  onOpenChange,
  initialRating = 3,
}: StudentCourseRateFeedbackModalProps) {
  const [rating, setRating] = useState(initialRating);
  const [curriculumThought, setCurriculumThought] = useState("like-curriculum");
  const [instructorThought, setInstructorThought] = useState("like-teacher");
  const [review, setReview] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setRating(initialRating);
    setCurriculumThought("like-curriculum");
    setInstructorThought("like-teacher");
    setReview("");
  }, [open, initialRating]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none">
          <div className="border-b border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Rate this course
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  Your feedback will help other learners
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="scrollbar-hide space-y-5 overflow-y-auto px-5 py-5 sm:space-y-6 sm:px-7 sm:py-6">
              <div
                className="flex gap-1.5"
                role="radiogroup"
                aria-label="Course rating"
              >
                {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1;
                  const isActive = starValue <= rating;

                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() => setRating(starValue)}
                      aria-label={`Rate ${starValue} stars`}
                      aria-checked={isActive}
                      role="radio"
                      className="rounded-md p-0.5 transition-transform hover:scale-105"
                    >
                      <Star
                        className={cn(
                          "h-8 w-8 sm:h-9 sm:w-9",
                          isActive
                            ? "fill-[#f97316] text-[#f97316]"
                            : "fill-[#e5e7eb] text-[#e5e7eb]"
                        )}
                        aria-hidden
                      />
                    </button>
                  );
                })}
              </div>

              <AccountSettingsModalDropdown
                label="What are your thoughts on the course curriculum?"
                value={curriculumThought}
                placeholder="Select your feedback"
                options={curriculumOptions}
                onChange={setCurriculumThought}
              />

              <AccountSettingsModalDropdown
                label="What are your thoughts on the course instructor?"
                value={instructorThought}
                placeholder="Select your feedback"
                options={instructorOptions}
                onChange={setInstructorThought}
              />

              <div>
                <label
                  htmlFor="course-review"
                  className="mb-2 block text-[14px] font-semibold text-[#1a1a1a]"
                >
                  Your Review (optional)
                </label>
                <textarea
                  id="course-review"
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                  rows={5}
                  placeholder="This course laid a solid UX foundation. The instructor's clear explanations and engaging activities made the content both captivating and comprehensible."
                  className="w-full resize-none rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#1a1a1a] outline-none transition-colors placeholder:text-[#b0b7c3] focus:border-[#1a1a1a]"
                />
              </div>
            </div>

            <div className="border-t border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-primary/90 sm:text-[15px]"
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
