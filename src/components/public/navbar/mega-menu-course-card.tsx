"use client";

import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants";

interface MegaMenuCourseCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
}

export function MegaMenuCourseCard({ id, title, image, category }: MegaMenuCourseCardProps) {
  return (
    <Link
      href={`${ROUTES.courses}?category=${category}&highlight=${id}`}
      className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-xs capitalize text-gray-500">{category.replace("-", " ")}</p>
      </div>
    </Link>
  );
}
