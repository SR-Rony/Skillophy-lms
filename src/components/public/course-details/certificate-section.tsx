import Image from "next/image";
import { Check } from "lucide-react";
import type { CourseDetailsCertificate } from "@/components/public/course-details/types";

interface CertificateSectionProps {
  data: CourseDetailsCertificate;
}

export function CertificateSection({ data }: CertificateSectionProps) {
  return (
    <section id="course-certificate" className="scroll-mt-28 min-w-0">
      <div className="relative rounded-[20px] bg-[#fff5f2] px-6 py-10 sm:px-8 sm:py-12 lg:px-6 lg:py-12 xl:px-10 xl:py-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
          <svg
            className="absolute -right-10 top-0 h-48 w-72 text-[#ffd8c8]/85 sm:h-56 sm:w-80"
            viewBox="0 0 280 180"
            fill="none"
            aria-hidden
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <path
                key={index}
                d={`M${12 + index * 8} ${154 - index * 8} C ${84 + index * 6} ${36 - index * 2}, ${164 + index * 4} ${32 + index * 3}, ${254 - index * 4} ${126 - index * 4}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>

          <svg
            className="absolute -bottom-8 -right-6 h-44 w-64 text-[#ffd8c8]/70 sm:h-52 sm:w-72"
            viewBox="0 0 240 160"
            fill="none"
            aria-hidden
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <path
                key={index}
                d={`M${6 + index * 7} ${124 - index * 6} C ${64 + index * 5} ${74 - index * 2}, ${134 + index * 4} ${72 + index * 2}, ${214 - index * 3} ${114 - index * 3}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* Below xl: stacked (main column too narrow beside sidebar). xl+: two columns. */}
        <div className="relative z-[1] flex min-w-0 flex-col gap-10 xl:grid xl:grid-cols-[minmax(0,1fr)_280px] xl:items-center xl:gap-10">
          <div className="min-w-0">
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#2d2926] sm:text-[30px] lg:text-[28px] xl:text-[32px]">
              Course Certificate
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[1.55] text-[#4a4a4a] sm:text-[17px] lg:text-[16px] xl:text-[18px]">
              {data.descriptionLines[0]}
              <br />
              {data.descriptionLines[1]}
            </p>

            <ul className="mt-7 space-y-5 sm:mt-8">
              {data.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3.5">
                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#28a745]">
                    <Check className="h-3 w-3 stroke-[3] text-white" aria-hidden />
                  </span>
                  <span className="text-[15px] font-normal leading-snug text-[#4a4a4a] sm:text-[16px] lg:text-[15px] xl:text-[17px]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-[520px] shrink-0 xl:mx-0 xl:w-[280px] xl:max-w-[280px]">
            <div className="relative aspect-[920/650] w-full">
              <div
                aria-hidden
                className="absolute bottom-0 right-0 h-[72%] w-[82%] rounded-[clamp(18px,5%,26px)] bg-[linear-gradient(145deg,#ff9658_0%,#ff6d42_52%,#ff4034_100%)] shadow-[0_14px_32px_rgba(255,64,52,0.2)]"
              />

              <div className="absolute inset-[1.5%] z-10">
                <Image
                  src={data.image}
                  alt="Course certificate preview"
                  fill
                  className="object-contain drop-shadow-[0_10px_24px_rgba(35,28,25,0.14)]"
                  sizes="(max-width: 1279px) 520px, 280px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
