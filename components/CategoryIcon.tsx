type IconProps = {
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <circle cx="24" cy="24" r="17" />
      <path d="M24 14v10l7 5" />
      <path d="M24 5.5v3M24 39.5v3M5.5 24h3M39.5 24h3" />
    </svg>
  );
}

export function KeychainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <circle cx="16" cy="14" r="7.5" />
      <path d="M21 19l16 16" />
      <path d="M31 29l5-5M35 33l5-5" />
    </svg>
  );
}

export function FrameIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="8" y="7" width="32" height="34" rx="2" />
      <rect x="13.5" y="12.5" width="21" height="23" rx="1" />
      <circle cx="20" cy="20" r="2.4" />
      <path d="M14.5 30l6-6 5 5 4-4 8 8" />
    </svg>
  );
}

export function NameplateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="6" y="16" width="36" height="16" rx="3" />
      <path d="M13 24h22" />
      <path d="M16 32c-1 3-1 5 .5 7M32 32c1 3 1 5-.5 7" />
    </svg>
  );
}

export function CoasterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <circle cx="24" cy="24" r="15.5" />
      <path d="M12 22c4 3 8-3 12 0s8-3 12 0" />
      <path d="M13 30c4 2 8-2 12 0s8-2 10 0" />
    </svg>
  );
}

export function TrayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M6 26h36l-4 13H10z" />
      <ellipse cx="24" cy="26" rx="18" ry="6" />
      <circle cx="24" cy="17" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="19" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="29" cy="19" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
