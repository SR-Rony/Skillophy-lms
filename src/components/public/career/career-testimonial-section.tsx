"use client";

import { PortraitTestimonialSection } from "@/components/public/portrait-testimonial-section";
import { careerTestimonialData } from "@/components/public/career/data/career-testimonial.data";

export function CareerTestimonialSection() {
  return <PortraitTestimonialSection {...careerTestimonialData} />;
}
