import { termsPageData } from "@/components/public/terms/data/terms-page.data";

export function TermsIntro() {
  return (
    <div className="space-y-4">
      {termsPageData.intro.map((paragraph, index) => (
        <p
          key={paragraph}
          className={
            index === 0
              ? "text-[16px] font-semibold text-[#24201f] sm:text-[17px]"
              : "text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]"
          }
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
