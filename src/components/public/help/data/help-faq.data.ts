import type { FaqItem } from "@/components/public/faq/types";
import type { HelpAudience, HelpTopicId } from "@/components/public/help/data/help-topics.data";

export interface HelpFaqItem extends FaqItem {
  audience: HelpAudience;
  topicId: HelpTopicId;
}

export const helpFaqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      id: "learner-career-growth",
      audience: "learner",
      topicId: "learning-experience",
      question: "Is this course grow my career?",
      answer:
        "Skillophy courses are designed with practical projects and industry-relevant skills so you can apply what you learn directly in the job market.",
    },
    {
      id: "learner-buy-course",
      audience: "learner",
      topicId: "purchase-refunds",
      question: "How can we buy this course?",
      answer:
        "You can show this certificate of ours in the job market as proof of additional qualifications. This Certificate will help in your career development in the industry.",
      defaultOpen: true,
    },
    {
      id: "create-account",
      audience: "learner",
      topicId: "account-profile",
      question: "How do I create a Skillophy account?",
      answer:
        "Click Register, enter your mobile number and profile details, verify the OTP sent to your phone, and your account will be ready to use.",
    },
    {
      id: "reset-password",
      audience: "learner",
      topicId: "account-profile",
      question: "How can I reset my password?",
      answer:
        "On the login page, choose Forgot Password, enter your mobile number, verify the OTP, and set a new password on the reset screen.",
    },
    {
      id: "enroll-course",
      audience: "learner",
      topicId: "learning-experience",
      question: "How do I enroll in a course?",
      answer:
        "Browse courses from the Courses page, open a course you like, add it to your cart or enroll directly, and complete checkout if payment is required.",
    },
    {
      id: "payment-methods",
      audience: "learner",
      topicId: "purchase-refunds",
      question: "Which payment methods are supported?",
      answer:
        "Skillophy supports popular local and international payment options shown at checkout. Available methods may vary by course and region.",
    },
    {
      id: "video-not-playing",
      audience: "learner",
      topicId: "troubleshooting",
      question: "Why is my course video not playing?",
      answer:
        "Refresh the page, check your internet connection, and try another browser. If the issue continues, clear cache or contact support with your course name.",
    },
    {
      id: "mobile-app",
      audience: "learner",
      topicId: "mobile",
      question: "Can I learn on the Skillophy mobile app?",
      answer:
        "Yes. Download the Skillophy app, sign in with your account, and continue lessons, assignments, and live classes from your phone.",
    },
    {
      id: "report-issue",
      audience: "learner",
      topicId: "trust-safety",
      question: "How do I report unsafe content or behavior?",
      answer:
        "Use the report option on the course or profile page, or contact support with details. Our trust and safety team reviews every report.",
    },
    {
      id: "teacher-create-course",
      audience: "teacher",
      topicId: "course-management",
      question: "How do I create and publish a course?",
      answer:
        "Open your teacher dashboard, go to Courses, create a new course, add modules and lessons, then submit for review before publishing.",
      defaultOpen: true,
    },
    {
      id: "teacher-live-class",
      audience: "teacher",
      topicId: "live-classes",
      question: "How do I schedule a live class?",
      answer:
        "From the Live section in your dashboard, create a session, set date and time, and share the join link with enrolled students.",
    },
    {
      id: "teacher-payout",
      audience: "teacher",
      topicId: "payouts-earnings",
      question: "When do I receive my earnings?",
      answer:
        "Earnings are calculated after eligible enrollments and released according to the payout schedule shown in your teacher payments area.",
    },
    {
      id: "teacher-profile",
      audience: "teacher",
      topicId: "account-profile",
      question: "How do I update my public teacher profile?",
      answer:
        "Go to Settings or Profile in your teacher dashboard to update your bio, photo, credentials, and social links shown on your public page.",
    },
    {
      id: "teacher-mobile",
      audience: "teacher",
      topicId: "mobile",
      question: "Can I manage courses from mobile?",
      answer:
        "Yes. The mobile app lets you respond to students, review progress, and join live sessions while you are on the go.",
    },
    {
      id: "teacher-trust",
      audience: "teacher",
      topicId: "trust-safety",
      question: "What are Skillophy community guidelines for teachers?",
      answer:
        "Teachers must provide accurate course content, respect learner privacy, and follow platform policies. Violations can be reported and reviewed by our team.",
    },
  ] satisfies HelpFaqItem[],
} as const;

const teacherTopicIds: HelpTopicId[] = ["course-management", "payouts-earnings", "live-classes"];

export function getHelpAudienceByTopicId(topicId: HelpTopicId): HelpAudience {
  return teacherTopicIds.includes(topicId) ? "teacher" : "learner";
}

export function getHelpFaqsByCategory(topicId: HelpTopicId): FaqItem[] {
  return filterHelpFaqs("", getHelpAudienceByTopicId(topicId), topicId);
}

export function filterHelpFaqs(
  query: string,
  audience: HelpAudience,
  topicId: HelpTopicId | null,
): FaqItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return helpFaqData.faqs.filter((faq) => {
    if (faq.audience !== audience) {
      return false;
    }

    if (topicId && faq.topicId !== topicId) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      faq.question.toLowerCase().includes(normalizedQuery) ||
      faq.answer.toLowerCase().includes(normalizedQuery)
    );
  });
}
