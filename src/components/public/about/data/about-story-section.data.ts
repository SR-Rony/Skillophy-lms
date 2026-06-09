import { ROUTES } from "@/constants";

export const aboutStorySectionData = {
  label: "Our Story",
  title: "Our Edutech Platform's Evolution",
  paragraphs: [
    "Once upon a time, there was a group of passionate educators and tech enthusiasts who saw the potential to revolutionize education through technology.",
    "Fueled by a shared vision of making learning accessible to all, they embarked on a journey to create an innovative edutech platform. Their platform was designed to break down barriers, empower learners, and provide personalized, engaging experiences for students of every background.",
  ],
  ctaLabel: "Explore Our Courses",
  ctaHref: ROUTES.courses,
  imageSrc: "/images/about.png",
  imageAlt: "Educator working at a desk with notes and coffee",
  videoAriaLabel: "Play our story video",
} as const;
