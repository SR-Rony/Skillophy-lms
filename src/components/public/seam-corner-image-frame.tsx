import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/utils";

const cornerAccentClassName =
  "pointer-events-none absolute z-0 h-[124px] w-[124px] sm:h-[132px] sm:w-[132px]";

const cornerAccentPath =
  "M0 104C0 118.359 11.641 130 26 130H28V40C28 33.373 33.373 28 40 28H104C115.598 28 124 19.598 124 8V0H26C11.641 0 0 11.641 0 26V104Z";

interface SeamCornerAccentProps {
  mirrored?: boolean;
  gradientId: string;
}

function SeamCornerAccent({ mirrored = false, gradientId }: SeamCornerAccentProps) {
  return (
    <svg
      viewBox="0 0 132 132"
      fill="none"
      aria-hidden
      className={cn(
        cornerAccentClassName,
        mirrored ? "-bottom-5 -right-5 rotate-180" : "-left-5 -top-5",
      )}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="132" x2="132" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d={cornerAccentPath} />
    </svg>
  );
}

export interface SeamCornerImageFrameProps {
  imageSrc: string;
  imageAlt: string;
  gradientIdPrefix: string;
  imageSizes?: string;
  aspectClassName?: string;
  roundedClassName?: string;
  shadowClassName?: string;
  playButtonAriaLabel?: string;
  className?: string;
}

export function SeamCornerImageFrame({
  imageSrc,
  imageAlt,
  gradientIdPrefix,
  imageSizes = "(max-width: 1024px) 92vw, 560px",
  aspectClassName = "aspect-[4/3] w-full sm:aspect-[16/11]",
  roundedClassName = "rounded-[44px] sm:rounded-[52px] lg:rounded-[56px]",
  shadowClassName = "shadow-[0_22px_50px_rgba(80,37,31,0.1)]",
  playButtonAriaLabel,
  className,
}: SeamCornerImageFrameProps) {
  const topLeftGradientId = `${gradientIdPrefix}-corner-tl`;
  const bottomRightGradientId = `${gradientIdPrefix}-corner-br`;

  return (
    <div className={cn("relative px-5 py-5 sm:px-6 sm:py-6", className)}>
      <SeamCornerAccent gradientId={topLeftGradientId} />
      <SeamCornerAccent mirrored gradientId={bottomRightGradientId} />

      <div
        className={cn("relative z-10 overflow-hidden", roundedClassName, shadowClassName)}
      >
        <div className={cn("relative", aspectClassName)}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes={imageSizes}
          />
        </div>

        {playButtonAriaLabel ? (
          <button
            type="button"
            aria-label={playButtonAriaLabel}
            className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_14px_rgba(255,77,77,0.2)] transition hover:scale-105 hover:bg-primary/90 sm:h-[72px] sm:w-[72px]"
          >
            <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
          </button>
        ) : null}
      </div>
    </div>
  );
}
