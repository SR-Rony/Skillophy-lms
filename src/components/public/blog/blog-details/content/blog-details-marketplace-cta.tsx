import { Heading } from "@/components/shared/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogDetailsLeadClassName } from "@/components/public/blog/blog-details/content/blog-details-article-body";
import { ROUTES } from "@/constants";

export function BlogDetailsMarketplaceCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#fff5f2] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg
          className="absolute right-[-8%] top-1/2 h-[220px] w-[340px] -translate-y-1/2 text-[#efb0aa]/30 sm:right-[-4%] sm:h-[260px] sm:w-[420px]"
          viewBox="0 0 420 260"
          fill="none"
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <path
              key={index}
              d={`M${420 - index * 18} 130 C ${320 - index * 10} ${20 + index * 4}, ${180 - index * 8} ${240 - index * 6}, ${40 - index * 2} 130`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
        <svg
          className="absolute left-[-10%] top-1/2 h-[180px] w-[280px] -translate-y-1/2 text-[#efb0aa]/22 sm:left-[-6%]"
          viewBox="0 0 280 180"
          fill="none"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <path
              key={index}
              d={`M${index * 16} 90 C ${60 + index * 8} ${20 + index * 3}, ${140 + index * 6} ${160 - index * 4}, ${260 - index * 4} 90`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-10">
        <Heading as="h4" variant="blog-section" className="max-w-[400px] font-sans text-[#111827]">
          Join one of the largest online learning marketplace
        </Heading>

        <Button
          asChild
          variant="publicCta"
          size="publicCta"
          className="h-[52px] shrink-0 rounded-xl px-8 sm:min-w-[160px]"
        >
          <Link href={ROUTES.courses}>See Details</Link>
        </Button>
      </div>
    </div>
  );
}
