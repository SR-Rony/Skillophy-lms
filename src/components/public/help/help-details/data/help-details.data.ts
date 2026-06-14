import type { HelpTopicId } from "@/components/public/help/data/help-topics.data";

export interface HelpArticleNavItem {
  id: string;
  slug: string;
  title: string;
}

export interface HelpArticleNavCategory {
  id: HelpTopicId;
  title: string;
  articles: HelpArticleNavItem[];
}

export interface HelpArticleSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bulletItems?: string[];
  numberedItems?: string[];
}

export interface HelpArticleDetail {
  slug: string;
  title: string;
  lastUpdated: string;
  categoryId: HelpTopicId;
  intro: string[];
  additionalResources: Array<{ label: string; href: string }>;
  sections: HelpArticleSection[];
  nextSteps: {
    heading: string;
    body: string;
  };
}

export const helpArticleNavCategories: HelpArticleNavCategory[] = [
  {
    id: "account-profile",
    title: "Account/Profile",
    articles: [
      { id: "create-account", slug: "create-account", title: "How to Create a Skillophy Account" },
      { id: "reset-password", slug: "reset-password", title: "How to Reset Your Password" },
      { id: "update-profile", slug: "update-profile", title: "How to Update Your Profile" },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    articles: [
      { id: "login-issues", slug: "troubleshooting-login-issues", title: "Troubleshooting Login Issues" },
      {
        id: "audio-video",
        slug: "troubleshoot-audio-video-issues",
        title: "How to Troubleshoot Audio & Video Issues (on a Browser)",
      },
      {
        id: "security-vulnerability",
        slug: "report-security-vulnerability",
        title: "Report a Security Vulnerability",
      },
      { id: "pdf-load", slug: "why-wont-pdf-load", title: "Why Won't the PDF Load?" },
    ],
  },
  {
    id: "learning-experience",
    title: "Learning Experience",
    articles: [
      { id: "enroll-course", slug: "how-to-enroll", title: "How to Enroll in a Course" },
      { id: "download-certificate", slug: "download-certificate", title: "How to Download Your Certificate" },
    ],
  },
  {
    id: "purchase-refunds",
    title: "Purchase/Refunds",
    articles: [
      { id: "payment-methods", slug: "payment-methods", title: "Supported Payment Methods" },
      { id: "request-refund", slug: "request-refund", title: "How to Request a Refund" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    articles: [
      { id: "mobile-app", slug: "skillophy-mobile-app", title: "Using the Skillophy Mobile App" },
    ],
  },
  {
    id: "trust-safety",
    title: "Trust & Safety",
    articles: [
      { id: "report-issue", slug: "report-an-issue", title: "How to Report an Issue" },
      { id: "community-guidelines", slug: "community-guidelines", title: "Community Guidelines" },
    ],
  },
  {
    id: "course-management",
    title: "Course Management",
    articles: [
      { id: "create-course", slug: "create-a-course", title: "How to Create a Course" },
      { id: "publish-course", slug: "publish-a-course", title: "How to Publish a Course" },
    ],
  },
  {
    id: "live-classes",
    title: "Live Classes",
    articles: [
      { id: "schedule-live", slug: "schedule-live-class", title: "How to Schedule a Live Class" },
    ],
  },
  {
    id: "payouts-earnings",
    title: "Payouts & Earnings",
    articles: [
      { id: "track-earnings", slug: "track-earnings", title: "How to Track Your Earnings" },
      { id: "payout-setup", slug: "payout-setup", title: "How to Set Up Payouts" },
    ],
  },
];

export const helpArticleDetails: HelpArticleDetail[] = [
  {
    slug: "troubleshoot-audio-video-issues",
    title: "How to Troubleshoot Audio & Video Issues",
    lastUpdated: "3 June, 2024",
    categoryId: "troubleshooting",
    intro: [
      "If you're having trouble with audio or video playback on Skillophy, the issue may be related to your browser, device, or playback environment. This article walks you through steps to identify and resolve common playback problems.",
      "Before contacting support, try the troubleshooting steps below. They resolve most audio and video issues on desktop and laptop browsers.",
    ],
    additionalResources: [
      { label: "Browser compatibility requirements", href: "#" },
      { label: "How to clear your browser cache", href: "#" },
      { label: "Contact Skillophy Support", href: "/contact" },
    ],
    sections: [
      {
        id: "playback-environment",
        heading: "How to check if your playback environment's causing the issue",
        paragraphs: [
          "Playback problems can happen when your browser, extensions, or display setup interfere with video streaming. Start by confirming whether the issue appears only on Skillophy or on other video sites as well.",
          "If videos fail on multiple sites, the problem is likely with your device or network. If only Skillophy is affected, continue with the steps in this guide.",
        ],
        bulletItems: [
          "Try a different browser (Chrome, Firefox, Safari, or Edge).",
          "Disable browser extensions, especially ad blockers and privacy tools.",
          "Check that your internet connection is stable.",
          "Make sure your browser is updated to the latest version.",
        ],
      },
      {
        id: "built-in-screen",
        heading: "Troubleshooting playback issues on your device's built-in screen",
        numberedItems: [
          "Try watching the original lecture in an incognito or private browsing window.",
          "Clear your browser cache and cookies, then reload the page.",
          "Disable any browser extensions that might block video playback.",
          "Check that your browser allows autoplay and media playback for Skillophy.",
          "Ensure your device volume is turned up and not muted.",
          "Try a different browser to see if the issue persists.",
          "Restart your browser completely and try again.",
          "Check for pending browser or operating system updates.",
          "If using headphones or external speakers, disconnect and test with built-in audio.",
          "Log out of Skillophy, clear cache, log back in, and retry the lecture.",
          "If the issue continues, contact support with your browser name, version, and device type.",
        ],
      },
      {
        id: "external-screen",
        heading: "Troubleshooting playback issues on an external screen",
        bulletItems: [
          "Disconnect the external monitor and test playback on your built-in screen only.",
          "Check that your display cable and adapter are securely connected.",
          "Update your graphics drivers and restart your computer before retrying.",
        ],
      },
    ],
    nextSteps: {
      heading: "Next steps?",
      body: "If you've tried all the steps above and still can't play course videos or audio, contact Skillophy Support with your course name, browser details, and a screenshot of any error message. Our team will help you resolve the issue.",
    },
  },
];

function createFallbackHelpArticle(
  category: HelpArticleNavCategory,
  navItem: HelpArticleNavItem,
): HelpArticleDetail {
  return {
    slug: navItem.slug,
    title: navItem.title,
    lastUpdated: "3 June, 2024",
    categoryId: category.id,
    intro: [
      `This guide covers ${navItem.title.toLowerCase()} on Skillophy.`,
      "Browse the sections below or contact support if you need more help.",
    ],
    additionalResources: [{ label: "Contact Skillophy Support", href: "/contact" }],
    sections: [],
    nextSteps: {
      heading: "Next steps?",
      body: "If you still need help, contact Skillophy Support with your question and our team will assist you.",
    },
  };
}

export function getHelpArticleBySlug(slug: string): HelpArticleDetail | undefined {
  const article = helpArticleDetails.find((item) => item.slug === slug);
  if (article) {
    return article;
  }

  for (const category of helpArticleNavCategories) {
    const navItem = category.articles.find((item) => item.slug === slug);
    if (navItem) {
      return createFallbackHelpArticle(category, navItem);
    }
  }

  return undefined;
}

export function getHelpArticleSlugByTopicId(topicId: HelpTopicId): string | undefined {
  return helpArticleNavCategories.find((category) => category.id === topicId)?.articles[0]?.slug;
}

export function getHelpArticleNavCategory(categoryId: HelpTopicId) {
  return helpArticleNavCategories.find((category) => category.id === categoryId);
}
