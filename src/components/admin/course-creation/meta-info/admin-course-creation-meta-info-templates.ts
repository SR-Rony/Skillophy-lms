import { Brain, CircleDollarSign, Globe, Infinity, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AdminCourseMetaInfoTemplate {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface AdminCourseMetaInfoRequirementTemplate extends AdminCourseMetaInfoTemplate {
  title: string;
}

export interface AdminCourseMetaInfoBenefitTemplate extends AdminCourseMetaInfoTemplate {
  title: string;
  subtitle: string;
}

export interface AdminCourseMetaInfoFaqTemplate extends AdminCourseMetaInfoTemplate {
  question: string;
  answer: string;
}

export const ADMIN_COURSE_REQUIREMENT_TEMPLATES: AdminCourseMetaInfoRequirementTemplate[] = [
  {
    id: "req-internet",
    label: "Good Internet Connection",
    icon: Globe,
    title: "Good Internet Connection",
  },
  {
    id: "req-device",
    label: "Laptop, Desktop, Mobile device",
    icon: Monitor,
    title: "Laptop, Desktop, Mobile device",
  },
  {
    id: "req-perseverance",
    label: "Resolute Mental Perseverance",
    icon: Brain,
    title: "Resolute Mental Perseverance",
  },
];

export const ADMIN_COURSE_BENEFIT_TEMPLATES: AdminCourseMetaInfoBenefitTemplate[] = [
  {
    id: "benefit-lifetime-access",
    label: "Life Time Access",
    icon: Infinity,
    title: "Life Time Access",
    subtitle:
      "You will get life time access typically refers to a purchasing model where a customer pays once for a product or service and can use it indefinitely.",
  },
  {
    id: "benefit-money-back",
    label: "Money Back Guarantee",
    icon: CircleDollarSign,
    title: "Money Back Guarantee",
    subtitle:
      "You will get life time access typically refers to a purchasing model where a customer pays once for a product or service and can use it indefinitely.",
  },
  {
    id: "benefit-device",
    label: "Laptop, Desktop, Mobile device",
    icon: Monitor,
    title: "Laptop, Desktop, Mobile device",
    subtitle: "Access your course materials from any device, anywhere.",
  },
];

export const ADMIN_COURSE_FAQ_TEMPLATES: AdminCourseMetaInfoFaqTemplate[] = [
  {
    id: "faq-purchase",
    label: "How can we buy this course?",
    icon: CircleDollarSign,
    question: "How can we buy this course?",
    answer:
      "You can buy this course directly from our platform. After purchase, you will receive a certificate upon successful completion of all lessons and assessments.",
  },
  {
    id: "faq-certificate",
    label: "Will I get a certificate?",
    icon: Infinity,
    question: "Will I get a certificate?",
    answer:
      "Yes. After completing all lessons and assessments, you will receive a certificate that you can share on your profile.",
  },
  {
    id: "faq-access",
    label: "How long do I have access?",
    icon: Monitor,
    question: "How long do I have access?",
    answer: "You get lifetime access to the course materials after enrollment.",
  },
];
