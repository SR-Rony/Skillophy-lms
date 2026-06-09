import Image from "next/image";
import { maintenancePageData } from "@/components/public/maintenance/data/maintenance-page.data";

function MaintenanceIllustration() {
  const { imageSrc, imageAlt, imageWidth, imageHeight } = maintenancePageData;

  return (
    <div className="relative mx-auto flex w-full max-w-[420px] justify-center px-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        priority
        unoptimized
        className="h-auto w-full max-w-[360px] object-contain drop-shadow-[0_18px_40px_rgba(80,37,31,0.08)] sm:max-w-[400px]"
      />
    </div>
  );
}

export { MaintenanceIllustration };
