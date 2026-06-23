import type { AdminCourseCreationData } from "@/types/admin-course-creation.types";

const teachers = [
  {
    id: "teacher-abdullah",
    name: "Abdullah Mamun",
    email: "abdullah.mamun@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
  },
  {
    id: "teacher-guy",
    name: "Guy Hawkins",
    email: "guy.hawkins@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Guy%20Hawkins",
  },
  {
    id: "teacher-darrell",
    name: "Darrell Steward",
    email: "darrell.steward@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Darrell%20Steward",
  },
  {
    id: "teacher-maisha",
    name: "Maisha Afrose",
    email: "maisha@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
  },
  {
    id: "teacher-kathryn",
    name: "Kathryn Murphy",
    email: "kathryn@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn%20Murphy",
  },
  {
    id: "teacher-brooklyn",
    name: "Brooklyn Simmons",
    email: "brooklyn.simmons@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Brooklyn%20Simmons",
  },
];

export const adminCourseCreationData: AdminCourseCreationData = {
  steps: [
    { id: "general-info", label: "General Info" },
    { id: "curriculum", label: "Curriculum" },
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
};

export function getAdminCourseCreation(): AdminCourseCreationData {
  return adminCourseCreationData;
}
