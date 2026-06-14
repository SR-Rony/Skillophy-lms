"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";

export interface AccordionPanelItem {
  id: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionPanelProps {
  items: AccordionPanelItem[];
  allowMultiple?: boolean;
  className?: string;
  defaultOpenIds?: string[];
}

export function AccordionPanel({
  items,
  allowMultiple = false,
  className,
  defaultOpenIds,
}: AccordionPanelProps) {
  const initialOpenIds =
    defaultOpenIds ??
    items.filter((item) => item.defaultOpen).map((item) => item.id);
  const [openIds, setOpenIds] = useState<string[]>(initialOpenIds);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((current) =>
        current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
      );
      return;
    }

    setOpenIds((current) => (current.includes(id) ? [] : [id]));
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[16px] border border-[#ece6e3] bg-white",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className={cn(index > 0 && "border-t border-[#ece6e3]")}>
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className={cn(
                "flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 sm:py-6",
                isOpen
                  ? "border-l-4 border-primary bg-primary/5 pl-4 sm:pl-5"
                  : "border-l-4 border-transparent bg-white hover:bg-[#faf9f8]",
              )}
            >
              <div className="min-w-0 flex-1">
                <span className="block text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
                  {item.title}
                </span>
                {isOpen && <div className="mt-3">{item.content}</div>}
              </div>

              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                  isOpen
                    ? "bg-primary text-white shadow-[0_8px_18px] shadow-primary/24"
                    : "border border-[#e8e4e1] bg-[#f7f7f7] text-[#9a908c]",
                )}
                aria-hidden
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
