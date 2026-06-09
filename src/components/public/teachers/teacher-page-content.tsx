import { TeacherCtaBannerSection } from "@/components/public/teachers/teacher-cta-banner-section";
import { FeatureHighlightSection } from "@/components/public/feature-highlight-section";
import { teacherFeatureHighlightData } from "@/components/public/teachers/data/teacher-feature-highlight.data";
import { TeacherFaqSection } from "@/components/public/teachers/teacher-faq-section";
import { TeacherHowItWorksSection } from "@/components/public/teachers/teacher-how-it-works-section";
import { TeacherPageHero } from "@/components/public/teachers/teacher-page-hero";
import { TeacherTestimonialSection } from "@/components/public/teachers/teacher-testimonial-section";
import { TeacherTrustedClientsSection } from "@/components/public/teachers/teacher-trusted-clients-section";

export function TeacherPageContent() {
  return (
    <>
      <TeacherPageHero />
      <TeacherTrustedClientsSection />
      <FeatureHighlightSection {...teacherFeatureHighlightData} />
      <TeacherHowItWorksSection />
      <TeacherTestimonialSection />
      <TeacherFaqSection />
      <TeacherCtaBannerSection />
    </>
  );
}
