import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { BrandMark } from "@/components/BrandMark";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brush" aria-hidden="true">
        <svg viewBox="0 0 1440 76" preserveAspectRatio="none">
          <path d="M-20 49C247 4 506 5 759 38c219 29 452 28 701-18" />
          <path d="M-15 61c285-28 543-22 775 8 249 33 478 27 701-10" />
        </svg>
      </div>
      <div className="site-footer__inner">
        <div className="site-footer__opening">
          <p>A photograph in mind?</p>
          <Link href="/commissions#request">
            Tell Jules about it
            <ArrowUpRight />
          </Link>
        </div>

        <div className="site-footer__details">
          <Link className="site-footer__identity" href="/">
            <BrandMark />
            <span>Painted by Jules</span>
          </Link>
          <nav aria-label="Footer navigation">
            {siteConfig.nav.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="site-footer__note">Original works · Bespoke portraits</p>
          <p className="site-footer__copyright">© {new Date().getFullYear()} Painted by Jules</p>
        </div>
      </div>
    </footer>
  );
}
