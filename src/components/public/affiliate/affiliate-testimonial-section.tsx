"use client";

import { TestimonialSection } from "@/components/public/testimonial-section";
import { affiliateTestimonialsData } from "@/components/public/affiliate/data/affiliate-testimonials.data";

export function AffiliateTestimonialSection() {
  return <TestimonialSection {...affiliateTestimonialsData} />;
}
