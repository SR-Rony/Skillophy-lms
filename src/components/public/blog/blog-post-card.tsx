"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ROUTES } from "@/constants";
import type { BlogPost } from "@/types/blog.types";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.article
      variants={sectionTitleFadeUpVariants}
      initial="hidden"
      animate="visible"
      className="group h-full overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]"
    >
      <Link href={ROUTES.blogPost(post.slug)} className="flex h-full flex-col">
        <div className="relative h-[210px] overflow-hidden sm:h-[220px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 380px"
          />
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
          <p className="text-[12px] font-medium leading-none text-[#6b7280]">
            Last Update: {post.lastUpdated} • {post.readTimeLabel}
          </p>

          <Heading as="h2" variant="card-title" className="mt-3 line-clamp-2">
            {post.title}
          </Heading>

          <p className="mt-3 line-clamp-2 text-[14px] leading-[1.65] text-[#4b5563]">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-6">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6] ring-1 ring-[#e5e7eb]">
              <Image
                src={post.authorAvatar}
                alt={post.author}
                fill
                unoptimized
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-bold leading-tight text-[#111827]">
                {post.author}
              </p>
              <p className="truncate text-[12px] font-medium text-[#6b7280]">
                {post.authorTitle}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
