"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Heart, MessageCircle } from "lucide-react";
import { ROUTES } from "@/constants";
import type { BlogComment } from "@/types/blog-detail.types";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

interface BlogDetailsCommentsSectionProps {
  commentCount: number;
  comments: BlogComment[];
}

type SortOption = "most-recents" | "oldests";

const sortLabels: Record<SortOption, string> = {
  "most-recents": "Most Recents",
  oldests: "Oldests",
};

function CommentActions({
  comment,
  replyCount,
}: {
  comment: BlogComment;
  replyCount?: number;
}) {
  const replies = replyCount ?? comment.replies?.length ?? 0;

  return (
    <div className="mt-3 flex items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4 sm:gap-5">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#666666] transition hover:text-[#FF4D4D]"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              comment.liked ? "fill-[#FF4D4D] text-[#FF4D4D]" : "text-[#666666]"
            )}
            aria-hidden
          />
          {comment.likes}
        </button>

        {replies > 0 ? (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#666666]">
            <MessageCircle className="h-4 w-4" aria-hidden />
            {replies} {replies === 1 ? "reply" : "reply"}
          </span>
        ) : null}
      </div>

      <button
        type="button"
        className="text-[13px] font-medium text-[#666666] transition hover:text-[#111827]"
      >
        Reply
      </button>
    </div>
  );
}

function CommentItem({ comment, isReply = false }: { comment: BlogComment; isReply?: boolean }) {
  return (
    <div className={isReply ? "relative pl-6 sm:pl-8" : undefined}>
      {isReply ? (
        <span
          className="absolute bottom-0 left-0 top-0 w-px bg-[#E5E7EB]"
          aria-hidden
        />
      ) : null}

      <div className="flex gap-3 sm:gap-4">
        <div
          className={cn(
            "relative shrink-0 overflow-hidden rounded-full bg-[#F3F4F6]",
            isReply ? "h-9 w-9 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-11 sm:w-11"
          )}
        >
          <Image
            src={comment.avatar}
            alt={comment.author}
            fill
            unoptimized
            className="object-cover"
            sizes={isReply ? "40px" : "44px"}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-sans text-[14px] font-bold leading-tight text-[#111827] sm:text-[15px]">
            {comment.author}
          </p>
          <p className="mt-0.5 font-sans text-[12px] font-normal text-[#888888] sm:text-[13px]">
            {comment.date}
          </p>
          <p className="mt-2 font-sans text-[14px] font-normal leading-[1.65] text-[#4B5563] sm:text-[15px]">
            {comment.content}
          </p>
          <CommentActions comment={comment} replyCount={isReply ? undefined : comment.replyCount} />
        </div>
      </div>

      {comment.replies?.length ? (
        <div className="mt-5 space-y-5">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function BlogDetailsCommentsSection({
  commentCount,
  comments,
}: BlogDetailsCommentsSectionProps) {
  const [sort, setSort] = useState<SortOption>("most-recents");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortedComments = [...comments].sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();

    if (sort === "oldests") {
      return aTime - bTime;
    }

    return bTime - aTime;
  });

  return (
    <section className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:p-6 lg:p-7">
      <Heading as="h3" variant="course-detail-card" className="font-sans text-[#111827]">
        {commentCount} Comments
      </Heading>

      <div className="mt-5 flex flex-col gap-4 rounded-xl bg-[#F5F5F5] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
        <div>
          <p className="font-sans text-[15px] font-bold text-[#111827] sm:text-[16px]">
            Start the Conversation
          </p>
          <p className="mt-1 font-sans text-[13px] font-normal text-[#888888] sm:text-[14px]">
            Become a member of Skillophy to share your thoughts
          </p>
        </div>

        <Link
          href={ROUTES.auth.register}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-[#FF4D4D] px-7 font-sans text-[13px] font-bold text-white transition hover:bg-[#FF4D4D]/90 sm:min-w-[140px]"
        >
          Get Started
        </Link>
      </div>

      <div ref={sortRef} className="relative mt-5">
        <button
          type="button"
          onClick={() => setIsSortOpen((open) => !open)}
          className="inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-[#111827]"
          aria-expanded={isSortOpen}
          aria-haspopup="listbox"
        >
          {sortLabels[sort]}
          <ChevronDown
            className={cn("h-4 w-4 transition", isSortOpen && "rotate-180")}
            aria-hidden
          />
        </button>

        {isSortOpen ? (
          <div
            role="listbox"
            className="absolute left-0 top-full z-10 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-[#E5E7EB] bg-white py-1 shadow-[0_8px_24px_rgba(15,23,42,0.1)]"
          >
            {(Object.keys(sortLabels) as SortOption[]).map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={sort === option}
                onClick={() => {
                  setSort(option);
                  setIsSortOpen(false);
                }}
                className={cn(
                  "block w-full px-4 py-2.5 text-left font-sans text-[14px] font-medium text-[#111827] transition hover:bg-[#FFF0ED]",
                  sort === option && "bg-[#FFF0ED]"
                )}
              >
                {sortLabels[option]}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-5 border-t border-[#E5E7EB]" />

      <div className="mt-6 space-y-8 sm:mt-7 sm:space-y-9">
        {sortedComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
