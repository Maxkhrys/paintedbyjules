type ArrowUpRightProps = {
  className?: string;
};

export function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M4 14 14 4M6 4h8v8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
