import {
  AlertTriangle,
  BookOpen,
  LockKeyhole,
  ShoppingCart,
  Smartphone,
  UserCircle,
  Video,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type HelpAudience = "learner" | "teacher";

export type HelpTopicId =
  | "account-profile"
  | "troubleshooting"
  | "learning-experience"
  | "purchase-refunds"
  | "mobile"
  | "trust-safety"
  | "course-management"
  | "payouts-earnings"
  | "live-classes";

export interface HelpTopic {
  id: HelpTopicId;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconRing: string;
}

export const helpAudienceOptions: Array<{ id: HelpAudience; label: string }> = [
  { id: "learner", label: "Learner" },
  { id: "teacher", label: "Teacher" },
];

export const learnerHelpTopics: HelpTopic[] = [
  {
    id: "account-profile",
    title: "Account/Profile",
    description: "Manage your account settings.",
    icon: UserCircle,
    iconColor: "text-[#ff8c42]",
    iconRing: "border-[#ff8c42]/35 bg-[#fff4eb]",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Experiencing a technical issue? Check here.",
    icon: AlertTriangle,
    iconColor: "text-[#2bbbad]",
    iconRing: "border-[#2bbbad]/35 bg-[#eefaf8]",
  },
  {
    id: "learning-experience",
    title: "Learning Experience",
    description: "Everything about Skillophy learning experience.",
    icon: BookOpen,
    iconColor: "text-[#8b5cf6]",
    iconRing: "border-[#8b5cf6]/35 bg-[#f5f0ff]",
  },
  {
    id: "purchase-refunds",
    title: "Purchase/Refunds",
    description: "Learn about purchasing courses and refunds.",
    icon: ShoppingCart,
    iconColor: "text-[#6366f1]",
    iconRing: "border-[#6366f1]/35 bg-[#eef0ff]",
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "On the go? Learn about our mobile app.",
    icon: Smartphone,
    iconColor: "text-[#3b82f6]",
    iconRing: "border-[#3b82f6]/35 bg-[#eff6ff]",
  },
  {
    id: "trust-safety",
    title: "Trust & Safety",
    description: "Trust & Safety information and reporting.",
    icon: LockKeyhole,
    iconColor: "text-primary",
    iconRing: "border-primary/35 bg-[#fff0ee]",
  },
];

export const teacherHelpTopics: HelpTopic[] = [
  {
    id: "account-profile",
    title: "Account/Profile",
    description: "Manage your teacher profile and settings.",
    icon: UserCircle,
    iconColor: "text-[#ff8c42]",
    iconRing: "border-[#ff8c42]/35 bg-[#fff4eb]",
  },
  {
    id: "course-management",
    title: "Course Management",
    description: "Create, update, and publish your courses.",
    icon: BookOpen,
    iconColor: "text-[#8b5cf6]",
    iconRing: "border-[#8b5cf6]/35 bg-[#f5f0ff]",
  },
  {
    id: "live-classes",
    title: "Live Classes",
    description: "Schedule sessions and manage live teaching.",
    icon: Video,
    iconColor: "text-[#2bbbad]",
    iconRing: "border-[#2bbbad]/35 bg-[#eefaf8]",
  },
  {
    id: "payouts-earnings",
    title: "Payouts & Earnings",
    description: "Track earnings, payouts, and payment details.",
    icon: Wallet,
    iconColor: "text-[#6366f1]",
    iconRing: "border-[#6366f1]/35 bg-[#eef0ff]",
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Teach and manage courses from your phone.",
    icon: Smartphone,
    iconColor: "text-[#3b82f6]",
    iconRing: "border-[#3b82f6]/35 bg-[#eff6ff]",
  },
  {
    id: "trust-safety",
    title: "Trust & Safety",
    description: "Community guidelines and reporting tools.",
    icon: LockKeyhole,
    iconColor: "text-primary",
    iconRing: "border-primary/35 bg-[#fff0ee]",
  },
];

export function getHelpTopics(audience: HelpAudience) {
  return audience === "teacher" ? teacherHelpTopics : learnerHelpTopics;
}
