import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3 } from "lucide-react";
import type { StudentWorkshopItem } from "@/types/student-workshop.types";
import { cn } from "@/utils";

interface MyWorkshopCardProps {
  workshop: StudentWorkshopItem;
  isCompleted?: boolean;
  className?: string;
}

export function MyWorkshopCard({ workshop, isCompleted = false, className }: MyWorkshopCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]",
        className
      )}
    >
      <div className="relative h-[190px] w-full shrink-0 overflow-hidden sm:h-[205px]">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-5 sm:pt-4">
        <span className="inline-flex w-fit rounded-full bg-[#fff8e8] px-3 py-1 text-[11px] font-semibold text-[#d6a43a]">
          {workshop.category}
        </span>

        <h3 className="mt-3 text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
          {workshop.title}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="flex min-w-0 items-center gap-1.5 text-[13px] font-medium text-[#757575]">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 stroke-[1.8]" aria-hidden />
            <span className="truncate">{workshop.schedule}</span>
          </p>

          {workshop.startsInLabel ? (
            <p className="flex shrink-0 items-center gap-1.5 text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
              <Clock3 className="h-3.5 w-3.5 shrink-0 stroke-[1.8]" aria-hidden />
              <span className="whitespace-nowrap">{workshop.startsInLabel}</span>
            </p>
          ) : null}
        </div>

        <Link
          href={workshop.joinUrl}
          className={cn(
            "mt-4 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-[14px] font-semibold transition-colors sm:mt-5",
            isCompleted
              ? "bg-primary text-white hover:opacity-90"
              : "bg-[#f0f0f0] text-[#757575] hover:bg-primary hover:text-white"
          )}
        >
          {workshop.buttonLabel}
        </Link>
      </div>
    </article>
  );
}
