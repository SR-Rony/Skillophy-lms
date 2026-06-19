"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Download, Linkedin, Lock, Share2 } from "lucide-react";
import type {
  StudentCourseCertificateInfo,
  StudentCourseDetailsData,
} from "@/types/student-course-details.types";
import { Container } from "@/components/shared";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

const CERTIFICATE_IMAGE = "/images/certificate.png";

const DEFAULT_CERTIFICATE_INFO: StudentCourseCertificateInfo = {
  studentName: "Nushrat Jahan",
  studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop",
  certificateId: "5739skill52078",
  verificationId: "14562ebwevgh54s",
};

interface StudentCourseDetailsCertificateTabProps {
  course: StudentCourseDetailsData;
}

function CertificatePreview({ isLocked, alt }: { isLocked: boolean; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#ebe8e6] bg-[#fafafa] shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <div className="relative aspect-[1.35/1] w-full">
        <Image
          src={CERTIFICATE_IMAGE}
          alt={alt}
          fill
          className={cn(
            "object-cover object-center transition-all duration-300",
            isLocked && "scale-[1.02] blur-[1px]"
          )}
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />

        {isLocked && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-white/45 backdrop-blur-[1px]"
            aria-hidden
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/95 shadow-[0_12px_40px_rgba(35,25,22,0.12)] sm:h-28 sm:w-28">
              <Lock className="h-10 w-10 text-primary sm:h-11 sm:w-11" strokeWidth={1.75} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function CertificateLockedPanel({ course }: { course: StudentCourseDetailsData }) {
  const continueHref = course.continueLesson?.href ?? "#";

  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-[#f5d5cf] bg-[#fff8f6] p-6 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-8">
      <Heading as="h2" variant="dashboard-certificate" className="sm:text-[22px]">
        No Certificate Yet!
      </Heading>
      <p className="mt-3 text-[14px] leading-relaxed text-[#6b7280] sm:text-[15px]">
        You currently have no certificates. Enroll a course today or finish your existing course!
      </p>
      <p className="mt-4 text-[13px] font-semibold text-[#1a1a1a]">
        {course.completedTopics} of {course.totalTopics} topics completed ({course.progressPercent}%)
      </p>
      <Link
        href={continueHref}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 sm:w-auto sm:min-w-[140px]"
      >
        Continue
      </Link>
    </div>
  );
}

function CertificateSummaryCard({
  course,
  certificateInfo,
}: {
  course: StudentCourseDetailsData;
  certificateInfo: StudentCourseCertificateInfo;
}) {
  const completedOn = course.completedOn ?? "May 11, 2022";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#f5d5cf] bg-[#fff8f6] p-6 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-8">
      <BadgeCheck
        className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-white/70 sm:right-6 sm:top-6 sm:h-20 sm:w-20"
        strokeWidth={1.25}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-[3px] border-primary sm:h-28 sm:w-28">
            <Image
              src={certificateInfo.studentAvatar}
              alt={certificateInfo.studentName}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white sm:text-[12px]">
            Total Score {course.totalScore}%
          </span>
        </div>

        <Heading as="h3" variant="dashboard-section-bold" className="mt-8">
          Completed by {certificateInfo.studentName}
        </Heading>
        <p className="mt-2 text-[13px] text-[#6b7280]">
          Certificate ID:{" "}
          <span className="font-semibold text-[#1a1a1a]">{certificateInfo.certificateId}</span>
        </p>
        <p className="mt-1 text-[13px] text-[#6b7280]">
          Completion date: <span className="font-semibold text-[#1a1a1a]">{completedOn}</span>
        </p>
      </div>

      <div className="relative z-10 mt-6 border-t border-[#f0ebe8] pt-5">
        <p className="text-center text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">
          Skillophy verifies {certificateInfo.studentName}&apos;s certificate on their successful
          completion of {course.title}
        </p>
      </div>
    </div>
  );
}

function CertificateActionButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <a
        href={CERTIFICATE_IMAGE}
        download
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#ebe8e6] bg-white text-[#1a1a1a] shadow-sm transition-colors hover:bg-[#fafafa]"
        aria-label="Download certificate"
      >
        <Download className="h-5 w-5" aria-hidden />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-[#ebe8e6] bg-white px-4 py-2.5 text-sm font-bold text-[#1a1a1a] shadow-sm transition-colors hover:bg-[#fafafa]"
      >
        <Linkedin className="h-4 w-4" aria-hidden />
        Add to LinkedIn
      </a>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary/90"
      >
        <Share2 className="h-4 w-4" aria-hidden />
        Share
      </button>
    </div>
  );
}

function CertificateUnlockedView({ course }: { course: StudentCourseDetailsData }) {
  const certificateInfo = course.certificateInfo ?? DEFAULT_CERTIFICATE_INFO;

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <Heading as="h2" variant="dashboard-certificate">Completion Certificate</Heading>
          <p className="mt-2 text-[14px] leading-relaxed text-[#6b7280] sm:text-[15px]">
            You successfully completed this course. Your certificate is ready to download and share.
          </p>
        </div>
        <CertificateActionButtons />
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
        <CertificatePreview
          isLocked={false}
          alt={`${course.title} completion certificate`}
        />
        <CertificateSummaryCard course={course} certificateInfo={certificateInfo} />
      </div>
    </div>
  );
}

export function StudentCourseDetailsCertificateTab({ course }: StudentCourseDetailsCertificateTabProps) {
  const isEligible = course.status === "completed" || course.progressPercent >= 100;

  return (
    <section className="relative overflow-hidden bg-white pb-10 sm:pb-12 md:pb-14">
      <MyCoursesSeamBackground />

      <Container className="relative z-10 px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        {isEligible ? (
          <CertificateUnlockedView course={course} />
        ) : (
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
            <CertificatePreview
              isLocked
              alt={`${course.title} certificate preview`}
            />
            <CertificateLockedPanel course={course} />
          </div>
        )}
      </Container>
    </section>
  );
}
