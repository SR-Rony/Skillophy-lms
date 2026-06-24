"use client";

import {
  formatAdminTemplateType,
  formatAdminTemplateUpdatedAt,
  getAdminTemplateIcon,
} from "@/components/admin/template-management/admin-template-management.utils";
import type { AdminTemplate } from "@/types/admin-template-management.types";

interface AdminTemplateManagementTableProps {
  templates: AdminTemplate[];
}

function AdminTemplateManagementTableRow({ template }: { template: AdminTemplate }) {
  const Icon = getAdminTemplateIcon(template.iconId);

  return (
    <tr className="border-b border-[#f3f4f6] last:border-b-0 bg-white transition-colors hover:bg-[#fafafa]">
      <td className="min-w-[260px] px-4 py-3.5 text-[13px] font-semibold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {template.name}
      </td>
      <td className="min-w-[240px] px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#ebe8e6] bg-[#fafafa] text-[#6b7280]">
            <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
          </span>
          <span className="text-[13px] font-medium text-[#757575] sm:text-[14px]">
            {formatAdminTemplateType(template.type)}
          </span>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {formatAdminTemplateUpdatedAt(template.updatedAt)}
      </td>
    </tr>
  );
}

export function AdminTemplateManagementTable({ templates }: AdminTemplateManagementTableProps) {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Template Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Type
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Updated at
            </th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template) => (
            <AdminTemplateManagementTableRow key={template.id} template={template} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
