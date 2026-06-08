import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ROUTES } from "@/constants";
import type { BlogPostNavLink } from "@/types/blog-detail.types";

interface BlogDetailsPostNavigationProps {
  previousPost?: BlogPostNavLink;
  nextPost?: BlogPostNavLink;
}

function NavLabel({
  direction,
  className,
}: {
  direction: "previous" | "next";
  className?: string;
}) {
  const isPrevious = direction === "previous";

  return (
    <span
      className={`inline-flex items-center gap-1 font-sans text-[14px] font-medium text-[#888888] sm:text-[15px] ${className ?? ""}`}
    >
      {isPrevious ? <ChevronLeft className="h-4 w-4" aria-hidden /> : null}
      {isPrevious ? "Previous Blog" : "Next Blog"}
      {!isPrevious ? <ChevronRight className="h-4 w-4" aria-hidden /> : null}
    </span>
  );
}

function NavCard({
  post,
  direction,
}: {
  post: BlogPostNavLink;
  direction: "previous" | "next";
}) {
  const isPrevious = direction === "previous";

  return (
    <Link
      href={ROUTES.blogPost(post.slug)}
      className={`group block max-w-[300px] sm:max-w-[320px] ${isPrevious ? "" : "sm:ml-auto"}`}
    >
      <NavLabel
        direction={direction}
        className={isPrevious ? "" : "w-full justify-end"}
      />

      <div
        className={`mt-3 flex items-center gap-3 ${isPrevious ? "" : "flex-row-reverse"}`}
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[10px] bg-[#E5E7EB] sm:h-[60px] sm:w-[60px]">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover transition group-hover:scale-105"
            sizes="60px"
          />
        </div>

        <p
          className={`line-clamp-2 font-sans text-[15px] font-bold leading-[1.35] text-[#111827] transition group-hover:text-[#374151] sm:text-[16px] ${
            isPrevious ? "text-left" : "text-right"
          }`}
        >
          {post.title}
        </p>
      </div>
    </Link>
  );
}

export function BlogDetailsPostNavigation({
  previousPost,
  nextPost,
}: BlogDetailsPostNavigationProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <nav
      aria-label="Blog post navigation"
      className="rounded-2xl bg-[#F8F8F8] px-5 py-6 sm:px-6 sm:py-7"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        {previousPost ? (
          <NavCard post={previousPost} direction="previous" />
        ) : (
          <div className="hidden flex-1 sm:block" aria-hidden />
        )}

        {nextPost ? (
          <NavCard post={nextPost} direction="next" />
        ) : null}
      </div>
    </nav>
  );
}
