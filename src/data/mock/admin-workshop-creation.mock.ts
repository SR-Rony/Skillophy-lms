import type {
  AdminWorkshopCreationData,
  AdminWorkshopCreationGeneralInfo,
  AdminWorkshopMetaInfo,
  AdminWorkshopSchedule,
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

function createDefaultWorkshopSchedule(): AdminWorkshopSchedule {
  return [{ id: "workshop-schedule-1", day: "sunday", time: "17:00" }];
}

const defaultWorkshopMetaInfo: AdminWorkshopMetaInfo = {
  requirements: [
    {
      id: "requirement-1",
      title: "Good Internet Connection",
      templateId: "req-internet",
    },
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Life Time Access",
      subtitle:
        "You will get life time access typically refers to a purchasing model where a customer pays once for a product or service and can use it indefinitely.",
      templateId: "benefit-lifetime-access",
    },
    {
      id: "benefit-2",
      title: "Money Back Guarantee",
      subtitle:
        "You will get life time access typically refers to a purchasing model where a customer pays once for a product or service and can use it indefinitely.",
      templateId: "benefit-money-back",
    },
    {
      id: "benefit-3",
      title: "",
      subtitle: "",
    },
  ],
};

function createEmptyWorkshopMetaInfo(): AdminWorkshopMetaInfo {
  return {
    requirements: [],
    benefits: [],
  };
}

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
  workshopSchedule: createDefaultWorkshopSchedule(),
  metaInfo: defaultWorkshopMetaInfo,
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
    workshopSchedule: createDefaultWorkshopSchedule(),
    metaInfo: createEmptyWorkshopMetaInfo(),
    formOptions,
  };
}
