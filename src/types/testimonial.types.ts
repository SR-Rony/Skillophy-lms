import type { ReactNode } from "react";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface TestimonialSectionProps {
  label?: string;
  title?: ReactNode;
  testimonials?: Testimonial[];
  className?: string;
}
