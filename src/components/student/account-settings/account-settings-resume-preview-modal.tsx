"use client";

import { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Printer, X } from "lucide-react";
import type {
  StudentAccountSettingsProfile,
  StudentAccountSettingsResumePreviewData,
} from "@/types/student-account-settings.types";
import { AccountSettingsModalSeamBackground } from "./account-settings-modal-seam-background";
import { AccountSettingsResumeDocument } from "./account-settings-resume-document";

interface AccountSettingsResumePreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: StudentAccountSettingsProfile;
  resume: StudentAccountSettingsResumePreviewData;
}

export function AccountSettingsResumePreviewModal({
  open,
  onOpenChange,
  profile,
  resume,
}: AccountSettingsResumePreviewModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  function handlePrint() {
    window.print();
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100vh-1.5rem)] w-[calc(100%-1.5rem)] max-w-[980px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none">
          <div className="relative overflow-hidden border-b border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
            <AccountSettingsModalSeamBackground />

            <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:gap-x-4 sm:gap-y-0">
              <div className="min-w-0 pr-10 sm:max-w-[520px] sm:pr-0">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Preview of Resume
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  You can preview, download and print your resume here.
                </Dialog.Description>
              </div>

              <div className="flex items-center justify-end gap-3 sm:col-start-2 sm:row-start-1">
                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  className="inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-primary px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:px-6 sm:text-[14px]"
                >
                  Download as PDF
                </a>
                <button
                  type="button"
                  onClick={handlePrint}
                  aria-label="Print resume"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e0e0e0] bg-white text-[#1a1a1a] shadow-[0_1px_2px_rgba(35,25,22,0.04)] transition-colors hover:bg-[#fafafa]"
                >
                  <Printer className="h-[18px] w-[18px]" aria-hidden />
                </button>
              </div>

              <Dialog.Close
                type="button"
                onClick={() => onOpenChange(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a] sm:static sm:col-start-3 sm:row-start-1 sm:self-start sm:justify-self-end sm:pt-0.5"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto bg-white">
            <div ref={resumeRef} id="account-settings-resume-preview">
              <AccountSettingsResumeDocument
                profile={profile}
                resume={resume}
                className="rounded-none border-0 shadow-none"
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
