export interface BlogTableOfContentsItem {
  id: string;
  label: string;
}

export interface BlogArticleBlock {
  type: "paragraph" | "heading" | "lead" | "quote";
  text: string;
  id?: string;
}

export interface BlogImageGalleryItem {
  src: string;
  alt: string;
  caption: string;
  variant: "large" | "small";
}

export interface BlogComparisonGallery {
  items: BlogImageGalleryItem[];
  captionLeft: string;
  captionRight: string;
}

export interface BlogComment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  liked?: boolean;
  replyCount?: number;
  replies?: BlogComment[];
}

export interface BlogAuthorBio {
  name: string;
  title: string;
  avatar: string;
  bio: string;
}

export interface BlogEngagementStats {
  likes: number;
  comments: number;
  shares: number;
  views: number;
}

export interface BlogPostNavLink {
  slug: string;
  title: string;
  image: string;
}

export interface BlogPostDetailContent {
  tableOfContents: BlogTableOfContentsItem[];
  introduction: BlogArticleBlock[];
  postMarketplaceSection: BlogArticleBlock[];
  careerSection: BlogArticleBlock[];
  comparisonSection: BlogArticleBlock[];
  comparisonGallery: BlogComparisonGallery;
  comparisonAfterGallery: BlogArticleBlock[];
  certificatesVsDegreesSection: BlogArticleBlock[];
  blockquote: string;
  tags: string[];
  authorBio: BlogAuthorBio;
  engagement: BlogEngagementStats;
  comments: BlogComment[];
  commentCount: number;
  previousPost?: BlogPostNavLink;
  nextPost?: BlogPostNavLink;
}
