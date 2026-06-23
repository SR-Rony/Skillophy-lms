"use client";

import { AdminLearnerProfileProgressBar } from "@/components/admin/learner-profile/shared/admin-learner-profile-progress-bar";
import { AdminLearnerProfileStatusBadge } from "@/components/admin/learner-profile/shared/admin-learner-profile-status-badge";
import { AdminLearnerProfileTopicNameCell } from "@/components/admin/learner-profile/shared/admin-learner-profile-topic-name-cell";
import { formatAdminLearnerTotalScore } from "@/components/admin/learner-profile/admin-learner-profile.utils";
import type { AdminLearnerRecordedCourseProgressTopic } from "@/types/admin-learner-profile.types";
import { cn } from "@/utils";

const headerCellClassName =
  "h-12 align-middle px-6 text-[13px] font-bold text-[#1a1a1a] sm:text-[14px]";

const bodyCellClassName = "h-[58px] align-middle px-6";

interface AdminLearnerProfileRecordedCourseProgressTableProps {
  topics: AdminLearnerRecordedCourseProgressTopic[];
}

export function AdminLearnerProfileRecordedCourseProgressTable({
  topics,
}: AdminLearnerProfileRecordedCourseProgressTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white">
      <table className="w-full table-fixed border-collapse text-left">
        <colgroup>
          <col className="w-[40%]" />
          <col className="w-[18%]" />
          <col className="w-[14%]" />
          <col className="w-[28%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-[#fafafa]">
            <th className={cn(headerCellClassName, "text-left")}>Topic Name</th>
            <th className={cn(headerCellClassName, "text-center")}>Status</th>
            <th className={cn(headerCellClassName, "text-center")}>Quiz</th>
            <th className={cn(headerCellClassName, "text-left")}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic) => (
            <tr
              key={topic.id}
              className="border-b border-[#f3f4f6] bg-white last:border-b-0 transition-colors hover:bg-[#fafafa]"
            >
              <td className={bodyCellClassName}>
                <AdminLearnerProfileTopicNameCell label={topic.label} title={topic.title} />
              </td>
              <td className={bodyCellClassName}>
                <div className="flex h-full items-center justify-center">
                  <AdminLearnerProfileStatusBadge status={topic.status} />
                </div>
              </td>
              <td
                className={cn(
                  bodyCellClassName,
                  "text-center text-[13px] font-medium tabular-nums text-[#1a1a1a] sm:text-[14px]"
                )}
              >
                {formatAdminLearnerTotalScore(topic.quizScore)}
              </td>
              <td className={bodyCellClassName}>
                <AdminLearnerProfileProgressBar percent={topic.progressPercent} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
