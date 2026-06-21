"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Download, Facebook, FileCode, FileText, Linkedin, Play, Quote } from "lucide-react";
import type {
  StudentLiveVideoResource,
  StudentLiveVideoResourceFileType,
  StudentLiveVideoSession,
} from "@/types/student-live-video.types";
import { CourseVideoNotesSection } from "@/components/student/course-video/student-course-video-notes-section";
import { cn } from "@/utils";

export type CourseVideoTab = "overview" | "resource" | "notes";

export const courseVideoTabs: { id: CourseVideoTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "resource", label: "Resource" },
  { id: "notes", label: "Notes" },
];

export function CourseVideoPlayer({
  thumbnail,
  title,
  playingLabel = "Video player placeholder",
}: {
  thumbnail: string;
  title: string;
  playingLabel?: string;
}) {
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
            {playingLabel}
          </p>
        </div>
      )}
    </div>
  );
}

export function CourseVideoAboutSection({
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

export function CourseVideoInstructorCard({
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

function CourseVideoResourceFileIcon({ fileType }: { fileType: StudentLiveVideoResourceFileType }) {
  const Icon = fileType === "svg" ? FileCode : FileText;

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f3f4f6] sm:h-[52px] sm:w-[52px]">
      <Icon className="h-6 w-6 text-[#9ca3af] sm:h-7 sm:w-7" aria-hidden />
    </span>
  );
}

function CourseVideoResourceCard({ resource }: { resource: StudentLiveVideoResource }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-[#ebe8e6] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:gap-5 sm:px-5 sm:py-5">
      <CourseVideoResourceFileIcon fileType={resource.fileType} />

      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-semibold leading-snug text-[#1a1a1a] sm:text-[15px]">
          {resource.title}
        </p>
        <p className="mt-1 text-[13px] font-medium text-[#9ca3af] sm:text-[14px]">{resource.moduleTitle}</p>
      </div>

      <a
        href={resource.downloadUrl ?? "#"}
        download={resource.fileType !== "link"}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-opacity hover:opacity-90"
        aria-label={`Download ${resource.title}`}
      >
        <Download className="h-5 w-5" strokeWidth={2} aria-hidden />
      </a>
    </article>
  );
}

export function CourseVideoResourcesSection({ resources }: { resources: StudentLiveVideoResource[] }) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {resources.map((resource) => (
        <CourseVideoResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}

export function CourseVideoTabPanel({
  activeTab,
  session,
}: {
  activeTab: CourseVideoTab;
  session: StudentLiveVideoSession;
}) {
  if (activeTab === "resource") {
    return <CourseVideoResourcesSection resources={session.resources} />;
  }

  if (activeTab === "notes") {
    return (
      <CourseVideoNotesSection
        lessonTitle={session.title}
        moduleTitle={session.moduleTitle}
        currentTimestamp={session.currentTimestamp}
        initialNotes={session.lessonNotes}
      />
    );
  }

  return (
    <div className="space-y-8 sm:space-y-10">
      <CourseVideoAboutSection about={session.about} aboutExtended={session.aboutExtended} />
      <CourseVideoInstructorCard instructor={session.instructor} />
    </div>
  );
}
