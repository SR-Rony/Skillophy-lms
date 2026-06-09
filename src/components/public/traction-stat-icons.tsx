interface TractionStatIconProps {
  className?: string;
}

export function EmployeeStatIcon({ className }: TractionStatIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="20" cy="13" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M10 33c0-5.523 4.477-10 10-10s10 4.477 10 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="30" cy="14.5" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M34 28.5c-1.2-3.2-3.8-5-7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="10" cy="14.5" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 28.5c1.2-3.2 3.8-5 7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CollaboratorsStatIcon({ className }: TractionStatIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 18.5 20 12l8 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 16.5v14.5M24 16.5v14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 31h20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="20" cy="24" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 10.5 12 14.5M32 10.5 28 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VideoLessonsStatIcon({ className }: TractionStatIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="6"
        y="10"
        width="28"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m17 16 8 4-8 4V16Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 32h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CourseCompletionStatIcon({ className }: TractionStatIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M20 6.5 33 13v10c0 7.2-5.3 11.8-13 14.5C12.3 34.8 7 30.2 7 23V13l13-6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m14.5 20 4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
