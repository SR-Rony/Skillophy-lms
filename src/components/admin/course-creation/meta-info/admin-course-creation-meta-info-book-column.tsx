"use client";

import { Trash2 } from "lucide-react";
import { AdminCourseCreationMetaInfoAddButton } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-add-button";
import { AdminCourseCreationMetaInfoCheckbox } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-checkbox";
import { createAdminCourseMetaId } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import type { AdminCourseMetaBookItem } from "@/types/admin-course-creation.types";

interface AdminCourseCreationMetaInfoBookColumnProps {
  title: string;
  addLabel: string;
  items: AdminCourseMetaBookItem[];
  onChange: (items: AdminCourseMetaBookItem[]) => void;
  onAddClick?: () => void;
}

export function AdminCourseCreationMetaInfoBookColumn({
  title,
  addLabel,
  items,
  onChange,
  onAddClick,
}: AdminCourseCreationMetaInfoBookColumnProps) {
  function handleToggleFree(id: string, isFreeDownloadable: boolean) {
    onChange(
      items.map((item) => (item.id === id ? { ...item, isFreeDownloadable } : item))
    );
  }

  function handleDelete(id: string) {
    onChange(items.filter((item) => item.id !== id));
  }

  function handleAdd() {
    onChange([
      ...items,
      {
        id: createAdminCourseMetaId("book"),
        title: "New book title",
        subtitle: "By Author name",
        isFreeDownloadable: false,
      },
    ]);
  }

  return (
    <div className="space-y-4">
      <h3 className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">{title}</h3>

      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-xl border border-[#ebe8e6] bg-white shadow-[0_4px_20px_rgba(35,25,22,0.03)]"
          >
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">{item.title}</p>
              <p className="mt-1 text-[12px] text-[#9ca3af] sm:text-[13px]">{item.subtitle}</p>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-[#f0f0f0] px-4 py-3 sm:px-5">
              <AdminCourseCreationMetaInfoCheckbox
                checked={item.isFreeDownloadable}
                label="Make this free downloadable"
                onChange={(checked) => handleToggleFree(item.id, checked)}
              />

              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
                aria-label={`Delete ${item.title}`}
              >
                <Trash2 className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </article>
        ))}
      </div>

      <AdminCourseCreationMetaInfoAddButton onClick={onAddClick ?? handleAdd}>
        {addLabel}
      </AdminCourseCreationMetaInfoAddButton>
    </div>
  );
}
