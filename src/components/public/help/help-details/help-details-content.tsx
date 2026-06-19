import { Heading } from "@/components/shared/heading";
import Link from "next/link";
import type { HelpArticleDetail } from "@/components/public/help/help-details/data/help-details.data";

interface HelpDetailsContentProps {
  article: HelpArticleDetail;
}

export function HelpDetailsContent({ article }: HelpDetailsContentProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {article.intro.map((paragraph) => (
          <p key={paragraph} className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
            {paragraph}
          </p>
        ))}

        {article.additionalResources.length > 0 && (
          <div className="pt-1">
            <p className="text-[14px] font-semibold text-[#24201f] sm:text-[15px]">
              Additional resources:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {article.additionalResources.map((resource) => (
                <li key={resource.label}>
                  <Link
                    href={resource.href}
                    className="text-[14px] text-primary underline-offset-2 hover:underline sm:text-[15px]"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <article className="rounded-[16px] border border-[#ece6e3] bg-white p-6 shadow-[0_8px_24px_rgba(80,37,31,0.05)] sm:p-8">
        <div className="space-y-10">
          {article.sections.map((section) => (
            <section key={section.id} className="space-y-4">
              <Heading as="h2" variant="help-section">
                {section.heading}
              </Heading>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}

              {section.bulletItems && (
                <ul className="list-disc space-y-2.5 pl-5">
                  {section.bulletItems.map((item) => (
                    <li
                      key={item}
                      className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.numberedItems && (
                <ol className="list-decimal space-y-2.5 pl-5">
                  {section.numberedItems.map((item) => (
                    <li
                      key={item}
                      className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]"
                    >
                      {item}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>
      </article>

      <section className="rounded-[16px] border border-[#ece6e3] bg-white p-6 shadow-[0_8px_24px_rgba(80,37,31,0.05)] sm:p-8">
        <Heading as="h2" variant="help-section">
          {article.nextSteps.heading}
        </Heading>
        <p className="mt-3 text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
          {article.nextSteps.body}
        </p>
      </section>
    </div>
  );
}
