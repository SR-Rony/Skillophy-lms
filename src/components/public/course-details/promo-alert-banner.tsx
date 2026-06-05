"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BadgePercent, Clock, X } from "lucide-react";
import { Container } from "@/components/shared";
import { cn } from "@/utils";

const STORAGE_KEY = "skillophy-course-details-promo-dismissed";

interface PromoAlertBannerProps {
  className?: string;
}

export function PromoAlertBanner({ className }: PromoAlertBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(sessionStorage.getItem(STORAGE_KEY) !== "1");
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Promotional offer"
      className={cn("bg-[#2f2f2f] text-white", className)}
    >
      <Container className="relative flex min-h-[44px] items-center justify-center gap-3 py-2.5 pr-10 sm:gap-5 sm:pr-12 lg:gap-8">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px]">
          <span className="inline-flex items-center gap-1.5 font-medium text-white/92">
            <BadgePercent className="h-4 w-4 shrink-0 text-white" aria-hidden />
            <span>
              Redeem the promo code{" "}
              <strong className="font-extrabold text-white">EIDERKHUSHI</strong> to enjoy a{" "}
              <strong className="font-extrabold text-white">35% discount.</strong>
            </span>
          </span>

          <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden />

          <span className="inline-flex items-center gap-1.5 font-medium text-white/92">
            <Clock className="h-4 w-4 shrink-0 text-white" aria-hidden />
            <span>
              Offer expires in <strong className="font-extrabold text-white">3 days!</strong>
            </span>
          </span>
        </div>

        <Link
          href="#enroll"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#ff4747] px-4 py-1.5 text-[12px] font-bold text-white transition hover:bg-[#e63d3d] sm:px-5 sm:text-[13px]"
        >
          Apply Now
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>

        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-white/80 transition hover:bg-white/10 hover:text-white sm:right-3"
          aria-label="Dismiss promotion"
        >
          <X className="h-4 w-4" />
        </button>
      </Container>
    </div>
  );
}
