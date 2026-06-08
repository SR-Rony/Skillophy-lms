import type { BlogPost, BlogPostDetail } from "@/types/blog.types";
import type { BlogPostDetailContent } from "@/types/blog-detail.types";
import { getAdjacentBlogPosts } from "@/data/mock/blog-posts.mock";

export type { BlogPostDetail } from "@/types/blog.types";

const defaultDetailContent: Omit<BlogPostDetailContent, never> = {
  tableOfContents: [
    { id: "introduction", label: "Introduction" },
    { id: "career-path", label: "When you're looking for" },
    { id: "certificate-vs-degree", label: "Professional Certificates vs. degrees" },
    { id: "certificates-vs-degrees", label: "Conclusion" },
  ],
  introduction: [
    {
      type: "lead",
      text: "Chances are, you've come across a job posting (or two) that requires a bachelor's degree, even if the responsibilities don't align with that kind of education.",
    },
    {
      type: "paragraph",
      text: "That's because employers typically set the standards around credentials. “Jobs do not require four-year degrees,” Harvard Business School summarized in a recent report. “Employers do.”",
    },
    {
      type: "paragraph",
      text: "Part of that preference has to do with the fact that companies with an educated workforce tend to have higher rates of productivity, per the Economic Policy Institute. But when the average job posting receives around 118 applicants, a degree can also be a way to narrow the applicant pool. It becomes a kind of shorthand. Manjari Raman, program director of Harvard Business School's Managing the Future of Work, told BBC that",
    },
    {
      type: "quote",
      text: "“Many companies [have taken] the easy route of using the four-year college degree as a proxy” for a particular ability or skill set”",
    },
  ],
  postMarketplaceSection: [
    {
      type: "paragraph",
      text: "However, we've started to see things change. Chalk it up to the growth of data-driven business models or the exciting opportunities bound up in AI, but what companies need from their workforce has been shifting—and often, they can't find the skilled employees they most need. In fact, the World Economic Forum estimated that reskilling and upskilling will be crucial to ensure workers have key skills. And we're not just talking about technical skills. Workplace skills, like analytical thinking, remain incredibly important.",
    },
    {
      type: "paragraph",
      text: "To address that problem, more employers have chosen to drop bachelor's degree requirements, according to The Burning Glass Institute, which gets us to a very important question.",
    },
  ],
  careerSection: [
    {
      type: "heading",
      id: "career-path",
      text: "When you're looking to either begin a career or pivot to a new one?",
    },
    {
      type: "paragraph",
      text: "Understanding what you want now and what you'll want later is key. There's education to meet you where you are. You can find short-term programs, like Professional Certificates, to help you acquire skills quickly. But if you eventually want to advance in your career, what will you need in order to do that? Zooming out and looking a few years ahead can be a great thought experiment to help you make your choice.",
    },
    {
      type: "paragraph",
      text: "Here's where some light research can be really helpful. Once you have some idea about your immediate and eventual career goals, take time to review job postings for job titles associated with each level: entry-level, associate, mid, and senior. What are the education and credential requirements? If you can, dig a bit deeper: Try to find people who are farther along in the same career and look at their education path through their LinkedIn profile. If possible, seek out informational interviews. Typically, these help you understand a particular role, but you can also ask about the person's educational path to understand if it might make sense for you.",
    },
  ],
  comparisonSection: [
    {
      type: "heading",
      id: "certificate-vs-degree",
      text: "What is your best option: a Professional Certificate or a degree?",
    },
    {
      type: "paragraph",
      text: "Both paths can move your career forward, but they serve different goals. A Professional Certificate helps you build specific, job-ready skills quickly. A degree offers broader academic training and long-term credibility in fields that still require it.",
    },
    {
      type: "quote",
      text: "“Professional Certificates are perfect for people who want to gain job-ready skills quickly without committing to a full degree program. They focus on practical competencies that employers value,” said Marni Baker Stein, Chief Content Officer at Coursera. “They’re also a great way to explore a new field and see exactly what the experience is like.”",
    },
  ],
  comparisonGallery: {
    items: [
      {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c912?w=700&auto=format&fit=crop",
        alt: "Graduate in cap and gown holding diploma",
        caption: "Graduation day celebration",
        variant: "large",
      },
      {
        src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop",
        alt: "Graduation cap and diploma on table",
        caption: "Graduation cap and diploma",
        variant: "small",
      },
      {
        src: "https://images.unsplash.com/photo-1519682337058-a94d51933763?w=500&auto=format&fit=crop",
        alt: "Gold medal with ribbon",
        caption: "Achievement award",
        variant: "small",
      },
    ],
    captionLeft: "Graduation day celebration",
    captionRight: "| Photographer: Anisur Rahman",
  },
  comparisonAfterGallery: [
    {
      type: "paragraph",
      text: "There are also a growing number of performance-based online master's degrees that let you pay as you go, complete coursework on your schedule, and earn a credential from a respected university — often without leaving your job.",
    },
  ],
  certificatesVsDegreesSection: [
    {
      type: "heading",
      id: "certificates-vs-degrees",
      text: "Professional certificates vs. degrees",
    },
    {
      type: "paragraph",
      text: "When you have a better idea about the overall credentials you'll need, reflect on what you need right away and what you may need eventually. Compared with degrees, Professional Certificates don't take as long to complete, often cost much less, and emphasize technical skills development above all else. In fact, they're pretty much designed to help you pursue specific roles in months rather than years.",
    },
    {
      type: "paragraph",
      text: "Both bachelor's and master's degrees take more time to earn compared to Professional Certificates, and they're also significantly more expensive. Yet, degrees can be worth it. They deepen your subject knowledge, add to your skill set, and are often designed to develop well-rounded graduates who are able to think critically and creatively about the world around them—abilities that rank among the most important for workers to have, according to the World Economic Forum.",
    },
    {
      type: "paragraph",
      text: "There's also a wealth of evidence out there that any kind of degree raises salary levels and lowers unemployment risk compared to high school diplomas. What's more, even though entry-level roles may be dropping bachelor's degree requirements, you may eventually need a degree to advance in your career.",
    },
  ],
  blockquote:
    "Whether you're a student looking to supplement. Skillophy has completely transformed the way I approach learning. The platform's intuitive interface and diverse range of courses. Skillophy helped me gain on-the-job confidence, build a portfolio",
  tags: ["Certificate", "Degree", "Professional", "Bachelor"],
  authorBio: {
    name: "Abdullah Mamun",
    title: "Founder of ab agency",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&crop=faces",
    bio: "In her past agency life, Abdullah Mamun has led digital marketing initiatives for Fortune 500 companies. Now, he is passionate about helping retailers and retail industry leaders harness the power of the written word and fuse it with strategic content, email and social media marketing campaigns.",
  },
  engagement: {
    likes: 128,
    comments: 45,
    shares: 32,
    views: 2400,
  },
  commentCount: 45,
  comments: [
    {
      id: "c1",
      author: "Uddin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&crop=faces",
      date: "April 26, 2024",
      content:
        "It would be helpful if you add HashTag/Topics so users can find photos and related content more easily.",
      likes: 57,
      liked: true,
      replyCount: 2,
    },
    {
      id: "c2",
      author: "Md Sadiqur Rahman Fahim",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop&crop=faces",
      date: "April 27, 2024",
      content:
        "The solution you have provided using lean UX is really good and informative.",
      likes: 23,
      liked: true,
      replyCount: 1,
      replies: [
        {
          id: "c2-r1",
          author: "Nushrat Jahan",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&crop=faces",
          date: "April 27, 2024",
          content: "Glad to hear that",
          likes: 15,
          liked: false,
        },
      ],
    },
  ],
};

export function getBlogPostDetail(post: BlogPost): BlogPostDetail {
  const { previousPost, nextPost } = getAdjacentBlogPosts(post.slug);

  return {
    ...post,
    ...defaultDetailContent,
    previousPost,
    nextPost,
  };
}

export function getBlogPostDetailBySlug(
  slug: string,
  findPost: (slug: string) => BlogPost | undefined
): BlogPostDetail | undefined {
  const post = findPost(slug);
  if (!post) {
    return undefined;
  }
  return getBlogPostDetail(post);
}
