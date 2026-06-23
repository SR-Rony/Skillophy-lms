"use client";

import { AdminLearnerProfileStatusBadge } from "@/components/admin/learner-profile/shared/admin-learner-profile-status-badge";
import { AdminLearnerProfileTopicNameCell } from "@/components/admin/learner-profile/shared/admin-learner-profile-topic-name-cell";
import { formatAdminLearnerLiveScore } from "@/components/admin/learner-profile/admin-learner-profile.utils";
import type { AdminLearnerLiveCourseProgressTopic } from "@/types/admin-learner-profile.types";
import { cn } from "@/utils";

const headerCellClassName =
  "h-12 align-middle px-4 text-[12px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[13px]";

const bodyCellClassName = "h-[58px] align-middle px-4 sm:px-5";

interface AdminLearnerProfileLiveCourseProgressTableProps {
  topics: AdminLearnerLiveCourseProgressTopic[];
}

export function AdminLearnerProfileLiveCourseProgressTable({
  topics,
}: AdminLearnerProfileLiveCourseProgressTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[24%]" />
            <col className="w-[14%]" />
            <col className="w-[14%]" />
            <col className="w-[14%]" />
            <col className="w-[12%]" />
            <col className="w-[14%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-[#ebe8e6] bg-[#fafafa]">
              <th className={cn(headerCellClassName, "text-left")}>Topic Name</th>
              <th className={cn(headerCellClassName, "text-center")}>Status</th>
              <th className={cn(headerCellClassName, "text-center")}>Attendance</th>
              <th className={cn(headerCellClassName, "text-center")}>Assignment</th>
              <th className={cn(headerCellClassName, "text-center")}>Quiz</th>
              <th className={cn(headerCellClassName, "text-center")}>Total Score</th>
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
                    "text-center text-[13px] font-medium tabular-nums text-[#1a1a1a]"
                  )}
                >
                  {formatAdminLearnerLiveScore(topic.attendance)}
                </td>
                <td
                  className={cn(
                    bodyCellClassName,
                    "text-center text-[13px] font-medium tabular-nums text-[#1a1a1a]"
                  )}
                >
                  {formatAdminLearnerLiveScore(topic.assignment)}
                </td>
                <td
                  className={cn(
                    bodyCellClassName,
                    "text-center text-[13px] font-medium tabular-nums text-[#1a1a1a]"
                  )}
                >
                  {formatAdminLearnerLiveScore(topic.quizScore)}
                </td>
                <td
                  className={cn(
                    bodyCellClassName,
                    "text-center text-[13px] font-medium tabular-nums text-[#1a1a1a]"
                  )}
                >
                  {formatAdminLearnerLiveScore(topic.totalScore)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
