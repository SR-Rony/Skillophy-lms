import type { TestimonialSectionProps } from "@/types/testimonial.types";
import { homeTestimonials } from "@/components/public/data/home-testimonials.data";

export const affiliateTestimonialsData: TestimonialSectionProps = {
  label: "Testimonial",
  title: "What Our Affiliates Say",
  testimonials: homeTestimonials.slice(0, 3).map((testimonial) =>
    testimonial.id === "maisha-ferdous"
      ? {
          ...testimonial,
          quote:
            "Skillophy helped me gain on confidence, build a portfolio microcredential to share with prospective employers.",
        }
      : testimonial,
  ),
};
