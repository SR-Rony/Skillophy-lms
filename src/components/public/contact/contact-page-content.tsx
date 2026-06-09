import { CenteredPageHero } from "@/components/public/centered-page-hero";
import { ContactFormSection } from "@/components/public/contact/contact-form-section";
import { ContactMapSection } from "@/components/public/contact/contact-map-section";
import { contactPageHeroData } from "@/components/public/contact/data/contact-page-hero.data";

export function ContactPageContent() {
  return (
    <>
      <CenteredPageHero
        {...contactPageHeroData}
        descriptionClassName="max-w-[720px] leading-[1.7]"
      />
      <ContactFormSection />
      <ContactMapSection />
    </>
  );
}
