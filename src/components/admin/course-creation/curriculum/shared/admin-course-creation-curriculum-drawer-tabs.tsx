import { cn } from "@/utils";

interface AdminCourseCreationCurriculumDrawerTab {
  id: string;
  label: string;
}

interface AdminCourseCreationCurriculumDrawerTabsProps<T extends string> {
  tabs: AdminCourseCreationCurriculumDrawerTab[];
  activeTabId: T;
  onChange: (tabId: T) => void;
}

export function AdminCourseCreationCurriculumDrawerTabs<T extends string>({
  tabs,
  activeTabId,
  onChange,
}: AdminCourseCreationCurriculumDrawerTabsProps<T>) {
  return (
    <div className="border-b border-[#f0f0f0]">
      <div className="flex gap-6 sm:gap-8">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id as T)}
              className={cn(
                "-mb-px border-b-2 pb-3 text-[13px] font-semibold transition-colors sm:text-[14px]",
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-[#1a1a1a] hover:text-[#757575]"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
