"use client";

import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { Container } from "@/components/shared";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { cn } from "@/utils";

const CERTIFICATE_IMAGE = "/images/certificate.png";

interface StudentCourseDetailsCertificateTabProps {
  course: StudentCourseDetailsData;
}

function CertificatePreview({
  isLocked,
  alt,
}: {
  isLocked: boolean;
  alt: string;
}) {
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
          sizes="(max-width: 1024px) 100vw, 50vw"
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
      <h2 className="text-xl font-extrabold text-[#1a1a1a] sm:text-[22px]">No Certificate Yet!</h2>
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

function CertificateUnlockedPanel({ course }: { course: StudentCourseDetailsData }) {
  const certificateHref = course.certificateHref ?? "/student/certificates";

  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-[#ebe8e6] bg-white p-6 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-8">
      <h2 className="text-xl font-extrabold text-[#16a34a] sm:text-[22px]">Certificate Unlocked!</h2>
      <p className="mt-3 text-[14px] leading-relaxed text-[#6b7280] sm:text-[15px]">
        Congratulations! You have successfully completed{" "}
        <span className="font-semibold text-[#1a1a1a]">{course.title}</span>. Download and share
        your certificate.
      </p>
      {course.completedOn && (
        <p className="mt-3 text-[13px] font-semibold text-[#1a1a1a]">
          Completed on {course.completedOn}
        </p>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={certificateHref}
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 sm:w-auto"
        >
          Get Certificate
        </Link>
        <a
          href={CERTIFICATE_IMAGE}
          download
          className="inline-flex w-full items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-6 py-3 text-sm font-bold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] sm:w-auto"
        >
          Download
        </a>
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
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          <CertificatePreview
            isLocked={!isEligible}
            alt={`${course.title} certificate preview`}
          />

          {isEligible ? (
            <CertificateUnlockedPanel course={course} />
          ) : (
            <CertificateLockedPanel course={course} />
          )}
        </div>
      </Container>
    </section>
  );
}
