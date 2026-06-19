import { Heading } from "@/components/shared/heading";
import { termsPageData } from "@/components/public/terms/data/terms-page.data";

export function TermsHeader() {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <Heading as="h1" variant="page-title">
        {termsPageData.title}
      </Heading>
      <p className="shrink-0 text-[13px] text-[#9a908c] sm:pt-2 sm:text-[14px]">
        Last updated: {termsPageData.lastUpdated}
      </p>
    </header>
  );
}
