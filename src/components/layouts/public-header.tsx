"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/public/navbar";
import { PromoAlertBanner } from "@/components/public/course-details";

function isCourseDetailPage(pathname: string) {
  const match = pathname.match(/^\/courses\/([^/]+)$/);
  if (!match) return false;
  return match[1] !== "category";
}

/** Public site header — promo bar (course details) + navbar */
export function PublicHeader() {
  const pathname = usePathname();
  const showPromo = isCourseDetailPage(pathname);

  return (
    <header className="sticky top-0 z-50">
      {showPromo && <PromoAlertBanner />}
      <Navbar />
    </header>
  );
}
