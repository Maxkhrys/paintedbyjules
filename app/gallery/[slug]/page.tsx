import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { ArtworkCard } from "@/components/ArtworkCard";
import { artworks, getArtwork } from "@/data/artworks";
import { formatPrice } from "@/lib/format-price";
import { getSiteUrl } from "@/lib/site-url";

type ArtworkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtwork(slug);

  if (!artwork) return {};

  return {
    title: artwork.seoTitle.replace(" | Painted by Jules", ""),
    description: artwork.seoDescription,
    alternates: { canonical: `/gallery/${artwork.slug}` },
    openGraph: {
      type: "article",
      title: artwork.seoTitle,
      description: artwork.seoDescription,
      url: `/gallery/${artwork.slug}`,
      images: [
        {
          url: artwork.images[0].src,
          width: artwork.images[0].width,
          height: artwork.images[0].height,
          alt: artwork.images[0].alt,
        },
      ],
    },
  };
}

function availabilityLabel(value: (typeof artworks)[number]["availability"]) {
  if (value === "available") return "Available";
  if (value === "sold") return "Sold";
  return "Commission example";
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  const related = artworks
    .filter((item) => item.slug !== artwork.slug && (item.category === artwork.category || item.type === artwork.type))
    .slice(0, 2);
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    artMedium: artwork.medium,
    artform: artwork.type === "original" ? "Painting" : "Commissioned portrait",
    dateCreated: artwork.year.toString(),
    image: artwork.images.map((image) => new URL(image.src, siteUrl).toString()),
    url: new URL(`/gallery/${artwork.slug}`, siteUrl).toString(),
    description: artwork.description,
    creator: { "@type": "Person", name: "Jules" },
  };

  return (
    <main id="main-content" className="artwork-page">
      <div className="artwork-page__back page-shell">
        <Link href="/gallery">← Back to work</Link>
      </div>

      <article className="artwork-detail page-shell">
        <div className="artwork-detail__images">
          {artwork.images.map((image, index) => (
            <figure key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 850px) 94vw, 62vw"
                priority={index === 0}
              />
              {artwork.placeholder ? <figcaption>Illustrative study · final artwork photography pending</figcaption> : null}
            </figure>
          ))}
        </div>

        <aside className="artwork-detail__catalogue">
          <p className="artwork-detail__index">Catalogue / {String(artworks.indexOf(artwork) + 1).padStart(2, "0")}</p>
          <h1>{artwork.title}</h1>
          <p className="artwork-detail__description">{artwork.description}</p>

          <dl>
            <div>
              <dt>Type</dt>
              <dd>{artwork.type === "original" ? "Original artwork" : "Bespoke portrait"}</dd>
            </div>
            <div>
              <dt>Medium</dt>
              <dd>{artwork.medium}</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>{artwork.dimensions}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{artwork.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{availabilityLabel(artwork.availability)}</dd>
            </div>
            {artwork.price ? (
              <div>
                <dt>Price</dt>
                <dd>{formatPrice(artwork.price)}</dd>
              </div>
            ) : null}
          </dl>

          <Link
            className="artwork-detail__cta"
            href={
              artwork.type === "original"
                ? `/contact?artwork=${encodeURIComponent(artwork.title)}`
                : `/commissions?reference=${encodeURIComponent(artwork.title)}#request`
            }
          >
            {artwork.type === "original" ? "Enquire about this piece" : "Commission something similar"}
            <ArrowUpRight />
          </Link>
        </aside>
      </article>

      {related.length ? (
        <section className="related-work page-shell" aria-labelledby="related-title">
          <h2 id="related-title">Keep looking</h2>
          <div>
            {related.map((item) => (
              <ArtworkCard artwork={item} key={item.slug} />
            ))}
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
