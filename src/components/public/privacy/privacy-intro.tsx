import { privacyPageData } from "@/components/public/privacy/data/privacy-page.data";

export function PrivacyIntro() {
  return (
    <div className="space-y-4">
      {privacyPageData.intro.map((paragraph) => (
        <p key={paragraph} className="text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
