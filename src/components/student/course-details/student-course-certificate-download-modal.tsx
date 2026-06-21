"use client";

import { useEffect, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AlertTriangle, Check, X } from "lucide-react";
import { cn } from "@/utils";

interface StudentCourseCertificateDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  certificateDownloadUrl?: string;
  defaultCertificateName?: string;
}

export function StudentCourseCertificateDownloadModal({
  open,
  onOpenChange,
  certificateDownloadUrl = "/images/certificate.png",
  defaultCertificateName = "",
}: StudentCourseCertificateDownloadModalProps) {
  const [certificateName, setCertificateName] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (!open) {
      setCertificateName("");
      setIsConfirmed(false);
      return;
    }

    setCertificateName(defaultCertificateName);
    setIsConfirmed(false);
  }, [open, defaultCertificateName]);

  const isValid = certificateName.trim().length > 0 && isConfirmed;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) {
      return;
    }

    const link = document.createElement("a");
    link.href = certificateDownloadUrl;
    link.download = "certificate.png";
    link.click();
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[520px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none">
          <div className="border-b border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Confirm Certificate Name
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  You can use your educational certificate name before download this certificate
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

          <form onSubmit={handleSubmit} className="px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex gap-3 rounded-xl border-l-4 border-[#f59e0b] bg-[#fff8ed] px-4 py-3.5">
              <AlertTriangle
                className="mt-0.5 h-5 w-5 shrink-0 text-[#d97706]"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-[13px] leading-relaxed text-[#6b5344] sm:text-[14px]">
                Double-check your name before download; it can&apos;t be changed once the certificate
                is generated
              </p>
            </div>

            <div className="mt-5">
              <label
                htmlFor="certificate-name"
                className="block text-[14px] font-semibold text-[#757575]"
              >
                Certificate Name
              </label>
              <input
                id="certificate-name"
                type="text"
                value={certificateName}
                onChange={(event) => setCertificateName(event.target.value)}
                placeholder="Enter your certificate name"
                className="mt-2 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3.5 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:font-normal placeholder:text-[#9ca3af] focus:border-[#1a1a1a]"
              />
            </div>

            <label
              htmlFor="certificate-name-confirm"
              className="mt-5 flex cursor-pointer items-center gap-3"
            >
              <span
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border-2 transition-colors",
                  isConfirmed ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#c4c4c4] bg-white"
                )}
              >
                {isConfirmed ? (
                  <Check className="h-2.5 w-2.5 stroke-[3] text-white" aria-hidden />
                ) : null}
              </span>
              <input
                id="certificate-name-confirm"
                type="checkbox"
                checked={isConfirmed}
                onChange={(event) => setIsConfirmed(event.target.checked)}
                className="sr-only"
              />
              <span className="text-[14px] font-medium text-[#6b7280]">
                I am confirming my certificate name
              </span>
            </label>

            <button
              type="submit"
              disabled={!isValid}
              className={cn(
                "mt-6 w-full rounded-xl px-4 py-3.5 text-[14px] font-bold transition-colors sm:text-[15px]",
                isValid
                  ? "bg-primary text-white shadow-sm hover:bg-primary/90"
                  : "cursor-not-allowed bg-[#ececec] text-[#9ca3af]"
              )}
            >
              Save & Download Certificate
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
