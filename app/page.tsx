import Image from "next/image";
import Link from "next/link";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { EditorialLink } from "@/components/EditorialLink";
import { commissionSteps } from "@/config/commissions";
import { getArtwork } from "@/data/artworks";

export default function HomePage() {
  const hero = getArtwork("still-here")!;
  const motherAndDaughter = getArtwork("mother-and-daughter")!;
  const quietCompany = getArtwork("quiet-company")!;
  const summerAfternoon = getArtwork("summer-afternoon")!;
  const afterTheDance = getArtwork("after-the-dance")!;
  const wildGarden = getArtwork("wild-garden")!;

  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__composition">
          <p className="home-hero__topline">Original works · Portraits from photographs</p>

          <h1 id="home-title" className="home-hero__title">
            <span>Painted</span>
            <span>by Jules</span>
          </h1>

          <figure className="home-hero__art">
            <Link href={`/gallery/${hero.slug}`} aria-label={`View ${hero.title}`}>
              <Image
                src={hero.images[0].src}
                alt={hero.images[0].alt}
                fill
                priority
                sizes="(max-width: 700px) 78vw, (max-width: 1100px) 48vw, 36vw"
              />
            </Link>
            <figcaption>
              <span>{hero.title}</span>
              <span>{hero.medium} · Preview study</span>
            </figcaption>
          </figure>

          <div className="home-hero__copy">
            <p>Portraits painted by hand from photographs you already love.</p>
            <EditorialLink href="/commissions#request">Commission a portrait</EditorialLink>
          </div>

          <Link className="home-hero__work-link" href="/gallery">
            Explore the catalogue
            <ArrowUpRight />
          </Link>

          <p className="home-hero__edition" aria-hidden="true">
            Studio collection · 2026
          </p>
        </div>
      </section>

      <section className="home-selected page-shell" aria-labelledby="selected-title">
        <div className="home-selected__intro">
          <h2 id="selected-title">Selected work</h2>
          <p>
            People, pets and original studies. Each piece begins with a subject worth looking at slowly.
          </p>
          <EditorialLink href="/gallery">View all work</EditorialLink>
        </div>

        <div className="home-selected__grid">
          <ArtworkCard artwork={motherAndDaughter} className="home-selected__family" />
          <ArtworkCard artwork={quietCompany} className="home-selected__pet" />
          <ArtworkCard artwork={summerAfternoon} className="home-selected__original" />
        </div>
      </section>

      <section className="home-commission" aria-labelledby="commission-intro-title">
        <div className="home-commission__image">
          <Image
            src={afterTheDance.images[0].src}
            alt={afterTheDance.images[0].alt}
            fill
            sizes="(max-width: 800px) 100vw, 58vw"
          />
          <span>Reference photograph → hand-painted piece</span>
        </div>
        <div className="home-commission__body">
          <p className="home-commission__number">One photograph is enough to begin.</p>
          <h2 id="commission-intro-title">Painted to be kept.</h2>
          <p>
            Send the photographs you keep coming back to. Jules will help choose the crop, composition and size before painting starts.
          </p>
          <EditorialLink href="/commissions" inverse>
            Read about commissions
          </EditorialLink>
        </div>
      </section>

      <section className="process-preview page-shell" aria-labelledby="process-title">
        <div className="process-preview__heading">
          <h2 id="process-title">From idea to finished piece</h2>
          <p>No mystery. Five clear stages, with the composition agreed before final work begins.</p>
        </div>
        <ol className="process-preview__list">
          {commissionSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <EditorialLink href="/commissions#process">See the full commission process</EditorialLink>
      </section>

      <section className="home-originals page-shell" aria-labelledby="originals-title">
        <div className="home-originals__heading">
          <h2 id="originals-title">Originals, one at a time.</h2>
          <p>Standalone work made outside commissions. Available pieces are marked in the catalogue.</p>
        </div>
        <div className="home-originals__work">
          <ArtworkCard artwork={wildGarden} />
          <div className="home-originals__aside">
            <ArtworkCard artwork={summerAfternoon} />
            <p>Colour lives in the artwork. Everything around it stays quiet.</p>
          </div>
        </div>
      </section>

      <section className="home-artist" aria-labelledby="artist-title">
        <div className="home-artist__portrait">
          <Image
            src="/artwork/jules-studio.svg"
            alt="Preview illustration showing a quiet artist studio with an easel"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
          />
          <span>Artist portrait and studio photography to be supplied</span>
        </div>
        <div className="home-artist__copy">
          <h2 id="artist-title">One artist. One process.</h2>
          <p>
            Every enquiry, composition and finished painting stays with Jules from start to finish. The result should feel recognisable, considered and made for one home.
          </p>
          <EditorialLink href="/about">Meet Jules</EditorialLink>
        </div>
      </section>

      <section className="home-closing" aria-labelledby="closing-title">
        <p>Start with a photograph.</p>
        <h2 id="closing-title">Who would you like painted?</h2>
        <Link href="/commissions#request">
          Request a commission
          <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
