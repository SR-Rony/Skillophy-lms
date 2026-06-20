import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { LinkedInBrandIcon } from "@/components/auth/auth-social-icons";
import type { StudentCertificateItem } from "@/types/student-certificate.types";
import { cn } from "@/utils";
import { MyCertificateCardSeamBackground } from "./my-certificate-card-seam-background";

interface MyCertificateCardProps {
  certificate: StudentCertificateItem;
  className?: string;
}

export function MyCertificateCard({ certificate, className }: MyCertificateCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[#f0ece9] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.05)]",
        className
      )}
    >
      <MyCertificateCardSeamBackground />

      <p className="absolute right-5 top-5 z-10 flex items-center gap-1.5 text-[12px] font-medium text-[#757575] sm:right-6 sm:top-6 sm:text-[13px]">
        <CalendarDays className="h-3.5 w-3.5 shrink-0 stroke-[1.8]" aria-hidden />
        {certificate.completedDate}
      </p>

      <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
        <div className="relative mx-auto h-[96px] w-[140px] shrink-0 overflow-hidden rounded-lg border border-[#ebe8e6] bg-white shadow-[0_4px_16px_rgba(35,25,22,0.1)] sm:mx-0 sm:h-[100px] sm:w-[148px]">
          <Image
            src="/images/certificate.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="148px"
          />
        </div>

        <div className="min-w-0 flex-1 pr-0 sm:pr-28">
          <h3 className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
            {certificate.courseTitle}
          </h3>

          <p className="mt-2.5 text-[13px] text-[#757575] sm:text-[14px]">
            Certificate ID:{" "}
            <span className="font-medium text-[#757575]">{certificate.certificateId}</span>
          </p>
          <p className="mt-1 text-[13px] text-[#757575] sm:text-[14px]">
            Total Score:{" "}
            <span className="font-bold text-[#757575]">{certificate.totalScore}</span>
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={certificate.downloadUrl}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:min-w-[150px] sm:text-[14px]"
            >
              Get Certificate
            </Link>
            <Link
              href={certificate.linkedInUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1a1a1a] bg-white px-5 py-3 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] sm:min-w-[170px] sm:text-[14px]"
            >
              <LinkedInBrandIcon className="h-[18px] w-[18px] shrink-0" />
              Add to LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
