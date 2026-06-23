import type { AdminCourseCreationData } from "@/types/admin-course-creation.types";

const teachers = [
  {
    id: "teacher-abdullah",
    name: "Abdullah Mamun",
    email: "mamun@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
  },
  {
    id: "teacher-guy",
    name: "Guy Hawkins",
    email: "guy@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Guy%20Hawkins",
  },
  {
    id: "teacher-maisha",
    name: "Maisha Afrose",
    email: "pena@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
  },
  {
    id: "teacher-brooklyn",
    name: "Brooklyn Simmons",
    email: "brooklyn68@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Brooklyn%20Simmons",
  },
  {
    id: "teacher-darrell",
    name: "Darrell Steward",
    email: "guy@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Darrell%20Steward",
  },
  {
    id: "teacher-eleanor",
    name: "Eleanor Pena",
    email: "bessie@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eleanor%20Pena",
  },
];

export const adminCourseCreationData: AdminCourseCreationData = {
  steps: [
    { id: "general-info", label: "General Info" },
    { id: "curriculum", label: "Course Curriculum" },
    { id: "meta-info", label: "Meta Info" },
  ],
  generalInfo: {
    isActive: true,
    courseTitle: "Foundations of User Experience (UX) Design",
    courseLevel: "beginner",
    courseCategory: "skill-development",
    courseDuration: "40-hours",
    coursePrice: "4100",
    courseSummary:
      "This course introduces learners to the fundamentals of user experience design. You will explore how research, ideation, and prototyping come together to create intuitive digital products that solve real user problems.",
    introVideoUrl: "https://www.youtube.com/watch?v=zpdOGUlw9dA",
    courseOverview:
      "Foundations of User Experience (UX) Design is the first of a series of courses that equips you with the skills needed to apply to entry-level jobs in user experience design. UX designers focus on the interactions people have with products like websites, mobile apps, and physical objects.",
    whatYouWillLearn:
      "• Identify common job responsibilities of entry-level UX designers.\n• Understand foundational concepts in UX design.\n• Explain why design sprints are an important and useful part of the UX process.\n• Describe the basics of user-centered design.",
    mainTeacherIds: ["teacher-abdullah", "teacher-guy", "teacher-darrell"],
    supportTeacherIds: ["teacher-abdullah", "teacher-guy", "teacher-darrell"],
  },
  formOptions: {
    courseLevels: [
      { value: "beginner", label: "Beginner Level" },
      { value: "intermediate", label: "Intermediate Level" },
      { value: "advanced", label: "Advanced Level" },
    ],
    courseCategories: [
      { value: "free", label: "Free Courses" },
      { value: "job", label: "Job Courses" },
      { value: "vocational", label: "Vocational Courses" },
      { value: "skill-development", label: "Skill Development" },
      { value: "popular", label: "Popular" },
    ],
    courseDurations: [
      { value: "20-hours", label: "20 hours" },
      { value: "40-hours", label: "40 hours" },
      { value: "60-hours", label: "60 hours" },
      { value: "80-hours", label: "80 hours" },
    ],
    teachers,
    maxTeachersPerRole: 5,
  },
  curriculum: {
    topics: [
      {
        id: "topic-1",
        title: "Introducing UX design",
        isExpanded: true,
        items: [
          {
            id: "topic-1-lesson-1",
            type: "lesson",
            title: "The basics of user experience design",
            resourceLabel: "1 resource",
          },
          {
            id: "topic-1-lesson-2",
            type: "lesson",
            title: "Design for good user experience",
            resourceLabel: "No resource",
          },
          {
            id: "topic-1-resource-1",
            type: "resource",
            title: "Hand note of the Introducing UX design",
          },
          {
            id: "topic-1-quiz-1",
            type: "quiz",
            title: "Quiz on Introducing user experience design",
          },
        ],
      },
      {
        id: "topic-2",
        title: "Design for good user experience",
        isExpanded: false,
        items: [],
      },
    ],
  },
  metaInfo: {
    jobStats: {
      jobOpening: "13000",
      remoteJobs: "5400",
      hiringInBd: "21",
    },
    skillBooks: [
      {
        id: "skill-book-1",
        title: "Don't Make Me Think",
        subtitle: "By Steve Krug",
        isFreeDownloadable: true,
      },
    ],
    academicGuides: [
      {
        id: "academic-guide-1",
        title: "Class 9-10 English Guide",
        subtitle: "By NCTB",
        isFreeDownloadable: false,
      },
    ],
    skills: [
      "User Experience Design (UXD)",
      "Prototype",
      "Wireframe",
      "UX Research",
      "Adobe",
    ],
    requirements: [
      {
        id: "requirement-1",
        title: "Good Internet Connection",
      },
    ],
    benefits: [
      {
        id: "benefit-1",
        title: "Life Time Access",
        subtitle:
          "You will get life time access typically refers to a purchasing model where a customer pays once for a product or service and can use it indefinitely.",
      },
      {
        id: "benefit-2",
        title: "Money Back Guarantee",
        subtitle:
          "You will get life time access typically refers to a purchasing model where a customer pays once for a product or service and can use it indefinitely.",
      },
      {
        id: "benefit-3",
        title: "",
        subtitle: "",
      },
    ],
    faqs: [
      {
        id: "faq-1",
        question: "How can we buy this course?",
        answer:
          "You can buy this course directly from our platform. After purchase, you will receive a certificate upon successful completion of all lessons and assessments.",
      },
      {
        id: "faq-2",
        question: "How can we buy this course?",
        answer:
          "You can buy this course directly from our platform. After purchase, you will receive a certificate upon successful completion of all lessons and assessments.",
      },
    ],
  },
};

export function getAdminCourseCreation(): AdminCourseCreationData {
  return adminCourseCreationData;
}
