import {
  BlogDetailsArticleBody,
  BlogDetailsArticleSection,
} from "./blog-details-article-body";
import { BlogDetailsAuthorCard } from "./blog-details-author-card";
import { BlogDetailsBlockquote } from "./blog-details-blockquote";
import { BlogDetailsCommentsSection } from "./blog-details-comments-section";
import { BlogDetailsComparisonSection } from "./blog-details-comparison-section";
import { BlogDetailsEngagementBar } from "./blog-details-engagement-bar";
import { BlogDetailsMarketplaceCta } from "./blog-details-marketplace-cta";
import { BlogDetailsPostNavigation } from "./blog-details-post-navigation";
import { BlogDetailsPromoBanner } from "./blog-details-promo-banner";
import { BlogDetailsTags } from "./blog-details-tags";
import { BlogDetailsWriterCta } from "./blog-details-writer-cta";
import type { BlogPostDetail } from "@/types/blog.types";

interface BlogDetailsMainContentProps {
  post: BlogPostDetail;
}

export function BlogDetailsMainContent({ post }: BlogDetailsMainContentProps) {
  return (
    <div className="space-y-10 sm:space-y-12">
      <BlogDetailsArticleBody introduction={post.introduction} />

      <div className="space-y-8 sm:space-y-10">
        <BlogDetailsMarketplaceCta />
        <BlogDetailsArticleSection
          blocks={[...post.postMarketplaceSection, ...post.careerSection]}
        />
      </div>

      <BlogDetailsBlockquote text={post.blockquote} />

      <BlogDetailsComparisonSection
        blocks={post.comparisonSection}
        gallery={post.comparisonGallery}
        afterGallery={post.comparisonAfterGallery}
      />

      <BlogDetailsPromoBanner />

      <BlogDetailsArticleSection blocks={post.certificatesVsDegreesSection} />

      <BlogDetailsWriterCta />

      <BlogDetailsTags tags={post.tags} />

      <BlogDetailsAuthorCard author={post.authorBio} />

      <BlogDetailsEngagementBar stats={post.engagement} />

      <BlogDetailsCommentsSection commentCount={post.commentCount} comments={post.comments} />

      <BlogDetailsPostNavigation
        previousPost={post.previousPost}
        nextPost={post.nextPost}
      />
    </div>
  );
}
