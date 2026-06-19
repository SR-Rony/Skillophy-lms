"use client";

import { motion } from "framer-motion";
import { BlogPostCard } from "@/components/public/blog/blog-post-card";
import { BlogPostCardSkeleton } from "@/components/public/blog/blog-post-card-skeleton";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { Heading } from "@/components/shared/heading";
import { useRelatedBlogPosts } from "@/hooks/use-blog";

interface BlogDetailsRelatedBlogsSectionProps {
  currentSlug: string;
}

const relatedGridVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function BlogDetailsRelatedBlogsSection({
  currentSlug,
}: BlogDetailsRelatedBlogsSectionProps) {
  const { data: relatedPosts = [], isLoading } = useRelatedBlogPosts(currentSlug, 3);

  const hasPosts = relatedPosts.length > 0;

  if (!isLoading && !hasPosts) {
    return null;
  }

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.div variants={sectionTitleFadeUpVariants} className="max-w-[720px]">
          <Heading as="h2" variant="blog-section" className="font-sans text-[28px] text-[#111827] sm:text-[32px]">
            Related Blogs
          </Heading>
          <p className="mx-auto mt-3 max-w-[520px] font-sans text-[15px] font-normal leading-[1.7] text-[#888888] sm:text-[16px]">
            Online courses using cutting-edge technology and instructional strategies. We prioritise
            accessibility and inclusivity.
          </p>
        </motion.div>

        <motion.div
          key={isLoading ? "loading" : relatedPosts.map((post) => post.id).join("-")}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-7"
          variants={relatedGridVariants}
          initial="hidden"
          animate="visible"
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => <BlogPostCardSkeleton key={index} />)
            : relatedPosts.map((post) => <BlogPostCard key={post.id} post={post} />)}
        </motion.div>
      </Container>
    </section>
  );
}
