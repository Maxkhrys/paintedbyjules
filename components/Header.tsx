"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = isOpen ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-logo" href="/" aria-label="Painted by Jules home">
          <BrandMark className="site-logo__mark" />
          <span className="site-logo__name">Painted by Jules</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="header-commission" href="/commissions#request">
          <span>Request a portrait</span>
          <ArrowUpRight />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={isOpen} aria-hidden={!isOpen}>
        <nav aria-label="Mobile navigation">
          {siteConfig.nav.map((item, index) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          className="mobile-menu__commission"
          href="/commissions#request"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        >
          Start a commission
          <ArrowUpRight />
        </Link>
        <p>Original artwork and portraits, painted by hand.</p>
      </div>
    </header>
  );
}
