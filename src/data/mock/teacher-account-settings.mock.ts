import type { TeacherAccountSettingsPageData } from "@/types/teacher-account-settings.types";
import { studentAccountSettingsDemo } from "@/data/mock/student-account-settings.mock";

export function getTeacherAccountSettingsPageData(): TeacherAccountSettingsPageData {
  return {
    profile: {
      fullName: "Maisha Afrose",
      role: "Teacher",
      phone: "016254789546",
      email: "maisha@gmail.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&fit=crop",
    },
    stats: {
      totalEarnings: 102400,
      totalCourses: 5,
      ongoingCourses: 2,
    },
    tabs: [
      { id: "profile-info", label: "Profile Info" },
      { id: "more", label: "More" },
    ],
    generalInfo: {
      fullName: "Maisha Afrose",
      role: "Teacher",
      status: "Active",
      email: "maisha@gmail.com",
      phone: "016254789546",
      gender: "Female",
      age: "38",
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description:
        "I am a dedicated English language instructor with over 10 years of experience helping students improve their communication skills. I specialize in spoken English, grammar, and IELTS preparation.\n\nMy teaching approach focuses on practical learning, interactive sessions, and personalized feedback so every student can build confidence and achieve their goals.",
    },
    roleOptions: [
      { value: "Teacher", label: "Teacher" },
      { value: "Instructor", label: "Instructor" },
      { value: "Mentor", label: "Mentor" },
    ],
    statusOptions: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
    ],
    genderOptions: [
      { value: "Female", label: "Female" },
      { value: "Male", label: "Male" },
      { value: "Other", label: "Other" },
    ],
    countryOptions: [
      { value: "Bangladesh", label: "Bangladesh" },
      { value: "India", label: "India" },
      { value: "United States", label: "United States" },
      { value: "United Kingdom", label: "United Kingdom" },
    ],
    educationData: {
      education: [
        {
          id: "education-1",
          title: "BA, MA (English), University of Dhaka",
          dateRange: "February 2012 - February 2016",
          description:
            "Completed undergraduate and postgraduate studies in English literature and language, with a focus on linguistics, academic writing, and teaching methodology.",
        },
        {
          id: "education-2",
          title: "MSC in English at University of Oxford (UK)",
          dateRange: "February 2017 - February 2019",
          description: "",
        },
      ],
      courses: [
        {
          id: "course-1",
          title: "IELTS Score: 8.5",
          dateRange: "February 2019 - February 2020",
          status: "completed",
          certificateUrl: "#",
        },
      ],
      skills: ["Digital Marketing", "SEO", "Spoken English", "English Grammer"],
      interestedAreas: ["Photography", "Travelling", "Reading"],
    },
    educationFormOptions: studentAccountSettingsDemo.educationFormOptions,
    courseFormOptions: studentAccountSettingsDemo.courseFormOptions,
    skillsFormOptions: {
      ...studentAccountSettingsDemo.skillsFormOptions,
      availableSkills: [
        "Digital Marketing",
        "SEO",
        "Spoken English",
        "English Grammer",
        "IELTS Preparation",
        "Content Writing",
        "Public Speaking",
        "Grammar",
      ],
    },
  };
}
