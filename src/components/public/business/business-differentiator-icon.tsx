import type { BusinessDifferentiatorIcon } from "@/components/public/business/data/business-differentiators.data";

interface BusinessDifferentiatorIconProps {
  type: BusinessDifferentiatorIcon;
  color: string;
  className?: string;
}

export function BusinessDifferentiatorIcon({
  type,
  color,
  className,
}: BusinessDifferentiatorIconProps) {
  const sharedProps = {
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className ?? "h-10 w-10",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "hexagon":
      return (
        <svg {...sharedProps}>
          <path
            d="M20 4.5 33.5 12.25V27.75L20 35.5 6.5 27.75V12.25L20 4.5Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="4.5" stroke={color} strokeWidth="1.8" />
        </svg>
      );
    case "chart":
      return (
        <svg {...sharedProps}>
          <path
            d="M7 30.5H33"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10.5 30.5V22M17 30.5V16.5M23.5 30.5V20M30 30.5V11"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10.5 22 17 16.5 23.5 20 30 11"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "building":
      return (
        <svg {...sharedProps}>
          <path
            d="M10 34V14.5L20 8.5 30 14.5V34"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 34V27.5H17.5V34M22.5 34V24H25.5V34M14.5 18.5H17.5M22.5 16H25.5M14.5 22.5H17.5M22.5 20H25.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pen":
      return (
        <svg {...sharedProps}>
          <path
            d="M28.5 8.5 31.5 11.5 14.5 28.5 9.5 30.5 11.5 25.5 28.5 8.5Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 12.5 27.5 15.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.5 30.5 11.5 25.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
