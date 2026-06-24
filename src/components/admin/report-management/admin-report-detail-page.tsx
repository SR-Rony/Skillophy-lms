"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  formatAdminReportDetailTimestamp,
} from "@/components/admin/report-management/admin-report-detail.utils";
import { getAdminReportManagementHref } from "@/components/admin/report-management/admin-report-management.utils";
import type { AdminReportDetail, AdminReportPerson } from "@/types/admin-report-management.types";
import { cn } from "@/utils";

interface AdminReportDetailPageProps {
  report: AdminReportDetail;
}

function AdminReportDetailPersonCard({ person }: { person: AdminReportPerson }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
        <Image src={person.avatar} alt="" fill sizes="40px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">
          {person.name}
        </p>
        <p className="truncate text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
          {person.email}
        </p>
      </div>
    </div>
  );
}

function AdminReportDetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 border-b border-[#f0f0f0] py-5 last:border-b-0 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-start sm:gap-8 sm:py-6">
      <p className="text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">{label}</p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function AdminReportDetailPage({ report }: AdminReportDetailPageProps) {
  const [status, setStatus] = useState(report.status);
  const [resolvedBy, setResolvedBy] = useState(report.resolvedBy);

  function handleResolve() {
    if (status === "resolved") {
      return;
    }

    setStatus("resolved");
    setResolvedBy({
      name: "Eleanor Pena",
      email: "pena@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eleanor%20Pena",
    });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="px-4 py-6 sm:px-6 sm:py-7">
        <Link
          href={getAdminReportManagementHref()}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#757575] transition-colors hover:text-[#1a1a1a] sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="mt-5 flex flex-col gap-4 border-b border-[#f0f0f0] pb-5 sm:mt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:pb-6">
          <div className="min-w-0">
            <h1 className="text-[24px] font-bold leading-tight text-[#1a1a1a] sm:text-[28px]">
              Report on &ldquo;{report.lessonName}&rdquo;
            </h1>
            <p className="mt-2 text-[13px] font-medium text-[#9ca3af] sm:text-[14px]">
              Reported on {formatAdminReportDetailTimestamp(report.reportedAt)}
            </p>
          </div>

          {status === "open" ? (
            <button
              type="button"
              onClick={handleResolve}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-primary px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] sm:px-5"
            >
              {report.resolveReportLabel}
            </button>
          ) : null}
        </div>

        <div className="mt-2">
          <AdminReportDetailRow label="Course Info">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-[#f3f4f6]">
                <Image
                  src={report.courseInfo.thumbnail}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">
                  {report.courseInfo.title}
                </p>
                <p className="mt-0.5 text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
                  {report.courseInfo.topic}
                </p>
              </div>
            </div>
          </AdminReportDetailRow>

          <AdminReportDetailRow label="Course Teacher">
            <AdminReportDetailPersonCard person={report.courseTeacher} />
          </AdminReportDetailRow>

          <AdminReportDetailRow label="Reported by">
            <AdminReportDetailPersonCard person={report.reportedBy} />
          </AdminReportDetailRow>

          {status === "resolved" && resolvedBy ? (
            <AdminReportDetailRow label="Resolved by">
              <AdminReportDetailPersonCard person={resolvedBy} />
            </AdminReportDetailRow>
          ) : null}

          <AdminReportDetailRow label="Reports">
            <div className="flex flex-wrap gap-2">
              {report.reportTags.map((tag, index) => (
                <span
                  key={tag}
                  className={cn(
                    "inline-flex rounded-full px-3 py-1.5 text-[12px] font-semibold sm:text-[13px]",
                    index === 0
                      ? "bg-white text-[#1a1a1a] ring-1 ring-[#ebe8e6]"
                      : "bg-[#faf7f2] text-[#1a1a1a]"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AdminReportDetailRow>

          <AdminReportDetailRow label="Report Details">
            <p className="text-[14px] font-medium leading-[1.7] text-[#757575] sm:text-[15px]">
              {report.reportDetails}
            </p>
          </AdminReportDetailRow>
        </div>
      </div>
    </div>
  );
}
