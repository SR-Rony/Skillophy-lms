import type { TeacherDifferentiatorIcon } from "@/components/public/teachers/data/teacher-differentiators.data";

interface TeacherDifferentiatorIconProps {
  type: TeacherDifferentiatorIcon;
  color: string;
  className?: string;
}

export function TeacherDifferentiatorIcon({
  type,
  color,
  className,
}: TeacherDifferentiatorIconProps) {
  const sharedProps = {
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className ?? "h-10 w-10",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "clock":
      return (
        <svg {...sharedProps}>
          <rect
            x="5"
            y="7"
            width="30"
            height="26"
            rx="5"
            stroke={color}
            strokeWidth="1.8"
          />
          <text
            x="20"
            y="24"
            textAnchor="middle"
            fill={color}
            fontSize="11"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            1:01
          </text>
        </svg>
      );
    case "students":
      return (
        <svg {...sharedProps}>
          <circle cx="20" cy="12" r="4.5" stroke={color} strokeWidth="1.8" />
          <path
            d="M20 17.5c-5 0-8 2.2-8 5.5v2h16v-2c0-3.3-3-5.5-8-5.5Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="14" r="3.5" stroke={color} strokeWidth="1.6" />
          <path
            d="M10 18.5c-3.8 0-6 1.8-6 4.2v1.8h5"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="30" cy="14" r="3.5" stroke={color} strokeWidth="1.6" />
          <path
            d="M30 18.5c3.8 0 6 1.8 6 4.2v1.8h-5"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "quill":
      return (
        <svg {...sharedProps}>
          <rect
            x="6"
            y="6"
            width="28"
            height="28"
            rx="6"
            stroke={color}
            strokeWidth="1.8"
          />
          <path
            d="M26 10 30 14 16 28 10 30 12 24 26 10Z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M22 14 26 18"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M10 30 12 24"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
