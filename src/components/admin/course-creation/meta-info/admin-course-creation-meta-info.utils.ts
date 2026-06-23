export const adminCourseMetaInfoInputClassName =
  "w-full rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:text-[15px]";

export const adminCourseMetaInfoTextareaClassName =
  "min-h-[88px] w-full resize-none rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:min-h-[96px] sm:text-[15px]";

export const adminCourseMetaInfoSeamCardClassName =
  "relative rounded-xl border border-[#ebe8e6] bg-white p-4 shadow-[0_4px_20px_rgba(35,25,22,0.03)] sm:p-5";

export const adminCourseMetaInfoActionButtonClassName =
  "inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[13px] font-semibold shadow-[0_4px_20px_rgba(35,25,22,0.03)] transition-colors hover:bg-[#fafafa] sm:px-5 sm:text-[14px]";

export const adminCourseMetaInfoAddButtonClassName =
  "flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#ebe8e6] bg-white px-4 py-3.5 text-[13px] font-semibold text-primary shadow-[0_4px_20px_rgba(35,25,22,0.03)] transition-colors hover:bg-[#fafafa] sm:text-[14px]";

export const adminCourseMetaInfoRemoveButtonClassName =
  "absolute -right-1 -top-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ebe8e6] bg-white text-[#757575] shadow-[0_2px_8px_rgba(35,25,22,0.08)] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a] sm:right-0 sm:top-0";

export function createAdminCourseMetaId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
