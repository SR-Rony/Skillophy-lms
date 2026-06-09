import type { FaqItem } from "@/components/public/faq/types";

export const affiliateFaqData = {
  label: "Frequently Asked Questions",
  title: "Affiliate Program FAQs",
  description:
    "Tell us your needs and we will start on a custom plan to drive results. The intuitive platform made it easy for our employees made it easy for our employees to embrace.",
  faqs: [
    {
      id: "sign-up",
      question: "How do I sign up as a teacher on the platform?",
      answer:
        "Create an account with your email, complete your teacher profile, and submit your credentials for review. Once approved, you can start building classes.",
    },
    {
      id: "availability",
      question: "How can I set my availability for classes?",
      answer:
        "You can show this certificate of ours in the job market as proof of additional qualifications. This Certificate will help in your career development in the industry.",
      defaultOpen: true,
    },
    {
      id: "pricing",
      question: "How do I set the pricing for my classes?",
      answer:
        "Choose a pricing model from your teacher dashboard, set course fees or session rates, and update them anytime before publishing.",
    },
    {
      id: "schedule",
      question: "How do I manage my class schedule?",
      answer:
        "Use the schedule tab to view upcoming sessions, reschedule classes, and sync availability with your calendar in one place.",
    },
  ] satisfies FaqItem[],
};
