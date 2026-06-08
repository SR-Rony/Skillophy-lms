"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared";
import { BlogDetailsHeroBackground } from "@/components/public/blog/blog-details/hero/blog-details-hero-background";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ROUTES } from "@/constants";
import type { BlogPost } from "@/types/blog.types";

interface BlogDetailsHeroProps {
  post: BlogPost;
}

export function BlogDetailsHero({ post }: BlogDetailsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative bg-gradient-to-b from-[#fff5f2] from-0% via-[#fffcfb] via-[68%] to-white to-[68%] pb-28 pt-10 sm:pb-32 sm:pt-12 lg:pb-36 lg:pt-14">
        <BlogDetailsHeroBackground />

        <Container
          as={motion.div}
          className="relative z-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={sectionTitleFadeUpVariants} className="text-center">
            <Link
              href={ROUTES.blog}
              className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#6f6562] transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="mx-auto max-w-[920px] text-center"
          >
            <h1 className="font-sans text-[32px] font-bold leading-[1.2] tracking-normal text-[#111827] sm:text-[40px] sm:leading-[1.2] lg:text-[46px]">
              {post.title}
            </h1>

            <p className="mt-4 text-[14px] font-medium text-[#6b7280] sm:text-[15px]">
              Last Update:{" "}
              <span className="font-semibold text-[#374151]">{post.lastUpdated}</span> •{" "}
              {post.readTimeLabel}
            </p>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative z-20 mx-auto mt-10 w-full max-w-[920px] sm:mt-12"
          >
            <div className="relative mb-[-112px] aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_24px_56px_rgba(35,25,22,0.18)] sm:mb-[-128px] lg:mb-[-144px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 920px) 100vw, 920px"
              />
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
