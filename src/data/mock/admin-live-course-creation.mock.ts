import type {
  AdminCourseClassRoutine,
  AdminCourseClassRoutineSlot,
  AdminCourseCreationData,
} from "@/types/admin-course-creation.types";
import { createAdminCourseClassRoutineSlot } from "@/components/admin/course-creation/class-routine/admin-course-creation-class-routine.utils";
import { getAdminCourseCreation } from "@/data/mock/admin-course-creation.mock";

function createDefaultLiveClassRoutine(): AdminCourseClassRoutine {
  return {
    main: [createAdminCourseClassRoutineSlot({ id: "routine-main-1" })],
    support: [createAdminCourseClassRoutineSlot({ id: "routine-support-1" })],
  };
}

export function getAdminLiveCourseCreation(): AdminCourseCreationData {
  const recorded = getAdminCourseCreation();

  return {
    ...recorded,
    courseType: "live",
    batchNo: "1",
    steps: [
      { id: "general-info", label: "General Info" },
      { id: "class-routine", label: "Class Routine" },
      { id: "curriculum", label: "Curriculum" },
      { id: "meta-info", label: "Meta Info" },
    ],
    generalInfo: {
      ...recorded.generalInfo,
      courseSummary: "",
      introVideoUrl: "",
      courseOverview: "",
      whatYouWillLearn: "",
    },
    classRoutine: createDefaultLiveClassRoutine(),
    curriculum: recorded.curriculum,
  };
}
