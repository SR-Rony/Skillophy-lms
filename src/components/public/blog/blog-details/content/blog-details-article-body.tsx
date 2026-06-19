import type { BlogArticleBlock } from "@/types/blog-detail.types";
import { getHeadingClassName } from "@/components/shared/heading";
import { cn } from "@/utils";

/** Blog section heading — Outfit 700, 32px, 120% line-height */
export const blogDetailsSectionHeadingClassName = getHeadingClassName(
  "blog-section",
  "font-sans text-[#111827]"
);

/** Blog intro lead — Outfit 600, 20px, 130% line-height */
export const blogDetailsLeadClassName =
  "font-sans text-[20px] font-semibold leading-[1.3] tracking-normal text-[#111827]";

/** Blog body copy — Outfit 400, 16px, relaxed line-height */
export const blogDetailsBodyClassName =
  "font-sans text-[16px] font-normal leading-[1.75] tracking-normal text-[#888888]";

function renderArticleBlock(
  block: BlogArticleBlock,
  headingClassName: string,
  quoteClassName = blogDetailsLeadClassName
) {
  if (block.type === "lead") {
    return (
      <p key={block.text.slice(0, 32)} className={blogDetailsLeadClassName}>
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h2
        key={block.id ?? block.text}
        id={block.id}
        className={headingClassName}
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "quote") {
    return (
      <p key={block.text.slice(0, 32)} className={quoteClassName}>
        {block.text}
      </p>
    );
  }

  return (
    <p key={block.text.slice(0, 32)} className={blogDetailsBodyClassName}>
      {block.text}
    </p>
  );
}

interface BlogDetailsArticleBodyProps {
  introduction: BlogArticleBlock[];
  className?: string;
}

export function BlogDetailsArticleBody({ introduction, className }: BlogDetailsArticleBodyProps) {
  return (
    <div id="introduction" className={cn("space-y-6 scroll-mt-32", className)}>
      {introduction.map((block) =>
        renderArticleBlock(block, cn(blogDetailsSectionHeadingClassName, "scroll-mt-32 pt-2"))
      )}
    </div>
  );
}

interface BlogDetailsArticleSectionProps {
  blocks: BlogArticleBlock[];
  quoteUsesBodyStyle?: boolean;
}

export function BlogDetailsArticleSection({
  blocks,
  quoteUsesBodyStyle = false,
}: BlogDetailsArticleSectionProps) {
  const quoteClassName = quoteUsesBodyStyle
    ? blogDetailsBodyClassName
    : blogDetailsLeadClassName;

  return (
    <div className="space-y-6">
      {blocks.map((block) =>
        renderArticleBlock(
          block,
          cn(blogDetailsSectionHeadingClassName, "scroll-mt-32"),
          quoteClassName
        )
      )}
    </div>
  );
}
