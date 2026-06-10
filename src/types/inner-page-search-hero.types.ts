export interface InnerPageSearchHeroProps {
  label: string;
  title: string;
  description: string;
  searchPlaceholder: string;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
  searchAriaLabel?: string;
  scrollTargetId?: string;
  className?: string;
  showLabel?: boolean;
  showDescription?: boolean;
}
