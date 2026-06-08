"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { BlogDetailsMainContent } from "@/components/public/blog/blog-details/content";
import { BlogDetailsNewsletterSection } from "@/components/public/blog/blog-details/blog-details-newsletter-section";
import { BlogDetailsRelatedBlogsSection } from "@/components/public/blog/blog-details/blog-details-related-blogs-section";
import { BlogDetailsHero } from "@/components/public/blog/blog-details/hero";
import { BlogDetailsSidebar } from "@/components/public/blog/blog-details/sidebar";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import type { BlogPostDetail } from "@/types/blog.types";

interface BlogDetailsContentSectionProps {
  post: BlogPostDetail;
}

export function BlogDetailsContentSection({ post }: BlogDetailsContentSectionProps) {
  return (
    <>
      <BlogDetailsHero post={post} />

      <section className="bg-white py-16">
        <Container
          as={motion.div}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.06 }}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <motion.div variants={sectionTitleFadeUpVariants} className="lg:col-span-8">
              <BlogDetailsMainContent post={post} />
            </motion.div>

            <motion.div variants={sectionTitleFadeUpVariants} className="lg:col-span-4">
              <BlogDetailsSidebar tableOfContents={post.tableOfContents} />
            </motion.div>
          </div>
        </Container>
      </section>

      <BlogDetailsRelatedBlogsSection currentSlug={post.slug} />

      <BlogDetailsNewsletterSection />
    </>
  );
}
