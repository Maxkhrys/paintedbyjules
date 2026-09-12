import Image from "next/image";
import Link from "next/link";
import { artworks, type Artwork } from "@/data/artworks";
import { formatPrice } from "@/lib/format-price";
import { ArrowUpRight } from "@/components/ArrowUpRight";

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
  const catalogueNumber = String(artworks.findIndex((item) => item.slug === artwork.slug) + 1).padStart(2, "0");

  return (
    <article
      className={`artwork-card artwork-card--${artwork.layout} ${className}`.trim()}
      data-availability={artwork.availability}
    >
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
          <span className="artwork-card__enter" aria-hidden="true">
            View work
            <ArrowUpRight />
          </span>
        </div>
        <div className="artwork-card__meta">
          <p className="artwork-card__index">No. {catalogueNumber}</p>
          <div className="artwork-card__title">
            <h3>{artwork.title}</h3>
            <p>{availabilityLabel(artwork)}</p>
          </div>
          <p className="artwork-card__medium">{artwork.medium}</p>
        </div>
      </Link>
    </article>
  );
}
