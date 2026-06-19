import { Heading } from "@/components/shared/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export function BlogDetailsWriterCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#fff5f2] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
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

      <div className="relative z-10 mx-auto flex max-w-[640px] flex-col items-center text-center">
        <Heading as="h3" variant="blog-section">Want to be a Writer?</Heading>

        <p className="mt-4 max-w-[520px] font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-[#4B5563] sm:text-[18px]">
          If you aspire to contribute as a writer to our blog, please feel free to submit your blog
          post to our email address.
        </p>

        <Button
          asChild
          className="mt-8 h-[52px] min-w-[160px] rounded-xl bg-[#FF4D4D] px-10 text-[13px] font-black text-white shadow-[0_14px_28px_rgba(255,77,77,0.24)] transition hover:-translate-y-0.5 hover:bg-[#FF4D4D]/90"
        >
          <Link href="mailto:writers@skillophy.com">Send Blog</Link>
        </Button>
      </div>
    </div>
  );
}
