type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M17 8v48M17 12h13c11 0 17 5 17 14S41 40 30 40H17"
        stroke="currentColor"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 34v11c0 7-4 11-11 11-4 0-7-1-10-4"
        stroke="currentColor"
        strokeWidth="3.25"
        strokeLinecap="round"
      />
      <path
        d="M48 11c3 3 4 6 3 10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
