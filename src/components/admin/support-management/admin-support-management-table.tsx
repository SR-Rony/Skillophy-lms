"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AdminSupportManagementStatusBadge } from "@/components/admin/support-management/admin-support-management-status-badge";
import {
  formatAdminSupportDate,
  formatAdminSupportPriorityLabel,
} from "@/components/admin/support-management/admin-support-management.utils";
import { getAdminSupportDetailHref } from "@/components/admin/support-management/admin-support-detail.utils";
import type { AdminSupportTicket } from "@/types/admin-support-management.types";
import { cn } from "@/utils";

interface AdminSupportManagementTableProps {
  tickets: AdminSupportTicket[];
}

function AdminSupportManagementTableRow({ ticket }: { ticket: AdminSupportTicket }) {
  const router = useRouter();

  function handleRowClick() {
    router.push(getAdminSupportDetailHref(ticket.id));
  }

  return (
    <tr
      onClick={handleRowClick}
      className="cursor-pointer border-b border-[#f3f4f6] last:border-b-0 transition-colors hover:bg-[#fafafa]"
    >
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-semibold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {ticket.ticketNumber}
      </td>
      <td className="min-w-[220px] px-4 py-3 text-[13px] font-medium text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {ticket.subject}
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <span
          className={cn(
            "text-[13px] font-semibold sm:text-[14px]",
            ticket.priority === "high"
              ? "text-[#dc2626]"
              : ticket.priority === "medium"
                ? "text-[#ea580c]"
                : "text-[#757575]"
          )}
        >
          {formatAdminSupportPriorityLabel(ticket.priority)}
        </span>
      </td>
      <td className="min-w-[200px] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={ticket.createdByAvatar}
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
            {ticket.createdByName}
          </p>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {formatAdminSupportDate(ticket.createdDate)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {ticket.createdTime}
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <AdminSupportManagementStatusBadge status={ticket.status} />
      </td>
    </tr>
  );
}

export function AdminSupportManagementTable({ tickets }: AdminSupportManagementTableProps) {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[1080px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Ticket ID
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Ticket Subject
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Priority
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Created by
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
          {tickets.map((ticket) => (
            <AdminSupportManagementTableRow key={ticket.id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
