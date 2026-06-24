import type {
  AdminWorkshopCreationData,
  AdminWorkshopCreationGeneralInfo,
} from "@/types/admin-workshop-creation.types";

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
    id: "teacher-darrell",
    name: "Darrell Steward",
    email: "guy@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Darrell%20Steward",
  },
];

const workshopSteps = [
  { id: "general-info" as const, label: "General Info" },
  { id: "workshop-schedule" as const, label: "Workshop Schedule" },
  { id: "meta-info" as const, label: "Meta Info" },
];

const formOptions = {
  courseCategories: [
    { value: "free", label: "Free" },
    { value: "job", label: "Job" },
    { value: "vocational", label: "Vocational" },
    { value: "skill-development", label: "Skill Development" },
  ],
  teachers,
  maxTeachersPerRole: 5,
};

export const adminWorkshopCreationData: AdminWorkshopCreationData = {
  steps: workshopSteps,
  generalInfo: {
    workshopTitle: "Foundations of User Experience (UX) Design",
    courseCategory: "skill-development",
    courseSummary: "",
    introVideoUrl: "",
    whatYouWillLearn: "",
    mainTeacherIds: ["teacher-abdullah", "teacher-guy", "teacher-darrell"],
  },
  formOptions,
};

function createEmptyAdminWorkshopCreationGeneralInfo(): AdminWorkshopCreationGeneralInfo {
  return {
    workshopTitle: "",
    courseCategory: "",
    courseSummary: "",
    introVideoUrl: "",
    whatYouWillLearn: "",
    mainTeacherIds: [],
  };
}

export function getAdminWorkshopCreation(): AdminWorkshopCreationData {
  return adminWorkshopCreationData;
}

export function getAdminWorkshopCreationNew(): AdminWorkshopCreationData {
  return {
    steps: workshopSteps,
    generalInfo: createEmptyAdminWorkshopCreationGeneralInfo(),
    formOptions,
  };
}
