"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";
import type { EmployeeSpotlight, EmployeeSpotlightTheme } from "@/types/spotlight-slider.types";

const themeStyles: Record<
  EmployeeSpotlightTheme,
  { card: string; overlay?: string }
> = {
  chalkboard: {
    card: "bg-[#2a4538]",
    overlay:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_34%),repeating-linear-gradient(0deg,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_1px,transparent_4px)]",
  },
  ocean: {
    card: "bg-gradient-to-br from-[#17366f] via-[#1d4280] to-[#244f96]",
    overlay:
      "bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.12),transparent_36%)]",
  },
};

interface EmployeeSpotlightCardProps {
  employee: EmployeeSpotlight;
  className?: string;
}

export function EmployeeSpotlightCard({ employee, className }: EmployeeSpotlightCardProps) {
  const { quote, name, role, image, imageAlt, theme, readMoreHref = "#" } = employee;
  const styles = themeStyles[theme];

  return (
    <article
      className={cn(
        "group relative flex h-[250px] overflow-hidden rounded-[22px] shadow-[0_18px_42px_rgba(35,25,22,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(35,25,22,0.16)] sm:h-[270px] lg:h-[290px]",
        styles.card,
        className,
      )}
    >
      {styles.overlay ? (
        <div className={cn("pointer-events-none absolute inset-0", styles.overlay)} aria-hidden />
      ) : null}

      <div className="relative z-10 flex w-[58%] min-w-0 flex-col justify-between p-5 sm:p-6 lg:p-7">
        <p className="text-[13px] font-normal leading-[1.7] text-white sm:text-[14px] lg:text-[15px]">
          &ldquo;{quote}&rdquo;
        </p>

        <div>
          <p className="text-[11px] font-medium leading-[1.5] text-white/82 sm:text-[12px]">
            {name}, {role}
          </p>
          <Link
            href={readMoreHref}
            className="mt-3 inline-block text-[11px] font-medium text-white underline decoration-white/70 underline-offset-4 transition hover:decoration-white sm:text-[12px]"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex-1">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-bottom object-right pr-2 transition duration-500 group-hover:scale-[1.02] sm:pr-3"
          sizes="(max-width: 1024px) 42vw, 280px"
        />
      </div>
    </article>
  );
}
