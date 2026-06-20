import { ROUTES } from "@/constants";
import type { StudentCertificatePageData } from "@/types/student-certificate.types";

const courseSlug = "foundations-user-experience-ux-design";

const certificatesDemo = [
  {
    id: "cert-1",
    courseSlug,
    courseTitle: "Build Dynamic User Interfaces (UI) for Websites",
    certificateId: "5739skill52078",
    totalScore: "86.5%",
    completedDate: "May 11, 2022",
    downloadUrl: "#",
    linkedInUrl: "#",
  },
  {
    id: "cert-2",
    courseSlug,
    courseTitle: "Start the UX Design Process: Empathize, Define, and Ideate",
    certificateId: "5739skill52078",
    totalScore: "86.5%",
    completedDate: "May 11, 2022",
    downloadUrl: "#",
    linkedInUrl: "#",
  },
  {
    id: "cert-3",
    courseSlug,
    courseTitle: "Design a User Experience for Social Good & Prepare for Jobs",
    certificateId: "5739skill52078",
    totalScore: "86.5%",
    completedDate: "May 11, 2022",
    downloadUrl: "#",
    linkedInUrl: "#",
  },
  {
    id: "cert-4",
    courseSlug,
    courseTitle: "Build Wireframes and Low-Fidelity Prototypes",
    certificateId: "5739skill52078",
    totalScore: "86.5%",
    completedDate: "May 11, 2022",
    downloadUrl: "#",
    linkedInUrl: "#",
  },
  {
    id: "cert-5",
    courseSlug,
    courseTitle: "Conduct UX Research and Test Early Concepts",
    certificateId: "5739skill52078",
    totalScore: "86.5%",
    completedDate: "May 11, 2022",
    downloadUrl: "#",
    linkedInUrl: "#",
  },
  {
    id: "cert-6",
    courseSlug,
    courseTitle: "Foundations of User Experience (UX) Design",
    certificateId: "5739skill52078",
    totalScore: "86.5%",
    completedDate: "May 11, 2022",
    downloadUrl: "#",
    linkedInUrl: "#",
  },
];

/** Demo certificates — set `certificates` to `[]` to preview empty state. */
export const studentCertificateDemo: StudentCertificatePageData = {
  title: "My Certificate",
  subtitle:
    "Get your course completion certificates here, showcasing your achievements and expertise in various subjects.",
  certificates: certificatesDemo,
  courseFilters: [
    {
      id: courseSlug,
      label: "Foundations of User Experience (UX) Design",
    },
    { id: "hsc-25-online-batch", label: "HSC 25 Online Batch" },
    {
      id: "web-design-development-php-laravel",
      label: "Web Design & Development with PHP & Laravel",
    },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "topic-asc", label: "Course A-Z" },
    { id: "topic-desc", label: "Course Z-A" },
    { id: "date-desc", label: "Newest First" },
    { id: "date-asc", label: "Oldest First" },
  ],
  emptyState: {
    heading: "No Certificate Yet!",
    message:
      "You currently have no certificates. Enroll a course today or finish your existing course!",
    primaryActionLabel: "Explore Courses",
    primaryActionHref: ROUTES.student.courses,
    secondaryActionLabel: "Go to My Course",
    secondaryActionHref: ROUTES.student.courses,
  },
};
