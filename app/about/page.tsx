import type { Metadata } from "next";
import Image from "next/image";
import { EditorialLink } from "@/components/EditorialLink";
import { getArtwork } from "@/data/artworks";

export const metadata: Metadata = {
  title: "About Jules",
  description:
    "Meet Jules and learn about the personal, photograph-led process behind Painted by Jules.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const softHours = getArtwork("soft-hours")!;
  const afterlight = getArtwork("afterlight")!;
  const redRoom = getArtwork("the-red-room")!;

  return (
    <main id="main-content" className="about-page">
      <section className="about-opening page-shell" aria-labelledby="about-title">
        <p className="about-opening__register">Jules / Artist &amp; founder</p>
        <h1 id="about-title">Painted by one hand. Chosen for one home.</h1>
        <figure className="about-opening__work">
          <Image
            src={softHours.images[0].src}
            alt={softHours.images[0].alt}
            fill
            priority
            sizes="(max-width: 760px) 94vw, 48vw"
          />
        </figure>
        <p className="about-opening__intro">
          Painted by Jules is an independent practice for original work and
          commissioned portraits. Every piece stays close to one conversation,
          one subject and one pair of hands.
        </p>
      </section>

      <section className="about-manifesto" aria-labelledby="manifesto-title">
        <div className="about-manifesto__image">
          <Image
            src={afterlight.images[0].src}
            alt={afterlight.images[0].alt}
            fill
            sizes="(max-width: 800px) 100vw, 54vw"
          />
        </div>
        <div className="about-manifesto__copy">
          <h2 id="manifesto-title">Look longer. Edit harder. Keep the brush visible.</h2>
          <p>
            Painting is not a copy of every pixel. Jules begins with the photographs
            people already value, then decides what deserves clarity and what can
            dissolve into colour.
          </p>
          <p>
            The finished piece should feel unmistakably like its subject while still
            showing how it was made.
          </p>
        </div>
      </section>

      <section className="about-practice page-shell" aria-labelledby="practice-title">
        <div className="about-practice__heading">
          <h2 id="practice-title">The practice, kept personal.</h2>
          <p>
            A young studio can still hold itself to a serious standard: clear
            communication, exacting composition and no distance between the client
            and the artist.
          </p>
        </div>
        <div className="about-practice__principles">
          <article>
            <span>01</span>
            <h3>One point of contact</h3>
            <p>Jules handles the enquiry, the composition and the painting herself.</p>
          </article>
          <article>
            <span>02</span>
            <h3>References with meaning</h3>
            <p>The best starting image is often the honest one, not the formal one.</p>
          </article>
          <article>
            <span>03</span>
            <h3>A surface with life</h3>
            <p>Edges stay loose, revisions remain visible and the paint is allowed to be paint.</p>
          </article>
        </div>
      </section>

      <section className="about-architecture">
        <Image
          src={redRoom.images[0].src}
          alt={redRoom.images[0].alt}
          fill
          sizes="100vw"
        />
        <div>
          <p>Have someone in mind?</p>
          <EditorialLink href="/commissions#request" inverse>
            Begin a private commission
          </EditorialLink>
        </div>
      </section>
    </main>
  );
}
