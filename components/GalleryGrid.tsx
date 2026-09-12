"use client";

import { useState } from "react";
import { ArtworkCard } from "@/components/ArtworkCard";
import {
  artworks,
  galleryCategories,
  type GalleryCategory,
} from "@/data/artworks";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const visibleArtwork =
    activeCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

  return (
    <div className="gallery-browser">
      <div className="gallery-filters" role="group" aria-label="Filter artwork">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visibleArtwork.length} {visibleArtwork.length === 1 ? "artwork" : "artworks"}
      </p>

      <div className="gallery-grid">
        {visibleArtwork.map((artwork, index) => (
          <ArtworkCard
            artwork={artwork}
            className={`gallery-grid__item gallery-grid__item--${(index % 6) + 1}`}
            key={artwork.slug}
            priority={index < 2}
          />
        ))}
      </div>
    </div>
  );
}
