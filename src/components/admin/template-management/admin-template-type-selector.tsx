"use client";

import type { AdminTemplateTypeId } from "@/types/admin-template-management.types";
import { cn } from "@/utils";

interface AdminTemplateTypeSelectorProps {
  selectedType: AdminTemplateTypeId;
  onChange: (type: AdminTemplateTypeId) => void;
}

function FaqWireframe() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="h-2 w-3/4 rounded bg-[#e5e7eb]" />
      <div className="h-2 w-full rounded bg-[#e5e7eb]" />
      <div className="h-2 w-5/6 rounded bg-[#e5e7eb]" />
      <div className="mt-auto h-2 w-2/3 rounded bg-[#e5e7eb]" />
    </div>
  );
}

function BenefitWireframe() {
  return (
    <div className="flex h-full gap-2 p-3">
      <div className="h-10 w-10 shrink-0 rounded-lg border border-dashed border-[#d1d5db] bg-[#f9fafb]" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="h-2 w-3/4 rounded bg-[#e5e7eb]" />
        <div className="h-2 w-full rounded bg-[#e5e7eb]" />
        <div className="h-2 w-5/6 rounded bg-[#e5e7eb]" />
      </div>
    </div>
  );
}

function RequirementWireframe() {
  return (
    <div className="flex h-full gap-2 p-3">
      <div className="h-10 w-10 shrink-0 rounded-lg border border-dashed border-[#d1d5db] bg-[#f9fafb]" />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
        <div className="h-2 w-3/4 rounded bg-[#e5e7eb]" />
        <div className="h-2 w-1/2 rounded bg-[#e5e7eb]" />
      </div>
    </div>
  );
}

const typeCards: Array<{
  id: AdminTemplateTypeId;
  label: string;
  Wireframe: () => React.JSX.Element;
}> = [
  { id: "faq", label: "FAQ", Wireframe: FaqWireframe },
  { id: "what-youll-get", label: "What You'll Get", Wireframe: BenefitWireframe },
  { id: "requirement", label: "Requirement", Wireframe: RequirementWireframe },
];

export function AdminTemplateTypeSelector({
  selectedType,
  onChange,
}: AdminTemplateTypeSelectorProps) {
  return (
    <div className="space-y-3">
      <p className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">Select Template Type</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {typeCards.map(({ id, label, Wireframe }) => {
          const isSelected = selectedType === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={cn(
                "overflow-hidden rounded-xl border text-left transition-colors",
                isSelected
                  ? "border-primary bg-[#fff5f5] shadow-[0_0_0_1px_rgba(255,71,71,0.15)]"
                  : "border-[#ebe8e6] bg-white hover:border-[#d1d5db] hover:bg-[#fafafa]"
              )}
            >
              <div className="h-[92px] border-b border-[#f0f0f0] bg-white">
                <Wireframe />
              </div>
              <div className="px-3 py-2.5">
                <span
                  className={cn(
                    "text-[13px] font-semibold sm:text-[14px]",
                    isSelected ? "text-primary" : "text-[#1a1a1a]"
                  )}
                >
                  {label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
