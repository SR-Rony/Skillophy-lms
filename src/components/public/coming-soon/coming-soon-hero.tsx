import { comingSoonPageData } from "@/components/public/coming-soon/data/coming-soon.data";

export function ComingSoonHero() {
  return (
    <div className="text-center">
      <h1 className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#24201f] sm:text-[40px] lg:text-[48px]">
        {comingSoonPageData.title}
      </h1>
      <p className="mt-4 text-[15px] leading-[1.7] text-[#6f6562] sm:text-[16px]">
        {comingSoonPageData.subtitle}
      </p>
    </div>
  );
}
