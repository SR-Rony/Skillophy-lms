"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { Container } from "@/components/shared";
import type {
  StudentAccountSettingsProfile,
  StudentAccountSettingsTab,
  StudentAccountSettingsTabId,
} from "@/types/student-account-settings.types";
import { cn } from "@/utils";

interface AccountSettingsHeroProps {
  profile: StudentAccountSettingsProfile;
  tabs: StudentAccountSettingsTab[];
  activeTab: StudentAccountSettingsTabId;
  onTabChange: (tab: StudentAccountSettingsTabId) => void;
  isProfileEditing?: boolean;
  className?: string;
}

export function AccountSettingsHero({
  profile,
  tabs,
  activeTab,
  onTabChange,
  isProfileEditing = false,
  className,
}: AccountSettingsHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[#f3f4f6] py-8 md:py-10 lg:py-12",
        className
      )}
    >
      <MyCoursesSeamBackground />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative shrink-0">
              <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full ring-2 ring-white sm:h-[88px] sm:w-[88px]">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.fullName}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="88px"
                />
              </div>

              {isProfileEditing ? (
                <button
                  type="button"
                  aria-label="Change profile photo"
                  className="absolute -bottom-0.5 -left-0.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#1a1a1a] text-white shadow-sm transition-opacity hover:opacity-90 sm:h-9 sm:w-9"
                >
                  <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                </button>
              ) : null}
            </div>

            <div className="min-w-0">
              <h1 className="text-[22px] font-bold leading-tight text-[#1a1a1a] sm:text-[26px] lg:text-[28px]">
                {profile.fullName}
              </h1>
              <p className="mt-1 text-[14px] font-medium text-[#757575] sm:text-[15px]">
                {profile.jobTitle}
              </p>
            </div>
          </div>

          {!isProfileEditing ? (
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Link
                href={profile.previewUrl}
                className="inline-flex min-w-[110px] items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-5 py-3 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] sm:min-w-[120px] sm:text-[14px]"
              >
                Preview
              </Link>
              <Link
                href={profile.shareCvUrl}
                className="inline-flex min-w-[110px] items-center justify-center rounded-xl bg-primary px-5 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:min-w-[120px] sm:text-[14px]"
              >
                Share CV
              </Link>
            </div>
          ) : null}
        </div>

        <nav
          aria-label="Account settings sections"
          className="scrollbar-hide -mx-1 mt-8 flex gap-0 overflow-x-auto sm:gap-2 lg:mt-10"
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
      </Container>
    </section>
  );
}
