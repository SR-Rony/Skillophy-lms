import {
  ADMIN_LEARNER_PROFILE_NUSHRAT_ID,
  getAdminLearnerManagement,
} from "@/data/mock/admin-learner-management.mock";
import { studentAccountSettingsDemo } from "@/data/mock/student-account-settings.mock";
import type { AdminLearner } from "@/types/admin-learner-management.types";
import type {
  AdminLearnerLiveCourse,
  AdminLearnerLiveCourseProgressTopic,
  AdminLearnerLiveCourseStatus,
  AdminLearnerLiveCourseTopicRecordings,
  AdminLearnerProfileInfoData,
  AdminLearnerProfileMoreData,
  AdminLearnerProfilePageData,
  AdminLearnerRecordedCourse,
  AdminLearnerRecordedCourseProgressTopic,
  AdminLearnerRecordedCourseStatus,
} from "@/types/admin-learner-profile.types";

export { ADMIN_LEARNER_PROFILE_NUSHRAT_ID };

const profileTabs = [
  { id: "recorded-courses" as const, label: "Recorded Courses" },
  { id: "live-courses" as const, label: "LIVE Courses" },
  { id: "learner-profile" as const, label: "Learner Profile" },
  { id: "more" as const, label: "More" },
];

const teacherMaisha = {
  name: "Maisha Afrose",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
};

const progressTopicTitles = [
  "Introducing UX design",
  "Thinking like a UX designer",
  "Identifying pain points in user journeys",
  "Conducting user interviews",
  "Creating empathy maps and personas",
  "Defining problem statements and goals",
  "Ideating design solutions",
  "Building wireframes and user flows",
  "Applying visual design principles",
  "Prototyping interactive experiences",
  "Running usability tests",
  "Presenting design recommendations",
  "Evaluating accessibility in product design",
  "Preparing a UX portfolio case study",
  "UX metrics and product analytics",
  "Design systems fundamentals",
  "Mobile-first responsive design",
  "Collaboration with developers",
  "Portfolio presentation skills",
  "Course recap and next steps",
];

const recordedCourseSortOptions = [
  { id: "default" as const, label: "Default" },
  { id: "name-asc" as const, label: "Name (A-Z)" },
  { id: "name-desc" as const, label: "Name (Z-A)" },
  { id: "date-desc" as const, label: "Newest First" },
  { id: "date-asc" as const, label: "Oldest First" },
  { id: "score-desc" as const, label: "Highest Score" },
  { id: "status-asc" as const, label: "Status" },
];

const liveCourseSortOptions = [
  { id: "default" as const, label: "Default" },
  { id: "name-asc" as const, label: "Name (A-Z)" },
  { id: "name-desc" as const, label: "Name (Z-A)" },
  { id: "date-desc" as const, label: "Newest First" },
  { id: "date-asc" as const, label: "Oldest First" },
  { id: "progress-desc" as const, label: "Highest Progress" },
  { id: "status-asc" as const, label: "Status" },
];

const liveCourseSeeds: Omit<
  AdminLearnerLiveCourse,
  "id" | "progressTopics" | "topicRecordings"
>[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    startDate: "2024-02-10",
    progress: 65,
    totalScore: 87,
    status: "ongoing",
  },
  {
    title: "Materials and Processes for UX Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    startDate: "2024-04-18",
    progress: 100,
    totalScore: 92.4,
    status: "completed",
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    startDate: "2024-06-21",
    progress: 35,
    totalScore: null,
    status: "ongoing",
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    startDate: "2024-09-01",
    progress: 0,
    totalScore: null,
    status: "upcoming",
  },
  {
    title: "Create High-Fidelity Designs and Prototypes",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    startDate: "2024-10-14",
    progress: 20,
    totalScore: null,
    status: "ongoing",
  },
  {
    title: "Responsive Web Design Essentials",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    startDate: "2023-11-05",
    progress: 100,
    totalScore: 78.2,
    status: "completed",
  },
];

function buildFeaturedLiveProgressTopics(): AdminLearnerLiveCourseProgressTopic[] {
  return progressTopicTitles.map((title, index) => {
    const topicNumber = index + 1;

    if (index === 0) {
      return {
        id: `live-topic-${topicNumber}`,
        label: `Topic ${topicNumber}`,
        title,
        status: "completed",
        attendance: 100,
        assignment: 80,
        quizScore: 87,
        totalScore: 87,
      };
    }

    if (index === 1) {
      return {
        id: `live-topic-${topicNumber}`,
        label: `Topic ${topicNumber}`,
        title,
        status: "completed",
        attendance: 89,
        assignment: 76.5,
        quizScore: 59,
        totalScore: 59,
      };
    }

    return {
      id: `live-topic-${topicNumber}`,
      label: `Topic ${topicNumber}`,
      title,
      status: "upcoming",
      attendance: null,
      assignment: null,
      quizScore: null,
      totalScore: null,
    };
  });
}

function buildLiveProgressTopics(
  courseStatus: AdminLearnerLiveCourseStatus,
  courseIndex: number
): AdminLearnerLiveCourseProgressTopic[] {
  if (courseIndex === 0) {
    return buildFeaturedLiveProgressTopics();
  }

  const completedCount =
    courseStatus === "completed" ? 4 : courseStatus === "ongoing" ? 2 : 0;

  return progressTopicTitles.map((title, index) => {
    const topicNumber = index + 1;
    const isCompleted = index < completedCount;
    const isOngoing = !isCompleted && courseStatus === "ongoing" && index === completedCount;

    return {
      id: `live-topic-${courseIndex + 1}-${topicNumber}`,
      label: `Topic ${topicNumber}`,
      title,
      status: isCompleted ? "completed" : isOngoing ? "ongoing" : "upcoming",
      attendance: isCompleted ? 85 + (index % 10) : isOngoing ? 70 : null,
      assignment: isCompleted ? 75 + (index % 8) : isOngoing ? 60 : null,
      quizScore: isCompleted ? 80 + (index % 15) : isOngoing ? null : null,
      totalScore: isCompleted ? 82 + (index % 12) : isOngoing ? null : null,
    };
  });
}

function buildTopicRecordings(courseIndex: number): AdminLearnerLiveCourseTopicRecordings[] {
  const topicCount = courseIndex === 0 ? 4 : 3;

  return progressTopicTitles.slice(0, topicCount).map((title, index) => {
    const topicNumber = index + 1;

    return {
      id: `live-recordings-${courseIndex + 1}-${topicNumber}`,
      label: `Topic ${topicNumber}`,
      title,
      recordings: [
        {
          id: `live-recording-${courseIndex + 1}-${topicNumber}-1`,
          title:
            index === 0
              ? "Design for good user experience"
              : index === 1
                ? "UX design process overview"
                : `Live class session ${topicNumber}.1`,
          classDate: "May 13, 2024",
          dayTime: "Sunday, 9:00 PM",
          duration: "2hrs 32 mins",
          recordingHref: "/admin/courses",
        },
        {
          id: `live-recording-${courseIndex + 1}-${topicNumber}-2`,
          title:
            index === 0
              ? "Understanding user needs"
              : index === 1
                ? "Design thinking workshop"
                : `Live class session ${topicNumber}.2`,
          classDate: "May 15, 2024",
          dayTime: "Tuesday, 8:00 PM",
          duration: "1hr 48 mins",
          recordingHref: "/admin/courses",
        },
      ],
    };
  });
}

function buildLiveCourses(): AdminLearnerLiveCourse[] {
  return liveCourseSeeds.map((course, index) => ({
    id: `learner-live-course-${index + 1}`,
    ...course,
    progressTopics: buildLiveProgressTopics(course.status, index),
    topicRecordings: buildTopicRecordings(index),
  }));
}

function buildFeaturedUxProgressTopics(): AdminLearnerRecordedCourseProgressTopic[] {
  return progressTopicTitles.map((title, index) => {
    const topicNumber = index + 1;

    if (index <= 3) {
      return {
        id: `topic-${topicNumber}`,
        label: `Topic ${topicNumber}`,
        title,
        status: "completed",
        quizScore: index === 0 ? 87 : null,
        progressPercent: 100,
      };
    }

    if (index === 4) {
      return {
        id: `topic-${topicNumber}`,
        label: `Topic ${topicNumber}`,
        title,
        status: "ongoing",
        quizScore: null,
        progressPercent: 20,
      };
    }

    return {
      id: `topic-${topicNumber}`,
      label: `Topic ${topicNumber}`,
      title,
      status: "ongoing",
      quizScore: null,
      progressPercent: 0,
    };
  });
}

function buildProgressTopics(
  courseStatus: AdminLearnerRecordedCourseStatus,
  courseIndex: number
): AdminLearnerRecordedCourseProgressTopic[] {
  if (courseIndex === 0) {
    return buildFeaturedUxProgressTopics();
  }

  const completedTopicCount =
    courseStatus === "completed"
      ? progressTopicTitles.length - 1
      : Math.max(1, (courseIndex % 4) + 1);

  return progressTopicTitles.map((title, index) => {
    const topicNumber = index + 1;
    const isCompleted = index < completedTopicCount;
    const isCurrent = !isCompleted && index === completedTopicCount;

    return {
      id: `topic-${courseIndex + 1}-${topicNumber}`,
      label: `Topic ${topicNumber}`,
      title,
      status: isCompleted ? "completed" : "ongoing",
      quizScore: isCompleted ? 70 + ((index * 7 + courseIndex) % 25) : null,
      progressPercent: isCompleted ? 100 : isCurrent ? 15 + (index % 4) * 5 : 0,
    };
  });
}

type RecordedCourseSeed = Omit<AdminLearnerRecordedCourse, "id" | "progressTopics">;

const recordedCourseSeeds: RecordedCourseSeed[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-03-12",
    totalScore: 87.6,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Materials and Processes for UX Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-05-18",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Competitive Audit in Product Design",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-07-02",
    totalScore: 92.4,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-08-21",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-09-09",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Create High-Fidelity Designs and Prototypes",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-10-14",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Responsive Web Design Essentials",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2023-11-05",
    totalScore: 78.2,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Design Thinking for Innovation",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-01-20",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Accessibility in Digital Products",
    thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-02-28",
    totalScore: 84.1,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Visual Design Principles",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-04-16",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "User Journey Mapping Workshop",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-0f801d84c1b4?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-06-03",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Portfolio Building for UX Designers",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-11-01",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
];

const profileInfoFormOptions = {
  genderOptions: studentAccountSettingsDemo.genderOptions,
  countryOptions: studentAccountSettingsDemo.countryOptions,
  educationFormOptions: studentAccountSettingsDemo.educationFormOptions,
  courseFormOptions: studentAccountSettingsDemo.courseFormOptions,
  skillsFormOptions: studentAccountSettingsDemo.skillsFormOptions,
  jobExperienceFormOptions: studentAccountSettingsDemo.jobExperienceFormOptions,
};

const accountActions = [
  {
    id: "reset-password",
    title: "Reset user password",
    description:
      "By resetting password, user will get a link in his email to set his new password from the portal.",
    actionLabel: "Reset Now",
  },
  {
    id: "deactivate",
    title: "Deactivate account",
    description: "Do you want to deactivate this account?",
    actionLabel: "Deactivate",
  },
  {
    id: "delete",
    title: "Delete account",
    description: "Do you want to delete this account?",
    actionLabel: "Delete",
  },
] as const;

const nushratResumePreviewData = {
  profileSummary:
    "I'm a product designer focused on ensuring great user experience and meeting business needs of designed products. I'm also experienced in implementing marketing strategies and developing both on and offline campaigns. My philosophy is to make products understandable, useful and long-lasting at the same time recognizing they're never finished and constantly changing. I'm always excited to face new challenges and problems.",
  experiences: [
    {
      id: "exp-uber",
      company: "Uber",
      role: "Product Designer",
      dateRange: "Mar 2015 - Present",
      highlights: [
        "Designing safety-focused experiences for Riders and Drivers on Uber",
        "Solving problems to address physical space limitations in driver-partners' cars",
        "Generating ideas to improve user experience and solve problems related to navigation, driving, directions, etc.",
        "Generating and developing ideas to improve customer experience such as the car selection process and enhancing in-cab experiences",
        "Working with operations teams to develop ideas that can improve operational issues such as airport pickups",
      ],
    },
    {
      id: "exp-ifttt",
      company: "IFTTT",
      role: "Product Designer",
      dateRange: "Dec 2013 - Mar 2015",
      highlights: [
        "Worked on complex product design involving consumer facing changes and developer dashboard",
        "Led the design of IFTTT's first true onboarding flow",
        "Maintaining and redesigning internal tools to help keep the lights on",
      ],
    },
    {
      id: "exp-facebook",
      company: "Facebook",
      role: "Product Designer",
      dateRange: "June 2013 - Sep 2013",
      highlights: [
        "Worked on internal tools and privacy features for Facebook",
        "Led the design of Newsfeed's first user personas and user research study",
        "Core designer on a project aimed at improving engagement and time spent on Facebook by users in developing countries",
      ],
    },
    {
      id: "exp-google",
      company: "Google Maps",
      role: "UX/UI Design Intern",
      dateRange: "June 2012 - Sep 2013",
      highlights: [
        "Wireframing the Android app and web tools",
        "Rigorous usability testing for redesigned consumer-facing Maps features",
        "Designed Android feature to allow mobile users to send directions from their computer to their phone",
        "Designed custom map widgets for company websites using the Google Maps API",
      ],
    },
  ],
  education: [
    {
      id: "edu-bsc",
      title: "BSC in Computer Engineering at RUET",
      dateRange: "Interdisciplinary studies, Sep 2010 - May 2013",
      description:
        "1st in class throughout. Minored in visual communications. Thesis on the role of product design in building brand loyalty.",
    },
    {
      id: "edu-msc",
      title: "MSC in Computer Engineering at BUET",
      dateRange: "Interdisciplinary studies, Sep 2010 - May 2013",
      description:
        "Graduated with a first class marks. Minored in visual communications. Thesis on the role of product design in building brand loyalty. 2:1 grade.",
    },
  ],
  details: {
    address: "Dhaka, Bangladesh",
    phone: "(315) 802-8179",
    email: "nushratahan@gmail.com",
  },
  links: [
    {
      id: "resume-link-linkedin",
      platform: "linkedin" as const,
      label: "LinkedIn",
      url: "https://linkedin.com/in/nushratahan",
    },
    {
      id: "resume-link-dribbble",
      platform: "dribbble" as const,
      label: "Dribbble",
      url: "https://dribbble.com/nushratahan",
    },
    {
      id: "resume-link-facebook",
      platform: "facebook" as const,
      label: "Facebook",
      url: "https://facebook.com/nushratahan",
    },
  ],
  skills: ["Digital Marketing", "Adobe Photoshop", "Web Development"],
  interestedAreas: ["Photography", "Travelling", "Reading"],
};

const nushratShareResumeData = {
  description:
    "After finalising the resume, you can preview for polish. You can also download it as PDF for easy sharing and printing.",
  resumeUrl: "https://skillophy/578290nushratresume.pdf",
  copyLinkLabel: "Copy Link",
  shareOptions: [
    {
      id: "email" as const,
      label: "Share via email",
      href: "mailto:?subject=Nushrat%20Jahan%20Resume&body=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
    },
    {
      id: "facebook" as const,
      label: "Share on Facebook",
      href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
    },
    {
      id: "linkedin" as const,
      label: "Share on LinkedIn",
      href: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
    },
    {
      id: "x" as const,
      label: "Share on X",
      href: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
    },
  ],
};

function buildNushratMoreData(): AdminLearnerProfileMoreData {
  return {
    resumeProfile: {
      initials: "NJ",
      fullName: "Nushrat Jahan",
      jobTitle: "Product Designer",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop",
      previewUrl: "#",
      shareCvUrl: "#",
    },
    resumePreviewData: nushratResumePreviewData,
    shareResumeData: nushratShareResumeData,
    accountActions: [...accountActions],
  };
}

function buildMoreData(learner: AdminLearner): AdminLearnerProfileMoreData {
  if (learner.id === ADMIN_LEARNER_PROFILE_NUSHRAT_ID) {
    return buildNushratMoreData();
  }

  return {
    resumeProfile: {
      initials: learner.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      fullName: learner.name,
      jobTitle: "Learner",
      avatarUrl: learner.avatar,
      previewUrl: "#",
      shareCvUrl: "#",
    },
    resumePreviewData: {
      profileSummary: `${learner.name} is an active learner at Skillophy building skills across design, technology, and professional development.`,
      experiences: [
        {
          id: `${learner.id}-exp-1`,
          company: "Design Monks",
          role: "Product Designer",
          dateRange: "February 2022 - Present",
          highlights: [
            "Collaborates on product design tasks, user research, and interface prototyping for client projects.",
          ],
        },
      ],
      education: [
        {
          id: `${learner.id}-edu-1`,
          title: "BSC in Computer Engineering at RUET",
          dateRange: "February 2012 - February 2016",
          description:
            "Completed undergraduate studies with a focus on software engineering and collaborative project work.",
        },
      ],
      details: {
        address: "Dhaka, Bangladesh",
        phone: learner.phone,
        email: learner.email,
      },
      links: [
        {
          id: `${learner.id}-link-linkedin`,
          platform: "linkedin",
          label: "LinkedIn",
          url: "#",
        },
      ],
      skills: ["UI/UX Design", "Web Development"],
      interestedAreas: ["Reading", "Travelling"],
    },
    shareResumeData: {
      description:
        "You can preview, download and share this learner's resume as a PDF for easy sharing and printing.",
      resumeUrl: `https://skillophy/${learner.id}-resume.pdf`,
      copyLinkLabel: "Copy Link",
      shareOptions: nushratShareResumeData.shareOptions.map((option) => ({
        ...option,
        href: option.href.replace(
          "https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
          encodeURIComponent(`https://skillophy/${learner.id}-resume.pdf`)
        ),
      })),
    },
    accountActions: [...accountActions],
  };
}

function buildRecordedCourses(): AdminLearnerRecordedCourse[] {
  return recordedCourseSeeds.map((course, index) => ({
    id: `learner-recorded-course-${index + 1}`,
    ...course,
    progressTopics: buildProgressTopics(course.status, index),
  }));
}

function buildNushratProfileInfo(): AdminLearnerProfileInfoData {
  const demo = studentAccountSettingsDemo;

  return {
    generalInfo: {
      fullName: "Nushrat Jahan",
      certificateName: "Nushrat Jahan",
      email: "nushrat@gmail.com",
      phone: "(209) 555-0104",
      gender: "Female",
      age: "28",
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description:
        "Nushrat Jahan is an active learner at Skillophy focused on UX design and product thinking. She consistently participates in recorded courses and applies practical assignments to build portfolio-ready work.",
    },
    educationData: demo.educationData,
    jobExperienceData: demo.jobExperienceData,
    ...profileInfoFormOptions,
  };
}

function hashLearnerId(learnerId: string) {
  return learnerId.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
}

function buildProfileInfoData(learner: AdminLearner): AdminLearnerProfileInfoData {
  if (learner.id === ADMIN_LEARNER_PROFILE_NUSHRAT_ID) {
    return buildNushratProfileInfo();
  }

  const hash = hashLearnerId(learner.id);

  return {
    generalInfo: {
      fullName: learner.name,
      certificateName: learner.name,
      email: learner.email,
      phone: learner.phone,
      gender: hash % 2 === 0 ? "Female" : "Male",
      age: String(22 + (hash % 15)),
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description: `${learner.name} is a learner at Skillophy exploring courses across design, technology, and professional skills.`,
    },
    educationData: {
      education: [
        {
          id: `${learner.id}-education-1`,
          title: "BSC in Computer Engineering at RUET",
          dateRange: "February 2012 - February 2016",
          description:
            "Completed undergraduate studies with a focus on software engineering, data structures, and collaborative project work.",
        },
      ],
      courses: [
        {
          id: `${learner.id}-course-1`,
          title: "Foundations of User Experience (UX) Design",
          dateRange: "March 2024 - Present",
          status: "ongoing",
        },
      ],
      skills: ["UI/UX Design", "Web Development"],
      interestedAreas: ["Reading", "Travelling"],
    },
    jobExperienceData: {
      maxCustomLinks: 3,
      experiences: [
        {
          id: `${learner.id}-job-1`,
          title: `Product Designer at Design Monks`,
          dateRange: "February 2022 - Present",
          description:
            "Collaborates on product design tasks, user research, and interface prototyping for client projects.",
        },
      ],
      links: [
        {
          id: `${learner.id}-link-portfolio`,
          platform: "portfolio",
          label: "Portfolio",
          url: "https://dribbble.com/username",
        },
        {
          id: `${learner.id}-link-linkedin`,
          platform: "linkedin",
          label: "LinkedIn",
          url: "https://linkedin.com/in/username",
        },
      ],
    },
    ...profileInfoFormOptions,
  };
}

function buildLearnerProfileFromLearner(learner: AdminLearner): AdminLearnerProfilePageData {
  const profileInfo = buildProfileInfoData(learner);
  const isNushrat = learner.id === ADMIN_LEARNER_PROFILE_NUSHRAT_ID;

  return {
    profile: {
      id: learner.id,
      fullName: learner.name,
      phone: isNushrat ? "(209) 555-0104" : learner.phone,
      email: isNushrat ? "nushrat@gmail.com" : learner.email,
      avatarUrl: learner.avatar,
      status: learner.status,
      stats: {
        enrolledCourses: learner.enrolledCourses,
        completedCourses: learner.completedCourses,
      },
      tabs: profileTabs,
    },
    recordedCourses: {
      courses: buildRecordedCourses(),
      sortOptions: recordedCourseSortOptions,
      defaultSortId: "default",
      pageSize: 6,
    },
    liveCourses: {
      courses: buildLiveCourses(),
      sortOptions: liveCourseSortOptions,
      defaultSortId: "default",
      pageSize: 6,
    },
    profileInfo,
    moreData: buildMoreData(learner),
  };
}

const nushratJahanProfile = buildLearnerProfileFromLearner({
  id: ADMIN_LEARNER_PROFILE_NUSHRAT_ID,
  name: "Nushrat Jahan",
  email: "nushrat@gmail.com",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nushrat%20Jahan",
  phone: "(209) 555-0104",
  enrolledCourses: 5,
  completedCourses: 2,
  status: "active",
});

export function getAdminLearnerProfile(learnerId: string): AdminLearnerProfilePageData | null {
  if (learnerId === ADMIN_LEARNER_PROFILE_NUSHRAT_ID) {
    return nushratJahanProfile;
  }

  const learner = getAdminLearnerManagement().learners.find((item) => item.id === learnerId);

  if (!learner) {
    return null;
  }

  return buildLearnerProfileFromLearner(learner);
}
