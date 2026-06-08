"use client";

import Image from "next/image";
import {
  BlogDetailsArticleSection,
  blogDetailsBodyClassName,
} from "./blog-details-article-body";
import type { BlogArticleBlock, BlogComparisonGallery } from "@/types/blog-detail.types";

interface BlogDetailsComparisonSectionProps {
  blocks: BlogArticleBlock[];
  gallery: BlogComparisonGallery;
  afterGallery: BlogArticleBlock[];
}

function ComparisonGallery({ gallery }: { gallery: BlogComparisonGallery }) {
  const largeImage = gallery.items.find((item) => item.variant === "large") ?? gallery.items[0];
  const smallImages = gallery.items.filter((item) => item.variant === "small");

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-[20px] sm:row-span-2">
          <div className="relative aspect-[3/4] sm:aspect-auto sm:min-h-[420px]">
            <Image
              src={largeImage.src}
              alt={largeImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </figure>

        <div className="flex flex-col gap-4">
          {smallImages.map((item) => (
            <figure key={item.src} className="overflow-hidden rounded-[20px]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 text-[13px] font-medium text-[#888888] sm:flex-row sm:items-center sm:justify-between">
        <span>{gallery.captionLeft}</span>
        <span>{gallery.captionRight}</span>
      </div>
    </div>
  );
}

export function BlogDetailsComparisonSection({
  blocks,
  gallery,
  afterGallery,
}: BlogDetailsComparisonSectionProps) {
  return (
    <div className="space-y-8 sm:space-y-10">
      <BlogDetailsArticleSection blocks={blocks} quoteUsesBodyStyle />
      <ComparisonGallery gallery={gallery} />
      <div className="space-y-6">
        {afterGallery.map((block) => (
          <p key={block.text.slice(0, 32)} className={blogDetailsBodyClassName}>
            {block.text}
          </p>
        ))}
      </div>
    </div>
  );
}
