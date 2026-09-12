import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { ArtworkCard } from "@/components/ArtworkCard";
import { EditorialLink } from "@/components/EditorialLink";
import { commissionSteps } from "@/config/commissions";
import { getArtwork } from "@/data/artworks";
import { formatPrice } from "@/lib/format-price";

export default function HomePage() {
  const softHours = getArtwork("soft-hours")!;
  const afterlight = getArtwork("afterlight")!;
  const garden = getArtwork("garden-at-eleven")!;
  const sundaySilk = getArtwork("sunday-silk")!;
  const blueMorning = getArtwork("blue-before-morning")!;
  const wildPeonies = getArtwork("wild-peonies")!;
  const lowTide = getArtwork("low-tide")!;
  const sheKeptTheLight = getArtwork("she-kept-the-light")!;
  const twoOfUs = getArtwork("two-of-us")!;
  const quietCompany = getArtwork("quiet-company")!;
  const firstDance = getArtwork("first-dance")!;
  const redRoom = getArtwork("the-red-room")!;

  return (
    <main id="main-content" className="home-page">
      <section className="salon-hero" aria-labelledby="home-title">
        <div className="salon-hero__ceiling" aria-hidden="true" />
        <p className="salon-hero__room-code">Private viewing / Collection I</p>

        <div className="salon-hero__gallery">
          <figure className="salon-hero__work salon-hero__work--left">
            <Image
              src={afterlight.images[0].src}
              alt={afterlight.images[0].alt}
              fill
              priority
              sizes="22vw"
            />
          </figure>

          <figure className="salon-hero__work salon-hero__work--centre">
            <Link href={`/gallery/${softHours.slug}`} aria-label={`View ${softHours.title}`}>
              <Image
                src={softHours.images[0].src}
                alt={softHours.images[0].alt}
                fill
                priority
                sizes="(max-width: 760px) 78vw, 38vw"
              />
              <figcaption>
                <span>No. 01 / {softHours.title}</span>
                <span>{softHours.price ? formatPrice(softHours.price) : "Private enquiry"}</span>
              </figcaption>
            </Link>
          </figure>

          <figure className="salon-hero__work salon-hero__work--right">
            <Image
              src={garden.images[0].src}
              alt={garden.images[0].alt}
              fill
              priority
              sizes="22vw"
            />
          </figure>
        </div>

        <div className="salon-hero__identity">
          <h1 id="home-title">
            <span>Painted by</span>
            <span>Jules</span>
          </h1>
          <p>Original paintings and portrait commissions, made slowly by one hand.</p>
        </div>

        <Link className="salon-hero__entry" href="/gallery">
          Enter the viewing room
          <ArrowUpRight />
        </Link>

        <p className="salon-hero__edition" aria-hidden="true">
          Twelve works · 2026
        </p>
      </section>

      <section className="home-register page-shell" aria-labelledby="register-title">
        <div className="home-register__ledger">
          <p><span>12</span> works in the current viewing</p>
          <p><span>06</span> original works</p>
          <p><span>06</span> portrait studies</p>
          <p><span>I</span> inaugural collection</p>
        </div>

        <header className="home-register__introduction">
          <h2 id="register-title">Paintings with a private life.</h2>
          <div>
            <p>
              Figures, rooms, flowers and coastlines held in a restrained palette,
              with the surface left alive.
            </p>
            <EditorialLink href="/gallery">View the complete collection</EditorialLink>
          </div>
        </header>

        <div className="home-register__works">
          <ArtworkCard artwork={sundaySilk} />
          <ArtworkCard artwork={blueMorning} />
          <ArtworkCard artwork={wildPeonies} />
          <ArtworkCard artwork={lowTide} />
        </div>
      </section>

      <section className="commission-salon" aria-labelledby="commission-salon-title">
        <div className="commission-salon__heading page-shell">
          <h2 id="commission-salon-title">A photograph, translated into paint.</h2>
          <div>
            <p>
              Jules works from the images you already return to: the unguarded
              expression, the familiar posture, the moment between poses.
            </p>
            <EditorialLink href="/commissions" inverse>
              Explore private commissions
            </EditorialLink>
          </div>
        </div>

        <div className="commission-salon__wall page-shell">
          {[sheKeptTheLight, twoOfUs, quietCompany, firstDance].map((artwork, index) => (
            <Link
              className="commission-salon__portrait"
              href={`/gallery/${artwork.slug}`}
              key={artwork.slug}
            >
              <span>0{index + 1}</span>
              <Image
                src={artwork.images[0].src}
                alt={artwork.images[0].alt}
                fill
                sizes="(max-width: 720px) 78vw, 23vw"
              />
              <strong>{artwork.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-process page-shell" aria-labelledby="home-process-title">
        <div className="home-process__statement">
          <p>From photograph</p>
          <h2 id="home-process-title">to painted object.</h2>
        </div>
        <ol>
          {commissionSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-studio" aria-labelledby="studio-title">
        <div className="home-studio__image">
          <Image
            src={redRoom.images[0].src}
            alt={redRoom.images[0].alt}
            fill
            sizes="(max-width: 800px) 100vw, 58vw"
          />
        </div>
        <div className="home-studio__copy">
          <p>Painted by Jules / Independent practice</p>
          <h2 id="studio-title">A small studio with a serious eye.</h2>
          <span>
            Every enquiry, composition and finished painting stays with Jules from
            the first photograph to the final surface.
          </span>
          <EditorialLink href="/about">Meet the artist</EditorialLink>
        </div>
      </section>
    </main>
  );
}
