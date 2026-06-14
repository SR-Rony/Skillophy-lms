import { termsPageData } from "@/components/public/terms/data/terms-page.data";

export function TermsHeader() {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <h1 className="text-[28px] font-bold leading-tight text-[#24201f] sm:text-[34px] lg:text-[40px]">
        {termsPageData.title}
      </h1>
      <p className="shrink-0 text-[13px] text-[#9a908c] sm:pt-2 sm:text-[14px]">
        Last updated: {termsPageData.lastUpdated}
      </p>
    </header>
  );
}
