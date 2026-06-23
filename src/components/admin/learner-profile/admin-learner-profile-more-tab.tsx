"use client";

import type { AdminLearnerProfileMoreData } from "@/types/admin-learner-profile.types";
import { AdminLearnerProfileAccountActionsCard } from "./more/admin-learner-profile-account-actions-card";
import { AdminLearnerProfileResumePreviewCard } from "./more/admin-learner-profile-resume-preview-card";

interface AdminLearnerProfileMoreTabProps {
  data: AdminLearnerProfileMoreData;
}

export function AdminLearnerProfileMoreTab({ data }: AdminLearnerProfileMoreTabProps) {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-start lg:gap-6">
        <AdminLearnerProfileResumePreviewCard
          resumeProfile={data.resumeProfile}
          resumePreviewData={data.resumePreviewData}
          shareResumeData={data.shareResumeData}
        />

        <AdminLearnerProfileAccountActionsCard accountActions={data.accountActions} />
      </div>
    </div>
  );
}
