"use client";

import Image from "next/image";
import { Mail, Phone, User } from "lucide-react";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import type {
  TeacherAccountSettingsProfile,
  TeacherAccountSettingsStats,
  TeacherAccountSettingsTab,
  TeacherAccountSettingsTabId,
} from "@/types/teacher-account-settings.types";
import {
  formatTeacherEarnings,
  formatTeacherStatCount,
} from "./teacher-account-settings.utils";
import { cn } from "@/utils";

interface TeacherAccountSettingsHeroProps {
  profile: TeacherAccountSettingsProfile;
  stats: TeacherAccountSettingsStats;
  tabs: TeacherAccountSettingsTab[];
  activeTab: TeacherAccountSettingsTabId;
  onTabChange: (tab: TeacherAccountSettingsTabId) => void;
  className?: string;
}

const statCards = [
  {
    key: "totalEarnings",
    label: "Total Earnings",
    valueKey: "totalEarnings" as const,
    format: (value: number) => formatTeacherEarnings(value),
    className: "border-[#fde7e3] bg-[#fff5f5]",
    valueClassName: "text-[#1a1a1a]",
  },
  {
    key: "totalCourses",
    label: "Total Courses",
    valueKey: "totalCourses" as const,
    format: (value: number) => formatTeacherStatCount(value),
    className: "border-[#d9f7e8] bg-[#ecfdf5]",
    valueClassName: "text-[#1a1a1a]",
  },
  {
    key: "ongoingCourses",
    label: "Ongoing",
    valueKey: "ongoingCourses" as const,
    format: (value: number) => formatTeacherStatCount(value),
    className: "border-[#dbeafe] bg-[#eff6ff]",
    valueClassName: "text-[#1a1a1a]",
  },
];

export function TeacherAccountSettingsHero({
  profile,
  stats,
  tabs,
  activeTab,
  onTabChange,
  className,
}: TeacherAccountSettingsHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[#f3f4f6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9",
        className
      )}
    >
      <MyCoursesSeamBackground />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between xl:gap-8">
          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
            <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full ring-2 ring-white sm:h-[84px] sm:w-[84px]">
              <Image
                src={profile.avatarUrl}
                alt={profile.fullName}
                fill
                unoptimized
                className="object-cover"
                sizes="84px"
              />
            </div>

            <div className="min-w-0 pt-1">
              <h1 className="text-[24px] font-bold leading-tight text-[#1a1a1a] sm:text-[28px]">
                {profile.fullName}
              </h1>

              <div className="mt-3 space-y-2">
                <p className="flex items-center gap-2 text-[13px] font-medium text-[#757575] sm:text-[14px]">
                  <User className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {profile.role}
                </p>
                <p className="flex items-center gap-2 text-[13px] font-medium text-[#757575] sm:text-[14px]">
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {profile.phone}
                </p>
                <p className="flex items-center gap-2 text-[13px] font-medium text-[#757575] sm:text-[14px]">
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {profile.email}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:max-w-[620px] xl:flex-1">
            {statCards.map((card) => (
              <article
                key={card.key}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-center shadow-[0_2px_10px_rgba(35,25,22,0.04)] sm:px-5 sm:py-5",
                  card.className
                )}
              >
                <p
                  className={cn(
                    "text-[22px] font-bold tabular-nums sm:text-[24px]",
                    card.valueClassName
                  )}
                >
                  {card.format(stats[card.valueKey])}
                </p>
                <p className="mt-1 text-[12px] font-medium text-[#6b7280] sm:text-[13px]">
                  {card.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <nav
          aria-label="Account settings sections"
          className="scrollbar-hide -mx-1 mt-8 flex gap-0 overflow-x-auto sm:gap-2"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
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
      </div>
    </section>
  );
}
