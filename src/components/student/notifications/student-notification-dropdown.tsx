"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";
import {
  StudentNotificationEmptyState,
  StudentNotificationGroupList,
} from "@/components/student/notifications/student-notifications-shared";
import type { StudentNotificationGroup } from "@/types/student-notifications.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentNotificationDropdownProps {
  notifications: StudentNotificationGroup[];
  unreadCount: number;
  className?: string;
}

export function StudentNotificationDropdown({
  notifications,
  unreadCount,
  className,
}: StudentNotificationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasNotifications = notifications.some((group) => group.notifications.length > 0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Notifications, ${unreadCount} unread`}
        className="relative text-[#1a1a1a] transition-colors hover:text-primary"
      >
        <Bell className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        {unreadCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+12px)] z-50 flex w-[min(100vw-2rem,420px)] flex-col overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="flex items-center justify-between border-b border-[#f3f4f6] px-4 py-4 sm:px-5">
            <h2 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Notifications</h2>
            {hasNotifications && (
              <button
                type="button"
                className="text-[13px] font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Mark All as Read
              </button>
            )}
          </div>

          <div className="max-h-[420px] overflow-y-auto">
            {hasNotifications ? (
              <StudentNotificationGroupList groups={notifications} compact />
            ) : (
              <StudentNotificationEmptyState compact />
            )}
          </div>

          <div className="border-t border-[#f3f4f6] px-4 py-3.5 text-center sm:px-5">
            <Link
              href={ROUTES.student.notifications}
              onClick={() => setIsOpen(false)}
              className="text-[13px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-[14px]"
            >
              Read All
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
