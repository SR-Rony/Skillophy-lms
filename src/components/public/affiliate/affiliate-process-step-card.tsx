import type { CSSProperties } from "react";
import { cn } from "@/utils";
import type { AffiliateHowItWorksStep } from "@/components/public/affiliate/data/affiliate-how-it-works.data";

function StepSparkle({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={cn("h-[18px] w-[18px]", className)}
      style={style}
    >
      <path d="M10 1.5 11.2 7.1 16.8 8.3 11.2 9.5 10 15.1 8.8 9.5 3.2 8.3 8.8 7.1 10 1.5Z" />
    </svg>
  );
}

interface AffiliateProcessStepCardProps {
  step: AffiliateHowItWorksStep;
  index: number;
  className?: string;
}

/** Rounded chevron — soft left corners + rounded arrow tip on the right */
const STEP_CARD_PATH =
  "M 24 0 H 246 C 261 0 273 5 281 16 C 292 31 304 48 316 66 C 322 76 325 84 325 92 C 325 100 322 108 316 118 C 304 136 292 153 281 168 C 273 179 261 184 246 184 H 24 C 11 184 0 173 0 160 V 24 C 0 11 11 0 24 0 Z";

export function AffiliateProcessStepCard({ step, index, className }: AffiliateProcessStepCardProps) {
  return (
    <article
      className={cn(
        "relative w-full min-h-[188px] sm:min-h-[196px]",
        className,
      )}
      style={{ zIndex: index + 1 }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 325 184"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d={STEP_CARD_PATH} fill={step.backgroundColor} />
      </svg>

      <div className="relative z-10 flex min-h-[188px] flex-col px-7 py-7 sm:min-h-[196px] sm:px-8 sm:py-8 lg:pr-[4.75rem] xl:pr-[5.25rem]">
        <div className="absolute right-10 top-7 flex items-start gap-2 sm:right-12 sm:top-8">
          <StepSparkle className="opacity-45" style={{ color: step.sparkleColor }} />
          <StepSparkle
            className="mt-1 h-[14px] w-[14px] opacity-30"
            style={{ color: step.sparkleColor }}
          />
        </div>

        <span
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold leading-none text-white"
          style={{ backgroundColor: step.badgeColor }}
        >
          {step.step}
        </span>

        <h3 className="mt-4 text-[16px] font-bold leading-[1.35] text-[#1a1a1a] sm:text-[17px]">
          {step.title}
        </h3>
        <p className="mt-2.5 min-h-[4.125rem] max-w-[240px] text-[13px] leading-[1.72] text-[#5f5553] sm:min-h-[4.5rem] sm:max-w-[252px] sm:text-[14px]">
          {step.description}
        </p>
      </div>
    </article>
  );
}
