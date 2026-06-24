import {
  ADMIN_COURSE_BENEFIT_TEMPLATES,
  ADMIN_COURSE_FAQ_TEMPLATES,
  ADMIN_COURSE_REQUIREMENT_TEMPLATES,
} from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-templates";
import type { AdminTemplate, AdminTemplateForm, AdminTemplateTypeId } from "@/types/admin-template-management.types";

const defaultFaqTemplate = ADMIN_COURSE_FAQ_TEMPLATES[0];
const defaultBenefitTemplate = ADMIN_COURSE_BENEFIT_TEMPLATES[0];
const defaultRequirementTemplate = ADMIN_COURSE_REQUIREMENT_TEMPLATES[0];

function getTodayIsoDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function createAdminTemplateId() {
  return `template-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function createAdminTemplateFormForType(type: AdminTemplateTypeId = "faq"): AdminTemplateForm {
  if (type === "what-youll-get") {
    return {
      type,
      question: "",
      answer: "",
      title: defaultBenefitTemplate.title,
      subtitle: defaultBenefitTemplate.subtitle.slice(0, 100),
      iconId: "infinity",
      iconFileName: null,
    };
  }

  if (type === "requirement") {
    return {
      type,
      question: "",
      answer: "",
      title: defaultRequirementTemplate.title,
      subtitle: "",
      iconId: "globe",
      iconFileName: null,
    };
  }

  return {
    type: "faq",
    question: defaultFaqTemplate.question,
    answer: defaultFaqTemplate.answer,
    title: "",
    subtitle: "",
    iconId: "circle-dollar-sign",
    iconFileName: null,
  };
}

export function createDefaultAdminTemplateForm() {
  return createAdminTemplateFormForType("faq");
}

export function isAdminTemplateFormValid(form: AdminTemplateForm) {
  if (form.type === "faq") {
    return form.question.trim().length > 0 && form.answer.trim().length > 0;
  }

  if (form.type === "what-youll-get") {
    return form.title.trim().length > 0 && form.subtitle.trim().length > 0;
  }

  return form.title.trim().length > 0;
}

export function adminTemplateFormToTemplate(form: AdminTemplateForm, id: string): AdminTemplate {
  const name =
    form.type === "faq" ? form.question.trim() : form.title.trim();

  return {
    id,
    name,
    type: form.type,
    updatedAt: getTodayIsoDate(),
    iconId: form.iconId,
  };
}

export const adminTemplateDrawerTypeOptions: Array<{
  id: AdminTemplateTypeId;
  label: string;
}> = [
  { id: "faq", label: "FAQ" },
  { id: "what-youll-get", label: "What You'll Get" },
  { id: "requirement", label: "Requirement" },
];
