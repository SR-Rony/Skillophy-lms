import { Heading } from "@/components/shared/heading";
import { comingSoonPageData } from "@/components/public/coming-soon/data/coming-soon.data";

export function ComingSoonHero() {
  return (
    <div className="text-center">
      <Heading as="h1" variant="page-hero-soft">
        {comingSoonPageData.title}
      </Heading>
      <p className="mt-4 text-[15px] leading-[1.7] text-[#6f6562] sm:text-[16px]">
        {comingSoonPageData.subtitle}
      </p>
    </div>
  );
}
