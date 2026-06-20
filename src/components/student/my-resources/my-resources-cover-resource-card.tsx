import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { cn } from "@/utils";

interface MyResourcesCoverResourceCardProps {
  title: string;
  meta: string;
  coverImage: string;
  downloadUrl: string;
  className?: string;
}

export function MyResourcesCoverResourceCard({
  title,
  meta,
  coverImage,
  downloadUrl,
  className,
}: MyResourcesCoverResourceCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-h-[128px] items-center gap-4 rounded-2xl border border-[#ebe8e6] bg-white p-4 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:min-h-[136px] sm:gap-5 sm:p-5 sm:pr-[72px]",
        className
      )}
    >
      <div className="relative h-[96px] w-[68px] shrink-0 sm:h-[100px] sm:w-[72px]">
        <div
          className="absolute -right-2 bottom-0 h-14 w-14 rounded-full bg-[#ffe8e4] sm:-right-3 sm:h-16 sm:w-16"
          aria-hidden
        />
        <Image
          src={coverImage}
          alt=""
          width={72}
          height={100}
          className="relative z-10 h-full w-full rounded-[6px] object-cover shadow-[0_4px_14px_rgba(35,25,22,0.12)]"
        />
      </div>

      <div className="min-w-0 flex-1 py-1">
        <h3 className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">{title}</h3>
        <p className="mt-1.5 text-[13px] font-medium leading-snug text-[#9ca3af]">{meta}</p>
      </div>

      <Link
        href={downloadUrl}
        aria-label={`Download ${title}`}
        className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white transition-opacity hover:opacity-90 sm:bottom-5 sm:right-5"
      >
        <Download className="h-5 w-5" strokeWidth={2} aria-hidden />
      </Link>
    </article>
  );
}
