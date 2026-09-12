import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/data/artworks";
import { formatPrice } from "@/lib/format-price";

type ArtworkCardProps = {
  artwork: Artwork;
  className?: string;
  priority?: boolean;
};

function availabilityLabel(artwork: Artwork) {
  if (artwork.type === "commission-example") return "Commission example";
  if (artwork.availability === "available" && artwork.price) return formatPrice(artwork.price);
  if (artwork.availability === "sold") return "Sold";
  return "Original work";
}

export function ArtworkCard({ artwork, className = "", priority = false }: ArtworkCardProps) {
  const image = artwork.images[0];

  return (
    <article className={`artwork-card artwork-card--${artwork.layout} ${className}`.trim()}>
      <Link href={`/gallery/${artwork.slug}`} aria-label={`View ${artwork.title}`}>
        <div className="artwork-card__image">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 38vw"
            priority={priority}
          />
          {artwork.placeholder ? <span className="artwork-card__preview">Preview study</span> : null}
        </div>
        <div className="artwork-card__meta">
          <div>
            <h3>{artwork.title}</h3>
            <p>{artwork.medium}</p>
          </div>
          <p>{availabilityLabel(artwork)}</p>
        </div>
      </Link>
    </article>
  );
}
