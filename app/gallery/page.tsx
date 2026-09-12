import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Artwork",
  description:
    "Explore original artwork and bespoke portrait commission examples by Painted by Jules.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="gallery-page">
      <header className="gallery-page__header page-shell">
        <p>Collection I / 2026</p>
        <div className="gallery-page__title">
          <h1>
            <span>The private</span>
            <em>collection.</em>
          </h1>
          <p>
            Twelve original works and commissioned studies. Each catalogue entry
            records its story, surface, scale and availability.
          </p>
        </div>
        <dl>
          <div><dt>Works</dt><dd>12</dd></div>
          <div><dt>Available</dt><dd>05</dd></div>
          <div><dt>Studio</dt><dd>Independent</dd></div>
        </dl>
      </header>
      <div className="page-shell">
        <GalleryGrid />
      </div>
    </main>
  );
}
