"use client";

import { useEffect, useState } from "react";
import type { BlogTableOfContentsItem } from "@/types/blog-detail.types";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

interface BlogDetailsTableOfContentsProps {
  items: BlogTableOfContentsItem[];
}

export function BlogDetailsTableOfContents({ items }: BlogDetailsTableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [items]);

  return (
    <nav
      aria-label="Table of contents"
      className="overflow-hidden rounded-[12px] border border-[#E5E7EB] bg-white"
    >
      <Heading
        as="h3"
        variant="card-title-xs"
        className="border-b border-[#E5E7EB] px-5 py-4 font-sans text-[16px] text-[#111827]"
      >
        Table of Contents
      </Heading>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="border-b border-[#E5E7EB] last:border-b-0">
            <a
              href={`#${item.id}`}
              className={cn(
                "block px-5 py-3.5 font-sans text-[14px] font-medium leading-snug transition",
                activeId === item.id
                  ? "border-b-2 border-[#FF5247] bg-[#FFF5F2] text-[#4B5563]"
                  : "text-[#888888] hover:bg-[#FAFAFA] hover:text-[#111827]"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
