"use client";

import Link from "next/link";
import { ArrowLeft, Copy } from "lucide-react";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface AdminCourseCreationPageHeaderProps {
  isEditing: boolean;
  isMetaInfoStep: boolean;
  showBack: boolean;
  showNext: boolean;
  showDuplicate?: boolean;
  onEdit: () => void;
  onSave: () => void;
  onBack: () => void;
  onNext: () => void;
  onPublish?: () => void;
  onSaveDraft?: () => void;
  onDuplicate?: () => void;
}

export function AdminCourseCreationPageHeader({
  isEditing,
  isMetaInfoStep,
  showBack,
  showNext,
  showDuplicate = false,
  onEdit,
  onSave,
  onBack,
  onNext,
  onPublish,
  onSaveDraft,
  onDuplicate,
}: AdminCourseCreationPageHeaderProps) {
  return (
    <div className="space-y-5">
      <Link
        href={ROUTES.admin.courses}
        className="inline-flex items-center gap-2 text-[13px] font-medium text-[#757575] transition-colors hover:text-[#1a1a1a] sm:text-[14px]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Go Back
      </Link>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-[24px] font-bold leading-tight text-[#1a1a1a] sm:text-[28px]">
            Course Creation
          </h1>
          <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
            Create and customize courses here, tailoring content and structure.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5 sm:gap-3">
          {isMetaInfoStep ? (
            <>
              <button
                type="button"
                onClick={onPublish}
                className="inline-flex min-w-[132px] items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] sm:text-[14px]"
              >
                Publish Course
              </button>
              <button
                type="button"
                onClick={onSaveDraft}
                className="inline-flex min-w-[132px] items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] active:bg-[#f3f3f3] sm:text-[14px]"
              >
                Save as Draft
              </button>
            </>
          ) : isEditing ? (
            <button
              type="button"
              onClick={onSave}
              className="inline-flex min-w-[120px] items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] sm:text-[14px]"
            >
              Save Changes
            </button>
          ) : (
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex min-w-[120px] items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] sm:text-[14px]"
            >
              Edit Course
            </button>
          )}

          {showBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex min-w-[96px] items-center justify-center gap-1.5 rounded-xl border border-[#1a1a1a] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] active:bg-[#f3f3f3] sm:text-[14px]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
          ) : null}

          {showNext ? (
            <button
              type="button"
              onClick={onNext}
              className={cn(
                "inline-flex min-w-[96px] items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] active:bg-[#f3f3f3] sm:text-[14px]"
              )}
            >
              Next
            </button>
          ) : null}

          {showDuplicate ? (
            <button
              type="button"
              onClick={onDuplicate}
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-[#1a1a1a] bg-white text-[#1a1a1a] transition-colors hover:bg-[#fafafa] active:bg-[#f3f3f3]"
              aria-label="Duplicate course"
            >
              <Copy className="h-4 w-4" aria-hidden />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
