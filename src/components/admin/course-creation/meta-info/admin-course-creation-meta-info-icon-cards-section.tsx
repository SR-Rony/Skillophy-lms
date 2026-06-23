"use client";

import { Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AdminCourseCreationMetaInfoSectionHeader } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-section-header";
import { AdminCourseCreationMetaInfoTemplateActions } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-template-actions";
import type { AdminCourseCreationMetaInfoTemplateMenuItem } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-template-menu";
import {
  adminCourseMetaInfoInputClassName,
  adminCourseMetaInfoRemoveButtonClassName,
  adminCourseMetaInfoSeamCardClassName,
  adminCourseMetaInfoTextareaClassName,
  createAdminCourseMetaId,
} from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";

export interface AdminCourseCreationMetaInfoIconCardItem {
  id: string;
  title: string;
  subtitle: string;
  templateId?: string;
}

interface AdminCourseCreationMetaInfoIconCardsSectionTemplateConfig {
  templates: AdminCourseCreationMetaInfoTemplateMenuItem[];
  selectedTemplateIds: string[];
  onToggleTemplate: (templateId: string, selected: boolean) => void;
}

interface AdminCourseCreationMetaInfoIconCardsSectionProps {
  sectionTitle: string;
  items: AdminCourseCreationMetaInfoIconCardItem[];
  icons: LucideIcon[];
  onChange: (items: AdminCourseCreationMetaInfoIconCardItem[]) => void;
  createIdPrefix: string;
  titleLabel?: string;
  subtitleLabel?: string;
  titlePlaceholder?: string;
  subtitlePlaceholder?: string;
  emptyTitlePlaceholder?: string;
  emptySubtitlePlaceholder?: string;
  titleMaxLength?: number;
  templateConfig?: AdminCourseCreationMetaInfoIconCardsSectionTemplateConfig;
}

function getIconForIndex(icons: LucideIcon[], index: number) {
  return icons[index % icons.length];
}

export function AdminCourseCreationMetaInfoIconCardsSection({
  sectionTitle,
  items,
  icons,
  onChange,
  createIdPrefix,
  titleLabel = "Title",
  subtitleLabel = "Subtitle",
  titlePlaceholder = "Enter title here",
  subtitlePlaceholder = "Enter subtitle here",
  emptyTitlePlaceholder = "Enter title here",
  emptySubtitlePlaceholder = "Enter subtitle here",
  titleMaxLength,
  templateConfig,
}: AdminCourseCreationMetaInfoIconCardsSectionProps) {
  function handleUpdate(id: string, updates: Partial<AdminCourseCreationMetaInfoIconCardItem>) {
    onChange(items.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  }

  function handleDelete(id: string) {
    onChange(items.filter((item) => item.id !== id));
  }

  function handleAddBlank() {
    onChange([
      ...items,
      { id: createAdminCourseMetaId(createIdPrefix), title: "", subtitle: "" },
    ]);
  }

  return (
    <section className="space-y-4 border-t border-[#f0f0f0] pt-8">
      <AdminCourseCreationMetaInfoSectionHeader title={sectionTitle} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {items.map((item, index) => {
          const Icon = getIconForIndex(icons, index);
          const isEmpty = !item.title.trim() && !item.subtitle.trim();

          return (
            <article key={item.id} className={adminCourseMetaInfoSeamCardClassName}>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className={adminCourseMetaInfoRemoveButtonClassName}
                aria-label={`Remove ${sectionTitle.toLowerCase()} item`}
              >
                <Minus className="h-3.5 w-3.5" aria-hidden />
              </button>

              <div className="flex gap-4 pr-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ebe8e6] bg-[#fafafa]">
                  <Icon className="h-5 w-5 text-[#757575]" aria-hidden />
                </span>

                <div className="min-w-0 flex-1 space-y-3">
                  <div className="space-y-2">
                    <label className="text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
                      {titleLabel}
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(event) => handleUpdate(item.id, { title: event.target.value })}
                      placeholder={isEmpty ? emptyTitlePlaceholder : titlePlaceholder}
                      maxLength={titleMaxLength}
                      className={adminCourseMetaInfoInputClassName}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
                      {subtitleLabel}
                    </label>
                    <textarea
                      value={item.subtitle}
                      onChange={(event) => handleUpdate(item.id, { subtitle: event.target.value })}
                      placeholder={isEmpty ? emptySubtitlePlaceholder : subtitlePlaceholder}
                      className={adminCourseMetaInfoTextareaClassName}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <AdminCourseCreationMetaInfoTemplateActions
        templates={templateConfig?.templates ?? []}
        selectedTemplateIds={templateConfig?.selectedTemplateIds ?? []}
        onToggleTemplate={templateConfig?.onToggleTemplate ?? (() => undefined)}
        onCreateFromBlank={handleAddBlank}
      />
    </section>
  );
}
