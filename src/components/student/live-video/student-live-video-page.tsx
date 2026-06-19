"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Flag,
  Linkedin,
  Play,
  Quote,
} from "lucide-react";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type { StudentLiveVideoSession } from "@/types/student-live-video.types";
import { StudentCourseLiveCurriculum } from "@/components/student/course-details/student-course-live-curriculum";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

type LiveVideoTab = "overview" | "resource" | "notes";

const tabs: { id: LiveVideoTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "resource", label: "Resource" },
  { id: "notes", label: "Notes" },
];

interface StudentLiveVideoPageProps {
  course: StudentCourseDetailsData;
  session: StudentLiveVideoSession;
}

function LiveVideoPlayer({ thumbnail, title }: { thumbnail: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-[#111111] sm:rounded-[24px]">
      <Image
        src={thumbnail}
        alt={title}
        fill
        className={cn("object-cover transition-opacity", isPlaying && "opacity-35")}
        sizes="(max-width: 1024px) 100vw, 70vw"
        priority
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Play ${title}`}
        >
          <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary shadow-[0_12px_40px_rgba(232,93,76,0.45)] transition-transform hover:scale-105 sm:h-[84px] sm:w-[84px]">
            <Play className="ml-1 h-8 w-8 fill-white text-white sm:h-9 sm:w-9" aria-hidden />
          </span>
        </button>
      )}

      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <p className="rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white">
            Live video player placeholder
          </p>
        </div>
      )}
    </div>
  );
}

function LiveVideoAboutSection({
  about,
  aboutExtended,
}: {
  about: string;
  aboutExtended: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">About this Topic</h2>
      <div className="relative">
        <p className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">{about}</p>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            expanded ? "mt-4 max-h-[400px]" : "max-h-0"
          )}
        >
          <p className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">{aboutExtended}</p>
        </div>
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1a1a1a] transition-colors hover:text-primary"
      >
        {expanded ? "See Less" : "See More"}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
          aria-hidden
        />
      </button>
    </div>
  );
}

function LiveVideoInstructorCard({
  instructor,
}: {
  instructor: StudentLiveVideoSession["instructor"];
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Instructor</h2>

      <div className="relative overflow-hidden rounded-[20px] bg-[#fff5f5] px-5 py-6 sm:px-6 sm:py-7">
        <Quote
          className="pointer-events-none absolute right-5 top-5 h-12 w-12 text-[#f3d4d4] sm:h-14 sm:w-14"
          aria-hidden
        />

        <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center lg:gap-8">
          <div className="relative mx-auto h-[220px] w-[220px] overflow-hidden rounded-[18px] bg-[#ffe066] lg:mx-0">
            <Image
              src={instructor.image}
              alt={instructor.name}
              fill
              className="object-cover object-top"
              sizes="220px"
            />
          </div>

          <div className="relative min-w-0">
            <h3 className="text-[20px] font-bold text-[#1a1a1a] sm:text-[22px]">{instructor.name}</h3>
            <p className="mt-1 text-[14px] font-medium text-[#6f6562] sm:text-[15px]">{instructor.role}</p>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#4a4a4a] sm:text-[15px]">{instructor.bio}</p>

            <div className="mt-5 flex gap-3">
              {instructor.linkedinUrl && (
                <a
                  href={instructor.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              )}
              {instructor.facebookUrl && (
                <a
                  href={instructor.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" aria-hidden />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveVideoTabPanel({
  activeTab,
  session,
}: {
  activeTab: LiveVideoTab;
  session: StudentLiveVideoSession;
}) {
  if (activeTab === "resource") {
    return (
      <div className="space-y-3">
        {session.resources.map((resource) => (
          <div
            key={resource.id}
            className="flex items-center justify-between rounded-xl border border-[#ebe8e6] bg-[#fafafa] px-4 py-3.5"
          >
            <div>
              <p className="text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">{resource.title}</p>
              <p className="mt-0.5 text-[12px] text-[#6f6562]">
                {resource.type}
                {resource.size ? ` · ${resource.size}` : ""}
              </p>
            </div>
            <button
              type="button"
              className="text-[13px] font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === "notes") {
    return (
      <div className="rounded-xl border border-[#ebe8e6] bg-[#fafafa] px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">{session.notes}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 sm:space-y-10">
      <LiveVideoAboutSection about={session.about} aboutExtended={session.aboutExtended} />
      <LiveVideoInstructorCard instructor={session.instructor} />
    </div>
  );
}

export function StudentLiveVideoPage({ course, session }: StudentLiveVideoPageProps) {
  const [activeTab, setActiveTab] = useState<LiveVideoTab>("overview");

  return (
    <div className="bg-white pb-10 pt-6 text-[#1a1a1a] sm:pb-12 sm:pt-8 lg:pb-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
          <Link
            href={ROUTES.student.courseDetails(course.slug)}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:text-[14px]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Go Back
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-[14px]"
          >
            <Flag className="h-4 w-4" aria-hidden />
            Report
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_400px]">
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <LiveVideoPlayer thumbnail={session.thumbnail} title={session.title} />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h1 className="text-[22px] font-bold leading-snug text-[#1a1a1a] sm:text-[26px] lg:text-[28px]">
                {session.title}
              </h1>

              <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
                {session.previousLesson ? (
                  <Link
                    href={session.previousLesson.href}
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden />
                    Previous
                  </Link>
                ) : (
                  <span className="text-[#c4c4c4]">Previous</span>
                )}
                {session.nextLesson ? (
                  <Link
                    href={session.nextLesson.href}
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </Link>
                ) : (
                  <span className="text-[#c4c4c4]">Next</span>
                )}
              </div>
            </div>

            <div>
              <nav
                aria-label="Live class sections"
                className="flex gap-6 border-b border-[#ebe8e6] sm:gap-8"
              >
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "border-b-[3px] pb-3 text-[14px] font-semibold transition-colors sm:text-[15px]",
                        isActive
                          ? "border-primary text-primary"
                          : "border-transparent text-[#6f6562] hover:text-[#1a1a1a]"
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-6 sm:pt-8">
                <LiveVideoTabPanel activeTab={activeTab} session={session} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <StudentCourseLiveCurriculum modules={course.curriculum} courseSlug={course.slug} />
          </aside>
        </div>
      </div>
    </div>
  );
}
