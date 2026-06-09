export interface TrustedClientLogoItem {
  id: string;
  name: string;
}

export interface TrustedClientsSectionData {
  title: string;
  logos: TrustedClientLogoItem[];
}

export interface TrustedClientsSectionProps {
  data?: TrustedClientsSectionData;
  className?: string;
}
