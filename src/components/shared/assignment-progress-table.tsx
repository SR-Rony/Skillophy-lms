import Link from "next/link";
import type {
  AssignmentProgressActionVariant,
  AssignmentProgressRow,
  AssignmentProgressStatus,
  AssignmentProgressTableColumn,
} from "@/types/assignment-progress-table.types";
import { cn } from "@/utils";

const DEFAULT_COLUMNS: AssignmentProgressTableColumn[] = [
  { key: "topic", label: "Topic Name" },
  { key: "date", label: "Last Date of Submission" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action", className: "text-right" },
];

const STATUS_LABELS: Record<AssignmentProgressStatus, string> = {
  pending: "Pending",
  submitted: "Submitted",
  approved: "Approved",
};

const STATUS_STYLES: Record<AssignmentProgressStatus, string> = {
  pending: "bg-[#fff0e6] text-[#c2410c]",
  submitted: "bg-[#eff6ff] text-[#2563eb]",
  approved: "bg-[#ecfdf3] text-[#16a34a]",
};

const ACTION_STYLES: Record<AssignmentProgressActionVariant, string> = {
  submit: "text-primary hover:text-primary/80",
  check: "text-[#9ca3af] hover:text-[#6b7280]",
};

function AssignmentStatusBadge({ status }: { status: AssignmentProgressStatus }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[12px] font-bold sm:text-[13px]",
        STATUS_STYLES[status]
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

function AssignmentActionLink({
  label,
  variant,
  href,
}: AssignmentProgressRow["action"]) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[13px] font-semibold underline underline-offset-2 transition-colors sm:text-[14px]",
        ACTION_STYLES[variant]
      )}
    >
      {label}
    </Link>
  );
}

function AssignmentTopicCell({ row }: { row: AssignmentProgressRow }) {
  return (
    <div className="min-w-0">
      <p className="text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">{row.topicLabel}</p>
      <p className="mt-0.5 text-[14px] font-bold leading-snug text-[#1a1a1a] sm:text-[15px]">
        {row.topicTitle}
      </p>
    </div>
  );
}

function AssignmentProgressTableRow({ row }: { row: AssignmentProgressRow }) {
  return (
    <tr className="border-b border-[#f0ebe8] last:border-b-0">
      <td className="px-5 py-4 sm:px-6 sm:py-5">
        <AssignmentTopicCell row={row} />
      </td>
      <td className="px-5 py-4 text-[13px] font-medium text-[#6b7280] sm:px-6 sm:py-5 sm:text-[14px]">
        {row.lastSubmissionDate}
      </td>
      <td className="px-5 py-4 sm:px-6 sm:py-5">
        <AssignmentStatusBadge status={row.status} />
      </td>
      <td className="px-5 py-4 text-right sm:px-6 sm:py-5">
        <AssignmentActionLink {...row.action} />
      </td>
    </tr>
  );
}

function AssignmentProgressMobileCard({ row }: { row: AssignmentProgressRow }) {
  return (
    <div className="border-b border-[#f0ebe8] px-5 py-4 last:border-b-0 sm:px-6">
      <div className="flex items-start justify-between gap-3">
        <AssignmentTopicCell row={row} />
        <AssignmentStatusBadge status={row.status} />
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-[#9ca3af]">
            Last Date of Submission
          </p>
          <p className="mt-0.5 text-[13px] font-medium text-[#6b7280]">{row.lastSubmissionDate}</p>
        </div>
        <AssignmentActionLink {...row.action} />
      </div>
    </div>
  );
}

export interface AssignmentProgressTableProps {
  rows: AssignmentProgressRow[];
  columns?: AssignmentProgressTableColumn[];
  className?: string;
  emptyMessage?: string;
}

export function AssignmentProgressTable({
  rows,
  columns = DEFAULT_COLUMNS,
  className,
  emptyMessage = "No assignments available yet.",
}: AssignmentProgressTableProps) {
  if (rows.length === 0) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-[#ebe8e6] bg-white px-5 py-10 text-center text-[14px] text-[#6b7280] sm:px-6",
          className
        )}
      >
        {emptyMessage}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)]",
        className
      )}
    >
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#ece6e3] bg-white">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    "px-5 py-4 text-[14px] font-bold text-[#1a1a1a] sm:px-6 sm:py-5 sm:text-[15px]",
                    column.className
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <AssignmentProgressTableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        {rows.map((row) => (
          <AssignmentProgressMobileCard key={row.id} row={row} />
        ))}
      </div>
    </div>
  );
}
