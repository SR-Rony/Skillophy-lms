import Image from "next/image";
import { Heading } from "@/components/shared/heading";
import type { BlogAuthorBio } from "@/types/blog-detail.types";

interface BlogDetailsAuthorCardProps {
  author: BlogAuthorBio;
}

export function BlogDetailsAuthorCard({ author }: BlogDetailsAuthorCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-2xl bg-[#F8F8F8] p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
      <div className="relative mx-auto h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full bg-[#FACC15] sm:mx-0 sm:h-[96px] sm:w-[96px]">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          unoptimized
          className="object-cover object-top"
          sizes="96px"
        />
      </div>

      <div className="min-w-0 text-center sm:text-left">
        <Heading as="h3" variant="course-detail-card" className="font-sans text-[#111827]">
          {author.name}
        </Heading>
        <p className="mt-1 font-sans text-[14px] font-normal leading-snug text-[#888888] sm:text-[15px]">
          {author.title}
        </p>
        <p className="mt-5 font-sans text-[15px] font-normal leading-[1.6] text-[#4B5563] sm:mt-6 sm:text-[16px]">
          {author.bio}
        </p>
      </div>
    </article>
  );
}
