interface TrustedClientLogoProps {
  id: string;
  className?: string;
}

export function TrustedClientLogo({ id, className }: TrustedClientLogoProps) {
  const sharedClass = className ?? "h-7 w-auto sm:h-8";

  switch (id) {
    case "box":
      return (
        <svg
          viewBox="0 0 72 28"
          fill="currentColor"
          className={sharedClass}
          aria-hidden="true"
        >
          <text
            x="0"
            y="22"
            fontSize="24"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            box
          </text>
        </svg>
      );
    case "eventbrite":
      return (
        <svg
          viewBox="0 0 132 28"
          fill="currentColor"
          className={sharedClass}
          aria-hidden="true"
        >
          <text
            x="0"
            y="22"
            fontSize="22"
            fontWeight="600"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            eventbrite
          </text>
        </svg>
      );
    case "vimeo":
      return (
        <svg
          viewBox="0 0 88 28"
          fill="currentColor"
          className={sharedClass}
          aria-hidden="true"
        >
          <text
            x="0"
            y="22"
            fontSize="26"
            fontStyle="italic"
            fontWeight="500"
            fontFamily="Georgia, 'Times New Roman', serif"
          >
            vimeo
          </text>
        </svg>
      );
    case "nasdaq":
      return (
        <svg
          viewBox="0 0 132 32"
          fill="currentColor"
          className={sharedClass}
          aria-hidden="true"
        >
          <path d="M4 4h10.5l7.8 16.2L30.1 4H40v24H31V11.8L23.4 28h-5.8L9.9 11.8V28H4V4z" />
          <text
            x="46"
            y="23"
            fontSize="20"
            fontWeight="600"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            Nasdaq
          </text>
        </svg>
      );
    case "netapp":
      return (
        <svg
          viewBox="0 0 132 32"
          fill="currentColor"
          className={sharedClass}
          aria-hidden="true"
        >
          <rect x="2" y="6" width="20" height="20" rx="2" />
          <text
            x="8"
            y="21"
            fill="white"
            fontSize="14"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            n
          </text>
          <text
            x="30"
            y="23"
            fontSize="20"
            fontWeight="600"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            NetApp
          </text>
        </svg>
      );
    case "samsung":
      return (
        <svg
          viewBox="0 0 132 36"
          fill="none"
          stroke="currentColor"
          className={sharedClass}
          aria-hidden="true"
        >
          <ellipse cx="66" cy="18" rx="62" ry="14" strokeWidth="2.5" />
          <text
            x="66"
            y="23"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            fontSize="13"
            fontWeight="700"
            letterSpacing="0.18em"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            SAMSUNG
          </text>
        </svg>
      );
    default:
      return null;
  }
}
