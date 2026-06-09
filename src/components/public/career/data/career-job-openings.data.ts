import type { JobCategory, JobOpening } from "@/types/career.types";

export const careerJobOpeningsSectionData = {
  label: "Job Openings",
  title: "Open Positions at Skillophy",
  description:
    "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
} as const;

export const careerJobCategories: JobCategory[] = [
  { id: "all", label: "All Position", emptyStateLabel: "any department" },
  {
    id: "product-design",
    label: "Product Design",
    emptyStateLabel: "product design & research",
  },
  { id: "engineering", label: "Engineering", emptyStateLabel: "engineering" },
  { id: "marketing", label: "Marketing", emptyStateLabel: "marketing" },
  { id: "content", label: "Content", emptyStateLabel: "content" },
  { id: "operations", label: "Operations", emptyStateLabel: "operations" },
];

export const careerJobOpenings: JobOpening[] = [
  {
    id: "visual-designer",
    categoryId: "product-design",
    title: "Visual Designer",
    description:
      "Create compelling visual experiences across our learning products and marketing touchpoints.",
    postedAt: "3 days ago",
    compensation: "৳2000",
    jobType: "full-time",
  },
  {
    id: "junior-ui-designer",
    categoryId: "product-design",
    title: "Junior UI Designer",
    description:
      "Support the design team in crafting intuitive interfaces for students and educators.",
    postedAt: "5 days ago",
    compensation: "Negotiable",
    jobType: "part-time",
  },
  {
    id: "senior-product-designer",
    categoryId: "product-design",
    title: "Senior Product Designer",
    description:
      "Lead end-to-end product design for new Skillophy features from research to launch.",
    postedAt: "1 week ago",
    compensation: "৳40-60K",
    jobType: "full-time",
  },
  {
    id: "frontend-engineer",
    categoryId: "engineering",
    title: "Frontend Engineer",
    description:
      "Build responsive, accessible interfaces that help learners stay engaged across devices.",
    postedAt: "2 days ago",
    compensation: "৳45-55K",
    jobType: "full-time",
  },
  {
    id: "backend-engineer",
    categoryId: "engineering",
    title: "Backend Engineer",
    description:
      "Design scalable APIs and services that power course delivery, payments, and analytics.",
    postedAt: "4 days ago",
    compensation: "৳50-65K",
    jobType: "full-time",
  },
  {
    id: "qa-engineer",
    categoryId: "engineering",
    title: "QA Engineer",
    description:
      "Ensure product quality through thoughtful test plans, automation, and release validation.",
    postedAt: "6 days ago",
    compensation: "৳30-40K",
    jobType: "part-time",
  },
  {
    id: "growth-marketer",
    categoryId: "marketing",
    title: "Growth Marketer",
    description:
      "Drive user acquisition and retention campaigns across digital channels and partnerships.",
    postedAt: "3 days ago",
    compensation: "৳35-45K",
    jobType: "full-time",
  },
  {
    id: "social-media-specialist",
    categoryId: "marketing",
    title: "Social Media Specialist",
    description:
      "Manage Skillophy's social presence with creative content that resonates with learners.",
    postedAt: "1 week ago",
    compensation: "Negotiable",
    jobType: "part-time",
  },
  {
    id: "content-writer",
    categoryId: "content",
    title: "Content Writer",
    description:
      "Write clear, engaging copy for blogs, course pages, emails, and product announcements.",
    postedAt: "2 days ago",
    compensation: "৳25-35K",
    jobType: "full-time",
  },
  {
    id: "video-editor",
    categoryId: "content",
    title: "Video Editor",
    description:
      "Edit course trailers, tutorials, and social clips that bring our learning stories to life.",
    postedAt: "5 days ago",
    compensation: "৳20-30K",
    jobType: "part-time",
  },
  {
    id: "hr-coordinator",
    categoryId: "operations",
    title: "HR Coordinator",
    description:
      "Support hiring, onboarding, and people operations as Skillophy continues to grow.",
    postedAt: "4 days ago",
    compensation: "৳28-38K",
    jobType: "full-time",
  },
  {
    id: "operations-associate",
    categoryId: "operations",
    title: "Operations Associate",
    description:
      "Help coordinate day-to-day workflows across teams, vendors, and learner support.",
    postedAt: "1 week ago",
    compensation: "Negotiable",
    jobType: "part-time",
  },
];
