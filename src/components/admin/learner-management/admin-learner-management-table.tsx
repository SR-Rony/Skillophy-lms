"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { AdminLearnerStatusBadge } from "@/components/admin/learner-management/admin-learner-status-badge";
import { formatAdminLearnerCourseCount } from "@/components/admin/learner-management/admin-learner-management.utils";
import type { AdminLearner } from "@/types/admin-learner-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminLearnerManagementTableProps {
  learners: AdminLearner[];
  selectedIds: Set<string>;
  onToggleRow: (learnerId: string) => void;
  onToggleAll: (learnerIds: string[]) => void;
}

function AdminLearnerManagementTableRow({
  learner,
  isSelected,
  onToggle,
}: {
  learner: AdminLearner;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  function handleRowClick() {
    router.push(ROUTES.admin.learnerDetail(learner.id));
  }

  function stopRowNavigation(event: React.MouseEvent) {
    event.stopPropagation();
  }

  return (
    <tr
      onClick={handleRowClick}
      className={cn(
        "cursor-pointer border-b border-[#f3f4f6] last:border-b-0 transition-colors",
        isSelected ? "bg-[#fff5f5]" : "bg-white hover:bg-[#fafafa]"
      )}
    >
      <td className="w-11 px-4 py-3 sm:px-5" onClick={stopRowNavigation}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          aria-label={`Select ${learner.name}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[240px] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={learner.avatar}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="36px"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
              {learner.name}
            </p>
            <p className="truncate text-[12px] text-[#9ca3af] sm:text-[13px]">{learner.email}</p>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5">
        {learner.phone}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5">
        {formatAdminLearnerCourseCount(learner.enrolledCourses)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5">
        {formatAdminLearnerCourseCount(learner.completedCourses)}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <AdminLearnerStatusBadge status={learner.status} />
      </td>
    </tr>
  );
}

export function AdminLearnerManagementTable({
  learners,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminLearnerManagementTableProps) {
  const learnerIds = learners.map((learner) => learner.id);
  const allSelected = learnerIds.length > 0 && learnerIds.every((id) => selectedIds.has(id));
  const someSelected = learnerIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[920px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="w-11 px-4 py-3.5 sm:px-5">
              <input
                type="checkbox"
                checked={allSelected}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = !allSelected && someSelected;
                  }
                }}
                onChange={() => onToggleAll(learnerIds)}
                aria-label="Select all learners on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Phone Number
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Enrolled Courses
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Completed Courses
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {learners.map((learner) => (
            <AdminLearnerManagementTableRow
              key={learner.id}
              learner={learner}
              isSelected={selectedIds.has(learner.id)}
              onToggle={() => onToggleRow(learner.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
