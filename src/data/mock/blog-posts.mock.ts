import type { BlogCategory, BlogCategoryId, BlogPost } from "@/types/blog.types";

const CATEGORY_IDS: Exclude<BlogCategoryId, "all">[] = [
  "professional",
  "popular",
  "skill-development-it",
  "academic",
  "latest",
  "creative-lifestyle",
];

export const blogCategories: BlogCategory[] = [
  { id: "all", label: "All", itemCount: 56 },
  { id: "professional", label: "Professional", itemCount: 6 },
  { id: "popular", label: "Popular", itemCount: 6 },
  { id: "skill-development-it", label: "Skill Development & IT", itemCount: 6 },
  { id: "academic", label: "Academic", itemCount: 6 },
  { id: "latest", label: "Latest", itemCount: 6 },
  { id: "creative-lifestyle", label: "Creative & Lifestyle", itemCount: 6 },
];

const categoryLabels: Record<Exclude<BlogCategoryId, "all">, string> = {
  professional: "Professional",
  popular: "Popular",
  "skill-development-it": "Skill Development & IT",
  academic: "Academic",
  latest: "Latest",
  "creative-lifestyle": "Creative & Lifestyle",
};

const authors = [
  {
    author: "Abdullah Mamun",
    authorTitle: "Founder of AB Agency",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AbdullahMamun",
  },
  {
    author: "Nadia Rahman",
    authorTitle: "Learning Strategist",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NadiaRahman",
  },
  {
    author: "Rakib Hasan",
    authorTitle: "Senior Product Designer",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RakibHasan",
  },
  {
    author: "Sarah Collins",
    authorTitle: "Career Coach",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahCollins",
  },
];

const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop",
];

const titles = [
  "What should you earn: a certificate or a degree?",
  "How to Build a Learning Habit That Actually Sticks",
  "UI Design Trends Shaping Digital Products in 2026",
  "How to Switch Careers Without Starting From Zero",
  "AI Tools Every Student Should Know in 2026",
  "Portfolio Projects That Actually Get You Hired",
  "Color Theory for Beginners: A Practical Guide",
  "A Realistic Study Schedule for Working Professionals",
  "Next.js Performance Checklist for Production Apps",
  "Networking for Introverts: Low-Pressure Strategies That Work",
  "Why Soft Skills Matter More Than Ever in Remote Teams",
  "The Complete Guide to Freelancing While You Learn",
  "How to Turn Course Projects Into Real Client Work",
  "Top Mistakes Beginners Make in UI Design",
  "Building Confidence Before Your First Job Interview",
];

const defaultExcerpt =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.";

const readTimeLabels = ["8-10 mins read", "10-12 mins read", "6-8 mins read", "12-15 mins read"];

function slugify(title: string, index: number) {
  return `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-${index + 1}`;
}

function createPost(index: number, categoryId: Exclude<BlogCategoryId, "all">): BlogPost {
  const author = authors[index % authors.length];
  const title = titles[index % titles.length];
  const month = (index % 12) + 1;
  const day = (index % 27) + 1;

  return {
    id: String(index + 1),
    slug: slugify(title, index),
    title,
    excerpt: defaultExcerpt,
    content: [
      defaultExcerpt,
      "Skillophy helps learners stay consistent with structured paths, live sessions, and practical assignments that mirror real-world work.",
      "Use what you learn immediately in projects, share progress with mentors, and iterate based on feedback to grow faster.",
    ],
    image: images[index % images.length],
    categoryId,
    categoryLabel: categoryLabels[categoryId],
    author: author.author,
    authorTitle: author.authorTitle,
    authorAvatar: author.authorAvatar,
    lastUpdated: `${day} ${new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(2024, month - 1, 1))}, 2024`,
    readTimeLabel: readTimeLabels[index % readTimeLabels.length],
  };
}

function generateBlogPosts(totalCount: number): BlogPost[] {
  const posts: BlogPost[] = [];

  for (let index = 0; index < totalCount; index += 1) {
    const categoryId = CATEGORY_IDS[index % CATEGORY_IDS.length];
    posts.push(createPost(index, categoryId));
  }

  return posts;
}

export const blogPosts: BlogPost[] = generateBlogPosts(56);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAdjacentBlogPosts(slug: string) {
  const index = blogPosts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return { previousPost: undefined, nextPost: undefined };
  }

  const previous = blogPosts[index - 1];
  const next = blogPosts[index + 1];

  return {
    previousPost: previous
      ? { slug: previous.slug, title: previous.title, image: previous.image }
      : undefined,
    nextPost: next ? { slug: next.slug, title: next.title, image: next.image } : undefined,
  };
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPostBySlug(slug);

  if (!current) {
    return blogPosts.slice(0, limit);
  }

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.categoryId === current.categoryId
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.categoryId !== current.categoryId
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function filterBlogPosts(
  posts: BlogPost[],
  options: { query?: string; categoryId?: BlogCategoryId }
) {
  const normalizedQuery = options.query?.trim().toLowerCase();
  let filtered = posts;

  if (options.categoryId && options.categoryId !== "all") {
    filtered = filtered.filter((post) => post.categoryId === options.categoryId);

    if (!normalizedQuery) {
      filtered = filtered.slice(0, 6);
    }
  }

  if (normalizedQuery) {
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.author.toLowerCase().includes(normalizedQuery) ||
        post.categoryLabel.toLowerCase().includes(normalizedQuery)
    );
  }

  return filtered;
}

export function getBlogCategoryCounts() {
  return blogCategories;
}
