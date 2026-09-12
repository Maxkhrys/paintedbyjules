import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__portal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="site-footer__inner page-shell">
        <div className="site-footer__invitation">
          <p>Commissions / 2026</p>
          <h2>Begin with one photograph.</h2>
          <Link href="/commissions#request">
            Request a private commission
            <ArrowUpRight />
          </Link>
        </div>

        <div className="site-footer__register">
          <Link className="site-footer__identity" href="/">
            <strong>Painted by Jules</strong>
            <span>Independent painting practice</span>
          </Link>

          <nav aria-label="Footer navigation">
            {siteConfig.nav.map((item, index) => (
              <Link href={item.href} key={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__colophon">
            <p>Original works · Portrait commissions</p>
            <p>© {new Date().getFullYear()} Painted by Jules</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
