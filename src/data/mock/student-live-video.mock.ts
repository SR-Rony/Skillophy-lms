import type { StudentLiveVideoSession } from "@/types/student-live-video.types";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { getStudentCourseDetails } from "@/data/mock/student-course-details.mock";
import { ROUTES } from "@/constants";

const defaultThumbnail =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop";

const defaultAbout =
  "User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.";

const defaultAboutExtended =
  "Throughout this topic, you will learn how UX designers focus on the why, what, and how of product use. You will explore how to conduct user research, create wireframes and prototypes, and test designs with real users to improve the overall experience.";

const defaultInstructor = {
  name: "Walid Bin Sayed",
  role: "Product Designer at Design Monks",
  bio: "Cultivating a mindset of innovation and empathy, we delve into the heart of product design, where creativity intertwines seamlessly with functionality. Through a meticulous process of sketching, prototyping, and testing, we craft not mere objects, but immersive experiences that resonate with users on a profound level.",
  image: "/images/teacher-cta.png",
  linkedinUrl: "https://linkedin.com",
  facebookUrl: "https://facebook.com",
};

const liveVideoSessions: Record<string, Record<string, Partial<StudentLiveVideoSession>>> = {
  "hsc-25-online-batch": {
    "live-l10": {
      lessonId: "live-l10",
      title: "The Basics of User Experience Design",
      thumbnail: defaultThumbnail,
      previousLesson: {
        id: "live-l4",
        title: "Most common UX tools",
        href: ROUTES.student.courseLive("hsc-25-online-batch", "live-l4"),
      },
      nextLesson: {
        id: "live-l5",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseLive("hsc-25-online-batch", "live-l5"),
      },
    },
  },
};

export function getStudentLiveVideoSession(
  slug: string,
  lessonId = "live-l10"
): { course: StudentCourseDetailsData; session: StudentLiveVideoSession } | null {
  const course = getStudentCourseDetails(slug);

  if (!course || course.courseType !== "live") {
    return null;
  }

  const overrides = liveVideoSessions[slug]?.[lessonId] ?? liveVideoSessions[slug]?.["live-l10"];

  const session: StudentLiveVideoSession = {
    slug,
    lessonId,
    title: overrides?.title ?? "The Basics of User Experience Design",
    thumbnail: overrides?.thumbnail ?? defaultThumbnail,
    about: defaultAbout,
    aboutExtended: defaultAboutExtended,
    instructor: defaultInstructor,
    previousLesson: overrides?.previousLesson,
    nextLesson: overrides?.nextLesson,
    resources: [
      { id: "res-1", title: "UX Design Fundamentals Slides.pdf", type: "PDF", size: "2.4 MB" },
      { id: "res-2", title: "User Research Template.fig", type: "Figma", size: "1.1 MB" },
      { id: "res-3", title: "Week 1 Reading List", type: "Link" },
    ],
    notes:
      "Remember to review the design sprint framework before the next live class. Focus on empathy mapping and user journey documentation for your assignment.",
  };

  return { course, session };
}
