"use client";

import { useState } from "react";
import { AccountSettingsResumeDocument } from "@/components/student/account-settings/account-settings-resume-document";
import { AccountSettingsShareResumeModal } from "@/components/student/account-settings/account-settings-share-resume-modal";
import type {
  StudentAccountSettingsProfile,
  StudentAccountSettingsResumePreviewData,
  StudentAccountSettingsShareResumeData,
} from "@/types/student-account-settings.types";
import { AdminLearnerProfileResumeToolbar } from "./admin-learner-profile-resume-toolbar";
import { cn } from "@/utils";

interface AdminLearnerProfileResumePreviewCardProps {
  resumeProfile: StudentAccountSettingsProfile;
  resumePreviewData: StudentAccountSettingsResumePreviewData;
  shareResumeData: StudentAccountSettingsShareResumeData;
  className?: string;
}

export function AdminLearnerProfileResumePreviewCard({
  resumeProfile,
  resumePreviewData,
  shareResumeData,
  className,
}: AdminLearnerProfileResumePreviewCardProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  function handlePrint() {
    window.print();
  }

  function handleDownload() {
    window.open(shareResumeData.resumeUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section
        className={cn(
          "rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7",
          className
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">
              Preview of Resume
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
              You can preview, download and print learner&apos;s resume here.
            </p>
          </div>

          <AdminLearnerProfileResumeToolbar
            onPrint={handlePrint}
            onShare={() => setIsShareOpen(true)}
            onDownload={handleDownload}
            className="shrink-0 self-end sm:self-start"
          />
        </div>

        <div className="mt-6" id="admin-learner-resume-preview">
          <AccountSettingsResumeDocument
            profile={resumeProfile}
            resume={resumePreviewData}
          />
        </div>
      </section>

      <AccountSettingsShareResumeModal
        open={isShareOpen}
        onOpenChange={setIsShareOpen}
        data={shareResumeData}
      />
    </>
  );
}
