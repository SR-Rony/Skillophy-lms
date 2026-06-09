"use client";

import { CtaBannerSection } from "@/components/public/cta-banner-section";
import { teacherCtaBannerData } from "@/components/public/teachers/data/teacher-cta-banner.data";
import { ROUTES } from "@/constants";

export function TeacherCtaBannerSection() {
  return (
    <CtaBannerSection {...teacherCtaBannerData} ctaHref={ROUTES.auth.register} />
  );
}
