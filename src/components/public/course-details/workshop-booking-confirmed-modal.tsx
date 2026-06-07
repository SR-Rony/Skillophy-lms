"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { ROUTES } from "@/constants";

interface WorkshopBookingConfirmedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scheduleLabel: string;
  goToWorkshopHref?: string;
}

export function WorkshopBookingConfirmedModal({
  open,
  onOpenChange,
  scheduleLabel,
  goToWorkshopHref = ROUTES.student.assignments,
}: WorkshopBookingConfirmedModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)] focus:outline-none sm:px-8">
          <Dialog.Close
            type="button"
            className="absolute right-4 top-4 rounded-full p-1 text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
            aria-label="Close confirmation"
          >
            <X className="h-5 w-5" aria-hidden />
          </Dialog.Close>

          <div className="flex flex-col items-center px-2 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] shadow-[0_8px_20px_rgba(34,197,94,0.28)]">
              <Check className="h-7 w-7 text-white" strokeWidth={3} aria-hidden />
            </span>

            <Dialog.Title className="mt-5 text-[22px] font-bold tracking-[-0.02em] text-[#22c55e] sm:text-[24px]">
              Booking Confirmed
            </Dialog.Title>

            <Dialog.Description className="mt-4 max-w-[320px] text-[14px] leading-[1.65] text-[#4a4a4a]">
              This workshop will be held on {scheduleLabel}. You will get the workshop joining link
              in the workshop menu.
            </Dialog.Description>

            <Link
              href={goToWorkshopHref}
              onClick={() => onOpenChange(false)}
              className="mt-7 inline-flex h-[52px] min-w-[180px] items-center justify-center rounded-[12px] bg-[#1a1a1a] px-8 text-[14px] font-bold text-white transition hover:bg-[#2b2220]"
            >
              Go to Workshop
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
