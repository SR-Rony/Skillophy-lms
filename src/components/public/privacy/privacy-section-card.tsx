import { Heading } from "@/components/shared/heading";
import type { PrivacySection } from "@/components/public/privacy/data/privacy-page.data";

interface PrivacySectionCardProps {
  section: PrivacySection;
}

export function PrivacySectionCard({ section }: PrivacySectionCardProps) {
  return (
    <article
      id={section.id}
      className="scroll-mt-28 rounded-[16px] border border-[#ece6e3] bg-white p-6 shadow-[0_8px_24px_rgba(80,37,31,0.05)] sm:p-8 lg:p-10"
    >
      <Heading as="h2" variant="legal-section">
        {section.title}
      </Heading>

      <div className="mt-8 space-y-8">
        {section.subsections.map((subsection) => (
          <section key={subsection.heading} className="space-y-3">
            <Heading as="h3" variant="legal-subsection">
              {subsection.heading}
            </Heading>

            {subsection.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[14px] leading-[1.75] text-[#4b5563] sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}

            {subsection.bulletItems && (
              <ul className="list-disc space-y-2 pl-5">
                {subsection.bulletItems.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] leading-[1.75] text-[#4b5563] sm:text-[15px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
