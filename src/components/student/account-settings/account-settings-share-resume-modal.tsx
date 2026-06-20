"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Copy, Facebook, Linkedin, X } from "lucide-react";
import type {
  StudentAccountSettingsShareResumeData,
  StudentAccountSettingsShareResumePlatform,
} from "@/types/student-account-settings.types";
import { AccountSettingsModalSeamBackground } from "./account-settings-modal-seam-background";
import { cn } from "@/utils";

interface AccountSettingsShareResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: StudentAccountSettingsShareResumeData;
}

function ShareResumeXIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.53 3H20.5l-7.19 8.21L21.5 21h-6.6l-5.16-6.73L4.1 21H1.12l7.68-8.78L2.5 3h6.77l4.67 6.17L17.53 3Zm-1.16 16.2h1.83L7.78 4.73H5.82l10.55 14.47Z" />
    </svg>
  );
}

function ShareResumeEmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareResumeSocialIcon({
  platform,
  className,
}: {
  platform: StudentAccountSettingsShareResumePlatform;
  className?: string;
}) {
  if (platform === "email") {
    return <ShareResumeEmailIcon className={className} />;
  }

  if (platform === "facebook") {
    return <Facebook className={className} aria-hidden />;
  }

  if (platform === "linkedin") {
    return <Linkedin className={className} aria-hidden />;
  }

  return <ShareResumeXIcon className={className} />;
}

const shareOptionHoverStyles: Record<
  StudentAccountSettingsShareResumePlatform,
  string
> = {
  email: "hover:bg-[#EA4335] hover:text-white",
  facebook: "hover:bg-primary hover:text-white",
  linkedin: "hover:bg-[#0A66C2] hover:text-white",
  x: "hover:bg-[#1a1a1a] hover:text-white",
};

const shareOptionIconStyles: Record<
  StudentAccountSettingsShareResumePlatform,
  string
> = {
  email: "h-[19px] w-[19px] stroke-[2] transition-colors duration-200",
  facebook: "h-[18px] w-[18px] transition-colors duration-200 group-hover:fill-white",
  linkedin:
    "h-[18px] w-[18px] transition-colors duration-200 group-hover:fill-white group-hover:stroke-white",
  x: "h-[18px] w-[18px] transition-colors duration-200 group-hover:fill-white",
};

export function AccountSettingsShareResumeModal({
  open,
  onOpenChange,
  data,
}: AccountSettingsShareResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      setCopied(false);
    }
  }, [open]);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(data.resumeUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none">
          <div className="relative overflow-hidden border-b border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
            <AccountSettingsModalSeamBackground />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Share Resume
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  {data.description}
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <div className="relative overflow-hidden px-5 py-6 sm:px-7 sm:py-7">
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              aria-hidden
            >
              <div className="absolute right-[-10%] bottom-[-40%] h-[160px] w-[160px] rounded-full bg-[#ffe8e4]/25 blur-3xl" />
              <div className="absolute left-[-8%] top-[-20%] h-[140px] w-[140px] rounded-full bg-[#f0e8f8]/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex overflow-hidden rounded-xl border border-[#e0e0e0] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]">
                <input
                  type="text"
                  readOnly
                  value={data.resumeUrl}
                  aria-label="Resume share link"
                  className="min-w-0 flex-1 truncate border-0 bg-white px-4 py-3.5 text-[13px] text-[#1a1a1a] outline-none ring-0 sm:text-[14px]"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex shrink-0 items-center gap-2 bg-primary px-4 py-3.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:px-5 sm:text-[14px]"
                >
                  <Copy className="h-4 w-4 shrink-0" aria-hidden />
                  {copied ? "Copied!" : data.copyLinkLabel}
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 sm:mt-9 sm:gap-5">
                {data.shareOptions.map((option) => (
                  <a
                    key={option.id}
                    href={option.href}
                    target={option.id === "email" ? undefined : "_blank"}
                    rel={option.id === "email" ? undefined : "noopener noreferrer"}
                    aria-label={option.label}
                    className={cn(
                      "group inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f2f2] text-[#4a4a4a] transition-colors duration-200",
                      shareOptionHoverStyles[option.id]
                    )}
                  >
                    <ShareResumeSocialIcon
                      platform={option.id}
                      className={shareOptionIconStyles[option.id]}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
