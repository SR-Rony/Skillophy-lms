"use client";

import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants";

interface MegaMenuCourseCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  onClick?: () => void;
}

export function MegaMenuCourseCard({
  id,
  title,
  image,
  category,
  onClick,
}: MegaMenuCourseCardProps) {
  return (
    <Link
      href={`${ROUTES.courses}?category=${category}&highlight=${id}`}
      onClick={onClick}
      className="group flex min-h-[72px] overflow-hidden rounded-[10px] border border-[#eee7e4] bg-white shadow-[0_10px_24px_rgba(35,25,22,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#f2c3c0] hover:shadow-[0_14px_28px_rgba(35,25,22,0.08)]"
    >
      <div className="relative h-[72px] w-[86px] shrink-0 overflow-hidden bg-gray-100 sm:w-[92px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="92px"
        />
      </div>
      <div className="flex min-w-0 flex-1 items-center px-4 py-3">
        <h3 className="line-clamp-2 text-[15px] font-black leading-snug tracking-[-0.02em] text-[#25201f]">
          {title}
        </h3>
      </div>
    </Link>
  );
}
