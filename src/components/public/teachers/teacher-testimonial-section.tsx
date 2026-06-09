"use client";

import { PortraitTestimonialSection } from "@/components/public/portrait-testimonial-section";
import { teacherTestimonialData } from "@/components/public/teachers/data/teacher-testimonial.data";

export function TeacherTestimonialSection() {
  return <PortraitTestimonialSection {...teacherTestimonialData} />;
}
