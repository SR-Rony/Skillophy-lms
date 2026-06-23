"use client";

import type { FormEvent, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/utils";

interface AdminCourseCreationCurriculumDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  closeAriaLabel: string;
  saveLabel: string;
  saveDisabled?: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  tabs?: ReactNode;
  contentClassName?: string;
  children: ReactNode;
}

export function AdminCourseCreationCurriculumDrawer({
  open,
  onOpenChange,
  title,
  description,
  closeAriaLabel,
  saveLabel,
  saveDisabled = false,
  onSubmit,
  tabs,
  contentClassName,
  children,
}: AdminCourseCreationCurriculumDrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="teacher-side-drawer-overlay fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content
          className={cn(
            "teacher-side-drawer-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-[520px] flex-col bg-white shadow-[-12px_0_40px_rgba(0,0,0,0.12)] focus:outline-none will-change-transform sm:max-w-[560px]"
          )}
        >
          <div className="border-b border-[#f0f0f0] px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  {title}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
                  {description}
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f7f7f6] hover:text-[#1a1a1a]"
                aria-label={closeAriaLabel}
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col">
            {tabs ? <div className="px-5 sm:px-6">{tabs}</div> : null}

            <div
              className={cn(
                "flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6",
                contentClassName
              )}
            >
              {children}
            </div>

            <div className="border-t border-[#f0f0f0] px-5 py-5 sm:px-6 sm:py-6">
              <button
                type="submit"
                disabled={saveDisabled}
                className={cn(
                  "inline-flex min-w-[148px] items-center justify-center rounded-xl px-8 py-3 text-[14px] font-bold transition-colors sm:text-[15px]",
                  saveDisabled
                    ? "cursor-not-allowed bg-[#f0f0f0] text-[#9ca3af]"
                    : "bg-primary text-white hover:bg-[#e63e3e] active:bg-[#d93636]"
                )}
              >
                {saveLabel}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
