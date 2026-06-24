"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  formatAdminQueryFormSubmittedDateTime,
  getAdminQueryFormManagementHref,
} from "@/components/admin/query-form-management/admin-query-form-management.utils";
import type { AdminContactQuery } from "@/types/admin-query-form-management.types";

interface AdminContactQueryDetailFieldProps {
  label: string;
  value: string;
}

function AdminContactQueryDetailField({ label, value }: AdminContactQueryDetailFieldProps) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8">
      <dt className="text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">{label}</dt>
      <dd className="text-[14px] font-medium leading-relaxed text-[#1a1a1a] sm:text-[15px]">
        {value}
      </dd>
    </div>
  );
}

interface AdminContactQueryDetailPageProps {
  query: AdminContactQuery;
}

export function AdminContactQueryDetailPage({ query }: AdminContactQueryDetailPageProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="px-4 py-6 sm:px-6 sm:py-7">
        <Link
          href={getAdminQueryFormManagementHref("contact")}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#757575] transition-colors hover:text-[#1a1a1a] sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="mt-5 border-b border-[#f0f0f0] pb-5 sm:mt-6 sm:pb-6">
          <h1 className="text-[24px] font-bold leading-tight text-[#1a1a1a] sm:text-[28px]">
            Query Form
          </h1>
          <p className="mt-2 text-[13px] font-medium text-[#9ca3af] sm:text-[14px]">
            Submitted on {formatAdminQueryFormSubmittedDateTime(query.submittedAt)}
          </p>
        </div>

        <dl className="mt-6 space-y-6 sm:mt-7 sm:space-y-7">
          <AdminContactQueryDetailField label="Name" value={query.name} />
          <AdminContactQueryDetailField label="Email" value={query.email} />
          <AdminContactQueryDetailField label="Description" value={query.description} />
        </dl>
      </div>
    </div>
  );
}
