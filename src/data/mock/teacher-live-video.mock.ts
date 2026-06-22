import type { TeacherCourseLiveDetailsData } from "@/types/teacher-course-details.types";
import type { StudentLiveVideoSession } from "@/types/student-live-video.types";
import { getTeacherCourseDetails } from "@/data/mock/teacher-course-details.mock";
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

const defaultResources = [
  {
    id: "res-hand-note",
    title: "Hand note of the basics of user experience design.pdf",
    moduleTitle: "Introducing UX design",
    fileType: "pdf" as const,
    downloadUrl: "#",
  },
  {
    id: "res-video-slide",
    title: "Video slide of the basics of user experience design.jpg",
    moduleTitle: "Introducing UX design",
    fileType: "jpg" as const,
    downloadUrl: "#",
  },
  {
    id: "res-code",
    title: "Code of the basics of user experience design.jpg",
    moduleTitle: "Introducing UX design",
    fileType: "svg" as const,
    downloadUrl: "#",
  },
];

const defaultModuleTitle = "Introducing UX design";

const teacherLiveVideoSessions: Record<string, Record<string, Partial<StudentLiveVideoSession>>> = {
  "hsc-25-online-batch": {
    "tm1-l1": {
      lessonId: "tm1-l1",
      title: "The Basics of User Experience Design",
      thumbnail: defaultThumbnail,
      previousLesson: {
        id: "tm1-l5",
        title: "Most common UX tools",
        href: ROUTES.teacher.courseLive("hsc-25-online-batch", "tm1-l5"),
      },
      nextLesson: {
        id: "tm1-l6",
        title: "Assignment on design across platforms",
        href: ROUTES.teacher.courseLive("hsc-25-online-batch", "tm1-l6"),
      },
    },
  },
};

export function getTeacherLiveVideoSession(
  slug: string,
  lessonId = "tm1-l1",
): { course: TeacherCourseLiveDetailsData; session: StudentLiveVideoSession } | null {
  const course = getTeacherCourseDetails(slug);

  if (!course || course.courseType !== "live") {
    return null;
  }

  const overrides = teacherLiveVideoSessions[slug]?.[lessonId] ?? teacherLiveVideoSessions[slug]?.["tm1-l1"];

  const session: StudentLiveVideoSession = {
    slug,
    lessonId: overrides?.lessonId ?? lessonId,
    title: overrides?.title ?? "The Basics of User Experience Design",
    moduleTitle: defaultModuleTitle,
    thumbnail: overrides?.thumbnail ?? defaultThumbnail,
    about: defaultAbout,
    aboutExtended: defaultAboutExtended,
    instructor: defaultInstructor,
    previousLesson: overrides?.previousLesson,
    nextLesson: overrides?.nextLesson,
    resources: defaultResources,
    currentTimestamp: "3:09",
    lessonNotes: [],
    discussionMessages: [],
    currentUser: {
      name: "Teacher",
      avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=Teacher",
    },
  };

  return { course, session };
}
