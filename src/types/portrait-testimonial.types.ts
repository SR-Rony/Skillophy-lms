export interface PortraitTestimonialData {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  body: string;
  name: string;
  role: string;
}

export interface PortraitTestimonialSectionProps extends PortraitTestimonialData {
  className?: string;
}
