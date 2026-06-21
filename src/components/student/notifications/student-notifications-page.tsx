"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/shared";
import { StudentDashboardPageHero } from "@/components/student/student-dashboard-page-hero";
import {
  StudentNotificationEmptyState,
  StudentNotificationGroupList,
  filterNotificationGroups,
} from "@/components/student/notifications/student-notifications-shared";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import type {
  StudentNotificationTab,
  StudentNotificationsPageData,
} from "@/types/student-notifications.types";
import { paginateNotificationGroups } from "@/utils/student-notifications-pagination";
import { cn } from "@/utils";

interface StudentNotificationsPageProps {
  data: StudentNotificationsPageData;
}

export function StudentNotificationsPage({ data }: StudentNotificationsPageProps) {
  const [activeTab, setActiveTab] = useState<StudentNotificationTab>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredGroups = useMemo(
    () => filterNotificationGroups(data.groups, activeTab),
    [activeTab, data.groups]
  );

  const pagination = useMemo(
    () => paginateNotificationGroups(filteredGroups, currentPage),
    [currentPage, filteredGroups]
  );

  const hasNotifications = pagination.totalItems > 0;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  useEffect(() => {
    if (currentPage > pagination.totalPages) {
      setCurrentPage(pagination.totalPages);
    }
  }, [currentPage, pagination.totalPages]);

  return (
    <>
      <StudentDashboardPageHero
        title="Notifications"
        description="Receive essential notifications and important updates here."
      >
        <nav
          aria-label="Notification filters"
          className="scrollbar-hide -mx-1 mt-8 flex gap-0 overflow-x-auto sm:gap-2"
        >
          {(
            [
              { id: "all" as const, label: `All(${data.allCount})` },
              { id: "unread" as const, label: `Unread(${data.unreadCount})` },
            ] as const
          ).map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 border-b-[3px] px-4 py-3 text-[14px] font-semibold transition-colors sm:px-5",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-[#1a1a1a] hover:text-[#4a4a4a]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </StudentDashboardPageHero>

      <Container className="py-8 md:py-10">
        <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
          {hasNotifications ? (
            <>
              <div className="flex items-center justify-end border-b border-[#f3f4f6] px-5 py-4 sm:px-6">
                <button
                  type="button"
                  className="text-[13px] font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80 sm:text-[14px]"
                >
                  Mark All as Read
                </button>
              </div>

              <StudentNotificationGroupList groups={pagination.groups} />

              {pagination.shouldPaginate && (
                <div className="border-t border-[#f3f4f6] px-5 py-6 sm:px-6">
                  <StudentNotificationsPagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          ) : (
            <StudentNotificationEmptyState />
          )}
        </div>
      </Container>
    </>
  );
}
