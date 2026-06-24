"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { AdminSupportManagementStatusBadge } from "@/components/admin/support-management/admin-support-management-status-badge";
import {
  formatAdminSupportDetailMetaLine,
  formatAdminSupportTicketIdLabel,
  getAdminSupportManagementHref,
} from "@/components/admin/support-management/admin-support-detail.utils";
import { AdminSupportTicketDetailThread } from "@/components/admin/support-management/admin-support-ticket-detail-thread";
import { StudentMessagesChatComposer } from "@/components/student/student-messages/student-messages-chat-composer";
import { MessagesScrollArea } from "@/components/student/student-messages/messages-scroll-area";
import { useUIStore } from "@/store";
import type {
  AdminSupportTicketDetail,
  AdminSupportTicketThreadItem,
} from "@/types/admin-support-management.types";

const supportAgentAvatar =
  "https://api.dicebear.com/9.x/initials/png?seed=S&backgroundColor=ff4747";

interface AdminSupportTicketDetailPageProps {
  ticket: AdminSupportTicketDetail;
}

export function AdminSupportTicketDetailPage({ ticket }: AdminSupportTicketDetailPageProps) {
  const setHeaderTitleOverride = useUIStore((state) => state.setHeaderTitleOverride);
  const [status, setStatus] = useState(ticket.status);
  const [thread, setThread] = useState<AdminSupportTicketThreadItem[]>(ticket.thread);
  const [draftMessage, setDraftMessage] = useState("");
  const threadScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = formatAdminSupportTicketIdLabel(ticket.ticketNumber);
    setHeaderTitleOverride(title);

    return () => {
      setHeaderTitleOverride(null);
    };
  }, [ticket.ticketNumber, setHeaderTitleOverride]);

  useEffect(() => {
    const scrollArea = threadScrollRef.current;
    if (!scrollArea) {
      return;
    }

    scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: "smooth" });
  }, [thread]);

  function handleResolve() {
    if (status === "resolved") {
      return;
    }

    setStatus("resolved");
  }

  function handleSend() {
    const trimmed = draftMessage.trim();
    if (!trimmed || status === "resolved") {
      return;
    }

    setThread((current) => [
      ...current,
      {
        type: "message",
        id: `msg-${Date.now()}`,
        message: {
          id: `msg-${Date.now()}`,
          sender: "support",
          content: trimmed,
          avatar: supportAgentAvatar,
        },
      },
    ]);
    setDraftMessage("");
  }

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="shrink-0 border-b border-[#f0f0f0] px-4 py-6 sm:px-6 sm:py-7">
        <Link
          href={getAdminSupportManagementHref()}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#757575] transition-colors hover:text-[#1a1a1a] sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-[24px] font-bold leading-tight text-[#1a1a1a] sm:text-[28px]">
                {ticket.subject}
              </h1>
              <AdminSupportManagementStatusBadge status={status} />
            </div>
            <p className="mt-2 text-[13px] font-medium text-[#9ca3af] sm:text-[14px]">
              {formatAdminSupportDetailMetaLine(
                ticket.createdByName,
                ticket.createdDate,
                ticket.createdTime,
                ticket.priority
              )}
            </p>
          </div>

          {status !== "resolved" ? (
            <button
              type="button"
              onClick={handleResolve}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] sm:px-6"
            >
              {ticket.resolveTicketLabel}
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <MessagesScrollArea ref={threadScrollRef} className="flex-1">
          <AdminSupportTicketDetailThread thread={thread} />
        </MessagesScrollArea>

        {status !== "resolved" ? (
          <StudentMessagesChatComposer
            value={draftMessage}
            onChange={setDraftMessage}
            onSend={handleSend}
            className="shrink-0"
          />
        ) : null}
      </div>
    </div>
  );
}
