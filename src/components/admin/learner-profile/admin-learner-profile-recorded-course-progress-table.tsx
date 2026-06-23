"use client";

import { AdminLearnerProfileCourseStatusBadge } from "@/components/admin/learner-profile/admin-learner-profile-course-status-badge";
import type {
  AdminLearnerCourseTopicStatus,
  AdminLearnerRecordedCourseProgressTopic,
} from "@/types/admin-learner-profile.types";
import { cn } from "@/utils";

const headerCellClassName =
  "h-12 align-middle px-6 text-[13px] font-bold text-[#1a1a1a] sm:text-[14px]";

const bodyCellClassName = "h-[58px] align-middle px-6";

function AdminLearnerProfileTopicStatusBadge({ status }: { status: AdminLearnerCourseTopicStatus }) {
  return <AdminLearnerProfileCourseStatusBadge status={status} />;
}

function AdminLearnerProfileTopicProgressBar({ percent }: { percent: number }) {
  return (
    <div className="flex w-full max-w-[240px] items-center gap-3">
      <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#ececec]">
        <div
          className="h-full min-w-[2px] rounded-full bg-[#1a1a1a] transition-all duration-300"
          style={{ width: `${Math.max(percent, percent > 0 ? 2 : 0)}%` }}
        />
      </div>
      <span className="w-11 shrink-0 text-right text-[13px] font-medium tabular-nums text-[#1a1a1a] sm:text-[14px]">
        {percent}%
      </span>
    </div>
  );
}

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
              className={cn(
                "border-b border-[#f3f4f6] bg-white last:border-b-0",
                "transition-colors hover:bg-[#fafafa]"
              )}
            >
              <td className={bodyCellClassName}>
                <div className="flex h-full max-w-full flex-col justify-center pr-2">
                  <p className="text-[13px] font-bold leading-[18px] text-[#1a1a1a] sm:text-[14px]">
                    {topic.label}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-[12px] font-medium leading-[16px] text-[#6b7280] sm:text-[13px]">
                    {topic.title}
                  </p>
                </div>
              </td>
              <td className={bodyCellClassName}>
                <div className="flex h-full items-center justify-center">
                  <AdminLearnerProfileTopicStatusBadge status={topic.status} />
                </div>
              </td>
              <td
                className={cn(
                  bodyCellClassName,
                  "text-center text-[13px] font-medium tabular-nums text-[#1a1a1a] sm:text-[14px]"
                )}
              >
                {topic.quizScore != null ? `${topic.quizScore}%` : "--"}
              </td>
              <td className={bodyCellClassName}>
                <AdminLearnerProfileTopicProgressBar percent={topic.progressPercent} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
