"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { AdminCategory } from "@/types/admin-category-management.types";

interface AdminDeleteCategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: AdminCategory | null;
  onConfirm?: (category: AdminCategory) => void;
}

export function AdminDeleteCategoryModal({
  open,
  onOpenChange,
  category,
  onConfirm,
}: AdminDeleteCategoryModalProps) {
  function handleConfirm() {
    if (!category) {
      return;
    }

    onConfirm?.(category);
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="teacher-center-modal-overlay fixed inset-0 z-[60] bg-black/60" />

        <Dialog.Content className="teacher-center-modal-panel fixed left-1/2 top-1/2 z-[60] w-[calc(100%-2rem)] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
              Delete Category
            </Dialog.Title>

            <Dialog.Close
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f7f7f6] hover:text-[#1a1a1a]"
              aria-label="Close delete category modal"
            >
              <X className="h-5 w-5" aria-hidden />
            </Dialog.Close>
          </div>

          <Dialog.Description asChild>
            <p className="mt-5 text-[14px] leading-relaxed text-[#6b7280] sm:mt-6 sm:text-[15px]">
              Are you sure you want to delete{" "}
              <span className="font-bold text-[#1a1a1a]">
                {category?.name ?? "this category"}
              </span>
              ?
            </p>
          </Dialog.Description>

          <div className="mt-7 sm:mt-8">
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!category}
              className="inline-flex min-w-[120px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:text-[15px]"
            >
              Delete
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
