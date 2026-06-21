"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { BadgeCheck, Lock } from "lucide-react";
import { resolveVerifiedCertificate } from "@/data/mock/verify-certificate.mock";
import type { VerifiedCertificateData } from "@/types/verify-certificate.types";
import { Container } from "@/components/shared";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

const CERTIFICATE_IMAGE = "/images/certificate.png";

const verifyCardClassName =
  "relative overflow-hidden rounded-2xl border border-[#f0ece9] bg-[#fff8f7] p-6 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-8";

function VerifyCertificateCardSeam() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff8f7] via-[#fff5f5] to-[#faf7fc]" />
      <div className="absolute right-[-12%] top-[-25%] h-[160px] w-[160px] rounded-full bg-[#ffe8e4]/35 blur-3xl" />
      <div className="absolute bottom-[-35%] left-[-10%] h-[140px] w-[140px] rounded-full bg-[#f0e8f8]/25 blur-3xl" />
      <svg
        className="absolute right-[-8%] top-[10%] h-[110px] w-[42%] text-[#ead8d2]/45"
        viewBox="0 0 520 340"
        fill="none"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <path
            key={`verify-seam-${index}`}
            d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

function VerifyCertificateCardShell({ children }: { children: ReactNode }) {
  return (
    <div className={verifyCardClassName}>
      <VerifyCertificateCardSeam />
      <BadgeCheck
        className="pointer-events-none absolute right-4 top-4 z-[1] h-16 w-16 text-[#ffe8e4]/90 sm:right-6 sm:top-6 sm:h-20 sm:w-20"
        strokeWidth={1.25}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function VerifyCertificatePreview({ isLocked }: { isLocked: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <div className="relative aspect-[1.35/1] w-full">
        <Image
          src={CERTIFICATE_IMAGE}
          alt={isLocked ? "Locked certificate preview" : "Verified certificate preview"}
          fill
          className={cn(
            "object-cover object-center transition-all duration-300",
            isLocked && "scale-[1.02] blur-[1px]"
          )}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />

        {isLocked ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-white/45 backdrop-blur-[1px]"
            aria-hidden
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/95 shadow-[0_12px_40px_rgba(35,25,22,0.12)] sm:h-28 sm:w-28">
              <Lock className="h-10 w-10 text-primary sm:h-11 sm:w-11" strokeWidth={1.75} />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function VerifyCertificateAvatarRing({
  avatarUrl,
  alt,
  totalScore,
}: {
  avatarUrl: string;
  alt: string;
  totalScore: number;
}) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (totalScore / 100) * circumference;

  return (
    <div className="relative flex h-[120px] w-[120px] items-center justify-center sm:h-[128px] sm:w-[128px]">
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 120 120"
        aria-hidden
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ececec"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e85d4c"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-white bg-white shadow-sm sm:h-[76px] sm:w-[76px]">
        <Image src={avatarUrl} alt={alt} fill className="object-cover" sizes="76px" />
      </div>

      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#ff5247] px-3 py-1 text-[11px] font-bold text-white shadow-sm sm:text-[12px]">
        Total Score {totalScore}%
      </span>
    </div>
  );
}

function VerifyCertificateForm({
  onVerified,
}: {
  onVerified: (result: VerifiedCertificateData) => void;
}) {
  const [certificateId, setCertificateId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = resolveVerifiedCertificate(certificateId);

    if (!result) {
      setErrorMessage("Certificate ID not found. Please check the ID and try again.");
      return;
    }

    setErrorMessage("");
    onVerified(result);
  }

  return (
    <VerifyCertificateCardShell>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="verify-certificate-id"
          className="block text-[14px] font-semibold text-[#1a1a1a]"
        >
          Certificate ID Verification
        </label>
        <input
          id="verify-certificate-id"
          type="text"
          value={certificateId}
          onChange={(event) => {
            setCertificateId(event.target.value);
            if (errorMessage) {
              setErrorMessage("");
            }
          }}
          placeholder="5739skill52078"
          className="mt-3 w-full rounded-xl border border-[#ebe8e6] bg-white px-4 py-3.5 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:font-normal placeholder:text-[#9ca3af] focus:border-[#1a1a1a]"
        />

        {errorMessage ? (
          <p className="mt-3 text-[13px] font-medium text-primary" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:text-[15px]"
        >
          Submit and Verify
        </button>
      </form>
    </VerifyCertificateCardShell>
  );
}

function VerifyCertificateResultCard({
  result,
  onVerifyAnother,
}: {
  result: VerifiedCertificateData;
  onVerifyAnother: () => void;
}) {
  return (
    <VerifyCertificateCardShell>
      <div className="flex flex-col items-center text-center">
        <VerifyCertificateAvatarRing
          avatarUrl={result.studentAvatar}
          alt={result.studentName}
          totalScore={result.totalScore}
        />

        <Heading as="h2" variant="dashboard-section-bold" className="mt-8">
          Completed by {result.studentName}
        </Heading>
        <p className="mt-2 text-[13px] text-[#6b7280]">
          Certificate ID:{" "}
          <span className="font-semibold text-[#1a1a1a]">{result.certificateId}</span>
        </p>
        <p className="mt-1 text-[13px] text-[#6b7280]">
          Completion date:{" "}
          <span className="font-semibold text-[#1a1a1a]">{result.completedOn}</span>
        </p>
      </div>

      <div className="mt-6 border-t border-[#f0ebe8] pt-5">
        <p className="text-center text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">
          Skillophy verifies {result.studentName}&apos;s certificate on their successful completion
          of {result.courseTitle}
        </p>
      </div>

      <button
        type="button"
        onClick={onVerifyAnother}
        className="mt-5 w-full text-center text-[13px] font-semibold text-[#757575] transition-colors hover:text-[#1a1a1a]"
      >
        Verify another certificate
      </button>
    </VerifyCertificateCardShell>
  );
}

export function VerifyCertificatePageContent() {
  const [verifiedResult, setVerifiedResult] = useState<VerifiedCertificateData | null>(null);

  return (
    <section className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-10 md:pb-20 md:pt-12">
      <Container>
        <div className="max-w-3xl">
          <Heading as="h1" variant="dashboard-page-compact">
            Verify Certificate
          </Heading>
          <p className="mt-3 text-[14px] leading-relaxed text-[#6b7280] sm:text-[15px]">
            Enter certificate ID below to verify. Verify any certificate easily by using the
            provided tool on this platform
          </p>
        </div>

        <div
          className={cn(
            "mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2 lg:items-stretch lg:gap-8"
          )}
        >
          <VerifyCertificatePreview isLocked={!verifiedResult} />

          {verifiedResult ? (
            <VerifyCertificateResultCard
              result={verifiedResult}
              onVerifyAnother={() => setVerifiedResult(null)}
            />
          ) : (
            <VerifyCertificateForm onVerified={setVerifiedResult} />
          )}
        </div>
      </Container>
    </section>
  );
}
