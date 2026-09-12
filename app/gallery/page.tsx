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
    <main id="main-content" className="gallery-page page-shell">
      <header className="gallery-page__header">
        <h1>Work</h1>
        <div>
          <p>Portraits, personal pieces and original studies.</p>
        </div>
      </header>
      <GalleryGrid />
    </main>
  );
}
