"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AdminReportManagementStatusBadge } from "@/components/admin/report-management/admin-report-management-status-badge";
import {
  formatAdminReportDate,
  getAdminReportDetailHref,
} from "@/components/admin/report-management/admin-report-management.utils";
import type { AdminReport } from "@/types/admin-report-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminReportManagementTableProps {
  reports: AdminReport[];
  selectedIds: Set<string>;
  onToggleRow: (reportId: string) => void;
  onToggleAll: (reportIds: string[]) => void;
}

function AdminReportManagementTableRow({
  report,
  isSelected,
  onToggle,
}: {
  report: AdminReport;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  function handleRowClick() {
    router.push(getAdminReportDetailHref(report.id));
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
          onClick={stopRowNavigation}
          onChange={onToggle}
          aria-label={`Select report from ${report.reporterName}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[260px] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={report.courseThumbnail}
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <p className="min-w-0 text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
            {report.courseName}
          </p>
        </div>
      </td>
      <td className="min-w-[220px] px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {report.lessonName}
      </td>
      <td className="min-w-[220px] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={report.reporterAvatar}
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
              {report.reporterName}
            </p>
            <p className="truncate text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
              {report.reporterEmail}
            </p>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {formatAdminReportDate(report.reportedDate)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {report.reportedTime}
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <AdminReportManagementStatusBadge status={report.status} />
      </td>
    </tr>
  );
}

export function AdminReportManagementTable({
  reports,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminReportManagementTableProps) {
  const reportIds = reports.map((report) => report.id);
  const allSelected = reportIds.length > 0 && reportIds.every((id) => selectedIds.has(id));
  const someSelected = reportIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[1180px] border-collapse text-left">
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
                onChange={() => onToggleAll(reportIds)}
                aria-label="Select all reports on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Course Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Lesson Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Date
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Time
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <AdminReportManagementTableRow
              key={report.id}
              report={report}
              isSelected={selectedIds.has(report.id)}
              onToggle={() => onToggleRow(report.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
