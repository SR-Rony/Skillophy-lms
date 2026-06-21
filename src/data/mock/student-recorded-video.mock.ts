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

const defaultLessonNotes = [
  {
    id: "note-1",
    timestamp: "1:20",
    lessonTitle: "The Basics of User Experience Design",
    moduleTitle: defaultModuleTitle,
    content:
      "UX designers make those everyday interactions usable, enjoyable, and accessible. The role of an entry-level UX designer might include empathizing with users, defining their pain points, coming up with ideas for design solutions, creating wireframes, prototypes, and mockups, and testing designs to get feedback.",
  },
  {
    id: "note-2",
    timestamp: "3:20",
    lessonTitle: "The Basics of User Experience Design",
    moduleTitle: defaultModuleTitle,
    content: "A little about the company and the team that you'll be working with.",
  },
];

const defaultCurrentUser = {
  name: "Nushrat Jahan",
  avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=NushratJahan",
};

const defaultDiscussionMessages = [
  {
    id: "discussion-1",
    authorName: "Mahmudul Hasan",
    avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=MahmudulHasan",
    content:
      "End user is a term of UX designers make those everyday interactions usable, enjoyable, and accessible. The role of an entry-level UX designer might include empathizing.",
  },
  {
    id: "discussion-2",
    authorName: "Nushrat Jahan",
    avatar: defaultCurrentUser.avatar,
    content: "Can you please explain about end user? I can't understand",
    isCurrentUser: true,
  },
  {
    id: "discussion-3",
    authorName: "Shaown Islam",
    avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=ShaownIslam",
    content: "Mobile devices have limited space, yet they still need",
  },
  {
    id: "discussion-4",
    authorName: "Tabassum",
    avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=Tabassum",
    content:
      "It's a good idea to keep the design relatively minimal and simple. Placing call-to-action buttons front and center, simplifying navigation, and employing commonly used gestures are a few other best practices to consider when designing for mobile users.",
  },
];

const recordedVideoSessions: Record<string, Record<string, Partial<StudentLiveVideoSession>>> = {
  "foundations-user-experience-ux-design": {
    "lesson-basics-ux": {
      lessonId: "lesson-basics-ux",
      title: "The Basics of User Experience Design",
      thumbnail: defaultThumbnail,
      nextLesson: {
        id: "lesson-basics-ux-reading",
        title: "The basics of user experience design",
        href: ROUTES.student.courseResources(
          "foundations-user-experience-ux-design",
          "lesson-basics-ux-reading"
        ),
      },
    },
    "lesson-ux-tools": {
      lessonId: "lesson-ux-tools",
      title: "Most common UX tools",
      thumbnail: defaultThumbnail,
      previousLesson: {
        id: "lesson-basics-ux",
        title: "The basics of user experience design",
        href: ROUTES.student.courseLesson(
          "foundations-user-experience-ux-design",
          "lesson-basics-ux"
        ),
      },
      nextLesson: {
        id: "lesson-quiz-intro",
        title: "Quiz on Introducing user experience design",
        href: ROUTES.student.courseQuiz(
          "foundations-user-experience-ux-design",
          "lesson-quiz-intro"
        ),
      },
    },
  },
};

export function getStudentRecordedVideoSession(
  slug: string,
  lessonId = "lesson-basics-ux"
): { course: StudentCourseDetailsData; session: StudentLiveVideoSession } | null {
  const course = getStudentCourseDetails(slug);

  if (!course || course.courseType !== "recorded") {
    return null;
  }

  const overrides =
    recordedVideoSessions[slug]?.[lessonId] ??
    recordedVideoSessions[slug]?.["lesson-basics-ux"];

  const session: StudentLiveVideoSession = {
    slug,
    lessonId,
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
    lessonNotes: defaultLessonNotes,
    discussionMessages: defaultDiscussionMessages,
    currentUser: defaultCurrentUser,
  };

  return { course, session };
}
