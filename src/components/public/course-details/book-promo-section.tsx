import { Heading } from "@/components/shared/heading";
import Image from "next/image";
import { Download, Sparkles } from "lucide-react";
import type { CourseDetailsBookPromo } from "@/components/public/course-details/types";

interface BookPromoSectionProps {
  book: CourseDetailsBookPromo;
}

export function BookPromoSection({ book }: BookPromoSectionProps) {
  const downloadLabel = `Download ${book.title}`;

  return (
    <div className="relative overflow-visible rounded-[20px] bg-[#f7f7f6] px-4 py-5 sm:px-6 sm:py-6">
      <span className="absolute -right-0.5 top-0 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold text-white shadow-[0_6px_16px] shadow-primary/28 sm:px-3.5 sm:text-[12px]">
        <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
        Free Book
      </span>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative shrink-0 pl-1">
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1 left-0 h-14 w-14 rounded-full bg-[#ffd8d0]/70 blur-[1px] sm:h-16 sm:w-16"
          />
          <div className="relative h-[78px] w-[56px] overflow-hidden rounded-[6px] shadow-[0_8px_20px_rgba(55,31,28,0.16)] ring-1 ring-black/5 sm:h-[88px] sm:w-[62px]">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover"
              sizes="62px"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 pr-2 sm:pr-4">
          <Heading as="h3" variant="course-detail-promo-sm">
            {book.title}
          </Heading>
          <p className="mt-1 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
            By {book.author}
          </p>
        </div>

        {book.downloadUrl ? (
          <a
            href={book.downloadUrl}
            download
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-primary text-white transition hover:bg-primary/90 sm:h-12 sm:w-12"
            aria-label={downloadLabel}
          >
            <Download className="h-5 w-5" aria-hidden />
          </a>
        ) : (
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-primary text-white transition hover:bg-primary/90 sm:h-12 sm:w-12"
            aria-label={downloadLabel}
          >
            <Download className="h-5 w-5" aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}
