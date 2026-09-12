import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";

type EditorialLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
};

export function EditorialLink({
  href,
  children,
  className = "",
  inverse = false,
}: EditorialLinkProps) {
  return (
    <Link
      className={`editorial-link${inverse ? " editorial-link--inverse" : ""} ${className}`.trim()}
      href={href}
    >
      <span>{children}</span>
      <ArrowUpRight />
    </Link>
  );
}
