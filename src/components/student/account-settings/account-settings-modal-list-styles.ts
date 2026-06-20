export const accountSettingsModalListClassName =
  "max-h-[240px] overflow-y-auto overscroll-contain [scrollbar-color:#c4c4c4_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c4c4c4] hover:[&::-webkit-scrollbar-thumb]:bg-[#a3a3a3]";

export const accountSettingsModalListItemClassName =
  "flex w-full items-center px-5 py-3.5 text-left text-[14px] leading-snug transition-colors sm:text-[15px]";

export function getAccountSettingsModalListItemStateClassName(isActive: boolean) {
  return isActive
    ? "bg-[#fde7e3] font-semibold text-[#1a1a1a]"
    : "font-medium text-[#1a1a1a] hover:bg-[#faf7f6] active:bg-[#fde7e3]/80";
}
