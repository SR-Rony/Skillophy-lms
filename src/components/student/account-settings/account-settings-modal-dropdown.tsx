"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";

export interface AccountSettingsModalDropdownOption {
  value: string;
  label: string;
}

interface AccountSettingsModalDropdownProps {
  label: string;
  value: string;
  placeholder: string;
  options: AccountSettingsModalDropdownOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  listClassName?: string;
}

export function AccountSettingsModalDropdown({
  label,
  value,
  placeholder,
  options,
  onChange,
  disabled = false,
  className,
  listClassName,
}: AccountSettingsModalDropdownProps) {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function handleSelect(optionValue: string) {
    onChange(optionValue);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className={cn("relative min-w-0", className)}>
      <label
        htmlFor={menuId}
        className="mb-2 block text-[14px] font-semibold text-[#1a1a1a]"
      >
        {label}
      </label>

      <button
        type="button"
        id={menuId}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          if (!disabled) {
            setOpen((current) => !current);
          }
        }}
        className={cn(
          "flex h-12 w-full items-center justify-between gap-3 rounded-xl border border-[#ebe8e6] bg-white px-4 text-left shadow-[0_1px_2px_rgba(35,25,22,0.04)] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/15",
          disabled ? "cursor-not-allowed bg-[#fafafa] text-[#b0b7c3]" : "hover:border-[#e3deda]"
        )}
      >
        <span
          className={cn(
            "truncate text-[14px]",
            selectedLabel ? "font-medium text-[#1a1a1a]" : "text-[#b0b7c3]"
          )}
        >
          {selectedLabel ?? placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[#757575] transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          className={cn(
            "absolute left-0 right-0 top-[calc(100%+8px)] z-[70] max-h-[220px] overflow-y-auto rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.1)]",
            listClassName
          )}
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "flex w-full px-4 py-2.5 text-left text-[14px] transition-colors sm:px-5 sm:py-3",
                    isSelected
                      ? "bg-[#fde7e3] font-semibold text-[#1a1a1a]"
                      : "font-medium text-[#1a1a1a] hover:bg-[#fde7e3]/70"
                  )}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
